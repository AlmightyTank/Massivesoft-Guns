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
                itemTpl: "5447b5f14bdc2d61278b4567",
                _id: "5dbcb66f4827cd761fb3797a",
                _props: {
                    "Name": "weapon_fn_mk16_556x45",
                    "ShortName": "weapon_fn_mk16_556x45",
                    "Description": "weapon_fn_mk16_556x45",
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
                    "_id": "5dbcb66f4827cd761fb3797a",
                    "_name": "weapon_fn_mk16_556x45",
                    "_parent": "5447b5f14bdc2d61278b4567",
                    "_type": "Item",
                    "_proto": "5447a9cd4bdc2dbd208b4567",
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
                _id: "e19730b94f5b34b39c82fd25",
                _props: {
                "Name": "reciever_ar10_kac_sr25_upper_std",
                "ShortName": "reciever_ar10_kac_sr25_upper_std",
                "Description": "reciever_ar10_kac_sr25_upper_std",
                "Weight": 0.65,
                "BackgroundColor": "blue",
                "Width": 2,
                "Height": 1,
                "StackMaxSize": 1,
                "ItemSound": "mod",
                "Prefab": {
                    "path": "assets/grau/mods/receiver_grau_762.bundle",
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
                "LootExperience": 10,
                "ExamineExperience": 2,
                "HideEntrails": false,
                "RepairCost": 0,
                "RepairSpeed": 0,
                "ExtraSizeLeft": 1,
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
                "DropSoundType": "None",
                "InsuranceDisabled": false,
                "QuestStashMaxCount": 0,
                "IsSpecialSlotOnly": false,
                "IsUnremovable": false,
                "Grids": [],
                "Slots": [
                    {
                    "_name": "mod_scope",
                    "_id": "5df8e4080b92095fd441e596",
                    "_parent": "5df8e4080b92095fd441e594",
                    "_props": {
                        "filters": [
                        {
                            "Shift": 0,
                            "Filter": [
                            "57ac965c24597706be5f975c",
                            "57aca93d2459771f2c7e26db",
                            "544a3f024bdc2d1d388b4568",
                            "544a3a774bdc2d3a388b4567",
                            "5d2dc3e548f035404a1a4798",
                            "57adff4f24597737f373b6e6",
                            "5c0517910db83400232ffee5",
                            "591c4efa86f7741030027726",
                            "570fd79bd2720bc7458b4583",
                            "570fd6c2d2720bc6458b457f",
                            "558022b54bdc2dac148b458d",
                            "5c07dd120db834001c39092d",
                            "5c0a2cec0db834001b7ce47d",
                            "58491f3324597764bc48fa02",
                            "584924ec24597768f12ae244",
                            "5b30b0dc5acfc400153b7124",
                            "6165ac8c290d254f5e6b2f6c",
                            "60a23797a37c940de7062d02",
                            "5d2da1e948f035477b1ce2ba",
                            "5c0505e00db834001b735073",
                            "609a63b6e2ff132951242d09",
                            "584984812459776a704a82a6",
                            "59f9d81586f7744c7506ee62",
                            "570fd721d2720bc5458b4596",
                            "57ae0171245977343c27bfcf",
                            "5dfe6104585a0c3e995c7b82",
                            "544a3d0a4bdc2d1b388b4567",
                            "5d1b5e94d7ad1a2b865a96b0",
                            "609bab8b455afd752b2e6138",
                            "58d39d3d86f77445bb794ae7",
                            "616554fe50224f204c1da2aa",
                            "5c7d55f52e221644f31bff6a",
                            "616584766ef05c2ce828ef57",
                            "5b3b6dc75acfc47a8773fb1e",
                            "615d8d878004cc50514c3233",
                            "5b2389515acfc4771e1be0c0",
                            "577d128124597739d65d0e56",
                            "618b9643526131765025ab35",
                            "618bab21526131765025ab3f",
                            "5c86592b2e2216000e69e77c",
                            "5a37ca54c4a282000d72296a",
                            "5d0a29fed7ad1a002769ad08",
                            "5c064c400db834001d23f468",
                            "58d2664f86f7747fec5834f6",
                            "57c69dd424597774c03b7bbc",
                            "5b3b99265acfc4704b4a1afb",
                            "5aa66a9be5b5b0214e506e89",
                            "5aa66c72e5b5b00016327c93",
                            "5c1cdd302e221602b3137250",
                            "61714b2467085e45ef140b2c",
                            "6171407e50224f204c1da3c5",
                            "61713cc4d8e3106d9806c109",
                            "5b31163c5acfc400153b71cb",
                            "5a33b652c4a28232996e407c",
                            "5a33b2c9c4a282000c5a9511",
                            "59db7eed86f77461f8380365",
                            "5a1ead28fcdbcb001912fa9f",
                            "5dff77c759400025ea5150cf",
                            "626bb8532c923541184624b4",
                            "62811f461d5df4475f46a332",
                            "63fc449f5bd61c6cf3784a88",
                            "6477772ea8a38bb2050ed4db",
                            "6478641c19d732620e045e17",
                            "64785e7c19d732620e045e15",
                            "65392f611406374f82152ba5",
                            "653931da5db71d30ab1d6296",
                            "655f13e0a246670fb0373245",
                            "6567e751a715f85433025998"
                            ]
                        }
                        ]
                    },
                    "_required": false,
                    "_mergeSlotWithChildren": false,
                    "_proto": "55d30c4c4bdc2db4468b457e"
                    },
                    {
                    "_name": "mod_handguard",
                    "_id": "5df8e4080b92095fd441e598",
                    "_parent": "5df8e4080b92095fd441e594",
                    "_props": {
                        "filters": [
                        {
                            "Shift": 0,
                            "Filter": [
                            "74a2de7548ee8bad037c18ea",
                            "e9e307ec92fbe21d8dd61adf",
                            "c71224cf97f6ac5185217297",
                            "c8e19c9d723ed9af90ee92bf",
                            "a87a2f656432103e57a4e984",
                            "43a4154a07e886db8ab1886b"
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
                "Durability": 100,
                "Accuracy": 0,
                "Recoil": 0,
                "Loudness": 0,
                "EffectiveDistance": 0,
                "Ergonomics": 5,
                "Velocity": 0,
                "RaidModdable": true,
                "ToolModdable": true,
                "BlocksFolding": false,
                "BlocksCollapsible": false,
                "IsAnimated": false,
                "HasShoulderContact": false,
                "SightingRange": 0,
                "DoubleActionAccuracyPenaltyMult": 1,
                "DurabilityBurnModificator": 1,
                "HeatFactor": 0.9347,
                "CoolFactor": 1.067
                },
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
                _id: "b6c589ec2535085340807057",
                _id: "b6c589ec2535085340807057",
                overrideProperties: {
                    "_name": "weapon_fn_mk16_556x45",
                    "_parent": "5447b5f14bdc2d61278b4567",
                    "_type": "Item",
                    "_props": {
                    "Name": "weapon_fn_mk16_556x45",
                    "ShortName": "weapon_fn_mk16_556x45",
                    "Description": "weapon_fn_mk16_556x45",
                    "Weight": 0.7,
                    "BackgroundColor": "black",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "weap_ar",
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
                                "c7332f93b1803894918b1085",
                                "6c65bc737ec596d376f49728",
                                "9fc102e3eb838201af40f8c1"
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
                                "3b8f80d2f5acca00e55ca855"
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
                    "ammoCaliber": "Caliber556x45NATO",
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
                    "defMagType": "",
                    "defAmmo": "59e6920f86f77411d82aa167",
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
                                "5c0d5ae286f7741e46554302"
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
                    "RecoilForceBack": 378,
                    "RecoilForceUp": 109,
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
                _id: "3b8f80d2f5acca00e55ca855",
                _id: "98f081647a654c307492ae67",
                overrideProperties: {
                    "_name": "pistolgrip_ar15_magpul_moe",
                    "_parent": "55818a684bdc2ddd698b456d",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 0.225,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 7,
                    "Velocity": 0,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0
                    },
                    "_proto": "5649ade84bdc2d1b2b8b4587",
                    "_type": "Item",
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
                _id: "98f081647a654c307492ae67",
                _id: "98f081647a654c307492ae67",
                overrideProperties: {
                    "_name": "pistolgrip_ar15_magpul_moe",
                    "_parent": "55818a684bdc2ddd698b456d",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 0.225,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 7,
                    "Velocity": 0,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0
                    },
                    "_proto": "5649ade84bdc2d1b2b8b4587",
                    "_type": "Item",
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
                _id: "773b42aa3dad8cab5bcd6308",
                _id: "773b42aa3dad8cab5bcd6308",
                overrideProperties: {
                    "_name": "pistolgrip_ar15_magpul_moe",
                    "_parent": "55818a684bdc2ddd698b456d",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 0.225,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 12,
                    "Velocity": 0,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0
                    },
                    "_proto": "5649ade84bdc2d1b2b8b4587",
                    "_type": "Item",
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
                _id: "05da8ea1317e2fb752129d23",
                _id: "05da8ea1317e2fb752129d23",
                overrideProperties: {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "_name": "pistolgrip_ar15_magpul_moe",
                    "_parent": "55818a684bdc2ddd698b456d",
                    "_props": {
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 0.225,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 10,
                    "Velocity": 0,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0
                    },
                    "_proto": "5649ade84bdc2d1b2b8b4587",
                    "_type": "Item",
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
                _id: "dea7d4b4b16a4e82ea03453e",
                _id: "dea7d4b4b16a4e82ea03453e",
                overrideProperties: {
                    "_name": "pistolgrip_ar15_magpul_moe",
                    "_parent": "55818a684bdc2ddd698b456d",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 0.225,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 9,
                    "Velocity": 0,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0
                    },
                    "_proto": "5649ade84bdc2d1b2b8b4587",
                    "_type": "Item",
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
                _id: "74a2de7548ee8bad037c18ea",
                overrideProperties: {
                    _id: "74a2de7548ee8bad037c18ea",
                    "_name": "handguard_ar10_kac_urx4_14_5_inch",
                    "_parent": "55818a104bdc2db9688b4569",
                    "_type": "Item",
                    "_props": {
                    "Name": "handguard_ar10_kac_urx4_14_5_inch",
                    "ShortName": "handguard_ar10_kac_urx4_14_5_inch",
                    "Description": "handguard_ar10_kac_urx4_14_5_inch",
                    "Weight": 0.42,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 3,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 2,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_mount_001",
                        "_id": "5df916dfbb49d91fb446d6bd",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b7be47f5acfc400170e2dd2"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_mount",
                        "_id": "5df916dfbb49d91fb446d6c2",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "63262efcfa6fb45914ea990e"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_mount_002",
                        "_id": "5df916dfbb49d91fb446d6c3",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b7be47f5acfc400170e2dd2"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_barrel",
                        "_id": "5df8e4080b92095fd441e598",
                        "_parent": "5df8e4080b92095fd441e594",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "c1bcaa54461cd1767be1fb7c",
                                "0a1ddaa39b718e24bd39cf87"
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
                    "Durability": 100,
                    "Accuracy": 1,
                    "Recoil": -1,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 6,
                    "Velocity": 0,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "HeatFactor": 0.965,
                    "CoolFactor": 1.03
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "c71224cf97f6ac5185217297",
                overrideProperties: {
                    _id: "c71224cf97f6ac5185217297",
                        "_name": "handguard_ar10_kac_urx4_14_5_inch",
                        "_parent": "55818a104bdc2db9688b4569",
                        "_type": "Item",
                        "_props": {
                        "Name": "handguard_ar10_kac_urx4_14_5_inch",
                        "ShortName": "handguard_ar10_kac_urx4_14_5_inch",
                        "Description": "handguard_ar10_kac_urx4_14_5_inch",
                        "Weight": 0.42,
                        "BackgroundColor": "blue",
                        "Width": 2,
                        "Height": 1,
                        "StackMaxSize": 1,
                        "ItemSound": "mod",
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
                        "LootExperience": 15,
                        "ExamineExperience": 3,
                        "HideEntrails": false,
                        "RepairCost": 0,
                        "RepairSpeed": 0,
                        "ExtraSizeLeft": 2,
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
                        "DropSoundType": "None",
                        "InsuranceDisabled": false,
                        "QuestStashMaxCount": 0,
                        "IsSpecialSlotOnly": false,
                        "IsUnremovable": false,
                        "Grids": [],
                        "Slots": [
                            {
                            "_name": "mod_scope",
                            "_id": "5df916dfbb49d91fb446d6bb",
                            "_parent": "5df916dfbb49d91fb446d6b9",
                            "_props": {
                                "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                    "5649a2464bdc2d91118b45a8"
                                    ]
                                }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                            },
                            {
                            "_name": "mod_tactical_000",
                            "_id": "5df916dfbb49d91fb446d6bc",
                            "_parent": "5df916dfbb49d91fb446d6b9",
                            "_props": {
                                "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                    "57fd23e32459772d0805bcf1",
                                    "544909bb4bdc2d6f028b4577",
                                    "5d10b49bd7ad1a1a560708b0",
                                    "5c06595c0db834001a66af6c",
                                    "5a7b483fe899ef0016170d15",
                                    "61605d88ffa6e502ac5e7eeb",
                                    "5c5952732e2216398b5abda2",
                                    "644a3df63b0b6f03e101e065"
                                    ]
                                }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                            },
                            {
                            "_name": "mod_tactical_001",
                            "_id": "5df916dfbb49d91fb446d6bd",
                            "_parent": "5df916dfbb49d91fb446d6b9",
                            "_props": {
                                "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                    "5a800961159bd4315e3a1657",
                                    "57fd23e32459772d0805bcf1",
                                    "544909bb4bdc2d6f028b4577",
                                    "5c06595c0db834001a66af6c",
                                    "5cc9c20cd7f00c001336c65d",
                                    "5d2369418abbc306c62e0c80",
                                    "5b07dd285acfc4001754240d",
                                    "56def37dd2720bec348b456a",
                                    "5a7b483fe899ef0016170d15",
                                    "61605d88ffa6e502ac5e7eeb",
                                    "5a5f1ce64f39f90b401987bc",
                                    "560d657b4bdc2da74d8b4572",
                                    "5b3a337e5acfc4704b4a19a0",
                                    "5c5952732e2216398b5abda2",
                                    "57d17e212459775a1179a0f5",
                                    "6267c6396b642f77f56f5c1c",
                                    "6272370ee4013c5d7e31f418",
                                    "6272379924e29f06af4d5ecb",
                                    "626becf9582c3e319310b837",
                                    "644a3df63b0b6f03e101e065",
                                    "646f6322f43d0c5d62063715"
                                    ]
                                }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                            },
                            {
                            "_name": "mod_tactical_002",
                            "_id": "5df916dfbb49d91fb446d6bd",
                            "_parent": "5df916dfbb49d91fb446d6b9",
                            "_props": {
                                "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                    "5a800961159bd4315e3a1657",
                                    "57fd23e32459772d0805bcf1",
                                    "544909bb4bdc2d6f028b4577",
                                    "5c06595c0db834001a66af6c",
                                    "5cc9c20cd7f00c001336c65d",
                                    "5d2369418abbc306c62e0c80",
                                    "5b07dd285acfc4001754240d",
                                    "56def37dd2720bec348b456a",
                                    "5a7b483fe899ef0016170d15",
                                    "61605d88ffa6e502ac5e7eeb",
                                    "5a5f1ce64f39f90b401987bc",
                                    "560d657b4bdc2da74d8b4572",
                                    "5b3a337e5acfc4704b4a19a0",
                                    "5c5952732e2216398b5abda2",
                                    "57d17e212459775a1179a0f5",
                                    "6267c6396b642f77f56f5c1c",
                                    "6272370ee4013c5d7e31f418",
                                    "6272379924e29f06af4d5ecb",
                                    "626becf9582c3e319310b837",
                                    "644a3df63b0b6f03e101e065",
                                    "646f6322f43d0c5d62063715"
                                    ]
                                }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                            },
                            {
                            "_name": "mod_foregrip",
                            "_id": "5df916dfbb49d91fb446d6c2",
                            "_parent": "5df916dfbb49d91fb446d6b9",
                            "_props": {
                                "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                    "5c7fc87d2e221644f31c0298",
                                    "5cda9bcfd7f00c0c0b53e900",
                                    "59f8a37386f7747af3328f06",
                                    "619386379fb0c665d5490dbe",
                                    "5c87ca002e221600114cb150",
                                    "588226d124597767ad33f787",
                                    "588226dd24597767ad33f789",
                                    "588226e62459776e3e094af7",
                                    "588226ef24597767af46e39c",
                                    "59fc48e086f77463b1118392",
                                    "5fce0cf655375d18a253eff0",
                                    "5cf4fb76d7f00c065703d3ac",
                                    "5b057b4f5acfc4771e1bd3e9",
                                    "5c791e872e2216001219c40a",
                                    "558032614bdc2de7118b4585",
                                    "58c157be86f77403c74b2bb6",
                                    "58c157c886f774032749fb06",
                                    "5f6340d3ca442212f4047eb2",
                                    "591af28e86f77414a27a9e1d",
                                    "5c1cd46f2e22164bef5cfedb",
                                    "5c1bc4812e22164bef5cfde7",
                                    "5c1bc5612e221602b5429350",
                                    "5c1bc5af2e221602b412949b",
                                    "5c1bc5fb2e221602b1779b32",
                                    "5c1bc7432e221602b412949d",
                                    "5c1bc7752e221602b1779b34",
                                    "64806bdd26c80811d408d37a",
                                    "64807a29e5ffe165600abc97",
                                    "648067db042be0705c0b3009",
                                    "65169d5b30425317755f8e25",
                                    "655df24fdf80b12750626d0a",
                                    "655dccfdbdcc6b5df71382b6"
                                    ]
                                }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                            },
                            {
                            "_name": "mod_barrel",
                            "_id": "5df8e4080b92095fd441e598",
                            "_parent": "5df8e4080b92095fd441e594",
                            "_props": {
                                "filters": [
                                {
                                    "Shift": 0,
                                    "Filter": [
                                    "cca05fdbb0aee5587cf1a458",
                                    "2b24f9c80888335e12256b4c"
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
                        "Durability": 100,
                        "Accuracy": 1,
                        "Recoil": -1,
                        "Loudness": 0,
                        "EffectiveDistance": 0,
                        "Ergonomics": 6,
                        "Velocity": 4,
                        "RaidModdable": false,
                        "ToolModdable": true,
                        "BlocksFolding": false,
                        "BlocksCollapsible": false,
                        "IsAnimated": false,
                        "HasShoulderContact": false,
                        "SightingRange": 0,
                        "DoubleActionAccuracyPenaltyMult": 1,
                        "HeatFactor": 0.965,
                        "CoolFactor": 1.03
                        },
                        "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "c8e19c9d723ed9af90ee92bf",
                overrideProperties: {
                    _id: "c8e19c9d723ed9af90ee92bf",
                    "_name": "handguard_ar10_kac_urx4_14_5_inch",
                    "_parent": "55818a104bdc2db9688b4569",
                    "_type": "Item",
                    "_props": {
                    "Name": "handguard_ar10_kac_urx4_14_5_inch",
                    "ShortName": "handguard_ar10_kac_urx4_14_5_inch",
                    "Description": "handguard_ar10_kac_urx4_14_5_inch",
                    "Weight": 0.42,
                    "BackgroundColor": "blue",
                    "Width": 4,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",

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
                    "LootExperience": 15,
                    "ExamineExperience": 3,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 4,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_tactical_000",
                        "_id": "5df916dfbb49d91fb446d6bc",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_tactical_001",
                        "_id": "5df916dfbb49d91fb446d6bd",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_tactical_002",
                        "_id": "5df916dfbb49d91fb446d6bd",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_foregrip",
                        "_id": "5df916dfbb49d91fb446d6c2",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5c7fc87d2e221644f31c0298",
                                "5cda9bcfd7f00c0c0b53e900",
                                "59f8a37386f7747af3328f06",
                                "619386379fb0c665d5490dbe",
                                "5c87ca002e221600114cb150",
                                "588226d124597767ad33f787",
                                "588226dd24597767ad33f789",
                                "588226e62459776e3e094af7",
                                "588226ef24597767af46e39c",
                                "59fc48e086f77463b1118392",
                                "5fce0cf655375d18a253eff0",
                                "5cf4fb76d7f00c065703d3ac",
                                "5b057b4f5acfc4771e1bd3e9",
                                "5c791e872e2216001219c40a",
                                "558032614bdc2de7118b4585",
                                "58c157be86f77403c74b2bb6",
                                "58c157c886f774032749fb06",
                                "5f6340d3ca442212f4047eb2",
                                "591af28e86f77414a27a9e1d",
                                "5c1cd46f2e22164bef5cfedb",
                                "5c1bc4812e22164bef5cfde7",
                                "5c1bc5612e221602b5429350",
                                "5c1bc5af2e221602b412949b",
                                "5c1bc5fb2e221602b1779b32",
                                "5c1bc7432e221602b412949d",
                                "5c1bc7752e221602b1779b34",
                                "64806bdd26c80811d408d37a",
                                "64807a29e5ffe165600abc97",
                                "648067db042be0705c0b3009",
                                "65169d5b30425317755f8e25",
                                "655df24fdf80b12750626d0a",
                                "655dccfdbdcc6b5df71382b6"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_barrel",
                        "_id": "5df8e4080b92095fd441e598",
                        "_parent": "5df8e4080b92095fd441e594",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b64e044b24b68827454187d",
                                "c2bc0098f957b5b4ad3acbe8"
                                ]
                            }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_sight_front",
                        "_id": "6183b0711cb55961fa0fdcb0",
                        "_parent": "6183b0711cb55961fa0fdcad",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "a72a4b7f57a0e7e681a40e67"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 3,
                    "Recoil": -8,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 3,
                    "Velocity": 8,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "HeatFactor": 0.965,
                    "CoolFactor": 1.03
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "63262efcfa6fb45914ea990e",
                overrideProperties: {
                    _id: "63262efcfa6fb45914ea990e",
                    "_name": "handguard_ar10_kac_urx4_14_5_inch",
                    "_parent": "55818b224bdc2dde698b456f",
                    "_type": "Item",
                    "_props": {
                    "Name": "handguard_ar10_kac_urx4_14_5_inch",
                    "ShortName": "handguard_ar10_kac_urx4_14_5_inch",
                    "Description": "handguard_ar10_kac_urx4_14_5_inch",
                    "Weight": 0.42,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 3,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_tactical_000",
                        "_id": "5df916dfbb49d91fb446d6bc",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_foregrip",
                        "_id": "5df916dfbb49d91fb446d6c2",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5c7fc87d2e221644f31c0298",
                                "5cda9bcfd7f00c0c0b53e900",
                                "59f8a37386f7747af3328f06",
                                "619386379fb0c665d5490dbe",
                                "5c87ca002e221600114cb150",
                                "588226d124597767ad33f787",
                                "588226dd24597767ad33f789",
                                "588226e62459776e3e094af7",
                                "588226ef24597767af46e39c",
                                "59fc48e086f77463b1118392",
                                "5fce0cf655375d18a253eff0",
                                "5cf4fb76d7f00c065703d3ac",
                                "5b057b4f5acfc4771e1bd3e9",
                                "5c791e872e2216001219c40a",
                                "558032614bdc2de7118b4585",
                                "58c157be86f77403c74b2bb6",
                                "58c157c886f774032749fb06",
                                "5f6340d3ca442212f4047eb2",
                                "591af28e86f77414a27a9e1d",
                                "5c1cd46f2e22164bef5cfedb",
                                "5c1bc4812e22164bef5cfde7",
                                "5c1bc5612e221602b5429350",
                                "5c1bc5af2e221602b412949b",
                                "5c1bc5fb2e221602b1779b32",
                                "5c1bc7432e221602b412949d",
                                "5c1bc7752e221602b1779b34",
                                "64806bdd26c80811d408d37a",
                                "64807a29e5ffe165600abc97",
                                "648067db042be0705c0b3009",
                                "65169d5b30425317755f8e25",
                                "655df24fdf80b12750626d0a",
                                "655dccfdbdcc6b5df71382b6"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 0,
                    "Velocity": 0,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "HeatFactor": 0.965,
                    "CoolFactor": 1.03
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "e9e307ec92fbe21d8dd61adf",
                overrideProperties: {
                    _id: "e9e307ec92fbe21d8dd61adf",
                    "_name": "handguard_ar10_kac_urx4_14_5_inch",
                    "_parent": "55818a104bdc2db9688b4569",
                    "_type": "Item",
                    "_props": {
                    "Name": "handguard_ar10_kac_urx4_14_5_inch",
                    "ShortName": "handguard_ar10_kac_urx4_14_5_inch",
                    "Description": "handguard_ar10_kac_urx4_14_5_inch",
                    "Weight": 0.42,
                    "BackgroundColor": "blue",
                    "Width": 3,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 3,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 3,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_tactical_000",
                        "_id": "5df916dfbb49d91fb446d6bc",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_tactical_002",
                        "_id": "5df916dfbb49d91fb446d6bd",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_foregrip",
                        "_id": "5df916dfbb49d91fb446d6c2",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5c7fc87d2e221644f31c0298",
                                "5cda9bcfd7f00c0c0b53e900",
                                "59f8a37386f7747af3328f06",
                                "619386379fb0c665d5490dbe",
                                "5c87ca002e221600114cb150",
                                "588226d124597767ad33f787",
                                "588226dd24597767ad33f789",
                                "588226e62459776e3e094af7",
                                "588226ef24597767af46e39c",
                                "59fc48e086f77463b1118392",
                                "5fce0cf655375d18a253eff0",
                                "5cf4fb76d7f00c065703d3ac",
                                "5b057b4f5acfc4771e1bd3e9",
                                "5c791e872e2216001219c40a",
                                "558032614bdc2de7118b4585",
                                "58c157be86f77403c74b2bb6",
                                "58c157c886f774032749fb06",
                                "5f6340d3ca442212f4047eb2",
                                "591af28e86f77414a27a9e1d",
                                "5c1cd46f2e22164bef5cfedb",
                                "5c1bc4812e22164bef5cfde7",
                                "5c1bc5612e221602b5429350",
                                "5c1bc5af2e221602b412949b",
                                "5c1bc5fb2e221602b1779b32",
                                "5c1bc7432e221602b412949d",
                                "5c1bc7752e221602b1779b34",
                                "64806bdd26c80811d408d37a",
                                "64807a29e5ffe165600abc97",
                                "648067db042be0705c0b3009",
                                "65169d5b30425317755f8e25",
                                "655df24fdf80b12750626d0a",
                                "655dccfdbdcc6b5df71382b6"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_barrel",
                        "_id": "5df8e4080b92095fd441e598",
                        "_parent": "5df8e4080b92095fd441e594",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "393c0207e382b1b068e4fcd5",
                                "9234e73f83109e632076158a"
                                ]
                            }
                            ]
                        },
                        "_required": true,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_sight_front",
                        "_id": "6183b0711cb55961fa0fdcb0",
                        "_parent": "6183b0711cb55961fa0fdcad",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "40c899ffa5f2ce6fb9859136"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 1,
                    "Recoil": -1,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 5,
                    "Velocity": 6,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "HeatFactor": 0.965,
                    "CoolFactor": 1.03
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "a87a2f656432103e57a4e984",
                overrideProperties: {
                    _id: "a87a2f656432103e57a4e984",
                    "_name": "handguard_ar10_kac_urx4_14_5_inch",
                    "_parent": "55818a104bdc2db9688b4569",
                    "_type": "Item",
                    "_props": {
                    "Name": "handguard_ar10_kac_urx4_14_5_inch",
                    "ShortName": "handguard_ar10_kac_urx4_14_5_inch",
                    "Description": "handguard_ar10_kac_urx4_14_5_inch",
                    "Weight": 0.42,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 1,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_tactical_001",
                        "_id": "5df916dfbb49d91fb446d6bc",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_tactical_002",
                        "_id": "5df916dfbb49d91fb446d6bd",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_foregrip",
                        "_id": "5df916dfbb49d91fb446d6c2",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5c7fc87d2e221644f31c0298",
                                "5cda9bcfd7f00c0c0b53e900",
                                "59f8a37386f7747af3328f06",
                                "619386379fb0c665d5490dbe",
                                "5c87ca002e221600114cb150",
                                "588226d124597767ad33f787",
                                "588226dd24597767ad33f789",
                                "588226e62459776e3e094af7",
                                "588226ef24597767af46e39c",
                                "59fc48e086f77463b1118392",
                                "5fce0cf655375d18a253eff0",
                                "5cf4fb76d7f00c065703d3ac",
                                "5b057b4f5acfc4771e1bd3e9",
                                "5c791e872e2216001219c40a",
                                "558032614bdc2de7118b4585",
                                "58c157be86f77403c74b2bb6",
                                "58c157c886f774032749fb06",
                                "5f6340d3ca442212f4047eb2",
                                "591af28e86f77414a27a9e1d",
                                "5c1cd46f2e22164bef5cfedb",
                                "5c1bc4812e22164bef5cfde7",
                                "5c1bc5612e221602b5429350",
                                "5c1bc5af2e221602b412949b",
                                "5c1bc5fb2e221602b1779b32",
                                "5c1bc7432e221602b412949d",
                                "5c1bc7752e221602b1779b34",
                                "64806bdd26c80811d408d37a",
                                "64807a29e5ffe165600abc97",
                                "648067db042be0705c0b3009",
                                "65169d5b30425317755f8e25",
                                "655df24fdf80b12750626d0a",
                                "655dccfdbdcc6b5df71382b6"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_barrel",
                        "_id": "5df8e4080b92095fd441e598",
                        "_parent": "5df8e4080b92095fd441e594",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "4027660efe68e9f689dabfd6",
                                "746748fd271ef2605cd446ae"
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
                    "Durability": 100,
                    "Accuracy": 1,
                    "Recoil": -3,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 8,
                    "Velocity": 6,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "HeatFactor": 0.965,
                    "CoolFactor": 1.03
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "43a4154a07e886db8ab1886b",
                overrideProperties: {
                    _id: "43a4154a07e886db8ab1886b",
                    "_name": "handguard_ar10_kac_urx4_14_5_inch",
                    "_parent": "55818a104bdc2db9688b4569",
                    "_type": "Item",
                    "_props": {
                    "Name": "handguard_ar10_kac_urx4_14_5_inch",
                    "ShortName": "handguard_ar10_kac_urx4_14_5_inch",
                    "Description": "handguard_ar10_kac_urx4_14_5_inch",
                    "Weight": 0.42,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 3,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 2,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_tactical_000",
                        "_id": "5df916dfbb49d91fb446d6bc",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5d10b49bd7ad1a1a560708b0",
                                "5c06595c0db834001a66af6c",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5c5952732e2216398b5abda2",
                                "644a3df63b0b6f03e101e065"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_tactical_001",
                        "_id": "5df916dfbb49d91fb446d6bd",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_tactical_002",
                        "_id": "5df916dfbb49d91fb446d6bd",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "61605d88ffa6e502ac5e7eeb",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065",
                                "646f6322f43d0c5d62063715"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_foregrip",
                        "_id": "5df916dfbb49d91fb446d6c2",
                        "_parent": "5df916dfbb49d91fb446d6b9",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5c7fc87d2e221644f31c0298",
                                "5cda9bcfd7f00c0c0b53e900",
                                "59f8a37386f7747af3328f06",
                                "619386379fb0c665d5490dbe",
                                "5c87ca002e221600114cb150",
                                "588226d124597767ad33f787",
                                "588226dd24597767ad33f789",
                                "588226e62459776e3e094af7",
                                "588226ef24597767af46e39c",
                                "59fc48e086f77463b1118392",
                                "5fce0cf655375d18a253eff0",
                                "5cf4fb76d7f00c065703d3ac",
                                "5b057b4f5acfc4771e1bd3e9",
                                "5c791e872e2216001219c40a",
                                "558032614bdc2de7118b4585",
                                "58c157be86f77403c74b2bb6",
                                "58c157c886f774032749fb06",
                                "5f6340d3ca442212f4047eb2",
                                "591af28e86f77414a27a9e1d",
                                "5c1cd46f2e22164bef5cfedb",
                                "5c1bc4812e22164bef5cfde7",
                                "5c1bc5612e221602b5429350",
                                "5c1bc5af2e221602b412949b",
                                "5c1bc5fb2e221602b1779b32",
                                "5c1bc7432e221602b412949d",
                                "5c1bc7752e221602b1779b34",
                                "64806bdd26c80811d408d37a",
                                "64807a29e5ffe165600abc97",
                                "648067db042be0705c0b3009",
                                "65169d5b30425317755f8e25",
                                "655df24fdf80b12750626d0a",
                                "655dccfdbdcc6b5df71382b6"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                        "_name": "mod_barrel",
                        "_id": "5df8e4080b92095fd441e598",
                        "_parent": "5df8e4080b92095fd441e594",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "14aee897ebb25fc1d3a2b8e8",
                                "22dd6a0c75e85c67cc104ad1"
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
                    "Durability": 100,
                    "Accuracy": 1,
                    "Recoil": -1,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 6,
                    "Velocity": 4,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "HeatFactor": 0.965,
                    "CoolFactor": 1.03
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "2986f5dbe25acdbeff9ba8f2",
                overrideProperties: {
                    _id: "2986f5dbe25acdbeff9ba8f2",
                    "_name": "stock_mpx_pmm_ulss",
                    "_type": "Item",
                    "_parent": "55818a594bdc2db9688b456a",
                    "_props": {
                    "Name": "stock_all_sig_mpx_mcx_early_type",
                    "ShortName": "stock_all_sig_mpx_mcx_early_type",
                    "Description": "stock_all_sig_mpx_mcx_early_type",
                    "Weight": 0.462,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",

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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -30,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 15,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": true,
                    "HasShoulderContact": true,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "IsShoulderContact": true,
                    "Foldable": false,
                    "Retractable": false,
                    "SizeReduceRight": 0,
                    "HeatFactor": 1,
                    "CoolFactor": 1,
                    "DurabilityBurnModificator": 1
                    },
                    "_proto": "5649b0fc4bdc2d17108b4588",
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
                _id: "a787e1509ef7500abfc8fc2d",
                overrideProperties: {
                    _id: "a787e1509ef7500abfc8fc2d",
                    "_name": "stock_mpx_pmm_ulss",
                    "_type": "Item",
                    "_parent": "55818a594bdc2db9688b456a",
                    "_props": {
                    "Name": "stock_all_sig_mpx_mcx_early_type",
                    "ShortName": "stock_all_sig_mpx_mcx_early_type",
                    "Description": "stock_all_sig_mpx_mcx_early_type",
                    "Weight": 0.462,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 3,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": true,
                    "HasShoulderContact": true,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "IsShoulderContact": true,
                    "Foldable": false,
                    "Retractable": false,
                    "SizeReduceRight": 0,
                    "HeatFactor": 1,
                    "CoolFactor": 1,
                    "DurabilityBurnModificator": 1
                    },
                    "_proto": "5649b0fc4bdc2d17108b4588",
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
                _id: "a422d5cc59d7bcbd1d25d908",
                overrideProperties: {
                    _id: "a422d5cc59d7bcbd1d25d908",
                    "_name": "stock_mpx_pmm_ulss",
                    "_type": "Item",
                    "_parent": "55818a594bdc2db9688b456a",
                    "_props": {
                    "Name": "stock_all_sig_mpx_mcx_early_type",
                    "ShortName": "stock_all_sig_mpx_mcx_early_type",
                    "Description": "stock_all_sig_mpx_mcx_early_type",
                    "Weight": 0.462,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -29,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 16,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": true,
                    "HasShoulderContact": true,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "IsShoulderContact": true,
                    "Foldable": false,
                    "Retractable": false,
                    "SizeReduceRight": 0,
                    "HeatFactor": 1,
                    "CoolFactor": 1,
                    "DurabilityBurnModificator": 1
                    },
                    "_proto": "5649b0fc4bdc2d17108b4588",
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
                _id: "7494980095aa45a8384469a8",
                overrideProperties: {
                    _id: "7494980095aa45a8384469a8",
                    "_name": "stock_mpx_pmm_ulss",
                    "_type": "Item",
                    "_parent": "55818a594bdc2db9688b456a",
                    "_props": {
                    "Name": "stock_all_sig_mpx_mcx_early_type",
                    "ShortName": "stock_all_sig_mpx_mcx_early_type",
                    "Description": "stock_all_sig_mpx_mcx_early_type",
                    "Weight": 0.462,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -33,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 10,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": true,
                    "HasShoulderContact": true,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "IsShoulderContact": true,
                    "Foldable": false,
                    "Retractable": false,
                    "SizeReduceRight": 0,
                    "HeatFactor": 1,
                    "CoolFactor": 1,
                    "DurabilityBurnModificator": 1
                    },
                    "_proto": "5649b0fc4bdc2d17108b4588",
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
                _id: "523f5d60f73446c477407dfd",
                overrideProperties: {
                    _id: "523f5d60f73446c477407dfd",
                    "_name": "stock_mpx_pmm_ulss",
                    "_type": "Item",
                    "_parent": "55818a594bdc2db9688b456a",
                    "_props": {
                    "Name": "stock_all_sig_mpx_mcx_early_type",
                    "ShortName": "stock_all_sig_mpx_mcx_early_type",
                    "Description": "stock_all_sig_mpx_mcx_early_type",
                    "Weight": 0.462,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -24,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 22,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": true,
                    "HasShoulderContact": true,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "IsShoulderContact": true,
                    "Foldable": false,
                    "Retractable": false,
                    "SizeReduceRight": 0,
                    "HeatFactor": 1,
                    "CoolFactor": 1,
                    "DurabilityBurnModificator": 1
                    },
                    "_proto": "5649b0fc4bdc2d17108b4588",
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
                _id: "c084d0bc91c7fa464257d868",
                overrideProperties: {
                    _id: "c084d0bc91c7fa464257d868",
                    "_name": "stock_mpx_pmm_ulss",
                    "_type": "Item",
                    "_parent": "55818a594bdc2db9688b456a",
                    "_props": {
                    "Name": "stock_all_sig_mpx_mcx_early_type",
                    "ShortName": "stock_all_sig_mpx_mcx_early_type",
                    "Description": "stock_all_sig_mpx_mcx_early_type",
                    "Weight": 0.462,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_stock_000",
                        "_id": "5c793fb92e221644f31bfb66",
                        "_parent": "5c793fb92e221644f31bfb64",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5fc2369685fd526b824a5713",
                                "606587d11246154cad35d635",
                                "602e620f9b513876d4338d9a",
                                "5a9eb32da2750c00171b3f9c",
                                "5bfe86df0db834001b734685",
                                "55d4ae6c4bdc2d8b2f8b456e",
                                "5c87a07c2e2216001219d4a2",
                                "5bb20e70d4351e0035629f8f",
                                "5beec8c20db834001d2c465c",
                                "5fbbaa86f9986c4cff3fe5f6",
                                "5fce16961f152d4312622bc9",
                                "5ae30c9a5acfc408fb139a03",
                                "5d135e83d7ad1a21b83f42d8",
                                "5d135ecbd7ad1a21c176542e",
                                "56eabf3bd2720b75698b4569",
                                "58d2946386f774496974c37e",
                                "58d2946c86f7744e271174b5",
                                "58d2947686f774485c6a1ee5",
                                "58d2947e86f77447aa070d53",
                                "5d44069ca4b9361ebd26fc37",
                                "5d4406a8a4b9361e4f6eb8b7",
                                "5947c73886f7747701588af5",
                                "5c793fde2e221601da358614",
                                "5b39f8db5acfc40016387a1b",
                                "628a85ee6b1d481ff772e9d5",
                                "6516e91f609aaf354b34b3e2",
                                "6516e971a3d4c6497930b450",
                                "6529370c405a5f51dd023db8"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -2,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 1,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": true,
                    "HasShoulderContact": true,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "IsShoulderContact": true,
                    "Foldable": false,
                    "Retractable": false,
                    "SizeReduceRight": 0,
                    "HeatFactor": 1,
                    "CoolFactor": 1,
                    "DurabilityBurnModificator": 1
                    },
                    "_proto": "5649b0fc4bdc2d17108b4588",
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
                _id: "dcf40ea776b8c6c39ed9cd4c",
                overrideProperties: {
                    _id: "dcf40ea776b8c6c39ed9cd4c",
                    "_name": "stock_mpx_pmm_ulss",
                    "_type": "Item",
                    "_parent": "55818a594bdc2db9688b456a",
                    "_props": {
                    "Name": "stock_all_sig_mpx_mcx_early_type",
                    "ShortName": "stock_all_sig_mpx_mcx_early_type",
                    "Description": "stock_all_sig_mpx_mcx_early_type",
                    "Weight": 0.462,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_stock",
                        "_id": "58948c8f86f77409493f726a",
                        "_parent": "58948c8e86f77409493f7266",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "58ac1bf086f77420ed183f9f",
                                "5894a13e86f7742405482982",
                                "5fbcc429900b1d5091531dd7",
                                "5fbcc437d724d907e2077d5c",
                                "5c5db6ee2e221600113fba54",
                                "5c5db6f82e2216003a0fe914",
                                "6529348224cbe3c74a05e5c4"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -2,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 1,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": true,
                    "HasShoulderContact": true,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "IsShoulderContact": true,
                    "Foldable": false,
                    "Retractable": false,
                    "SizeReduceRight": 0,
                    "HeatFactor": 1,
                    "CoolFactor": 1,
                    "DurabilityBurnModificator": 1
                    },
                    "_proto": "5649b0fc4bdc2d17108b4588",
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
                _id: "4027660efe68e9f689dabfd6",
                overrideProperties: {
                    _id: "4027660efe68e9f689dabfd6",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "b6c589ec2535085340807057"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "612e0d3767085e45ef14057f",
                                "5b7d693d5acfc43bca706a3d",
                                "5a34fd2bc4a282329a73b4c5",
                                "6065c6e7132d4d12c81fd8e1",
                                "5d1f819086f7744b355c219b",
                                "5dcbe965e4ed22586443a79d",
                                "5d026791d7ad1a04a067ea63",
                                "5dfa3cd1b33c0951220c079b",
                                "6130c43c67085e45ef1405a1",
                                "5cdd7685d7f00c000f260ed2",
                                "5c878e9d2e2216000f201903",
                                "5d02677ad7ad1a04a15c0f95",
                                "5bbdb8bdd4351e4502011460",
                                "5cdd7693d7f00c0010373aa5",
                                "607ffb988900dc2d9a55b6e4",
                                "615d8eb350224f204c1da1cf",
                                "612e0e3c290d254f5e6b291d",
                                "5d443f8fa4b93678dd4a01aa",
                                "5c7954d52e221600106f4cc7",
                                "5fbc22ccf24b94483f726483",
                                "59bffc1f86f77435b128b872",
                                "5cf78496d7f00c065703d6ca",
                                "5fbe7618d6fa9c00c571bb6c",
                                "628a66b41d5e41750e314f34"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -3,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -4,
                    "Velocity": -9.48,
                    "CenterOfImpact": 0.072,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "746748fd271ef2605cd446ae",
                overrideProperties: {
                    _id: "746748fd271ef2605cd446ae",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "5dbcb66f4827cd761fb3797a"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b3a16655acfc40016387a2a",
                                "5c7e5f112e221600106f4ede",
                                "5c0fafb6d174af02a96260ba",
                                "612e0cfc8004cc50514c2d9e",
                                "5cf6937cd7f00c056c53fb39",
                                "544a38634bdc2d58388b4568",
                                "5cff9e5ed7ad1a09407397d4",
                                "5c48a2a42e221602b66d1e07",
                                "5f6372e2865db925d54f3869",
                                "615d8e2f1cb55961fa0fd9a4",
                                "56ea8180d2720bf2698b456a",
                                "5d02676dd7ad1a049e54f6dc",
                                "56ea6fafd2720b844b8b4593",
                                "5943ee5a86f77413872d25ec",
                                "609269c3b0e443224b421cc1",
                                "5c7fb51d2e2216001219ce11",
                                "5ea172e498dacb342978818e",
                                "5c6d710d2e22165df16b81e7",
                                "612e0e55a112697a4b3a66e7",
                                "5d440625a4b9361eec4ae6c5",
                                "5cc9b815d7f00c000e2579d6",
                                "5a7c147ce899ef00150bd8b8",
                                "5c7954d52e221600106f4cc7",
                                "59bffc1f86f77435b128b872",
                                "5a9fbb84a2750c00137fa685",
                                "626667e87379c44d557b7550",
                                "62669bccdb9ebb4daa44cd14",
                                "626a74340be03179a165e30c",
                                "6386120cd6baa055ad1e201c",
                                "63ac5c9658d0485fc039f0b8",
                                "6405ff6bd4578826ec3e377a"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -3,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -4,
                    "Velocity": -9.48,
                    "CenterOfImpact": 0.072,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "c1bcaa54461cd1767be1fb7c",
                overrideProperties: {
                    _id: "c1bcaa54461cd1767be1fb7c",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "b6c589ec2535085340807057"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "612e0d3767085e45ef14057f",
                                "5b7d693d5acfc43bca706a3d",
                                "5a34fd2bc4a282329a73b4c5",
                                "6065c6e7132d4d12c81fd8e1",
                                "5d1f819086f7744b355c219b",
                                "5dcbe965e4ed22586443a79d",
                                "5d026791d7ad1a04a067ea63",
                                "5dfa3cd1b33c0951220c079b",
                                "6130c43c67085e45ef1405a1",
                                "5cdd7685d7f00c000f260ed2",
                                "5c878e9d2e2216000f201903",
                                "5d02677ad7ad1a04a15c0f95",
                                "5bbdb8bdd4351e4502011460",
                                "5cdd7693d7f00c0010373aa5",
                                "607ffb988900dc2d9a55b6e4",
                                "615d8eb350224f204c1da1cf",
                                "612e0e3c290d254f5e6b291d",
                                "5d443f8fa4b93678dd4a01aa",
                                "5c7954d52e221600106f4cc7",
                                "5fbc22ccf24b94483f726483",
                                "59bffc1f86f77435b128b872",
                                "5cf78496d7f00c065703d6ca",
                                "5fbe7618d6fa9c00c571bb6c",
                                "628a66b41d5e41750e314f34"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -4,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -4,
                    "Velocity": -8.76,
                    "CenterOfImpact": 0.063,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "0a1ddaa39b718e24bd39cf87",
                overrideProperties: {
                    _id: "0a1ddaa39b718e24bd39cf87",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "5dbcb66f4827cd761fb3797a"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b3a16655acfc40016387a2a",
                                "5c7e5f112e221600106f4ede",
                                "5c0fafb6d174af02a96260ba",
                                "612e0cfc8004cc50514c2d9e",
                                "5cf6937cd7f00c056c53fb39",
                                "544a38634bdc2d58388b4568",
                                "5cff9e5ed7ad1a09407397d4",
                                "5c48a2a42e221602b66d1e07",
                                "5f6372e2865db925d54f3869",
                                "615d8e2f1cb55961fa0fd9a4",
                                "56ea8180d2720bf2698b456a",
                                "5d02676dd7ad1a049e54f6dc",
                                "56ea6fafd2720b844b8b4593",
                                "5943ee5a86f77413872d25ec",
                                "609269c3b0e443224b421cc1",
                                "5c7fb51d2e2216001219ce11",
                                "5ea172e498dacb342978818e",
                                "5c6d710d2e22165df16b81e7",
                                "612e0e55a112697a4b3a66e7",
                                "5d440625a4b9361eec4ae6c5",
                                "5cc9b815d7f00c000e2579d6",
                                "5a7c147ce899ef00150bd8b8",
                                "5c7954d52e221600106f4cc7",
                                "59bffc1f86f77435b128b872",
                                "5a9fbb84a2750c00137fa685",
                                "626667e87379c44d557b7550",
                                "62669bccdb9ebb4daa44cd14",
                                "626a74340be03179a165e30c",
                                "6386120cd6baa055ad1e201c",
                                "63ac5c9658d0485fc039f0b8",
                                "6405ff6bd4578826ec3e377a"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -4,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -4,
                    "Velocity": -8.76,
                    "CenterOfImpact": 0.063,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "14aee897ebb25fc1d3a2b8e8",
                overrideProperties: {
                    _id: "14aee897ebb25fc1d3a2b8e8",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "b6c589ec2535085340807057"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "612e0d3767085e45ef14057f",
                                "5b7d693d5acfc43bca706a3d",
                                "5a34fd2bc4a282329a73b4c5",
                                "6065c6e7132d4d12c81fd8e1",
                                "5d1f819086f7744b355c219b",
                                "5dcbe965e4ed22586443a79d",
                                "5d026791d7ad1a04a067ea63",
                                "5dfa3cd1b33c0951220c079b",
                                "6130c43c67085e45ef1405a1",
                                "5cdd7685d7f00c000f260ed2",
                                "5c878e9d2e2216000f201903",
                                "5d02677ad7ad1a04a15c0f95",
                                "5bbdb8bdd4351e4502011460",
                                "5cdd7693d7f00c0010373aa5",
                                "607ffb988900dc2d9a55b6e4",
                                "615d8eb350224f204c1da1cf",
                                "612e0e3c290d254f5e6b291d",
                                "5d443f8fa4b93678dd4a01aa",
                                "5c7954d52e221600106f4cc7",
                                "5fbc22ccf24b94483f726483",
                                "59bffc1f86f77435b128b872",
                                "5cf78496d7f00c065703d6ca",
                                "5fbe7618d6fa9c00c571bb6c",
                                "628a66b41d5e41750e314f34"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -5,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -4,
                    "Velocity": -7.93,
                    "CenterOfImpact": 0.044,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
            barrel_grau_556heavy: {
                itemTplToClone: "N/A",
                _id: "22dd6a0c75e85c67cc104ad1",
                overrideProperties: {
                    _id: "22dd6a0c75e85c67cc104ad1",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "5dbcb66f4827cd761fb3797a"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b3a16655acfc40016387a2a",
                                "5c7e5f112e221600106f4ede",
                                "5c0fafb6d174af02a96260ba",
                                "612e0cfc8004cc50514c2d9e",
                                "5cf6937cd7f00c056c53fb39",
                                "544a38634bdc2d58388b4568",
                                "5cff9e5ed7ad1a09407397d4",
                                "5c48a2a42e221602b66d1e07",
                                "5f6372e2865db925d54f3869",
                                "615d8e2f1cb55961fa0fd9a4",
                                "56ea8180d2720bf2698b456a",
                                "5d02676dd7ad1a049e54f6dc",
                                "56ea6fafd2720b844b8b4593",
                                "5943ee5a86f77413872d25ec",
                                "609269c3b0e443224b421cc1",
                                "5c7fb51d2e2216001219ce11",
                                "5ea172e498dacb342978818e",
                                "5c6d710d2e22165df16b81e7",
                                "612e0e55a112697a4b3a66e7",
                                "5d440625a4b9361eec4ae6c5",
                                "5cc9b815d7f00c000e2579d6",
                                "5a7c147ce899ef00150bd8b8",
                                "5c7954d52e221600106f4cc7",
                                "59bffc1f86f77435b128b872",
                                "5a9fbb84a2750c00137fa685",
                                "626667e87379c44d557b7550",
                                "62669bccdb9ebb4daa44cd14",
                                "626a74340be03179a165e30c",
                                "6386120cd6baa055ad1e201c",
                                "63ac5c9658d0485fc039f0b8",
                                "6405ff6bd4578826ec3e377a"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -45,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -4,
                    "Velocity": -7.93,
                    "CenterOfImpact": 0.044,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "cca05fdbb0aee5587cf1a458",
                overrideProperties: {
                    _id: "cca05fdbb0aee5587cf1a458",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "b6c589ec2535085340807057"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "612e0d3767085e45ef14057f",
                                "5b7d693d5acfc43bca706a3d",
                                "5a34fd2bc4a282329a73b4c5",
                                "6065c6e7132d4d12c81fd8e1",
                                "5d1f819086f7744b355c219b",
                                "5dcbe965e4ed22586443a79d",
                                "5d026791d7ad1a04a067ea63",
                                "5dfa3cd1b33c0951220c079b",
                                "6130c43c67085e45ef1405a1",
                                "5cdd7685d7f00c000f260ed2",
                                "5c878e9d2e2216000f201903",
                                "5d02677ad7ad1a04a15c0f95",
                                "5bbdb8bdd4351e4502011460",
                                "5cdd7693d7f00c0010373aa5",
                                "607ffb988900dc2d9a55b6e4",
                                "615d8eb350224f204c1da1cf",
                                "612e0e3c290d254f5e6b291d",
                                "5d443f8fa4b93678dd4a01aa",
                                "5c7954d52e221600106f4cc7",
                                "5fbc22ccf24b94483f726483",
                                "59bffc1f86f77435b128b872",
                                "5cf78496d7f00c065703d6ca",
                                "5fbe7618d6fa9c00c571bb6c",
                                "628a66b41d5e41750e314f34"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -4,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -4,
                    "Velocity": -8.76,
                    "CenterOfImpact": 0.049,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "2b24f9c80888335e12256b4c",
                overrideProperties: {
                    _id: "2b24f9c80888335e12256b4c",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 2,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "5dbcb66f4827cd761fb3797a"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b3a16655acfc40016387a2a",
                                "5c7e5f112e221600106f4ede",
                                "5c0fafb6d174af02a96260ba",
                                "612e0cfc8004cc50514c2d9e",
                                "5cf6937cd7f00c056c53fb39",
                                "544a38634bdc2d58388b4568",
                                "5cff9e5ed7ad1a09407397d4",
                                "5c48a2a42e221602b66d1e07",
                                "5f6372e2865db925d54f3869",
                                "615d8e2f1cb55961fa0fd9a4",
                                "56ea8180d2720bf2698b456a",
                                "5d02676dd7ad1a049e54f6dc",
                                "56ea6fafd2720b844b8b4593",
                                "5943ee5a86f77413872d25ec",
                                "609269c3b0e443224b421cc1",
                                "5c7fb51d2e2216001219ce11",
                                "5ea172e498dacb342978818e",
                                "5c6d710d2e22165df16b81e7",
                                "612e0e55a112697a4b3a66e7",
                                "5d440625a4b9361eec4ae6c5",
                                "5cc9b815d7f00c000e2579d6",
                                "5a7c147ce899ef00150bd8b8",
                                "5c7954d52e221600106f4cc7",
                                "59bffc1f86f77435b128b872",
                                "5a9fbb84a2750c00137fa685",
                                "626667e87379c44d557b7550",
                                "62669bccdb9ebb4daa44cd14",
                                "626a74340be03179a165e30c",
                                "6386120cd6baa055ad1e201c",
                                "63ac5c9658d0485fc039f0b8",
                                "6405ff6bd4578826ec3e377a"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -4,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -4,
                    "Velocity": -8.76,
                    "CenterOfImpact": 0.049,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "393c0207e382b1b068e4fcd5",
                overrideProperties: {
                    _id: "393c0207e382b1b068e4fcd5",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 3,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "b6c589ec2535085340807057"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "612e0d3767085e45ef14057f",
                                "5b7d693d5acfc43bca706a3d",
                                "5a34fd2bc4a282329a73b4c5",
                                "6065c6e7132d4d12c81fd8e1",
                                "5d1f819086f7744b355c219b",
                                "5dcbe965e4ed22586443a79d",
                                "5d026791d7ad1a04a067ea63",
                                "5dfa3cd1b33c0951220c079b",
                                "6130c43c67085e45ef1405a1",
                                "5cdd7685d7f00c000f260ed2",
                                "5c878e9d2e2216000f201903",
                                "5d02677ad7ad1a04a15c0f95",
                                "5bbdb8bdd4351e4502011460",
                                "5cdd7693d7f00c0010373aa5",
                                "607ffb988900dc2d9a55b6e4",
                                "615d8eb350224f204c1da1cf",
                                "612e0e3c290d254f5e6b291d",
                                "5d443f8fa4b93678dd4a01aa",
                                "5c7954d52e221600106f4cc7",
                                "5fbc22ccf24b94483f726483",
                                "59bffc1f86f77435b128b872",
                                "5cf78496d7f00c065703d6ca",
                                "5fbe7618d6fa9c00c571bb6c",
                                "628a66b41d5e41750e314f34"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -8,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -6,
                    "Velocity": -6.56,
                    "CenterOfImpact": 0.04,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "9234e73f83109e632076158a",
                overrideProperties: {
                    _id: "9234e73f83109e632076158a",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 3,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "5dbcb66f4827cd761fb3797a"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b3a16655acfc40016387a2a",
                                "5c7e5f112e221600106f4ede",
                                "5c0fafb6d174af02a96260ba",
                                "612e0cfc8004cc50514c2d9e",
                                "5cf6937cd7f00c056c53fb39",
                                "544a38634bdc2d58388b4568",
                                "5cff9e5ed7ad1a09407397d4",
                                "5c48a2a42e221602b66d1e07",
                                "5f6372e2865db925d54f3869",
                                "615d8e2f1cb55961fa0fd9a4",
                                "56ea8180d2720bf2698b456a",
                                "5d02676dd7ad1a049e54f6dc",
                                "56ea6fafd2720b844b8b4593",
                                "5943ee5a86f77413872d25ec",
                                "609269c3b0e443224b421cc1",
                                "5c7fb51d2e2216001219ce11",
                                "5ea172e498dacb342978818e",
                                "5c6d710d2e22165df16b81e7",
                                "612e0e55a112697a4b3a66e7",
                                "5d440625a4b9361eec4ae6c5",
                                "5cc9b815d7f00c000e2579d6",
                                "5a7c147ce899ef00150bd8b8",
                                "5c7954d52e221600106f4cc7",
                                "59bffc1f86f77435b128b872",
                                "5a9fbb84a2750c00137fa685",
                                "626667e87379c44d557b7550",
                                "62669bccdb9ebb4daa44cd14",
                                "626a74340be03179a165e30c",
                                "6386120cd6baa055ad1e201c",
                                "63ac5c9658d0485fc039f0b8",
                                "6405ff6bd4578826ec3e377a"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -8,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -6,
                    "Velocity": -6.56,
                    "CenterOfImpact": 0.04,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "5b64e044b24b68827454187d",
                overrideProperties: {
                    _id: "5b64e044b24b68827454187d",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 4,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "b6c589ec2535085340807057"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "612e0d3767085e45ef14057f",
                                "5b7d693d5acfc43bca706a3d",
                                "5a34fd2bc4a282329a73b4c5",
                                "6065c6e7132d4d12c81fd8e1",
                                "5d1f819086f7744b355c219b",
                                "5dcbe965e4ed22586443a79d",
                                "5d026791d7ad1a04a067ea63",
                                "5dfa3cd1b33c0951220c079b",
                                "6130c43c67085e45ef1405a1",
                                "5cdd7685d7f00c000f260ed2",
                                "5c878e9d2e2216000f201903",
                                "5d02677ad7ad1a04a15c0f95",
                                "5bbdb8bdd4351e4502011460",
                                "5cdd7693d7f00c0010373aa5",
                                "607ffb988900dc2d9a55b6e4",
                                "615d8eb350224f204c1da1cf",
                                "612e0e3c290d254f5e6b291d",
                                "5d443f8fa4b93678dd4a01aa",
                                "5c7954d52e221600106f4cc7",
                                "5fbc22ccf24b94483f726483",
                                "59bffc1f86f77435b128b872",
                                "5cf78496d7f00c065703d6ca",
                                "5fbe7618d6fa9c00c571bb6c",
                                "628a66b41d5e41750e314f34"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -10,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -10,
                    "Velocity": -4.56,
                    "CenterOfImpact": 0.033,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "c2bc0098f957b5b4ad3acbe8",
                overrideProperties: {
                    _id: "c2bc0098f957b5b4ad3acbe8",
                    "_name": "",
                    "_parent": "555ef6e44bdc2de9068b457e",
                    "_type": "Item",
                    "_props": {
                    "Name": "",
                    "ShortName": "",
                    "Description": "",
                    "Weight": 1.02,
                    "BackgroundColor": "blue",
                    "Width": 4,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "ItemSound": "mod",
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
                    "LootExperience": 15,
                    "ExamineExperience": 6,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": true,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": false,
                    "ConflictingItems": [
                        "5dbcb66f4827cd761fb3797a"
                    ],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [
                        {
                        "_name": "mod_muzzle",
                        "_id": "5df917564a9f347bc92edca5",
                        "_parent": "5df917564a9f347bc92edca3",
                        "_props": {
                            "filters": [
                            {
                                "Shift": 0,
                                "Filter": [
                                "5b3a16655acfc40016387a2a",
                                "5c7e5f112e221600106f4ede",
                                "5c0fafb6d174af02a96260ba",
                                "612e0cfc8004cc50514c2d9e",
                                "5cf6937cd7f00c056c53fb39",
                                "544a38634bdc2d58388b4568",
                                "5cff9e5ed7ad1a09407397d4",
                                "5c48a2a42e221602b66d1e07",
                                "5f6372e2865db925d54f3869",
                                "615d8e2f1cb55961fa0fd9a4",
                                "56ea8180d2720bf2698b456a",
                                "5d02676dd7ad1a049e54f6dc",
                                "56ea6fafd2720b844b8b4593",
                                "5943ee5a86f77413872d25ec",
                                "609269c3b0e443224b421cc1",
                                "5c7fb51d2e2216001219ce11",
                                "5ea172e498dacb342978818e",
                                "5c6d710d2e22165df16b81e7",
                                "612e0e55a112697a4b3a66e7",
                                "5d440625a4b9361eec4ae6c5",
                                "5cc9b815d7f00c000e2579d6",
                                "5a7c147ce899ef00150bd8b8",
                                "5c7954d52e221600106f4cc7",
                                "59bffc1f86f77435b128b872",
                                "5a9fbb84a2750c00137fa685",
                                "626667e87379c44d557b7550",
                                "62669bccdb9ebb4daa44cd14",
                                "626a74340be03179a165e30c",
                                "6386120cd6baa055ad1e201c",
                                "63ac5c9658d0485fc039f0b8",
                                "6405ff6bd4578826ec3e377a"
                                ]
                            }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": -10,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -10,
                    "Velocity": -4.56,
                    "CenterOfImpact": 0.033,
                    "RaidModdable": false,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DurabilityBurnModificator": 1,
                    "HeatFactor": 0.93,
                    "CoolFactor": 0.98
                    },
                    "_proto": "55d3632e4bdc2d972f8b4569",
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
                _id: "c7332f93b1803894918b1085",
                overrideProperties: {
                    _id: "c7332f93b1803894918b1085",
                    "_name": "ultima_60_ak74",
                    "_parent": "5448bc234bdc2d3c308b4569",
                    "_type": "Item",
                    "_props": {
                    "Name": "mag_ak_izhmash_6L29_556x45_30",
                    "ShortName": "mag_ak_izhmash_6L29_556x45_30",
                    "Description": "mag_ak_izhmash_6L29_556x45_30",
                    "Weight": 0.215,
                    "BackgroundColor": "yellow",
                    "Width": 1,
                    "Height": 2,
                    "StackMaxSize": 1,
                    "RarityPvE": "Common",
                    "ItemSound": "mag_plastic",
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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 1,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -3,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": false,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "magAnimationIndex": 0,
                    "Cartridges": [
                        {
                        "_name": "cartridges",
                        "_id": "5ac66c5d5acfc4001718d316",
                        "_parent": "5ac66c5d5acfc4001718d314",
                        "_max_count": 30,
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
                                "5c0d5ae286f7741e46554302"
                                ]
                            }
                            ]
                        },
                        "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "CanFast": true,
                    "CanHit": false,
                    "CanAdmin": false,
                    "LoadUnloadModifier": 0,
                    "CheckTimeModifier": 0,
                    "CheckOverride": 0,
                    "ReloadMagType": "ExternalMagazine",
                    "VisibleAmmoRangesString": "1-3",
                    "MalfunctionChance": 0.098,
                    "TagColor": 0,
                    "TagName": "",
                    "MagazineWithBelt": false,
                    "BeltMagazineRefreshCount": 0,
                    "IsMagazineForStationaryWeapon": false
                    },
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
                _id: "6c65bc737ec596d376f49728",
                overrideProperties: {
                    _id: "6c65bc737ec596d376f49728",
                    "_name": "ultima_60_ak74",
                    "_parent": "5448bc234bdc2d3c308b4569",
                    "_type": "Item",
                    "_props": {
                    "Name": "mag_ak_izhmash_6L29_556x45_30",
                    "ShortName": "mag_ak_izhmash_6L29_556x45_30",
                    "Description": "mag_ak_izhmash_6L29_556x45_30",
                    "Weight": 0.215,
                    "BackgroundColor": "yellow",
                    "Width": 1,
                    "Height": 3,
                    "StackMaxSize": 1,
                    "RarityPvE": "Common",
                    "ItemSound": "mag_plastic",
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
                    "LootExperience": 10,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 2,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": -5,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": false,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 0,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "magAnimationIndex": 0,
                    "Cartridges": [
                        {
                        "_name": "cartridges",
                        "_id": "5ac66c5d5acfc4001718d316",
                        "_parent": "5ac66c5d5acfc4001718d314",
                        "_max_count": 45,
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
                                "5c0d5ae286f7741e46554302"
                                ]
                            }
                            ]
                        },
                        "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "CanFast": true,
                    "CanHit": false,
                    "CanAdmin": false,
                    "LoadUnloadModifier": 0,
                    "CheckTimeModifier": 15,
                    "CheckOverride": 0,
                    "ReloadMagType": "ExternalMagazine",
                    "VisibleAmmoRangesString": "1-3",
                    "MalfunctionChance": 0.098,
                    "TagColor": 0,
                    "TagName": "",
                    "MagazineWithBelt": false,
                    "BeltMagazineRefreshCount": 0,
                    "IsMagazineForStationaryWeapon": false
                    },
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
                _id: "9fc102e3eb838201af40f8c1",
                overrideProperties: {
                    _id: "9fc102e3eb838201af40f8c1",
                    "_name": "ultima_60_ak74",
                    "_parent": "5448bc234bdc2d3c308b4569",
                    "_type": "Item",
                    "_props": {
                    "Accuracy": 0,
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "yellow",
                    "BeltMagazineRefreshCount": 0,
                    "BlocksCollapsible": false,
                    "BlocksFolding": false,
                    "CanAdmin": false,
                    "CanFast": true,
                    "CanHit": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Cartridges": [
                        {
                        "_id": "57487c212459771f6d7b4342",
                        "_max_count": 60,
                        "_name": "cartridges",
                        "_parent": "55d482194bdc2d1d4e8b456b",
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
                                "5c0d5ae286f7741e46554302"
                                ]
                            }
                            ]
                        },
                        "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "CheckOverride": 0,
                    "CheckTimeModifier": 20,
                    "ConflictingItems": [],
                    "Description": "60-ти зарядный четырехрядный полимерный магазин Ижмаш 6Л31, под патрон 5.45x39 для АК-74 и совместимых. Выпущен малой партией и не попавший в серийное производство.",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "DropSoundType": "None",
                    "Durability": 100,
                    "EffectiveDistance": 0,
                    "Ergonomics": -14,
                    "ExamineExperience": 2,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 1,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [],
                    "HasShoulderContact": false,
                    "Height": 2,
                    "HideEntrails": false,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsAnimated": false,
                    "IsLockedafterEquip": false,
                    "IsMagazineForStationaryWeapon": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "mag_plastic",
                    "LoadUnloadModifier": 85,
                    "LootExperience": 10,
                    "Loudness": 0,
                    "MagazineWithBelt": false,
                    "MalfunctionChance": 0.299,
                    "MergesWithChildren": true,
                    "Name": "Магазин 6Л31 5.45x39 для АК-74 и совместимых на 60 патронов",
                    "NotShownInSlot": false,
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RaidModdable": true,
                    "Recoil": 0,
                    "ReloadMagType": "ExternalMagazine",
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "ShortName": "5.45x39 AK74 6Л31",
                    "SightingRange": 0,
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "TagColor": 0,
                    "TagName": "",
                    "ToolModdable": false,
                    "UniqueAnimationModID": 0,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Velocity": 0,
                    "VisibleAmmoRangesString": "1-3",
                    "Weight": 0.3,
                    "Width": 1,
                    "magAnimationIndex": 2
                    },
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
                _id: "40c899ffa5f2ce6fb9859136",
                _props: {
                    "Weight": 0.034,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "RarityPvE": "Not_exist",
                    "ItemSound": "mod",
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
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 0,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 300,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "CustomAimPlane": "",
                    "sightModType": "iron",
                    "ScopesCount": 1,
                    "AimSensitivity": [
                        [
                        0.65
                        ]
                    ],
                    "ModesCount": [
                        1
                    ],
                    "Zooms": [
                        [
                        1
                        ]
                    ],
                    "CalibrationDistances": [
                        [
                        100
                        ]
                    ]
                },
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
                _id: "a72a4b7f57a0e7e681a40e67",
                _props: {
                    "Weight": 0.034,
                    "BackgroundColor": "blue",
                    "Width": 1,
                    "Height": 1,
                    "StackMaxSize": 1,
                    "RarityPvE": "Not_exist",
                    "ItemSound": "mod",
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
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
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
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "Durability": 100,
                    "Accuracy": 0,
                    "Recoil": 0,
                    "Loudness": 0,
                    "EffectiveDistance": 0,
                    "Ergonomics": 0,
                    "Velocity": 0,
                    "RaidModdable": true,
                    "ToolModdable": true,
                    "BlocksFolding": false,
                    "BlocksCollapsible": false,
                    "IsAnimated": false,
                    "HasShoulderContact": false,
                    "SightingRange": 300,
                    "DoubleActionAccuracyPenaltyMult": 1,
                    "UniqueAnimationModID": 0,
                    "CustomAimPlane": "",
                    "sightModType": "iron",
                    "ScopesCount": 1,
                    "AimSensitivity": [
                        [
                        0.65
                        ]
                    ],
                    "ModesCount": [
                        1
                    ],
                    "Zooms": [
                        [
                        1
                        ]
                    ],
                    "CalibrationDistances": [
                        [
                        100
                        ]
                    ]
                },
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
            if (this.data[x]._id != undefined) {
                id = this.data[x]._id;
            }
            else {
                id = x;
            }
            const item = {
                itemTplToClone: this.data[x].itemTplToClone,
                overrideProperties: this.data[x].overrideProperties,
                _id: id,
                fleaPriceRoubles: this.data[x].fleaPriceRoubles,
                parentId: this.data[x].parentId,
                handbookPriceRoubles: this.data[x].handbookPriceRoubles,
                handbookParentId: this.data[x].handbookParentId,
                locales: this.data[x].locales
            };
            console.log(item);
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
        MMA.traderGenerateAssortFromPreset("220020DF056DF05600000000", 65000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        MMA.traderGenerateAssortFromPreset("220020DF156DF15600000000", 60000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        MMA.loadModifierObj(ModifyInfos);
        for (let lang in this.DBlocales) {
            this.DBlocales[lang]["220020DF156DF15600000000"] = "";
        }
    }
}
module.exports = ZLR_GRAU;
//# sourceMappingURL=ZLR_GRAU.js.map