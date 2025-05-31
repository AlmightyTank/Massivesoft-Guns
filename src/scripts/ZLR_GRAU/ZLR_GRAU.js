"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const handbookCategory_1 = require("../../enum/handbookCategory");

const IDDL = {
    WEAPON_GRAU762: "5dbcb66f4827cd761fb3797a",
    WEAPON_GRAU556: "b6c589ec2535085340807057",
    WEAPON_SCARH762: "6165ac306ef05c2ce828ef74",
    WEAPON_SCARL556: "618428466ef05c2ce828f218",
    BARREL_GRAU762_SHORT: "4027660efe68e9f689dabfd6",
    BARREL_GRAU556_SHORT: "746748fd271ef2605cd446ae",
    BARREL_GRAU762_STANDARD: "c1bcaa54461cd1767be1fb7c",
    BARREL_GRA556_STANDARD: "6839c2a65a6b9b1ec4ee242f",
    BARREL_GRAU762_HVY: "6839c2a11d2d870770e7d83d",
    BARREL_GRA556_HVY: "22dd6a0c75e85c67cc104ad1",
    BARREL_GRAU762_LIGHT: "6839c29832fe7c19b30bf63c",
    BARREL_GRA556_LIGHT: "2b24f9c80888335e12256b4c",
    BARREL_GRAU762_HG550: "6839c28f09e624ce576fcd64",
    BARREL_GRA556_HG550: "6839c289232e478211e4327c",
    BARREL_GRAU762_ARCH: "6839c284c5496e940d39549b",
    BARREL_GRA556_ARCH: "6839c27e13b8e094b67bcf09",
    BARRAL_SCARH762: "6183b0711cb55961fa0fdcad",
    BARRAL_SCARL556: "6839c29ccd8635da17d72335",
    RECIEVER_GRAU762: "e19730b94f5b34b39c82fd25",
    RECIEVER_GRAU556: "3b8f80d2f5acca00e55ca855",
    RECIEVER_SCARH762: "6165aeedfaa1272e431521e3",
    RECIEVER_SCARH556: "618426d96c780c1e710c9b9f",
    PISTOLGRIP_GRAU_STD: "98f081647a654c307492ae67",
    PISTOLGRIP_GRAU_CUST: "773b42aa3dad8cab5bcd6308",
    PISTOLGRIP_GRAU_LIGHT: "05da8ea1317e2fb752129d23",
    PISTOLGRIP_GRAU_HVY: "dea7d4b4b16a4e82ea03453e",
    PISTOLGRIP_AR15_COLT_A2: "55d4b9964bdc2d1d4e8b456e",
    HANDGUARD_GRAU_STAND: "74a2de7548ee8bad037c18ea",
    HANDGUARD_GRAU_LIGHT: "c71224cf97f6ac5185217297",
    HANDGUARD_GRAU_ARCH: "c8e19c9d723ed9af90ee92bf",
    HANDGUARD_GRAU_HG550: "e9e307ec92fbe21d8dd61adf",
    HANDGUARD_GRAU_SHORT: "a87a2f656432103e57a4e984",
    HANDGUARD_GRAU_HEAVY: "43a4154a07e886db8ab1886b",
    HANDGUARD_AR10_KAC: "5df916dfbb49d91fb446d6b9",
    MOUNT_GRAU_STAND: "63262efcfa6fb45914ea990e",
    MOUNT_M_LOK_CANTILEVER_RAIL_MOUNT: "6269220d70b6c02e665f2635",
    STOCK_GRAU_STAND: "2986f5dbe25acdbeff9ba8f2",
    STOCK_GRAU_SPEC: "a422d5cc59d7bcbd1d25d908",
    STOCK_GRAU_HVY: "7494980095aa45a8384469a8",
    STOCK_GRAU_LIGHT: "523f5d60f73446c477407dfd",
    STOCK_GRAU_TUBE: "c084d0bc91c7fa464257d868",
    STOCK_GRAU_RAIL: "dcf40ea776b8c6c39ed9cd4c",
    NO_STOCK_GRAU: "a787e1509ef7500abfc8fc2d",
    STOCK_AK_MAGPUL_ZHUKOV: "5b0e794b5acfc47a877359b2",
    NO_STOCK_RSA_SCAR: "66ffc246a81a4f85e70d4d06",
    STOCK_AK_CAA_AKTS: "5cf518cfd7f00c065b422214",
    MOUNT_MK16_PWS_SRX: "61965d9058ef8c428c287e0d",
    MAG_GRAU_556x45_30: "6839c2781fa127bcf394679b",
    MAG_GRAU_556x45_EXT: "6839c26f775af6bd25bd4a4f",
    MAG_GRAU_556x45_DOUBLE: "6839c2605651b3acaea4d62c",
    MAG_AK47_545X39_60: "55d482194bdc2d1d4e8b456b",
    FRONT_SIGHT_GRAU_HG550: "6839c2588a8ef4de6c77baf0",
    FRONT_SIGHT_GRAU_ARCH: "6839c248ca430b647bf66eb6",
    FRONT_SIGHT_MOSIN: "5ae099875acfc4001714e593"
};
const List_Handguards = [
    IDDL.HANDGUARD_GRAU_STAND,
    IDDL.HANDGUARD_GRAU_LIGHT,
    IDDL.HANDGUARD_GRAU_ARCH,
    IDDL.HANDGUARD_GRAU_HG550,
    IDDL.HANDGUARD_GRAU_SHORT,
    IDDL.HANDGUARD_GRAU_HEAVY
];
const List_Barrels = [
    IDDL.BARREL_GRAU762_SHORT,
    IDDL.BARREL_GRAU556_SHORT,
    IDDL.BARREL_GRAU762_STANDARD,
    IDDL.BARREL_GRA556_STANDARD,
    IDDL.BARREL_GRAU762_HVY,
    IDDL.BARREL_GRA556_HVY,
    IDDL.BARREL_GRAU762_LIGHT,
    IDDL.BARREL_GRA556_LIGHT,
    IDDL.BARREL_GRAU762_HG550,
    IDDL.BARREL_GRA556_HG550,
    IDDL.BARREL_GRAU762_ARCH,
    IDDL.BARREL_GRA556_ARCH
];
const List_PGs = [
    IDDL.PISTOLGRIP_GRAU_STD,
    IDDL.PISTOLGRIP_GRAU_CUST,
    IDDL.PISTOLGRIP_GRAU_LIGHT,
    IDDL.PISTOLGRIP_GRAU_HVY
];
const List_Stocks = [
    IDDL.STOCK_GRAU_STAND,
    IDDL.STOCK_GRAU_SPEC,
    IDDL.STOCK_GRAU_HVY,
    IDDL.STOCK_GRAU_LIGHT,
    IDDL.STOCK_GRAU_TUBE,
    IDDL.STOCK_GRAU_RAIL
];

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
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.WEAPON_GRAU762,
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
                itemTplToClone: IDDL.RECIEVER_SCARH762,
                newId: IDDL.RECIEVER_GRAU762,
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
                itemTplToClone: IDDL.WEAPON_SCARL556,
                newId: IDDL.WEAPON_GRAU556,
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
                itemTplToClone: IDDL.RECIEVER_SCARH556,
                newId: IDDL.RECIEVER_GRAU556,
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
                itemTplToClone: IDDL.PISTOLGRIP_AR15_COLT_A2,
                newId: IDDL.PISTOLGRIP_GRAU_STD,
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
                itemTplToClone: IDDL.PISTOLGRIP_AR15_COLT_A2,
                newId: IDDL.PISTOLGRIP_GRAU_CUST,
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
                itemTplToClone: IDDL.PISTOLGRIP_AR15_COLT_A2,
                newId: IDDL.PISTOLGRIP_GRAU_LIGHT,
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
                itemTplToClone: IDDL.PISTOLGRIP_AR15_COLT_A2,
                newId: IDDL.PISTOLGRIP_GRAU_HVY,
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
            handguard_grau_standard: {
                itemTplToClone: IDDL.HANDGUARD_AR10_KAC,
                newId: IDDL.HANDGUARD_GRAU_STAND,
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
                itemTplToClone: IDDL.HANDGUARD_AR10_KAC,
                newId: IDDL.HANDGUARD_GRAU_LIGHT,
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
                itemTplToClone: IDDL.HANDGUARD_AR10_KAC,
                newId: IDDL.HANDGUARD_GRAU_ARCH,
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
                itemTplToClone: IDDL.MOUNT_M_LOK_CANTILEVER_RAIL_MOUNT,
                newId: IDDL.MOUNT_GRAU_STAND,
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
                itemTplToClone: IDDL.HANDGUARD_AR10_KAC,
                newId: IDDL.HANDGUARD_GRAU_HG550,
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
                itemTplToClone: IDDL.HANDGUARD_AR10_KAC,
                newId: IDDL.HANDGUARD_GRAU_SHORT,
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
                itemTplToClone: IDDL.HANDGUARD_AR10_KAC,
                newId: IDDL.HANDGUARD_GRAU_HEAVY,
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
                itemTplToClone: IDDL.STOCK_AK_MAGPUL_ZHUKOV,
                newId: IDDL.STOCK_GRAU_STAND,
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
                itemTplToClone: IDDL.NO_STOCK_RSA_SCAR,
                newId: IDDL.NO_STOCK_GRAU,
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
                itemTplToClone: IDDL.STOCK_AK_MAGPUL_ZHUKOV,
                newId: IDDL.STOCK_GRAU_SPEC,
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
                itemTplToClone: IDDL.STOCK_AK_MAGPUL_ZHUKOV,
                newId: IDDL.STOCK_GRAU_HVY,
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
                itemTplToClone: IDDL.STOCK_AK_MAGPUL_ZHUKOV,
                newId: IDDL.STOCK_GRAU_LIGHT,
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
                itemTplToClone: IDDL.STOCK_AK_CAA_AKTS,
                newId: IDDL.STOCK_GRAU_TUBE,
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
                itemTplToClone: IDDL.MOUNT_MK16_PWS_SRX,
                newId: IDDL.STOCK_GRAU_RAIL,
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
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_SHORT,
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
                itemTplToClone: IDDL.BARRAL_SCARL556,
                newId: IDDL.BARREL_GRAU556_SHORT,
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
            barrel_grau762_standard: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_STANDARD,
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
            barrel_grau556_standard: {
                itemTplToClone: IDDL.BARRAL_SCARL556,
                newId: IDDL.BARREL_GRA556_STANDARD,
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
            barrel_grau762_heavy: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_HVY,
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
            barrel_grau556_heavy: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRA556_HVY,
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
            barrel_grau762_light: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_LIGHT,
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
            barrel_grau556_light: {
                itemTplToClone: IDDL.BARRAL_SCARL556,
                newId: IDDL.BARREL_GRA556_LIGHT,
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
            barrel_grau762_hg550: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_HG550,
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
            barrel_grau556_hg550: {
                itemTplToClone: IDDL.BARRAL_SCARL556,
                newId: IDDL.BARREL_GRA556_HG550,
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
            barrel_grau762_archangel: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_ARCH,
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
            barrel_grau556_archangel: {
                itemTplToClone: IDDL.BARRAL_SCARL556,
                newId: IDDL.BARREL_GRA556_ARCH,
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
                itemTplToClone: IDDL.MAG_AK47_545X39_60,
                newId: IDDL.MAG_GRAU_556x45_30,
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
                itemTplToClone: IDDL.MAG_AK47_545X39_60,
                newId: IDDL.MAG_GRAU_556x45_EXT,
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
                itemTplToClone: IDDL.MAG_AK47_545X39_60,
                newId: IDDL.MAG_GRAU_556x45_DOUBLE,
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
                itemTplToClone: IDDL.FRONT_SIGHT_MOSIN,
                newId: IDDL.FRONT_SIGHT_GRAU_HG550,
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
                itemTplToClone: IDDL.FRONT_SIGHT_MOSIN,
                newId: IDDL.FRONT_SIGHT_GRAU_ARCH,
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