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
//Item template file
const itemTemplate = require("../ZLR_GRAU/templates/item_template.json");
const path_1 = __importDefault(require("path"));
class MainLoader {
    mod = "Massivesoft-Guns";
    beforeLoadHbList = [];
    beforeLoadItemList = [];
    logger;
    preSptModLoader;
    ThisModPath;
    FileSystem;
    db;
    jsonUtil;
    MassModApi;
    databaseServer;
    modConfig;
    items;
    globals;
    traders;
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
    async loadComponetList(container, componentList) {
        const BundleLoader = container.resolve("BundleLoader");
        for (const componentName of componentList) {
            const scriptDir = path_1.default.resolve(this.ThisModPath, "src", "scripts", componentName);
            const scriptFile = path_1.default.join(scriptDir, `${componentName}.js`);
            if (componentName === "ZLR_GRAU") {
                await this.loadZLRGRAU(container);
                continue;
            }
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
            //console.log(bundlePath);
            if (this.FileSystem.exists(bundlePath)) {
                BundleLoader.addBundles(`${this.ThisModPath}/${componentName}/`);
            }
        }
    }
    async loadZLRGRAU(container) {
        const modFolderName = "ZLR_GRAU";
        const modFullName = "ZLR_GRAU_RIFLE";
        const modPath = path_1.default.join(this.ThisModPath, modFolderName);
        const databaseImporter = container.resolve("ImporterUtil");
        const BundleLoader = container.resolve("BundleLoader");
        const mechanicId = "5a7c2eca46aef81a7ca2145d";
        //this.logger.info(`Loading: ${modFullName} by Saintdeeer & MassiveSoft, Updated by AmightyTank`);
        // Load JSON files
        //this.logger.info("here 1", "green")
        this.items = await this.jsonUtil.deserialize(await this.FileSystem.read(path_1.default.join(modPath, "database", "items.json")));
        this.traders = await this.jsonUtil.deserialize(await this.FileSystem.read(path_1.default.join(modPath, "database", "traders.json")));
        //this.logger.info("here 2", "green")
        this.modConfig = await this.jsonUtil.deserialize(await this.FileSystem.read(path_1.default.join(modPath, "config.json")));
        //this.logger.info("here 3", "green")
        // Process items
        for (const [id, item] of Object.entries(this.items.items)) {
            if (!item.enable)
                continue;
            if ("clone" in item) {
                this.cloneItem(item.clone, id);
                this.copyToFilters(item.clone, id, item.enableCloneCompats, item.enableCloneConflicts);
            }
            else {
                this.createItem(id);
            }
            this.addLocales(id, item);
            this.weaponAddtoShelf(id, item);
        }
        //this.logger.info("here 4", "green")
        //Item Filters
        for (const ID in this.items.items)
            if (this.items.items[ID].enable)
                this.addToFilters(ID);
        this.logger.debug(modFolderName + " item filters finished");
        //this.logger.info("here 5", "green")
        // Presets
        for (const ID in this.items.items) {
            if (this.items.items[ID].enable)
                if (this.items.items[ID].addweaponpreset) {
                    const presets = this.items.items[ID].weaponpresets;
                    for (let y in presets) {
                        this.MassModApi.addPreset(presets[y]);
                    }
                }
        }
        //this.logger.info("here 6", "green")
        // Traders
        this.addTraderAssort(mechanicId);
        //this.logger.info("here 7", "green")
        for (const mastery of this.db.globals.config.Mastering) {
            if (mastery.Name === "AK74") {
                mastery.Templates.push("5dbcb66f4827cd761fb3797a", "b6c589ec2535085340807057");
            }
        }
        const bundlePath = path_1.default.join(this.ThisModPath, modFolderName, "bundles.json");
        //console.log(bundlePath);
        if (this.FileSystem.exists(bundlePath)) {
            BundleLoader.addBundles(`${this.ThisModPath}/${modFolderName}/`);
        }
        //this.logger.info(`${modFolderName} integration complete`);
    }
    async addTraderAssort(trader) {
        const modPath = path_1.default.join(this.ThisModPath, "ZLR_GRAU");
        const traders = await this.jsonUtil.deserialize(await this.FileSystem.read(path_1.default.join(modPath, "database", "traders.json")));
        //console.log(traders);
        //Items
        for (const item in traders.traders[trader].assort.items) {
            //this.logger.info(item + " added to " + trader);
            //console.log(traders.traders[trader].assort.items[item]);
            this.db.traders[trader].assort.items.push(traders.traders[trader].assort.items[item]);
        }
        //Barter Scheme
        for (const item in traders.traders[trader].assort.barter_scheme) {
            //this.logger.info(item + " added to " + trader);
            //console.log(traders.traders[trader].assort.barter_scheme[item]);
            this.db.traders[trader].assort.barter_scheme[item] = traders.traders[trader].assort.barter_scheme[item];
        }
        //Loyalty Levels
        for (const item in traders.traders[trader].assort.loyal_level_items) {
            //this.logger.info(item + " added to " + trader);
            //console.log(traders.traders[trader].assort.loyal_level_items[item]);
            if (this.modConfig.lvl1Traders)
                this.db.traders[trader].assort.loyal_level_items[item] = 1;
            else
                this.db.traders[trader].assort.loyal_level_items[item] = traders.traders[trader].assort.loyal_level_items[item];
        }
    }
    compareAndReplace(originalItem, attributesToChange) {
        //Recursive function to find attributes in the original item/clothing object and change them.
        //This is done so each attribute does not have to be manually changed and can instead be read from properly formatted json
        //Requires the attributes to be in the same nested object format as the item entry in order to work (see items.json and items.json in SPT install)
        for (const key in attributesToChange) {
            //If you've reached the end of a nested series, try to change the value in original to new
            if ((["boolean", "string", "number"].includes(typeof attributesToChange[key])) || Array.isArray(attributesToChange[key])) {
                if (key in originalItem)
                    originalItem[key] = attributesToChange[key];
                //TO DO: Add check with item template here if someone wants to add new properties to a cloned item.
                else {
                    this.logger.warning("(Item: " + originalItem._id + ") WARNING: Could not find the attribute: \"" + key + "\" in the original item, make sure this is intended!");
                    originalItem[key] = attributesToChange[key];
                }
            }
            //Otherwise keep traveling down the nest
            else
                originalItem[key] = this.compareAndReplace(originalItem[key], attributesToChange[key]);
        }
        return originalItem;
    }
    cloneItem(itemToClone, ID) {
        //If the item is enabled in the json
        if (this.items.items[ID].enable == true) {
            //Get a clone of the original item from the database
            let ItemOut = this.jsonUtil.clone(this.db.templates.items[itemToClone]);
            //Change the necessary item attributes using the info in our database file items.json
            ItemOut._id = ID;
            ItemOut = this.compareAndReplace(ItemOut, this.items.items[ID]["item"]);
            //Add the new item to the database
            this.db.templates.items[ID] = ItemOut;
            this.logger.debug("Item " + ID + " created as a clone of " + itemToClone + " and added to database.");
            //Create the handbook entry for the items
            const handbookEntry = {
                "Id": ID,
                "ParentId": this.items.items[ID]["handbook"]["ParentId"],
                "Price": this.items.items[ID]["handbook"]["Price"]
            };
            //Add the handbook entry to the database
            this.db.templates.handbook.Items.push(handbookEntry);
            this.logger.debug("Item " + ID + " added to handbook with price " + handbookEntry.Price);
        }
    }
    getFilters(item) {
        //Get the slots, chambers, cartridges, and conflicting items objects and return them.
        const slots = (typeof this.db.templates.items[item]._props.Slots === "undefined") ? [] : this.db.templates.items[item]._props.Slots;
        const chambers = (typeof this.db.templates.items[item]._props.Chambers === "undefined") ? [] : this.db.templates.items[item]._props.Chambers;
        const cartridges = (typeof this.db.templates.items[item]._props.Cartridges === "undefined") ? [] : this.db.templates.items[item]._props.Cartridges;
        const filters = slots.concat(chambers, cartridges);
        const conflictingItems = (typeof this.db.templates.items[item]._props.ConflictingItems === "undefined") ? [] : this.db.templates.items[item]._props.ConflictingItems;
        return [filters, conflictingItems];
    }
    copyToFilters(itemClone, ID, enableCompats = true, enableConflicts = true) {
        //Find the original item in all compatible and conflict filters and add the clone to those filters as well
        //Will skip one or both depending on the enable parameters
        for (const item in this.db.templates.items) {
            if (item in this.items.items)
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
            "parentId": itemToCheck.item._parent,
            "_props": itemToCheck.item._props,
            "_type": itemToCheck.item._type,
            "_proto": itemToCheck.item._proto,
            "handbook": itemToCheck.handbook
        };
        return [pass, itemOUT];
    }
    createItem(itemToCreate) {
        //Create an item from scratch instead of cloning it
        //Requires properly formatted entry in items.json with NO "clone" attribute
        //Get the new item object from the json
        const newItem = this.items.items[itemToCreate];
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
                "ParentId": checkedItem["handbook"]["ParentId"],
                "Price": checkedItem["handbook"]["Price"]
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
                //If you are using the old locales
                if (this.modConfig.oldLocales)
                    this.db.locales.global[localeID].templates[ID] = localeEntry;
                //Normal
                else {
                    this.db.locales.global[localeID][name] = localeEntry.Name;
                    this.db.locales.global[localeID][shortname] = localeEntry.ShortName;
                    this.db.locales.global[localeID][description] = localeEntry.Description;
                }
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
                    if (this.modConfig.oldLocales)
                        this.db.locales.global[localeID].preset[preset] = {
                            "Name": Item.presets[preset]
                        };
                    else {
                        this.db.locales.global[localeID][preset] = Item.presets[preset];
                    }
                }
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
        const NewItem = this.items.items[ID];
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
    postSptLoad(_container) {
        return;
    }
}
exports.mod = new MainLoader();
//# sourceMappingURL=mod.js.map