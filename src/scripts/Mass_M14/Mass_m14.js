"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const mod_slot_1 = require("../../enum/mod_slot");
const NTrader_1 = require("../../enum/NTrader");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const assortConfig = require("../../../config/Mass_M14/assortConfig.json");
const cpntName = "Mass_M14";
const IDList = {
    WEAPON_M1A: "5aafa857e5b5b00018480968",
    WEAPON_M14: "020020AA14AA140000000000",
    HANDGUARD_M14: "041041AA14AA144100000000",
    HANDGUARD_M1A: "5aaf8e43e5b5b00015693246",
    BARREL_M14: "04B04BAA14AA14BB00000000",
    BARREL_M1A: "5addbac75acfc400194dbc56",
    MUZZLE_M1A: "5addbb6e5acfc408fb1393fd",
    MUZZLE_M14: "04A04AAA14AA14AA00000000",
    MAGAZINE_M1A_20: "5aaf8a0be5b5b00015693243",
    SIGHT_M1A: "5addba3e5acfc4001669f0ab",
    SIGHT_M14: "049049AA14AA14FF00000000",
    HANDGUARD_M14_EBR: "0410EBAA14AA14EB00000000",
    HANDGUARD_M1A_EBR: "5addc7005acfc4001669f275"
};
class Mass_M14 extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
    }
    onLoadMod() {
        const MThisModPath = this.MThisModPath;
        const Mass_ModApi = this.MMA;
        this.M14();
        this.handguard();
        this.handguard_ebr();
        this.barrel();
        this.muzzle();
        this.sight();
        this.preset();
        this.preset_EBR();
        this.preset_SASS();
        Mass_ModApi.loadModifierList(MThisModPath[cpntName].itemmodifier);
        this.afterModifiScript();
        // this.DBitems["5aafa857e5b5b00018480968"]._props.weapFireType.push("fullauto");
        // this.DBitems[IDList.WEAPON_M1A]._props.Prefab.path = "assets/m14/weapon_m14_762x51_container.bundle";
    }
    loadLoc(id, locs) {
        for (let lang in this.DBlocales) {
            this.MMA.addNewLoc(id, lang, locs["en"]);
        }
        for (let lang in locs) {
            this.MMA.addNewLoc(id, lang, locs[lang]);
        }
    }
    M14() {
        const id = IDList.WEAPON_M14;
        let m14 = this.MMA.cloneItem(IDList.WEAPON_M1A, id);
        this.MMA.registerNewItem(id);
        m14._props.Weight += 0.09;
        m14._props.Prefab.path = "assets/m14/weapon_m14_762x51_container.bundle";
        m14._props.weapFireType.push("fullauto");
        m14._props.NoFiremodeOnBoltcatch = true;
        m14.fleaPriceRoubles = 13056;
        var locs = {
            "ch": {
                "Name": "春田 M14 7.62x51 步枪",
                "ShortName": "M14",
                "Description": "Springfield Armory M14是Springfield Armory产M1A步枪的军用版本。"
            },
            "en": {
                "Name": "Springfield Armory M14 7.62x51 rifle",
                "ShortName": "M14",
                "Description": "M14 rifle is a USGI rifle designed and manufactured by Springfield Armory. It is basically a magazine-fed M1 Grand chambered in 7.62x51NATO and was replaced by M16 rifle shortly after being in service.",
            }
        };
        const Config = assortConfig.m14;
        this.DBprice[id] = Config.price;
        this.DBitems[id] = m14;
        var hb = this.MMA.cloneHandbookById(IDList.WEAPON_M1A);
        hb.Id = id;
        this.DBhbItems.push(hb);
        this.loadLoc(id, locs);
        this.MMA.traderAddItems(id, this.DBprice[id], NTrader_1.NTrader.Default, Config.loyaltyLevel, Money_1.Money.ROUBLES);
    }
    afterModifiScript() {
        const id = IDList.WEAPON_M14;
        var stock = this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.stock, id);
        stock._props.filters[0].Filter = [
            "5ab372a310e891001717f0d8", //Troy
            IDList.HANDGUARD_M14,
            IDList.HANDGUARD_M14_EBR
        ];
    }
    handguard() {
        const id = IDList.HANDGUARD_M14;
        let item = this.MMA.cloneItem(IDList.HANDGUARD_M1A, id);
        this.MMA.registerNewItem(id);
        item._props.Prefab.path = "assets/m14/m14_handguard.bundle";
        item._props.Slots = [];
        item._props.Weight = 1.5;
        item._props.Recoil += -1;
        item._props.HeatFactor = 0.97;
        item._props.CoolFactor = 1.01;
        item._props.Ergonomics += 1;
        var locs = {
            "ch": {
                "Name": "M14 木制枪托",
                "ShortName": "M14 木制",
                "Description": "M14的标准木制枪托。"
            },
            "en": {
                "Name": "M14 wooden stock",
                "ShortName": "M14 wooden",
                "Description": "Standard wooden stock for M14.",
            }
        };
        const Config = assortConfig.handguard;
        this.DBprice[id] = Config.price;
        this.DBitems[id] = item;
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_M1A);
        hb.Id = id;
        this.DBhbItems.push(hb);
        this.loadLoc(id, locs);
        this.MMA.traderAddItems(id, this.DBprice[id], NTrader_1.NTrader.Default, Config.loyaltyLevel);
    }
    handguard_ebr() {
        const id = IDList.HANDGUARD_M14_EBR;
        let item = this.MMA.cloneItem(IDList.HANDGUARD_M1A_EBR, id);
        this.MMA.registerNewItem(id);
        item._props.Prefab.path = "assets/m14/m14_handguard_ebr.bundle";
        var locs = {
            "ch": {
                "Name": "M14 SAGE International M14ALCS枪托(M14)",
                "ShortName": "M14ALCS（MOD. 0）",
                "Description": "M14ALCS枪托是M14增强战斗步枪套件中的一部分，由Sage公司制造。M14兼容版。 "
            },
            "en": {
                "Name": "M14 SAGE International M14ALCS chassis(M14)",
                "ShortName": "M14ALCS",
                "Description": "The M14ALCS chassis for M14 rifles from the Enhanced Battle Rifle (EBR) kit. Manufactured by SAGE International. M14 compitable version.",
            }
        };
        const Config = assortConfig.handguard_ebr;
        this.DBprice[id] = Config.price;
        this.DBitems[id] = item;
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_M1A_EBR);
        hb.Id = id;
        this.DBhbItems.push(hb);
        this.loadLoc(id, locs);
        this.MMA.traderAddItems(id, this.DBprice[id], NTrader_1.NTrader.Default, Config.loyaltyLevel);
    }
    barrel() {
        const id = IDList.BARREL_M14;
        let item = this.MMA.cloneItem(IDList.BARREL_M1A, id);
        this.MMA.registerNewItem(id);
        item._props.Weight = 1.18;
        item._props.Recoil += -1;
        item._props.CenterOfImpact = 0.08;
        item._props.HeatFactor = 0.75;
        item._props.CoolFactor = 0.90;
        item._props.Velocity += 0.08;
        item._props.DurabilityBurnModificator = 0.8;
        var locs = {
            "ch": {
                "Name": "22英寸M14枪管 7.62x51 NATO",
                "ShortName": "22英寸M14 7.62X51",
                "Description": "22英寸的M14标配枪管，适配7.62x51 NATO弹。"
            },
            "en": {
                "Name": "M14 7.62x51 22 inch barrel",
                "ShortName": "M14 22\"",
                "Description": "A standard 22 inch mbarrel for M14 based weapons chambered in 7.62x51 NATO ammo.",
            }
        };
        const Config = assortConfig.barrel;
        this.DBprice[id] = Config.price;
        this.DBitems[id] = item;
        var hb = this.MMA.cloneHandbookById(IDList.BARREL_M1A);
        hb.Id = id;
        this.DBhbItems.push(hb);
        this.loadLoc(id, locs);
        this.MMA.traderAddItems(id, this.DBprice[id], NTrader_1.NTrader.Default, Config.loyaltyLevel);
    }
    muzzle() {
        const id = IDList.MUZZLE_M14;
        let item = this.MMA.cloneItem(IDList.MUZZLE_M1A, id);
        this.MMA.registerNewItem(id);
        var locs = {
            "ch": {
                "Name": "M14 标准 7.62x51消焰器",
                "ShortName": "M14",
                "Description": "Springfield Armory生产的M14步枪用膛口制退补偿器。"
            },
            "en": {
                "Name": "M14 Standard 7.62x51 flash suppressor",
                "ShortName": "M14",
                "Description": "A muzzle brake-compensator for M14 rifles, manufactured by Springfield Armory.",
            }
        };
        item._props.Recoil += -1;
        const Config = assortConfig.muzzle;
        this.DBprice[id] = Config.price;
        this.DBitems[id] = item;
        var hb = this.MMA.cloneHandbookById(IDList.MUZZLE_M1A);
        hb.Id = id;
        this.DBhbItems.push(hb);
        this.loadLoc(id, locs);
        this.MMA.traderAddItems(id, this.DBprice[id], NTrader_1.NTrader.Default, Config.loyaltyLevel);
    }
    sight() {
        const id = IDList.SIGHT_M14;
        let item = this.MMA.cloneItem(IDList.SIGHT_M1A, id);
        this.MMA.registerNewItem(id);
        var locs = {
            "ch": {
                "Name": "标准M14刃形准星",
                "ShortName": "M14",
                "Description": "Springfield Armory生产的M14标准刃形可拆卸准星。"
            },
            "en": {
                "Name": "M14 Standard Blade front sight",
                "ShortName": "M14 Blade",
                "Description": "The standard Blade detachable front sight for M14 rifles, manufactured by Springfield Armory.",
            }
        };
        const Config = assortConfig.sight;
        this.DBprice[id] = Config.price;
        this.DBitems[id] = item;
        this.MMA.generatePrice(id, IDList.SIGHT_M1A, 1);
        var hb = this.MMA.cloneHandbookById(IDList.SIGHT_M1A);
        hb.Id = id;
        this.DBhbItems.push(hb);
        this.loadLoc(id, locs);
        this.MMA.traderAddItems(id, this.DBprice[id], NTrader_1.NTrader.Default, Config.loyaltyLevel);
    }
    preset() {
        const Mid = "221400A14A140000000000";
        const id = Mid + "00";
        const parentID = Mid + "01";
        const barrelID = Mid + "0B";
        const muzzleID = Mid + "02";
        const sightID = Mid + "03";
        var preset = {
            _id: id,
            _name: "M14 Default",
            _changeWeaponName: false,
            _parent: parentID,
            _encyclopedia: IDList.WEAPON_M14,
            _type: "Preset",
            _items: [
                {
                    _id: parentID,
                    _tpl: IDList.WEAPON_M14
                },
                {
                    _id: barrelID,
                    _tpl: IDList.BARREL_M14,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.barrel
                },
                {
                    _id: muzzleID,
                    _tpl: IDList.MUZZLE_M14,
                    parentId: barrelID,
                    slotId: mod_slot_1.mod_slot.muzzle
                },
                {
                    _id: sightID,
                    _tpl: IDList.SIGHT_M14,
                    parentId: muzzleID,
                    slotId: mod_slot_1.mod_slot.sight_front
                },
                {
                    _id: "221400A14A14000000000004",
                    _tpl: IDList.HANDGUARD_M14,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.stock
                },
                {
                    _id: "221400A14A14000000000005",
                    _tpl: IDList.MAGAZINE_M1A_20,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.magazine
                },
                {
                    _id: "221400A14A14000000000006",
                    _tpl: "5abcbb20d8ce87001773e258",
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.sight_rear
                }
            ]
        };
        this.DBpresets[id] = preset;
        const Config = assortConfig.preset;
        this.MMA.traderGenerateAssortFromPreset(id, Config.price, NTrader_1.NTrader.Default, Config.loyaltyLevel, Money_1.Money.DOLLARS);
    }
    preset_EBR() {
        const Mid = "221400A14A14E000000000";
        const id = Mid + "00";
        const parentID = Mid + "01";
        const barrelID = Mid + "0B";
        const muzzleID = Mid + "02";
        const sightID = Mid + "03";
        var preset = {
            _id: id,
            _name: "M14_EBR",
            _changeWeaponName: true,
            _parent: parentID,
            _type: "Preset",
            _items: [
                {
                    "_id": parentID,
                    "_tpl": IDList.WEAPON_M14
                },
                {
                    "_id": Mid + "08",
                    "_tpl": IDList.MAGAZINE_M1A_20,
                    "parentId": parentID,
                    "slotId": "mod_magazine"
                },
                {
                    "_id": Mid + "05",
                    "_tpl": IDList.HANDGUARD_M14_EBR,
                    "parentId": parentID,
                    "slotId": "mod_stock"
                },
                {
                    "_id": Mid + "06",
                    "_tpl": "5addc7ac5acfc400194dbd90",
                    "parentId": Mid + "05",
                    "slotId": "mod_stock"
                },
                {
                    "_id": Mid + "07",
                    "_tpl": "5addc7db5acfc4001669f279",
                    "parentId": Mid + "06",
                    "slotId": "mod_pistol_grip"
                },
                {
                    _id: barrelID,
                    _tpl: IDList.BARREL_M14,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.barrel
                },
                {
                    _id: muzzleID,
                    _tpl: IDList.MUZZLE_M14,
                    parentId: barrelID,
                    slotId: mod_slot_1.mod_slot.muzzle
                },
                {
                    _id: sightID,
                    _tpl: IDList.SIGHT_M14,
                    parentId: muzzleID,
                    slotId: mod_slot_1.mod_slot.sight_front
                },
                {
                    _id: Mid + "04",
                    _tpl: "5abcbb20d8ce87001773e258",
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.sight_rear
                }
            ]
        };
        this.DBpresets[id] = preset;
        for (let lang in this.DBlocales) {
            this.DBlocales[lang][id] = "EBR";
        }
        const Config = assortConfig.preset_EBR;
        this.MMA.traderGenerateAssortFromPreset(id, Config.price, NTrader_1.NTrader.Default, Config.loyaltyLevel, Money_1.Money.DOLLARS);
    }
    preset_SASS() {
        const id = "6845ff2d29a6685224039c12";
        const parentID = "684613c672805016e1302136";
        var preset = {
            _id: id,
            _name: "M14_SASS",
            _changeWeaponName: true,
            _parent: parentID,
            _type: "Preset",
            _items: [
                {
                    "_id": parentID,
                    "_tpl": "020020AA14AA140000000000",
                },
                {
                    "_id": "6845ff2d29a6685224039c13",
                    "_tpl": "5aaf8a0be5b5b00015693243",
                    "slotId": "mod_magazine",
                    "parentId": parentID
                },
                {
                    "_id": "6845ff2d29a6685224039c14",
                    "_tpl": "5ab372a310e891001717f0d8",
                    "slotId": "mod_stock",
                    "parentId": parentID
                },
                {
                    "_id": "6845ff2d29a6685224039c15",
                    "_tpl": "04B04BAA14AA14BB00000000",
                    slotId: mod_slot_1.mod_slot.barrel,
                    "parentId": parentID
                },
                {
                    "_id": "6845ff2d29a6685224039c16",
                    "_tpl": "571659bb2459771fb2755a12",
                    "slotId": "mod_pistolgrip",
                    "parentId": "6845ff2d29a6685224039c14"
                },
                {
                    "_id": "6845ff2d29a6685224039c17",
                    "_tpl": "5649be884bdc2d79388b4577",
                    "slotId": "mod_stock",
                    "parentId": "6845ff2d29a6685224039c14"
                },
                {
                    _id: "6845ff2d29a6685224039c20",
                    _tpl: IDList.MUZZLE_M14,
                    parentId: "6845ff2d29a6685224039c15",
                    slotId: mod_slot_1.mod_slot.muzzle
                },
                {
                    "_id": "6845ff2d29a6685224039c19",
                    "_tpl": "58d2946386f774496974c37e",
                    "slotId": "mod_stock_000",
                    "parentId": "6845ff2d29a6685224039c17"
                }
            ]
        };
        this.DBpresets[id] = preset;
        for (let lang in this.DBlocales) {
            this.DBlocales[lang][id] = "SASS";
        }
        const Config = assortConfig.preset_SASS;
        this.MMA.traderGenerateAssortFromPreset(id, Config.price, NTrader_1.NTrader.Default, Config.loyaltyLevel, Money_1.Money.DOLLARS);
    }
}
module.exports = Mass_M14;
