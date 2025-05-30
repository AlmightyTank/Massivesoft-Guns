"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const handbookCategory_1 = require("../../enum/handbookCategory");
const IDDL = {
    WEAPON_ISO_HEML: "020020F15FF15F0000000000",
    WEAPON_ISO_H300: "020020F15EF15E0000000000",
    WEAPON_ISO_H308: "020020F15DF15D0000000000",
    WEAPON___SCAR_L: "6184055050224f204c1da540",
    WEAPON___SCAR_H: "6183afd850224f204c1da514",
    WEAPON_SIG__MPX: "58948c8e86f77409493f7266",
    WEAPON_SIG__MCX: "5fbcc1d9016cce60e8341ab3",
    WEAPON__MDR_308: "5dcbd56fdbd3d91b3e5468d5",
    REC_ISO_HEML: "042042F15FF15F0000000000",
    REC_ISO_H308: "042042F15DF15D0000000000",
    REC_ISO_H300: "042042F15EF15E0000000000",
    REC___SCAR_L: "618405198004cc50514c3594",
    BARREL_ISOH__DEF: "04B04BF15FF15F0000000000",
    BARREL_ISOH__D00: "04B04BF15EF15E0000000000",
    BARREL_ISOH__D08: "04B04BF15DF15D0000000000",
    BARREL_ISOH_LONG: "04B14BF15FF15F14B0000000",
    BARREL_ISOH_LO00: "04B14BF15EF15E14B0000000",
    BARREL_ISOH_LO08: "04B14BF15DF15D14B0000000",
    BARREL_ISOH_PSTL: "04B24BF15FF15F24B0000000",
    BARREL_ISOH_PS00: "04B24BF15EF15E24B0000000",
    BARREL_ISOH_PS08: "04B24BF15DF15D24B0000000",
    BARREL_ISOH_SHRT: "04B34BF15FF15F34B0000000",
    BARREL_ISOH_SH00: "04B34BF15EF15E34B0000000",
    BARREL_ISOH_SH08: "04B34BF15DF15D34B0000000",
    BARREL_ISOH__S00: "04B44BF15EF15E44B0000000",
    BARREL_SCARL__10: "6183fc15d3a39d50044c13e9",
    BARREL_SCARH__13: "618168b350224f204c1da4d8",
    BARREL_SCARH__16: "6183b0711cb55961fa0fdcad",
    HANDGUARD_ISOH__DEF: "041041F15FF15F4100000000",
    HANDGUARD_ISOH_PSTL: "041141F15FF1514100000000",
    HANDGUARD_ISOH__HVY: "041241F15FF1524100000000",
    HANDGUARD_ISOH_LONG: "041341F15FF1534100000000",
    HANDGUARD_ISOH_SHRT: "041441F15FF1544100000000",
    HANDGUARD_HK416_DEF: "5bb20de5d4351e0035629e59",
    STOCK_ISOH_ADPT: "047047F15FF15F0470000000",
    STOCK_ISOH__DEF: "047147F15FF15F1470000000",
    STOCK_ISOH__LGT: "047247F15FF15F2470000000",
    STOCK_ISOH__HVY: "047347F15FF15F3470000000",
    STOCK_ISOH_SKEL: "047447F15FF15F4470000000",
    STOCK_SIG_EARLY: "5894a13e86f7742405482982",
    PG_AR15_MAGPUL_MOE: "55802f5d4bdc2dac148b458f",
    PG_ISOH_DEF: "043043F15FF15F4300000000",
    PG_ISOH_ASS: "043143F15FF15F4310000000",
    PG_ISOH_SKE: "043243F15FF15F4320000000",
    PG_ISOH__SN: "043343F15FF15F4330000000",
    PG_ISOH_TAC: "043443F15FF15F4340000000",
    FRONT_SIGHT_ISOH: "04CF4CF15FF15F4C00000000",
    FRONT_SIGHT_MAGPUL: "5bc09a30d4351e00367fb7c8",
    REAR_SIGHT_MAGPUL: "5bc09a18d4351e003562b68e",
    REAR_SIGHT_ISOH: "04CB4CF15FF15B4C00000000",
    MUZZLE_MDR556: "5c48a2a42e221602b66d1e07",
    MUZZLE_MDR762: "5dcbe965e4ed22586443a79d",
    MUZZLE_ISOH: "04B84BF15FF1584B00000000",
    MUZZLE_ISOH_HVY: "04B84BF15DF1584B00000000",
    MUZZLE_ISOH_SHRT: "04B84BF15EF1584B00000000",
    MAG_PMAG_30_556_W: "55802d5f4bdc2dac148b458e",
    MAG_PMAG_30_556: "5d1340b3d7ad1a0b52682ed7",
    MAG_ISOH____MAG: "02F02FF15FF15F0000000000",
    MAG_ISOH_MAG300: "02F02FF15EF15E0000000000",
    MAG_PMAG_20_308: "5a3501acc4a282000d72293a",
    MOUNT_MLOK_25: "5b7be47f5acfc400170e2dd2",
    MOUNT_MLOK_41: "5b7be4895acfc400170e2dd5",
    MOUNT_ISOH__DEF_SIDE: "048048F15FF15F4800000000",
    MOUNT_ISOH__HVY_SIDE: "048048F15EF15E4800000000",
    MOUNT_ISOH_SHRT_SIDE: "048048F15DF15D4800000000",
    MOUNT_ISOH__DEF_FG: "048148F15FF15F4810000000",
    MOUNT_ISOH__HVY_FG: "048148F15EF15E4810000000",
    MOUNT_ISOH__DEF_BT: "048248F15FF15F4820000000",
    MOUNT_ISOH__HVY_BT: "048248F15EF15E4820000000",
    SILENCER_ISOH: "04B94BF15EF1594B00000000",
    SILENCER_QDC: "5dfa3d2b0dee1b22f862eade",
    STOCK_AK74_WOOD: "5649b1c04bdc2d16268b457c",
    STOCK_MP7A2: "5bd704e7209c4d00d7167c31",
    // WEAPON_VECTOR_45: "5fb64bc92b1b027b1f50bcf2",
    // WEAPON_MP9:"5e00903ae9dc277128008b87",
    // BARREL_VECTOR_45_5IN: "5fb65363d1409e5ca04b54f5",
    // BARREL_ISO__HVY: "04BA4BF150F15A4B00000000",
    // BARREL_ISO_MINI: "04B04BF150F1500000000000",
    // BARREL_ISO_LONG: "04BB4BF150F15B4B00000000",
    // BARREL_ISO__SIL: "04BC4BF150F15C4B00000000",
    // BARREL_ISO__S45: "04BE4BF150F15E4B00000000",
    // BARREL_I45__HVY: "04BA4BF152F25A4B00000000",
    // BARREL_I45_MINI: "04B04BF152F2500000000000",
    // BARREL_I45_LONG: "04BB4BF152F25B4B00000000",
    // BARREL_I45__SIL: "04BC4BF152F25C4B00000000",
    // BARREL_I45__S45: "04BE4BF152F25E4B00000000",
    // BARREL_STM9_10: "603372b4da11d6478d5a07ff",
    // REC_ISO_GEN1: "042042F150F1500000000000",
    // REC_ISO_GEN2: "042042F151F1510000000000",
    // REC_ISO___45: "042042F152F1520000000000",
    // REC_STM9: "602e63fb6335467b0c5ac94d",
    // STOCK_ISO_GEN1: "047047F150F1500000000000",
    // STOCK_ISO_GEN2: "047047F151F1510000000000",
    // STOCK_ISO_LGT: "047A47F151F151A470000000",
    // STOCK_ISO_HVY: "047B47F151F151B470000000",
    // STOCK_ISO_ADPT: "047C47F151F151C470000000",
    // PG_ISO_GGEN1: "043043F150F1504300000000",
    // PG_ISO_GGEN2: "043043F151F1514300000000",
    // PG_ISO_GPASS: "043A43F150F15A4300000000",
    // PG_ISO_GPTAC: "043B43F150F15B4300000000",
    // PG_ISO_GPERG: "043C43F150F15C4300000000",
    // MOUNT_VECTOR_BOTTOM: "5fbb976df9986c4cff3fe5f2",
    // MOUNT_ISO_MINI: "048048F150F1504800000000",
    // MOUNT_ISO_HVY: "048A48F150F15A4800000000",
    // MOUNT_ISO_SIL: "048C48F150F15C4800000000",
    // HANDGUARD_ISO_HVY: "041041F150F1504100000000",
    // HANDGUARD_ISO_LNG: "041B41F150F15B4100000000",
    // HANDGUARD_ISO_SIL: "041C41F150F15C4100000000",
    // HANDGUARD_ISO_F45: "041D41F150F15D4100000000",
    // HANDGUARD_ISO_S45: "041E41F150F15E4100000000",
    // HANDGUARD_VECTOR_MK5: "5fbb978207e8a97d1f0902d3",
    // SILENCER_S45: "04B74BF150F1574B00000000",
    // SILENCER_MP5: "5926d33d86f77410de68ebc0",
    // MOUNT_OPTTIC: "046046BBA97BBA9746000000",
    // MOUNT_FORE: "047047BBA97BBA9747000000",
    // MOUNT_M700: "5bfebc530db834001d23eb65"
};
const List_stocks = [
    IDDL.STOCK_ISOH_ADPT,
    IDDL.STOCK_ISOH_SKEL,
    IDDL.STOCK_ISOH__HVY,
    IDDL.STOCK_ISOH__LGT
];
const List_barrels_556 = [
    IDDL.BARREL_ISOH__DEF,
    IDDL.BARREL_ISOH_LONG,
    IDDL.BARREL_ISOH_SHRT,
    IDDL.BARREL_ISOH_PSTL
];
const List_barrels_308 = [
    IDDL.BARREL_ISOH__D08,
    IDDL.BARREL_ISOH_LO08,
    IDDL.BARREL_ISOH_SH08,
    IDDL.BARREL_ISOH_PS08
];
const List_barrels_300 = [
    IDDL.BARREL_ISOH__D00,
    IDDL.BARREL_ISOH_LO00,
    IDDL.BARREL_ISOH_SH00,
    IDDL.BARREL_ISOH_PS00,
    IDDL.BARREL_ISOH__S00
];
const List_handguards = [
    IDDL.HANDGUARD_ISOH__DEF,
    IDDL.HANDGUARD_ISOH_LONG,
    IDDL.HANDGUARD_ISOH_PSTL,
    IDDL.HANDGUARD_ISOH_SHRT,
    IDDL.HANDGUARD_ISOH__HVY
];
const List_mount_side = [
    IDDL.MOUNT_ISOH__DEF_SIDE,
    IDDL.MOUNT_ISOH__HVY_SIDE,
    IDDL.MOUNT_ISOH_SHRT_SIDE
];
const List_mount_fg = [
    IDDL.MOUNT_ISOH__DEF_FG,
    IDDL.MOUNT_ISOH__HVY_FG
];
const List_mount_bt = [
    IDDL.MOUNT_ISOH__DEF_BT,
    IDDL.MOUNT_ISOH__HVY_BT
];
const List_barrel_exs = [
    IDDL.BARREL_ISOH_PSTL,
    IDDL.BARREL_ISOH_PS00,
    IDDL.BARREL_ISOH_PS08
];
const List_barrel_short = [
    IDDL.BARREL_ISOH_SHRT,
    IDDL.BARREL_ISOH_SH00,
    IDDL.BARREL_ISOH_SH08,
    IDDL.BARREL_ISOH__DEF,
    IDDL.BARREL_ISOH__D00,
    IDDL.BARREL_ISOH__D08,
    IDDL.BARREL_ISOH__S00
];
const List_barrel_long = [
    IDDL.BARREL_ISOH_LONG,
    IDDL.BARREL_ISOH_LO00,
    IDDL.BARREL_ISOH_LO08
];
const cpntName = "Mass_ISOH";
class Mass_ISOH extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    data;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
        const List_grips = [
            ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.pistol_grip, IDDL.WEAPON___SCAR_L)._props.filters[0].Filter)
        ];
        this.data = {
            weapon_isoh: {
                itemTplToClone: IDDL.WEAPON___SCAR_L,
                newId: IDDL.WEAPON_ISO_HEML,
                overrideProperties: {
                    Prefab: {
                        path: "assets/isoh/weapon_iso_hemlock_556x45_container.bundle",
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
                                            IDDL.REC_ISO_HEML
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
                            "_name": mod_slot_1.mod_slot.pistol_grip,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_grips
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
                    defMagType: IDDL.MAG_ISOH____MAG,
                    bFirerate: 600,
                    Ergonomics: 46,
                    Weight: 0.695,
                    "RecoilCamera": 0.05,
                    RecoilForceUp: 100,
                    RecoilForceBack: 340,
                    "RecolDispersion": 8,
                    "RecoilReturnSpeedHandRotation": 2.6
                },
                fleaPriceRoubles: 60000,
                parentId: this.DBitems[IDDL.WEAPON___SCAR_L]._parent,
                handbookPriceRoubles: 40000,
                handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
                locales: {
                    "en": {
                        "name": "Expedite Firearms ISO Hemlock 5.56x45 assault rifle",
                        "shortName": "ISO Hemlock",
                        "description": "This powerful and enhanced rifle from Expedite Firearms is designed to take 5.56 NATO ammunition, providing battlefield-advantage in any situation."
                    },
                    "ch": {
                        "name": "Expedite Firearms ISO Hemlock 5.56x45 突击步枪",
                        "shortName": "ISO Hemlock",
                        "description": "Expedite Firearms生产的ISO Hemlock突击步枪。"
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
                        Name: "ISO_HEML",
                        Templates: [
                            IDDL.WEAPON_ISO_HEML
                        ],
                        Level2: 150,
                        Level3: 300
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_ISO_HEML,
                        "_id": "220020F15FF15F0000000000",
                        "_items": [
                            {
                                "_id": "220020F15FF15F0000000060",
                                "_tpl": IDDL.WEAPON_ISO_HEML
                            },
                            {
                                "_id": "220020F15FF15F0000000063",
                                "_tpl": IDDL.MAG_ISOH____MAG,
                                "parentId": "220020F15FF15F0000000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020F15FF15F0000000048",
                                "_tpl": IDDL.REC_ISO_HEML,
                                "parentId": "220020F15FF15F0000000060",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "220020F15FF15F0000000042",
                                "_tpl": IDDL.REAR_SIGHT_ISOH,
                                "parentId": "220020F15FF15F0000000048",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "220020F15FF15F0000000049",
                                "_tpl": IDDL.BARREL_ISOH__DEF,
                                "parentId": "220020F15FF15F0000000048",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020F15FF15F0000000046",
                                "_tpl": IDDL.HANDGUARD_ISOH_SHRT,
                                "parentId": "220020F15FF15F0000000048",
                                "slotId": mod_slot_1.mod_slot.handguard
                            },
                            {
                                "_id": "220020F15FF15F0000000041",
                                "_tpl": IDDL.FRONT_SIGHT_ISOH,
                                "parentId": "220020F15FF15F0000000046",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "220020F15FF15F0000000050",
                                "_tpl": IDDL.MUZZLE_ISOH,
                                "parentId": "220020F15FF15F0000000049",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020F15FF15F00000000e7",
                                "_tpl": IDDL.STOCK_ISOH_ADPT,
                                "parentId": "220020F15FF15F0000000060",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F15FF15F00000000e8",
                                "_tpl": IDDL.STOCK_ISOH__DEF,
                                "parentId": "220020F15FF15F00000000e7",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F15FF15F00000000e9",
                                "_tpl": IDDL.PG_ISOH_DEF,
                                "parentId": "220020F15FF15F0000000060",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "ISO Hemlock Default",
                        "_parent": "220020F15FF15F0000000060",
                        "_type": "Preset"
                    }
                ]
            },
            weapon_isoh_300: {
                itemTplToClone: IDDL.WEAPON___SCAR_L,
                newId: IDDL.WEAPON_ISO_H300,
                overrideProperties: {
                    Prefab: {
                        path: "assets/isoh/weapon_iso_hemlock_556x45_container.bundle",
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
                                            IDDL.REC_ISO_H300
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
                            "_name": mod_slot_1.mod_slot.pistol_grip,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_grips
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
                    defMagType: IDDL.MAG_ISOH_MAG300,
                    defAmmo: "5fbe3ffdf8b6a877a729ea82",
                    ammoCaliber: "Caliber762x35",
                    bFirerate: 600,
                    Ergonomics: 46,
                    Weight: 0.695,
                    "RecoilCamera": 0.05,
                    RecoilForceUp: 100,
                    RecoilForceBack: 340,
                    "RecolDispersion": 8,
                    Chambers: [
                        this.JsonUtil.clone(this.MMA.weaponGetChamber(IDDL.WEAPON_SIG__MCX))
                    ],
                    "RecoilReturnSpeedHandRotation": 2.6
                },
                fleaPriceRoubles: 60000,
                parentId: this.DBitems[IDDL.WEAPON___SCAR_L]._parent,
                handbookPriceRoubles: 40000,
                handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
                locales: {
                    "en": {
                        "name": "Expedite Firearms ISO Hemlock .300 Blackout assault rifle",
                        "shortName": "ISO Hemlock",
                        "description": "This powerful and enhanced rifle from Expedite Firearms is designed to take .300 BLK ammunition, providing battlefield-advantage in any situation."
                    },
                    "ch": {
                        "name": "Expedite Firearms ISO Hemlock .300 Blackout 突击步枪",
                        "shortName": "ISO Hemlock",
                        "description": "Expedite Firearms生产的ISO Hemlock突击步枪。"
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
                        Name: "ISO_HEML",
                        Templates: [
                            IDDL.WEAPON_ISO_H300
                        ]
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_ISO_H300,
                        "_id": "220020F15EF15E0000000000",
                        "_items": [
                            {
                                "_id": "220020F15EF15E0000000060",
                                "_tpl": IDDL.WEAPON_ISO_H300
                            },
                            {
                                "_id": "220020F15EF15E0000000063",
                                "_tpl": IDDL.MAG_ISOH_MAG300,
                                "parentId": "220020F15EF15E0000000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020F15EF15E0000000048",
                                "_tpl": IDDL.REC_ISO_H300,
                                "parentId": "220020F15EF15E0000000060",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "220020F15EF15E0000000042",
                                "_tpl": IDDL.REAR_SIGHT_ISOH,
                                "parentId": "220020F15EF15E0000000048",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "220020F15EF15E0000000049",
                                "_tpl": IDDL.BARREL_ISOH__D00,
                                "parentId": "220020F15EF15E0000000048",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020F15EF15E0000000046",
                                "_tpl": IDDL.HANDGUARD_ISOH_SHRT,
                                "parentId": "220020F15EF15E0000000048",
                                "slotId": mod_slot_1.mod_slot.handguard
                            },
                            {
                                "_id": "220020F15EF15E0000000041",
                                "_tpl": IDDL.FRONT_SIGHT_ISOH,
                                "parentId": "220020F15EF15E0000000046",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "220020F15EF15E0000000050",
                                "_tpl": IDDL.MUZZLE_ISOH_SHRT,
                                "parentId": "220020F15EF15E0000000049",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020F15EF15E00000000e7",
                                "_tpl": IDDL.STOCK_ISOH_ADPT,
                                "parentId": "220020F15EF15E0000000060",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F15EF15E00000000e8",
                                "_tpl": IDDL.STOCK_ISOH__DEF,
                                "parentId": "220020F15EF15E00000000e7",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F15EF15E00000000e9",
                                "_tpl": IDDL.PG_ISOH_DEF,
                                "parentId": "220020F15EF15E0000000060",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "ISO Hemlock Default",
                        "_parent": "220020F15EF15E0000000060",
                        "_type": "Preset"
                    }
                ]
            },
            weapon_isoh_308: {
                itemTplToClone: IDDL.WEAPON___SCAR_H,
                newId: IDDL.WEAPON_ISO_H308,
                overrideProperties: {
                    Prefab: {
                        path: "assets/isoh/weapon_iso_hemlock_762x51_container.bundle",
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
                                            IDDL.REC_ISO_H308
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
                            "_name": mod_slot_1.mod_slot.pistol_grip,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_grips
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
                    defMagType: IDDL.MAG_PMAG_20_308,
                    bFirerate: 580,
                    Ergonomics: 46,
                    Weight: 0.7,
                    "RecoilReturnSpeedHandRotation": 2.6,
                    "RecoilCamera": 0.055,
                    RecoilForceUp: 150,
                    RecoilForceBack: 378,
                    "RecolDispersion": 10,
                    // "BaseMalfunctionChance": 0.1771,
                    // "HeatFactorByShot": 1.84,
                },
                fleaPriceRoubles: 60000,
                parentId: this.DBitems[IDDL.WEAPON___SCAR_L]._parent,
                handbookPriceRoubles: 40000,
                handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
                locales: {
                    "en": {
                        "name": "Expedite Firearms ISO Hemlock 7.62x51 assault rifle",
                        "shortName": "ISO Hemlock",
                        "description": "This powerful and enhanced rifle from Expedite Firearms is designed to take 7.62 NATO ammunition, providing battlefield-advantage in any situation."
                    },
                    "ch": {
                        "name": "Expedite Firearms ISO Hemlock 7.62x51 突击步枪",
                        "shortName": "ISO Hemlock",
                        "description": "Expedite Firearms生产的ISO Hemlock突击步枪。"
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON__MDR_308,
                        newSlotName: mod_slot_1.mod_slot.magazine
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "ISO_HEML",
                        Templates: [
                            IDDL.WEAPON_ISO_H308
                        ]
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_ISO_H308,
                        "_id": "220020F15DF15D0000000000",
                        "_items": [
                            {
                                "_id": "220020F15DF15D0000000060",
                                "_tpl": IDDL.WEAPON_ISO_H308
                            },
                            {
                                "_id": "220020F15DF15D0000000063",
                                "_tpl": IDDL.MAG_PMAG_20_308,
                                "parentId": "220020F15DF15D0000000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020F15DF15D0000000048",
                                "_tpl": IDDL.REC_ISO_H308,
                                "parentId": "220020F15DF15D0000000060",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "220020F15DF15D0000000042",
                                "_tpl": IDDL.REAR_SIGHT_ISOH,
                                "parentId": "220020F15DF15D0000000048",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "220020F15DF15D0000000049",
                                "_tpl": IDDL.BARREL_ISOH__D08,
                                "parentId": "220020F15DF15D0000000048",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020F15DF15D0000000046",
                                "_tpl": IDDL.HANDGUARD_ISOH_SHRT,
                                "parentId": "220020F15DF15D0000000048",
                                "slotId": mod_slot_1.mod_slot.handguard
                            },
                            {
                                "_id": "220020F15DF15D0000000041",
                                "_tpl": IDDL.FRONT_SIGHT_ISOH,
                                "parentId": "220020F15DF15D0000000046",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "220020F15DF15D0000000050",
                                "_tpl": IDDL.MUZZLE_ISOH_SHRT,
                                "parentId": "220020F15DF15D0000000049",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020F15DF15D00000000e7",
                                "_tpl": IDDL.STOCK_ISOH_ADPT,
                                "parentId": "220020F15DF15D0000000060",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F15DF15D00000000e8",
                                "_tpl": IDDL.STOCK_ISOH__DEF,
                                "parentId": "220020F15DF15D00000000e7",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F15DF15D00000000e9",
                                "_tpl": IDDL.PG_ISOH_DEF,
                                "parentId": "220020F15DF15D0000000060",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "ISO Hemlock Default 308",
                        "_parent": "220020F15DF15D0000000060",
                        "_type": "Preset"
                    }
                ]
            },
            rec_iso_hemlock: {
                itemTplToClone: IDDL.REC___SCAR_L,
                newId: IDDL.REC_ISO_HEML,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/receiver_isoh_556.bundle",
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
                                            ...List_barrels_556
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
                    ExtraSizeLeft: 1,
                    ExtraSizeForceAdd: false,
                    Weight: 0.58,
                    Width: 2
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.REC___SCAR_L]._parent,
                handbookPriceRoubles: 14000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock 556 upper receiver",
                        "shortName": "Hemlock 556",
                        "description": "Upper receiver for EXF ISO Hemlock in 5.56x45."
                    },
                    "ch": {
                        "name": "ISO Hemlock 556 上机匣",
                        "shortName": "Hemlock 556",
                        "description": "5.56x45口径 EXF ISO Hemlock 的上机匣。"
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
                    }
                ]
            },
            rec_iso_hemlock_308: {
                itemTplToClone: IDDL.REC_ISO_HEML,
                newId: IDDL.REC_ISO_H308,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/receiver_isoh_308.bundle",
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
                                            ...List_barrels_308
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
                    // ExtraSizeLeft: 1,
                    // ExtraSizeForceAdd: false,
                    Weight: 0.6
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.REC___SCAR_L]._parent,
                handbookPriceRoubles: 14000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock 762 upper receiver",
                        "shortName": "Hemlock 762",
                        "description": "Upper receiver for EXF ISO Hemlock in 7.62x51."
                    },
                    "ch": {
                        "name": "ISO Hemlock 762 上机匣",
                        "shortName": "Hemlock 762",
                        "description": "7.62x51口径 EXF ISO Hemlock 的上机匣。"
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
                    }
                ]
            },
            rec_iso_hemlock_300: {
                itemTplToClone: IDDL.REC_ISO_HEML,
                newId: IDDL.REC_ISO_H300,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/receiver_isoh_300.bundle",
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
                    // ExtraSizeLeft: 1,
                    // ExtraSizeForceAdd: false,
                    // Weight: 0.58
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.REC___SCAR_L]._parent,
                handbookPriceRoubles: 14000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock .300 upper receiver",
                        "shortName": "Hemlock .300",
                        "description": "Upper receiver for EXF ISO Hemlock in .300 Blackout."
                    },
                    "ch": {
                        "name": "ISO Hemlock .300 上机匣",
                        "shortName": "Hemlock .300",
                        "description": ".300 Blackout 口径 EXF ISO Hemlock 的上机匣。"
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
                    }
                ]
            },
            barrel_isoh_def: {
                itemTplToClone: IDDL.BARREL_SCARH__13,
                newId: IDDL.BARREL_ISOH__DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_def.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.98,
                    "Width": 2,
                    "Height": 1,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false
                    // Velocity: -4,
                    // CenterOfImpact: 0.19,
                    // DurabilityBurnModificator: 0.75,
                    // HeatFactor: 1.05,
                    // CoolFactor: 0.95,
                    // DeviationCurve: 2.7,
                    // DeviationMax: 8,
                    // Recoil: 2,
                    // Ergonomics: -3
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock 5.56x45 standard barrel",
                        "shortName": "Std. 556",
                        "description": "Default barrel for ISO Hemlock in 5.56x45."
                    },
                    "ch": {
                        "name": "ISO Hemlock 5.56x45 标准枪管",
                        "shortName": "标准枪管 556",
                        "description": "5.56x45口径ISO Hemlock的标准枪管。"
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
            barrel_isoh_def_300: {
                itemTplToClone: IDDL.BARREL_ISOH__DEF,
                newId: IDDL.BARREL_ISOH__D00,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_def.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.105,
                    DeviationCurve: 1.4,
                    DeviationMax: 22,
                    "CenterOfImpact": 0.0655,
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock .300 BLK standard barrel",
                        "shortName": "Std. .300",
                        "description": "Default barrel for ISO Hemlock in .300 BLK."
                    },
                    "ch": {
                        "name": "ISO Hemlock .300 BLK 标准枪管",
                        "shortName": "标准枪管 .300",
                        "description": ".300 BLK口径ISO Hemlock的标准枪管。"
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
            barrel_isoh_def_308: {
                itemTplToClone: IDDL.BARREL_ISOH__DEF,
                newId: IDDL.BARREL_ISOH__D08,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_def.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.11,
                    "CenterOfImpact": 0.0651,
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock 7.62x51 standard barrel",
                        "shortName": "Std. 762",
                        "description": "Default barrel for ISO Hemlock in 7.62x51."
                    },
                    "ch": {
                        "name": "ISO Hemlock 7.62x51 标准枪管",
                        "shortName": "标准枪管 762",
                        "description": "7.62x51口径ISO Hemlock的标准枪管。"
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
            barrel_isoh_long: {
                itemTplToClone: IDDL.BARREL_SCARH__16,
                newId: IDDL.BARREL_ISOH_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_long.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 1.125,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock 5.56x45 long barrel",
                        "shortName": "Long 556",
                        "description": "Long barrel for ISO Hemlock in 5.56x45."
                    },
                    "ch": {
                        "name": "ISO Hemlock 5.56x45 长枪管",
                        "shortName": "长枪管 556",
                        "description": "5.56x45口径ISO Hemlock的长枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_long_300: {
                itemTplToClone: IDDL.BARREL_ISOH_LONG,
                newId: IDDL.BARREL_ISOH_LO00,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_long.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 1.13,
                    "DeviationCurve": 1.36,
                    "DeviationMax": 23,
                    "CenterOfImpact": 0.0508
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock .300 BLK long barrel",
                        "shortName": "Long .300",
                        "description": "Long barrel for ISO Hemlock in .300 BLK."
                    },
                    "ch": {
                        "name": "ISO Hemlock .300 BLK 长枪管",
                        "shortName": "长枪管 .300",
                        "description": ".300 BLK口径ISO Hemlock的长枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_long_308: {
                itemTplToClone: IDDL.BARREL_ISOH_LONG,
                newId: IDDL.BARREL_ISOH_LO08,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_long.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 1.134,
                    "CenterOfImpact": 0.0503
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock 7.62x51 long barrel",
                        "shortName": "Long 762",
                        "description": "Long barrel for ISO Hemlock in 7.62x51."
                    },
                    "ch": {
                        "name": "ISO Hemlock 7.62x51 长枪管",
                        "shortName": "长枪管 762",
                        "description": "7.62x51口径ISO Hemlock的长枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_pstl: {
                itemTplToClone: IDDL.BARREL_SCARL__10,
                newId: IDDL.BARREL_ISOH_PSTL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_pstl.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.77,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    "CenterOfImpact": 0.079,
                    "DeviationCurve": 1.62,
                    "DeviationMax": 18
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock 5.56x45 ex. short barrel",
                        "shortName": "Ex. short 556",
                        "description": "Extremely short barrel for ISO Hemlock in 5.56x45."
                    },
                    "ch": {
                        "name": "ISO Hemlock 5.56x45 极短枪管",
                        "shortName": "极短枪管 556",
                        "description": "5.56x45口径ISO Hemlock的极短枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_pstl_300: {
                itemTplToClone: IDDL.BARREL_SCARL__10,
                newId: IDDL.BARREL_ISOH_PS00,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_pstl.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.771,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    "CenterOfImpact": 0.0792,
                    "DeviationCurve": 1.63,
                    "DeviationMax": 17,
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock .300 BLK ex. short barrel",
                        "shortName": "Ex. short .300",
                        "description": "Extremely short barrel for ISO Hemlock in .300 BLK."
                    },
                    "ch": {
                        "name": "ISO Hemlock .300 BLK 极短枪管",
                        "shortName": "极短枪管 .300",
                        "description": ".300 BLK口径ISO Hemlock的极短枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_pstl_308: {
                itemTplToClone: IDDL.BARREL_SCARL__10,
                newId: IDDL.BARREL_ISOH_PS08,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_pstl.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.772,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    "CenterOfImpact": 0.0791
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock 7.62x51 ex. short barrel",
                        "shortName": "Ex. short 762",
                        "description": "Extremely short barrel for ISO Hemlock in 7.62x51."
                    },
                    "ch": {
                        "name": "ISO Hemlock 7.62x51 极短枪管",
                        "shortName": "极短枪管 762",
                        "description": "7.62x51口径ISO Hemlock的极短枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_shrt: {
                itemTplToClone: IDDL.BARREL_SCARL__10,
                newId: IDDL.BARREL_ISOH_SHRT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_shrt.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.87,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    "CenterOfImpact": 0.0775
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock 5.56x45 short barrel",
                        "shortName": "Short 556",
                        "description": "Short barrel for ISO Hemlock in 5.56x45."
                    },
                    "ch": {
                        "name": "ISO Hemlock 5.56x45 短枪管",
                        "shortName": "短枪管 556",
                        "description": "5.56x45口径ISO Hemlock的短枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_shrt_300: {
                itemTplToClone: IDDL.BARREL_ISOH_SHRT,
                newId: IDDL.BARREL_ISOH_SH00,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_shrt.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.885,
                    "DeviationCurve": 1.62,
                    "DeviationMax": 18,
                    "CenterOfImpact": 0.0783,
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock .300 BLK short barrel",
                        "shortName": "Short .300",
                        "description": "Short barrel for ISO Hemlock in .300 BLK."
                    },
                    "ch": {
                        "name": "ISO Hemlock .300 BLK 短枪管",
                        "shortName": "短枪管 .300",
                        "description": ".300 BLK口径ISO Hemlock的短枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_shrt_308: {
                itemTplToClone: IDDL.BARREL_ISOH_SHRT,
                newId: IDDL.BARREL_ISOH_SH08,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_shrt.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.89,
                    "CenterOfImpact": 0.078,
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock 7.62x51 short barrel",
                        "shortName": "Short 762",
                        "description": "Short barrel for ISO Hemlock in 7.62x51."
                    },
                    "ch": {
                        "name": "ISO Hemlock 7.62x51 短枪管",
                        "shortName": "短枪管 762",
                        "description": "7.62x51口径ISO Hemlock的短枪管。"
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
                        "count": 30000
                    }
                ]
            },
            barrel_isoh_sil: {
                itemTplToClone: IDDL.BARREL_ISOH_SH00,
                newId: IDDL.BARREL_ISOH__S00,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/barrel_isoh_sil.bundle",
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
                                            IDDL.SILENCER_ISOH
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.87,
                },
                fleaPriceRoubles: 30000,
                parentId: this.DBitems[IDDL.BARREL_SCARL__10]._parent,
                handbookPriceRoubles: 25000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Hemlock .300 BLK barrel for suppressor",
                        "shortName": "Suppr. .300",
                        "description": "Short barrel for ISO Hemlock in .300 BLK to mount proprietary Cipher-121 suppressor."
                    },
                    "ch": {
                        "name": "ISO Hemlock .300 BLK 消声器枪管",
                        "shortName": "消声器 .300",
                        "description": ".300 BLK口径ISO Hemlock的短枪管，用于安装专用Cipher-121消声器。"
                    }
                },
                copySlot: false,
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 30000
                    }
                ]
            },
            handguard_isoh_def: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_ISOH__DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/handguard_isoh_def.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.mount_000,
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
                            "_name": mod_slot_1.mod_slot.mount_001,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_side
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.mount_002,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_side
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.mount_003,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_bt
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
                        ...List_barrel_exs,
                        ...List_barrel_long
                    ],
                    Weight: 0.30,
                    Ergonomics: 8,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 28000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Forge Tac ISO Hemlock handguard",
                        "shortName": "F.T.",
                        "description": "Handguard for ISO manufactured by Forge Tac."
                    },
                    "ch": {
                        "name": "Forge Tac ISO Hemlock 护木",
                        "shortName": "F.T.",
                        "description": "Forge Tac生产的ISO Hemlock护木。"
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
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.scope
                    }
                ]
            },
            handguard_isoh_hvy: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_ISOH__HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/handguard_isoh_hvy.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.mount_000,
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
                            "_name": mod_slot_1.mod_slot.mount_001,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_side
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.mount_002,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_side
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.mount_003,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_bt
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
                        ...List_barrel_exs,
                        ...List_barrel_short
                    ],
                    Weight: 0.53,
                    Ergonomics: 10,
                    Recoil: -1,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 38000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 30000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "SA Fielder-T50 ISO Hemlock handguard",
                        "shortName": "Fielder-T50",
                        "description": "Handguard for ISO manufactured by Singuard Arms System."
                    },
                    "ch": {
                        "name": "SA Fielder-T50 ISO Hemlock 护木",
                        "shortName": "Fielder-T50",
                        "description": "Singuard Arms System生产的ISO Hemlock护木。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 36000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.scope
                    }
                ]
            },
            handguard_isoh_long: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_ISOH_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/handguard_isoh_long.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        ...List_barrel_short,
                        ...List_barrel_exs
                    ],
                    Weight: 0.598,
                    Ergonomics: 7,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 14000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Cronen LR-30/56 ISO Hemlock handguard",
                        "shortName": "LR-30/56",
                        "description": "Handguard for ISO manufactured by Cronen."
                    },
                    "ch": {
                        "name": "Cronen LR-30/56 ISO Hemlock 护木",
                        "shortName": "LR-30/56",
                        "description": "Cronen生产的LR-30/56 ISO Hemlock护木。"
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
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.scope
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.MOUNT_MLOK_25,
                        newSlotName: mod_slot_1.mod_slot.tactical_000,
                        tgtSlotName: mod_slot_1.mod_slot.tactical
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
                ]
            },
            handguard_isoh_pstl: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_ISOH_PSTL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/handguard_isoh_pstl.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        ...List_barrel_short,
                        ...List_barrel_long
                    ],
                    Ergonomics: 8,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Weight: 0.202
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Cronen RCQ-7 ISO Hemlock handguard",
                        "shortName": "RCQ-7",
                        "description": "Handguard for ISO manufactured by Cronen."
                    },
                    "ch": {
                        "name": "Cronen RCQ-7 ISO Hemlock 护木",
                        "shortName": "RCQ-7",
                        "description": "Cronen生产的RCQ-7 ISO Hemlock护木。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 6000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
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
                ]
            },
            handguard_isoh_shrt: {
                itemTplToClone: IDDL.HANDGUARD_HK416_DEF,
                newId: IDDL.HANDGUARD_ISOH_SHRT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/handguard_isoh_shrt.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.mount_001,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_side
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.mount_002,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_mount_side
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
                        ...List_barrel_exs,
                        ...List_barrel_long
                    ],
                    Weight: 0.39,
                    Ergonomics: 6,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DEF]._parent,
                handbookPriceRoubles: 9000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "EXF ISO Hemlock handguard",
                        "shortName": "EXF",
                        "description": "Handguard for ISO Hemlock manufactured by Expedite Firearms."
                    },
                    "ch": {
                        "name": "EXF ISO Hemlock 护木",
                        "shortName": "EXF",
                        "description": "Expedite Firearms生产的ISO Hemlock护木。"
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
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.scope
                    },
                    {
                        id: IDDL.HANDGUARD_HK416_DEF,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.MOUNT_MLOK_25,
                        newSlotName: mod_slot_1.mod_slot.tactical_000,
                        tgtSlotName: mod_slot_1.mod_slot.tactical
                    }
                ]
            },
            mount_isoh_def_side: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_ISOH__DEF_SIDE,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mount_isoh_side_def.bundle",
                        "rcid": ""
                    },
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "F.T. ISO Hemlock handguard side rail",
                        "shortName": "F.T. side",
                        "description": "Side rail for ISO Hemlock."
                    },
                    "ch": {
                        "name": "F.T. ISO Hemlock 护木侧导轨",
                        "shortName": "F.T. side",
                        "description": "ISO Hemlock的侧导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ]
            },
            mount_isoh_hvy_side: {
                itemTplToClone: IDDL.MOUNT_ISOH__DEF_SIDE,
                newId: IDDL.MOUNT_ISOH__HVY_SIDE,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mount_isoh_side_hvy.bundle",
                        "rcid": ""
                    },
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "Fielder-T50 ISO Hemlock handguard side rail",
                        "shortName": "T50 side",
                        "description": "Side rail for ISO Hemlock."
                    },
                    "ch": {
                        "name": "Fielder-T50 ISO Hemlock 护木侧导轨",
                        "shortName": "T50 side",
                        "description": "ISO Hemlock的侧导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ]
            },
            mount_isoh_shrt_side: {
                itemTplToClone: IDDL.MOUNT_ISOH__DEF_SIDE,
                newId: IDDL.MOUNT_ISOH_SHRT_SIDE,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mount_isoh_side_shrt.bundle",
                        "rcid": ""
                    },
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "EXF ISO Hemlock handguard side rail",
                        "shortName": "EXF side",
                        "description": "Side rail for ISO Hemlock."
                    },
                    "ch": {
                        "name": "EXF ISO Hemlock 护木侧导轨",
                        "shortName": "EXF side",
                        "description": "ISO Hemlock的侧导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ]
            },
            mount_isoh_def_fg: {
                itemTplToClone: IDDL.MOUNT_MLOK_41,
                newId: IDDL.MOUNT_ISOH__DEF_FG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mount_isoh_fg_def.bundle",
                        "rcid": ""
                    },
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "F.T. ISO Hemlock handguard foregrip rail",
                        "shortName": "F.T. fg",
                        "description": "Foregrip rail for ISO Hemlock."
                    },
                    "ch": {
                        "name": "F.T. ISO Hemlock 护木前握把导轨",
                        "shortName": "F.T. fg",
                        "description": "ISO Hemlock的前握把导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ]
            },
            mount_isoh_hvy_fg: {
                itemTplToClone: IDDL.MOUNT_ISOH__DEF_FG,
                newId: IDDL.MOUNT_ISOH__HVY_FG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mount_isoh_fg_hvy.bundle",
                        "rcid": ""
                    },
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "Fielder-T50 ISO Hemlock handguard foregrip rail",
                        "shortName": "T50 fg",
                        "description": "Foregrip rail for ISO Hemlock."
                    },
                    "ch": {
                        "name": "Fielder-T50 ISO Hemlock 护木前握把导轨",
                        "shortName": "T50 fg",
                        "description": "ISO Hemlock的前握把导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ]
            },
            mount_isoh_def_bt: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_ISOH__DEF_BT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mount_isoh_bt_def.bundle",
                        "rcid": ""
                    },
                    Weight: 0.03
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "F.T. ISO Hemlock handguard bottom rail",
                        "shortName": "F.T. bottom",
                        "description": "Side rail for ISO Hemlock."
                    },
                    "ch": {
                        "name": "F.T. ISO Hemlock 护木下导轨",
                        "shortName": "F.T. bottom",
                        "description": "ISO Hemlock的下导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ]
            },
            mount_isoh_hvy_bt: {
                itemTplToClone: IDDL.MOUNT_ISOH__DEF_BT,
                newId: IDDL.MOUNT_ISOH__HVY_BT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mount_isoh_bt_hvy.bundle",
                        "rcid": ""
                    },
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "Fielder-T50 ISO Hemlock handguard bottom rail",
                        "shortName": "T50 bottom",
                        "description": "Side rail for ISO Hemlock."
                    },
                    "ch": {
                        "name": "Fielder-T50 ISO Hemlock 护木下导轨",
                        "shortName": "T50 bottom",
                        "description": "ISO Hemlock的下导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ]
            },
            stock_adaptor: {
                itemTplToClone: "6197b229af1f5202c57a9bea",
                newId: IDDL.STOCK_ISOH_ADPT,
                overrideProperties: {
                    "Weight": 0.14,
                    "Prefab": {
                        "path": "assets/isoh/mods/stock_isoh_rail.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Ergonomics": -1
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems["6197b229af1f5202c57a9bea"]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock stock rail adaptor",
                        "shortName": "Hemlock rail adaptor",
                        "description": "Stock rail adaptor for ISO Hemlock."
                    },
                    "ch": {
                        "name": "ISO Hemlock 枪托导轨转接器",
                        "shortName": "Hemlock 转接器",
                        "description": "ISO Hemlock的枪托导轨转接器。"
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
                        id: IDDL.WEAPON_SIG__MPX,
                        newSlotName: mod_slot_1.mod_slot.stock
                    }
                ]
            },
            stock_fixed: {
                itemTplToClone: IDDL.STOCK_SIG_EARLY,
                newId: IDDL.STOCK_ISOH__DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/stock_all_isoh.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.35,
                    Ergonomics: 10,
                    Recoil: -22
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.STOCK_SIG_EARLY]._parent,
                handbookPriceRoubles: 10000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock standard stock",
                        "shortName": "Std.",
                        "description": "Standard fixed stock for ISO Hemlock."
                    },
                    "ch": {
                        "name": "ISO Hemlock 标准枪托",
                        "shortName": "标准",
                        "description": "ISO Hemlock的标准固定枪托。"
                    }
                },
                addtoModSlots: true,
                modSlot: [
                    "mod_stock"
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 10000
                    }
                ]
            },
            stock_fixed_lgt: {
                itemTplToClone: IDDL.STOCK_AK74_WOOD,
                newId: IDDL.STOCK_ISOH__LGT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/stock_isoh_lgt.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.34,
                    Ergonomics: 7,
                    Recoil: -25
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 10000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock Res 2 fixed stock",
                        "shortName": "Res 2",
                        "description": "Res 2 fixed stock for ISO Hemlock."
                    },
                    "ch": {
                        "name": "ISO Hemlock Res 2 固定枪托",
                        "shortName": "Res 2",
                        "description": "ISO Hemlock Res 2 固定枪托。"
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
            stock_fixed_hvy: {
                itemTplToClone: IDDL.STOCK_AK74_WOOD,
                newId: IDDL.STOCK_ISOH__HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/stock_isoh_hvy.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.67,
                    Ergonomics: 10,
                    Recoil: -30
                },
                fleaPriceRoubles: 38000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 32000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock Mace 600 stock",
                        "shortName": "Mace 600",
                        "description": "Mace 600 ergonomical stock for ISO Hemlock."
                    },
                    "ch": {
                        "name": "ISO Hemlock Mace 600枪托",
                        "shortName": "Mace 600",
                        "description": "ISO Hemlock Mace 600 人机工程学枪托。"
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
            stock_fixed_skel: {
                itemTplToClone: IDDL.STOCK_MP7A2,
                newId: IDDL.STOCK_ISOH_SKEL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/stock_isoh_skel.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 8,
                    Recoil: -20,
                    IsAnimated: false
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.STOCK_MP7A2]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock retractable stock",
                        "shortName": "ISO Hemlock retractable",
                        "description": "Retractable stock for ISO Hemlock."
                    },
                    "ch": {
                        "name": "ISO Hemlock 伸缩枪托",
                        "shortName": "ISO Hemlock 伸缩",
                        "description": "ISO Hemlock的伸缩枪托。"
                    }
                },
                addtoTraders: false
            },
            pg_isoh_def: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISOH_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/pistolgrip_isoh.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 6,
                    Weight: 0.08
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "AR-15 Sakin pistol grip",
                        "shortName": "Sakin",
                        "description": "Pistol grip for AR-15 platform manufactured by Sakin Arms."
                    },
                    "ch": {
                        "name": "Sakin AR-15手枪式握把",
                        "shortName": "Sakin",
                        "description": "Sakin Arms生产的AR-15平台手枪式握把。"
                    }
                },
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.pistol_grip
                ],
                addtoTraders: false
            },
            pg_isoh_ass: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISOH_ASS,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/pistolgrip_isoh_ass.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 10,
                    Weight: 0.081
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "AR-15 Sakin ZX pistol grip",
                        "shortName": "Sakin ZX",
                        "description": "ZX pistol grip for AR-15 platform manufactured by Sakin Arms."
                    },
                    "ch": {
                        "name": "Sakin ZX AR-15手枪式握把",
                        "shortName": "Sakin ZX",
                        "description": "Sakin Arms生产的AR-15平台ZX手枪式握把。"
                    }
                },
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.pistol_grip
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 6000
                    }
                ]
            },
            pg_isoh_skel: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISOH_SKE,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/pistolgrip_isoh_skel.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 7,
                    Weight: 0.06
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "AR-15 Phantom pistol grip",
                        "shortName": "Phantom",
                        "description": "Phantom pistol grip for AR-15 platform."
                    },
                    "ch": {
                        "name": "Phantom AR-15手枪式握把",
                        "shortName": "Phantom",
                        "description": "AR-15平台Phantom手枪式握把。"
                    }
                },
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.pistol_grip
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 7000
                    }
                ]
            },
            pg_isoh_sn: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISOH__SN,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/pistolgrip_isoh_sn.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 15,
                    Weight: 0.107
                },
                fleaPriceRoubles: 65000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 22200,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "AR-15 CP90 pistol grip",
                        "shortName": "CP90",
                        "description": "CP90 pistol grip for AR-15 platform."
                    },
                    "ch": {
                        "name": "CP90 AR-15手枪式握把",
                        "shortName": "CP90",
                        "description": "AR-15平台CP90手枪式握把。"
                    }
                },
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.pistol_grip
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 31000
                    }
                ]
            },
            pg_isoh_tac: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISOH_TAC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/pistolgrip_isoh_tac.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 12,
                    Weight: 0.08
                },
                fleaPriceRoubles: 19000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 12000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "AR-15 XTEN pistol grip",
                        "shortName": "XTEN",
                        "description": "Pistol grip for AR-15 platform manufactured by XTEN."
                    },
                    "ch": {
                        "name": "XTEN AR-15手枪式握把",
                        "shortName": "XTEN",
                        "description": "XTEN生产的AR-15平台手枪式握把。"
                    }
                },
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.pistol_grip
                ],
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 16000
                    }
                ]
            },
            sight_rear: {
                itemTplToClone: IDDL.REAR_SIGHT_MAGPUL,
                newId: IDDL.REAR_SIGHT_ISOH,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/sight_rear_all_isoh.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.REAR_SIGHT_MAGPUL]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "ISO Hemlock foldable rear sight",
                        "shortName": "Hemlock",
                        "description": "Foldable rear sight for ISO Hemlock."
                    },
                    "ch": {
                        "name": "ISO Hemlock 折叠照门",
                        "shortName": "Hemlock",
                        "description": "ISO Hemlock 的可折叠照门。"
                    }
                },
                addtoTraders: false,
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    "mod_sight_rear"
                ]
            },
            sight_front: {
                itemTplToClone: IDDL.FRONT_SIGHT_MAGPUL,
                newId: IDDL.FRONT_SIGHT_ISOH,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/sight_front_all_isoh.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.FRONT_SIGHT_MAGPUL]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "ISO Hemlock foldable front sight",
                        "shortName": "Hemlock",
                        "description": "Foldable front sight for ISO Hemlock."
                    },
                    "ch": {
                        "name": "ISO Hemlock 折叠准星",
                        "shortName": "Hemlock",
                        "description": "ISO Hemlock 的可折叠准星。"
                    }
                },
                addtoTraders: false,
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    "mod_sight_front"
                ]
            },
            muzzle_isoh: {
                itemTplToClone: IDDL.MUZZLE_MDR556,
                newId: IDDL.MUZZLE_ISOH,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/muzzle_isoh.bundle",
                        "rcid": ""
                    },
                    Weight: 0.116,
                    Slots: []
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.MUZZLE_MDR556]._parent,
                handbookPriceRoubles: 8000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "SA AR-15 muzzle device",
                        "shortName": "SA",
                        "description": "AR-15 muzzle device manufactured by Singuard Arms System."
                    },
                    "ch": {
                        "name": "SA AR-15 枪口装置",
                        "shortName": "SA",
                        "description": "Singuard Arms System 生产的AR-15枪口装置。"
                    }
                },
                addtoTraders: false,
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.muzzle
                ]
            },
            muzzle_isoh_hvy: {
                itemTplToClone: IDDL.MUZZLE_MDR556,
                newId: IDDL.MUZZLE_ISOH_HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/muzzle_isoh_hvy.bundle",
                        "rcid": ""
                    },
                    Weight: 0.103,
                    Slots: [],
                    Recoil: -8
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.MUZZLE_MDR556]._parent,
                handbookPriceRoubles: 8000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "XTEN AR-15 muzzle device",
                        "shortName": "XTEN",
                        "description": "AR-15 muzzle device manufactured by XTEN."
                    },
                    "ch": {
                        "name": "XTEN AR-15 枪口装置",
                        "shortName": "XTEN",
                        "description": "XTEN 生产的AR-15枪口装置。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 10000
                    }
                ],
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.muzzle
                ]
            },
            muzzle_isoh_shrt: {
                itemTplToClone: IDDL.MUZZLE_MDR762,
                newId: IDDL.MUZZLE_ISOH_SHRT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/muzzle_isoh_shrt.bundle",
                        "rcid": ""
                    },
                    Weight: 0.12,
                    Slots: []
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.MUZZLE_MDR556]._parent,
                handbookPriceRoubles: 8000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "ISO Hemlock muzzle device",
                        "shortName": "Hemlock",
                        "description": "Muzzle device manufactured for ISO Hemlock."
                    },
                    "ch": {
                        "name": "ISO Hemlock枪口装置",
                        "shortName": "Hemlock",
                        "description": "Muzzle device manufactured for ISO Hemlock."
                    }
                },
                addtoTraders: false,
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.muzzle
                ]
            },
            silencer_isoh: {
                itemTplToClone: IDDL.SILENCER_QDC,
                newId: IDDL.SILENCER_ISOH,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/silencer_isoh_sil.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Ergonomics": -19,
                    "Recoil": -13,
                    "Loudness": -40,
                    "Velocity": 0.88,
                },
                fleaPriceRoubles: 16000,
                parentId: this.DBitems[IDDL.SILENCER_QDC]._parent,
                handbookPriceRoubles: 8000,
                handbookParentId: handbookCategory_1.handbookCategory.Suppressors,
                locales: {
                    "en": {
                        "name": "EXF Cipher-121 ISO Hemlock suppressor",
                        "shortName": "Cipher-121",
                        "description": "Cipher-121 suppressor for ISO Hemlock."
                    },
                    "ch": {
                        "name": "EXF Cipher-121 ISO Hemlock 消声器",
                        "shortName": "Cipher-121",
                        "description": "ISO Hemlock 的Cipher-121消声器。"
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
            mag_iso_mag: {
                itemTplToClone: IDDL.MAG_PMAG_30_556_W,
                newId: IDDL.MAG_ISOH____MAG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mag_stanag_iso.bundle",
                        "rcid": ""
                    },
                    // magAnimationIndex:3,
                    // Ergonomics: 0
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.MAG_PMAG_30_556_W]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Magazines,
                locales: {
                    "en": {
                        "name": "5.56x45 Demo 30 30-round magazine",
                        "shortName": "Demo 30",
                        "description": "A 30-round polymer magazine with an observation slot for faster capacity checking manufactured by Demo Weapon System."
                    },
                    "ch": {
                        "name": "Demo 30 5.56x45 STANAG 30发弹匣",
                        "shortName": "Demo 30",
                        "description": "Demo Weapon System 制造的30发STANAG聚合物弹匣。"
                    }
                },
                copySlot: false,
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 6000
                    }
                ],
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.magazine
                ]
            },
            mag_iso_mag_300: {
                itemTplToClone: IDDL.MAG_PMAG_30_556,
                newId: IDDL.MAG_ISOH_MAG300,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/isoh/mods/mag_stanag_iso_300.bundle",
                        "rcid": ""
                    },
                    // magAnimationIndex:3,
                    // Ergonomics: 0
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.MAG_PMAG_30_556_W]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Magazines,
                locales: {
                    "en": {
                        "name": ".300 BLK 30-round magazine",
                        "shortName": "BLK",
                        "description": "A 30-round polymer magazine marked .300 BLK. Of course nothing stops you from loading 5.56x45 in it."
                    },
                    "ch": {
                        "name": ".300 BLK STANAG 30发弹匣",
                        "shortName": "BLK",
                        "description": "一个标有.300 BLK的30发聚合物弹匣。当然，没什么能阻止你往里面装5.56x45。"
                    }
                },
                copySlot: false,
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 5000
                    }
                ],
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.magazine
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
            // this.logger.log(x, "cyan");
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
        MMA.traderGenerateAssortFromPreset("220020F15FF15F0000000000", 100000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset("220020F15EF15E0000000000", 100000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset("220020F15DF15D0000000000", 100000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        ModifyInfos[IDDL.WEAPON_ISO_HEML] = {
            ItemId: IDDL.WEAPON_ISO_HEML,
            WeaponCaliberCloneFromId: "itself"
        };
        ModifyInfos[IDDL.WEAPON_ISO_H308] = {
            ItemId: IDDL.WEAPON_ISO_H308,
            WeaponCaliberCloneFromId: "itself"
        };
        ModifyInfos[IDDL.WEAPON_ISO_H300] = {
            ItemId: IDDL.WEAPON_ISO_H300,
            WeaponCaliberCloneFromId: "itself"
        };
        ModifyInfos[IDDL.MAG_ISOH____MAG] = {
            ItemId: IDDL.MAG_ISOH____MAG,
            MagCloneCaliberTable: "itself"
        };
        ModifyInfos[IDDL.MAG_ISOH_MAG300] = {
            ItemId: IDDL.MAG_ISOH_MAG300,
            MagCloneCaliberTable: "itself"
        };
        MMA.loadModifierObj(ModifyInfos);
    }
}
module.exports = Mass_ISOH;
//# sourceMappingURL=Mass_ISOH.js.map