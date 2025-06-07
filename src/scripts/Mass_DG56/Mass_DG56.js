"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const assortConfig = require("../../../config/Mass_DG56/assortConfig.json");
const handbookCategory_1 = require("../../enum/handbookCategory");
const IDDL = {
    WEAPON_DG56: "020020DF056DF05600000000",
    WEAPON_MDR556: "5c488a752e221602b412af63",
    WEAPON_QBZ97: "020020BBA97BBA9700000000",
    BARRAL_MDR556: "5c48a2852e221602b21d5923",
    REAR_SIGHT_DG56: "04C04CDF056DF0564C000000",
    REAR_SIGHT_AR15: "55d5f46a4bdc2d1b198b4567",
    MUZZLE_DG56: "04A04ADF056DF0564A000000",
    MUZZLE_DG56_SHORT: "04A14ADF056DF0564A100000",
    MUZZLE_AR15: "544a38634bdc2d58388b4568",
    MUZZLE_AKS_74U: "57dc324a24597759501edc20",
    MK17_TOP: "618426d96c780c1e710c9b9f",
    MOUNT_SIDE_DEF: "048048DF056DF05648000000",
    MOUNT_BOTT_DEF: "048148DF056DF05648100000",
    MOUNT_LIGHT: "048248DF056DF05648200000",
    MOUNT_VECTOR_BOTTOM: "5fbb976df9986c4cff3fe5f2",
    MOUNT_MLOK_25: "5b7be47f5acfc400170e2dd2",
    MOUNT_M700: "5bfebc530db834001d23eb65",
    BARREL_DG56_DEF: "04B04BDF056DF0564B000000",
    BARREL_DG56_HVYLONG: "04B14BDF056DF0564B100000",
    BARREL_DG56_HVYSHORT: "04B24BDF056DF0564B200000",
    BARREL_DG56_LIGHT: "04B34BDF056DF0564B300000",
    BARREL_DG56_LONG: "04B44BDF056DF0564B400000",
    BARREL_DG56_SHORT: "04B54BDF056DF0564B500000",
    HANDGUARD_DG56_DEF: "041041DF056DF05641000000",
    HANDGUARD_DG56_LONG: "041141DF056DF05641100000",
    HANDGUARD_HK416_DEF: "5bb20de5d4351e0035629e59",
    STOCK_DG56_DEF: "043043DF056DF05643000000",
    STOCK_DG56_ERGO: "043143DF056DF05643100000",
    STOCK_DG56_PADDED: "043243DF056DF05643200000",
    STOCK_DG56_REDUC: "043343DF056DF05643300000",
    STOCK_DG56_RUBBER: "043443DF056DF05643400000",
    STOCK_PAD: "5a0c59791526d8dba737bba7",
    PG_AR15_MAGPUL_MOE: "55802f5d4bdc2dac148b458f",
    PG_DG56_TAC: "045045DF056DF05645000000",
    PG_DG56_ASS: "045145DF056DF05645100000",
    PG_DG56_AIM: "045245DF056DF05645200000",
    COMB_DG56_TAC: "044044DF056DF05644000000",
    COMB_DG56_AMMO: "044144DF056DF05644100000",
    COMB_DG56_ERGO: "044244DF056DF05644200000",
    COMB_DG56_POUCH: "044344DF056DF05644300000"
};
const List_Handguards = [
    IDDL.HANDGUARD_DG56_DEF,
    IDDL.HANDGUARD_DG56_LONG
];
const List_Barrels = [
    IDDL.BARREL_DG56_DEF,
    IDDL.BARREL_DG56_HVYLONG,
    IDDL.BARREL_DG56_HVYSHORT,
    IDDL.BARREL_DG56_LIGHT,
    IDDL.BARREL_DG56_LONG,
    IDDL.BARREL_DG56_SHORT
];
const List_PGs = [
    IDDL.PG_DG56_TAC,
    IDDL.PG_DG56_ASS,
    IDDL.PG_DG56_AIM
];
const List_Stocks = [
    IDDL.STOCK_DG56_DEF,
    IDDL.STOCK_DG56_ERGO,
    IDDL.STOCK_DG56_PADDED,
    IDDL.STOCK_DG56_REDUC,
    IDDL.STOCK_DG56_RUBBER
];
const List_Combs = [
    IDDL.COMB_DG56_TAC,
    IDDL.COMB_DG56_AMMO,
    IDDL.COMB_DG56_ERGO,
    IDDL.COMB_DG56_POUCH
];
const cpntName = "Mass_DG56";
class Mass_DG56 extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    data;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
        var barrel_base_line = this.DBitems[IDDL.BARRAL_MDR556]._props;
        this.data = {
            weapon_dg56: {
                itemTplToClone: IDDL.WEAPON_MDR556,
                newId: IDDL.WEAPON_DG56,
                overrideProperties: {
                    Prefab: {
                        path: "assets/dg56/weapon_dg56_556x45_container.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 2.217,
                    LootExperience: 20,
                    RepairCost: 200,
                    RepairSpeed: 15,
                    Slots: [
                        {
                            "_name": "mod_sight_rear",
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.REAR_SIGHT_DG56
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.barrel,
                            "_id": "5c488af32e2216398b5a960A",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Barrels
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.pistol_grip,
                            "_id": "5c488af32e2216398b5a960B",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_PGs
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.stock,
                            "_id": "5c488af32e2216398b5a960C",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Stocks
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.stock_000,
                            "_id": "5c488af32e2216398b5a960C",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Combs
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    bFirerate: 655,
                    "RecoilReturnSpeedHandRotation": 2.5,
                    "RecoilDampingHandRotation": 0.85,
                    "RecoilCamera": 0.058,
                    "RecoilForceBack": 239,
                    "RecoilForceUp": 80,
                    "RecolDispersion": 10,
                    Ergonomics: 71
                },
                fleaPriceRoubles: 60000,
                parentId: this.DBitems[IDDL.WEAPON_MDR556]._parent,
                handbookPriceRoubles: 60000,
                handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
                locales: {
                    "en": {
                        "name": "Defense Group DG-56 5.56x45 assault rifle",
                        "shortName": "DG-56",
                        "description": "With excellent recoil control and full-auto fire, this bullpup assault rifle dominates at mid to long-range."
                    },
                    "ch": {
                        "name": "Defense Group DG-56 5.56x45 突击步枪",
                        "shortName": "DG-56",
                        "description": "With excellent recoil control and full-auto fire, this bullpup assault rifle dominates at mid to long-range."
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_MDR556,
                        newSlotName: mod_slot_1.mod_slot.magazine
                    },
                    {
                        id: IDDL.MK17_TOP,
                        newSlotName: mod_slot_1.mod_slot.scope
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "DG-56",
                        Templates: [
                            IDDL.WEAPON_DG56
                        ],
                        Level2: 150,
                        Level3: 300
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_DG56,
                        "_id": "220020DF056DF05600000000",
                        "_items": [
                            {
                                "_id": "220020DF056DF05600000001",
                                "_tpl": IDDL.WEAPON_DG56
                            },
                            {
                                "_id": "220020DF056DF05600000063",
                                "_tpl": "55d4887d4bdc2d962f8b4570",
                                "parentId": "220020DF056DF05600000001",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020DF056DF05600000048",
                                "_tpl": IDDL.REAR_SIGHT_DG56,
                                "parentId": "220020DF056DF05600000001",
                                "slotId": "mod_sight_rear"
                            },
                            {
                                "_id": "220020DF056DF056000000e7",
                                "_tpl": IDDL.BARREL_DG56_DEF,
                                "parentId": "220020DF056DF05600000001",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020DF056DF056000000e8",
                                "_tpl": IDDL.MUZZLE_DG56,
                                "parentId": "220020DF056DF056000000e7",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020DF056DF05600000011",
                                "_tpl": IDDL.HANDGUARD_DG56_DEF,
                                "parentId": "220020DF056DF056000000e7",
                                "slotId": mod_slot_1.mod_slot.handguard
                            },
                            {
                                "_id": "220020DF056DF05600000111",
                                "_tpl": IDDL.MOUNT_BOTT_DEF,
                                "parentId": "220020DF056DF05600000011",
                                "slotId": mod_slot_1.mod_slot.foregrip
                            },
                            {
                                "_id": "220020DF056DF05600000021",
                                "_tpl": IDDL.STOCK_DG56_DEF,
                                "parentId": "220020DF056DF05600000001",
                                "slotId": mod_slot_1.mod_slot.stock
                            }
                        ],
                        "_name": "DG-56 Default",
                        "_parent": "220020DF056DF05600000001",
                        "_type": "Preset"
                    },
                    {
                        "_changeWeaponName": false,
                        "_id": "220020DF156DF15600000000",
                        "_items": [
                            {
                                "_id": "220020DF156DF15600000001",
                                "_tpl": IDDL.WEAPON_DG56
                            },
                            {
                                "_id": "220020DF156DF15600000063",
                                "_tpl": "55d4887d4bdc2d962f8b4570",
                                "parentId": "220020DF156DF15600000001",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020DF156DF15600000048",
                                "_tpl": IDDL.REAR_SIGHT_DG56,
                                "parentId": "220020DF156DF15600000001",
                                "slotId": "mod_sight_rear"
                            },
                            {
                                "_id": "220020DF156DF156000000e7",
                                "_tpl": IDDL.BARREL_DG56_SHORT,
                                "parentId": "220020DF156DF15600000001",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020DF156DF156000000e8",
                                "_tpl": IDDL.MUZZLE_DG56_SHORT,
                                "parentId": "220020DF156DF156000000e7",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020DF156DF15600000021",
                                "_tpl": IDDL.STOCK_DG56_DEF,
                                "parentId": "220020DF156DF15600000001",
                                "slotId": mod_slot_1.mod_slot.stock
                            }
                        ],
                        "_name": "DG-56 Short",
                        "_parent": "220020DF156DF15600000001",
                        "_type": "Preset"
                    }
                ]
            },
            barrel_dg56_def: {
                itemTplToClone: IDDL.BARRAL_MDR556,
                newId: IDDL.BARREL_DG56_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/barrel_dg56_def.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9609",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDDL.BARRAL_MDR556)._props.filters[0].Filter),
                                            IDDL.MUZZLE_DG56
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.handguard,
                            "_id": "5c488af32e2216398b5a960C",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Handguards
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                    ],
                    Weight: 0.78,
                    "Width": 2,
                    "Height": 1,
                    Recoil: barrel_base_line.Recoil - 1,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: barrel_base_line.CenterOfImpact - 0.002,
                    Velocity: barrel_base_line.Velocity,
                    "HeatFactor": 0.98,
                    "CoolFactor": 0.99,
                    Ergonomics: barrel_base_line.Ergonomics
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARRAL_MDR556]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "DG-56 5.56x45 standard barrel",
                        "shortName": "Std.",
                        "description": "Default barrel for DG-56 in 5.56x45."
                    },
                    "ch": {
                        "name": "DG-56 5.56x45 标准枪管",
                        "shortName": "标准枪管",
                        "description": "5.56x45口径DG-56的标准枪管。"
                    }
                },
                addtoTraders: false
            },
            barrel_dg56_hvylong: {
                itemTplToClone: IDDL.BARRAL_MDR556,
                newId: IDDL.BARREL_DG56_HVYLONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/barrel_dg56_hvylong.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9609",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDDL.BARRAL_MDR556)._props.filters[0].Filter),
                                            IDDL.MUZZLE_DG56
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.handguard,
                            "_id": "5c488af32e2216398b5a960C",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Handguards
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                    ],
                    Weight: 0.825,
                    "Width": 2,
                    "Height": 1,
                    Recoil: barrel_base_line.Recoil - 3,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: barrel_base_line.CenterOfImpact - 0.01,
                    Velocity: barrel_base_line.Velocity + 0.3,
                    "HeatFactor": 0.96,
                    "CoolFactor": 1,
                    Ergonomics: barrel_base_line.Ergonomics - 2
                },
                fleaPriceRoubles: 22000,
                parentId: this.DBitems[IDDL.BARRAL_MDR556]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "DG-56 5.56x45 long heavy barrel",
                        "shortName": "L. H.",
                        "description": "Long heavy barrel for DG-56 in 5.56x45."
                    },
                    "ch": {
                        "name": "DG-56 5.56x45 长重型枪管",
                        "shortName": "长重型",
                        "description": "5.56x45口径DG-56的长重型枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_dg56_hvyshort: {
                itemTplToClone: IDDL.BARRAL_MDR556,
                newId: IDDL.BARREL_DG56_HVYSHORT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/barrel_dg56_hvyshort.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9609",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDDL.BARRAL_MDR556)._props.filters[0].Filter),
                                            IDDL.MUZZLE_DG56
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.handguard,
                            "_id": "5c488af32e2216398b5a960C",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Handguards
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                    ],
                    Weight: 0.8,
                    "Width": 2,
                    "Height": 1,
                    Recoil: barrel_base_line.Recoil - 2,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: barrel_base_line.CenterOfImpact - 0.005,
                    Velocity: barrel_base_line.Velocity,
                    "HeatFactor": 0.97,
                    "CoolFactor": 0.99,
                    Ergonomics: barrel_base_line.Ergonomics - 1
                },
                fleaPriceRoubles: 22000,
                parentId: this.DBitems[IDDL.BARRAL_MDR556]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "DG-56 5.56x45 short heavy barrel",
                        "shortName": "S. H.",
                        "description": "Short heavy barrel for DG-56 in 5.56x45."
                    },
                    "ch": {
                        "name": "DG-56 5.56x45 短重型枪管",
                        "shortName": "短重型",
                        "description": "5.56x45口径DG-56的短重型枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_dg56_light: {
                itemTplToClone: IDDL.BARRAL_MDR556,
                newId: IDDL.BARREL_DG56_LIGHT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/barrel_dg56_light.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9609",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDDL.BARRAL_MDR556)._props.filters[0].Filter),
                                            IDDL.MUZZLE_DG56
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.handguard,
                            "_id": "5c488af32e2216398b5a960C",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Handguards
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                    ],
                    Weight: 0.70,
                    "Width": 2,
                    "Height": 1,
                    Recoil: barrel_base_line.Recoil,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: barrel_base_line.CenterOfImpact + 0.002,
                    Velocity: barrel_base_line.Velocity,
                    "HeatFactor": 0.97,
                    "CoolFactor": 0.99,
                    Ergonomics: barrel_base_line.Ergonomics + 2
                },
                fleaPriceRoubles: 22000,
                parentId: this.DBitems[IDDL.BARRAL_MDR556]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "DG-56 5.56x45 light barrel",
                        "shortName": "Light",
                        "description": "Light barrel for DG-56 in 5.56x45."
                    },
                    "ch": {
                        "name": "DG-56 5.56x45 轻型枪管",
                        "shortName": "轻型",
                        "description": "5.56x45口径DG-56的轻型枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 16000
                    }
                ]
            },
            barrel_dg56_long: {
                itemTplToClone: IDDL.BARRAL_MDR556,
                newId: IDDL.BARREL_DG56_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/barrel_dg56_long.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9609",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDDL.BARRAL_MDR556)._props.filters[0].Filter),
                                            IDDL.MUZZLE_DG56
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.handguard,
                            "_id": "5c488af32e2216398b5a960C",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Handguards
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                    ],
                    Weight: 0.81,
                    "Width": 2,
                    "Height": 1,
                    Recoil: barrel_base_line.Recoil - 2,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: barrel_base_line.CenterOfImpact - 0.006,
                    Velocity: barrel_base_line.Velocity + 0.3,
                    "HeatFactor": 0.96,
                    "CoolFactor": 1.01,
                    Ergonomics: barrel_base_line.Ergonomics - 1
                },
                fleaPriceRoubles: 22000,
                parentId: this.DBitems[IDDL.BARRAL_MDR556]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "DG-56 5.56x45 long barrel",
                        "shortName": "Long",
                        "description": "Long barrel for DG-56 in 5.56x45."
                    },
                    "ch": {
                        "name": "DG-56 5.56x45 长枪管",
                        "shortName": "长枪管",
                        "description": "5.56x45口径DG-56的长枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 19000
                    }
                ]
            },
            barrel_dg56_short: {
                itemTplToClone: IDDL.BARRAL_MDR556,
                newId: IDDL.BARREL_DG56_SHORT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/barrel_dg56_short.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9609",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDDL.BARRAL_MDR556)._props.filters[0].Filter),
                                            IDDL.MUZZLE_DG56,
                                            IDDL.MUZZLE_DG56_SHORT
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.49,
                    "Width": 1,
                    "Height": 1,
                    Recoil: barrel_base_line.Recoil + 7,
                    ExtraSizeLeft: 1,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: 0.072,
                    Velocity: barrel_base_line.Velocity - 10.1,
                    "HeatFactor": 1.06,
                    "CoolFactor": 1.09,
                    Ergonomics: barrel_base_line.Ergonomics + 7
                },
                fleaPriceRoubles: 22000,
                parentId: this.DBitems[IDDL.BARRAL_MDR556]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "DG-56 5.56x45 short barrel",
                        "shortName": "Short",
                        "description": "Short barrel for DG-56 in 5.56x45."
                    },
                    "ch": {
                        "name": "DG-56 5.56x45 短枪管",
                        "shortName": "短枪管 556",
                        "description": "5.56x45口径DG-56的短枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 16000
                    }
                ]
            },
            sight_dg56: {
                itemTplToClone: IDDL.REAR_SIGHT_AR15,
                newId: IDDL.REAR_SIGHT_DG56,
                overrideProperties: {
                    Weight: 0.01,
                    "Prefab": {
                        "path": "assets/dg56/mods/sight_rear_dg56.bundle",
                        "rcid": ""
                    },
                    ExtraSizeDown: 1,
                    ExtraSizeForceAdd: false,
                    ConflictingItems: []
                },
                fleaPriceRoubles: 2000,
                parentId: this.DBitems[IDDL.REAR_SIGHT_AR15]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "DG-56 rear sight",
                        "shortName": "DG-56",
                        "description": "Rear sight for DG-56."
                    },
                    "ch": {
                        "name": "DG-56 照门组件",
                        "shortName": "DG-56",
                        "description": "DG-56的照门。"
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            muzzle_dg56: {
                itemTplToClone: IDDL.MUZZLE_AR15,
                newId: IDDL.MUZZLE_DG56,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/muzzle_dg56.bundle",
                        "rcid": ""
                    },
                    Weight: 0.15,
                    Slots: []
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.MUZZLE_AR15]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "DG-56 muzzle device",
                        "shortName": "DG-56",
                        "description": "Standard muzzle device for DG-56."
                    },
                    "ch": {
                        "name": "DG-56 枪口装置",
                        "shortName": "DG-56",
                        "description": "DG-56的原装枪口装置。"
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            muzzle_dg56_short: {
                itemTplToClone: IDDL.MUZZLE_AKS_74U,
                newId: IDDL.MUZZLE_DG56_SHORT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/muzzle_dg56_short.bundle",
                        "rcid": ""
                    },
                    Weight: 0.103,
                    Slots: []
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.MUZZLE_AR15]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "DG-56 short barrel muzzle device",
                        "shortName": "Short",
                        "description": "Muzzle device for DG-56 short barrel."
                    },
                    "ch": {
                        "name": "DG-56 短枪管枪口装置",
                        "shortName": "Short",
                        "description": "DG-56的短枪管枪口装置。"
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            mount_dg56_side: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_SIDE_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/mount_dg56_def.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "DG-56 side rail",
                        "shortName": "DG-56 side",
                        "description": "Rail installed at the side of DG-56 handguard."
                    },
                    "ch": {
                        "name": "DG-56 侧导轨",
                        "shortName": "DG-56 侧",
                        "description": "安装在DG-56护木侧面的导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ]
            },
            mount_dg56_bott: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_BOTT_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/mount_dg56_bott_def.bundle",
                        "rcid": ""
                    },
                    Slots: []
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "DG-56 bottom rail",
                        "shortName": "DG-56 bottom",
                        "description": "Rail installed at the bottom of DG-56 handguard."
                    },
                    "ch": {
                        "name": "DG-56 底导轨",
                        "shortName": "DG-56 底",
                        "description": "安装在DG-56护木底面的导轨。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.MOUNT_VECTOR_BOTTOM,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ]
            },
            mount_dg56_light: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_LIGHT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/mount_dg56_light.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Ergonomics: -1,
                    Weight: 0.11,
                    ConflictingItems: [
                        IDDL.MOUNT_SIDE_DEF
                    ],
                    Recoil: -0.5
                },
                fleaPriceRoubles: 5000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "DG-56 integrated rail",
                        "shortName": "DG-56 Integ.",
                        "description": "Integrated rail installed at the bottom of DG-56 handguard."
                    },
                    "ch": {
                        "name": "DG-56 整合式导轨",
                        "shortName": "DG-56 整合式",
                        "description": "安装在DG-56护木底面的整合式导轨。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.MOUNT_VECTOR_BOTTOM,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.MOUNT_MLOK_25,
                        newSlotName: mod_slot_1.mod_slot.tactical_001,
                        tgtSlotName: mod_slot_1.mod_slot.tactical
                    },
                    {
                        id: IDDL.MOUNT_MLOK_25,
                        newSlotName: mod_slot_1.mod_slot.tactical_002,
                        tgtSlotName: mod_slot_1.mod_slot.tactical
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 5000
                    }
                ]
            },
            handguard_dg56_def: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_DG56_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/handguard_dg56_def.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.mount_002,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MOUNT_SIDE_DEF
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.mount_001,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MOUNT_SIDE_DEF
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.foregrip,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MOUNT_BOTT_DEF,
                                            IDDL.MOUNT_LIGHT
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ConflictingItems: [],
                    Weight: 0.30,
                    Ergonomics: 2,
                    ExtraSizeLeft: 0,
                    Width: 1,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "DG-56 standard handguard",
                        "shortName": "Std.",
                        "description": "Standard handguard for DG-56."
                    },
                    "ch": {
                        "name": "DG-56 标准护木",
                        "shortName": "标准",
                        "description": "DG-56的标准护木。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 16000
                    }
                ]
            },
            handguard_dg56_long: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_DG56_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/handguard_dg56_long.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [],
                    Weight: 0.38,
                    Ergonomics: 0,
                    ExtraSizeLeft: 0,
                    Width: 1,
                    ExtraSizeForceAdd: false,
                    Recoil: -1
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "DG-56 extended handguard",
                        "shortName": "Ext.",
                        "description": "Extended handguard for DG-56."
                    },
                    "ch": {
                        "name": "DG-56 延长护木",
                        "shortName": "延长",
                        "description": "DG-56的延长护木。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 16000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.MOUNT_VECTOR_BOTTOM,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.MOUNT_MLOK_25,
                        newSlotName: mod_slot_1.mod_slot.tactical_001,
                        tgtSlotName: mod_slot_1.mod_slot.tactical
                    }
                ]
            },
            stock_dg56_def: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.STOCK_DG56_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/stock_dg56_def.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    "Recoil": -1,
                    "Ergonomics": 1,
                    "Weight": 0.13,
                    RaidModdable: false
                },
                fleaPriceRoubles: 14000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 14000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "DG-56 standard buttplate",
                        "shortName": "std.",
                        "description": "Standard buttplate for DG-56."
                    },
                    "ch": {
                        "name": "DG-56 标准枪托垫",
                        "shortName": "标准",
                        "description": "DG-56的标准枪托垫。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 12000
                    }
                ]
            },
            stock_dg56_ergo: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.STOCK_DG56_ERGO,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/stock_dg56_ergo.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    "Recoil": 0,
                    "Ergonomics": 3,
                    "Weight": 0.135,
                    RaidModdable: false
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 18000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "Extended TP-9 buttplate",
                        "shortName": "TP-9",
                        "description": "Buttplate for DG-56."
                    },
                    "ch": {
                        "name": "TP-9 加长枪托垫",
                        "shortName": "TP-9",
                        "description": "DG-56的枪托垫。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            stock_dg56_padded: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.STOCK_DG56_PADDED,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/stock_dg56_padded.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    "Recoil": -2,
                    "Ergonomics": 2,
                    "Weight": 0.132,
                    RaidModdable: false
                },
                fleaPriceRoubles: 38000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 38000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "Soldier Pro padded buttplate",
                        "shortName": "Soldier Pro",
                        "description": "Buttplate for DG-56."
                    },
                    "ch": {
                        "name": "Soldier Pro 枪托垫",
                        "shortName": "Soldier Pro",
                        "description": "DG-56的枪托垫。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 48000
                    }
                ]
            },
            stock_dg56_reduc: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.STOCK_DG56_REDUC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/stock_dg56_reduc.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    "Recoil": -4,
                    "Ergonomics": 0,
                    "Weight": 0.133,
                    RaidModdable: false
                },
                fleaPriceRoubles: 26000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 26000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "Recoil Reduction buttplate",
                        "shortName": "Reduction",
                        "description": "Buttplate for DG-56."
                    },
                    "ch": {
                        "name": "降后坐枪托垫",
                        "shortName": "降后坐",
                        "description": "DG-56的枪托垫。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 22000
                    }
                ]
            },
            stock_dg56_rubber: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.STOCK_DG56_RUBBER,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/stock_dg56_rubber.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    "Recoil": -1,
                    "Ergonomics": 2,
                    "Weight": 0.129,
                    RaidModdable: false
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 18000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "Hardened Rubber CQC buttplate",
                        "shortName": "Hardened Rubber",
                        "description": "Buttplate for DG-56."
                    },
                    "ch": {
                        "name": "强化橡胶近战枪托垫",
                        "shortName": "强化橡胶",
                        "description": "DG-56的枪托垫。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            pg_dg56_tac: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_DG56_TAC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/pistolgrip_dg56_tac.bundle",
                        "rcid": ""
                    },
                    Recoil: -1,
                    Weight: 0.001,
                    Ergonomics: 0,
                    ExtraSizeDown: 0
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "Q22 tactical grip",
                        "shortName": "Q22",
                        "description": "Pistol grip tape for DG-56."
                    },
                    "ch": {
                        "name": "Q22 战术握把",
                        "shortName": "Q22",
                        "description": "DG-56的手枪式握把胶带。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 8000
                    }
                ]
            },
            pg_dg56_ass: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_DG56_ASS,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/pistolgrip_dg56_ass.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 2,
                    Weight: 0.001,
                    ExtraSizeDown: 0
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "Varanus steady grip",
                        "shortName": "Varanus",
                        "description": "Pistol grip tape for DG-56."
                    },
                    "ch": {
                        "name": "Varanus高强度握把",
                        "shortName": "Varanus",
                        "description": "DG-56的手枪式握把胶带。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 8000
                    }
                ]
            },
            pg_dg56_aim: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_DG56_AIM,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/pistolgrip_dg56_aim.bundle",
                        "rcid": ""
                    },
                    Recoil: -0.5,
                    Ergonomics: 1,
                    Weight: 0.001,
                    ExtraSizeDown: 0
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "Harken OP grip",
                        "shortName": "OP",
                        "description": "Pistol grip tape for DG-56."
                    },
                    "ch": {
                        "name": "Harken OP 握把",
                        "shortName": "OP",
                        "description": "DG-56的手枪式握把胶带。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 8000
                    }
                ]
            },
            comb_dg56_tac: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.COMB_DG56_TAC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/comb_dg56_tac.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.4,
                    Ergonomics: 2,
                    Recoil: -4.5
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 15000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "5GN tac-comb",
                        "shortName": "5GN",
                        "description": "Comb for DG-56"
                    },
                    "ch": {
                        "name": "5GN 战术腮托",
                        "shortName": "5GN",
                        "description": "DG-56的腮托"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 15000
                    }
                ]
            },
            comb_dg56_ammo: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.COMB_DG56_AMMO,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/comb_dg56_ammo.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.46,
                    Ergonomics: 2,
                    Recoil: -3
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 15000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "Padded shell sleeve comb",
                        "shortName": "Padded",
                        "description": "Comb for DG-56"
                    },
                    "ch": {
                        "name": "衬垫弹药套腮托",
                        "shortName": "衬垫",
                        "description": "DG-56的腮托"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 15000
                    }
                ]
            },
            comb_dg56_ergo: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.COMB_DG56_ERGO,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/comb_dg56_ergo.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.51,
                    Ergonomics: 5,
                    Recoil: -1.5
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 15000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "FSS Last Stand comb",
                        "shortName": "Last Stand",
                        "description": "Comb for DG-56"
                    },
                    "ch": {
                        "name": "FSS Last Stand 腮托",
                        "shortName": "Last Stand",
                        "description": "DG-56的腮托"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 15000
                    }
                ]
            },
            comb_dg56_pouch: {
                itemTplToClone: IDDL.STOCK_PAD,
                newId: IDDL.COMB_DG56_POUCH,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/dg56/mods/comb_dg56_pouch.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.42,
                    Ergonomics: 3,
                    Recoil: -3
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.STOCK_PAD]._parent,
                handbookPriceRoubles: 15000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "Warrent Control comb",
                        "shortName": "Control",
                        "description": "Comb for DG-56"
                    },
                    "ch": {
                        "name": "Warrent Control 腮托",
                        "shortName": "Control",
                        "description": "DG-56的腮托"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 15000
                    }
                ]
            }
        };
    }
    onLoadMod() {
        const CustomItem = this.container.resolve("CustomItemService");
        const MMA = this.MMA;
        const ModifyInfos = {};
        for (let x in this.data) {
            var id;
            if (this.data[x].newId != undefined) {
                id = this.data[x].newId;
            }
            else {
                id = x;
            }
            const item = {
                itemTplToClone: this.data[x].itemTplToClone,
                overrideProperties: this.data[x].overrideProperties,
                newId: id,
                fleaPriceRoubles: this.data[x].fleaPriceRoubles,
                parentId: this.data[x].parentId,
                handbookPriceRoubles: this.data[x].handbookPriceRoubles,
                handbookParentId: this.data[x].handbookParentId,
                locales: this.data[x].locales
            };
            CustomItem.createItemFromClone(item);
            MMA.registerNewItem(id);
            if (this.data[x].addtoTraders) {
                MMA.traderAddItems(id, this.data[x].barterScheme[0].count, NTrader_1.NTrader.Default, this.data[x].loyallevelitems);
            }
            if (this.data[x].copySlot) {
                var index = 0;
                for (let y in this.data[x].copySlots) {
                    var slotData = this.data[x].copySlots[y];
                    var tgtSlotName = slotData.tgtSlotName == undefined ? slotData.newSlotName : slotData.tgtSlotName;
                    var newFilter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(tgtSlotName, slotData.id)._props.filters[0].Filter);
                    var newSlot = this.MMA.newSlot(slotData.newSlotName, "F" + index.toString(16), id, false, false, newFilter);
                    this.DBitems[id]._props.Slots.push(newSlot);
                    index += 1;
                }
            }
            MMA.processItemCartridges(this.DBitems[id]);
            MMA.processItemChambers(this.DBitems[id]);
            MMA.processItemSlots(this.DBitems[id]);
            if (this.data[x].masteries) {
                const masteries = this.data[x].masterySections;
                if (MMA.isMasteringExists(masteries[0].Name)) {
                    for (let y in masteries[0].Templates) {
                        MMA.weaponAddtoMastering(masteries[0].Templates[y], masteries[0].Name);
                    }
                }
                else {
                    this.DBmasterings.push(masteries[0]);
                }
            }
            if (this.data[x].addweaponpreset) {
                const presets = this.data[x].weaponpresets;
                for (let y in presets) {
                    MMA.addPreset(presets[y]);
                }
            }
            if (this.data[x].addtoModSlots) {
                var MODINFO = {
                    "ItemId": id,
                    "ItemSlotClone": {
                        "SlotCloneFromId": this.data[x].itemTplToClone,
                        "TargetSlots": this.data[x].modSlot
                    },
                    "ConflictCloneFromId": id
                };
                MMA.modifyItems(MODINFO);
            }
        }
        MMA.traderGenerateAssortFromPreset("220020DF056DF05600000000", assortConfig.preset1.price, NTrader_1.NTrader.Default, assortConfig.preset1.loyaltyLevel, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset("220020DF156DF15600000000", assortConfig.preset2.price, NTrader_1.NTrader.Default, assortConfig.preset2.loyaltyLevel, Money_1.Money.ROUBLES);
        ModifyInfos[IDDL.WEAPON_DG56] = {
            ItemId: IDDL.WEAPON_DG56,
            WeaponCaliberCloneFromId: "itself"
        };
        MMA.loadModifierObj(ModifyInfos);
        for (let lang in this.DBlocales) {
            this.DBlocales[lang]["220020DF156DF15600000000"] = "";
        }
        this.COMB_AMMO();
        this.QBZ97_compitability();
    }
    COMB_AMMO() {
        const id = IDDL.COMB_DG56_AMMO;
        for (var i = 0; i < 8; i++) {
            var newSlot = {
                "_name": `mod_tactical_00${i}`,
                "_id": "5c488af32e2216398b5a9609",
                "_parent": "5c488a752e221602b412af63",
                "_props": {
                    "filters": [
                        {
                            "Shift": 0,
                            "Filter": [
                                ...this.JsonUtil.clone(this.DBitems[IDDL.WEAPON_MDR556]._props.Chambers[0]._props.filters[0].Filter)
                            ]
                        }
                    ]
                },
                "_required": false,
                "_mergeSlotWithChildren": false,
                "_proto": "55d30c4c4bdc2db4468b457e"
            };
            this.DBitems[id]._props.Slots.push(newSlot);
        }
        this.MMA.processItemSlots(this.DBitems[id]);
    }
    QBZ97_compitability() {
        const id = IDDL.WEAPON_QBZ97;
        if (this.DBitems[id] != undefined) {
            var newSlot = {
                "_name": mod_slot_1.mod_slot.stock,
                "_id": "5c488af32e2216398b5a960C",
                "_parent": "5c488a752e221602b412af63",
                "_props": {
                    "filters": [
                        {
                            "Shift": 0,
                            "Filter": [
                                ...List_Stocks
                            ]
                        }
                    ]
                },
                "_required": true,
                "_mergeSlotWithChildren": false,
                "_proto": "55d30c4c4bdc2db4468b457e"
            };
            var newSlot2 = {
                "_name": mod_slot_1.mod_slot.stock_000,
                "_id": "5c488af32e2216398b5a960C",
                "_parent": "5c488a752e221602b412af63",
                "_props": {
                    "filters": [
                        {
                            "Shift": 0,
                            "Filter": [
                                ...List_Combs
                            ]
                        }
                    ]
                },
                "_required": false,
                "_mergeSlotWithChildren": false,
                "_proto": "55d30c4c4bdc2db4468b457e"
            };
            this.DBitems[id]._props.Slots.push(newSlot);
            this.DBitems[id]._props.Slots.push(newSlot2);
            this.MMA.processItemSlots(this.DBitems[id]);
        }
    }
}
module.exports = Mass_DG56;
//# sourceMappingURL=Mass_DG56.js.map