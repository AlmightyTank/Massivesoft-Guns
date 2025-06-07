"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const assortConfig = require("../../../config/Mass_Longbow/assortConfig.json");
const handbookCategory_1 = require("../../enum/handbookCategory");
const IDDL = {
    WEAPON_LONGBOW: "02002010AB10AB0000000000",
    WEAPON_VPO215: "5de652c31b7e3716273428be",
    WEAPON_AK103: "5ac66d2e5acfc43b321d4b53",
    HANDGUARD_DESIGN: "5cf4e3f3d7f00c06595bc7f0",
    HANDGUARD_B10M: "5648b4534bdc2d3d1c8b4580",
    HANDGUARD_LONGBOW_DEF: "04104110AB10AB4100000000",
    HANDGUARD_LONGBOW_SRT: "04114110AB10AB4110000000",
    STOCK_LONGBOW: "04204210AB10AB4200000000",
    STOCK_AK74M: "5ac50c185acfc400163398d4",
    PG_LONGBOW: "04304310AB10AB4300000000",
    PG_AK74: "5649ade84bdc2d1b2b8b4587",
    BARREL_LONGBOW_DEF: "04B04B10AB10AB4B00000000",
    BARREL_LONGBOW_LGTLONG: "04B14B10AB10AB4B10000000",
    BARREL_LONGBOW_SHRT: "04B24B10AB10AB4B20000000",
    BARREL_LONGBOW_SIL: "04B34B10AB10AB4B30000000",
    BARREL_RPK16: "5beec1bd0db834001e6006f3",
    REC_LONGBOW_DEF: "04404410AB10AB4400000000",
    REC_LONGBOW_JAK: "04414410AB10AB4410000000",
    REC_AK74M: "5ac50da15acfc4001718d287",
    REC_B33: "5649af884bdc2d1b2b8b4589",
    REC___SCAR_L: "618405198004cc50514c3594",
    CHARGE_SCARH: "6181688c6c780c1e710c9b04",
    CHARGE_LONGBOW_DEF: "04C04C10AB10AB4C00000000",
    CHARGE_LONGBOW_HVY: "04C14C10AB10AB4C10000000",
    CHARGE_LONGBOW_LGT: "04C24C10AB10AB4C20000000",
    MAG_AK103: "5ac66bea5acfc43b321d4aec",
    SIGHT_LONGBOW_REAR: "04D04D10AB10AB4D00000000",
    SIGHT_LONGBOW_FRONT: "04D14D10AB10AB4D10000000",
    REAR_SIGHT_MAGPUL: "5bc09a18d4351e003562b68e",
    FRONT_SIGHT_MAGPUL: "5bc09a30d4351e00367fb7c8",
    MUZ_LONGBOW: "04504510AB10AB4500000000",
    MUZ_LONGBOW_SIL: "04514510AB10AB4510000000",
    MUZ_AK103: "5ac72e7d5acfc40016339a02",
    MOUNT_LONGBOW: "04604610AB10AB4600000000",
    MOUNT_MLOK_25: "5b7be47f5acfc400170e2dd2",
    MOUNT_MLOK_41: "5b7be4895acfc400170e2dd5",
    HANDGUARD_M_LOK: "6034e3e20ddce744014cb878",
    SIL_SIG_MPX: "58aeac1b86f77457c419f475"
};
const List_Handguards = [
    IDDL.HANDGUARD_LONGBOW_DEF,
    IDDL.HANDGUARD_LONGBOW_SRT
];
const List_Barrels = [
    IDDL.BARREL_LONGBOW_DEF,
    IDDL.BARREL_LONGBOW_LGTLONG,
    IDDL.BARREL_LONGBOW_SHRT,
    IDDL.BARREL_LONGBOW_SIL
];
const List_PGs = [
    IDDL.PG_LONGBOW,
];
const List_Stocks = [
    IDDL.STOCK_LONGBOW,
];
const List_Receiver = [
    IDDL.REC_LONGBOW_DEF,
    IDDL.REC_LONGBOW_JAK
];
const List_Charges = [
    IDDL.CHARGE_LONGBOW_DEF,
    IDDL.CHARGE_LONGBOW_HVY,
    IDDL.CHARGE_LONGBOW_LGT
];
const cpntName = "Mass_Longbow";
class Mass_Longbow extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    data;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
        // var barrel_base_line = this.DBitems[IDDL.BARREL_RPK16]._props
        this.data = {
            weapon_longbow: {
                itemTplToClone: IDDL.WEAPON_VPO215,
                newId: IDDL.WEAPON_LONGBOW,
                overrideProperties: {
                    Prefab: {
                        path: "assets/longbow/weapon_longbow_762x39_container.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.312,
                    "LootExperience": 20,
                    "RepairCost": 172,
                    "RepairSpeed": 5,
                    "ItemSound": "weap_ar",
                    Slots: [
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
                        {
                            "_name": mod_slot_1.mod_slot.reciever,
                            "_id": "5ac66d2e5acfc43b321d4b5a",
                            "_parent": "5ac66d2e5acfc43b321d4b53",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Receiver
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
                            "_id": "5ac66d2e5acfc43b321d4b5a",
                            "_parent": "5ac66d2e5acfc43b321d4b53",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            ...List_Charges
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "ammoCaliber": "Caliber762x39",
                    "OperatingResource": 6100,
                    "RepairComplexity": 0,
                    "bFirerate": 100,
                    "Ergonomics": 57,
                    "Velocity": 1.8,
                    "bEffDist": 650,
                    "bHearDist": 80,
                    "isBoltCatch": true,
                    "defMagType": IDDL.MAG_AK103,
                    "defAmmo": "5656d7c34bdc2d9d198b4587",
                    "Chambers": [
                        {
                            "_name": "patron_in_weapon",
                            "_id": "5ac66d2e5acfc43b321d4b55",
                            "_parent": "5ac66d2e5acfc43b321d4b53",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": this.JsonUtil.clone(this.DBitems[IDDL.WEAPON_AK103]._props.Chambers[0]._props.filters[0].Filter)
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d4af244bdc2d962f8b4571"
                        }
                    ],
                    "CenterOfImpact": 0.062,
                    "AimPlane": 0.19,
                    "DeviationCurve": 1.35,
                    "DeviationMax": 23,
                    "Foldable": true,
                    "RecoilCategoryMultiplierHandRotation": 0.207,
                    "RecoilReturnSpeedHandRotation": 2.4,
                    "RecoilDampingHandRotation": 0.85,
                    "RecoilCamera": 0.067,
                    "RecoilStableIndexShot": 5,
                    "RecoilForceBack": 397,
                    "RecoilForceUp": 151,
                    "RecolDispersion": 9,
                    "RecoilPosZMult": 1,
                    "RecoilReturnPathDampingHandRotation": 0.48,
                    "ProgressRecoilAngleOnStable": {
                        "x": 0,
                        "y": 28,
                        "z": 0
                    },
                    "RecoilCenter": {
                        "x": 0,
                        "y": -0.25,
                        "z": 0
                    },
                    "PostRecoilVerticalRangeHandRotation": {
                        "x": -1.5,
                        "y": 0,
                        "z": 0
                    },
                    "PostRecoilHorizontalRangeHandRotation": {
                        "x": -1.5,
                        "y": 1.5,
                        "z": 0
                    },
                    "ShotsGroupSettings": [
                        {
                            "StartShotIndex": 1,
                            "EndShotIndex": 200,
                            "ShotRecoilRotationStrength": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "ShotRecoilPositionStrength": {
                                "x": 0,
                                "y": 0,
                                "z": 0
                            },
                            "ShotRecoilRadianRange": {
                                "x": 6,
                                "y": -6,
                                "z": 0
                            }
                        }
                    ],
                    "CameraToWeaponAngleSpeedRange": {
                        "x": 0.1,
                        "y": 0.2,
                        "z": 0
                    },
                    "CameraToWeaponAngleStep": 0.1,
                    "CameraSnap": 3.5,
                    "RotationCenter": {
                        "x": 0,
                        "y": -0.1,
                        "z": -0.03
                    },
                    "RotationCenterNoStock": {
                        "x": 0,
                        "y": -0.27,
                        "z": -0.08
                    },
                    "FoldedSlot": "mod_stock",
                    "CompactHandling": true,
                    "IronSightRange": 100,
                    "BoltAction": true,
                    "BaseMalfunctionChance": 0.2277,
                    "AllowJam": false,
                    "HeatFactorGun": 0.9305,
                    "CoolFactorGun": 3.168,
                    "CoolFactorGunMods": 0.9502,
                    "HeatFactorByShot": 1.275
                },
                fleaPriceRoubles: 60000,
                parentId: this.DBitems[IDDL.WEAPON_VPO215]._parent,
                handbookPriceRoubles: 60000,
                handbookParentId: handbookCategory_1.handbookCategory["Bolt-actionrifles"],
                locales: {
                    "en": {
                        "name": "Longbow 7.62x39 bolt-action rifle",
                        "shortName": "Longbow",
                        "description": "A lightweight, heavily modified sniper rifle designed for precision shooting and repeat shots thanks to recoil control and magazine capacity."
                    },
                    "ch": {
                        "name": "Longbow 7.62x39 栓动式步枪",
                        "shortName": "Longbow",
                        "description": "A lightweight, heavily modified sniper rifle designed for precision shooting and repeat shots thanks to recoil control and magazine capacity."
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_AK103,
                        newSlotName: mod_slot_1.mod_slot.stock
                    },
                    {
                        id: IDDL.WEAPON_AK103,
                        newSlotName: mod_slot_1.mod_slot.pistol_grip
                    },
                    {
                        id: IDDL.WEAPON_AK103,
                        newSlotName: mod_slot_1.mod_slot.magazine
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "Longbow",
                        Templates: [
                            IDDL.WEAPON_LONGBOW
                        ],
                        Level2: 100,
                        Level3: 200
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_LONGBOW,
                        "_id": "22002010AB10AB0000000000",
                        "_items": [
                            {
                                "_id": "22002010AB10AB0000000001",
                                "_tpl": IDDL.WEAPON_LONGBOW
                            },
                            {
                                "_id": "22002010AB10AB0000000063",
                                "_tpl": IDDL.MAG_AK103,
                                "parentId": "22002010AB10AB0000000001",
                                "slotId": mod_slot_1.mod_slot.magazine
                            },
                            {
                                "_id": "22002010AB10AB00000000e7",
                                "_tpl": IDDL.BARREL_LONGBOW_DEF,
                                "parentId": "22002010AB10AB0000000001",
                                "slotId": mod_slot_1.mod_slot.barrel
                            },
                            {
                                "_id": "22002010AB10AB00000000e8",
                                "_tpl": IDDL.MUZ_LONGBOW,
                                "parentId": "22002010AB10AB00000000e7",
                                "slotId": mod_slot_1.mod_slot.muzzle
                            },
                            {
                                "_id": "22002010AB10AB0000000011",
                                "_tpl": IDDL.HANDGUARD_LONGBOW_DEF,
                                "parentId": "22002010AB10AB0000000001",
                                "slotId": mod_slot_1.mod_slot.handguard
                            },
                            {
                                "_id": "22002010AB10AB0000000021",
                                "_tpl": IDDL.STOCK_LONGBOW,
                                "parentId": "22002010AB10AB0000000001",
                                "slotId": mod_slot_1.mod_slot.stock
                            },
                            {
                                "_id": "22002010AB10AB0000000031",
                                "_tpl": IDDL.REC_LONGBOW_DEF,
                                "parentId": "22002010AB10AB0000000001",
                                "slotId": mod_slot_1.mod_slot.reciever
                            },
                            {
                                "_id": "22002010AB10AB0000000131",
                                "_tpl": IDDL.SIGHT_LONGBOW_FRONT,
                                "parentId": "22002010AB10AB0000000031",
                                "slotId": mod_slot_1.mod_slot.sight_front
                            },
                            {
                                "_id": "22002010AB10AB0000000231",
                                "_tpl": IDDL.SIGHT_LONGBOW_REAR,
                                "parentId": "22002010AB10AB0000000031",
                                "slotId": mod_slot_1.mod_slot.sight_rear
                            },
                            {
                                "_id": "22002010AB10AB00000000c1",
                                "_tpl": IDDL.CHARGE_LONGBOW_DEF,
                                "parentId": "22002010AB10AB0000000001",
                                "slotId": mod_slot_1.mod_slot.charge
                            },
                            {
                                "_id": "22002010AB10AB00000000b1",
                                "_tpl": IDDL.PG_LONGBOW,
                                "parentId": "22002010AB10AB0000000001",
                                "slotId": mod_slot_1.mod_slot.pistol_grip
                            }
                        ],
                        "_name": "LONGBOW Default",
                        "_parent": "22002010AB10AB0000000001",
                        "_type": "Preset"
                    }
                ]
            },
            barrel_longbow: {
                itemTplToClone: IDDL.BARREL_RPK16,
                newId: IDDL.BARREL_LONGBOW_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/barrel_longbow_def.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 1.4,
                    "Width": 3,
                    "Height": 1,
                    Recoil: -8,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: 0.043,
                    Velocity: 8.2,
                    "HeatFactor": 0.98,
                    "CoolFactor": 0.99,
                    Ergonomics: -19,
                    "DeviationCurve": 1.35,
                    "DeviationMax": 23
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_RPK16]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "Longbow 7.62x39 standard barrel",
                        "shortName": "Std.",
                        "description": "Default barrel for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 7.62x39 标准枪管",
                        "shortName": "标准枪管",
                        "description": "Default barrel for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_AK103,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ]
            },
            barrel_longbow_lgtlong: {
                itemTplToClone: IDDL.BARREL_RPK16,
                newId: IDDL.BARREL_LONGBOW_LGTLONG,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/barrel_longbow_lgtlong.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 1.51,
                    "Width": 3,
                    "Height": 1,
                    Recoil: -10,
                    ExtraSizeLeft: 3,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: 0.039,
                    Velocity: 8.95,
                    "HeatFactor": 0.98,
                    "CoolFactor": 1.1,
                    Ergonomics: -21,
                    "DeviationCurve": 1.35,
                    "DeviationMax": 23
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_RPK16]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "Longbow 7.62x39 long barrel",
                        "shortName": "Long",
                        "description": "Long barrel for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 7.62x39 长枪管",
                        "shortName": "长枪管",
                        "description": "Long barrel for Longbow bolt-action rifle."
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
                        id: IDDL.WEAPON_AK103,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ]
            },
            barrel_longbow_shrt: {
                itemTplToClone: IDDL.BARREL_RPK16,
                newId: IDDL.BARREL_LONGBOW_SHRT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/barrel_longbow_shrt.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    Weight: 0.5,
                    "Width": 2,
                    "Height": 1,
                    Recoil: -3,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: 0.07,
                    Velocity: -15,
                    "HeatFactor": 1.02,
                    "CoolFactor": 1.09,
                    Ergonomics: -8,
                    "DeviationCurve": 1.5,
                    "DeviationMax": 21,
                    "DurabilityBurnModificator": 0.87
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_RPK16]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "Longbow 7.62x39 short barrel",
                        "shortName": "Short",
                        "description": "Short barrel for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 7.62x39 短枪管",
                        "shortName": "短枪管",
                        "description": "Short barrel for Longbow bolt-action rifle."
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
                        id: IDDL.WEAPON_AK103,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ]
            },
            barrel_longbow_sil: {
                itemTplToClone: IDDL.BARREL_RPK16,
                newId: IDDL.BARREL_LONGBOW_SIL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/barrel_longbow_sil.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.muzzle,
                            "_id": "5c488af32e2216398b5a960A",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MUZ_LONGBOW_SIL
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 1.32,
                    "Width": 2,
                    "Height": 1,
                    Recoil: -13,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    CenterOfImpact: 0.052,
                    Velocity: -8.5,
                    "HeatFactor": 1.13,
                    "CoolFactor": 1.07,
                    Ergonomics: -14,
                    "DeviationCurve": 1.5,
                    "DeviationMax": 22,
                    "DurabilityBurnModificator": 1
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.BARREL_RPK16]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Barrels,
                locales: {
                    "en": {
                        "name": "Longbow 7.62x39 integrated suppressor barrel",
                        "shortName": "Integrated",
                        "description": "Integrated suppressor barrel for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 7.62x39 一体式消声器枪管",
                        "shortName": "一体式",
                        "description": "Integrated suppressor barrel for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 16000
                    }
                ],
                copySlot: false,
                copySlots: [
                    {
                        id: IDDL.WEAPON_AK103,
                        newSlotName: mod_slot_1.mod_slot.muzzle
                    }
                ]
            },
            handguard_longbow: {
                itemTplToClone: IDDL.HANDGUARD_DESIGN,
                newId: IDDL.HANDGUARD_LONGBOW_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/handguard_longbow_def.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.mount_000,
                            "_id": "5c488af32e2216398b5a960A",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MOUNT_LONGBOW
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
                        IDDL.BARREL_LONGBOW_SHRT
                    ],
                    Weight: 0.30,
                    ExtraSizeLeft: 2,
                    ExtraSizeForceAdd: false,
                    Width: 2
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.HANDGUARD_DESIGN]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Longbow standard handguard",
                        "shortName": "Std.",
                        "description": "Standard handguard for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 标准护木",
                        "shortName": "标准",
                        "description": "Standard handguard for Longbow bolt-action rifle."
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
                        id: IDDL.HANDGUARD_DESIGN,
                        newSlotName: mod_slot_1.mod_slot.scope
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.mount_001
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.mount_002
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    }
                ]
            },
            handguard_longbow_srt: {
                itemTplToClone: IDDL.HANDGUARD_DESIGN,
                newId: IDDL.HANDGUARD_LONGBOW_SRT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/handguard_longbow_shrt.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    ConflictingItems: [],
                    Weight: 0.173,
                    ExtraSizeLeft: 1,
                    ExtraSizeForceAdd: false,
                    Width: 1,
                    "HeatFactor": 0.97,
                    "CoolFactor": 1.03,
                    "Recoil": -2,
                    "Ergonomics": 7
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.HANDGUARD_DESIGN]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory.Handguards,
                locales: {
                    "en": {
                        "name": "Longbow short handguard",
                        "shortName": "Short",
                        "description": "Short handguard for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 短护木",
                        "shortName": "短",
                        "description": "Short handguard for Longbow bolt-action rifle."
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
                        id: IDDL.HANDGUARD_DESIGN,
                        newSlotName: mod_slot_1.mod_slot.scope
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.mount_001
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.mount_002
                    },
                    {
                        id: IDDL.HANDGUARD_M_LOK,
                        newSlotName: mod_slot_1.mod_slot.foregrip
                    },
                    {
                        id: IDDL.REC___SCAR_L,
                        newSlotName: mod_slot_1.mod_slot.sight_front
                    }
                ]
            },
            stock_longbow: {
                itemTplToClone: IDDL.STOCK_AK74M,
                newId: IDDL.STOCK_LONGBOW,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/stock_ak74m_longbow.bundle",
                        "rcid": ""
                    },
                },
                fleaPriceRoubles: 14000,
                parentId: this.DBitems[IDDL.STOCK_AK74M]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory["Stocks&chassis"],
                locales: {
                    "en": {
                        "name": "Longbow standard stock",
                        "shortName": "Longbow std.",
                        "description": "Standard stock for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 标准枪托",
                        "shortName": "Longbow标准",
                        "description": "Standard stock for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: false,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1000
                    }
                ],
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.stock
                ]
            },
            pg_longbow: {
                itemTplToClone: IDDL.PG_AK74,
                newId: IDDL.PG_LONGBOW,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/pistolgrip_ak_longbow.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.PG_AK74]._parent,
                handbookPriceRoubles: 800,
                handbookParentId: handbookCategory_1.handbookCategory.Pistolgrips,
                locales: {
                    "en": {
                        "name": "Longbow polymer pistol grip",
                        "shortName": "Longbow",
                        "description": "Pistol grip for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 聚合物手枪式握把",
                        "shortName": "Longbow",
                        "description": "Pistol grip for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: false,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 800
                    }
                ],
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.pistol_grip
                ]
            },
            rec_longbow: {
                itemTplToClone: IDDL.REC_AK74M,
                newId: IDDL.REC_LONGBOW_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/receiver_longbow_def.bundle",
                        "rcid": ""
                    },
                    Slots: [
                        {
                            "_name": mod_slot_1.mod_slot.sight_rear,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.SIGHT_LONGBOW_REAR,
                                            ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.sight_rear, IDDL.REC___SCAR_L)._props.filters[0].Filter)
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.sight_front,
                            "_id": "5c488af32e2216398b5a9608",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.SIGHT_LONGBOW_FRONT,
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    Weight: 0.2,
                    Ergonomics: 7,
                    "DurabilityBurnModificator": 0.97
                },
                fleaPriceRoubles: 10000,
                parentId: this.DBitems[IDDL.REC_AK74M]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "Longbow standard dust cover",
                        "shortName": "Longbow",
                        "description": "Dust cover for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 标准防尘盖",
                        "shortName": "Longbow",
                        "description": "Dust cover for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 8000
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.REC_B33,
                        newSlotName: mod_slot_1.mod_slot.scope
                    }
                ]
            },
            rec_longbow_jak: {
                itemTplToClone: IDDL.REC_LONGBOW_DEF,
                newId: IDDL.REC_LONGBOW_JAK,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/receiver_longbow_jak.bundle",
                        "rcid": ""
                    },
                    Weight: 0.15,
                    Ergonomics: 11,
                    "DurabilityBurnModificator": 0.99,
                    "HeatFactor": 1.02
                },
                fleaPriceRoubles: 18000,
                parentId: this.DBitems[IDDL.REC_AK74M]._parent,
                handbookPriceRoubles: 15000,
                handbookParentId: handbookCategory_1.handbookCategory["Receivers&slides"],
                locales: {
                    "en": {
                        "name": "Longbow carbon fiber dust cover",
                        "shortName": "JAK",
                        "description": "Carbon fiber dust cover for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 碳纤维防尘盖",
                        "shortName": "JAK",
                        "description": "Carbon fiber dust cover for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 16500
                    }
                ]
            },
            charge_longbow_def: {
                itemTplToClone: IDDL.CHARGE_SCARH,
                newId: IDDL.CHARGE_LONGBOW_DEF,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/charge_longbow_bolt.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "IsAnimated": true,
                    Weight: 0.8,
                    Ergonomics: 0,
                    Recoil: -1
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.CHARGE_SCARH]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Charginghandles,
                locales: {
                    "en": {
                        "name": "Longbow standard bolt",
                        "shortName": "std. bolt",
                        "description": "Standard bolt for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 标准枪栓",
                        "shortName": "标准枪栓",
                        "description": "Standard bolt for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 4000
                    }
                ]
            },
            charge_longbow_heavy: {
                itemTplToClone: IDDL.CHARGE_LONGBOW_DEF,
                newId: IDDL.CHARGE_LONGBOW_HVY,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/charge_longbow_bolt_heavy.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "IsAnimated": true,
                    Weight: 0.91,
                    Ergonomics: -2,
                    Recoil: -2,
                    Accuracy: 2
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.CHARGE_SCARH]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Charginghandles,
                locales: {
                    "en": {
                        "name": "Longbow heavy bolt",
                        "shortName": "Heavy bolt",
                        "description": "Heavy bolt for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 重型枪栓",
                        "shortName": "重型枪栓",
                        "description": "Heavy bolt for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 4000
                    }
                ]
            },
            charge_longbow_light: {
                itemTplToClone: IDDL.CHARGE_LONGBOW_DEF,
                newId: IDDL.CHARGE_LONGBOW_LGT,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/charge_longbow_bolt_light.bundle",
                        "rcid": ""
                    },
                    Slots: [],
                    "IsAnimated": true,
                    Weight: 0.72,
                    Ergonomics: 2
                },
                fleaPriceRoubles: 8000,
                parentId: this.DBitems[IDDL.CHARGE_SCARH]._parent,
                handbookPriceRoubles: 4000,
                handbookParentId: handbookCategory_1.handbookCategory.Charginghandles,
                locales: {
                    "en": {
                        "name": "Longbow light bolt",
                        "shortName": "Light bolt",
                        "description": "Light bolt for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 轻型枪栓",
                        "shortName": "轻型枪栓",
                        "description": "Light bolt for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 4000
                    }
                ]
            },
            sight_longbow_rear: {
                itemTplToClone: IDDL.REAR_SIGHT_MAGPUL,
                newId: IDDL.SIGHT_LONGBOW_REAR,
                overrideProperties: {
                    Weight: 0.004,
                    "Prefab": {
                        "path": "assets/longbow/mods/sight_longbow_rear.bundle",
                        "rcid": ""
                    },
                    ExtraSizeDown: 0,
                    ExtraSizeForceAdd: false,
                    ConflictingItems: [
                        ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.sight_front, IDDL.REC___SCAR_L)._props.filters[0].Filter)
                    ],
                    Ergonomics: 0,
                    "RaidModdable": false
                },
                fleaPriceRoubles: 2000,
                parentId: this.DBitems[IDDL.REAR_SIGHT_MAGPUL]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "Longbow rear sight",
                        "shortName": "Longbow R.",
                        "description": "Iron sight for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 照门组件",
                        "shortName": "Longbow R.",
                        "description": "Iron sight for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            sight_longbow_front: {
                itemTplToClone: IDDL.REAR_SIGHT_MAGPUL,
                newId: IDDL.SIGHT_LONGBOW_FRONT,
                overrideProperties: {
                    Weight: 0.004,
                    "Prefab": {
                        "path": "assets/longbow/mods/sight_longbow_front.bundle",
                        "rcid": ""
                    },
                    ExtraSizeDown: 0,
                    ExtraSizeForceAdd: false,
                    ConflictingItems: [
                        ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.sight_front, IDDL.REC___SCAR_L)._props.filters[0].Filter),
                        ...this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.sight_rear, IDDL.REC___SCAR_L)._props.filters[0].Filter)
                    ],
                    Ergonomics: 0,
                    "RaidModdable": false
                },
                fleaPriceRoubles: 2000,
                parentId: this.DBitems[IDDL.REAR_SIGHT_MAGPUL]._parent,
                handbookPriceRoubles: 2000,
                handbookParentId: handbookCategory_1.handbookCategory.Ironsights,
                locales: {
                    "en": {
                        "name": "Longbow front sight",
                        "shortName": "Longbow F.",
                        "description": "Iron sight for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 准星组件",
                        "shortName": "Longbow F.",
                        "description": "Iron sight for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            muzzle_longbow: {
                itemTplToClone: IDDL.MUZ_AK103,
                newId: IDDL.MUZ_LONGBOW,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/muzzle_ak103_longbow_762x39.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.MUZ_AK103]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "Longbow 7.62x39 muzzle brake-compensator",
                        "shortName": "Longbow",
                        "description": "Muzzle brake-compensator for Longbow bolt-action rifle."
                    },
                    "ch": {
                        "name": "Longbow 7.62x39 膛口制退补偿器",
                        "shortName": "Longbow",
                        "description": "Muzzle brake-compensator for Longbow bolt-action rifle."
                    }
                },
                addtoTraders: false,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 5000
                    }
                ],
                copySlot: false,
                addtoModSlots: true,
                modSlot: [
                    mod_slot_1.mod_slot.muzzle
                ]
            },
            mount_longbow: {
                itemTplToClone: IDDL.MOUNT_MLOK_41,
                newId: IDDL.MOUNT_LONGBOW,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/mount_longbow_def.bundle",
                        "rcid": ""
                    },
                    Slots: []
                },
                fleaPriceRoubles: 1000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 1000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "Longbow handguard bottom rail",
                        "shortName": "Longbow",
                        "description": "Bottom rail for Longbow handguard."
                    },
                    "ch": {
                        "name": "Longbow 护木下导轨",
                        "shortName": "Longbow",
                        "description": "Bottom rail for Longbow handguard."
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 1200
                    }
                ],
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.MOUNT_MLOK_25,
                        newSlotName: mod_slot_1.mod_slot.tactical
                    }
                ]
            },
            muzzle_longbow_sil: {
                itemTplToClone: IDDL.MUZ_AK103,
                newId: IDDL.MUZ_LONGBOW_SIL,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/longbow/mods/muzzle_longbow_sil.bundle",
                        "rcid": ""
                    },
                    "Ergonomics": 0,
                    "Loudness": -30,
                    "Recoil": -5,
                    "Weight": 0.001,
                    "muzzleModType": "silencer",
                    "DurabilityBurnModificator": 1.35,
                    "Velocity": 0.7
                },
                fleaPriceRoubles: 12000,
                parentId: this.DBitems[IDDL.SIL_SIG_MPX]._parent,
                handbookPriceRoubles: 5000,
                handbookParentId: handbookCategory_1.handbookCategory.Suppressors,
                locales: {
                    "en": {
                        "name": "Longbow 7.62x39 suppressor muzzle",
                        "shortName": "Longbow",
                        "description": "Muzzle device for Longbow bolt-action rifle's integrated suppressor barrel."
                    },
                    "ch": {
                        "name": "Longbow 7.62x39 消声器枪口",
                        "shortName": "Longbow",
                        "description": "Muzzle device for Longbow bolt-action rifle's integrated suppressor barrel."
                    }
                },
                addtoTraders: false,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 5000
                    }
                ],
                copySlot: false
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
                // Determine price and loyalty from assortConfig.json
                const configKey = this.data[x].id;
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
        const Config = assortConfig.preset;
        MMA.traderGenerateAssortFromPreset("22002010AB10AB0000000000", Config.price, NTrader_1.NTrader.Default, Config.loyaltyLevel, Money_1.Money.ROUBLES);
        ModifyInfos[IDDL.WEAPON_LONGBOW] = {
            ItemId: IDDL.WEAPON_LONGBOW,
            WeaponCaliberCloneFromId: "itself"
        };
        MMA.loadModifierObj(ModifyInfos);
    }
}
module.exports = Mass_Longbow;
//# sourceMappingURL=Mass_Longbow.js.map