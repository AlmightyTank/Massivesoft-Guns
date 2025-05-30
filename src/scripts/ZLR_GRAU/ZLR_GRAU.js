"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const handbookCategory_1 = require("../../enum/handbookCategory");

const cpntName = "ZLR_GRAU";
class ZLR_GRAU extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    data;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
        this.data = {
            weapon_grau_762x39: {
                itemTplToClone: "618428466ef05c2ce828f218",
                newId: "5dbcb66f4827cd761fb3797a",
                "_props": {
                    "Name": "weapon_fn_mk17_762x39",
                    "ShortName": "weapon_fn_mk17_762x39",
                    "Description": "weapon_fn_mk17_762x39",
                    "Weight": 0.7,
                    "BackgroundColor": "black",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "weap_ar",
                    "Prefab": {
                        "path": "assets/grau/weapon_grau_762x39_container.bundle",
                        "rcid": ""
                    },
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "StackObjectsCount": 1,
                    "NotShownInSlot": false,
                    "ExaminedByDefault": true,
                    "ExamineTime": 1,
                    "IsUndiscardable": false,
                    "IsUnsaleable": false,
                    "IsUnbuyable": false,
                    "IsUngivable": false,
                    "IsLockedafterEquip": false,
                    "QuestItem": false,
                    "LootExperience": 5,
                    "ExamineExperience": 8,
                    "HideEntrails": false,
                    "RepairCost": 198,
                    "RepairSpeed": 15,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "Rifle",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_pistol_grip",
                        "_id": "618428466ef05c2ce828f21c",
                        "_parent": "618428466ef05c2ce828f218",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "98f081647a654c307492ae67",
                                "773b42aa3dad8cab5bcd6308",
                                "05da8ea1317e2fb752129d23",
                                "dea7d4b4b16a4e82ea03453e"
                                ]
                            }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_magazine",
                        "_id": "618428466ef05c2ce828f21d",
                        "_parent": "618428466ef05c2ce828f218",
                        "_props": {
                            "filters": [
                            {
                                "AnimationIndex": -1,
                                "Filter": [
                                "59e5d83b86f7745aed03d262",
                                "5a01c29586f77474660c694c",
                                "5ac66bea5acfc43b321d4aec",
                                "59d625f086f774661516605d",
                                "5b1fd4e35acfc40018633c39",
                                "5a0060fc86f7745793204432",
                                "59e5f5a486f7746c530b3ce2",
                                "5b1fb3e15acfc4001637f068",
                                "59d6272486f77466146386ff",
                                "5e21a3c67e40bd02257a008a",
                                "5cbdc23eae9215001136a407",
                                "5c6175362e221600133e3b94",
                                "59fafc5086f7740dbe19f6c3",
                                "59fafc9386f774067d462453",
                                "5cfe8010d7ad1a59283b14c6",
                                "6272874a6c47bd74f92e2087",
                                "64b9cf0ac12b9c38db26923a"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c394bdc2dae468b4577"
                        },
                        {
                        "_name": "mod_reciever",
                        "_id": "618428466ef05c2ce828f21e",
                        "_parent": "618428466ef05c2ce828f218",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "e19730b94f5b34b39c82fd25"
                                ]
                            }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_stock_001",
                        "_id": "618428466ef05c2ce828f21f",
                        "_parent": "618428466ef05c2ce828f218",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "2986f5dbe25acdbeff9ba8f2",
                                "a422d5cc59d7bcbd1d25d908",
                                "7494980095aa45a8384469a8",
                                "523f5d60f73446c477407dfd",
                                "c084d0bc91c7fa464257d868",
                                "dcf40ea776b8c6c39ed9cd4c",
                                "a787e1509ef7500abfc8fc2d"
                                ]
                            }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "weapClass": "assaultRifle",
                    "weapUseType": "primary",
                    "ammoCaliber": "Caliber762x39",
                    "Durability": 100,
                    "MaxDurability": 100,
                    "OperatingResource": 6000,
                    "RepairComplexity": 0,
                    "durabSpawnMin": 25,
                    "durabSpawnMax": 75,
                    "isFastReload": true,
                    "weapFireType": [
                        "single",
                        "fullauto"
                    ],
                    "SingleFireRate": 450,
                    "CanQueueSecondShot": true,
                    "bFirerate": 720,
                    "Ergonomics": 48,
                    "Velocity": 0,
                    "bEffDist": 500,
                    "bHearDist": 80,
                    "isChamberLoad": true,
                    "chamberAmmoCount": 1,
                    "isBoltCatch": true,
                    "defMagType": "59e5d83b86f7745aed03d262",
                    "defAmmo": "59e0d99486f7744a32234762",
                    "AdjustCollimatorsToTrajectory": false,
                    "shotgunDispersion": 0,
                    "Chambers": [
                        {
                        "_name": "patron_in_weapon",
                        "_id": "618428466ef05c2ce828f221",
                        "_parent": "618428466ef05c2ce828f218",
                        "_props": {
                            "filters": [
                            {
                                "Filter": [
                                "59e0d99486f7744a32234762",
                                "59e4d3d286f774176a36250a",
                                "5656d7c34bdc2d9d198b4587",
                                "59e4cf5286f7741778269d8a",
                                "59e4d24686f7741776641ac7",
                                "601aa3d2b2bcb34913271e6d",
                                "64b7af5a8532cf95ee0a0dbd",
                                "64b7af434b75259c590fa893",
                                "64b7af734b75259c590fa895"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d4af244bdc2d962f8b4571"
                        }
                    ],
                    "ReloadMode": "ExternalMagazine",
                    "CenterOfImpact": 0.01,
                    "AimPlane": 0.16,
                    "DeviationCurve": 1.35,
                    "DeviationMax": 23,
                    "Foldable": false,
                    "Retractable": false,
                    "TacticalReloadStiffnes": {
                        "x": 0.95,
                        "y": 0.33,
                        "z": 0.95
                    },
                    "TacticalReloadFixation": 0.95,
                    "RecoilCategoryMultiplierHandRotation": 0.207,
                    "RecoilReturnSpeedHandRotation": 3,
                    "RecoilDampingHandRotation": 0.69,
                    "RecoilCamera": 0.066,
                    "RecoilStableIndexShot": 5,
                    "RecoilForceBack": 425,
                    "RecoilForceUp": 135,
                    "RecolDispersion": 10,
                    "RecoilPosZMult": 0.6,
                    "RecoilReturnPathDampingHandRotation": 0.48,
                    "RecoilReturnPathOffsetHandRotation": 0.01,
                    "RecoilAngle": 90,
                    "RecoilStableAngleIncreaseStep": 2.4,
                    "ProgressRecoilAngleOnStable": {
                        "x": 0,
                        "y": 17,
                        "z": 0
                    },
                    "RecoilCenter": {
                        "x": 0,
                        "y": -0.24,
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
                    "CameraSnap": 3.25,
                    "RotationCenter": {
                        "x": 0,
                        "y": -0.1,
                        "z": 0
                    },
                    "RotationCenterNoStock": {
                        "x": 0,
                        "y": 0,
                        "z": 0
                    },
                    "SizeReduceRight": 0,
                    "CompactHandling": true,
                    "SightingRange": 100,
                    "MinRepairDegradation": 0,
                    "MaxRepairDegradation": 0.03,
                    "IronSightRange": 100,
                    "MustBoltBeOpennedForExternalReload": false,
                    "MustBoltBeOpennedForInternalReload": false,
                    "BoltAction": false,
                    "HipAccuracyRestorationDelay": 0.2,
                    "HipAccuracyRestorationSpeed": 7,
                    "HipInnaccuracyGain": 0.16,
                    "ManualBoltCatch": false,
                    "AimSensitivity": 0.65,
                    "BurstShotsCount": 3,
                    "BaseMalfunctionChance": 0.183425,
                    "AllowJam": true,
                    "AllowFeed": true,
                    "AllowMisfire": true,
                    "AllowSlide": true,
                    "DurabilityBurnRatio": 1.15,
                    "HeatFactorGun": 1,
                    "CoolFactorGun": 3.168,
                    "CoolFactorGunMods": 1,
                    "HeatFactorByShot": 1.2,
                    "AllowOverheat": true,
                    "DoubleActionAccuracyPenalty": 1.5,
                    "MinRepairKitDegradation": 0,
                    "MaxRepairKitDegradation": 0.025,
                    "IsFlareGun": false,
                    "IsOneoff": false,
                    "IsGrenadeLauncher": false,
                    "NoFiremodeOnBoltcatch": false,
                    "IsStationaryWeapon": false,
                    "IsBeltMachineGun": false,
                    "WithAnimatorAiming": false,
                    "blockLeftStance": false
                    },
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/weapon_grau_762x39_container.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.7,
                    LootExperience: 5,
                    RepairCost: 198,
                    RepairSpeed: 15,
                    Ergonomics: 48,
                    RecoilForceBack: 425,
                    RecoilForceUp: 135,
                },
                fleaPriceRoubles: 36020,
                parentId: "5447b5f14bdc2d61278b4567",
                handbookPriceRoubles: 36020,
                handbookParentId: "5b5f78fc86f77409407a7f90",
                locales: {
                    en: {
                        name: "ZLR GRAU 762 assault rifle ",
                        shortName: "GRAU 762",
                        description: "GRAU 762 is a replicated version from SG-550 series with 7.62*39 cartridges, manufactured by ZLR USA. "
                    }
                }
            },
            receiver_grau_762: {
                itemTplToClone: "N/A",
                newId: "e19730b94f5b34b39c82fd25",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/receiver_grau_762.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.65,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 5,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 23114,
                parentId: "55818a304bdc2db5418b457d",
                handbookPriceRoubles: 23114,
                handbookParentId: "5b5f764186f77447ec5d7714",
                locales: {
                    en: {
                        name: "ZLR GRAU 762 Upper Reciever",
                        shortName: "GRAU 762 upper",
                        description: ""
                    }
                }
            },
            weapon_grau_556x45: {
                itemTplToClone: "618428466ef05c2ce828f218",
                newId: "b6c589ec2535085340807057",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/weapon_grau_556x45_container.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.7,
                    LootExperience: 5,
                    RepairCost: 198,
                    RepairSpeed: 15,
                    Ergonomics: 48,
                    RecoilForceBack: 378,
                    RecoilForceUp: 109,
                },
                fleaPriceRoubles: 36020,
                parentId: "5447b5f14bdc2d61278b4567",
                handbookPriceRoubles: 36020,
                handbookParentId: "5b5f78fc86f77409407a7f90",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 assault rifle ",
                        shortName: "GRAU 556",
                        description: "GRAU 556 is a replicated version from SG-550 series with 5.56*45 cartridges, manufactured by ZLR USA."
                    }
                }
            },
            receiver_grau_556: {
                itemTplToClone: "N/A",
                newId: "3b8f80d2f5acca00e55ca855",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/receiver_grau_556.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.65,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 5,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 23114,
                parentId: "55818a304bdc2db5418b457d",
                handbookPriceRoubles: 23114,
                handbookParentId: "5b5f764186f77447ec5d7714",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 Upper Reciever",
                        shortName: "GRAU 556 upper",
                        description: ""
                    }
                }
            },
            pistolgrip_grau_std: {
                itemTplToClone: "N/A",
                newId: "98f081647a654c307492ae67",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/pistolgrip_grau_std.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.225,
                    LootExperience: 5,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 7,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 13514,
                parentId: "55818a684bdc2ddd698b456d",
                handbookPriceRoubles: 13514,
                handbookParentId: "5b5f761f86f774094242f1a1",
                locales: {
                    en: {
                        name: "ZLR GRAU pistol grip",
                        shortName: "GRAU grip",
                        description: ""
                    }
                }
            },
            pistolgrip_grau_cust: {
                itemTplToClone: "N/A",
                newId: "773b42aa3dad8cab5bcd6308",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/pistolgrip_grau_cust.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.225,
                    LootExperience: 5,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 12,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 13514,
                parentId: "55818a684bdc2ddd698b456d",
                handbookPriceRoubles: 13514,
                handbookParentId: "5b5f761f86f774094242f1a1",
                locales: {
                    en: {
                        name: "ZLR GRAU sniper pistol grip",
                        shortName: "GRAU sniper",
                        description: ""
                    }
                }
            },
            pistolgrip_grau_light: {
                itemTplToClone: "N/A",
                newId: "05da8ea1317e2fb752129d23",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/pistolgrip_grau_light.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.225,
                    LootExperience: 5,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 10,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 13514,
                parentId: "55818a684bdc2ddd698b456d",
                handbookPriceRoubles: 13514,
                handbookParentId: "5b5f761f86f774094242f1a1",
                locales: {
                    en: {
                        name: "ZLR GRAU skeleton pistol grip",
                        shortName: "GRAU skeleton grip",
                        description: ""
                    }
                }
            },
            pistolgrip_grau_hvy: {
                itemTplToClone: "N/A",
                newId: "dea7d4b4b16a4e82ea03453e",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/pistolgrip_grau_hvy.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.225,
                    LootExperience: 5,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 9,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 13514,
                parentId: "55818a684bdc2ddd698b456d",
                handbookPriceRoubles: 13514,
                handbookParentId: "5b5f761f86f774094242f1a1",
                locales: {
                    en: {
                        name: "ZLR GRAU ergo pistol grip",
                        shortName: "GRAU ergo grip",
                        description: ""
                    }
                }
            },
            handguard_grau_00: {
                itemTplToClone: "N/A",
                newId: "74a2de7548ee8bad037c18ea",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/handguard_grau_00.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.42,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 6,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 35614,
                parentId: "55818a104bdc2db9688b4569",
                handbookPriceRoubles: 35614,
                handbookParentId: "5b5f75e486f77447ec5d7712",
                locales: {
                    en: {
                        name: "ZLR GRAU standard handguard kit",
                        shortName: "GRAU_STD",
                        description: ""
                    }
                }
            },
            handguard_grau_light: {
                itemTplToClone: "N/A",
                newId: "c71224cf97f6ac5185217297",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/handguard_grau_light.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.42,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 6,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 42514,
                parentId: "55818a104bdc2db9688b4569",
                handbookPriceRoubles: 42514,
                handbookParentId: "5b5f75e486f77447ec5d7712",
                locales: {
                    en: {
                        name: "ZLR GRAU light-whight handguard kit",
                        shortName: "GRAU_HG-L",
                        description: ""
                    }
                }
            },
            handguard_grau_archangel: {
                itemTplToClone: "N/A",
                newId: "c8e19c9d723ed9af90ee92bf",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/handguard_grau_archangel.bundle",
                        rcid: ""
                    },
                    Width: 4,
                    Height: 1,
                    Weight: 0.42,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 3,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 68514,
                parentId: "55818a104bdc2db9688b4569",
                handbookPriceRoubles: 68514,
                handbookParentId: "5b5f75e486f77447ec5d7712",
                locales: {
                    en: {
                        name: "ZLR GRAU Archangel handguard kit",
                        shortName: "GRAU_Archangel",
                        description: ""
                    }
                }
            },
            mount_grau_std: {
                itemTplToClone: "N/A",
                newId: "63262efcfa6fb45914ea990e",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/mount_grau_std.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.42,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 0,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 18514,
                parentId: "55818b224bdc2dde698b456f",
                handbookPriceRoubles: 18514,
                handbookParentId: "5b5f755f86f77447ec5d770e",
                locales: {
                    en: {
                        name: "ZLR GRAU bottom rail",
                        shortName: "GRAU_bottom rail",
                        description: ""
                    }
                }
            },
            handguard_grau_hg550: {
                itemTplToClone: "N/A",
                newId: "e9e307ec92fbe21d8dd61adf",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/handguard_grau_hg550.bundle",
                        rcid: ""
                    },
                    Width: 3,
                    Height: 1,
                    Weight: 0.42,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 5,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 58534,
                parentId: "55818a104bdc2db9688b4569",
                handbookPriceRoubles: 58534,
                handbookParentId: "5b5f75e486f77447ec5d7712",
                locales: {
                    en: {
                        name: "ZLR GRAU RETRO-550 handguard kit",
                        shortName: "GRAU_RETRO",
                        description: ""
                    }
                }
            },
            handguard_grau_short: {
                itemTplToClone: "N/A",
                newId: "a87a2f656432103e57a4e984",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/handguard_grau_short.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.42,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 8,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 28534,
                parentId: "55818a104bdc2db9688b4569",
                handbookPriceRoubles: 28534,
                handbookParentId: "5b5f75e486f77447ec5d7712",
                locales: {
                    en: {
                        name: "ZLR GRAU short handguard kit",
                        shortName: "GRAU_SHORT",
                        description: ""
                    }
                }
            },
            handguard_grau_heavy: {
                itemTplToClone: "N/A",
                newId: "43a4154a07e886db8ab1886b",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/handguard_grau_heavy.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.42,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 6,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 39514,
                parentId: "55818a104bdc2db9688b4569",
                handbookPriceRoubles: 39514,
                handbookParentId: "5b5f75e486f77447ec5d7712",
                locales: {
                    en: {
                        name: "ZLR GRAU heavy handguard kit",
                        shortName: "GRAU_HEAVY",
                        description: ""
                    }
                }
            },
            stock_grau_std: {
                itemTplToClone: "N/A",
                newId: "2986f5dbe25acdbeff9ba8f2",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/stock_grau_std.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.462,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 15,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 25624,
                parentId: "55818a594bdc2db9688b456a",
                handbookPriceRoubles: 25624,
                handbookParentId: "5b5f757486f774093e6cb507",
                locales: {
                    en: {
                        name: "ZLR GRAU stock",
                        shortName: "GRAU stock",
                        description: ""
                    }
                }
            },
            stock_grau_no: {
                itemTplToClone: "N/A",
                newId: "a787e1509ef7500abfc8fc2d",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/stock_grau_no.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.462,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 3,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 15624,
                parentId: "55818a594bdc2db9688b456a",
                handbookPriceRoubles: 15624,
                handbookParentId: "5b5f757486f774093e6cb507",
                locales: {
                    en: {
                        name: "ZLR GRAU PAD",
                        shortName: "GRAU PAD",
                        description: ""
                    }
                }
            },
            stock_grau_spec: {
                itemTplToClone: "N/A",
                newId: "a422d5cc59d7bcbd1d25d908",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/stock_grau_spec.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.462,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 16,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 25624,
                parentId: "55818a594bdc2db9688b456a",
                handbookPriceRoubles: 25624,
                handbookParentId: "5b5f757486f774093e6cb507",
                locales: {
                    en: {
                        name: "ZLR GRAU stock v2",
                        shortName: "GRAU stock v2",
                        description: ""
                    }
                }
            },
            stock_grau_hvy: {
                itemTplToClone: "N/A",
                newId: "7494980095aa45a8384469a8",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/stock_grau_hvy.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.462,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 10,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 25624,
                parentId: "55818a594bdc2db9688b456a",
                handbookPriceRoubles: 25624,
                handbookParentId: "5b5f757486f774093e6cb507",
                locales: {
                    en: {
                        name: "ZLR GRAU stock heavy",
                        shortName: "GRAU stock heavy",
                        description: ""
                    }
                }
            },
            stock_grau_light: {
                itemTplToClone: "N/A",
                newId: "523f5d60f73446c477407dfd",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/stock_grau_light.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.462,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 22,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 25624,
                parentId: "55818a594bdc2db9688b456a",
                handbookPriceRoubles: 25624,
                handbookParentId: "5b5f757486f774093e6cb507",
                locales: {
                    en: {
                        name: "ZLR GRAU stock light",
                        shortName: "GRAU stock light",
                        description: ""
                    }
                }
            },
            stock_grau_tube: {
                itemTplToClone: "N/A",
                newId: "c084d0bc91c7fa464257d868",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/stock_grau_tube.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.462,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 1,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 15624,
                parentId: "55818a594bdc2db9688b456a",
                handbookPriceRoubles: 15624,
                handbookParentId: "5b5f757486f774093e6cb507",
                locales: {
                    en: {
                        name: "ZLR GRAU stock tube",
                        shortName: "GRAU TUBE",
                        description: ""
                    }
                }
            },
            stock_grau_rail: {
                itemTplToClone: "N/A",
                newId: "dcf40ea776b8c6c39ed9cd4c",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/stock_grau_rail.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.462,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 1,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 15624,
                parentId: "55818a594bdc2db9688b456a",
                handbookPriceRoubles: 15624,
                handbookParentId: "5b5f757486f774093e6cb507",
                locales: {
                    en: {
                        name: "ZLR GRAU stock rail",
                        shortName: "GRAU RAIL",
                        description: ""
                    }
                }
            },
            barrel_grau_short: {
                itemTplToClone: "N/A",
                newId: "4027660efe68e9f689dabfd6",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_short.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -4,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 21563,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 21563,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 762 short barrel",
                        shortName: "GRAU 762 barrel short",
                        description: ""
                    }
                }
            },
            barrel_grau_short: {
                itemTplToClone: "N/A",
                newId: "746748fd271ef2605cd446ae",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_short.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -4,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 21563,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 21563,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 short barrel",
                        shortName: "GRAU 556 barrel short",
                        description: ""
                    }
                }
            },
            barrel_grau_00: {
                itemTplToClone: "N/A",
                newId: "c1bcaa54461cd1767be1fb7c",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_00.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -4,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 23363,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 23363,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 762 standard barrel",
                        shortName: "GRAU 762 barrel std",
                        description: ""
                    }
                }
            },
            barrel_grau_00: {
                itemTplToClone: "N/A",
                newId: "0a1ddaa39b718e24bd39cf87",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_00.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -4,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 23363,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 23363,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 standard barrel",
                        shortName: "GRAU 556 barrel std",
                        description: ""
                    }
                }
            },
            barrel_grau_heavy: {
                itemTplToClone: "N/A",
                newId: "14aee897ebb25fc1d3a2b8e8",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_heavy.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -4,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 25963,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 25963,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 762 heavy barrel",
                        shortName: "GRAU 762 barrel heavy",
                        description: ""
                    }
                }
            },
            barrel_grau_heavy: {
                itemTplToClone: "N/A",
                newId: "22dd6a0c75e85c67cc104ad1",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_heavy.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -4,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 25963,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 25963,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 heavy barrel",
                        shortName: "GRAU 556 barrel heavy",
                        description: ""
                    }
                }
            },
            barrel_grau_light: {
                itemTplToClone: "N/A",
                newId: "cca05fdbb0aee5587cf1a458",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_light.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -4,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 23363,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 23363,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 762 light barrel",
                        shortName: "GRAU 762 barrel light",
                        description: ""
                    }
                }
            },
            barrel_grau_light: {
                itemTplToClone: "N/A",
                newId: "2b24f9c80888335e12256b4c",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_light.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -4,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 23363,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 23363,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 light barrel",
                        shortName: "GRAU 556 barrel light",
                        description: ""
                    }
                }
            },
            barrel_grau_hg550: {
                itemTplToClone: "N/A",
                newId: "393c0207e382b1b068e4fcd5",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_hg550.bundle",
                        rcid: ""
                    },
                    Width: 3,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -6,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 35963,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 35963,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 762 sg550 barrel",
                        shortName: "GRAU 762 barrel 550",
                        description: ""
                    }
                }
            },
            barrel_grau_hg550: {
                itemTplToClone: "N/A",
                newId: "9234e73f83109e632076158a",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_hg550.bundle",
                        rcid: ""
                    },
                    Width: 3,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -6,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 35963,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 35963,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 SG550 barrel",
                        shortName: "GRAU 556 barrel 550",
                        description: ""
                    }
                }
            },
            barrel_grau_archangel: {
                itemTplToClone: "N/A",
                newId: "5b64e044b24b68827454187d",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_archangel.bundle",
                        rcid: ""
                    },
                    Width: 4,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -10,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 45963,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 45963,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 762 Archangel barrel",
                        shortName: "GRAU 762 barrel Archangel",
                        description: ""
                    }
                }
            },
            barrel_grau_archangel: {
                itemTplToClone: "N/A",
                newId: "c2bc0098f957b5b4ad3acbe8",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_archangel.bundle",
                        rcid: ""
                    },
                    Width: 4,
                    Height: 1,
                    Weight: 1.02,
                    LootExperience: 15,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -10,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 45963,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 45963,
                handbookParentId: "5b5f75c686f774094242f19f",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 Archangel barrel",
                        shortName: "GRAU 556 barrel Archangel",
                        description: ""
                    }
                }
            },
            mag_grau_556x45_30: {
                itemTplToClone: "55d482194bdc2d1d4e8b456b",
                newId: "c7332f93b1803894918b1085",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/mag_grau_556x45_30.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 2,
                    Weight: 0.215,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -3,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 3930,
                parentId: "5448bc234bdc2d3c308b4569",
                handbookPriceRoubles: 3930,
                handbookParentId: "5b5f754a86f774094242f19b",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 30-rounds standard mag",
                        shortName: "GRAU 556 std",
                        description: ""
                    }
                }
            },
            mag_grau_556x45_ext: {
                itemTplToClone: "55d482194bdc2d1d4e8b456b",
                newId: "6c65bc737ec596d376f49728",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/mag_grau_556x45_ext.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 3,
                    Weight: 0.215,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -5,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 23930,
                parentId: "5448bc234bdc2d3c308b4569",
                handbookPriceRoubles: 23930,
                handbookParentId: "5b5f754a86f774094242f19b",
                locales: {
                    en: {
                        name: "ZLR GRAU 556 45-rounds standard mag",
                        shortName: "GRAU 556 ext",
                        description: ""
                    }
                }
            },
            mag_grau_556x45_double: {
                itemTplToClone: "55d482194bdc2d1d4e8b456b",
                newId: "9fc102e3eb838201af40f8c1",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/mag_grau_556x45_double.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 2,
                    Weight: 0.3,
                    LootExperience: 10,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: -14,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 37930,
                parentId: "5448bc234bdc2d3c308b4569",
                handbookPriceRoubles: 37930,
                handbookParentId: "5b5f754a86f774094242f19b",
                locales: {
                    en: {
                        name: "ZLR GRAU 60 rounds magazine",
                        shortName: "ZLR GRAU 60R",
                        description: ""
                    }
                }
            },
            sight_front_grau_hg550: {
                itemTplToClone: "5ae099875acfc4001714e593",
                newId: "40c899ffa5f2ce6fb9859136",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/sight_front_grau_hg550.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.034,
                    LootExperience: 5,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 0,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 1195,
                parentId: "55818ac54bdc2d5b648b456e",
                handbookPriceRoubles: 1195,
                handbookParentId: "5b5f748386f774093e6cb501",
                locales: {
                    en: {
                        name: "ZLR GRAU SG550 Front Sight",
                        shortName: "SG550 Front Sight",
                        description: ""
                    }
                }
            },
            sight_front_archangel: {
                itemTplToClone: "5ae099875acfc4001714e593",
                newId: "a72a4b7f57a0e7e681a40e67",
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/sight_front_archangel.bundle",
                        rcid: ""
                    },
                    Width: 1,
                    Height: 1,
                    Weight: 0.034,
                    LootExperience: 5,
                    RepairCost: 0,
                    RepairSpeed: 0,
                    Ergonomics: 0,
                    RecoilForceBack: 0,
                    RecoilForceUp: 0,
                },
                fleaPriceRoubles: 1195,
                parentId: "55818ac54bdc2d5b648b456e",
                handbookPriceRoubles: 1195,
                handbookParentId: "5b5f748386f774093e6cb501",
                locales: {
                    en: {
                        name: "ZLR GRAU Archangel Front Sight",
                        shortName: "Archangel Front Sight",
                        description: ""
                    }
                }
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
            console.log(this.data[x]);
            const item = {
                itemTplToClone: this.data[x].itemTplToClone,
                overrideProperties: this.data[x].overrideProperties,
                _id: id,
                fleaPriceRoubles: this.data[x].fleaPriceRoubles,
                parentId: this.data[x].parentId,
                handbookPriceRoubles: this.data[x].handbookPriceRoubles,
                handbookParentId: this.data[x].handbookParentId,
                locales: this.data[x].locales,
            };
            console.log(item);
            CustomItem.createItemFromClone(item);
            MMA.registerNewItem(id);
            if (this.data[x].addtoTraders) {
                MMA.traderAddItems(id, this.data[x].barterScheme[0].count, NTrader_1.NTrader.Default, this.data[x].loyallevelitems);
            }
            console.log("here 1");
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
            console.log("here 2");
            //MMA.processItemCartridges(this.DBitems[id]);
            console.log("here 3");
            //MMA.processItemChambers(this.DBitems[id]);
            console.log("here 4");
            //MMA.processItemSlots(this.DBitems[id]);
            console.log("here 5");
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
            console.log("here 6");
            if (this.data[x].addweaponpreset) {
                const presets = this.data[x].weaponpresets;
                for (let y in presets) {
                    MMA.addPreset(presets[y]);
                }
            }
            console.log("here 8");
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
            console.log("here 9");
        }
        //MMA.traderGenerateAssortFromPreset("220020DF056DF05600000000", 65000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        //MMA.traderGenerateAssortFromPreset("220020DF156DF15600000000", 60000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        console.log("here 10");
        MMA.loadModifierObj(ModifyInfos);
        for (let lang in this.DBlocales) {
            this.DBlocales[lang]["220020DF156DF15600000000"] = "";
        }
    }
}
module.exports = ZLR_GRAU;
//# sourceMappingURL=ZLR_GRAU.js.map