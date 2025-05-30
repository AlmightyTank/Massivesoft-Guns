"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModApi_1 = require("./Mass_ModApi");
const path = require("path");

class MainLoader {
    constructor() {
        this.mod = "Massivesoft-Guns";
        this.beforeLoadHbList = [];
        this.beforeLoadItemList = [];
    }

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

        const configPath = path.join(this.ThisModPath, "modWeapons.json");
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
            } else {
                this.logger.log(`[${this.mod}] Skipping disabled weapon: ${weaponData._name || weaponKey}`, "yellow");
            }
        }

        this.loadComponetList(container, enabledWeapons);
    }

    postSptLoad(container) {
        return;
    }

    compareAndReplace(originalItem, attributesToChange)
    {
        //Recursive function to find attributes in the original item/clothing object and change them.
        //This is done so each attribute does not have to be manually changed and can instead be read from properly formatted json
        //Requires the attributes to be in the same nested object format as the item entry in order to work (see items.json and items.json in SPT install)

        for (const key in attributesToChange)
        {
            //If you've reached the end of a nested series, try to change the value in original to new
            if ( (["boolean", "string", "number"].includes(typeof attributesToChange[key])) || Array.isArray(attributesToChange[key]) )
            {
                if ( key in originalItem ) originalItem[key] = attributesToChange[key];
                //TO DO: Add check with item template here if someone wants to add new properties to a cloned item.
                else 
                {
                    this.logger.warning("(Item: " + originalItem._id + ") WARNING: Could not find the attribute: \"" + key + "\" in the original item, make sure this is intended!");
                    originalItem[key] = attributesToChange[key];
                }
            }

            //Otherwise keep traveling down the nest
            else originalItem[key] = this.compareAndReplace(originalItem[key], attributesToChange[key]);
        }

        return originalItem;
    }

    getFilters(item)
    {
        //Get the slots, chambers, cartridges, and conflicting items objects and return them.

        const slots = (typeof this.db.templates.items[item]._props.Slots === "undefined")            ? [] : this.db.templates.items[item]._props.Slots;
        const chambers = (typeof this.db.templates.items[item]._props.Chambers === "undefined")      ? [] : this.db.templates.items[item]._props.Chambers;
        const cartridges = (typeof this.db.templates.items[item]._props.Cartridges === "undefined")  ? [] : this.db.templates.items[item]._props.Cartridges;
        const filters = slots.concat(chambers, cartridges);

        const conflictingItems =  (typeof this.db.templates.items[item]._props.ConflictingItems === "undefined") ? [] : this.db.templates.items[item]._props.ConflictingItems;

        return [filters, conflictingItems];
    }

    checkItem(itemToCheck) {
        // A very basic top-level check of an item to make sure it has the proper attributes
        // Also convert to a plain object to avoid errors

        let pass = true;

        // First make sure it has the top-level 5 entries needed for an item
        for (const level1 in itemTemplate) {
            if (!(level1 in itemToCheck.item)) {
                this.logger.error(`ERROR - Missing attribute: "${level1}" in your item entry!`);
                pass = false;
            }
        }

        // Then make sure the attributes in _props exist in the item template, warn user if not
        for (const prop in itemToCheck.item._props) {
            if (!(prop in itemTemplate._props)) {
                this.logger.warning(`WARNING - Attribute: "${prop}" not found in item template!`);
            }
        }

        const itemOUT = {
            _id:     itemToCheck.item._id,
            _name:   itemToCheck.item._name,
            _parent: itemToCheck.item._parent,
            _props:  itemToCheck.item._props,
            _type:   itemToCheck.item._type,
            _proto:  itemToCheck.item._proto
        };

        return [pass, itemOUT];
    }

    async loadZLRGRAU(container) {
        const databaseServer =      container.resolve("DatabaseServer");
        const logger =              container.resolve("WinstonLogger");

        const jsonUtil = container.resolve("JsonUtil");
        
        const modFolderName =   "ZLR_GRAU";

        //Trader IDs
        const traders = {
            "mechanic": "5a7c2eca46aef81a7ca2145d"
        };

        //Get the server database and our custom database
        this.db = databaseServer.getTables();
        this.mydb = await jsonUtil.deserialize(await this.FileSystem.read(path.join(this.ThisModPath, modFolderName, "database", "items.json")));

        //Items
        for (const [ID, Item] of Object.entries(this.mydb))
        {

            console.log(this.mydb[ID]);
            //Items + Handbook
            if ( this.mydb[ID].enable )
            {
                if ( "clone" in Item )
                {
                    //Get a clone of the original item from the database
                    let ItemOut = this.jsonUtil.clone(this.db.templates.items[Item.clone]);

                    //Change the necessary item attributes using the info in our database file items.json
                    ItemOut._id = ID;
                    ItemOut = this.compareAndReplace(ItemOut, this.mydb[ID]["item"]);

                    //Add the new item to the database
                    this.db.templates.items[ID] = ItemOut;
                    logger.debug("Item " + ID + " created as a clone of " + Item.clone + " and added to database.");

                    //Create the handbook entry for the items
                    const handbookEntry = {
                        "Id": ID,
                        "ParentId": this.mydb[ID]["handbook"]["ParentId"],
                        "Price": this.mydb[ID]["handbook"]["Price"]
                    };

                    //Add the handbook entry to the database
                    this.db.templates.handbook.Items.push(handbookEntry);
                    logger.debug("Item " + ID + " added to handbook with price " + handbookEntry.Price);

                    for (const item in this.db.templates.items)
                    {
                        if ( item in this.mydb ) continue;
                        
                        const [filters, conflictingItems] = this.getFilters(item);

                        if ( Item.enableCloneCompats )
                        {
                            for (const filter of filters)
                            {
                                for (const id of filter._props.filters[0].Filter)
                                {
                                    if ( id === Item.clone ) filter._props.filters[0].Filter.push(ID);
                                }
                            }
                        }

                        if ( Item.enableCloneConflicts ) for (const conflictID of conflictingItems) if ( conflictID === Item.clone ) conflictingItems.push(ID);
                    }
                }
                const newItem = this.mydb[ID];

                //If the item is enabled in the json
                if ( newItem.enable )
                {
                    //Check the structure of the new item in items
                    const [pass, checkedItem] = this.checkItem(newItem);
                    if ( !pass ) return;

                    //Add the new item to the database
                    this.db.templates.items[ID] = checkedItem;
                    logger.debug("Item " + ID + " created and added to database.");

                    //Create the handbook entry for the items
                    const handbookEntry = {
                        "Id": ID,
                        "ParentId": newItem["handbook"]["ParentId"],
                        "Price": newItem["handbook"]["Price"]
                    };

                    //Add the handbook entry to the database
                    this.db.templates.handbook.Items.push(handbookEntry);
                    logger.debug("Item " + ID + " added to handbook with price " + handbookEntry.Price);
                }

                //Locales (Languages)
                const name =            ID + " Name";
                const shortname =       ID + " ShortName";
                const description =     ID + " Description";

                const isItem = typeof Item !== "undefined"
                const Entry = isItem ? Item : Article;

                for (const localeID in this.db.locales.global) //For each possible locale/language in SPT's database
                {
                    let localeEntry;

                    if ( Entry.locales )
                    {
                        if ( localeID in Entry.locales) //If the language is entered in items, use that
                        {
                            localeEntry = {
                                "Name":           Entry.locales[localeID].Name,
                                "ShortName":      Entry.locales[localeID].ShortName,
                                "Description":    Entry.locales[localeID].Description
                            }
                        }

                        else //Otherwise use english as the default
                        {
                            localeEntry = {
                                "Name":           Entry.locales.en.Name,
                                "ShortName":      Entry.locales.en.ShortName,
                                "Description":    Entry.locales.en.Description
                            }
                        }

                        //If you are using the old locales
                        if (modConfig.oldLocales) this.db.locales.global[localeID].templates[ID] = localeEntry;

                        //Normal
                        else
                        {
                            this.db.locales.global[localeID][name] =            localeEntry.Name;
                            this.db.locales.global[localeID][shortname] =       localeEntry.ShortName;
                            this.db.locales.global[localeID][description] =     localeEntry.Description;
                        }
                    }

                    else 
                    {
                        if ( isItem ) logger.warning("WARNING: Missing locale entry for item: " + ID);
                        else logger.debug("No locale entries for item/clothing: " + ID)
                    }

                    //Also add the necessary preset locale entries if they exist
                    if ( isItem && Item.presets )
                    {
                        for (const preset in Item.presets)
                        {
                            if (modConfig.oldLocales) this.db.locales.global[localeID].preset[preset] = {
                                "Name": Item.presets[preset]
                            };
                            else
                            {
                                this.db.locales.global[localeID][preset] = Item.presets[preset];
                            }
                        }
                    }
                }


                this.weaponAddtoShelf(ID, Item)

                const shelfs = [
                        "64381b582bb1c5dedd0fc925",
                        "64381b6e44b37a080d0245b9",
                        "6401c7b213d9b818bf0e7dd7"
                    ];
                    if( "isweapon" in  Item){
                    for (let x in shelfs) {
                        if (!this.db.templates.items[shelfs[x]]._props.Grids[0]._props.filters[0].Filter.includes(ID)) {
                            this.db.templates.items[shelfs[x]]._props.Grids[0]._props.filters[0].Filter.push(ID);
                        }
                    }
                    
                }
                //Trades
                //this.addTrades(ID, Item, traders, currencies);
            }
        }
        logger.debug(modFolderName + " items and handbook finished");


        //Item Filters
        for (const ID in this.mydb) if ( this.mydb[ID].enable ) this.addToFilters(ID);
        logger.debug(modFolderName + " item filters finished");



        //Presets
        for (const preset in this.mydb.globals.ItemPresets) this.db.globals.ItemPresets[preset] = this.mydb.globals.ItemPresets[preset];
        logger.debug(modFolderName + " presets finished");

        //Traders
        for (const trader in traders)
        {
            this.addTraderAssort(traders[trader]);
            this.addTraderSuits(traders[trader]);
        }
    }

    async loadComponetList(container, componentList) {
        const BundleLoader = container.resolve("BundleLoader");

        for (const componentName of componentList) {
            const scriptDir = path.resolve(this.ThisModPath, "src", "scripts", componentName);
            const scriptFile = path.join(scriptDir, `${componentName}.js`);

            if (componentName === "ZLR_GRAU") {
                await this.loadZLRGRAU(container);
                continue;
            }

            if (this.FileSystem.exists(scriptFile)) {
                try {
                    const ModJs = require(scriptFile);
                    const ModInst = new ModJs(container, this.MassModApi);
                    ModInst.onLoadMod();
                } catch (err) {
                    this.logger.error(`Failed to load script for ${componentName}: ${err.message}`);
                }
            } else {
                this.logger.log(`No script found for ${componentName}`, "magenta");
            }

            const bundlePath = path.join(this.ThisModPath, componentName, "bundles.json");
            if (this.FileSystem.exists(bundlePath)) {
                BundleLoader.addBundles(path.join(this.ThisModPath, componentName) + "/");
            }
        }
    }
}

module.exports = { mod: new MainLoader() };