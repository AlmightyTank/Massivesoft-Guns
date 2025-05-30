"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const handbookCategory_1 = require("../../enum/handbookCategory");
const cpntName = "Tavor_X95";
const tavor_x95 = "020020195195F95556000000";
const tavor_x95_R = "020020195195F95545000000";
const pg_x95 = "042042195195F95042000000";
const pg_x95_2 = "042042195195033000000000";
const hg_x95 = "041041195195F95041000000";
const dt_mdr_556 = "5c488a752e221602b412af63";
const x95b1 = "0419b11951959b19b1000000";
const x95b2 = "0419b21951959b29b2000000";
const x95_16_5in = "04B64B19519564B556000000";
const x95_18_5in = "04B84B19519584B556000000";
const x95_16_5in_545 = "04B64B19519564B545000000";
const x95_18_5in_545 = "04B84B19519584B545000000";
const stanag_545_30 = "02F030195195030545000000";
const stanag_545_60 = "02F060195195060545000000";
class Tavor_X95 extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    CustomItem;
    HBhlp;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
    }
    onLoadMod() {
        const Mass_ModApi = this.MMA;
        const MThisModPath = this.MThisModPath;
        this.CustomItem = this.container.resolve("CustomItemService");
        this.HBhlp = this.container.resolve("HandbookHelper");
        this.weapon();
        this.weapon2();
        this.handguard();
        this.pistolgrip();
        this.pistolgrip_2();
        this.barrel_16in();
        this.barrel_16in_545();
        this.barrel_18in();
        this.barrel_18in_545();
        this.handguard_plate_1();
        this.handguard_plate_2();
        this.MAG_30();
        this.MAG_60();
        this.preset();
    }
    getFilter(slot, id) {
        return this.JsonUtil.clone(this.MMA.itemGetSlotbyName(slot, id)._props.filters[0].Filter);
    }
    weapon() {
        const id = tavor_x95;
        const clid = dt_mdr_556;
        const price = this.HBhlp.getTemplatePrice(clid);
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Name": "IWI Tavor X95 5.56x45 assault rifle",
                "ShortName": "Tavor X95",
                "Description": "An update version of Tarvor MTAR-21 assault rifle, manufactured by Israel IWI.",
                "Prefab": {
                    "path": "assets/weap/weapon_x95_container.bundle",
                    "rcid": ""
                }, "Weight": 2.466,
                "Slots": [
                    {
                        "_name": "mod_pistol_grip",
                        "_id": "5c488a752e221602b412af65",
                        "_parent": tavor_x95,
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        pg_x95,
                                        pg_x95_2
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": true,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_magazine",
                        "_id": "5c488a752e221602b412af66",
                        "_parent": tavor_x95,
                        "_props": {
                            "filters": [
                                {
                                    "AnimationIndex": -1,
                                    "Filter": this.JsonUtil.clone(this.MMA.itemGetSlotbyName("mod_magazine", clid)._props.filters[0].Filter)
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c394bdc2dae468b4577"
                    },
                    {
                        "_name": "mod_handguard",
                        "_id": "5c488acd2e221602b177c2ab",
                        "_parent": tavor_x95,
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        hg_x95
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_barrel",
                        "_id": "5c488ad82e221602b412af6b",
                        "_parent": "tavor_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        x95_16_5in,
                                        x95_18_5in,
                                        //   "x95_16.5in_545",
                                        //   "x95_18.5in_545"
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    }
                ],
                "SingleFireRate": 520,
                "bFirerate": 850,
                "AllowJam": false,
                "AllowFeed": false,
                "AllowMisfire": false,
                "AllowSlide": false
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
            locales: {
                "en": {
                    "name": "IWI Tavor X95 5.56x45 assault rifle",
                    "shortName": "Tavor X95",
                    "description": "An update version of Tarvor MTAR-21 assault rifle, manufactured by Israel IWI."
                },
                "ch": {
                    "name": "IWI Tavor X95 5.56x45 突击步枪",
                    "shortName": "Tavor X95",
                    "description": "以色列IWI生产的X95突击步枪,由MATR-21改进而来。"
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemSlots(this.DBitems[id]);
        this.MMA.processItemChambers(this.DBitems[id]);
        this.MMA.registerNewItem(id);
        this.MMA.modifyItems({
            ItemId: id,
            WeaponCaliberCloneFromId: "itself",
            "MasteringCreate": {
                "Name": "Tavor",
                "Level2": 150,
                "Level3": 300
            }
        });
    }
    weapon2() {
        const id = tavor_x95_R;
        const clid = dt_mdr_556;
        const price = this.HBhlp.getTemplatePrice(clid);
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Name": "IWI Tavor X95 5.45x39 assault rifle",
                "ShortName": "Tavor X95",
                "Description": "An update version of Tarvor MTAR-21 assault rifle, manufactured by Israel IWI.",
                "Prefab": {
                    "path": "assets/weap/weapon_x95_2_container.bundle",
                    "rcid": ""
                }, "Weight": 2.466,
                "Slots": [
                    {
                        "_name": "mod_pistol_grip",
                        "_id": "5c488a752e221602b412af65",
                        "_parent": tavor_x95,
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        pg_x95,
                                        pg_x95_2
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": true,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_magazine",
                        "_id": "5c488a752e221602b412af66",
                        "_parent": tavor_x95,
                        "_props": {
                            "filters": [
                                {
                                    "AnimationIndex": -1,
                                    "Filter": [
                                        stanag_545_30,
                                        stanag_545_60
                                    ]
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c394bdc2dae468b4577"
                    },
                    {
                        "_name": "mod_handguard",
                        "_id": "5c488acd2e221602b177c2ab",
                        "_parent": tavor_x95,
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        hg_x95
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_barrel",
                        "_id": "5c488ad82e221602b412af6b",
                        "_parent": "tavor_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        x95_16_5in_545,
                                        x95_18_5in_545
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    }
                ],
                "SingleFireRate": 520,
                "bFirerate": 850,
                "ammoCaliber": "Caliber545x39",
                "defAmmo": "56dff3afd2720bba668b4567",
                "defMagType": stanag_545_30,
                "Chambers": [
                    {
                        "_name": "patron_in_weapon",
                        "_id": "5839a40f24597726f856b512",
                        "_parent": "5839a40f24597726f856b511",
                        "_props": {
                            "filters": [
                                {
                                    "Filter": this.JsonUtil.clone(this.MMA.weaponGetChamber("5839a40f24597726f856b511")._props.filters[0].Filter)
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d4af244bdc2d962f8b4571"
                    }
                ],
                "AllowJam": false,
                "AllowFeed": false,
                "AllowMisfire": false,
                "AllowSlide": false
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
            locales: {
                "en": {
                    "name": "IWI Tavor X95-R 5.45x39 assault rifle",
                    "shortName": "Tavor X95-R",
                    "description": "An update version of Tarvor MTAR-21 assault rifle, manufactured by Israel IWI."
                },
                "ch": {
                    "name": "IWI Tavor X95-R 5.45x39 突击步枪",
                    "shortName": "Tavor X95-R",
                    "description": "以色列IWI生产的X95-R突击步枪,由MATR-21改进而来。"
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemSlots(this.DBitems[id]);
        this.MMA.processItemChambers(this.DBitems[id]);
        this.MMA.registerNewItem(id);
        const ModifyInfo = {
            ItemId: id,
            WeaponCaliberCloneFromId: "itself",
            MasteringCloneFromId: tavor_x95
        };
        this.MMA.modifyItems(ModifyInfo);
    }
    handguard() {
        const id = hg_x95;
        const clid = "5c48a14f2e2216152006edd7";
        const price = this.HBhlp.getTemplatePrice(clid);
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95_hg.bundle",
                    "rcid": ""
                },
                "Slots": [
                    {
                        "_name": "mod_scope",
                        "_id": "5c488ae82e221602b313fa6f",
                        "_parent": "hg_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_scope", "55d355e64bdc2d962f8b4569")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_foregrip",
                        "_id": "5c48a14f2e2216152006edd9",
                        "_parent": "hg_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_foregrip", "6275303a9f372d6ea97f9ec7")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_sight_rear",
                        "_id": "5c488af32e2216398b5a9608",
                        "_parent": "hg_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_sight_rear", "5bd70322209c4d00d7167b8f")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_tactical_000",
                        "_id": "5eeb2ff5ea4f8b73c827350f",
                        "_parent": "hg_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_tactical_000", "5bd70322209c4d00d7167b8f")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_tactical_001",
                        "_id": "5eeb2ff5ea4f8b73c827350f",
                        "_parent": "hg_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [...this.getFilter("mod_tactical_001", "5bd70322209c4d00d7167b8f"), ...[x95b2]]
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_tactical_002",
                        "_id": "5eeb2ff5ea4f8b73c827350f",
                        "_parent": "hg_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [...this.getFilter("mod_tactical_001", "5bd70322209c4d00d7167b8f"), ...[x95b1]]
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_tactical_003",
                        "_id": "5eeb2ff5ea4f8b73c827350f",
                        "_parent": "hg_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_tactical_001", "5bd70322209c4d00d7167b8f")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": "mod_sight_front",
                        "_id": "5eff4775d823312838614d84",
                        "_parent": "hg_x95",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_sight_front", "6388c5d19c00405f4717c0f0")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    }
                ],
                "Recoil": -5
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Handguards,
            locales: {
                "en": {
                    "name": "Handguard for Tavor X95",
                    "shortName": "X95 handguard",
                    "description": "Stock handguard for Tavor X95"
                },
                "ch": {
                    "name": "塔沃尔X95护木",
                    "shortName": "X95护木",
                    "description": "提供多种接口的护木"
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemSlots(this.DBitems[id]);
        this.MMA.registerNewItem(id);
    }
    pistolgrip() {
        const id = pg_x95;
        const clid = "5c48a2c22e221602b313fb6c";
        const price = this.HBhlp.getTemplatePrice(clid);
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Weight": 0.05,
                "Prefab": {
                    "path": "assets/pg_x95.bundle",
                    "rcid": ""
                },
                "Ergonomics": 6
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
            locales: {
                "en": {
                    "name": "Pistol grip for Tavor X95",
                    "shortName": "X95 grip",
                    "description": "Pistol grip for Tavor X95."
                },
                "ch": {
                    "name": "塔沃尔X95手枪式握把",
                    "shortName": "X95握把",
                    "description": "塔沃尔X95手枪式握把。"
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
        this.MMA.registerNewItem(id);
    }
    pistolgrip_2() {
        const id = pg_x95_2;
        const clid = "5c48a2c22e221602b313fb6c";
        const price = this.HBhlp.getTemplatePrice(clid);
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Weight": 0.05,
                "Prefab": {
                    "path": "assets/x95_pg.bundle",
                    "rcid": ""
                },
                "Ergonomics": 6
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
            locales: {
                "en": {
                    "name": "Pistol grip for Tavor X95 alternative",
                    "shortName": "X95 grip alt.",
                    "description": "Alternative pistol grip for Tavor X95."
                },
                "ch": {
                    "name": "塔沃尔X95大护圈握把",
                    "shortName": "X95大护圈",
                    "description": "塔沃尔X95大护圈握把。"
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
        this.MMA.registerNewItem(id);
    }
    barrel_16in() {
        const id = x95_16_5in;
        const clid = "5c0e2f94d174af029f650d56";
        const price = this.HBhlp.getTemplatePrice(clid);
        const localescn = {
            "Name": "X95 16.5英寸枪管",
            "ShortName": "16.5寸枪管",
            "Description": "用于Tavor X95的16.5英寸枪管"
        };
        const localesen = {
            "Name": "16.5-inch barrel for X95",
            "ShortName": "16.5in barrel",
            "Description": "An 16.5 inchs barrel for Tarvor X95"
        };
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95_16in.bundle",
                    "rcid": ""
                },
                "Slots": [
                    {
                        "_name": "mod_muzzle",
                        "_id": "5c0e2f94d174af029f650d58",
                        "_parent": "5c0e2f94d174af029f650d56",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_muzzle", "5c0e2f94d174af029f650d56")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    }
                ],
                "Recoil": -6,
                "Ergonomics": -9,
                "CenterOfImpact": 0.039,
                "ExtraSizeLeft": 2
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Barrels,
            locales: {
                "en": {
                    "name": localesen.Name,
                    "shortName": localesen.ShortName,
                    "description": localesen.Description
                },
                "ch": {
                    "name": localescn.Name,
                    "shortName": localescn.ShortName,
                    "description": localescn.Description
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemSlots(this.DBitems[id]);
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
    }
    barrel_16in_545() {
        const id = x95_16_5in_545;
        const clid = "5c0e2f94d174af029f650d56";
        const price = this.HBhlp.getTemplatePrice(clid);
        const localescn = {
            "Name": "X95-R 16.5英寸5.45*39枪管",
            "ShortName": "X95-R 16.5寸 545枪管",
            "Description": "用于Tavor X95-R的16.5英寸枪管,改装后可发射5.45*39mm弹药"
        };
        const localesen = {
            "Name": "16.5-inch 5.45*39mm barrel for X95-R",
            "ShortName": "X95-R 16.5in 545 barrel",
            "Description": "An 16.5 inchs barrel for Tarvor X95-R, compatible with 5.45*39mm ammunitions."
        };
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95_16in.bundle",
                    "rcid": ""
                },
                "Slots": [
                    {
                        "_name": "mod_muzzle",
                        "_id": "5c0e2f94d174af029f650d58",
                        "_parent": "5c0e2f94d174af029f650d56",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_muzzle", "5c0e2f94d174af029f650d56")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    }
                ],
                "Recoil": -6,
                "Ergonomics": -9,
                "CenterOfImpact": 0.039,
                "ExtraSizeLeft": 2
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Barrels,
            locales: {
                "en": {
                    "name": localesen.Name,
                    "shortName": localesen.ShortName,
                    "description": localesen.Description
                },
                "ch": {
                    "name": localescn.Name,
                    "shortName": localescn.ShortName,
                    "description": localescn.Description
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemSlots(this.DBitems[id]);
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
    }
    barrel_18in() {
        const id = x95_18_5in;
        const clid = "5c0e2f94d174af029f650d56";
        const price = this.HBhlp.getTemplatePrice(clid);
        const localescn = {
            "Name": "X95 18.5英寸枪管",
            "ShortName": "18.5寸枪管",
            "Description": "用于Tavor X95的18.5英寸枪管"
        };
        const localesen = {
            "Name": "18.5-inch barrel for X95",
            "ShortName": "18.5in barrel",
            "Description": "An 18.5 inchs barrel for Tarvor X95"
        };
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95_18in.bundle",
                    "rcid": ""
                },
                "Weight": 0.639,
                "Slots": [
                    {
                        "_name": "mod_muzzle",
                        "_id": "5c0e2f94d174af029f650d58",
                        "_parent": "5c0e2f94d174af029f650d56",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_muzzle", "5c0e2f94d174af029f650d56")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    }
                ],
                "Recoil": -8,
                "Ergonomics": -11,
                "CenterOfImpact": 0.028,
                "ExtraSizeLeft": 2
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Barrels,
            locales: {
                "en": {
                    "name": localesen.Name,
                    "shortName": localesen.ShortName,
                    "description": localesen.Description
                },
                "ch": {
                    "name": localescn.Name,
                    "shortName": localescn.ShortName,
                    "description": localescn.Description
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemSlots(this.DBitems[id]);
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
    }
    barrel_18in_545() {
        const id = x95_18_5in_545;
        const clid = "5c0e2f94d174af029f650d56";
        const price = this.HBhlp.getTemplatePrice(clid);
        const localescn = {
            "Name": "X95-R 18.5英寸5.45*39枪管",
            "ShortName": "X95-R 18.5寸 545枪管",
            "Description": "用于Tavor X95-R的18.5英寸枪管,改装后可发射5.45*39mm弹药"
        };
        const localesen = {
            "Name": "18.5-inch 5.45*39mm barrel for X95-R",
            "ShortName": "X95-R 18.5in 545 barrel",
            "Description": "An 18.5 inchs barrel for Tarvor X95-R, compatible with 5.45*39mm ammunitions."
        };
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95_18in.bundle",
                    "rcid": ""
                },
                "Weight": 0.639,
                "Slots": [
                    {
                        "_name": "mod_muzzle",
                        "_id": "5c0e2f94d174af029f650d58",
                        "_parent": "5c0e2f94d174af029f650d56",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": this.getFilter("mod_muzzle", "5c0e2f94d174af029f650d56")
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    }
                ],
                "Recoil": -8,
                "Ergonomics": -11,
                "CenterOfImpact": 0.028,
                "ExtraSizeLeft": 2
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Barrels,
            locales: {
                "en": {
                    "name": localesen.Name,
                    "shortName": localesen.ShortName,
                    "description": localesen.Description
                },
                "ch": {
                    "name": localescn.Name,
                    "shortName": localescn.ShortName,
                    "description": localescn.Description
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemSlots(this.DBitems[id]);
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
    }
    handguard_plate_1() {
        const id = x95b1;
        const clid = "5d123a3cd7ad1a004e476058";
        const price = this.HBhlp.getTemplatePrice(clid);
        const localescn = {
            "Name": "x95导轨护板",
            "ShortName": "x95护板",
            "Description": "x95导轨护板。"
        };
        const localesen = {
            "Name": "x95 rail panel",
            "ShortName": "x95 panel",
            "Description": "x95 rail panel."
        };
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95_b1.bundle",
                    "rcid": ""
                },
                Ergonomics: 1
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
            locales: {
                "en": {
                    "name": localesen.Name,
                    "shortName": localesen.ShortName,
                    "description": localesen.Description
                },
                "ch": {
                    "name": localescn.Name,
                    "shortName": localescn.ShortName,
                    "description": localescn.Description
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
    }
    handguard_plate_2() {
        const id = x95b2;
        const clid = "5d123a3cd7ad1a004e476058";
        const price = this.HBhlp.getTemplatePrice(clid);
        const localescn = {
            "Name": "x95导轨护板",
            "ShortName": "x95护板",
            "Description": "x95导轨护板。"
        };
        const localesen = {
            "Name": "x95 rail panel",
            "ShortName": "x95 panel",
            "Description": "x95 rail panel."
        };
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95_b2.bundle",
                    "rcid": ""
                },
                Ergonomics: 1
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
            locales: {
                "en": {
                    "name": localesen.Name,
                    "shortName": localesen.ShortName,
                    "description": localesen.Description
                },
                "ch": {
                    "name": localescn.Name,
                    "shortName": localescn.ShortName,
                    "description": localescn.Description
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
    }
    MAG_30() {
        const id = stanag_545_30;
        const clid = "55802d5f4bdc2dac148b458e";
        const price = this.HBhlp.getTemplatePrice(clid);
        const localescn = {
            "Name": "X95-R 5.45x39 30发弹匣",
            "ShortName": "X95-R 30",
            "Description": "30发 5.45x39 X95-R 弹匣。",
        };
        const localesen = {
            "Name": "5.45x39 X95-R 30-round magazine",
            "ShortName": "X95-R 30",
            "Description": "A 30-round 5.45x39 polymer magazine for X95-R.",
        };
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95r30.bundle",
                    "rcid": ""
                },
                "Cartridges": [
                    {
                        "_name": "cartridges",
                        "_id": "57487be52459771f613b6652",
                        "_parent": "55d480c04bdc2d1d4e8b456a",
                        "_max_count": 30,
                        "_props": {
                            "filters": [
                                {
                                    "Filter": [
                                        "5c0d5e4486f77478390952fe",
                                        "61962b617c6c7b169525f168",
                                        "56dfef82d2720bbd668b4567",
                                        "56dff026d2720bb8668b4567",
                                        "56dff061d2720bb5668b4567",
                                        "56dff0bed2720bb0668b4567",
                                        "56dff216d2720bbd668b4568",
                                        "56dff2ced2720bb4668b4567",
                                        "56dff338d2720bbd668b4569",
                                        "56dff3afd2720bba668b4567",
                                        "56dff421d2720b5f5a8b4567",
                                        "56dff4a2d2720bbd668b456a",
                                        "56dff4ecd2720b5f5a8b4568"
                                    ]
                                }
                            ]
                        },
                        "_proto": "5748538b2459770af276a261"
                    }
                ]
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Magazines,
            locales: {
                "en": {
                    "name": localesen.Name,
                    "shortName": localesen.ShortName,
                    "description": localesen.Description
                },
                "ch": {
                    "name": localescn.Name,
                    "shortName": localescn.ShortName,
                    "description": localescn.Description
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemCartridges(this.DBitems[id]);
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
        const ModifyInfo = {
            "ItemId": id,
            "MagCloneCaliberTable": "itself"
        };
        this.MMA.modifyItems(ModifyInfo);
    }
    MAG_60() {
        const id = stanag_545_60;
        const clid = "544a37c44bdc2d25388b4567";
        const price = this.HBhlp.getTemplatePrice(clid);
        const localescn = {
            "Name": "X95-R 5.45x39 60发弹匣",
            "ShortName": "X95-R 60",
            "Description": "60发 5.45x39 X95-R 弹匣。",
        };
        const localesen = {
            "Name": "5.45x39 X95-R 60-round magazine",
            "ShortName": "X95-R 60",
            "Description": "A 60-round 5.45x39 polymer magazine for X95-R.",
        };
        const item = {
            itemTplToClone: clid,
            overrideProperties: {
                "Prefab": {
                    "path": "assets/x95r60.bundle",
                    "rcid": ""
                },
                "Height": 3,
                "ExtraSizeDown": 2,
                "Cartridges": [
                    {
                        "_name": "cartridges",
                        "_id": "57487be52459771f613b6652",
                        "_parent": "55d480c04bdc2d1d4e8b456a",
                        "_max_count": 60,
                        "_props": {
                            "filters": [
                                {
                                    "Filter": [
                                        "5c0d5e4486f77478390952fe",
                                        "61962b617c6c7b169525f168",
                                        "56dfef82d2720bbd668b4567",
                                        "56dff026d2720bb8668b4567",
                                        "56dff061d2720bb5668b4567",
                                        "56dff0bed2720bb0668b4567",
                                        "56dff216d2720bbd668b4568",
                                        "56dff2ced2720bb4668b4567",
                                        "56dff338d2720bbd668b4569",
                                        "56dff3afd2720bba668b4567",
                                        "56dff421d2720b5f5a8b4567",
                                        "56dff4a2d2720bbd668b456a",
                                        "56dff4ecd2720b5f5a8b4568"
                                    ]
                                }
                            ]
                        },
                        "_proto": "5748538b2459770af276a261"
                    }
                ]
            },
            newId: id,
            fleaPriceRoubles: price,
            parentId: this.DBitems[clid]._parent,
            handbookPriceRoubles: price,
            handbookParentId: handbookCategory_1.handbookCategory.Magazines,
            locales: {
                "en": {
                    "name": localesen.Name,
                    "shortName": localesen.ShortName,
                    "description": localesen.Description
                },
                "ch": {
                    "name": localescn.Name,
                    "shortName": localescn.ShortName,
                    "description": localescn.Description
                }
            }
        };
        this.CustomItem.createItemFromClone(item);
        this.MMA.processItemCartridges(this.DBitems[id]);
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Math.ceil(price * 0.8), NTrader_1.NTrader.Default);
        const ModifyInfo = {
            "ItemId": id,
            "MagCloneCaliberTable": "itself"
        };
        this.MMA.modifyItems(ModifyInfo);
    }
    preset() {
        const weapon_x95_preset = {
            "_id": "2739ccbabababa0000000000",
            "_type": "Preset",
            "_changeWeaponName": false,
            "_name": "IWI X95",
            "_encyclopedia": tavor_x95,
            "_parent": "2739ccbabababa0000000001",
            "_items": [
                {
                    "_id": "2739ccbabababa0000000001",
                    "_tpl": tavor_x95
                },
                {
                    "_id": "2739ccbabababa0000000002",
                    "_tpl": pg_x95,
                    "parentId": "2739ccbabababa0000000001",
                    "slotId": "mod_pistol_grip"
                },
                {
                    "_id": "2739ccbabababa0000000003",
                    "_tpl": "55d4887d4bdc2d962f8b4570",
                    "parentId": "2739ccbabababa0000000001",
                    "slotId": "mod_magazine"
                },
                {
                    "_id": "2739ccbabababa0000000004",
                    "_tpl": hg_x95,
                    "parentId": "2739ccbabababa0000000001",
                    "slotId": "mod_handguard"
                },
                {
                    "_id": "2739ccbabababa0000000014",
                    "_tpl": x95b1,
                    "parentId": "2739ccbabababa0000000004",
                    "slotId": "mod_tactical_002"
                },
                {
                    "_id": "2739ccbabababa0000000024",
                    "_tpl": x95b2,
                    "parentId": "2739ccbabababa0000000004",
                    "slotId": "mod_tactical_001"
                },
                {
                    "_id": "2739ccbabababa0000000005",
                    "_tpl": x95_16_5in,
                    "parentId": "2739ccbabababa0000000001",
                    "slotId": "mod_barrel"
                },
                {
                    "_id": "2739ccbabababa0000000006",
                    "_tpl": "544a38634bdc2d58388b4568",
                    "parentId": "2739ccbabababa0000000005",
                    "slotId": "mod_muzzle"
                }
            ]
        };
        const weapon_x95R_preset = {
            "_id": "2545ccbabababa0000000000",
            "_type": "Preset",
            "_changeWeaponName": false,
            "_name": "IWI X95",
            "_encyclopedia": tavor_x95_R,
            "_parent": "2545ccbabababa0000000001",
            "_items": [
                {
                    "_id": "2545ccbabababa0000000001",
                    "_tpl": tavor_x95_R
                },
                {
                    "_id": "2545ccbabababa0000000002",
                    "_tpl": pg_x95,
                    "parentId": "2545ccbabababa0000000001",
                    "slotId": "mod_pistol_grip"
                },
                {
                    "_id": "2545ccbabababa0000000003",
                    "_tpl": stanag_545_30,
                    "parentId": "2545ccbabababa0000000001",
                    "slotId": "mod_magazine"
                },
                {
                    "_id": "2545ccbabababa0000000004",
                    "_tpl": hg_x95,
                    "parentId": "2545ccbabababa0000000001",
                    "slotId": "mod_handguard"
                },
                {
                    "_id": "2545ccbabababa0000000014",
                    "_tpl": x95b1,
                    "parentId": "2545ccbabababa0000000004",
                    "slotId": "mod_tactical_002"
                },
                {
                    "_id": "2545ccbabababa0000000024",
                    "_tpl": x95b2,
                    "parentId": "2545ccbabababa0000000004",
                    "slotId": "mod_tactical_001"
                },
                {
                    "_id": "2545ccbabababa0000000005",
                    "_tpl": x95_16_5in_545,
                    "parentId": "2545ccbabababa0000000001",
                    "slotId": "mod_barrel"
                },
                {
                    "_id": "2545ccbabababa0000000006",
                    "_tpl": "544a38634bdc2d58388b4568",
                    "parentId": "2545ccbabababa0000000005",
                    "slotId": "mod_muzzle"
                }
            ]
        };
        this.DBpresets[weapon_x95R_preset._id] = weapon_x95R_preset;
        this.DBpresets[weapon_x95_preset._id] = weapon_x95_preset;
        this.MMA.traderGenerateAssortFromPreset(weapon_x95R_preset._id, 80000, NTrader_1.NTrader.Default, 4, Money_1.Money.ROUBLES);
        this.MMA.traderGenerateAssortFromPreset(weapon_x95_preset._id, 80000, NTrader_1.NTrader.Default, 4, Money_1.Money.ROUBLES);
    }
}
module.exports = Tavor_X95;
//# sourceMappingURL=Tavor_X95.js.map