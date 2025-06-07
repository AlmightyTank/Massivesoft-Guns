"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const assortConfig = require("../../../config/Mass_NCODMag/assortConfig.json");
const mod_slot_1 = require("../../enum/mod_slot");
const handbookCategory_1 = require("../../enum/handbookCategory");
const IDDL = {
    MAG_PMAG_30_556_W: "55802d5f4bdc2dac148b458e",
    MAG_PMAG_30_556: "5d1340b3d7ad1a0b52682ed7",
    MAG_PMAG_20_308: "5a3501acc4a282000d72293a",
    MAG_TROY_BATTLE_MAG: "5c6d46132e221601da357d56",
    MAG_SCARH_20: "618168dc8004cc50514c34fc",
    MAG_STANAG_30: "55d4887d4bdc2d962f8b4570",
    MAG_MAGPUL_D60: "59c1383d86f774290a37e0ca",
    MAG_AKM_75: "5cbdc23eae9215001136a407",
    NMAG_AR10_XMAG_30: "02f02fae10ae100000000000",
    NMAG_MK17_DRUM_50: "02F02FCCAEB0000000000000",
    NMAG_STANAG_COD_100: "02f02ff36f36f36000000000",
    NMAG_AR10_DRUM: "02F751D60CCC000000000000",
    NMAG_STANAG_COD_060: "02F556A60A60000000000000",
    NMAG_MK17_BIG_DRUM: "02F02B1BDB87625101700000",
    NMAG_STANAG_COD_040: "02F556A40A40000000000000",
    NMAG_STANAG_COD_020: "02F020A16A16020000000000",
    NMAG_AKM_DRUM_100: "02F02FABAAABAA02F0000000",
    NMAG_MP7_XRK_50: "02f02faab7aab70000000000",
    NMAG_MP9_FJX_50: "02f02faab9aab90000000000",
    NMAG_PP19_45: "02f02bb19bb1945000000000",
    NMAG_VECTOR45_50: "02f02fec0ec0045045000000"
};
const cpntName = "Mass_NCODMag";
class Mass_NCODMag extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    data;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
        this.assortMap = new Map();
        this.data = {
            "ar10_xmag_762x51_30": {
                newId: IDDL.NMAG_AR10_XMAG_30,
                "itemTplToClone": IDDL.MAG_PMAG_20_308,
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_ar10_xmag_762x51_30.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_id": "cartridgear10_xmag_762x51_30",
                            "_max_count": 30,
                            "_name": "cartridges",
                            "_parent": "ar10_xmag_762x51_30",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "5a6086ea4f39f99cd479502f",
                                            "5a608bf24f39f98ffc77720e",
                                            "58dd3ad986f77403051cba8f",
                                            "5e023e53d4353e3302577c4c",
                                            "5efb0c1bd79ff02a1f5e68d9",
                                            "5e023e6e34d52a55c3304f71",
                                            "5e023e88277cce2b522ff2b1",
                                            "6529243824cbe3c74a05e5c1",
                                            "6529302b8c26af6326029fb7"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "magAnimationIndex": 4,
                    "ItemSound": "mag_plastic",
                    "MagazineWithBelt": false,
                    "CheckOverride": 0,
                    "ExtraSizeDown": 1, //2
                    "BackgroundColor": "yellow",
                    "Weight": 0.44,
                    "Width": 1,
                    "Height": 2, //3
                    "CheckTimeModifier": 15,
                    "LoadUnloadModifier": 10,
                    "MalfunctionChance": 0.025,
                    "Ergonomics": -6,
                    "VisibleAmmoRangesString": "1-8"
                },
                "locales": {
                    "en": {
                        "name": "7.62x51mm AR-10 polymer 30-Round magazine",
                        "shortName": "AR-10 30",
                        "description": "A 30-round 7.62x51mm magazine designed for increased reliability in the field."
                    },
                    "ch": {
                        "name": "AR-10 7.62x51mm 聚合物 30发弹匣",
                        "shortName": "AR-10 30",
                        "description": "A 30-round 7.62x51mm magazine designed for increased reliability in the field."
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
                "fleaPriceRoubles": 6450,
                "handbookPriceRoubles": 6450,
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
                        "count": 6450,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "mk17_xrk_drum_762x51_50": {
                newId: IDDL.NMAG_MK17_DRUM_50,
                "itemTplToClone": IDDL.MAG_SCARH_20,
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_mk17_xrk_drum_762x51_50.bundle",
                        "rcid": ""
                    },
                    "BackgroundColor": "yellow",
                    "Cartridges": [
                        {
                            "_id": "mk17_xrk_drum_762x51_50_cart",
                            "_max_count": 50,
                            "_name": "cartridges",
                            "_parent": "mk17_xrk_drum_762x51_50",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "5a6086ea4f39f99cd479502f",
                                            "5a608bf24f39f98ffc77720e",
                                            "58dd3ad986f77403051cba8f",
                                            "5e023e53d4353e3302577c4c",
                                            "5efb0c1bd79ff02a1f5e68d9",
                                            "5e023e6e34d52a55c3304f71",
                                            "5e023e88277cce2b522ff2b1"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "Weight": 0.42,
                    "magAnimationIndex": 4,
                    "Width": 1,
                    "CheckTimeModifier": 20,
                    "LoadUnloadModifier": 60,
                    "MalfunctionChance": 0.035,
                    "Ergonomics": -18,
                    "VisibleAmmoRangesString": "1-4"
                },
                "locales": {
                    "en": {
                        "name": "7.62x51 XRK 50-Round SCAR-H drum magazine",
                        "shortName": "XRK 50",
                        "description": "A 50-round 7.62x51mm drum magazine manufactured by XRK designed for the SCAR-H rifle platform."
                    },
                    "ch": {
                        "name": "XRK 7.62x51mm 50发 SCAR-H 弹鼓",
                        "shortName": "XRK 50",
                        "description": "A 50-round 7.62x51mm drum magazine manufactured by XRK designed for the SCAR-H rifle platform."
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
                "fleaPriceRoubles": 16800,
                "handbookPriceRoubles": 16800,
                "addtoTraders": true,
                "traderId": NTrader_1.NTrader.Default,
                "traderItems": [
                    {
                        "unlimitedCount": true,
                        "stackObjectsCount": 8900
                    }
                ],
                "barterScheme": [
                    {
                        "count": 14000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "stanag_cod_100": {
                newId: IDDL.NMAG_STANAG_COD_100,
                "itemTplToClone": IDDL.MAG_TROY_BATTLE_MAG,
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_stanag_cod_100.bundle",
                        "rcid": ""
                    },
                    "BackgroundColor": "yellow",
                    "Cartridges": [
                        {
                            "_id": "stanag_cod_100_cart",
                            "_max_count": 100,
                            "_name": "cartridges",
                            "_parent": "stanag_cod_100",
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
                    "ExtraSizeDown": 1,
                    "Weight": 0.74,
                    "Width": 2,
                    "Height": 2,
                    "CheckTimeModifier": 27,
                    "LoadUnloadModifier": 27,
                    "MalfunctionChance": 0.39,
                    "Ergonomics": -25,
                    "VisibleAmmoRangesString": "1-3"
                },
                "locales": {
                    "en": {
                        "name": "C-MAG 5.56x45 STANAG 100-Round drum magazine",
                        "shortName": "C-MAG 100",
                        "description": "A 100-round 5.56x45 c-mag style drum magazine designed for AR-15."
                    },
                    "ch": {
                        "name": "C-MAG 5.56x45 100发STANAG弹鼓",
                        "shortName": "C-MAG 100",
                        "description": "A 100-round 5.56x45 c-mag style drum magazine designed for AR-15."
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
                "fleaPriceRoubles": 23000,
                "handbookPriceRoubles": 23000,
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
                        "count": 23000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "ar_10_drum": {
                newId: IDDL.NMAG_AR10_DRUM,
                "itemTplToClone": IDDL.MAG_PMAG_20_308,
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_ar10_drum_762x51_50.bundle",
                        "rcid": ""
                    },
                    "BackgroundColor": "yellow",
                    "Cartridges": [
                        {
                            "_id": "02F751D60CCC000000000001",
                            "_max_count": 50,
                            "_name": "cartridges",
                            "_parent": IDDL.NMAG_AR10_DRUM,
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "5a6086ea4f39f99cd479502f",
                                            "5a608bf24f39f98ffc77720e",
                                            "58dd3ad986f77403051cba8f",
                                            "5e023e53d4353e3302577c4c",
                                            "5efb0c1bd79ff02a1f5e68d9",
                                            "5e023e6e34d52a55c3304f71",
                                            "5e023e88277cce2b522ff2b1",
                                            "6529243824cbe3c74a05e5c1",
                                            "6529302b8c26af6326029fb7"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "Weight": 0.60,
                    "Ergonomics": -18,
                    "MalfunctionChance": 0.201,
                    "LoadUnloadModifier": 65,
                    "magAnimationIndex": 0,
                    "CheckTimeModifier": 22,
                    "VisibleAmmoRangesString": "1-6"
                },
                "locales": {
                    "en": {
                        "name": "6.8x51 Cronen 50-round drum magazine",
                        "shortName": "Cronen 50",
                        "description": "A 50-round drum magazine for 6.8x51 and 7.62x51 NATO ammunition."
                    },
                    "ch": {
                        "name": "Cronen 6.8x51 50发弹鼓",
                        "shortName": "Cronen 50",
                        "description": "Cronen制造的50发聚合物弹鼓，适用6.8x51和7.62x51弹。"
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
                "fleaPriceRoubles": 23000,
                "handbookPriceRoubles": 23000,
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
                        "count": 16000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "stanag_cod_60": {
                newId: IDDL.NMAG_STANAG_COD_060,
                "itemTplToClone": IDDL.MAG_MAGPUL_D60,
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_stanag_kimura_drum_60.bundle",
                        "rcid": ""
                    },
                    "BackgroundColor": "yellow",
                    "Cartridges": [
                        {
                            "_id": "02F556A60A60000000000000_cart",
                            "_max_count": 60,
                            "_name": "cartridges",
                            "_parent": IDDL.NMAG_STANAG_COD_060,
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
                    "Ergonomics": -15
                },
                "locales": {
                    "ch": {
                        "name": "Kimura 5.56x45 60发STANAG弹鼓",
                        "shortName": "Kimura 60",
                        "description": "A 60-round 5.56x45mm polymer drum magazine designed for increased reliability in the field."
                    },
                    "en": {
                        "name": "5.56x45 Kimura STANAG 60-round drum magazine",
                        "shortName": "Kimura 60",
                        "description": "A 60-round 5.56x45mm polymer drum magazine designed for increased reliability in the field."
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
                "fleaPriceRoubles": 16000,
                "handbookPriceRoubles": 16000,
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
                        "count": 16000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "mk17_762x51_big_drum": {
                newId: IDDL.NMAG_MK17_BIG_DRUM,
                "itemTplToClone": IDDL.MAG_SCARH_20,
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_mk17_762x51_big_drum.bundle",
                        "rcid": ""
                    },
                    "BackgroundColor": "yellow",
                    "Cartridges": [
                        {
                            "_id": "mk17_xrk_drum_762x51_50_cart",
                            "_max_count": 100,
                            "_name": "cartridges",
                            "_parent": "mk17_xrk_drum_762x51_50",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "5a6086ea4f39f99cd479502f",
                                            "5a608bf24f39f98ffc77720e",
                                            "58dd3ad986f77403051cba8f",
                                            "5e023e53d4353e3302577c4c",
                                            "5efb0c1bd79ff02a1f5e68d9",
                                            "5e023e6e34d52a55c3304f71",
                                            "5e023e88277cce2b522ff2b1"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "Weight": 0.81,
                    "magAnimationIndex": 4,
                    "Width": 2,
                    "Height": 2,
                    "CheckTimeModifier": 40,
                    "LoadUnloadModifier": 65,
                    "MalfunctionChance": 0.055,
                    "Ergonomics": -26,
                    "VisibleAmmoRangesString": "1-4"
                },
                "locales": {
                    "en": {
                        "name": "7.62x51 100-Round SCAR-H drum magazine",
                        "shortName": "Mk17 100",
                        "description": "A 100-round 7.62x51mm drum magazine designed for the SCAR-H rifle platform."
                    },
                    "ch": {
                        "name": "7.62x51mm 100发 SCAR-H 弹鼓",
                        "shortName": "Mk17 100",
                        "description": "A 100-round 7.62x51mm drum magazine designed for the SCAR-H rifle platform."
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
                "fleaPriceRoubles": 26800,
                "handbookPriceRoubles": 26800,
                "addtoTraders": true,
                "traderId": NTrader_1.NTrader.Default,
                "traderItems": [
                    {
                        "unlimitedCount": true,
                        "stackObjectsCount": 8900
                    }
                ],
                "barterScheme": [
                    {
                        "count": 24000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "stanag_cod_40": {
                newId: IDDL.NMAG_STANAG_COD_040,
                "itemTplToClone": IDDL.MAG_STANAG_30,
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_stanag_cod40.bundle",
                        "rcid": ""
                    },
                    "BackgroundColor": "yellow",
                    "Weight": 0.145,
                    "Height": 3,
                    "Cartridges": [
                        {
                            "_id": "02F556A40A40000000000000_CART",
                            "_max_count": 40,
                            "_name": "cartridges",
                            "_parent": IDDL.NMAG_STANAG_COD_040,
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
                    "ExtraSizeDown": 2,
                    "ExtraSizeForceAdd": false,
                    "magAnimationIndex": 3,
                    "VisibleAmmoRangesString": "1-3",
                    "Ergonomics": -8,
                    "LoadUnloadModifier": 11,
                    "CheckTimeModifier": 17
                },
                "locales": {
                    "ch": {
                        "name": "AR-15 5.56x45 40发STANAG弹匣",
                        "shortName": "STANAG 40",
                        "description": "40发的 AR-15弹匣是为5.56x45子弹设计的，符合STANAG 4179标准化协定的弹匣。\nSTANAG 4179——标准化协定在1980年被NATO成员国批准，目的是统一盟军人员的弹药和弹匣。"
                    },
                    "en": {
                        "name": "5.56x45 AR-15 STANAG 40-round magazine",
                        "shortName": "STANAG 40",
                        "description": "A 40-round metal AR-15 magazine designed in compliance with the STANAG 4179 standard for 5.56x45 ammo.\nThe STANAG 4179 standard was approved by NATO members in 1980 for the unification of allied personnel ammo and magazines."
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
                "fleaPriceRoubles": 10000,
                "handbookPriceRoubles": 10000,
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
                        "count": 10000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "stanag_cod_20": {
                newId: IDDL.NMAG_STANAG_COD_020,
                "itemTplToClone": "5448c1d04bdc2dff2f8b4569",
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_stanag_cod20.bundle",
                        "rcid": ""
                    },
                    Weight: 0.091,
                    MalfunctionChance: 0.06
                },
                "locales": {
                    "ch": {
                        "name": "AR-15 5.56x45 20发STANAG弹匣",
                        "shortName": "STANAG 20",
                        "description": "20发的 AR-15弹匣是为5.56x45子弹设计的，符合STANAG 4179标准化协定的弹匣。\nSTANAG 4179——标准化协定在1980年被NATO成员国批准，目的是统一盟军人员的弹药和弹匣。"
                    },
                    "en": {
                        "name": "5.56x45 AR-15 STANAG 20-round magazine",
                        "shortName": "STANAG 20",
                        "description": "A 20-round metal AR-15 magazine designed in compliance with the STANAG 4179 standard for 5.56x45 ammo.\nThe STANAG 4179 standard was approved by NATO members in 1980 for the unification of allied personnel ammo and magazines."
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
                "fleaPriceRoubles": 6000,
                "handbookPriceRoubles": 6000,
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
                        "count": 3000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "akm_drum_100": {
                newId: IDDL.NMAG_AKM_DRUM_100,
                "itemTplToClone": IDDL.MAG_AKM_75,
                "parentId": this.DBitems[IDDL.MAG_AKM_75]._parent,
                "handbookParentId": handbookCategory_1.handbookCategory.Magazines,
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        "path": "assets/mags/mag_ak_drum_762x39_100.bundle",
                        "rcid": ""
                    },
                    Weight: 1.12,
                    MalfunctionChance: 0.5,
                    "Cartridges": [
                        {
                            "_name": "cartridges",
                            "_id": "5cbdc23eae9215001136a409",
                            "_parent": "5cbdc23eae9215001136a407",
                            "_max_count": 100,
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "59e655cb86f77411dc52a77b",
                                            "59e6542b86f77411dc52a77a",
                                            "59e6658b86f77411d949b250",
                                            "5f0596629e22f464da6bbdd9",
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
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "VisibleAmmoRangesString": "1-4",
                    "LoadUnloadModifier": 95,
                    "CheckTimeModifier": 35,
                    "Ergonomics": -29,
                },
                "locales": {
                    "ch": {
                        "name": "100发AK兼容弹鼓",
                        "shortName": "100rd",
                        "description": "RPK的100发7.62x39金属弹鼓，可供7.62x39的AK兼容武器使用。"
                    },
                    "en": {
                        "name": "AK 7.62x39 100-round drum magazine",
                        "shortName": "100rd",
                        "description": "A 100-round metal drum magazine for the RPK light machine gun. It fits in 7.62x39 AK and compatible weapon systems. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons."
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
                "fleaPriceRoubles": 36000,
                "handbookPriceRoubles": 36000,
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
                        "count": 30000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1,
                "addtoBots": false,
                "addtostaticlootcontainer": false,
                "StaticLootContainer": "LOOTCONTAINER_WEAPON_BOX_4X4",
                "Probability": 250
            },
            "mp7_magazine_drum": {
                newId: IDDL.NMAG_MP7_XRK_50,
                "itemTplToClone": "5ba26586d4351e44f824b340",
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        path: "assets/mags/mag_mp7_xrk_46x30_100.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_id": "5ba26586d4351e44f824b341",
                            "_max_count": 50,
                            "_name": "cartridges",
                            "_parent": "5ba26586d4351e44f824b340",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "5ba26812d4351e003201fef1",
                                            "5ba26835d4351e0035628ff5",
                                            "5ba2678ad4351e44f824b344",
                                            "5ba26844d4351e00334c9475",
                                            "64b6979341772715af0f9c39"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "magAnimationIndex": 2,
                    "ItemSound": "mag_plastic",
                    "MagazineWithBelt": false,
                    "CheckOverride": 0,
                    "ExtraSizeDown": 1,
                    "BackgroundColor": "yellow",
                    "Weight": 0.37,
                    "Width": 1,
                    "Height": 2,
                    "CheckTimeModifier": 12,
                    "LoadUnloadModifier": 14,
                    "MalfunctionChance": 0.22,
                    "Ergonomics": -12
                },
                "locales": {
                    "en": {
                        "name": "MP7 4.6x30mm XRK 50-round drum magazine",
                        "shortName": "XRK 50",
                        "description": "A 50-round 4.6x30mm drum magazine manufactured by XRK for MP7."
                    },
                    "ch": {
                        "name": "MP7 4.6x30mm XRK 50发弹鼓",
                        "shortName": "XRK 50",
                        "description": "A 50-round 4.6x30mm drum magazine manufactured by XRK for MP7."
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
                "fleaPriceRoubles": 16000,
                "handbookPriceRoubles": 16000,
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
                        "count": 16500,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1
            },
            "mp9_magazine_drum": {
                newId: IDDL.NMAG_MP9_FJX_50,
                "itemTplToClone": "5de8eac42a78646d96665d91",
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        path: "assets/mags/mag_mp9_fjk_drum_9x19_60.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_id": "5de8eac42a78646d96665d92",
                            "_max_count": 50,
                            "_name": "cartridges",
                            "_parent": "5de8eac42a78646d96665d91",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "5efb0da7a29a85116f6ea05f",
                                            "5c3df7d588a4501f290594e5",
                                            "58864a4f2459770fcc257101",
                                            "56d59d3ad2720bdb418b4577",
                                            "5c925fa22e221601da359b7b",
                                            "5a3c16fe86f77452b62de32a",
                                            "5efb0e16aeb21837e749c7ff",
                                            "5c0d56a986f774449d5de529",
                                            "64b7bbb74b75259c590fa897"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "ItemSound": "mag_plastic",
                    "MagazineWithBelt": false,
                    "CheckOverride": 0,
                    "ExtraSizeDown": 1,
                    "BackgroundColor": "yellow",
                    "Weight": 0.385,
                    "Width": 1,
                    "Height": 2,
                    "CheckTimeModifier": 15,
                    "LoadUnloadModifier": 15,
                    "MalfunctionChance": 0.17,
                    "Ergonomics": -10
                },
                "locales": {
                    "en": {
                        "name": "MP9 9x19 FJX 50-round drum magazine",
                        "shortName": "FJX 50",
                        "description": "A 50-round 9x19mm drum magazine manufactured by FJX for MP9."
                    },
                    "ch": {
                        "name": "MP9 9x19 FJX 50发弹鼓",
                        "shortName": "FJX 50",
                        "description": "A 50-round 9x19mm drum magazine manufactured by FJX for MP9."
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
                "fleaPriceRoubles": 16000,
                "handbookPriceRoubles": 16000,
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
                        "count": 16500,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1
            },
            "pp-19_magazine": {
                newId: IDDL.NMAG_PP19_45,
                "itemTplToClone": "599860ac86f77436b225ed1a",
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        path: "assets/mags/mag_pp-19-01_9x19_big.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_id": "599860ac86f77436b225ed1b",
                            "_max_count": 45,
                            "_name": "cartridges",
                            "_parent": "599860ac86f77436b225ed1a",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "5efb0da7a29a85116f6ea05f",
                                            "5c3df7d588a4501f290594e5",
                                            "58864a4f2459770fcc257101",
                                            "56d59d3ad2720bdb418b4577",
                                            "5c925fa22e221601da359b7b",
                                            "5a3c16fe86f77452b62de32a",
                                            "5efb0e16aeb21837e749c7ff",
                                            "5c0d56a986f774449d5de529",
                                            "64b7bbb74b75259c590fa897"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "ItemSound": "mag_plastic",
                    "MagazineWithBelt": false,
                    "CheckOverride": 0,
                    "ExtraSizeDown": 1,
                    "BackgroundColor": "yellow",
                    "Weight": 0.203,
                    "Width": 1,
                    "Height": 2,
                    "CheckTimeModifier": 10,
                    "LoadUnloadModifier": 10,
                    "MalfunctionChance": 0.12,
                    "Ergonomics": -6
                },
                "locales": {
                    "en": {
                        "name": "PP-19-01 9x19 45-round magazine",
                        "shortName": "PP-19-01 45",
                        "description": "A 45-round 9x19mm magazine for PP-19-01."
                    },
                    "ch": {
                        "name": "PP-19-01 9x19 45发弹匣",
                        "shortName": "PP-19-01 45",
                        "description": "A 45-round 9x19mm magazine for PP-19-01."
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
                "fleaPriceRoubles": 12000,
                "handbookPriceRoubles": 12000,
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
                        "count": 12000,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1
            },
            "vector_45_drum": {
                newId: IDDL.NMAG_VECTOR45_50,
                "itemTplToClone": "5fb651dc85f90547f674b6f4",
                "parentId": "5448bc234bdc2d3c308b4569",
                "handbookParentId": "5b5f754a86f774094242f19b",
                "overrideProperties": {
                    "ExaminedByDefault": true,
                    "Prefab": {
                        path: "assets/mags/mag_glock_glock_ft_1143x23_drum.bundle",
                        "rcid": ""
                    },
                    "Cartridges": [
                        {
                            "_id": "5fb651dc85f90547f674b6f5",
                            "_max_count": 50,
                            "_name": "cartridges",
                            "_parent": "5fb651dc85f90547f674b6f4",
                            "_props": {
                                "filters": [
                                    {
                                        "Filter": [
                                            "5e81f423763d9f754677bf2e",
                                            "5efb0cabfb3e451d70735af5",
                                            "5efb0fc6aeb21837e749c801",
                                            "5efb0d4f4bc50b58e81710f3",
                                            "5ea2a8e200685063ec28c05a"
                                        ]
                                    }
                                ]
                            },
                            "_proto": "5748538b2459770af276a261"
                        }
                    ],
                    "magAnimationIndex": 3,
                    "ItemSound": "mag_plastic",
                    "CheckOverride": 0,
                    "ExtraSizeDown": 1,
                    "Weight": 0.30,
                    "Width": 1,
                    "Height": 2,
                    "CheckTimeModifier": 22,
                    "LoadUnloadModifier": 20,
                    "MalfunctionChance": 0.20,
                    "Ergonomics": -12
                },
                "locales": {
                    "en": {
                        "name": "Glock .45 ACP Forge Tac 50-round drum magazine",
                        "shortName": "Forge Tac 50",
                        "description": "A 50-round drum magazine manufactured by Forge Tac for Glock in .45 ACP."
                    },
                    "ch": {
                        "name": "Forge Tac .45 ACP Glock弹鼓",
                        "shortName": "Forge Tac 50",
                        "description": "A 50-round drum magazine manufactured by Forge Tac for Glock in .45 ACP."
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
                "fleaPriceRoubles": 20000,
                "handbookPriceRoubles": 20000,
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
                        "count": 19500,
                        "_tpl": "ROUBLES"
                    }
                ],
                "loyallevelitems": 1
            }
        };
    }
    onLoadMod() {
        const CustomItem = this.container.resolve("CustomItemService");
        const MMA = this.MMA;
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
            for (const presetId in assortConfig) {
                if (this.assortMap.has(presetId)) {
                    continue;
                }
                const config = assortConfig[presetId];
                this.MMA.traderAddItems(
                    presetId,
                    config.price,
                    NTrader_1.NTrader.Default,
                    config.loyaltyLevel
                );
                this.assortMap.set(presetId, true);
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
                if (this.data[x].modSlot.includes(mod_slot_1.mod_slot.magazine)) {
                    var MODINFO = {
                        ItemId: id,
                        MagCloneCaliberTable: "itself"
                    };
                    MMA.modifyItems(MODINFO);
                }
            }
        }
        MMA.itemAddConflict("622f02437762f55aaa68ac85", IDDL.NMAG_STANAG_COD_100);
        MMA.itemAddConflict("622f02437762f55aaa68ac85", IDDL.NMAG_STANAG_COD_060);
        MMA.itemAddConflict("622f02437762f55aaa68ac85", IDDL.NMAG_STANAG_COD_040);
        MMA.itemAddConflict("622f02437762f55aaa68ac85", IDDL.NMAG_STANAG_COD_020);
    }
}
module.exports = Mass_NCODMag;
//# sourceMappingURL=Mass_NCODMag.js.map