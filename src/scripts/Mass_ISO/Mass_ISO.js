"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const assortConfig = require("../../../config/Mass_ISO/assortConfig.json");
const handbookCategory_1 = require("../../enum/handbookCategory");
const IDDL = {
    WEAPON_ISO_GEN1: "020020F150F1500000000000",
    WEAPON_ISO_GEN2: "020020F151F1510000000000",
    WEAPON_ISO___45: "020020F152F1520000000000",
    WEAPON_ISO_G_45: "020020F153F1530000000000",
    WEAPON_ISO_GENG: "020020F154F1540000000000",
    WEAPON_STM9: "60339954d62c9b14ed777c06",
    WEAPON_VECTOR_45: "5fb64bc92b1b027b1f50bcf2",
    WEAPON_MP9: "5e00903ae9dc277128008b87",
    BARREL_VECTOR_45_5IN: "5fb65363d1409e5ca04b54f5",
    BARREL_ISO__HVY: "04BA4BF150F15A4B00000000",
    BARREL_ISO_MINI: "04B04BF150F1500000000000",
    BARREL_ISO_LONG: "04BB4BF150F15B4B00000000",
    BARREL_ISO__SIL: "04BC4BF150F15C4B00000000",
    BARREL_ISO__S45: "04BE4BF150F15E4B00000000",
    BARREL_I45__HVY: "04BA4BF152F25A4B00000000",
    BARREL_I45_MINI: "04B04BF152F2500000000000",
    BARREL_I45_LONG: "04BB4BF152F25B4B00000000",
    BARREL_I45__SIL: "04BC4BF152F25C4B00000000",
    BARREL_I45__S45: "04BE4BF152F25E4B00000000",
    BARREL_STM9_10: "603372b4da11d6478d5a07ff",
    REC_ISO_GEN1: "042042F150F1500000000000",
    REC_ISO_GEN2: "042042F151F1510000000000",
    REC_ISO___45: "042042F152F1520000000000",
    REC_STM9: "602e63fb6335467b0c5ac94d",
    STOCK_ISO_GEN1: "047047F150F1500000000000",
    STOCK_ISO_GEN2: "047047F151F1510000000000",
    STOCK_ISO_LGT: "047A47F151F151A470000000",
    STOCK_ISO_HVY: "047B47F151F151B470000000",
    STOCK_ISO_ADPT: "047C47F151F151C470000000",
    STOCK_MP7A2: "5bd704e7209c4d00d7167c31",
    STOCK_AK74_WOOD: "5649b1c04bdc2d16268b457c",
    PG_ISO_GGEN1: "043043F150F1504300000000",
    PG_ISO_GGEN2: "043043F151F1514300000000",
    PG_ISO_GPASS: "043A43F150F15A4300000000",
    PG_ISO_GPTAC: "043B43F150F15B4300000000",
    PG_ISO_GPERG: "043C43F150F15C4300000000",
    PG_AR15_MAGPUL_MOE: "55802f5d4bdc2dac148b458f",
    MOUNT_VECTOR_BOTTOM: "5fbb976df9986c4cff3fe5f2",
    MOUNT_MLOK_25: "5b7be47f5acfc400170e2dd2",
    MOUNT_ISO_MINI: "048048F150F1504800000000",
    MOUNT_ISO_HVY: "048A48F150F15A4800000000",
    MOUNT_ISO_SIL: "048C48F150F15C4800000000",
    REAR_SIGHT_MAGPUL: "5bc09a18d4351e003562b68e",
    FRONT_SIGHT_ISO: "04CF4CF150F15F4C00000000",
    FRONT_SIGHT_ISO_GEN2: "04CF4CF151F15F4C00000000",
    FRONT_SIGHT_MAGPUL: "5bc09a30d4351e00367fb7c8",
    REAR_SIGHT_ISO: "04CB4CF150F15B4C00000000",
    REAR_SIGHT_ISO_GEN2: "04CB4CF151F15B4C00000000",
    HANDGUARD_ISO_HVY: "041041F150F1504100000000",
    HANDGUARD_ISO_LNG: "041B41F150F15B4100000000",
    HANDGUARD_ISO_SIL: "041C41F150F15C4100000000",
    HANDGUARD_ISO_F45: "041D41F150F15D4100000000",
    HANDGUARD_ISO_S45: "041E41F150F15E4100000000",
    HANDGUARD_VECTOR_MK5: "5fbb978207e8a97d1f0902d3",
    HANDGUARD_HK416_DF: "5bb20de5d4351e0035629e59",
    MUZZLE_ISO: "04B84BF150F1584B00000000",
    MUZZLE_ISO_45: "04B84BF152F2584B00000000",
    MUZZLE_VECTOR_9X19: "5fbbc3324e8a554c40648348",
    SILENCER_ISO: "04B94BF150F1594B00000000",
    SILENCER_S45: "04B74BF150F1574B00000000",
    SILENCER_MP5: "5926d33d86f77410de68ebc0",
    MAGAZINE_PMAG_21: "5a718da68dc32e000d46d264",
    MAGAZINE_G17_17: "5a718b548dc32e000d46d262",
    MAG_ISO__MAG: "02F02FF152F1520000000000",
    MAG_ISO_SMAG: "02F12FF152F1521110000000",
    MAG_ISO_DRUM: "02F22FF152F1522220000000",
    MAG_G45_13: "5fb651b52b1b027b1f50bcff",
    MAG_MP9_15: "5de8e8dafd6b4e6e2276dc32",
    MOUNT_OPTTIC: "046046BBA97BBA9746000000",
    MOUNT_FORE: "047047BBA97BBA9747000000",
    MOUNT_MLOK_41: "5b7be4895acfc400170e2dd5",
    MOUNT_M700: "5bfebc530db834001d23eb65"
};
const List_stocks = [
    IDDL.STOCK_ISO_HVY,
    IDDL.STOCK_ISO_LGT,
    IDDL.STOCK_ISO_ADPT
];
const List_barrels = [
    IDDL.BARREL_ISO__HVY,
    IDDL.BARREL_ISO_MINI,
    IDDL.BARREL_ISO_LONG,
    IDDL.BARREL_ISO__SIL,
    // IDDL.BARREL_ISO__S45
];
const List_barrels_45 = [
    IDDL.BARREL_I45__HVY,
    IDDL.BARREL_I45_MINI,
    IDDL.BARREL_I45_LONG,
    // IDDL.BARREL_I45__SIL,
    IDDL.BARREL_I45__S45
];
const List_handguards = [
    IDDL.HANDGUARD_ISO_HVY,
    IDDL.HANDGUARD_ISO_LNG,
    IDDL.HANDGUARD_ISO_SIL,
    IDDL.HANDGUARD_ISO_F45,
    IDDL.HANDGUARD_ISO_S45
];
const cpntName = "Mass_ISO";
class Mass_ISO extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    data;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
        const List_foregrips = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDDL.MOUNT_VECTOR_BOTTOM)._props.filters[0].Filter);
        const List_muzzle = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDDL.BARREL_STM9_10)._props.filters[0].Filter);
        const List_muzzle_45 = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDDL.BARREL_VECTOR_45_5IN)._props.filters[0].Filter);
        const List_grips = [
            IDDL.PG_ISO_GGEN1,
            IDDL.PG_ISO_GGEN2,
            IDDL.PG_ISO_GPASS,
            IDDL.PG_ISO_GPTAC,
            IDDL.PG_ISO_GPERG,
            // ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot.pistol_grip,IDDL.WEAPON_STM9)._props.filters[0].Filter)
        ];
        this.data = {
            weapon_iso: {
                itemTplToClone: IDDL.WEAPON_STM9,
                newId: IDDL.WEAPON_ISO_GEN1,
                overrideProperties: {
                    Prefab: {
                        path: "assets/iso/weapon_iso_9x19_container.bundle",
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
                                            IDDL.REC_ISO_GEN1
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
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_stocks,
                                            IDDL.STOCK_ISO_GEN1
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
                    Width: 1,
                    Foldable: true,
                    FoldedSlot: mod_slot_1.mod_slot.stock_000,
                    "weapFireType": [
                        "single",
                        "fullauto"
                    ],
                    bFirerate: 850,
                    Ergonomics: 59,
                    Weight: 0.66,
                    "RecoilReturnSpeedHandRotation": 3.1,
                    "RecoilDampingHandRotation": 0.84,
                    "RecoilCamera": 0.0367,
                    RecoilForceUp: 52,
                    RecoilForceBack: 285,
                    "RecolDispersion": 8,
                    "BaseMalfunctionChance": 0.1771,
                    "HeatFactorByShot": 1.84,
                    defMagType: IDDL.MAGAZINE_G17_17
                },
                fleaPriceRoubles: 60000,
                parentId: this.DBitems[IDDL.WEAPON_STM9]._parent,
                handbookPriceRoubles: 40000,
                handbookParentId: handbookCategory_1.handbookCategory.SMGs,
                locales: {
                    "en": {
                        "name": "ZLR ISO 9G 9x19 submachine gun",
                        "shortName": "ZLR ISO 9G",
                        "description": "A submachine gun based on B&T APC9 K PRO G which chambered in 9x19mm cartridge. Model name G means magazines are interchangeable with 9x19mm Glock pistols."
                    },
                    "ch": {
                        "name": "ZLR ISO 9G 9x19 冲锋枪",
                        "shortName": "ZLR ISO 9G",
                        "description": "以B&T APC9 K PRO G 为原型设计的冲锋枪，发射9x19毫米弹药。型号G代表可与9x19mm Glock 手枪互换弹匣。"
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_STM9,
                        newSlotName: mod_slot_1.mod_slot.magazine
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "ISO",
                        Templates: [
                            IDDL.WEAPON_ISO_GEN1
                        ],
                        Level2: 150,
                        Level3: 300
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_ISO_GEN1,
                        "_id": "220020F150F1500000000000",
                        "_items": [
                            {
                                "_id": "220020F150F1500000000060",
                                "_tpl": IDDL.WEAPON_ISO_GEN1
                            },
                            {
                                "_id": "220020F150F1500000000063",
                                "_tpl": IDDL.MAGAZINE_G17_17,
                                "parentId": "220020F150F1500000000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020F150F1500000000048",
                                "_tpl": IDDL.REC_ISO_GEN1,
                                "parentId": "220020F150F1500000000060",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "220020F150F1500000000042",
                                "_tpl": IDDL.REAR_SIGHT_ISO,
                                "parentId": "220020F150F1500000000048",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "220020F150F1500000000041",
                                "_tpl": IDDL.FRONT_SIGHT_ISO,
                                "parentId": "220020F150F1500000000048",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "220020F150F1500000000049",
                                "_tpl": IDDL.BARREL_ISO_MINI,
                                "parentId": "220020F150F1500000000048",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020F150F1500000000050",
                                "_tpl": IDDL.MUZZLE_ISO,
                                "parentId": "220020F150F1500000000049",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020F150F15000000000e7",
                                "_tpl": IDDL.STOCK_ISO_GEN1,
                                "parentId": "220020F150F1500000000060",
                                "slotId": mod_slot_1.mod_slot.stock_000
                            },
                            {
                                "_id": "220020F150F15000000000e8",
                                "_tpl": IDDL.PG_ISO_GGEN1,
                                "parentId": "220020F150F1500000000060",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "ZLR ISO Default",
                        "_parent": "220020F150F1500000000060",
                        "_type": "Preset"
                    }
                ]
            },
            weapon_iso_gen2: {
                itemTplToClone: IDDL.WEAPON_ISO_GEN1,
                newId: IDDL.WEAPON_ISO_GEN2,
                overrideProperties: {
                    Prefab: {
                        path: "assets/iso/weapon_iso_gen2_9x19_container.bundle",
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
                                            IDDL.REC_ISO_GEN2
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
                                            ...List_stocks,
                                            IDDL.STOCK_ISO_GEN2
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
                    Foldable: true,
                    FoldedSlot: mod_slot_1.mod_slot.stock,
                    bFirerate: 1000,
                    Ergonomics: 58
                },
                fleaPriceRoubles: 65000,
                parentId: this.DBitems[IDDL.WEAPON_STM9]._parent,
                handbookPriceRoubles: 40000,
                handbookParentId: handbookCategory_1.handbookCategory.SMGs,
                locales: {
                    "en": {
                        "name": "Expedite Firearms ISO 9G 9x19 submachine gun",
                        "shortName": "EXF ISO 9G",
                        "description": "Gen. 2 ISO submachine gun made by Expedite Firearms with foldable non-reciprocating charging handle and shortened upper receiver. Model name G means magazines are interchangeable with 9x19mm Glock pistols."
                    },
                    "ch": {
                        "name": "Expedite Firearms ISO 9G 9x19 冲锋枪",
                        "shortName": "EXF ISO 9G",
                        "description": "Expedite Firearms 生产的第二代ISO冲锋枪，具有折叠式非随动拉机柄和缩短了的上机匣。型号G代表可与9x19mm Glock 手枪互换弹匣。"
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_STM9,
                        newSlotName: mod_slot_1.mod_slot.magazine
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "ISO",
                        Templates: [
                            IDDL.WEAPON_ISO_GEN2
                        ]
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_ISO_GEN2,
                        "_id": "220020F151F1510000000000",
                        "_items": [
                            {
                                "_id": "220020F151F1510000000060",
                                "_tpl": IDDL.WEAPON_ISO_GEN2
                            },
                            {
                                "_id": "220020F151F1510000000063",
                                "_tpl": IDDL.MAGAZINE_G17_17,
                                "parentId": "220020F151F1510000000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020F151F1510000000048",
                                "_tpl": IDDL.REC_ISO_GEN2,
                                "parentId": "220020F151F1510000000060",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "220020F151F1510000000042",
                                "_tpl": IDDL.REAR_SIGHT_ISO_GEN2,
                                "parentId": "220020F151F1510000000048",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "220020F151F1510000000041",
                                "_tpl": IDDL.FRONT_SIGHT_ISO_GEN2,
                                "parentId": "220020F151F1510000000048",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "220020F151F1510000000049",
                                "_tpl": IDDL.BARREL_ISO_MINI,
                                "parentId": "220020F151F1510000000048",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020F151F1510000000050",
                                "_tpl": IDDL.MUZZLE_ISO,
                                "parentId": "220020F151F1510000000049",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020F151F15100000000e7",
                                "_tpl": IDDL.STOCK_ISO_GEN2,
                                "parentId": "220020F151F1510000000060",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F151F15100000000e8",
                                "_tpl": IDDL.PG_ISO_GGEN2,
                                "parentId": "220020F151F1510000000060",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "EXF ISO Default",
                        "_parent": "220020F151F1510000000060",
                        "_type": "Preset"
                    }
                ]
            },
            weapon_iso_NG_gen2: {
                itemTplToClone: IDDL.WEAPON_ISO_GEN1,
                newId: IDDL.WEAPON_ISO_GENG,
                overrideProperties: {
                    Prefab: {
                        path: "assets/iso/weapon_iso_ng_gen2_9x19_container.bundle",
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
                                            IDDL.REC_ISO_GEN2
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
                                            ...List_stocks,
                                            IDDL.STOCK_ISO_GEN2
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
                    Foldable: true,
                    FoldedSlot: mod_slot_1.mod_slot.stock,
                    bFirerate: 1000,
                    Ergonomics: 55,
                    Weight: 0.69
                },
                fleaPriceRoubles: 65000,
                parentId: this.DBitems[IDDL.WEAPON_STM9]._parent,
                handbookPriceRoubles: 40000,
                handbookParentId: handbookCategory_1.handbookCategory.SMGs,
                locales: {
                    "en": {
                        "name": "Expedite Firearms ISO 9 9x19 submachine gun",
                        "shortName": "EXF ISO 9",
                        "description": "Gen. 2 ISO submachine gun made by Expedite Firearms with foldable non-reciprocating charging handle and shortened upper receiver. Magazines are interchangeable with B&T MP9."
                    },
                    "ch": {
                        "name": "Expedite Firearms ISO 9 9x19 冲锋枪",
                        "shortName": "EXF ISO 9",
                        "description": "Expedite Firearms 生产的第二代ISO冲锋枪，具有折叠式非随动拉机柄和缩短了的上机匣，可与B&T MP9互换弹匣。"
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_MP9,
                        newSlotName: mod_slot_1.mod_slot.magazine
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "ISO",
                        Templates: [
                            IDDL.WEAPON_ISO_GENG
                        ]
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_ISO_GENG,
                        "_id": "220020F154F1540000000000",
                        "_items": [
                            {
                                "_id": "220020F154F1540000000060",
                                "_tpl": IDDL.WEAPON_ISO_GENG
                            },
                            {
                                "_id": "220020F154F1540000000063",
                                "_tpl": IDDL.MAG_MP9_15,
                                "parentId": "220020F154F1540000000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020F154F1540000000048",
                                "_tpl": IDDL.REC_ISO_GEN2,
                                "parentId": "220020F154F1540000000060",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "220020F154F1540000000042",
                                "_tpl": IDDL.REAR_SIGHT_ISO_GEN2,
                                "parentId": "220020F154F1540000000048",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "220020F154F1540000000041",
                                "_tpl": IDDL.FRONT_SIGHT_ISO_GEN2,
                                "parentId": "220020F154F1540000000048",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "220020F154F1540000000049",
                                "_tpl": IDDL.BARREL_ISO_MINI,
                                "parentId": "220020F154F1540000000048",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020F154F1540000000050",
                                "_tpl": IDDL.MUZZLE_ISO,
                                "parentId": "220020F154F1540000000049",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020F154F15400000000e7",
                                "_tpl": IDDL.STOCK_ISO_GEN2,
                                "parentId": "220020F154F1540000000060",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F154F15400000000e8",
                                "_tpl": IDDL.PG_ISO_GGEN2,
                                "parentId": "220020F154F1540000000060",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "EXF ISO Default",
                        "_parent": "220020F154F1540000000060",
                        "_type": "Preset"
                    }
                ]
            },
            weapon_iso_gen2_45: {
                itemTplToClone: IDDL.WEAPON_ISO_GEN1,
                newId: IDDL.WEAPON_ISO___45,
                overrideProperties: {
                    Prefab: {
                        path: "assets/iso/weapon_iso_1143x23_container.bundle",
                        rcid: ""
                    },
                    Weight: 0.75,
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
                                            IDDL.REC_ISO___45
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
                                            ...List_stocks,
                                            IDDL.STOCK_ISO_GEN2
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
                        },
                        {
                            "_name": mod_slot_1.mod_slot.magazine,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MAG_ISO__MAG,
                                            IDDL.MAG_ISO_SMAG,
                                            IDDL.MAG_ISO_DRUM
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Foldable: true,
                    FoldedSlot: mod_slot_1.mod_slot.stock,
                    bFirerate: 900,
                    Ergonomics: 55,
                    defMagType: IDDL.MAG_ISO__MAG,
                    defAmmo: "5e81f423763d9f754677bf2e",
                    "ammoCaliber": "Caliber1143x23ACP",
                    "Chambers": [
                        {
                            "_name": "patron_in_weapon",
                            "_id": "5a351711c4a282000b1521a5",
                            "_parent": "5a351711c4a282000b1521a4",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": this.JsonUtil.clone(this.DBitems[IDDL.MAG_G45_13]._props.Cartridges[0]._props.filters[0].Filter)
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d4af244bdc2d962f8b4571"
                        }
                    ],
                    "RecoilReturnSpeedHandRotation": 3.1,
                    "RecoilDampingHandRotation": 0.84,
                    "RecoilCamera": 0.045,
                    RecoilForceUp: 64,
                    RecoilForceBack: 318,
                    "RecolDispersion": 9,
                    "BaseMalfunctionChance": 0.1771,
                    "HeatFactorByShot": 1.99
                },
                fleaPriceRoubles: 65000,
                parentId: this.DBitems[IDDL.WEAPON_STM9]._parent,
                handbookPriceRoubles: 40000,
                handbookParentId: handbookCategory_1.handbookCategory.SMGs,
                locales: {
                    "en": {
                        "name": "Expedite Firearms ISO 45 .45 ACP submachine gun",
                        "shortName": "EXF ISO 45",
                        "description": "Gen. 2 ISO submachine gun made by Expedite Firearms with ambidextrous non-reciprocating charging handle and shortened upper receiver."
                    },
                    "ch": {
                        "name": "Expedite Firearms ISO 45 .45 ACP 冲锋枪",
                        "shortName": "EXF ISO 45",
                        "description": "Expedite Firearms 生产的第二代ISO冲锋枪，具有双面非随动拉机柄和缩短了的上机匣。"
                    }
                },
                addtoTraders: false,
                copySlot: false,
                masteries: true,
                masterySections: [
                    {
                        Name: "ISO",
                        Templates: [
                            IDDL.WEAPON_ISO___45
                        ]
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_ISO___45,
                        "_id": "220020F152F1520000000000",
                        "_items": [
                            {
                                "_id": "220020F152F1520000000060",
                                "_tpl": IDDL.WEAPON_ISO___45
                            },
                            {
                                "_id": "220020F152F1520000000063",
                                "_tpl": IDDL.MAG_ISO_SMAG,
                                "parentId": "220020F152F1520000000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020F152F1520000000048",
                                "_tpl": IDDL.REC_ISO___45,
                                "parentId": "220020F152F1520000000060",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "220020F152F1520000000042",
                                "_tpl": IDDL.REAR_SIGHT_ISO_GEN2,
                                "parentId": "220020F152F1520000000048",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "220020F152F1520000000041",
                                "_tpl": IDDL.FRONT_SIGHT_ISO_GEN2,
                                "parentId": "220020F152F1520000000048",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "220020F152F1520000000049",
                                "_tpl": IDDL.BARREL_I45_MINI,
                                "parentId": "220020F152F1520000000048",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020F152F1520000000050",
                                "_tpl": IDDL.MUZZLE_ISO_45,
                                "parentId": "220020F152F1520000000049",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020F152F15200000000e7",
                                "_tpl": IDDL.STOCK_ISO_GEN2,
                                "parentId": "220020F152F1520000000060",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F152F15200000000e8",
                                "_tpl": IDDL.PG_ISO_GGEN2,
                                "parentId": "220020F152F1520000000060",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "EXF ISO 45 Default",
                        "_parent": "220020F152F1520000000060",
                        "_type": "Preset"
                    }
                ]
            },
            weapon_iso_G_gen2_45: {
                itemTplToClone: IDDL.WEAPON_ISO___45,
                newId: IDDL.WEAPON_ISO_G_45,
                overrideProperties: {
                    Prefab: {
                        path: "assets/iso/weapon_iso_g_1143x23_container.bundle",
                        rcid: ""
                    },
                    Weight: 0.72,
                    Slots: [],
                    Foldable: true,
                    FoldedSlot: mod_slot_1.mod_slot.stock,
                    defMagType: IDDL.MAG_G45_13,
                    Ergonomics: 58
                },
                fleaPriceRoubles: 65000,
                parentId: this.DBitems[IDDL.WEAPON_STM9]._parent,
                handbookPriceRoubles: 40000,
                handbookParentId: handbookCategory_1.handbookCategory.SMGs,
                locales: {
                    "en": {
                        "name": "Expedite Firearms ISO 45G .45 ACP submachine gun",
                        "shortName": "EXF ISO 45G",
                        "description": "Gen. 2 ISO submachine gun made by Expedite Firearms with ambidextrous non-reciprocating charging handle and shortened upper receiver. Model name G means magazines are interchangeable with .45 ACP Glock pistols."
                    },
                    "ch": {
                        "name": "Expedite Firearms ISO 45G .45 ACP 冲锋枪",
                        "shortName": "EXF ISO 45G",
                        "description": "Expedite Firearms 生产的第二代ISO冲锋枪，具有双面非随动拉机柄和缩短了的上机匣。型号G代表可与.45 ACP Glock 手枪互换弹匣。"
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_ISO___45,
                        newSlotName: mod_slot_1.mod_slot.reciever
                    },
                    {
                        id: IDDL.WEAPON_ISO___45,
                        newSlotName: mod_slot_1.mod_slot.stock
                    },
                    {
                        id: IDDL.WEAPON_ISO___45,
                        newSlotName: mod_slot_1.mod_slot.pistol_grip
                    },
                    {
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.magazine
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "ISO",
                        Templates: [
                            IDDL.WEAPON_ISO_G_45
                        ]
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_ISO_G_45,
                        "_id": "220020F153F1530000000000",
                        "_items": [
                            {
                                "_id": "220020F153F1530000000060",
                                "_tpl": IDDL.WEAPON_ISO_G_45
                            },
                            {
                                "_id": "220020F153F1530000000063",
                                "_tpl": IDDL.MAG_G45_13,
                                "parentId": "220020F153F1530000000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020F153F1530000000048",
                                "_tpl": IDDL.REC_ISO___45,
                                "parentId": "220020F153F1530000000060",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "220020F153F1530000000042",
                                "_tpl": IDDL.REAR_SIGHT_ISO_GEN2,
                                "parentId": "220020F153F1530000000048",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "220020F153F1530000000041",
                                "_tpl": IDDL.FRONT_SIGHT_ISO_GEN2,
                                "parentId": "220020F153F1530000000048",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "220020F153F1530000000049",
                                "_tpl": IDDL.BARREL_I45_MINI,
                                "parentId": "220020F153F1530000000048",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "220020F153F1530000000050",
                                "_tpl": IDDL.MUZZLE_ISO_45,
                                "parentId": "220020F153F1530000000049",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "220020F153F15300000000e7",
                                "_tpl": IDDL.STOCK_ISO_GEN2,
                                "parentId": "220020F153F1530000000060",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "220020F153F15300000000e8",
                                "_tpl": IDDL.PG_ISO_GGEN2,
                                "parentId": "220020F153F1530000000060",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "EXF ISO 45 Default",
                        "_parent": "220020F153F1530000000060",
                        "_type": "Preset"
                    }
                ]
            },
            rec_iso: {
                itemTplToClone: IDDL.REC_STM9,
                newId: IDDL.REC_ISO_GEN1,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/reciever_iso.bundle",
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
                                            ...List_barrels
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
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
                                            IDDL.MOUNT_ISO_MINI
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
                                            IDDL.MOUNT_ISO_MINI
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
                                            ...List_foregrips,
                                            ...List_handguards
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    ExtraSizeLeft: 1,
                    ExtraSizeForceAdd: false,
                    Weight: 0.58
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.REC_STM9]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "ZLR ISO upper receiver",
                        "shortName": "ZLR ISO",
                        "description": "Upper receiver for ZLR ISO."
                    },
                    "ch": {
                        "name": "ZLR ISO 上机匣",
                        "shortName": "ZLR ISO",
                        "description": "ZLR ISO 的上机匣。"
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.REC_STM9,
                        newSlotName: mod_slot_1.mod_slot.scope
                    },
                    {
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.sight_rear
                    },
                    {
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    }
                ]
            },
            rec_iso_gen2: {
                itemTplToClone: IDDL.REC_ISO_GEN1,
                newId: IDDL.REC_ISO_GEN2,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/reciever_iso_gen2.bundle",
                        "rcid": ""
                    },
                    Weight: 0.57
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.REC_STM9]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "EXF ISO9 upper receiver",
                        "shortName": "EXF ISO9",
                        "description": "Upper receiver for EXF ISO9."
                    },
                    "ch": {
                        "name": "EXF ISO9 上机匣",
                        "shortName": "EXF ISO9",
                        "description": "EXF ISO9 的上机匣。"
                    }
                },
                addtoTraders: false
            },
            rec_iso_45: {
                itemTplToClone: IDDL.REC_ISO_GEN1,
                newId: IDDL.REC_ISO___45,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/reciever_iso_45.bundle",
                        "rcid": ""
                    },
                    Weight: 0.57,
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
                                            ...List_barrels_45
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ]
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.REC_STM9]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "EXF ISO45 upper receiver",
                        "shortName": "EXF ISO45",
                        "description": "Upper receiver for EXF ISO45."
                    },
                    "ch": {
                        "name": "EXF ISO45 上机匣",
                        "shortName": "EXF ISO45",
                        "description": "EXF ISO45 的上机匣。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.REC_ISO_GEN1,
                        newSlotName: mod_slot_1.mod_slot.mount_001
                    },
                    {
                        id: IDDL.REC_ISO_GEN1,
                        newSlotName: mod_slot_1.mod_slot.mount_002
                    },
                    {
                        id: IDDL.REC_ISO_GEN1,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.REC_STM9,
                        newSlotName: mod_slot_1.mod_slot.scope
                    },
                    {
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.sight_rear
                    },
                    {
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    }
                ],
                addtoTraders: false
            },
            barrel_iso_hvy: {
                itemTplToClone: IDDL.BARREL_STM9_10,
                newId: IDDL.BARREL_ISO__HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/barrel_iso_hvy.bundle",
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
                                            ...List_muzzle,
                                            IDDL.MUZZLE_ISO
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.35,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Velocity: -1.5,
                    CenterOfImpact: 0.165,
                    DurabilityBurnModificator: 0.78,
                    HeatFactor: 1,
                    CoolFactor: 1,
                    DeviationCurve: 2.3,
                    DeviationMax: 10,
                    Recoil: 0,
                    Ergonomics: -6
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.BARREL_STM9_10]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO9 185mm barrel",
                        "shortName": "ISO9 185",
                        "description": "185mm barrel for ISO9."
                    },
                    "ch": {
                        "name": "ISO9 185毫米枪管",
                        "shortName": "ISO9 185",
                        "description": "ISO9 的185毫米枪管。"
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
            barrel_iso_hvy_45: {
                itemTplToClone: IDDL.BARREL_STM9_10,
                newId: IDDL.BARREL_I45__HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/barrel_iso_f45.bundle",
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
                                            ...List_muzzle_45,
                                            IDDL.MUZZLE_ISO_45
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.375,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Velocity: -1.71,
                    CenterOfImpact: 0.168,
                    DurabilityBurnModificator: 0.78,
                    HeatFactor: 1,
                    CoolFactor: 1,
                    DeviationCurve: 2.3,
                    DeviationMax: 10,
                    Recoil: 0,
                    Ergonomics: -6
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.BARREL_STM9_10]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO45 185mm barrel",
                        "shortName": "ISO45 185",
                        "description": "185mm barrel for ISO45."
                    },
                    "ch": {
                        "name": "ISO45 185毫米枪管",
                        "shortName": "ISO45 185",
                        "description": "ISO45 的185毫米枪管。"
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
            barrel_iso_long: {
                itemTplToClone: IDDL.BARREL_STM9_10,
                newId: IDDL.BARREL_ISO_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/barrel_iso_long.bundle",
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
                                            ...List_muzzle,
                                            IDDL.MUZZLE_ISO
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.4,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Velocity: -0.3,
                    CenterOfImpact: 0.15,
                    DurabilityBurnModificator: 0.81,
                    HeatFactor: 0.97,
                    CoolFactor: 1.03,
                    DeviationCurve: 2.12,
                    DeviationMax: 12,
                    Recoil: -4,
                    Ergonomics: -10
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.BARREL_STM9_10]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO9 225mm barrel",
                        "shortName": "ISO9 225",
                        "description": "225mm barrel for ISO9."
                    },
                    "ch": {
                        "name": "ISO9 225毫米枪管",
                        "shortName": "ISO9 225",
                        "description": "ISO9 的225毫米枪管。"
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
            barrel_iso_long_45: {
                itemTplToClone: IDDL.BARREL_STM9_10,
                newId: IDDL.BARREL_I45_LONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/barrel_iso_long.bundle",
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
                                            ...List_muzzle_45,
                                            IDDL.MUZZLE_ISO_45
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.425,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Velocity: -0.335,
                    CenterOfImpact: 0.153,
                    DurabilityBurnModificator: 0.81,
                    HeatFactor: 0.97,
                    CoolFactor: 1.03,
                    DeviationCurve: 2.12,
                    DeviationMax: 12,
                    Recoil: -4,
                    Ergonomics: -10
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.BARREL_STM9_10]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO45 225mm barrel",
                        "shortName": "ISO45 225",
                        "description": "225mm barrel for ISO45."
                    },
                    "ch": {
                        "name": "ISO45 225毫米枪管",
                        "shortName": "ISO45 225",
                        "description": "ISO45 的225毫米枪管。"
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
            barrel_iso_mini: {
                itemTplToClone: IDDL.BARREL_STM9_10,
                newId: IDDL.BARREL_ISO_MINI,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/barrel_iso_mini.bundle",
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
                                            ...List_muzzle,
                                            IDDL.MUZZLE_ISO
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.165,
                    ExtraSizeLeft: 0,
                    Velocity: -4,
                    CenterOfImpact: 0.19,
                    DurabilityBurnModificator: 0.75,
                    HeatFactor: 1.05,
                    CoolFactor: 0.95,
                    DeviationCurve: 2.7,
                    DeviationMax: 8,
                    Recoil: 2,
                    Ergonomics: -3
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_STM9_10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO9 standard barrel",
                        "shortName": "ISO9",
                        "description": "Standard barrel for ISO9."
                    },
                    "ch": {
                        "name": "ISO9 标准枪管",
                        "shortName": "ISO9",
                        "description": "ISO9 的标准枪管。"
                    }
                },
                addtoTraders: false
            },
            barrel_iso_mini_45: {
                itemTplToClone: IDDL.BARREL_STM9_10,
                newId: IDDL.BARREL_I45_MINI,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/barrel_iso_mini_45.bundle",
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
                                            ...List_muzzle_45,
                                            IDDL.MUZZLE_ISO_45
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.175,
                    ExtraSizeLeft: 0,
                    Velocity: -4.4,
                    CenterOfImpact: 0.2,
                    DurabilityBurnModificator: 0.75,
                    HeatFactor: 1.05,
                    CoolFactor: 0.95,
                    DeviationCurve: 2.7,
                    DeviationMax: 8,
                    Recoil: 2,
                    Ergonomics: -3
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_STM9_10]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO45 standard barrel",
                        "shortName": "ISO45",
                        "description": "Standard barrel for ISO45."
                    },
                    "ch": {
                        "name": "ISO45 标准枪管",
                        "shortName": "ISO45",
                        "description": "ISO45 的标准枪管。"
                    }
                },
                addtoTraders: false
            },
            barrel_iso_sil: {
                itemTplToClone: IDDL.BARREL_STM9_10,
                newId: IDDL.BARREL_ISO__SIL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/barrel_iso_sil.bundle",
                        "rcid": ""
                    },
                    Slots: [{
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.SILENCER_ISO
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }],
                    Weight: 0.06,
                    ExtraSizeLeft: 0,
                    Width: 1,
                    Velocity: -16,
                    CenterOfImpact: 0.185,
                    DurabilityBurnModificator: 0.85,
                    HeatFactor: 1.04,
                    CoolFactor: 0.93,
                    DeviationCurve: 2.7,
                    DeviationMax: 8,
                    Recoil: -2,
                    Ergonomics: -3,
                    IsSilencer: true
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.BARREL_STM9_10]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO Axeblade integrated suppressor barrel",
                        "shortName": "Axeblade",
                        "description": "Barrel for ISO to mount integrated suppressor."
                    },
                    "ch": {
                        "name": "ISO Axeblade 一体式消声器枪管",
                        "shortName": "Axeblade",
                        "description": "用于在ISO上安装一体式消声器的枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 2000
                    }
                ]
            },
            barrel_iso_s45: {
                itemTplToClone: IDDL.BARREL_STM9_10,
                newId: IDDL.BARREL_I45__S45,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/barrel_iso_sil.bundle",
                        "rcid": ""
                    },
                    Slots: [{
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.SILENCER_S45
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }],
                    Weight: 0.06,
                    ExtraSizeLeft: 0,
                    Width: 1,
                    ConflictingItems: [
                        IDDL.HANDGUARD_ISO_HVY,
                        IDDL.HANDGUARD_ISO_LNG,
                        IDDL.HANDGUARD_ISO_F45,
                        IDDL.HANDGUARD_ISO_SIL
                    ],
                    Velocity: -16,
                    CenterOfImpact: 0.15,
                    DurabilityBurnModificator: 0.85,
                    HeatFactor: 1.04,
                    CoolFactor: 0.93,
                    DeviationCurve: 2.7,
                    DeviationMax: 8,
                    Recoil: -2,
                    Ergonomics: -3,
                    IsSilencer: true
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.BARREL_STM9_10]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "ISO XLB-S integrated suppressor barrel",
                        "shortName": "XLB-S",
                        "description": "Barrel for ISO to mount integrated suppressor."
                    },
                    "ch": {
                        "name": "ISO XLB-S 一体式消声器枪管",
                        "shortName": "XLB-S",
                        "description": "用于在ISO上安装一体式消声器的枪管。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 2000
                    }
                ]
            },
            handguard_iso_hvy: {
                itemTplToClone: IDDL.HANDGUARD_VECTOR_MK5,
                newId: IDDL.HANDGUARD_ISO_HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/handguard_iso_hvy.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.foregrip,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MOUNT_ISO_HVY
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
                        IDDL.BARREL_ISO_MINI,
                        IDDL.BARREL_ISO__SIL,
                        IDDL.BARREL_I45_MINI
                    ],
                    Weight: 0.223,
                    Ergonomics: 1,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DF]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "ISO Ex Raptor-V2 handguard",
                        "shortName": "Ex Raptor-V2",
                        "description": "Ex Raptor-V2 handguard for ISO."
                    },
                    "ch": {
                        "name": "ISO Ex Raptor-V2 护木",
                        "shortName": "Ex Raptor-V2",
                        "description": "ISO的Ex Raptor-V2护木。"
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
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    }
                ]
            },
            handguard_iso_f45: {
                itemTplToClone: IDDL.HANDGUARD_VECTOR_MK5,
                newId: IDDL.HANDGUARD_ISO_F45,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/handguard_iso_f45.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        IDDL.BARREL_ISO_MINI,
                        IDDL.BARREL_ISO__SIL,
                        IDDL.BARREL_I45_MINI
                    ],
                    Weight: 0.29,
                    Ergonomics: 0,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DF]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "ISO45 handguard",
                        "shortName": "ISO45",
                        "description": "Extented handguard for ISO45."
                    },
                    "ch": {
                        "name": "ISO45 护木",
                        "shortName": "ISO45",
                        "description": "ISO45的延长护木。"
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
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    },
                    {
                        id: IDDL.MOUNT_MLOK_41,
                        tgtSlotName: mod_slot_1.mod_slot.foregrip,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    }
                ]
            },
            handguard_iso_long: {
                itemTplToClone: IDDL.HANDGUARD_VECTOR_MK5,
                newId: IDDL.HANDGUARD_ISO_LNG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/handguard_iso_long.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [
                        IDDL.BARREL_ISO_MINI,
                        IDDL.BARREL_ISO__SIL,
                        IDDL.BARREL_ISO__HVY,
                        IDDL.BARREL_I45_MINI,
                        IDDL.BARREL_I45__HVY
                    ],
                    Weight: 0.288,
                    Ergonomics: 1,
                    Recoil: -1,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DF]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "ISO PTX Trainer handguard",
                        "shortName": "PTX Trainer",
                        "description": "PTX Trainer handguard for ISO."
                    },
                    "ch": {
                        "name": "ISO PTX Trainer 护木",
                        "shortName": "PTX Trainer",
                        "description": "ISO的PTX Trainer护木。"
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
                        id: IDDL.MOUNT_VECTOR_BOTTOM,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        newSlotName: mod_slot_1.mod_slot.tactical_000
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_003
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: "mod_tactical_004"
                    },
                    {
                        id: IDDL.WEAPON_VECTOR_45,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical
                    }
                ]
            },
            handguard_iso_sil: {
                itemTplToClone: IDDL.HANDGUARD_VECTOR_MK5,
                newId: IDDL.HANDGUARD_ISO_SIL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/handguard_iso_sil.bundle",
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
                                            IDDL.MOUNT_ISO_SIL
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
                                            IDDL.MOUNT_ISO_SIL
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
                        IDDL.BARREL_ISO_MINI,
                        IDDL.BARREL_I45_MINI
                    ],
                    Weight: 0.232,
                    Ergonomics: 4,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DF]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "ISO Axeblade handguard",
                        "shortName": "Axeblade",
                        "description": "Axeblade handguard for ISO."
                    },
                    "ch": {
                        "name": "ISO Axeblade 护木",
                        "shortName": "Axeblade",
                        "description": "ISO的Axeblade护木。"
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
                        id: IDDL.MOUNT_VECTOR_BOTTOM,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    }
                ]
            },
            handguard_iso_s45: {
                itemTplToClone: IDDL.HANDGUARD_VECTOR_MK5,
                newId: IDDL.HANDGUARD_ISO_S45,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/handguard_iso_s45.bundle",
                        "rcid": ""
                    },
                    Width: 2,
                    Slots: [],
                    ConflictingItems: [
                        IDDL.BARREL_ISO_MINI,
                        IDDL.BARREL_I45_MINI,
                        IDDL.BARREL_ISO__SIL,
                        // IDDL.BARREL_I45__SIL,
                        IDDL.BARREL_ISO__HVY,
                        IDDL.BARREL_I45__HVY,
                        IDDL.BARREL_ISO_LONG,
                        IDDL.BARREL_I45_LONG
                    ],
                    Weight: 0.452,
                    Ergonomics: 0,
                    Recoil: -2,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.HANDGUARD_HK416_DF]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "ISO XLB-S handguard",
                        "shortName": "XLB-S",
                        "description": "XLB-S handguard for ISO."
                    },
                    "ch": {
                        "name": "ISO XLB-S 护木",
                        "shortName": "XLB-S",
                        "description": "ISO的XLB-S护木。"
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
                        id: IDDL.WEAPON_VECTOR_45,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    },
                    {
                        id: IDDL.MOUNT_MLOK_25,
                        tgtSlotName: mod_slot_1.mod_slot.tactical,
                        newSlotName: mod_slot_1.mod_slot.tactical
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_001
                    },
                    {
                        id: IDDL.HANDGUARD_VECTOR_MK5,
                        tgtSlotName: mod_slot_1.mod_slot.tactical_000,
                        newSlotName: mod_slot_1.mod_slot.tactical_002
                    },
                    {
                        id: IDDL.MOUNT_MLOK_41,
                        tgtSlotName: mod_slot_1.mod_slot.foregrip,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: "622b3d5cf9cfc87d675d2de9",
                        newSlotName: mod_slot_1.mod_slot.mount,
                        tgtSlotName: mod_slot_1.mod_slot.mount
                    }
                ]
            },
            mount_iso_mini: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_ISO_MINI,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/mount_iso_mini.bundle",
                        "rcid": ""
                    },
                    ConflictingItems: [
                        ...List_handguards
                    ]
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "ISO side rail",
                        "shortName": "ISO side",
                        "description": "Side rail for ISO."
                    },
                    "ch": {
                        "name": "ISO 侧导轨",
                        "shortName": "ISO 侧",
                        "description": "ISO的侧导轨。"
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
            mount_iso_hvy: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_ISO_HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/mount_iso_hvy.bundle",
                        "rcid": ""
                    },
                    Slots: []
                },
                fleaPriceRoubles: 100,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "ISO Ex Raptor-V2 bottom rail",
                        "shortName": "Ex Raptor-V2",
                        "description": "Bottom rail for ISO Ex Raptor-V2 handguard."
                    },
                    "ch": {
                        "name": "ISO Ex Raptor-V2 底导轨",
                        "shortName": "Ex Raptor-V2",
                        "description": "ISO Ex Raptor-V2护木的底导轨。"
                    }
                },
                addtoTraders: true,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.MOUNT_VECTOR_BOTTOM,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    }
                ],
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ]
            },
            mount_iso_sil: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_ISO_SIL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/mount_iso_sil.bundle",
                        "rcid": ""
                    },
                    Weight: 0.085,
                    Ergonomics: -1
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "ISO Axeblade side rail",
                        "shortName": "Axeblade",
                        "description": "Side rail for ISO Axeblade handguard."
                    },
                    "ch": {
                        "name": "ISO Axeblade 侧导轨",
                        "shortName": "Axeblade",
                        "description": "ISO Axeblade护木的侧导轨。"
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
            stock_gen1_default: {
                itemTplToClone: IDDL.STOCK_MP7A2,
                newId: IDDL.STOCK_ISO_GEN1,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/stock_iso_gen1_std.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 8,
                    Recoil: -20
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.STOCK_MP7A2]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ZLR ISO retractable stock",
                        "shortName": "ZLR retractable",
                        "description": "Retractable stock for ZLR ISO."
                    },
                    "ch": {
                        "name": "ZLR ISO 伸缩枪托",
                        "shortName": "ZLR 伸缩",
                        "description": "ZLR ISO的伸缩枪托。"
                    }
                },
                addtoTraders: false
            },
            stock_gen2_default: {
                itemTplToClone: IDDL.STOCK_ISO_GEN1,
                newId: IDDL.STOCK_ISO_GEN2,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/stock_iso_gen2_std.bundle",
                        "rcid": ""
                    },
                    Weight: 0.195
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.STOCK_MP7A2]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "EXF ISO retractable stock",
                        "shortName": "EXF retractable",
                        "description": "Retractable stock for EXF ISO."
                    },
                    "ch": {
                        "name": "EXF ISO 伸缩枪托",
                        "shortName": "EXF 伸缩",
                        "description": "EXF ISO的伸缩枪托。"
                    }
                },
                addtoTraders: false
            },
            stock_fixed_lgt: {
                itemTplToClone: IDDL.STOCK_AK74_WOOD,
                newId: IDDL.STOCK_ISO_LGT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/stock_iso_fixed_light.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.23,
                    Ergonomics: 6,
                    Recoil: -22
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 10000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ISO Res 2 fixed stock",
                        "shortName": "Res 2",
                        "description": "Res 2 fixed stock for ISO."
                    },
                    "ch": {
                        "name": "ISO Res 2 固定枪托",
                        "shortName": "Res 2",
                        "description": "ISO Res 2 固定枪托。"
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
                newId: IDDL.STOCK_ISO_HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/stock_iso_fixed_hvy.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    BlocksFolding: true,
                    BlocksCollapsible: true,
                    Weight: 0.6,
                    Ergonomics: 10,
                    Recoil: -26
                },
                fleaPriceRoubles: 28000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 22000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ISO Mace 650 stock",
                        "shortName": "Mace 650",
                        "description": "Mace 650 ergonomical stock for ISO."
                    },
                    "ch": {
                        "name": "ISO Mace 650枪托",
                        "shortName": "Mace 650",
                        "description": "ISO Mace 650 人机工程学枪托。"
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
            stock_adaptor: {
                itemTplToClone: "5649be884bdc2d79388b4577",
                newId: IDDL.STOCK_ISO_ADPT,
                overrideProperties: {
                    "Weight": 0.359,
                    "Prefab": {
                        "path": "assets/iso/mods/stock_iso_adapter.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "Recoil": -1,
                    "Ergonomics": -1
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.STOCK_AK74_WOOD]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "ISO stock buffer tube",
                        "shortName": "ISO buff. tube",
                        "description": "ISO buffer tube for ISO."
                    },
                    "ch": {
                        "name": "ISO 枪托缓冲管",
                        "shortName": "ISO 缓冲管",
                        "description": "ISO的缓冲管。"
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
            pg_gen1_default: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISO_GGEN1,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/pistolgrip_iso_default_gen1.bundle",
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
                        "name": "ZLR ISO pistol grip",
                        "shortName": "ZLR",
                        "description": "Standard pistol grip for ZLE ISO."
                    },
                    "ch": {
                        "name": "ZLR ISO 手枪握把",
                        "shortName": "ZLR",
                        "description": "ZLR ISO 的标准手枪握把。"
                    }
                },
                addtoTraders: false
            },
            pg_gen2_default: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISO_GGEN2,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/pistolgrip_iso_default_gen2.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 6,
                    Weight: 0.078
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "EXF ISO pistol grip",
                        "shortName": "EXF",
                        "description": "Standard pistol grip for ISO."
                    },
                    "ch": {
                        "name": "EXF ISO 手枪握把",
                        "shortName": "EXF",
                        "description": "EXF ISO 的标准手枪握把。"
                    }
                },
                addtoTraders: false
            },
            pg_gen2_gripass: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISO_GPASS,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/pistolgrip_iso_gripass.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 10,
                    Weight: 0.1
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "ISO A30 Stout pistol grip",
                        "shortName": "Stout",
                        "description": "A30 Stout pistol grip for ISO."
                    },
                    "ch": {
                        "name": "ISO A30 Stout手枪握把",
                        "shortName": "Stout",
                        "description": "ISO A30 Stout手枪握把。"
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
            pg_gen2_griptac: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISO_GPTAC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/pistolgrip_iso_griptac.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 8,
                    Weight: 0.055
                },
                fleaPriceRoubles: 10000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "ISO Exp Shear pistol grip",
                        "shortName": "Exp Shear",
                        "description": "Exp Shear pistol grip for ISO."
                    },
                    "ch": {
                        "name": "ISO Exp Shear手枪握把",
                        "shortName": "Exp Shear",
                        "description": "ISO 的Exp Shear手枪握把。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 13000
                    }
                ]
            },
            pg_gen2_gripergo: {
                itemTplToClone: IDDL.PG_AR15_MAGPUL_MOE,
                newId: IDDL.PG_ISO_GPERG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/pistolgrip_iso_griergo.bundle",
                        "rcid": ""
                    },
                    Ergonomics: 11,
                    Weight: 0.07
                },
                fleaPriceRoubles: 20000,
                parentId: this.DBitems[IDDL.PG_AR15_MAGPUL_MOE]._parent,
                handbookPriceRoubles: 15000,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "ISO Stalwart GX pistol grip",
                        "shortName": "Stalwart GX",
                        "description": "Stalwart GX pistol grip for ISO."
                    },
                    "ch": {
                        "name": "ISO Stalwart GX手枪握把",
                        "shortName": "Stalwart GX",
                        "description": "ISO 的Stalwart GX手枪握把。"
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
            sight_rear: {
                itemTplToClone: IDDL.REAR_SIGHT_MAGPUL,
                newId: IDDL.REAR_SIGHT_ISO,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/sight_rear_all_iso.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.REAR_SIGHT_MAGPUL]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "ZLR ISO foldable rear sight",
                        "shortName": "ZLR ISO",
                        "description": "Foldable rear sight for ISO."
                    },
                    "ch": {
                        "name": "ZLR ISO 折叠照门",
                        "shortName": "ZLR ISO",
                        "description": "ISO 的可折叠照门。"
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
                newId: IDDL.FRONT_SIGHT_ISO,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/sight_front_all_iso.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.FRONT_SIGHT_MAGPUL]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "ZLR ISO foldable front sight",
                        "shortName": "ZLR ISO",
                        "description": "Foldable front sight for ISO."
                    },
                    "ch": {
                        "name": "ZLR ISO 折叠准星",
                        "shortName": "ZLR ISO",
                        "description": "ISO 的可折叠准星。"
                    }
                },
                addtoTraders: false,
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    "mod_sight_front"
                ]
            },
            sight_rear_gen2: {
                itemTplToClone: IDDL.REAR_SIGHT_MAGPUL,
                newId: IDDL.REAR_SIGHT_ISO_GEN2,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/sight_rear_all_iso_gen2.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.REAR_SIGHT_MAGPUL]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "EXF ISO foldable rear sight",
                        "shortName": "EFX ISO",
                        "description": "Foldable rear sight for ISO."
                    },
                    "ch": {
                        "name": "EXF ISO 折叠照门",
                        "shortName": "EXF ISO",
                        "description": "ISO 的可折叠照门。"
                    }
                },
                addtoTraders: false,
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    "mod_sight_rear"
                ]
            },
            sight_front_gen2: {
                itemTplToClone: IDDL.FRONT_SIGHT_MAGPUL,
                newId: IDDL.FRONT_SIGHT_ISO_GEN2,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/sight_front_all_iso_gen2.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.FRONT_SIGHT_MAGPUL]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "EXF ISO foldable front sight",
                        "shortName": "EXF ISO",
                        "description": "Foldable front sight for ISO."
                    },
                    "ch": {
                        "name": "EXF ISO 折叠准星",
                        "shortName": "EXF ISO",
                        "description": "ISO 的可折叠准星。"
                    }
                },
                addtoTraders: false,
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    "mod_sight_front"
                ]
            },
            muzzle_iso: {
                itemTplToClone: IDDL.MUZZLE_VECTOR_9X19,
                newId: IDDL.MUZZLE_ISO,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/muzzle_iso_9x19.bundle",
                        "rcid": ""
                    },
                    Weight: 0.07,
                    Slots: []
                },
                fleaPriceRoubles: 1200,
                parentId: this.DBitems[IDDL.MUZZLE_VECTOR_9X19]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "ISO9 muzzle device",
                        "shortName": "ISO9",
                        "description": "Standard muzzle device for ISO."
                    },
                    "ch": {
                        "name": "ISO9 枪口装置",
                        "shortName": "ISO9",
                        "description": "ISO9 的原装枪口装置。"
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            muzzle_iso_45: {
                itemTplToClone: IDDL.MUZZLE_VECTOR_9X19,
                newId: IDDL.MUZZLE_ISO_45,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/muzzle_iso_9x19.bundle",
                        "rcid": ""
                    },
                    Weight: 0.07,
                    Slots: []
                },
                fleaPriceRoubles: 1200,
                parentId: this.DBitems[IDDL.MUZZLE_VECTOR_9X19]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "ISO45 muzzle device",
                        "shortName": "ISO45",
                        "description": "Standard muzzle device for ISO45."
                    },
                    "ch": {
                        "name": "ISO45 枪口装置",
                        "shortName": "ISO45",
                        "description": "ISO45 的原装枪口装置。"
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            silencer_iso: {
                itemTplToClone: IDDL.SILENCER_MP5,
                newId: IDDL.SILENCER_ISO,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/silencer_iso_sil.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Ergonomics: -7,
                    "ExtraSizeLeft": 2,
                    "ExtraSizeForceAdd": false
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.SILENCER_MP5]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Suppressors,
                locales: {
                    "en": {
                        "name": "ISO Axeblade integrated suppressor",
                        "shortName": "Axeblade integrated",
                        "description": "Axeblade integrated suppressor for ISO."
                    },
                    "ch": {
                        "name": "ISO Axeblade 一体式消声器",
                        "shortName": "Axeblade 一体式",
                        "description": "ISO 的Axeblade一体式消声器。"
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
            silencer_s45: {
                itemTplToClone: IDDL.SILENCER_MP5,
                newId: IDDL.SILENCER_S45,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/silencer_iso_s45.bundle",
                        "rcid": ""
                    },
                    Width: 3,
                    Weight: 0.923,
                    "ExtraSizeLeft": 3,
                    "ExtraSizeForceAdd": false,
                    Slots: [],
                    Ergonomics: -14,
                    Velocity: 6,
                    "Recoil": -23,
                    "Loudness": -62,
                    "HeatFactor": 1.24,
                    "CoolFactor": 1.08
                },
                fleaPriceRoubles: 16000,
                parentId: this.DBitems[IDDL.SILENCER_MP5]._parent,
                handbookPriceRoubles: 16000,
                handbookParentId: handbookCategory_1.handbookCategory.Suppressors,
                locales: {
                    "en": {
                        "name": "ISO XLB-S integrated suppressor",
                        "shortName": "XLB-S integrated",
                        "description": "XLB-S integrated suppressor for ISO."
                    },
                    "ch": {
                        "name": "ISO XLB-S 一体式消声器",
                        "shortName": "XLB-S 一体式",
                        "description": "ISO 的XLB-S一体式消声器。"
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
            mag_iso_mag: {
                itemTplToClone: "5fb651dc85f90547f674b6f4",
                newId: IDDL.MAG_ISO__MAG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/magazine_iso_45acp_mag.bundle",
                        "rcid": ""
                    },
                    magAnimationIndex: 3,
                    Ergonomics: 0
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.MAGAZINE_PMAG_21]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Magazines,
                locales: {
                    "en": {
                        "name": ".45 ACP ISO 30-round magazine",
                        "shortName": "ISO 30",
                        "description": "30-rd magazine for ISO45."
                    },
                    "ch": {
                        "name": "ISO .45 ACP 30发弹匣",
                        "shortName": "ISO 30",
                        "description": "ISO45的30发弹匣。"
                    }
                },
                copySlot: false,
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ]
            },
            mag_iso_smag: {
                itemTplToClone: IDDL.MAG_G45_13,
                newId: IDDL.MAG_ISO_SMAG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/magazine_iso_45acp_smag.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_name": "cartridges",
                            "_id": "5a351711c4a282000b1521a5",
                            "_parent": "5a351711c4a282000b1521a4",
                            "_max_count": 12,
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": this.JsonUtil.clone(this.DBitems[IDDL.MAG_G45_13]._props.Cartridges[0]._props.filters[0].Filter)
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    magAnimationIndex: 0,
                    Ergonomics: 5
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.MAGAZINE_PMAG_21]._parent,
                handbookPriceRoubles: 1500,
                handbookParentId: handbookCategory_1.handbookCategory.Magazines,
                locales: {
                    "en": {
                        "name": ".45 ACP ISO 12-round magazine",
                        "shortName": "ISO 12",
                        "description": "12-rd magazine for ISO45."
                    },
                    "ch": {
                        "name": "ISO .45 ACP 12发弹匣",
                        "shortName": "ISO 12",
                        "description": "ISO45的12发弹匣。"
                    }
                },
                copySlot: false,
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 2000
                    }
                ]
            },
            mag_iso_drum: {
                itemTplToClone: "5a718f958dc32e00094b97e7",
                newId: IDDL.MAG_ISO_DRUM,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/iso/mods/magazine_iso_45acp_drum.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_name": "cartridges",
                            "_id": "5a351711c4a282000b1521a5",
                            "_parent": "5a351711c4a282000b1521a4",
                            "_max_count": 45,
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": this.JsonUtil.clone(this.DBitems[IDDL.MAG_G45_13]._props.Cartridges[0]._props.filters[0].Filter)
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    magAnimationIndex: 0,
                    Ergonomics: -12
                },
                fleaPriceRoubles: 15000,
                parentId: this.DBitems[IDDL.MAGAZINE_PMAG_21]._parent,
                handbookPriceRoubles: 10000,
                handbookParentId: handbookCategory_1.handbookCategory.Magazines,
                locales: {
                    "en": {
                        "name": ".45 ACP ISO 45-round drum magazine",
                        "shortName": "ISO 45",
                        "description": "45-rd drum magazine for ISO45."
                    },
                    "ch": {
                        "name": "ISO .45 ACP 45发弹鼓",
                        "shortName": "ISO 45",
                        "description": "ISO45的45发弹鼓。"
                    }
                },
                copySlot: false,
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 12000
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
                // Determine price and loyalty from assortConfig.json
                const configKey = id;
                const config = assortConfig[configKey];

                const price = config?.price ?? this.data[x].barterScheme[0].count;
                const loyaltyLevel = config?.loyaltyLevel ?? this.data[x].loyallevelitems;

                MMA.traderAddItems(id, price, NTrader_1.NTrader.Default, loyaltyLevel);
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

        MMA.traderGenerateAssortFromPreset("220020F150F1500000000000", assortConfig.preset1.price, NTrader_1.NTrader.Default, assortConfig.preset1.loyaltyLevel, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset("220020F151F1510000000000", assortConfig.preset2.price, NTrader_1.NTrader.Default, assortConfig.preset2.loyaltyLevel, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset("220020F152F1520000000000", assortConfig.preset3.price, NTrader_1.NTrader.Default, assortConfig.preset3.loyaltyLevel, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset("220020F153F1530000000000", assortConfig.preset4.price, NTrader_1.NTrader.Default, assortConfig.preset4.loyaltyLevel, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset("220020F154F1540000000000", assortConfig.preset5.price, NTrader_1.NTrader.Default, assortConfig.preset5.loyaltyLevel, Money_1.Money.ROUBLES);
        ModifyInfos[IDDL.WEAPON_ISO_GEN1] = {
            ItemId: IDDL.WEAPON_ISO_GEN1,
            WeaponCaliberCloneFromId: "itself"
        };
        ModifyInfos[IDDL.WEAPON_ISO_GEN2] = {
            ItemId: IDDL.WEAPON_ISO_GEN2,
            WeaponCaliberCloneFromId: "itself"
        };
        ModifyInfos[IDDL.WEAPON_ISO___45] = {
            ItemId: IDDL.WEAPON_ISO___45,
            WeaponCaliberCloneFromId: "itself"
        };
        ModifyInfos[IDDL.WEAPON_ISO_G_45] = {
            ItemId: IDDL.WEAPON_ISO_G_45,
            WeaponCaliberCloneFromId: "itself"
        };
        ModifyInfos[IDDL.MAG_ISO_SMAG] = {
            ItemId: IDDL.MAG_ISO_SMAG,
            MagCloneCaliberTable: "itself"
        };
        ModifyInfos[IDDL.MAG_ISO_DRUM] = {
            ItemId: IDDL.MAG_ISO_DRUM,
            MagCloneCaliberTable: "itself"
        };
        ModifyInfos[IDDL.MAG_ISO__MAG] = {
            ItemId: IDDL.MAG_ISO__MAG,
            MagCloneCaliberTable: "itself"
        };
        MMA.loadModifierObj(ModifyInfos);
    }
}
module.exports = Mass_ISO;
//# sourceMappingURL=Mass_ISO.js.map