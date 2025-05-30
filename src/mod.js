"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
const Mass_ModApi_1 = require("./Mass_ModApi");
const path_1 = __importDefault(require("path"));
//Item template file
const itemTemplate = require("../ZLR_GRAU/templates/item_template.json");
class MainLoader {
    mod = "Massivesoft-Guns";
    beforeLoadHbList = [];
    beforeLoadItemList = [];
    logger;
    preSptModLoader;
    ThisModPath;
    FileSystem;
    db;
    mydb;
    jsonUtil;
    MassModApi;
    databaseServer;
    preSptLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        this.preSptModLoader = container.resolve("PreSptModLoader");
        this.ThisModPath = this.preSptModLoader.getModPath(this.mod);
        this.FileSystem = container.resolve("FileSystem");
    }
    async postDBLoad(container) {
        this.logger.debug(`[${this.mod}] Delayed Loading...`);
        this.databaseServer = container.resolve("DatabaseServer");
        this.jsonUtil = container.resolve("JsonUtil");
        this.MassModApi = new Mass_ModApi_1.Mass_ModApi(container);
        this.MassModApi.initMod(this.ThisModPath);
        this.db = this.databaseServer.getTables();
        const configPath = path_1.default.join(this.ThisModPath, "modWeapons.json");
        if (!this.FileSystem.exists(configPath)) {
            this.logger.error(`[${this.mod}] modWeapons.json not found!`);
            return;
        }
        const weaponConfig = await this.jsonUtil.deserialize(await this.FileSystem.read(configPath));
        const enabledWeapons = [];
        for (const weaponKey in weaponConfig) {
            const weaponData = weaponConfig[weaponKey];
            if (weaponData._enabled) {
                this.logger.log(`[${this.mod}] Enabling weapon: ${weaponData._name || weaponKey}`, "cyan");
                enabledWeapons.push(weaponKey);
            }
            else {
                this.logger.log(`[${this.mod}] Skipping disabled weapon: ${weaponData._name || weaponKey}`, "yellow");
            }
        }
        await this.loadComponetList(container, enabledWeapons);
    }
    postSptLoad(_container) {
        return;
    }
    compareAndReplace(originalItem, attributesToChange) {
        for (const key in attributesToChange) {
            const value = attributesToChange[key];
            if (["boolean", "string", "number"].includes(typeof value) || Array.isArray(value)) {
                if (key in originalItem) {
                    originalItem[key] = value;
                }
                else {
                    this.logger.warning(`(Item: ${originalItem._id}) WARNING: Could not find the attribute: "${key}"`);
                    originalItem[key] = value;
                }
            }
            else {
                originalItem[key] = this.compareAndReplace(originalItem[key], value);
            }
        }
        return originalItem;
    }
    getFilters(item) {
        const template = this.db.templates.items[item]._props;
        const slots = template.Slots ?? [];
        const chambers = template.Chambers ?? [];
        const cartridges = template.Cartridges ?? [];
        const filters = [...slots, ...chambers, ...cartridges];
        const conflictingItems = template.ConflictingItems ?? [];
        return [filters, conflictingItems];
    }
    checkItem(itemToCheck) {
        //A very basic top-level check of an item to make sure it has the proper attributes
        //Also convert to ITemplateItem to avoid errors
        let pass = true;
        //First make sure it has the top-level 5 entries needed for an item
        for (const level1 in itemTemplate) {
            if (!(level1 in itemToCheck.item)) {
                this.logger.error("ERROR - Missing attribute: \"" + level1 + "\" in your item entry!");
                pass = false;
            }
        }
        //Then make sure the attributes in _props exist in the item template, warn user if not.
        for (const prop in itemToCheck.item._props) {
            if (!(prop in itemTemplate._props))
                this.logger.warning("WARNING - Attribute: \"" + prop + "\" not found in item template!");
        }
        const itemOUT = {
            "_id": itemToCheck.item._id,
            "_name": itemToCheck.item._name,
            "_parent": itemToCheck.item._parent,
            "_props": itemToCheck.item._props,
            "_type": itemToCheck.item._type,
            "_proto": itemToCheck.item._proto
        };
        return [pass, itemOUT];
    }
    cloneItem(itemToClone, ID) {
        //If the item is enabled in the json
        if (this.mydb.items[ID].enable == true) {
            //Get a clone of the original item from the database
            let ItemOut = this.jsonUtil.clone(this.db.templates.items[itemToClone]);
            //Change the necessary item attributes using the info in our database file items.json
            ItemOut._id = ID;
            ItemOut = this.compareAndReplace(ItemOut, this.mydb.items[ID]["item"]);
            //Add the new item to the database
            this.db.templates.items[ID] = ItemOut;
            this.logger.debug("Item " + ID + " created as a clone of " + itemToClone + " and added to database.");
            //Create the handbook entry for the items
            const handbookEntry = {
                "Id": ID,
                "ParentId": this.mydb.items[ID]["handbook"]["ParentId"],
                "Price": this.mydb.items[ID]["handbook"]["Price"]
            };
            //Add the handbook entry to the database
            this.db.templates.handbook.Items.push(handbookEntry);
            this.logger.debug("Item " + ID + " added to handbook with price " + handbookEntry.Price);
        }
    }
    createItem(itemToCreate) {
        //Create an item from scratch instead of cloning it
        //Requires properly formatted entry in items.json with NO "clone" attribute
        //Get the new item object from the json
        const newItem = this.mydb.items[itemToCreate];
        //If the item is enabled in the json
        if (newItem.enable) {
            //Check the structure of the new item in items
            const [pass, checkedItem] = this.checkItem(newItem);
            if (!pass)
                return;
            //Add the new item to the database
            this.db.templates.items[itemToCreate] = checkedItem;
            this.logger.debug("Item " + itemToCreate + " created and added to database.");
            //Create the handbook entry for the items
            const handbookEntry = {
                "Id": itemToCreate,
                "ParentId": newItem["handbook"]["ParentId"],
                "Price": newItem["handbook"]["Price"]
            };
            //Add the handbook entry to the database
            this.db.templates.handbook.Items.push(handbookEntry);
            this.logger.debug("Item " + itemToCreate + " added to handbook with price " + handbookEntry.Price);
        }
    }
    addLocales(ID, Item, Article) {
        const name = ID + " Name";
        const shortname = ID + " ShortName";
        const description = ID + " Description";
        const isItem = typeof Item !== "undefined";
        const Entry = isItem ? Item : Article;
        for (const localeID in this.db.locales.global) //For each possible locale/language in SPT's database
         {
            let localeEntry;
            if (Entry.locales) {
                if (localeID in Entry.locales) //If the language is entered in items, use that
                 {
                    localeEntry = {
                        "Name": Entry.locales[localeID].Name,
                        "ShortName": Entry.locales[localeID].ShortName,
                        "Description": Entry.locales[localeID].Description
                    };
                }
                else //Otherwise use english as the default
                 {
                    localeEntry = {
                        "Name": Entry.locales.en.Name,
                        "ShortName": Entry.locales.en.ShortName,
                        "Description": Entry.locales.en.Description
                    };
                }
                this.db.locales.global[localeID][name] = localeEntry.Name;
                this.db.locales.global[localeID][shortname] = localeEntry.ShortName;
                this.db.locales.global[localeID][description] = localeEntry.Description;
            }
            else {
                if (isItem)
                    this.logger.warning("WARNING: Missing locale entry for item: " + ID);
                else
                    this.logger.debug("No locale entries for item/clothing: " + ID);
            }
            //Also add the necessary preset locale entries if they exist
            if (isItem && Item.presets) {
                for (const preset in Item.presets) {
                    this.db.locales.global[localeID][preset] = Item.presets[preset];
                }
            }
        }
    }
    copyToFilters(itemClone, ID, enableCompats = true, enableConflicts = true) {
        //Find the original item in all compatible and conflict filters and add the clone to those filters as well
        //Will skip one or both depending on the enable parameters
        for (const item in this.db.templates.items) {
            if (item in this.mydb.items)
                continue;
            const [filters, conflictingItems] = this.getFilters(item);
            if (enableCompats) {
                for (const filter of filters) {
                    for (const id of filter._props.filters[0].Filter) {
                        if (id === itemClone)
                            filter._props.filters[0].Filter.push(ID);
                    }
                }
            }
            if (enableConflicts)
                for (const conflictID of conflictingItems)
                    if (conflictID === itemClone)
                        conflictingItems.push(ID);
        }
    }
    async loadZLRGRAU(container) {
        const logger = container.resolve("WinstonLogger");
        const jsonUtil = container.resolve("JsonUtil");
        const modFolderName = "ZLR_GRAU";
        //Trader IDs
        const traders = {
            "mechanic": "5a7c2eca46aef81a7ca2145d"
        };
        const trader = "5a7c2eca46aef81a7ca2145d";
        this.db = this.databaseServer.getTables();
        this.mydb = await jsonUtil.deserialize(await this.FileSystem.read(path_1.default.join(this.ThisModPath, modFolderName, "database", "items.json")));
        console.log(this.mydb.items);
        // Ensure base structure exists
        if (!this.mydb.traders) {
            this.mydb.traders = {};
        }
        if (!this.mydb.traders[trader]) {
            this.mydb.traders[trader] = {};
        }
        if (!this.mydb.traders[trader].assort) {
            this.mydb.traders[trader].assort = {
                items: [],
                barter_scheme: {},
                loyal_level_items: {}
            };
        }
        const assortData = await jsonUtil.deserialize(await this.FileSystem.read(path_1.default.join(this.ThisModPath, modFolderName, "database", "traders", trader, "assort.json")));
        // Assign the contents directly into this.mydb.traders[trader].assort
        this.mydb.traders[trader].assort = assortData[trader].assort;
        //Items
        for (const [ID, Item] of Object.entries(this.mydb.items)) {
            //Items + Handbook
            if (Item.enable) {
                if ("clone" in Item) {
                    this.cloneItem(Item.clone, ID);
                    this.copyToFilters(Item.clone, ID, Item.enableCloneCompats, Item.enableCloneConflicts);
                }
                else
                    this.createItem(ID);
                //Locales (Languages)
                this.addLocales(ID, Item);
                this.weaponAddtoShelf(ID, Item);
                //Trades
                //this.addTrades(ID, Item, traders, currencies);
            }
        }
        this.logger.debug(modFolderName + " items and handbook finished");
        for (const ID in this.mydb) {
            if (this.mydb[ID].enable) {
                this.addToFilters(ID);
            }
        }
        for (const trader in traders) {
            this.addTraderAssort(traders[trader]);
            this.addTraderSuits(traders[trader]);
        }
        logger.debug(`${modFolderName} loading complete.`);
    }
    async loadComponetList(container, componentList) {
        const BundleLoader = container.resolve("BundleLoader");
        for (const componentName of componentList) {
            const scriptDir = path_1.default.resolve(this.ThisModPath, "src", "scripts", componentName);
            const scriptFile = path_1.default.join(scriptDir, `${componentName}.js`);
            //if (componentName === "ZLR_GRAU") {
            //    await this.loadZLRGRAU(container);
            //    continue;
            //}
            if (this.FileSystem.exists(scriptFile)) {
                try {
                    const { default: ModJs } = await Promise.resolve(`${scriptFile}`).then(s => __importStar(require(s)));
                    const ModInst = new ModJs(container, this.MassModApi);
                    ModInst.onLoadMod();
                }
                catch (err) {
                    this.logger.error(`Failed to load script for ${componentName}: ${err.message}`);
                }
            }
            else {
                this.logger.log(`No script found for ${componentName}`, "magenta");
            }
            const bundlePath = path_1.default.join(this.ThisModPath, componentName, "bundles.json");
            if (this.FileSystem.exists(bundlePath)) {
                BundleLoader.addBundles(`${this.ThisModPath}/${componentName}/`);
            }
        }
    }
    weaponAddtoShelf(ID, Item) {
        const shelfs = [
            "64381b582bb1c5dedd0fc925",
            "64381b6e44b37a080d0245b9",
            "6401c7b213d9b818bf0e7dd7"
        ];
        if ("isweapon" in Item) {
            for (let x in shelfs) {
                if (!this.db.templates.items[shelfs[x]]._props.Grids[0]._props.filters[0].Filter.includes(ID)) {
                    this.db.templates.items[shelfs[x]]._props.Grids[0]._props.filters[0].Filter.push(ID);
                }
            }
        }
    }
    addToFilters(ID) {
        //Add a new item to compatibility & conflict filters of pre-existing items
        //Add additional compatible and conflicting items to new item filters (manually adding more than the ones that were cloned)
        const NewItem = this.mydb.items[ID];
        //If the item is enabled in the json
        if (NewItem.enable) {
            this.logger.debug("addToFilters: " + ID);
            //Manually add items into an THISMOD item's filters
            if ("addToThisItemsFilters" in NewItem) {
                const ItemFilters = this.getFilters(ID)[0];
                let ConflictingItems = this.getFilters(ID)[1];
                for (const modSlotName in NewItem.addToThisItemsFilters) {
                    if (modSlotName === "conflicts")
                        ConflictingItems = ConflictingItems.concat(NewItem.addToThisItemsFilters.conflicts);
                    else {
                        for (const filter in ItemFilters) {
                            if (modSlotName === ItemFilters[filter]._name) {
                                const slotFilter = ItemFilters[filter]._props.filters[0].Filter;
                                const newFilter = slotFilter.concat(NewItem.addToThisItemsFilters[modSlotName]);
                                ItemFilters[filter]._props.filters[0].Filter = newFilter;
                            }
                        }
                    }
                }
            }
            //Manually add THISMOD items to pre-existing item filters.
            if ("addToExistingItemFilters" in NewItem) {
                for (const modSlotName in NewItem.addToExistingItemFilters) {
                    if (modSlotName === "conflicts") {
                        for (const conflictingItem of NewItem.addToExistingItemFilters[modSlotName]) {
                            const conflictingItems = this.getFilters(conflictingItem)[1];
                            conflictingItems.push(ID);
                        }
                    }
                    else {
                        for (const compatibleItem of NewItem.addToExistingItemFilters[modSlotName]) {
                            const filters = this.getFilters(compatibleItem)[0];
                            for (const filter of filters) {
                                if (modSlotName === filter._name)
                                    filter._props.filters[0].Filter.push(ID);
                            }
                        }
                    }
                }
            }
        }
    }
    addTraderAssort(trader) {
        console.log(this.mydb.traders[trader].assort.items);
        //Items
        for (const item in this.mydb.traders[trader].assort.items) {
            //this.logger.debug(item + " added to " + trader);
            this.db.traders[trader].assort.items.push(this.mydb.traders[trader].assort.items[item]);
            //Barter Scheme
            for (const item in this.mydb.traders[trader].assort.barter_scheme) {
                //this.logger.debug(item + " added to " + trader);
                this.db.traders[trader].assort.barter_scheme[item] = this.mydb.traders[trader].assort.barter_scheme[item];
            }
            //Loyalty Levels
            for (const item in this.mydb.traders[trader].assort.loyal_level_items) {
                //this.logger.debug(item + " added to " + trader);
                this.db.traders[trader].assort.loyal_level_items[item] = this.mydb.traders[trader].assort.loyal_level_items[item];
            }
        }
    }
    addTraderSuits(trader) {
        //Only do anything if a suits.json file is included for trader in this mod
        if (typeof this.mydb.traders[trader].suits !== "undefined") {
            //Enable customization for that trader
            this.db.traders[trader].base.customization_seller = true;
            //Create the suits array if it doesn't already exist in SPT database so we can push to it
            if (typeof this.db.traders[trader].suits === "undefined")
                this.db.traders[trader].suits = [];
            //Push all suits
            for (const suit of this.mydb.traders[trader].suits)
                this.db.traders[trader].suits.push(suit);
        }
    }
}
exports.mod = new MainLoader();
//# sourceMappingURL=mod.js.map