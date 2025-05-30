import { DependencyContainer }      from "tsyringe";
import { IPostDBLoadMod }           from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer }           from "@spt/servers/DatabaseServer";
import { ImporterUtil }             from "@spt/utils/ImporterUtil";
import { ILogger }                  from "@spt/models/spt/utils/ILogger";
import { PreSptModLoader }          from "@spt/loaders/PreSptModLoader";
import { IDatabaseTables }          from "@spt/models/spt/server/IDatabaseTables";
import { JsonUtil }                 from "@spt/utils/JsonUtil"
import { ITemplateItem, Slot }      from "@spt/models/eft/common/tables/ITemplateItem";
import { ICustomizationItem }       from "@spt/models/eft/common/tables/ICustomizationItem";
import { IDatabase }                from "@spt/GRAU/IDatabase";
import { IItem, ILocale }           from "@spt/GRAU/IItem";
import { ICustomizationItem }       from "@spt/GRAU/ICustomizationItem";
import { ItemFilterService }        from "@spt/services/ItemFilterService";
import { ConfigTypes }              from "@spt/models/enums/ConfigTypes";
import { ConfigServer }             from "@spt/servers/ConfigServer";


//MCv007_blacklist
//Config file
import modConfig = require("../config.json");
//Blacklist file
import blacklist = require("../blacklist.json");


//Item template file
import itemTemplate =       require("../templates/item_template.json");
import articleTemplate =    require("../templates/article_template.json");


class MFACitems implements IPostDBLoadMod
{
    private db:         IDatabaseTables;
    private mydb:       IDatabase;    
    private logger:     ILogger;
    private jsonUtil:   JsonUtil;

    public async postDBLoad(container: DependencyContainer): Promise<void>
    {
        this.logger =               container.resolve<ILogger>("WinstonLogger");
        this.jsonUtil =             container.resolve<JsonUtil>("JsonUtil");

        const databaseServer =      container.resolve<DatabaseServer>("DatabaseServer");
        const databaseImporter =    container.resolve<ImporterUtil>("ImporterUtil");
        const modLoader =           container.resolve<PreSptModLoader>("PreSptModLoader");


        //Mod Info
        const modFolderName =   "ZLR_GRAU";
        const modFullName =     "ZLR_GRAU_RIFLE";

        //Trader IDs
        const traders = {
            "mechanic": "5a7c2eca46aef81a7ca2145d"
        };

        //Currency IDs
        const currencies = {
            "roubles":  "5449016a4bdc2d6f028b456f",
            "dollars":  "5696686a4bdc2da3298b456a",
            "euros":    "569668774bdc2da2298b4568"
        }

        //Get the server database and our custom database
        this.db = databaseServer.getTables();
        this.mydb = await databaseImporter.loadAsync(`${modLoader.getModPath(modFolderName)}database/`);
        this.logger.info("Loading: " + modFullName + " Created by Saintdeeer & MassiveSoft, Updated by AmightyTank " );

        //Blacklist Function
        const configServer =        container.resolve<ConfigServer>("ConfigServer");
        const serverScavcaseConfig = configServer.getConfig(ConfigTypes.SCAVCASE);
        const itemFilterService = container.resolve<ItemFilterService>("ItemFilterService");
        const itemBlacklist = itemFilterService.getBlacklistedItems();
        itemBlacklist.push(...blacklist.addtoconfigsitem.blacklist);


        const newBlacklist2 = serverScavcaseConfig.rewardItemBlacklist.concat(blacklist.addtoconfigsscavcase.rewardItemBlacklist);

        serverScavcaseConfig.rewardItemBlacklist = newBlacklist2;
        ///this.logger.info(serverScavcaseConfig.rewardItemBlacklist);

        this.logger.debug(Object.entries(this.mydb.items));

        //Items
        for (const [ID, Item] of Object.entries(this.mydb.items))
        {
            //Items + Handbook
            if ( Item.enable )
            {
                if ( "clone" in Item )
                {
                    this.cloneItem(Item.clone, ID);
                    this.copyToFilters(Item.clone, ID, Item.enableCloneCompats, Item.enableCloneConflicts);
                }
                else this.createItem(ID);

                //Locales (Languages)
                this.addLocales(ID, Item);
                this.weaponAddtoShelf(ID, Item)
                //Trades
                //this.addTrades(ID, Item, traders, currencies);
            }
        }
        this.logger.debug(modFolderName + " items and handbook finished");


        //Item Filters
        for (const ID in this.mydb.items) if ( this.mydb.items[ID].enable ) this.addToFilters(ID);
        this.logger.debug(modFolderName + " item filters finished");

        //Clothing
        for (const [ID, Article] of Object.entries(this.mydb.clothes))
        {
            //Articles + Handbook
            if ( "clone" in Article )
            {
                this.cloneClothing(Article.clone, ID);
            }
            else
            {
                //Doesn't do anything yet...
                this.createClothing(ID);
            }

            //Locales (Languages)
            this.addLocales(ID, undefined, Article);

            //Trades
            //this.addTrades(ID, Item, traders, currencies);
        }
        this.logger.debug(modFolderName + " clothing finished");

        //Presets
        for (const preset in this.mydb.globals.ItemPresets) this.db.globals.ItemPresets[preset] = this.mydb.globals.ItemPresets[preset];
        this.logger.debug(modFolderName + " presets finished");

        //Traders
        for (const trader in traders)
        {
            this.addTraderAssort(traders[trader]);
            this.addTraderSuits(traders[trader]);
        }
        this.logger.debug(modFolderName + " traders finished");

        //Stimulator Buffs
        //for (const buff in this.mydb.globals.config.Health.Effects.Stimulator.Buffs) this.db.globals.config.Health.Effects.Stimulator.Buffs[buff] = this.mydb.globals.config.Health.Effects.Stimulator.Buffs[buff];
        //this.logger.debug(modFolderName + " stimulator buffs finished");

        //Mastery
        const dbMastering = this.db.globals.config.Mastering
        for (const weapon in this.mydb.globals.config.Mastering) dbMastering.push(this.mydb.globals.config.Mastering[weapon]);
        for (const weapon in dbMastering) 
        {
            if (dbMastering[weapon].Name == "AK74")
                dbMastering[weapon].Templates.push("5dbcb66f4827cd761fb3797a");
            if (dbMastering[weapon].Name == "AK74")
                dbMastering[weapon].Templates.push("b6c589ec2535085340807057");

        }
        this.logger.debug(modFolderName + " mastery finished");
    }

    private cloneItem(itemToClone: string, ID: string): void
    {
        //If the item is enabled in the json
        if ( this.mydb.items[ID].enable == true )
        {
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

    private createItem(itemToCreate: string): void
    {
        //Create an item from scratch instead of cloning it
        //Requires properly formatted entry in items.json with NO "clone" attribute

        //Get the new item object from the json
        const newItem = this.mydb.items[itemToCreate];

        //If the item is enabled in the json
        if ( newItem.enable )
        {
            //Check the structure of the new item in items
            const [pass, checkedItem] = this.checkItem(newItem);
            if ( !pass ) return;

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

    private checkItem(itemToCheck: IItem): [boolean, ITemplateItem]
    {
        //A very basic top-level check of an item to make sure it has the proper attributes
        //Also convert to ITemplateItem to avoid errors

        let pass = true;

        //First make sure it has the top-level 5 entries needed for an item
        for (const level1 in itemTemplate )
        {
            if ( !(level1 in itemToCheck.item) )
            {
                this.logger.error("ERROR - Missing attribute: \"" + level1 + "\" in your item entry!");
                pass = false;
            }
        }

        //Then make sure the attributes in _props exist in the item template, warn user if not.
        for (const prop in itemToCheck.item._props)
        {
            if ( !(prop in itemTemplate._props) ) this.logger.warning("WARNING - Attribute: \"" + prop + "\" not found in item template!");
        }

        const itemOUT: ITemplateItem = {
            "_id":      itemToCheck.item._id,
            "_name":    itemToCheck.item._name,
            "_parent":  itemToCheck.item._parent,
            "_props":   itemToCheck.item._props,
            "_type":    itemToCheck.item._type,
            "_proto":   itemToCheck.item._proto
        };

        return [pass, itemOUT];
    }

    private compareAndReplace(originalItem, attributesToChange)
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

    private getFilters(item: string): [Array<Slot>, Array<string>]
    {
        //Get the slots, chambers, cartridges, and conflicting items objects and return them.

        const slots = (typeof this.db.templates.items[item]._props.Slots === "undefined")            ? [] : this.db.templates.items[item]._props.Slots;
        const chambers = (typeof this.db.templates.items[item]._props.Chambers === "undefined")      ? [] : this.db.templates.items[item]._props.Chambers;
        const cartridges = (typeof this.db.templates.items[item]._props.Cartridges === "undefined")  ? [] : this.db.templates.items[item]._props.Cartridges;
        const filters = slots.concat(chambers, cartridges);

        const conflictingItems =  (typeof this.db.templates.items[item]._props.ConflictingItems === "undefined") ? [] : this.db.templates.items[item]._props.ConflictingItems;

        return [filters, conflictingItems];
    }


    private copyToFilters(itemClone: string, ID: string, enableCompats = true, enableConflicts = true): void
    {
        //Find the original item in all compatible and conflict filters and add the clone to those filters as well
        //Will skip one or both depending on the enable parameters

        for (const item in this.db.templates.items)
        {
            if ( item in this.mydb.items ) continue;
            
            const [filters, conflictingItems] = this.getFilters(item);

            if ( enableCompats )
            {
                for (const filter of filters)
                {
                    for (const id of filter._props.filters[0].Filter)
                    {
                        if ( id === itemClone ) filter._props.filters[0].Filter.push(ID);
                    }
                }
            }

            if ( enableConflicts ) for (const conflictID of conflictingItems) if ( conflictID === itemClone ) conflictingItems.push(ID);
        }
    }

    private addToFilters(ID: string): void
    {
        //Add a new item to compatibility & conflict filters of pre-existing items
        //Add additional compatible and conflicting items to new item filters (manually adding more than the ones that were cloned)

        const NewItem = this.mydb.items[ID];

        //If the item is enabled in the json
        if (NewItem.enable)
        {
            this.logger.debug("addToFilters: " + ID);

            //Manually add items into an THISMOD item's filters
            if ( "addToThisItemsFilters" in NewItem )
            {
                const   ItemFilters =      this.getFilters(ID)[0];
                let     ConflictingItems = this.getFilters(ID)[1];
    
                for (const modSlotName in NewItem.addToThisItemsFilters)
                {
                    if ( modSlotName === "conflicts" ) ConflictingItems = ConflictingItems.concat(NewItem.addToThisItemsFilters.conflicts)
                    else
                    {
                        for (const filter in ItemFilters)
                        {
                            if ( modSlotName === ItemFilters[filter]._name )
                            {
                                const slotFilter = ItemFilters[filter]._props.filters[0].Filter;
                                const newFilter = slotFilter.concat(NewItem.addToThisItemsFilters[modSlotName])

                                ItemFilters[filter]._props.filters[0].Filter = newFilter;
                            }
                        }
                    }
                }
            }
    
            //Manually add THISMOD items to pre-existing item filters.
            if ( "addToExistingItemFilters" in NewItem )
            {
                for (const modSlotName in NewItem.addToExistingItemFilters)
                {
                    if ( modSlotName === "conflicts" )
                    {
                        for (const conflictingItem of NewItem.addToExistingItemFilters[modSlotName])
                        {
                            const conflictingItems = this.getFilters(conflictingItem)[1];
                            conflictingItems.push(ID);
                        }
                    }
                    else
                    {
                        for (const compatibleItem of NewItem.addToExistingItemFilters[modSlotName])
                        {
                            const filters = this.getFilters(compatibleItem)[0];
        
                            for (const filter of filters)
                            {
                                if ( modSlotName === filter._name ) filter._props.filters[0].Filter.push(ID);
                            }
                        }
                    }
                }
            }
        }
    }

    private cloneClothing(articleToClone: string, ID: string): void
    {
        if ( this.mydb.clothes[ID].enable || !("enable" in this.mydb.clothes[ID]) )
        {
            //Get a clone of the original item from the database
            let ClothingOut = this.jsonUtil.clone(this.db.templates.customization[articleToClone]);

            //Change the necessary clothing item attributes using the info in our database file clothes.json
            ClothingOut._id = ID;
            ClothingOut._name = ID;
            ClothingOut = this.compareAndReplace(ClothingOut, this.mydb.clothes[ID]["customization"]);

            //Add the new item to the database
            this.db.templates.customization[ID] = ClothingOut;
            this.logger.debug("Clothing item " + ID + " created as a clone of " + articleToClone + " and added to database.");
        }
    }

    private createClothing(articleToCreate: string): void
    {
        //Create clothing from scratch instead of cloning it
        //Requires properly formatted entry in clothes.json with NO "clone" attribute

        //Get the new article object from the json
        const newArticle = this.mydb.clothes[articleToCreate];

        //If the article is enabled in the json
        if ( newArticle.enable )
        {
            //Check the structure of the new article in clothes
            const [pass, checkedArticle] = this.checkArticle(newArticle);
            if ( !pass ) return;

            //Add the new item to the database
            this.db.templates.customization[articleToCreate] = checkedArticle;
            this.logger.debug("Article " + articleToCreate + " created and added to database.");
        }

    }

    private checkArticle(articleToCheck: ICustomizationItem): [boolean, ICustomizationItem]
    {
        //A very basic top-level check of an article to make sure it has the proper attributes
        //Also convert to ITemplateItem to avoid errors

        let pass = true;

        //First make sure it has the top-level 5 entries needed for an item
        for (const level1 in articleTemplate )
        {
            if ( !(level1 in articleToCheck.customization) )
            {
                this.logger.error("ERROR - Missing attribute: \"" + level1 + "\" in your article entry!");
                pass = false;
            }
        }

        //Then make sure the attributes in _props exist in the article template, warn user if not.
        for (const prop in articleToCheck.customization._props)
        {
            if ( !(prop in articleTemplate._props) ) this.logger.warning("WARNING - Attribute: \"" + prop + "\" not found in article template!");
        }

        const articleOUT: ICustomizationItem = {
            "_id":      articleToCheck.customization._id,
            "_name":    articleToCheck.customization._name,
            "_parent":  articleToCheck.customization._parent,
            "_props":   articleToCheck.customization._props,
            "_type":    articleToCheck.customization._type,
            "_proto":   articleToCheck.customization._proto
        };

        return [pass, articleOUT];
    }

    private addTraderAssort(trader: string): void 
    {
        //Items
        for (const item in this.mydb.traders[trader].assort.items) 
        {
            //this.logger.debug(item + " added to " + trader);
            this.db.traders[trader].assort.items.push(this.mydb.traders[trader].assort.items[item]);
        }

        //Barter Scheme
        for (const item in this.mydb.traders[trader].assort.barter_scheme) 
        {
            //this.logger.debug(item + " added to " + trader);
            this.db.traders[trader].assort.barter_scheme[item] = this.mydb.traders[trader].assort.barter_scheme[item];
        }

        //Loyalty Levels
        for (const item in this.mydb.traders[trader].assort.loyal_level_items) 
        {
            //this.logger.debug(item + " added to " + trader);
            if (modConfig.lvl1Traders) this.db.traders[trader].assort.loyal_level_items[item] = 1;
            else this.db.traders[trader].assort.loyal_level_items[item] = this.mydb.traders[trader].assort.loyal_level_items[item];
        }
    }

    private addTraderSuits(trader: string): void
    {
        //Only do anything if a suits.json file is included for trader in this mod
        if ( typeof this.mydb.traders[trader].suits !== "undefined" )
        {
            //Enable customization for that trader
            this.db.traders[trader].base.customization_seller = true;

            //Create the suits array if it doesn't already exist in SPT database so we can push to it
            if ( typeof this.db.traders[trader].suits === "undefined" ) this.db.traders[trader].suits = [];

            //Push all suits
            for (const suit of this.mydb.traders[trader].suits) this.db.traders[trader].suits.push(suit);
        }
    }

    /*
    private addTrades(ID: string, Item: IItem, traders: object, currencies: object): void
    {

        for (const [tradeID, trade] of Object.entries(Item.trades))
        {

        }
        
        const items = {
            "_id": "",
            "_tpl": "", 
            "parentId": "",
            "slotId": "",
            "upd": {}
        };

        const barter_scheme = {

        };

        const loyal_level_items = {

        }
    }
    */
    private weaponAddtoShelf(ID: string, Item?: IItem): void 
    {
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
     }


    private addLocales(ID: string, Item?: IItem, Article?: ICustomizationItem): void
    {
        const name =            ID + " Name";
        const shortname =       ID + " ShortName";
        const description =     ID + " Description";

        const isItem = typeof Item !== "undefined"
        const Entry = isItem ? Item : Article;

        for (const localeID in this.db.locales.global) //For each possible locale/language in SPT's database
        {
            let localeEntry: ILocale;

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
                if ( isItem ) this.logger.warning("WARNING: Missing locale entry for item: " + ID);
                else this.logger.debug("No locale entries for item/clothing: " + ID)
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
    }
}

module.exports = { mod: new MFACitems() }