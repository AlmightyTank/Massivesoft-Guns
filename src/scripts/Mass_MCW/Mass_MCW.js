"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const handbookCategory_1 = require("../../enum/handbookCategory");
const IDDL = {
    WEAPON_MCW_FDE: "020020AACBBFDE0000000000",
    PRESET_FDE: "220020AACBBFDE0000000",
    WEAPON_MCW_BLK: "020020AACBBB1C0000000000",
    PRESET_BLK: "220020AACBBB1C0000000",
    WEAPON_MCW_AIM: "020020AACBBA1A0000000000",
    PRESET_AIM: "220020AACBBA1A0000000",
    WEAPON_MCW_300: "020020AACBB3000000000000",
    PRESET_300: "220020AACBB3000000000",
    WEAPON_MCW_SNP: "020020AACBBCFB0000000000",
    PRESET_SNP: "220020AACBBCFB0000000",
    WEAPON___SCAR_L: "6184055050224f204c1da540",
    WEAPON___SCAR_H: "6183afd850224f204c1da514",
    WEAPON_SIG__MCX: "5fbcc1d9016cce60e8341ab3",
    WEAPON__MDR_308: "5dcbd56fdbd3d91b3e5468d5",
    REC_MCW_FDE: "042042AACBBFDE0000000000",
    REC_MCW_BLK: "042042AACBBB1C0000000000",
    REC_MCW_300: "042042AACBB3000000000000",
    REC_MCW_SNP: "042042AACBBCFB0000000000",
    REC_MCW_PRT: "042042AACBBBBF0000000000",
    REC___SCAR_L: "618405198004cc50514c3594",
    BARREL_MCW__DEF: "04B04BAACBBFDE4B00000000",
    BARREL_MCW__D30: "04B04BAACBB3004B00000000",
    BARREL_MCW__HVY: "04B14BAACBBFDE4B10000000",
    BARREL_MCW__H30: "04B14BAACBB3004B10000000",
    BARREL_MCW_HVY_LONG: "04B24BAACBBFDE4B20000000",
    BARREL_MCW_HVY_L300: "04B24BAACBB3004B20000000",
    BARREL_MCW_HVY_SHRT: "04B34BAACBBFDE4B30000000",
    BARREL_MCW_HVY_S300: "04B34BAACBB3004B30000000",
    BARREL_MCW_LGT_LONG: "04B44BAACBBFDE4B40000000",
    BARREL_MCW_LGT_L300: "04B44BAACBB3004B40000000",
    BARREL_MCW_LONG: "04B54BAACBBFDE4B50000000",
    BARREL_MCW_L300: "04B54BAACBB3004B50000000",
    BARREL_MCW__SIL: "04B64BAACBBFDE4B60000000",
    BARREL_MCW__S30: "04B64BAACBB3004B60000000",
    BARREL_MCW_HVY2: "04B74BAACBBFDE4B70000000",
    BARREL_MCW_H302: "04B74BAACBB3004B70000000",
    BARREL_MCW_HVY_SHT3: "04B84BAACBBFDE4B80000000",
    BARREL_MCW_HVY_S303: "04B84BAACBB3004B80000000",
    BARREL_MCW_HVY_MARK: "04B94BAACBBFDE4B90000000",
    BARREL_MCW_HVY_M300: "04B94BAACBB3004B90000000",
    BARREL_MCW_MAKRSMAN: "04BA4BAACBBFDE4BA0000000",
    BARREL_MCW_MAKRS300: "04BA4BAACBB3004BA0000000",
    BARREL_MCW_SIL450: "04BB4BAACBBFDE4BB0000000",
    BARREL_MCW_SIL430: "04BB4BAACBB3004BB0000000",
    BARREL_SCARL__10: "6183fc15d3a39d50044c13e9",
    BARREL_SCARH__13: "618168b350224f204c1da4d8",
    BARREL_SCARH__16: "6183b0711cb55961fa0fdcad",
    CHARGE_SCARH: "6181688c6c780c1e710c9b04",
    CHARGE_MCW_NONREC: "044044AACBBFDE4400000000",
    CHARGE_MCW_RECIPR: "044144AACBBFDE4410000000",
    HANDGUARD_MCW__DEF: "041041AACBBFDE0000000000",
    HANDGUARD_MCW__BLK: "041041AACBBB1C0000000000",
    HANDGUARD_MCW_HVY_MARK: "041141AACBBB1C4110000000",
    HANDGUARD_MCW_HVY: "041241AACBBB1C4120000000",
    HANDGUARD_MCW_HVY_LONG: "041341AACBBB1C4130000000",
    HANDGUARD_MCW_HVY_SHRT: "041441AACBBB1C4140000000",
    HANDGUARD_MCW_HVY_SHRT2_FDE: "041541AACBBFDE4150000000",
    HANDGUARD_MCW_HVY_SHRT2_BLK: "041541AACBBB1C4150000000",
    HANDGUARD_MCW_LGT_LONG: "041641AACBBB1C4160000000",
    HANDGUARD_MCW_LONG: "041741AACBBB1C4170000000",
    HANDGUARD_MCW_SIL: "041841AACBBB1C4180000000",
    HANDGUARD_MCW_HVY2: "041941AACBBB1C4190000000",
    HANDGUARD_MCW_HVYSHORT3: "041A41AACBBB1C41A0000000",
    HANDGUARD_MCW_MARKSMAN: "041B41AACBBB1C41B0000000",
    HANDGUARD_MCW_SIL450: "041C41AACBBB1C41C0000000",
    HANDGUARD_HK416_DEF: "5bb20de5d4351e0035629e59",
    STOCK_MCW_ASS: "047047AACBBFDE4700000000",
    STOCK_MCW_LGT: "047447AACBBFDE4740000000",
    STOCK_MCW_HVY: "047147AACBBFDE4710000000",
    STOCK_MCW_PRC: "047247AACBBFDE4720000000",
    STOCK_MCW_TUB: "047347AACBBFDE4730000000",
    STOCK_MCW_TUB_BLK: "047347AACBBB1C4730000000",
    STOCK_MCW_TAC: "047547AACBBFDE4750000000",
    STOCK_MCW_TAH: "047647AACBBFDE4760000000",
    STOCK_AK74_WOOD: "5649b1c04bdc2d16268b457c",
    STOCK_MP7A2: "5bd704e7209c4d00d7167c31",
    STOCK_CTR: "5d135e83d7ad1a21b83f42d8",
    MAG_PMAG_30_556: "5d1340b3d7ad1a0b52682ed7",
    MAG_ISOH____MAG: "02F02FF15FF15F0000000000",
    MOUNT_MLOK_25: "5b7be47f5acfc400170e2dd2",
    MOUNT_MLOK_41: "5b7be4895acfc400170e2dd5",
    MOUNT_KEYMOD: "59e0bdb186f774156f04ce82",
    MAG_MAG5_100_556: "5c6592372e221600133e47d7",
    MAG_MAG5_60_556: "544a37c44bdc2d25388b4567",
    MAG_PAMG_D60_556: "59c1383d86f774290a37e0ca",
    FRONT_SIGHT_MAGPUL: "5bc09a30d4351e00367fb7c8",
    REAR_SIGHT_MAGPUL: "5bc09a18d4351e003562b68e",
    PG_AR15_MAGPUL_MOE: "55802f5d4bdc2dac148b458f",
    PG_MCW_SNP: "043043AACBBCFB4300000000",
    HANDGUARD_M_LOK: "5a788068c5856700137e4c8f",
    HANDGUARD_KEY_MOD: "5cf656f2d7f00c06585fb6eb",
    TAC_KAC_PANEL: "5d123a3cd7ad1a004e476058",
    MUZZLE_SF3P: "5c7fb51d2e2216001219ce11",
    MUZZLE_MCW_450: "04C04CAACBBFDE4C00000000",
    MUZZLE_MCW_300: "04C14CAACBBFDE4C10000000",
    SILENCER_MCW_SIL: "04BF4BAACBBFDE4BF0000000",
    SILENCER_MCW_SIL450: "04BE4BAACBBFDE4BE0000000",
    SILENCER_QDC: "5dfa3d2b0dee1b22f862eade",
    PANEL_KAC: "5d123a3cd7ad1a004e476058",
    PANEL_LGT_LONG_4: "043643AACBBB1C4360000000",
    PANEL_LONG_4: "043743AACBBB1C4370000000",
    PANEL_LONG_3: "043743AACBBFDE4370000000",
    PANEL_HVY2_4: "043943AACBBB1C4390000000",
    PANEL_HVY2_3: "043943AACBBFDE4390000000",
    PANEL_HVY2_2: "043943AACBB3004390000000",
    PANEL_MARKSMAN: "043B43AACBBB1C43B0000000",
    PANEL_SIL4501: "043C43AACBBB1C43C0000000",
    PANEL_SIL4502: "043C43AACBBFDE43C0000000",
    MAG_MCW_60: "02F02FAACBBB1C0600000000",
    MAG_MCW_BIG: "02f02faa4aa4ccc100000000"
};
const List_stocks = [
    IDDL.STOCK_MCW_LGT,
    IDDL.STOCK_MCW_ASS,
    IDDL.STOCK_MCW_HVY,
    IDDL.STOCK_MCW_PRC,
    IDDL.STOCK_MCW_TAH,
    IDDL.STOCK_MCW_TUB,
    IDDL.STOCK_MCW_TUB_BLK
];
const List_rec = [
    IDDL.REC_MCW_FDE,
    IDDL.REC_MCW_BLK,
    IDDL.REC_MCW_300,
    IDDL.REC_MCW_SNP,
    IDDL.REC_MCW_PRT
];
const List_barrels_556 = [
    IDDL.BARREL_MCW__DEF,
    IDDL.BARREL_MCW__HVY,
    IDDL.BARREL_MCW_HVY_LONG,
    IDDL.BARREL_MCW_HVY_SHRT,
    IDDL.BARREL_MCW_LGT_LONG,
    IDDL.BARREL_MCW_LONG,
    IDDL.BARREL_MCW__SIL,
    IDDL.BARREL_MCW_HVY2,
    IDDL.BARREL_MCW_HVY_SHT3,
    IDDL.BARREL_MCW_HVY_MARK,
    IDDL.BARREL_MCW_MAKRSMAN,
    IDDL.BARREL_MCW_SIL450
];
const List_barrels_300 = [
    IDDL.BARREL_MCW__D30,
    IDDL.BARREL_MCW__H30,
    IDDL.BARREL_MCW_HVY_L300,
    IDDL.BARREL_MCW_HVY_S300,
    IDDL.BARREL_MCW_LGT_L300,
    IDDL.BARREL_MCW_L300,
    IDDL.BARREL_MCW__S30,
    IDDL.BARREL_MCW_H302,
    IDDL.BARREL_MCW_HVY_S303,
    // IDDL.BARREL_MCW_HVY_M300,
    IDDL.BARREL_MCW_MAKRS300,
    IDDL.BARREL_MCW_SIL430
];
const List_handguards = [
    IDDL.HANDGUARD_MCW__DEF,
    IDDL.HANDGUARD_MCW__BLK,
    IDDL.HANDGUARD_MCW_HVY_MARK,
    IDDL.HANDGUARD_MCW_HVY,
    IDDL.HANDGUARD_MCW_HVY_LONG,
    IDDL.HANDGUARD_MCW_HVY_SHRT,
    IDDL.HANDGUARD_MCW_HVY_SHRT2_FDE,
    IDDL.HANDGUARD_MCW_HVY_SHRT2_BLK,
    IDDL.HANDGUARD_MCW_LGT_LONG,
    IDDL.HANDGUARD_MCW_LONG,
    IDDL.HANDGUARD_MCW_SIL,
    IDDL.HANDGUARD_MCW_HVY2,
    IDDL.HANDGUARD_MCW_HVYSHORT3,
    IDDL.HANDGUARD_MCW_MARKSMAN,
    IDDL.HANDGUARD_MCW_SIL450
];
const List_mount_fg = [
    IDDL.PANEL_LGT_LONG_4,
    IDDL.PANEL_LONG_4,
    IDDL.PANEL_HVY2_4
];
const List_barrel_medium = [
    IDDL.BARREL_MCW__DEF,
    IDDL.BARREL_MCW__D30,
    IDDL.BARREL_MCW__HVY,
    IDDL.BARREL_MCW__H30,
    IDDL.BARREL_MCW_LGT_LONG,
    IDDL.BARREL_MCW_LGT_L300,
    IDDL.BARREL_MCW_LONG,
    IDDL.BARREL_MCW_L300,
    IDDL.BARREL_MCW_HVY2,
    IDDL.BARREL_MCW_H302,
    IDDL.BARREL_MCW_MAKRSMAN,
    IDDL.BARREL_MCW_MAKRS300
];
const List_barrel_short = [
    IDDL.BARREL_MCW_HVY_LONG,
    IDDL.BARREL_MCW_HVY_L300,
    IDDL.BARREL_MCW_HVY_SHRT,
    IDDL.BARREL_MCW_HVY_S300,
    IDDL.BARREL_MCW__SIL,
    IDDL.BARREL_MCW__S30,
    IDDL.BARREL_MCW_HVY_SHT3,
    IDDL.BARREL_MCW_HVY_S303,
    IDDL.BARREL_MCW_SIL450,
    IDDL.BARREL_MCW_SIL430
];
const List_barrel_long = [
    IDDL.BARREL_MCW_HVY_MARK,
    // IDDL.BARREL_MCW_HVY_M300
];
const cpntName = "Mass_ISOH";
class Mass_MCW extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    data;
    def_mag;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
        this.def_mag = this.DBitems[IDDL.MAG_ISOH____MAG] == undefined ? IDDL.MAG_PMAG_30_556 : IDDL.MAG_ISOH____MAG;
        const List_foregrips = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDDL.HANDGUARD_HK416_DEF)._props.filters[0].Filter);
        const List_tacticals = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.tactical_001, IDDL.HANDGUARD_HK416_DEF)._props.filters[0].Filter);
        this.data = {
            rec_mcw_fde: {
                itemTplToClone: IDDL.REC___SCAR_L,
                newId: IDDL.REC_MCW_FDE,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/receiver_mcw_556_fde.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.barrel,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_barrels_556,
                                            ...List_barrels_300
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.handguard,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_handguards
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Weight: 0.28,
                    Width: 3
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.REC___SCAR_L]._parent,
                handbookPriceRoubles: 14000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "MCW upper receiver (FDE)",
                        "shortName": "MCW FDE",
                        "description": "Upper receiver for MCW."
                    },
                    "ch": {
                        "name": "MCW上机匣 (FDE)",
                        "shortName": "MCW FDE",
                        "description": "MCW 的上机匣。"
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.scope
                    },
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.sight_rear
                    },
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.mount,
                        tgtSlotName: mod_slot_1.mod_slot.mount_002
                    }
                ]
            },
            rec_mcw_blk: {
                itemTplToClone: IDDL.REC_MCW_FDE,
                newId: IDDL.REC_MCW_BLK,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/receiver_mcw_556_blk.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.REC___SCAR_L]._parent,
                handbookPriceRoubles: 14000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "MCW upper receiver",
                        "shortName": "MCW",
                        "description": "Upper receiver for MCW."
                    },
                    "ch": {
                        "name": "MCW上机匣",
                        "shortName": "MCW",
                        "description": "MCW 的上机匣。"
                    }
                },
                addtoTraders: false
            },
            rec_mcw_300: {
                itemTplToClone: IDDL.REC_MCW_FDE,
                newId: IDDL.REC_MCW_300,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/receiver_mcw_300blk.bundle",
                        "rcid": ""
                    },
                    Weight: 0.2,
                    Ergonomics: 6,
                    "HeatFactor": 1.012,
                    "CoolFactor": 1.023
                },
                fleaPriceRoubles: 40000,
                parentId: this.DBitems[IDDL.REC___SCAR_L]._parent,
                handbookPriceRoubles: 32000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "JAK carbon fiber MCW upper receiver",
                        "shortName": "JAK",
                        "description": "Custom carbon fiber upper receiver for MCW manufactured by JAK."
                    },
                    "ch": {
                        "name": "JAK MCW 碳纤维上机匣",
                        "shortName": "JAK",
                        "description": "JAK制造的MCW定制碳纤维上机匣。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 35000
                    }
                ]
            },
            rec_mcw_snp: {
                itemTplToClone: IDDL.REC_MCW_FDE,
                newId: IDDL.REC_MCW_SNP,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/receiver_mcw_snp.bundle",
                        "rcid": ""
                    },
                    Weight: 0.35,
                    Ergonomics: 3,
                    "Accuracy": 2,
                    "HeatFactor": 0.978,
                    "CoolFactor": 1.017
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.REC___SCAR_L]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "MCW marksman upper receiver",
                        "shortName": "Marksman",
                        "description": "Upper receiver for MCW."
                    },
                    "ch": {
                        "name": "MCW 精确射手上机匣",
                        "shortName": "Marksman",
                        "description": "MCW 的上机匣。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 28000
                    }
                ]
            },
            rec_mcw_prt: {
                itemTplToClone: IDDL.REC_MCW_FDE,
                newId: IDDL.REC_MCW_PRT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/receiver_mcw_prt.bundle",
                        "rcid": ""
                    },
                    Weight: 0.2,
                    Ergonomics: 5,
                    "HeatFactor": 1.08,
                    "CoolFactor": 1.04,
                    DurabilityBurnModificator: 1.05
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.REC___SCAR_L]._parent,
                handbookPriceRoubles: 11000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "JAK 3D-printed ploymer MCW upper receiver",
                        "shortName": "JAK 3D",
                        "description": "3D-printed ploymer upper receiver for MCW manufactured by JAK. Use at your own risk."
                    },
                    "ch": {
                        "name": "JAK MCW 3D打印聚合物上机匣",
                        "shortName": "JAK 3D",
                        "description": "JAK制造的MCW3D打印聚合物上机匣。使用者自担风险。"
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
            barrel_mcw_def: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW__DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_def.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 3,
                    "Height": 1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                    Weight: 0.63,
                    Recoil: -3,
                    Ergonomics: -14,
                    Velocity: -8.62,
                    DurabilityBurnModificator: 0.82,
                    HeatFactor: 1.04,
                    CoolFactor: 1.06,
                    CenterOfImpact: 0.06
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 380mm standard barrel",
                        "shortName": "Std. 556",
                        "description": "Default barrel for MCW in 5.56x45."
                    },
                    "ch": {
                        "name": "380毫米MCW 5.56x45 标准枪管",
                        "shortName": "标准 556",
                        "description": "5.56x45口径MCW的标准枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: false
            },
            barrel_mcw_def_300: {
                itemTplToClone: IDDL.BARREL_MCW__DEF,
                newId: IDDL.BARREL_MCW__D30,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.66,
                    CenterOfImpact: 0.061
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 380mm standard barrel",
                        "shortName": "Std. .300",
                        "description": "Default barrel for MCW in .300."
                    },
                    "ch": {
                        "name": "380毫米MCW .300 标准枪管",
                        "shortName": "标准 .300",
                        "description": ".300口径MCW的标准枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: false
            },
            barrel_mcw_hvy: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW__HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_hvy.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 3,
                    "Height": 1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                    Weight: 0.74,
                    Recoil: -3,
                    Ergonomics: -15,
                    Velocity: -8.62,
                    DurabilityBurnModificator: 0.84,
                    HeatFactor: 0.9,
                    CoolFactor: 1.06,
                    CenterOfImpact: 0.053
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 360mm heavy barrel",
                        "shortName": "360 H. 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "360毫米MCW 5.56x45 重型枪管",
                        "shortName": "360 H. 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvy_300: {
                itemTplToClone: IDDL.BARREL_MCW__HVY,
                newId: IDDL.BARREL_MCW__H30,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.8,
                    CenterOfImpact: 0.054
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 360mm heavy barrel",
                        "shortName": "360 H. .300",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "360毫米MCW .300 重型枪管",
                        "shortName": "360 H. .300",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvy_long: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_HVY_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_hvylong.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 3,
                    "Height": 1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    Weight: 0.8,
                    Recoil: -4.5,
                    Ergonomics: -16,
                    Velocity: -6.33,
                    DurabilityBurnModificator: 0.82,
                    HeatFactor: 0.88,
                    CoolFactor: 1.08,
                    CenterOfImpact: 0.0505,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 407mm heavy barrel",
                        "shortName": "407 H. 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "407毫米MCW 5.56x45 重型枪管",
                        "shortName": "407 H. 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvy_long_300: {
                itemTplToClone: IDDL.BARREL_MCW_HVY_LONG,
                newId: IDDL.BARREL_MCW_HVY_L300,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.82,
                    CenterOfImpact: 0.051
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 407mm heavy barrel",
                        "shortName": "407 H. .300",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "407毫米MCW .300 重型枪管",
                        "shortName": "407 H. .300",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvy_short: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_HVY_SHRT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_hvyshort.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 2,
                    "Height": 1,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Weight: 0.49,
                    Recoil: -2,
                    Ergonomics: -10,
                    Velocity: -15.1,
                    DurabilityBurnModificator: 0.86,
                    HeatFactor: 0.97,
                    CoolFactor: 1.04,
                    CenterOfImpact: 0.072,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 255mm heavy barrel",
                        "shortName": "255 H. 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "255毫米MCW 5.56x45 重型枪管",
                        "shortName": "255 H. 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvy_short_300: {
                itemTplToClone: IDDL.BARREL_MCW_HVY_SHRT,
                newId: IDDL.BARREL_MCW_HVY_S300,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.82,
                    CenterOfImpact: 0.0725
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 255mm heavy barrel",
                        "shortName": "255 H. .300",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "255毫米MCW .300 重型枪管",
                        "shortName": "255 H. .300",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_lgt_long: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_LGT_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_lgtlong.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 3,
                    "Height": 1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                    Weight: 0.5,
                    Recoil: -3,
                    Ergonomics: -10,
                    Velocity: -12.4,
                    DurabilityBurnModificator: 0.88,
                    HeatFactor: 1.09,
                    CoolFactor: 1.05,
                    CenterOfImpact: 0.0715,
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 320mm light barrel",
                        "shortName": "320 L. 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "320毫米MCW 5.56x45 轻型枪管",
                        "shortName": "320 L. 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_lgt_long_300: {
                itemTplToClone: IDDL.BARREL_MCW_LGT_LONG,
                newId: IDDL.BARREL_MCW_LGT_L300,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.53,
                    CenterOfImpact: 0.072
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 320mm light barrel",
                        "shortName": "320 L. .300",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "320毫米MCW .300 轻型枪管",
                        "shortName": "320 L. .300",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_long: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_long.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 3,
                    "Height": 1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                    Weight: 0.725,
                    Recoil: -4,
                    Ergonomics: -15,
                    Velocity: -6.2,
                    DurabilityBurnModificator: 0.83,
                    HeatFactor: 0.92,
                    CoolFactor: 1.08,
                    CenterOfImpact: 0.057
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 420mm barrel",
                        "shortName": "420 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "420毫米MCW 5.56x45 枪管",
                        "shortName": "420 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_long_300: {
                itemTplToClone: IDDL.BARREL_MCW_LONG,
                newId: IDDL.BARREL_MCW_L300,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.76,
                    CenterOfImpact: 0.0577
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 420mm barrel",
                        "shortName": "420 .300",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "420毫米MCW .300 枪管",
                        "shortName": "420 .300",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_sil: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW__SIL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_sil.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.SILENCER_MCW_SIL
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "Width": 2,
                    "Height": 1,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                    Weight: 0.42,
                    Recoil: -2,
                    Ergonomics: -8,
                    Velocity: -16,
                    DurabilityBurnModificator: 0.86,
                    HeatFactor: 1.11,
                    CoolFactor: 1.06,
                    CenterOfImpact: 0.08
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW Silentshot 5.56x45 barrel",
                        "shortName": "Silentshot 556",
                        "description": "Barrel for MCW to mount Kimura Silentshot MCW proprietary multi-caliber suppressor."
                    },
                    "ch": {
                        "name": "MCW Silentshot 5.56x45 枪管",
                        "shortName": "Silentshot 556",
                        "description": "用于安装Kimura Silentshot MCW 专用多口径消声器的枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 10000
                    }
                ]
            },
            barrel_mcw_sil_300: {
                itemTplToClone: IDDL.BARREL_MCW__SIL,
                newId: IDDL.BARREL_MCW__S30,
                overrideProperties: {
                    Weight: 0.45,
                    CenterOfImpact: 0.085
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW Silentshot .300 barrel",
                        "shortName": "Silentshot .300",
                        "description": "Barrel for MCW to mount Kimura Silentshot MCW proprietary multi-caliber suppressor."
                    },
                    "ch": {
                        "name": "MCW Silentshot .300 枪管",
                        "shortName": "Silentshot .300",
                        "description": "用于安装Kimura Silentshot MCW 专用多口径消声器的枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 10000
                    }
                ]
            },
            barrel_mcw_hvy2: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_HVY2,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_hvy2.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 3,
                    "Height": 1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    Weight: 0.82,
                    Recoil: -4,
                    Ergonomics: -16,
                    Velocity: -6.1,
                    DurabilityBurnModificator: 0.81,
                    HeatFactor: 0.88,
                    CoolFactor: 1.08,
                    CenterOfImpact: 0.05,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 410mm heavy barrel",
                        "shortName": "410 H. 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "410毫米MCW 5.56x45 重型枪管",
                        "shortName": "410 H. 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvy2_300: {
                itemTplToClone: IDDL.BARREL_MCW_HVY2,
                newId: IDDL.BARREL_MCW_H302,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.845,
                    CenterOfImpact: 0.0505
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 410mm heavy barrel",
                        "shortName": "410 H. .300",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "410毫米MCW .300 重型枪管",
                        "shortName": "410 H. .300",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvyshort3: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_HVY_SHT3,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_hvyshort3.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 3,
                    "Height": 1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                    Weight: 0.68,
                    Recoil: -3,
                    Ergonomics: -15,
                    Velocity: -9.07,
                    DurabilityBurnModificator: 0.84,
                    HeatFactor: 0.9,
                    CoolFactor: 1.06,
                    CenterOfImpact: 0.054
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 345mm heavy barrel",
                        "shortName": "345 H. 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "345毫米MCW 5.56x45 重型枪管",
                        "shortName": "345 H. 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvyshort3_300: {
                itemTplToClone: IDDL.BARREL_MCW_HVY_SHT3,
                newId: IDDL.BARREL_MCW_HVY_S303,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.72,
                    CenterOfImpact: 0.055
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 345mm heavy barrel",
                        "shortName": "345 H. .300",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "345毫米MCW .300 重型枪管",
                        "shortName": "345 H. .300",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_hvymarksman: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_HVY_MARK,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_hvymarksman.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 4,
                    "Height": 1,
                    ExtraSizeLeft: 4,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.35,
                    DeviationMax: 23,
                    Weight: 1.03,
                    Recoil: -6,
                    Ergonomics: -18,
                    Velocity: -5.4,
                    DurabilityBurnModificator: 0.72,
                    HeatFactor: 0.87,
                    CoolFactor: 0.99,
                    CenterOfImpact: 0.04
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 marksman heavy barrel",
                        "shortName": "M. H. 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "MCW 5.56x45 精确射手重型枪管",
                        "shortName": "M. H. 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            // barrel_mcw_hvymarksman_300: {
            //     itemTplToClone: IDDL.BARREL_MCW_HVY_MARK,
            //     newId: IDDL.BARREL_MCW_HVY_M300,
            //     overrideProperties: {
            //         Slots: [
            //         ],
            //         Weight: 0.72,
            //         CenterOfImpact: 0.055
            //     },
            //     fleaPriceRoubles: 20000,
            //     parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
            //     handbookPriceRoubles: 12000,
            //     handbookParentId: handbookCategory.Barrels,
            //     locales: {
            //         "en": {
            //             "name": "MCW .300 marksman heavy barrel",
            //             "shortName": "345 H. .300",
            //             "description": "Barrel for MCW."
            //         },
            //         "ch": {
            //             "name": "MCW .300 精确射手重型枪管",
            //             "shortName": "345 H. .300",
            //             "description": "MCW的枪管。"
            //         }
            //     },
            //     copySlot: true,
            //     copySlots: [
            //         {
            //             id: IDDL.BARREL_SCARH__13,
            //             newSlotName: mod_slot.muzzle
            //         }
            //     ],
            //     addtoTraders: true,
            //     traderId: NTrader.Default,
            //     "barterScheme": [
            //         {
            //             "count": 18000
            //         }
            //     ]
            // },
            barrel_mcw_marksman: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_MAKRSMAN,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_marksman.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Width": 3,
                    "Height": 1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.35,
                    DeviationMax: 23,
                    Weight: 0.78,
                    Recoil: -3.5,
                    Ergonomics: -15,
                    Velocity: -6.03,
                    DurabilityBurnModificator: 0.78,
                    HeatFactor: 0.9,
                    CoolFactor: 1.02,
                    CenterOfImpact: 0.049
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW 5.56x45 marksman barrel",
                        "shortName": "M. 556",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "MCW 5.56x45 精确射手枪管",
                        "shortName": "M. 556",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARL__10,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_marksman_300: {
                itemTplToClone: IDDL.BARREL_MCW_MAKRSMAN,
                newId: IDDL.BARREL_MCW_MAKRS300,
                overrideProperties: {
                    Slots: [],
                    Weight: 0.82,
                    CenterOfImpact: 0.0493
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW .300 marksman barrel",
                        "shortName": "M. .300",
                        "description": "Barrel for MCW."
                    },
                    "ch": {
                        "name": "MCW .300 精确射手枪管",
                        "shortName": "M. .300",
                        "description": "MCW的枪管。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.BARREL_SCARH__13,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ]
            },
            barrel_mcw_sil450: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_MCW_SIL450,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/barrel_mcw_sil450.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.SILENCER_MCW_SIL450
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ConflictingItems: [
                        IDDL.HANDGUARD_MCW__DEF,
                        IDDL.HANDGUARD_MCW__BLK,
                        IDDL.HANDGUARD_MCW_HVY_MARK,
                        IDDL.HANDGUARD_MCW_HVY_LONG,
                        IDDL.HANDGUARD_MCW_HVY_SHRT,
                        IDDL.HANDGUARD_MCW_HVY_SHRT2_FDE,
                        IDDL.HANDGUARD_MCW_HVY_SHRT2_BLK,
                        IDDL.HANDGUARD_MCW_LGT_LONG,
                        IDDL.HANDGUARD_MCW_LONG,
                        IDDL.HANDGUARD_MCW_SIL,
                        IDDL.HANDGUARD_MCW_HVY2,
                        IDDL.HANDGUARD_MCW_HVYSHORT3
                    ],
                    "Width": 2,
                    "Height": 1,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                    Weight: 0.42,
                    Recoil: -2,
                    Ergonomics: -8,
                    Velocity: -16,
                    DurabilityBurnModificator: 0.86,
                    HeatFactor: 1.11,
                    CoolFactor: 1.06,
                    CenterOfImpact: 0.08
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW Huntsman R 5.56x45 barrel",
                        "shortName": "Huntsman R 556",
                        "description": "Barrel for MCW to mount Kimura Huntsman Series-R MCW proprietary multi-caliber suppressor."
                    },
                    "ch": {
                        "name": "MCW Huntsman R 5.56x45 枪管",
                        "shortName": "Huntsman R 556",
                        "description": "用于安装Kimura Huntsman Series-R MCW 专用多口径消声器的枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 10000
                    }
                ]
            },
            barrel_mcw_sil450_300: {
                itemTplToClone: IDDL.BARREL_MCW_SIL450,
                newId: IDDL.BARREL_MCW_SIL430,
                overrideProperties: {
                    Weight: 0.45,
                    CenterOfImpact: 0.085
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "MCW Huntsman R .300 barrel",
                        "shortName": "Huntsman R .300",
                        "description": "Barrel for MCW to mount Kimura Huntsman Series-R MCW proprietary multi-caliber suppressor."
                    },
                    "ch": {
                        "name": "MCW Huntsman R .300 枪管",
                        "shortName": "Huntsman R .300",
                        "description": "用于安装Kimura Huntsman Series-R MCW 专用多口径消声器的枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 10000
                    }
                ]
            },
            charge_non_reciprocating: {
                itemTplToClone: IDDL.CHARGE_SCARH,
                newId: IDDL.CHARGE_MCW_NONREC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/charge_mcw_nonrecip.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.CHARGE_SCARH]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Charginghandles,
                locales: {
                    "en": {
                        "name": "MCW non-reciprocating charging handle",
                        "shortName": "Non-Recip.",
                        "description": "Non-reciprocating charging handle for Rattle Back MCW."
                    },
                    "ch": {
                        "name": "MCW 非随动拉机柄",
                        "shortName": "非随动",
                        "description": "MCW的非随动拉机柄。"
                    }
                },
                addtoTraders: false
            },
            charge_reciprocating: {
                itemTplToClone: IDDL.CHARGE_SCARH,
                newId: IDDL.CHARGE_MCW_RECIPR,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/charge_mcw_recip.bundle",
                        "rcid": ""
                    },
                    UniqueAnimationModID: 1001
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.CHARGE_SCARH]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Charginghandles,
                locales: {
                    "en": {
                        "name": "MCW reciprocating charging handle",
                        "shortName": "Recip.",
                        "description": "Reciprocating charging handle for Rattle Back MCW."
                    },
                    "ch": {
                        "name": "MCW 随动拉机柄",
                        "shortName": "随动",
                        "description": "MCW的随动拉机柄。"
                    },
                },
                addtoTraders: false
            },
            handguard_mcw_def: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW__DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_def.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        ...List_barrel_short,
                        ...List_barrel_long
                    ],
                    Weight: 0.41,
                    Ergonomics: 9,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 28000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Rattle Back MCW standard handguard (FDE)",
                        "shortName": "Std. FDE",
                        "description": "Handguard for MCW."
                    },
                    "ch": {
                        "name": "Rattle Back MCW 标准护木 (FDE)",
                        "shortName": "标准 FDE",
                        "description": "Handguard for MCW."
                    }
                },
                addtoTraders: false,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 26000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.mount_001
                    }
                ]
            },
            handguard_mcw_def_blk: {
                itemTplToClone: IDDL.HANDGUARD_MCW__DEF,
                newId: IDDL.HANDGUARD_MCW__BLK,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_def_blk.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 28000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Rattle Back MCW standard handguard",
                        "shortName": "Std.",
                        "description": "Handguard for MCW."
                    },
                    "ch": {
                        "name": "Rattle Back MCW 标准护木",
                        "shortName": "标准",
                        "description": "Handguard for MCW."
                    }
                },
                addtoTraders: false,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 26000
                    }
                ]
            },
            handguard_mcw_hvymarksman: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_HVY_MARK,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_hvymarksman.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        IDDL.BARREL_MCW_HVY_SHRT,
                        IDDL.BARREL_MCW_HVY_S300,
                        IDDL.BARREL_MCW_HVY_SHT3,
                        IDDL.BARREL_MCW_HVY_S303,
                        IDDL.BARREL_MCW__SIL,
                        IDDL.BARREL_MCW__S30,
                        IDDL.BARREL_MCW_LGT_LONG,
                        IDDL.BARREL_MCW_LGT_L300
                    ],
                    Weight: 0.59,
                    Width: 3,
                    Ergonomics: 6,
                    Recoil: -2,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    HeatFactor: 0.98,
                    CoolFactor: 1.005,
                    DurabilityBurnModificator: 0.99
                },
                fleaPriceRoubles: 28000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Rattle Back MCW marksman handguard",
                        "shortName": "Marksman",
                        "description": "Handguard for MCW."
                    },
                    "ch": {
                        "name": "Rattle Back MCW 神射手护木",
                        "shortName": "神射手",
                        "description": "Handguard for MCW."
                    }
                },
                addtoTraders: false,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 26000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_000,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.mount_001
                    }
                ]
            },
            handguard_mcw_hvy: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_hvy.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        IDDL.BARREL_MCW__SIL,
                        IDDL.BARREL_MCW__S30,
                        IDDL.BARREL_MCW_LGT_LONG,
                        IDDL.BARREL_MCW_LGT_L300,
                        IDDL.BARREL_MCW_HVY_SHRT,
                        IDDL.BARREL_MCW_HVY_S300
                    ],
                    Weight: 0.675,
                    Width: 3,
                    Ergonomics: 4,
                    Recoil: -1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    CoolFactor: 1.06,
                    HeatFactor: 0.94
                },
                fleaPriceRoubles: 28000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 24000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Second Line Crater MCW handguard",
                        "shortName": "Crater",
                        "description": "Crater handguard for MCW made by Second Line MFG."
                    },
                    "ch": {
                        "name": "Second Line Crater MCW 护木",
                        "shortName": "Crater",
                        "description": "Crater handguard for MCW made by Second Line MFG."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 26000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.mount_000,
                        tgtSlotName: mod_slot_1.mod_slot.mount_001
                    }
                ]
            },
            handguard_mcw_hvylong: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_HVY_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_hvylong.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        ...List_barrel_long,
                        ...List_barrel_medium
                    ],
                    Weight: 0.33,
                    Width: 2,
                    Ergonomics: 8,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CoolFactor: 1.01,
                    HeatFactor: 0.97
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 18000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Second Line Mammoth MCW handguard",
                        "shortName": "Mammoth",
                        "description": "Mammoth handguard for MCW made by Second Line MFG."
                    },
                    "ch": {
                        "name": "Second Line Mammoth MCW 护木",
                        "shortName": "Mammoth",
                        "description": "Mammoth handguard for MCW made by Second Line MFG."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 20000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.mount_002,
                        tgtSlotName: mod_slot_1.mod_slot.mount_001
                    }
                ]
            },
            handguard_mcw_hvyshort: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_HVY_SHRT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_hvyshort.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        ...List_barrel_long,
                        ...List_barrel_medium
                    ],
                    Weight: 0.312,
                    Width: 2,
                    Ergonomics: 7,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CoolFactor: 1.06,
                    HeatFactor: 0.97
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 18000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Kimura Blackiron MCW handguard",
                        "shortName": "Blackiron",
                        "description": "Blackiron handguard for MCW made by Kimura."
                    },
                    "ch": {
                        "name": "Kimura Blackiron MCW 护木",
                        "shortName": "Blackiron",
                        "description": "Blackiron handguard for MCW made by Kimura."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 20000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    }
                ]
            },
            handguard_mcw_hvyshort2: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_HVY_SHRT2_FDE,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_hvyshort2.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        ...List_barrel_long,
                        ...List_barrel_medium,
                        IDDL.BARREL_MCW__SIL,
                        IDDL.BARREL_MCW__S30
                    ],
                    Weight: 0.42,
                    Width: 2,
                    Ergonomics: 6,
                    Recoil: -1,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CoolFactor: 1.08,
                    HeatFactor: 0.94,
                    DurabilityBurnModificator: 0.99
                },
                fleaPriceRoubles: 32000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 28000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Rattle Back Orchestra-40 MCW handguard (FDE)",
                        "shortName": "Orchestra-40",
                        "description": "Orchestra-40 handguard for MCW made by Rattle Back."
                    },
                    "ch": {
                        "name": "Rattle Back Orchestra-40 MCW 护木 (FDE)",
                        "shortName": "Orchestra-40",
                        "description": "Orchestra-40 handguard for MCW made by Rattle Back."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 30000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    }
                ]
            },
            handguard_mcw_hvyshort2_blk: {
                itemTplToClone: IDDL.HANDGUARD_MCW_HVY_SHRT2_FDE,
                newId: IDDL.HANDGUARD_MCW_HVY_SHRT2_BLK,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_hvyshort2_blk.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 32000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 28000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Rattle Back Orchestra-40 MCW handguard",
                        "shortName": "Orchestra-40",
                        "description": "Orchestra-40 handguard for MCW made by Rattle Back."
                    },
                    "ch": {
                        "name": "Rattle Back Orchestra-40 MCW 护木",
                        "shortName": "Orchestra-40",
                        "description": "Orchestra-40 handguard for MCW made by Rattle Back."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 30000
                    }
                ]
            },
            handguard_mcw_lgtlong: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_LGT_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_lgtlong.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.tactical,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_fg
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ConflictingItems: [
                        ...List_barrel_long,
                        ...List_barrel_short
                    ],
                    Weight: 0.425,
                    Width: 2,
                    Ergonomics: 7,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CoolFactor: 1.06,
                    HeatFactor: 0.95
                },
                fleaPriceRoubles: 22000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 18000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Kilo Reiner Midnight MCW handguard",
                        "shortName": "Midnight",
                        "description": "Midnight handguard for MCW made by Kilo Reiner."
                    },
                    "ch": {
                        "name": "Kilo Reiner Midnight MCW 护木",
                        "shortName": "Midnight",
                        "description": "Midnight handguard for MCW made by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 20000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    }
                ]
            },
            handguard_mcw_long: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_long.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.tactical,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_fg
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.tactical_001,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_LONG_3
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.tactical_002,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_LONG_3
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ConflictingItems: [
                        ...List_barrel_long,
                        ...List_barrel_medium
                    ],
                    Weight: 0.39,
                    Width: 2,
                    Ergonomics: 6,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CoolFactor: 1.08,
                    HeatFactor: 0.96
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Kilo Reiner Cyclone MCW handguard",
                        "shortName": "Cyclone",
                        "description": "Cyclone handguard for MCW made by Kilo Reiner."
                    },
                    "ch": {
                        "name": "Kilo Reiner Cyclone MCW 护木",
                        "shortName": "Cyclone",
                        "description": "Cyclone handguard for MCW made by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    }
                ]
            },
            handguard_mcw_sil: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_SIL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_sil.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        ...List_barrel_long,
                        ...List_barrel_medium
                    ],
                    Weight: 0.37,
                    Width: 2,
                    Ergonomics: 7,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    DurabilityBurnModificator: 0.99,
                    CoolFactor: 1.1,
                    HeatFactor: 0.96
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Kimura Silentshot MCW handguard",
                        "shortName": "Silentshot HG",
                        "description": "Silentshot handguard for MCW made by Kimura."
                    },
                    "ch": {
                        "name": "Kimura Silentshot MCW 护木",
                        "shortName": "Silentshot HG",
                        "description": "Silentshot handguard for MCW made by Kimura."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    }
                ]
            },
            handguard_mcw_hvy2: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_HVY2,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_hvy2.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.tactical,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_fg
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.tactical_001,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_HVY2_3
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.tactical_002,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_HVY2_3
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.tactical_000,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_HVY2_2
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ConflictingItems: [
                        ...List_barrel_long,
                        IDDL.BARREL_MCW_HVY_SHRT,
                        IDDL.BARREL_MCW_HVY_S300
                    ],
                    Weight: 0.605,
                    Width: 2,
                    Ergonomics: 5,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    DurabilityBurnModificator: 0.99,
                    CoolFactor: 1.06,
                    HeatFactor: 0.96
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Tempus 76L-P MCW handguard",
                        "shortName": "76L-P",
                        "description": "76L-P handguard for MCW made by Tempus Armament."
                    },
                    "ch": {
                        "name": "Tempus 76L-P MCW 护木",
                        "shortName": "76L-P",
                        "description": "76L-P handguard for MCW made by Tempus Armament."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    }
                ]
            },
            handguard_mcw_hvyshort3: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_HVYSHORT3,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_hvyshort3.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        ...List_barrel_long,
                        ...List_barrel_medium
                    ],
                    Weight: 0.405,
                    Width: 2,
                    Ergonomics: 6,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Recoil: -1,
                    CoolFactor: 1.05,
                    HeatFactor: 0.94
                },
                fleaPriceRoubles: 24000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 20000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Kimura Lockjaw MCW handguard",
                        "shortName": "Lockjaw",
                        "description": "Lockjaw handguard for MCW made by Kimura."
                    },
                    "ch": {
                        "name": "Kimura Lockjaw MCW 护木",
                        "shortName": "Lockjaw",
                        "description": "Lockjaw handguard for MCW made by Kimura."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 22000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    }
                ]
            },
            handguard_mcw_marksman: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_MARKSMAN,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_marksman.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.tactical,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_MARKSMAN
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ConflictingItems: [
                        IDDL.BARREL_MCW_HVY_SHT3,
                        IDDL.BARREL_MCW_HVY_S303,
                        IDDL.BARREL_MCW__SIL,
                        IDDL.BARREL_MCW__S30,
                        IDDL.BARREL_MCW_LGT_LONG,
                        IDDL.BARREL_MCW_LGT_L300,
                        IDDL.BARREL_MCW_HVY_SHRT,
                        IDDL.BARREL_MCW_HVY_S300,
                        IDDL.BARREL_MCW__HVY,
                        IDDL.BARREL_MCW__H30,
                        IDDL.BARREL_MCW__DEF,
                        IDDL.BARREL_MCW__D30
                    ],
                    Weight: 0.742,
                    Width: 3,
                    Ergonomics: 4,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    Recoil: -2,
                    CoolFactor: 1.06,
                    HeatFactor: 0.92
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Tempus Predator MCW handguard",
                        "shortName": "Predator",
                        "description": "Predator handguard for MCW made by Tempus Armament."
                    },
                    "ch": {
                        "name": "Tempus Predator MCW 护木",
                        "shortName": "Predator",
                        "description": "Predator handguard for MCW made by Tempus Armament."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_000,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_002
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.tactical_003,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_002
                    },
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    }
                ]
            },
            handguard_mcw_sil450: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_MCW_SIL450,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/handguard_mcw_sil450.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.tactical_001,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_SIL4502
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.tactical_002,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_SIL4502
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.tactical_000,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_tacticals,
                                            IDDL.PANEL_SIL4501
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ConflictingItems: [
                        IDDL.BARREL_MCW_HVY_SHRT,
                        IDDL.BARREL_MCW_HVY_S300
                    ],
                    Weight: 0.742,
                    Width: 3,
                    Ergonomics: 3,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    Recoil: -1,
                    CoolFactor: 1.06,
                    HeatFactor: 0.92
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Kilo Reiner Series-R MCW handguard",
                        "shortName": "KR R HG",
                        "description": "Series-R handguard for MCW made by Kilo Reiner."
                    },
                    "ch": {
                        "name": "Kilo Reiner Series-R MCW 护木",
                        "shortName": "KR R HG",
                        "description": "Series-R handguard for MCW made by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 18000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    }
                ]
            },
            stock_fixed_lgt: {
                itemTplToClone: IDDL.STOCK_MP7A2,
                newId: IDDL.STOCK_MCW_LGT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/stock_mcw_lgt.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 8,
                    Recoil: -20,
                    IsAnimated: false,
                    Weight: 0.2
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.STOCK_MP7A2]._parent,
                handbookPriceRoubles: 8000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "SL A90 MCW retractable stock",
                        "shortName": "A90",
                        "description": "Retractable stock for MCW made by Second Line."
                    },
                    "ch": {
                        "name": "SL A90 MCW 伸缩枪托",
                        "shortName": "A90",
                        "description": "Retractable stock for MCW made by Second Line."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 10000
                    }
                ]
            },
            stock_fixed_ass: {
                itemTplToClone: IDDL.STOCK_AK74_WOOD,
                newId: IDDL.STOCK_MCW_ASS,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/stock_mcw_ass.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.67,
                    Ergonomics: 10,
                    Recoil: -23
                },
                fleaPriceRoubles: 28000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 32000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "RB Crotalus MCW assault stock",
                        "shortName": "Crotalus",
                        "description": "Assault stock for MCW made by Rattle Back."
                    },
                    "ch": {
                        "name": "RB Crotalus MCW 突击枪托",
                        "shortName": "Crotalus",
                        "description": "Assault stock for MCW made by Rattle Back."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 32000
                    }
                ]
            },
            stock_fixed_hvy: {
                itemTplToClone: IDDL.STOCK_AK74_WOOD,
                newId: IDDL.STOCK_MCW_HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/stock_mcw_hvy.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.72,
                    Ergonomics: 8,
                    Recoil: -28
                },
                fleaPriceRoubles: 38000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 42000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "RB Precision MCW heavy stock",
                        "shortName": "Precision",
                        "description": "Heavy stock for MCW made by Rattle Back."
                    },
                    "ch": {
                        "name": "RB Precision MCW 重型枪托",
                        "shortName": "Precision",
                        "description": "Heavy stock for MCW made by Rattle Back."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 42000
                    }
                ]
            },
            stock_fixed_prc: {
                itemTplToClone: IDDL.STOCK_AK74_WOOD,
                newId: IDDL.STOCK_MCW_PRC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/stock_mcw_prc.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.43,
                    Ergonomics: 13,
                    Recoil: -25
                },
                fleaPriceRoubles: 58000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 62000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "SL Warforged MCW precision stock",
                        "shortName": "Warforged",
                        "description": "Precision stock for MCW made by Rattle Back."
                    },
                    "ch": {
                        "name": "SL Warforged MCW 精确枪托",
                        "shortName": "Warforged",
                        "description": "Precision stock for MCW made by Rattle Back."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 62000
                    }
                ]
            },
            stock_fixed_tac: {
                itemTplToClone: IDDL.STOCK_CTR,
                newId: IDDL.STOCK_MCW_TAC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/stock_mcw_tac.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Ergonomics: this.DBitems[IDDL.STOCK_CTR]._props.Ergonomics + 1
                },
                fleaPriceRoubles: 38000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 32000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "RB Lancer tactical stock",
                        "shortName": "Lancer",
                        "description": "Lancer tactical stock made by Rattle Back."
                    },
                    "ch": {
                        "name": "RB Lancer 战术枪托",
                        "shortName": "Lancer",
                        "description": "Lancer tactical stock made by Rattle Back."
                    }
                },
                addtoModSlots: true,
                modSlot: [
                    "mod_stock",
                    "mod_stock_000"
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 32000
                    }
                ]
            },
            stock_fixed_tah: {
                itemTplToClone: IDDL.STOCK_AK74_WOOD,
                newId: IDDL.STOCK_MCW_TAH,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/stock_mcw_tah.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.61,
                    Ergonomics: 11,
                    Recoil: -22
                },
                fleaPriceRoubles: 28000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 32000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "RB Monarch MCW tactical heavy Stock",
                        "shortName": "Monarch",
                        "description": "Tactical heavy stock for MCW made by Rattle Back."
                    },
                    "ch": {
                        "name": "RB Monarch MCW 战术重枪托",
                        "shortName": "Monarch",
                        "description": "Tactical heavy stock for MCW made by Rattle Back."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 32000
                    }
                ]
            },
            stock_fixed_tub: {
                itemTplToClone: "5649be884bdc2d79388b4577",
                newId: IDDL.STOCK_MCW_TUB,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/stock_mcw_tub.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Weight": 0.359,
                    "Recoil": -1,
                    "Ergonomics": -1
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "MCW stock buffer tube (FDE)",
                        "shortName": "MCW buff. tube",
                        "description": "MCW buffer tube for MCW."
                    },
                    "ch": {
                        "name": "MCW 枪托缓冲管 (FDE)",
                        "shortName": "MCW 缓冲管",
                        "description": "MCW的缓冲管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 5000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: "5649be884bdc2d79388b4577",
                        newSlotName: mod_slot_1.mod_slot.stock_000
                    }
                ]
            },
            stock_fixed_tub_blk: {
                itemTplToClone: IDDL.STOCK_MCW_TUB,
                newId: IDDL.STOCK_MCW_TUB_BLK,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/stock_mcw_tub_blk.bundle",
                        "rcid": ""
                    },
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "MCW stock buffer tube",
                        "shortName": "MCW buff. tube",
                        "description": "MCW buffer tube for MCW."
                    },
                    "ch": {
                        "name": "MCW 枪托缓冲管",
                        "shortName": "MCW 缓冲管",
                        "description": "MCW的缓冲管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 5000
                    }
                ]
            },
            pg_mcw_snp: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_MCW_SNP,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/pistolgrip_mcw_snp.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 9,
                    Weight: 0.015
                },
                fleaPriceRoubles: 22000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 20000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "MCW grip palm shelf",
                        "shortName": "palm shelf",
                        "description": "Palm shelf for MCW grip."
                    },
                    "ch": {
                        "name": "MCW 握把掌托",
                        "shortName": "握把掌托",
                        "description": "Palm shelf for MCW grip."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 21000
                    }
                ]
            },
            silencer_mcw_sil: {
                itemTplToClone: IDDL.SILENCER_QDC,
                newId: IDDL.SILENCER_MCW_SIL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/silencer_mcw_sil.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Ergonomics": -19,
                    "Recoil": -10,
                    "Loudness": -20,
                    "Velocity": 1,
                    DurabilityBurnModificator: 1.68,
                    HeatFactor: 1.15,
                    CoolFactor: 0.97,
                    Weight: 0.570
                },
                fleaPriceRoubles: 16000,
                parentId: this.DBitems[IDDL.SILENCER_QDC]._parent,
                handbookPriceRoubles: 8000,
                handbookParentId: handbookCategory_1.handbookCategory.Suppressors,
                locales: {
                    "en": {
                        "name": "Kimura Silentshot MCW proprietary multi-caliber suppressor",
                        "shortName": "Silentshot",
                        "description": "Kimura Silentshot multi-caliber suppressor for MCW."
                    },
                    "ch": {
                        "name": "Kimura Silentshot MCW 专用多口径消声器",
                        "shortName": "Silentshot",
                        "description": "MCW的Silentshot消声器。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 13000
                    }
                ],
                copySlot: false
            },
            silencer_mcw_sil450: {
                itemTplToClone: IDDL.SILENCER_QDC,
                newId: IDDL.SILENCER_MCW_SIL450,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/silencer_mcw_sil450.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Ergonomics": -22,
                    "Recoil": -17,
                    "Loudness": -30,
                    "Velocity": 1.5,
                    DurabilityBurnModificator: 1.73,
                    HeatFactor: 1.2,
                    CoolFactor: 0.96
                },
                fleaPriceRoubles: 26000,
                parentId: this.DBitems[IDDL.SILENCER_QDC]._parent,
                handbookPriceRoubles: 18000,
                handbookParentId: handbookCategory_1.handbookCategory.Suppressors,
                locales: {
                    "en": {
                        "name": "Kimura Huntsman Series-R MCW proprietary multi-caliber suppressor",
                        "shortName": "Huntsman R",
                        "description": "Huntsman Series-R multi-caliber suppressor for MCW."
                    },
                    "ch": {
                        "name": "Kimura Huntsman R系列 MCW 专用多口径消声器",
                        "shortName": "Huntsman R",
                        "description": "MCW的Huntsman Series-R消声器。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 23000
                    }
                ],
                copySlot: false
            },
            panel_lgtlong_4: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_LGT_LONG_4,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_lgtlong_panel.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.01,
                    ConflictingItems: [
                        ...List_foregrips
                    ]
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "KR Midnight handguard bottom cover",
                        "shortName": "Midnight bott.",
                        "description": "Handguard bottom cover for MCW Midnight handguard made by Kilo Reiner."
                    },
                    "ch": {
                        "name": "KR Midnight 护木底护板",
                        "shortName": "Midnight bott.",
                        "description": "Handguard bottom cover for MCW Midnight handguard made by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            panel_long_4: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_LONG_4,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_long_panel.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.01,
                    ConflictingItems: [
                        ...List_foregrips
                    ]
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "KR Cyclone handguard bottom cover",
                        "shortName": "Cyclone bott.",
                        "description": "Handguard bottom cover for MCW Cyclone handguard made by Kilo Reiner."
                    },
                    "ch": {
                        "name": "KR Cyclone 护木底护板",
                        "shortName": "Cyclone bott.",
                        "description": "Handguard bottom cover for MCW Cyclone handguard made by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            panel_long_3: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_LONG_3,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_long_side.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.007
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "KR Cyclone handguard side cover",
                        "shortName": "Cyclone side",
                        "description": "Handguard side cover for MCW Cyclone handguard made by Kilo Reiner."
                    },
                    "ch": {
                        "name": "KR Cyclone 护木侧护板",
                        "shortName": "Cyclone side",
                        "description": "Handguard side cover for MCW Cyclone handguard made by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            panel_hvy2_4: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_HVY2_4,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_hvy2_panel.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.01,
                    ConflictingItems: [
                        ...List_foregrips
                    ]
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "Tempus 76L-P handguard bottom cover",
                        "shortName": "76L-P bott.",
                        "description": "Handguard bottom cover for MCW 76L-P handguard made by Tempus Armament."
                    },
                    "ch": {
                        "name": "Tempus 76L-P 护木底护板",
                        "shortName": "76L-P bott.",
                        "description": "Handguard bottom cover for MCW 76L-P handguard made by Tempus Armament."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            panel_hvy2_3: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_HVY2_3,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_hvy2_side.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.007
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "Tempus 76L-P handguard side cover",
                        "shortName": "76L-P side",
                        "description": "Handguard side cover for MCW 76L-P handguard made by Tempus Armament."
                    },
                    "ch": {
                        "name": "Tempus 76L-P 护木侧护板",
                        "shortName": "76L-P side",
                        "description": "Handguard side cover for MCW 76L-P handguard made by Tempus Armament."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            panel_hvy2_2: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_HVY2_2,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_hvy2_bott.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.005,
                    Ergonomics: 1
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "Tempus 76L-P handguard cover",
                        "shortName": "76L-P cover",
                        "description": "Handguard cover for MCW 76L-P handguard made by Tempus Armament."
                    },
                    "ch": {
                        "name": "Tempus 76L-P 护木护板",
                        "shortName": "76L-P 护板",
                        "description": "Handguard cover for MCW 76L-P handguard made by Tempus Armament."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            panel_marksman: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_MARKSMAN,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_marksman_panel.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.004,
                    Ergonomics: 1
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "Tempus 76L-P handguard cover",
                        "shortName": "76L-P cover",
                        "description": "Handguard cover for MCW 76L-P handguard made by Tempus Armament."
                    },
                    "ch": {
                        "name": "Tempus 76L-P 护木护板",
                        "shortName": "76L-P 护板",
                        "description": "Handguard cover for MCW 76L-P handguard made by Tempus Armament."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            panel_sil450_1: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_SIL4501,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_sil450_panel.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.006,
                    Ergonomics: 1,
                    ConflictingItems: [
                        ...List_foregrips
                    ]
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "KR handguard cover",
                        "shortName": "KR cover",
                        "description": "Handguard cover for MCW handguard made by Kilo Reiner."
                    },
                    "ch": {
                        "name": "KR 护木护板",
                        "shortName": "KR 护板",
                        "description": "Handguard cover for MCW handguard made by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            panel_sil450_2: {
                itemTplToClone: IDDL.PANEL_KAC,
                newId: IDDL.PANEL_SIL4502,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/tactical_mcw_sil450_side.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.006,
                    Ergonomics: 1
                },
                fleaPriceRoubles: 4000,
                parentId: this.DBitems[IDDL.PANEL_KAC]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Auxiliaryparts,
                locales: {
                    "en": {
                        "name": "KR handguard side cover",
                        "shortName": "KR side cover",
                        "description": "Handguard cover for MCW handguard made by Kilo Reiner."
                    },
                    "ch": {
                        "name": "KR 护木侧护板",
                        "shortName": "KR 侧护板",
                        "description": "Handguard cover for MCW handguard made by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ],
                copySlot: false
            },
            "stanag_cod_60": {
                newId: IDDL.MAG_MCW_60,
                "itemTplToClone": IDDL.MAG_PAMG_D60_556,
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "Prefab": {
                        "path": "assets/mcw/mods/mag_stanag_mcw_drum.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_id": "02F556A60A60000000000000_cart",
                            "_max_count": 60,
                            "_name": "cartridges",
                            "_parent": "02F556A60A60000000000000",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "59e6920f86f77411d82aa167",
                                            "59e6927d86f77411da468256",
                                            "54527a984bdc2d4e668b4567",
                                            "54527ac44bdc2d36668b4567",
                                            "59e68f6f86f7746c9f75e846",
                                            "59e6906286f7746c9f75e847",
                                            "59e690b686f7746c9f75e848",
                                            "59e6918f86f7746c9f75e849",
                                            "60194943740c5d77f6705eea",
                                            "601949593ae8f707c4608daa",
                                            "5c0d5ae286f7741e46554302",
                                            "5fbe3ffdf8b6a877a729ea82",
                                            "5fd20ff893a8961fc660a954",
                                            "619636be6db0f2477964e710",
                                            "6196364158ef8c428c287d9f",
                                            "6196365d58ef8c428c287da1",
                                            "64b8725c4b75259c590fa899"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "VisibleAmmoRangesString": "1-6",
                    "Ergonomics": this.DBitems[IDDL.MAG_PAMG_D60_556]._props.Ergonomics - 1,
                    Weight: this.DBitems[IDDL.MAG_PAMG_D60_556]._props.Weight * 1.05,
                    LoadUnloadModifier: this.DBitems[IDDL.MAG_PAMG_D60_556]._props.LoadUnloadModifier * 0.5,
                },
                "locales": {
                    "ch": {
                        "name": "Cronen 5.56x45 60发STANAG弹鼓",
                        "shortName": "Cronen 60",
                        "description": "A 60-round 5.56x45mm polymer drum magazine designed for faster load speed in the field."
                    },
                    "en": {
                        "name": "5.56x45 Cronen STANAG 60-round drum magazine",
                        "shortName": "Cronen 60",
                        "description": "A 60-round 5.56x45mm polymer drum magazine designed for faster load speed in the field."
                    }
                },
                "clearClonedProps": false,
                "addtoInventorySlots": [],
                "addtoModSlots": true,
                "modSlot": [
                    "mod_magazine"
                ],
                "ModdableItemWhitelist": [],
                "ModdableItemBlacklist": [],
                "fleaPriceRoubles": 26000,
                "handbookPriceRoubles": 26000,
                "addtoTraders": true,
                "traderId": NTrader_1.NTrader.Default,
                "traderItems": [
                    {
                        "unlimitedCount": true,
                        "stackObjectsCount": 99
                    }
                ],
                "barterScheme": [
                    {
                        "count": 26000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
            },
            muzzle_sil450: {
                itemTplToClone: "5cf6937cd7f00c056c53fb39",
                newId: IDDL.MUZZLE_MCW_450,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/muzzle_mcw_450.bundle",
                        "rcid": ""
                    },
                    Weight: 0.13,
                    Slots: []
                },
                fleaPriceRoubles: 26000,
                parentId: this.DBitems[IDDL.MUZZLE_SF3P]._parent,
                handbookPriceRoubles: 18000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "XTEN high efficiency AR-15 muzzle device",
                        "shortName": "XTEN HE",
                        "description": "AR-15 muzzle device manufactured by XTEN."
                    },
                    "ch": {
                        "name": "XTEN 高效 AR-15 枪口装置",
                        "shortName": "XTEN HE",
                        "description": "XTEN 生产的AR-15枪口装置。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 17000
                    }
                ],
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.muzzle
                ]
            },
            muzzle_sil300: {
                itemTplToClone: "5cdd7685d7f00c000f260ed2",
                newId: IDDL.MUZZLE_MCW_300,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/mcw/mods/muzzle_mcw_300.bundle",
                        "rcid": ""
                    },
                    Weight: 0.165,
                    Slots: []
                },
                fleaPriceRoubles: 22000,
                parentId: this.DBitems[IDDL.MUZZLE_SF3P]._parent,
                handbookPriceRoubles: 13000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "KR .300 muzzle device",
                        "shortName": "KR .300",
                        "description": "Muzzle device manufactured by Kilo Reiner."
                    },
                    "ch": {
                        "name": "KR .300 枪口装置",
                        "shortName": "KR .300",
                        "description": "Muzzle device manufactured by Kilo Reiner."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 12000
                    }
                ],
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.muzzle
                ]
            },
            "mag_stanag_mcw_big_drum": {
                newId: IDDL.MAG_MCW_BIG,
                "itemTplToClone": "5c6d46132e221601da357d56",
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mcw/mods/mag_stanag_mcw_big_drum.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_id": "mag_stanag_mcw_big_drum_cart",
                            "_max_count": 120,
                            "_name": "cartridges",
                            "_parent": "mag_stanag_mcw_big_drum",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "59e6920f86f77411d82aa167",
                                            "59e6927d86f77411da468256",
                                            "54527a984bdc2d4e668b4567",
                                            "54527ac44bdc2d36668b4567",
                                            "59e68f6f86f7746c9f75e846",
                                            "59e6906286f7746c9f75e847",
                                            "59e690b686f7746c9f75e848",
                                            "59e6918f86f7746c9f75e849",
                                            "60194943740c5d77f6705eea",
                                            "601949593ae8f707c4608daa",
                                            "5c0d5ae286f7741e46554302",
                                            "5fbe3ffdf8b6a877a729ea82",
                                            "5fd20ff893a8961fc660a954",
                                            "619636be6db0f2477964e710",
                                            "6196364158ef8c428c287d9f",
                                            "6196365d58ef8c428c287da1",
                                            "64b8725c4b75259c590fa899"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "magAnimationIndex": 0,
                    "ItemSound": "mag_plastic",
                    "MagazineWithBelt": false,
                    "CheckOverride": 0,
                    "BackgroundColor": "yellow",
                    "ExtraSizeDown": 1,
                    "Weight": 0.78,
                    "Width": 2,
                    "Height": 2,
                    "CheckTimeModifier": 30,
                    "LoadUnloadModifier": 30,
                    "MalfunctionChance": 0.41,
                    "Ergonomics": -28
                },
                "locales": {
                    "en": {
                        "name": "5.56x45 JAK STANAG 120-round drum magazine",
                        "shortName": "JAK 120",
                        "description": "A specially designed 120-round drum magazine."
                    },
                    "ch": {
                        "name": "JAK 5.56x45 120发STANAG弹鼓",
                        "shortName": "JAK 120",
                        "description": "A specially designed 120-round drum magazine."
                    }
                },
                "clearClonedProps": false,
                "addtoInventorySlots": [],
                "addtoModSlots": true,
                "modSlot": [
                    "mod_magazine"
                ],
                "ModdableItemWhitelist": [],
                "ModdableItemBlacklist": [],
                "fleaPriceRoubles": 26000,
                "handbookPriceRoubles": 26000,
                "addtoTraders": true,
                "traderId": NTrader_1.NTrader.Default,
                "traderItems": [
                    {
                        "unlimitedCount": true,
                        "stackObjectsCount": 99
                    }
                ],
                "barterScheme": [
                    {
                        "count": 26000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
            }
        };
        this.addWeapon_fde();
        this.addWeapon_blk();
        this.addWeapon_300();
        this.addWeapon_aim();
        this.addWeapon_snp();
    }
    addWeapon_fde() {
        const presetid = IDDL.PRESET_FDE;
        const Nid = IDDL.WEAPON_MCW_FDE;
        this.data["weapon_mcw_fde"] = {
            itemTplToClone: IDDL.WEAPON___SCAR_L,
            newId: Nid,
            overrideProperties: {
                Prefab: {
                    path: "assets/mcw/weapon_mcw_556x45_container.bundle",
                    rcid: ""
                },
                Slots: [
                    {
                        "_name": mod_slot_1.mod_slot.reciever,
                        "_id": "5c488af32e2216398b5a9608",
                        "_parent": "5c488a752e221602b412af63",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        ...List_rec
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": mod_slot_1.mod_slot.stock,
                        "_id": "5c488af32e2216398b5a9608",
                        "_parent": "5c488a752e221602b412af63",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        ...List_stocks
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                        "_name": mod_slot_1.mod_slot.charge,
                        "_id": "5c488af32e2216398b5a9608",
                        "_parent": "5c488a752e221602b412af63",
                        "_props": {
                            "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                        IDDL.CHARGE_MCW_NONREC,
                                        IDDL.CHARGE_MCW_RECIPR
                                    ]
                                }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                    }
                ],
                Foldable: false,
                FoldedSlot: "",
                defMagType: this.def_mag,
                bFirerate: 710,
                Ergonomics: 53,
                Weight: 0.97,
                "RecoilForceBack": 396,
                "RecoilForceUp": 116,
                "RecolDispersion": 9,
                RecoilCamera: 0.06,
                RecoilReturnSpeedHandRotation: 2.6,
                "PostRecoilHorizontalRangeHandRotation": {
                    "x": -1.3,
                    "y": 0.7,
                    "z": 0
                },
                ConflictingItems: [
                    ...List_barrels_300
                ]
            },
            fleaPriceRoubles: 60000,
            parentId: this.DBitems[IDDL.WEAPON___SCAR_L]._parent,
            handbookPriceRoubles: 40000,
            handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
            locales: {
                "en": {
                    "name": "Rattle Back MCW 5.56x45 assault rifle (FDE)",
                    "shortName": "MCW",
                    "description": "This remarkably adaptable assault rifle features phenomenal recoil control and versatility from a lightweight frame chambered in 5.56."
                },
                "ch": {
                    "name": "Rattle Back MCW 5.56x45 突击步枪 (FDE)",
                    "shortName": "MCW",
                    "description": "This remarkably adaptable assault rifle features phenomenal recoil control and versatility from a lightweight frame chambered in 5.56."
                }
            },
            addtoTraders: false,
            copySlot: true,
            copySlots: [
                {
                    id: IDDL.WEAPON___SCAR_L,
                    newSlotName: mod_slot_1.mod_slot.magazine
                }
            ],
            masteries: true,
            masterySections: [
                {
                    Name: "MCW",
                    Templates: [
                        Nid
                    ],
                    Level2: 150,
                    Level3: 300
                }
            ],
            "addweaponpreset": true,
            "weaponpresets": [
                {
                    "_changeWeaponName": false,
                    "_encyclopedia": Nid,
                    "_id": `${presetid}000`,
                    "_items": [
                        {
                            "_id": `${presetid}060`,
                            "_tpl": Nid
                        },
                        {
                            "_id": `${presetid}063`,
                            "_tpl": this.def_mag,
                            "parentId": `${presetid}060`,
                            "slotId": "mod_magazine"
                        },
                        {
                            "_id": `${presetid}048`,
                            "_tpl": IDDL.REC_MCW_FDE,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.reciever
                        },
                        {
                            "_id": `${presetid}042`,
                            "_tpl": IDDL.REAR_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_rear
                        },
                        {
                            "_id": `${presetid}041`,
                            "_tpl": IDDL.FRONT_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_front
                        },
                        {
                            "_id": `${presetid}049`,
                            "_tpl": IDDL.BARREL_MCW__DEF,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.barrel
                        },
                        {
                            "_id": `${presetid}046`,
                            "_tpl": IDDL.HANDGUARD_MCW__DEF,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.handguard
                        },
                        {
                            "_id": `${presetid}050`,
                            "_tpl": IDDL.MUZZLE_SF3P,
                            "parentId": `${presetid}049`,
                            "slotId": mod_slot_1.mod_slot.muzzle
                        },
                        {
                            "_id": `${presetid}0e7`,
                            "_tpl": IDDL.STOCK_MCW_ASS,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.stock
                        },
                        {
                            "_id": `${presetid}0ea`,
                            "_tpl": IDDL.CHARGE_MCW_NONREC,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.charge
                        },
                        // {
                        //     "_id": `${presetid}0e9`,
                        //     "_tpl": IDDL.PG_ISOH_DEF,
                        //     "parentId": `${presetid}060`,
                        //     "slotId": mod_slot.pistol_grip
                        // }
                    ],
                    "_name": "MCW FDE Default",
                    "_parent": `${presetid}060`,
                    "_type": "Preset"
                }
            ]
        };
    }
    addWeapon_blk() {
        const presetid = IDDL.PRESET_BLK;
        const Nid = IDDL.WEAPON_MCW_BLK;
        this.data["weapon_mcw_blk"] = {
            itemTplToClone: IDDL.WEAPON_MCW_FDE,
            newId: Nid,
            overrideProperties: {
                Prefab: {
                    path: "assets/mcw/weapon_mcw_blk_556x45_container.bundle",
                    rcid: ""
                }
            },
            fleaPriceRoubles: 60000,
            parentId: this.DBitems[IDDL.WEAPON___SCAR_L]._parent,
            handbookPriceRoubles: 40000,
            handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
            locales: {
                "en": {
                    "name": "Rattle Back MCW 5.56x45 assault rifle",
                    "shortName": "MCW",
                    "description": "This remarkably adaptable assault rifle features phenomenal recoil control and versatility from a lightweight frame chambered in 5.56."
                },
                "ch": {
                    "name": "Rattle Back MCW 5.56x45 突击步枪",
                    "shortName": "MCW",
                    "description": "This remarkably adaptable assault rifle features phenomenal recoil control and versatility from a lightweight frame chambered in 5.56."
                }
            },
            addtoTraders: false,
            masteries: true,
            masterySections: [
                {
                    Name: "MCW",
                    Templates: [
                        Nid
                    ]
                }
            ],
            "addweaponpreset": true,
            "weaponpresets": [
                {
                    "_changeWeaponName": false,
                    "_encyclopedia": Nid,
                    "_id": `${presetid}000`,
                    "_items": [
                        {
                            "_id": `${presetid}060`,
                            "_tpl": Nid
                        },
                        {
                            "_id": `${presetid}063`,
                            "_tpl": this.def_mag,
                            "parentId": `${presetid}060`,
                            "slotId": "mod_magazine"
                        },
                        {
                            "_id": `${presetid}048`,
                            "_tpl": IDDL.REC_MCW_BLK,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.reciever
                        },
                        {
                            "_id": `${presetid}042`,
                            "_tpl": IDDL.REAR_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_rear
                        },
                        {
                            "_id": `${presetid}041`,
                            "_tpl": IDDL.FRONT_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_front
                        },
                        {
                            "_id": `${presetid}049`,
                            "_tpl": IDDL.BARREL_MCW__DEF,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.barrel
                        },
                        {
                            "_id": `${presetid}046`,
                            "_tpl": IDDL.HANDGUARD_MCW__BLK,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.handguard
                        },
                        {
                            "_id": `${presetid}050`,
                            "_tpl": IDDL.MUZZLE_SF3P,
                            "parentId": `${presetid}049`,
                            "slotId": mod_slot_1.mod_slot.muzzle
                        },
                        {
                            "_id": `${presetid}0e7`,
                            "_tpl": IDDL.STOCK_MCW_ASS,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.stock
                        },
                        {
                            "_id": `${presetid}0ea`,
                            "_tpl": IDDL.CHARGE_MCW_NONREC,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.charge
                        },
                        // {
                        //     "_id": `${presetid}0e9`,
                        //     "_tpl": IDDL.PG_ISOH_DEF,
                        //     "parentId": `${presetid}060`,
                        //     "slotId": mod_slot.pistol_grip
                        // }
                    ],
                    "_name": "MCW BLK Default",
                    "_parent": `${presetid}060`,
                    "_type": "Preset"
                }
            ]
        };
    }
    addWeapon_300() {
        const presetid = IDDL.PRESET_300;
        const Nid = IDDL.WEAPON_MCW_300;
        const Ergo = this.data["weapon_mcw_fde"].overrideProperties.Ergonomics;
        this.data["weapon_mcw_300"] = {
            itemTplToClone: IDDL.WEAPON_MCW_FDE,
            newId: Nid,
            overrideProperties: {
                Prefab: {
                    path: "assets/mcw/weapon_mcw_300blk_container.bundle",
                    rcid: ""
                },
                defAmmo: "5fbe3ffdf8b6a877a729ea82",
                ammoCaliber: "Caliber762x35",
                Chambers: [
                    this.JsonUtil.clone(this.MMA.weaponGetChamber(IDDL.WEAPON_SIG__MCX))
                ],
                ConflictingItems: [
                    ...List_barrels_556
                ],
                bFirerate: 800,
                Ergonomics: Ergo + 3,
                "RecoilForceBack": this.data["weapon_mcw_fde"].overrideProperties.RecoilForceBack - 4,
                "RecoilForceUp": this.data["weapon_mcw_fde"].overrideProperties.RecoilForceUp - 2,
                "RecolDispersion": this.data["weapon_mcw_fde"].overrideProperties.RecolDispersion - 1
            },
            fleaPriceRoubles: 60000,
            parentId: this.DBitems[IDDL.WEAPON___SCAR_L]._parent,
            handbookPriceRoubles: 40000,
            handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
            locales: {
                "en": {
                    "name": "Rattle Back MCW .300 Blackout assault rifle",
                    "shortName": "MCW",
                    "description": "This remarkably adaptable assault rifle features phenomenal recoil control and versatility from a lightweight frame chambered in .300 BLK."
                },
                "ch": {
                    "name": "Rattle Back MCW .300 Blackout 突击步枪",
                    "shortName": "MCW",
                    "description": "This remarkably adaptable assault rifle features phenomenal recoil control and versatility from a lightweight frame chambered in .300 BLK."
                }
            },
            addtoTraders: false,
            masteries: true,
            masterySections: [
                {
                    Name: "MCW",
                    Templates: [
                        Nid
                    ]
                }
            ],
            "addweaponpreset": true,
            "weaponpresets": [
                {
                    "_changeWeaponName": false,
                    "_encyclopedia": Nid,
                    "_id": `${presetid}000`,
                    "_items": [
                        {
                            "_id": `${presetid}060`,
                            "_tpl": Nid
                        },
                        {
                            "_id": `${presetid}063`,
                            "_tpl": this.def_mag,
                            "parentId": `${presetid}060`,
                            "slotId": "mod_magazine"
                        },
                        {
                            "_id": `${presetid}048`,
                            "_tpl": IDDL.REC_MCW_BLK,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.reciever
                        },
                        {
                            "_id": `${presetid}042`,
                            "_tpl": IDDL.REAR_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_rear
                        },
                        {
                            "_id": `${presetid}041`,
                            "_tpl": IDDL.FRONT_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_front
                        },
                        {
                            "_id": `${presetid}049`,
                            "_tpl": IDDL.BARREL_MCW__D30,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.barrel
                        },
                        {
                            "_id": `${presetid}046`,
                            "_tpl": IDDL.HANDGUARD_MCW__BLK,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.handguard
                        },
                        {
                            "_id": `${presetid}050`,
                            "_tpl": "5a34fd2bc4a282329a73b4c5",
                            "parentId": `${presetid}049`,
                            "slotId": mod_slot_1.mod_slot.muzzle
                        },
                        {
                            "_id": `${presetid}0e7`,
                            "_tpl": IDDL.STOCK_MCW_LGT,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.stock
                        },
                        {
                            "_id": `${presetid}0ea`,
                            "_tpl": IDDL.CHARGE_MCW_NONREC,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.charge
                        },
                        // {
                        //     "_id": `${presetid}0e9`,
                        //     "_tpl": IDDL.PG_ISOH_DEF,
                        //     "parentId": `${presetid}060`,
                        //     "slotId": mod_slot.pistol_grip
                        // }
                    ],
                    "_name": "MCW 300 Default",
                    "_parent": `${presetid}060`,
                    "_type": "Preset"
                }
            ]
        };
    }
    addWeapon_aim() {
        const presetid = IDDL.PRESET_AIM;
        const Nid = IDDL.WEAPON_MCW_AIM;
        const Ergo = this.data["weapon_mcw_fde"].overrideProperties.Ergonomics;
        this.data["weapon_mcw_aim"] = {
            itemTplToClone: IDDL.WEAPON_MCW_FDE,
            newId: Nid,
            overrideProperties: {
                Prefab: {
                    path: "assets/mcw/weapon_mcw_aim_556x45_container.bundle",
                    rcid: ""
                },
                Ergonomics: Ergo + 1
            },
            fleaPriceRoubles: 60000,
            parentId: this.DBitems[IDDL.WEAPON___SCAR_L]._parent,
            handbookPriceRoubles: 40000,
            handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
            locales: {
                "en": {
                    "name": "Rattle Back MCW 5.56x45 assault rifle (ALT)",
                    "shortName": "MCW",
                    "description": "This remarkably adaptable assault rifle features phenomenal recoil control and versatility from a lightweight frame chambered in 5.56. Alternative grip shape."
                },
                "ch": {
                    "name": "Rattle Back MCW 5.56x45 突击步枪 (ALT)",
                    "shortName": "MCW",
                    "description": "This remarkably adaptable assault rifle features phenomenal recoil control and versatility from a lightweight frame chambered in 5.56. Alternative grip shape."
                }
            },
            addtoTraders: false,
            masteries: true,
            masterySections: [
                {
                    Name: "MCW",
                    Templates: [
                        Nid
                    ]
                }
            ],
            addSlot: true,
            addSlots: [
                {
                    "_name": mod_slot_1.mod_slot.pistol_grip,
                    "_id": "5c488af32e2216398b5a9608",
                    "_parent": "5c488a752e221602b412af63",
                    "_props": {
                        "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                    IDDL.PG_MCW_SNP
                                ]
                            }
                        ]
                    },
                    "_required": false,
                    "_mergeSlotWithChildren": false,
                    "_proto": "55d30c4c4bdc2db4468b457e"
                }
            ],
            "addweaponpreset": true,
            "weaponpresets": [
                {
                    "_changeWeaponName": false,
                    "_encyclopedia": Nid,
                    "_id": `${presetid}000`,
                    "_items": [
                        {
                            "_id": `${presetid}060`,
                            "_tpl": Nid
                        },
                        {
                            "_id": `${presetid}063`,
                            "_tpl": this.def_mag,
                            "parentId": `${presetid}060`,
                            "slotId": "mod_magazine"
                        },
                        {
                            "_id": `${presetid}048`,
                            "_tpl": IDDL.REC_MCW_BLK,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.reciever
                        },
                        {
                            "_id": `${presetid}042`,
                            "_tpl": IDDL.REAR_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_rear
                        },
                        {
                            "_id": `${presetid}041`,
                            "_tpl": IDDL.FRONT_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_front
                        },
                        {
                            "_id": `${presetid}049`,
                            "_tpl": IDDL.BARREL_MCW__DEF,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.barrel
                        },
                        {
                            "_id": `${presetid}046`,
                            "_tpl": IDDL.HANDGUARD_MCW__BLK,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.handguard
                        },
                        {
                            "_id": `${presetid}050`,
                            "_tpl": IDDL.MUZZLE_SF3P,
                            "parentId": `${presetid}049`,
                            "slotId": mod_slot_1.mod_slot.muzzle
                        },
                        {
                            "_id": `${presetid}0e7`,
                            "_tpl": IDDL.STOCK_MCW_ASS,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.stock
                        },
                        {
                            "_id": `${presetid}0ea`,
                            "_tpl": IDDL.CHARGE_MCW_NONREC,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.charge
                        },
                        // {
                        //     "_id": `${presetid}0e9`,
                        //     "_tpl": IDDL.PG_ISOH_DEF,
                        //     "parentId": `${presetid}060`,
                        //     "slotId": mod_slot.pistol_grip
                        // }
                    ],
                    "_name": "MCW AIM Default",
                    "_parent": `${presetid}060`,
                    "_type": "Preset"
                }
            ]
        };
    }
    addWeapon_snp() {
        const def_mag = "5aaa5e60e5b5b000140293d6";
        const presetid = IDDL.PRESET_SNP;
        const Nid = IDDL.WEAPON_MCW_SNP;
        this.data["weapon_mcw_snp"] = {
            itemTplToClone: IDDL.WEAPON_MCW_AIM,
            newId: Nid,
            overrideProperties: {
                Prefab: {
                    path: "assets/mcw/weapon_mcw_snp_556x45_container.bundle",
                    rcid: ""
                },
                weapFireType: [
                    "single"
                ],
                defMagType: def_mag
            },
            fleaPriceRoubles: 60000,
            parentId: this.DBitems[IDDL.WEAPON___SCAR_L]._parent,
            handbookPriceRoubles: 40000,
            handbookParentId: handbookCategory_1.handbookCategory.Assaultcarbines,
            locales: {
                "en": {
                    "name": "Rattle Back MCW 5.56x45 marksman rifle",
                    "shortName": "MCW DMR",
                    "description": "This remarkably adaptable marksman rifle features phenomenal recoil control and versatility from a lightweight frame chambered in 5.56."
                },
                "ch": {
                    "name": "Rattle Back MCW 5.56x45 精确射手步枪",
                    "shortName": "MCW DMR",
                    "description": "This remarkably adaptable marksman rifle features phenomenal recoil control and versatility from a lightweight frame chambered in 5.56."
                }
            },
            addtoTraders: false,
            masteries: true,
            masterySections: [
                {
                    Name: "MCW",
                    Templates: [
                        Nid
                    ]
                }
            ],
            "addweaponpreset": true,
            "weaponpresets": [
                {
                    "_changeWeaponName": false,
                    "_encyclopedia": Nid,
                    "_id": `${presetid}000`,
                    "_items": [
                        {
                            "_id": `${presetid}060`,
                            "_tpl": Nid
                        },
                        {
                            "_id": `${presetid}063`,
                            "_tpl": def_mag,
                            "parentId": `${presetid}060`,
                            "slotId": "mod_magazine"
                        },
                        {
                            "_id": `${presetid}048`,
                            "_tpl": IDDL.REC_MCW_SNP,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.reciever
                        },
                        {
                            "_id": `${presetid}042`,
                            "_tpl": IDDL.REAR_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_rear
                        },
                        {
                            "_id": `${presetid}041`,
                            "_tpl": IDDL.FRONT_SIGHT_MAGPUL,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.sight_front
                        },
                        {
                            "_id": `${presetid}049`,
                            "_tpl": IDDL.BARREL_MCW_HVY_MARK,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.barrel
                        },
                        {
                            "_id": `${presetid}046`,
                            "_tpl": IDDL.HANDGUARD_MCW_HVY_MARK,
                            "parentId": `${presetid}048`,
                            "slotId": mod_slot_1.mod_slot.handguard
                        },
                        {
                            "_id": `${presetid}050`,
                            "_tpl": IDDL.MUZZLE_MCW_450,
                            "parentId": `${presetid}049`,
                            "slotId": mod_slot_1.mod_slot.muzzle
                        },
                        {
                            "_id": `${presetid}0e7`,
                            "_tpl": IDDL.STOCK_MCW_HVY,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.stock
                        },
                        {
                            "_id": `${presetid}0ea`,
                            "_tpl": IDDL.CHARGE_MCW_RECIPR,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.charge
                        },
                        {
                            "_id": `${presetid}0e9`,
                            "_tpl": IDDL.PG_MCW_SNP,
                            "parentId": `${presetid}060`,
                            "slotId": mod_slot_1.mod_slot.pistol_grip
                        }
                    ],
                    "_name": "MCW SNP Default",
                    "_parent": `${presetid}060`,
                    "_type": "Preset"
                }
            ]
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
            if (this.DBitems[id] != undefined) {
                this.logger.log(`${id} already added by other mods, skip adding.`, "yellow");
                continue;
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
                    var tgtSlot = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(tgtSlotName, slotData.id));
                    var newFilter = tgtSlot._props.filters[0].Filter;
                    var newSlot = this.MMA.newSlot(slotData.newSlotName, "F" + index.toString(16), id, tgtSlot._required, tgtSlot._mergeSlotWithChildren, newFilter);
                    this.DBitems[id]._props.Slots.push(newSlot);
                    index += 1;
                }
            }
            if (this.data[x].addSlot) {
                for (let slot of this.data[x].addSlots) {
                    this.DBitems[id]._props.Slots.push(slot);
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
                if (this.data[x].modSlot.includes(mod_slot_1.mod_slot.magazine)) {
                    var MODINFO = {
                        ItemId: id,
                        MagCloneCaliberTable: "itself"
                    };
                    MMA.modifyItems(MODINFO);
                }
            }
        }
        MMA.traderGenerateAssortFromPreset(`${IDDL.PRESET_FDE}000`, 90000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset(`${IDDL.PRESET_BLK}000`, 90000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset(`${IDDL.PRESET_300}000`, 100000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset(`${IDDL.PRESET_AIM}000`, 160000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset(`${IDDL.PRESET_SNP}000`, 120000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        const weaponList = [
            IDDL.WEAPON_MCW_FDE,
            IDDL.WEAPON_MCW_BLK,
            IDDL.WEAPON_MCW_AIM,
            IDDL.WEAPON_MCW_SNP,
            IDDL.WEAPON_MCW_300
        ];
        for (let id of weaponList) {
            ModifyInfos[id] = {
                ItemId: id,
                WeaponCaliberCloneFromId: "itself"
            };
        }
        MMA.loadModifierObj(ModifyInfos);
        MMA.itemsRemoveItemsfromSlot(weaponList, mod_slot_1.mod_slot.magazine, [IDDL.MAG_MAG5_100_556, IDDL.MAG_MAG5_60_556, IDDL.MAG_PAMG_D60_556]);
        MMA.itemAddConflict("622f02437762f55aaa68ac85", IDDL.MAG_MCW_60);
        MMA.itemAddConflict("622f02437762f55aaa68ac85", IDDL.MAG_MCW_BIG);
    }
}
module.exports = Mass_MCW;
//# sourceMappingURL=Mass_MCW.js.map