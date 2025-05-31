// Refactored ZLR_GRAU module following Mass_DG56 modular structure

"use strict";

const Mass_ModClass = require("../../Mass_ModClass");
const NTrader = require("../../enum/NTrader");
const mod_slot = require("../../enum/mod_slot");
const Money = require("C:/snapshot/project/obj/models/enums/Money");
const handbookCategory = require("../../enum/handbookCategory");

const IDDL = {
    WEAPON_GRAU762: "5dbcb66f4827cd761fb3797a",
    WEAPON_GRAU556: "b6c589ec2535085340807057",
    WEAPON_SCARH762: "6165ac306ef05c2ce828ef74",
    WEAPON_SCARL556: "618428466ef05c2ce828f218",
    MK17_TOP: "618426d96c780c1e710c9b9f",
    RECIEVER_GRAU762: "e19730b94f5b34b39c82fd25",
    RECIEVER_GRAU556: "3b8f80d2f5acca00e55ca855",
    PISTOLGRIP_GRAU_STD: "98f081647a654c307492ae67",
    PISTOLGRIP_GRAU_CUST: "773b42aa3dad8cab5bcd6308",
    PISTOLGRIP_GRAU_LIGHT: "05da8ea1317e2fb752129d23",
    PISTOLGRIP_GRAU_HVY: "dea7d4b4b16a4e82ea03453e",
    STOCK_GRAU_STAND: "2986f5dbe25acdbeff9ba8f2",
    STOCK_GRAU_SPEC: "a422d5cc59d7bcbd1d25d908",
    STOCK_GRAU_HVY: "7494980095aa45a8384469a8",
    STOCK_GRAU_LIGHT: "523f5d60f73446c477407dfd",
    STOCK_GRAU_TUBE: "c084d0bc91c7fa464257d868",
    STOCK_GRAU_RAIL: "dcf40ea776b8c6c39ed9cd4c",
    NO_STOCK_GRAU: "a787e1509ef7500abfc8fc2d",
    BARRAL_SCARH762: "6183b0711cb55961fa0fdcad",
    BARRAL_SCARL556: "6183fd911cb55961fa0fdce9",
    MOUNT_MK16_PWS_SRX: "61965d9058ef8c428c287e0d",
    HANDGUARD_GRAU_STAND: "74a2de7548ee8bad037c18ea",
    HANDGUARD_GRAU_LIGHT: "c71224cf97f6ac5185217297",
    HANDGUARD_GRAU_ARCH: "c8e19c9d723ed9af90ee92bf",
    HANDGUARD_GRAU_HG550: "e9e307ec92fbe21d8dd61adf",
    HANDGUARD_GRAU_HEAVY: "43a4154a07e886db8ab1886b",
    BARREL_GRAU762_STANDARD: "c1bcaa54461cd1767be1fb7c",
    BARREL_GRAU762_LIGHT: "6839c29832fe7c19b30bf63c",
    BARREL_GRAU762_HVY: "6839c2a11d2d870770e7d83d"
};

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
    IDDL.STOCK_GRAU_RAIL,
    IDDL.NO_STOCK_GRAU
];

const List_Handguards = [
    IDDL.HANDGUARD_GRAU_STAND,
    IDDL.HANDGUARD_GRAU_LIGHT,
    IDDL.HANDGUARD_GRAU_ARCH,
    IDDL.HANDGUARD_GRAU_HG550,
    IDDL.HANDGUARD_GRAU_HEAVY
];

const cpntName = "ZLR_GRAU";
class ZLR_GRAU extends Mass_ModClass.Mass_ModClass {
    MMA;
    MThisModPath;
    data;

    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;

        this.data = {
            weapon_grau_762x39: {
                itemTplToClone: IDDL.WEAPON_SCARH762,
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
                    Slots: [
                        {
                            _name: mod_slot.mod_slot.pistol_grip,
                            _id: "683aa67c0f1dbd22d7f4fdaa",
                            _parent: IDDL.WEAPON_GRAU762,
                            _props: {
                                filters: [{ Filter: [...List_PGs] }]
                            },
                            _required: true,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            _name: mod_slot.mod_slot.magazine,
                            _id: "683aa68284ea47990de437bb",
                            _parent: IDDL.WEAPON_GRAU762,
                            _props: {
                                filters: [{
                                    Filter: [
                                        "5a01c29586f77474660c694c",
                                        "5ac66bea5acfc43b321d4aec",
                                        "5b1fd4e35acfc40018633c39",
                                        "5e21a3c67e40bd02257a008a"
                                    ]
                                }]
                            },
                            _required: false,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c394bdc2dae468b4577"
                        },
                        {
                            _name: mod_slot.mod_slot.reciever,
                            _id: "683aa687ebc768b25d78f33c",
                            _parent: IDDL.WEAPON_GRAU762,
                            _props: {
                                filters: [{ Filter: [IDDL.RECIEVER_GRAU762] }]
                            },
                            _required: true,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            _name: mod_slot.mod_slot.stock,
                            _id: "683aa68cff31ef646606d056",
                            _parent: IDDL.WEAPON_GRAU762,
                            _props: {
                                filters: [{ Filter: [...List_Stocks, IDDL.NO_STOCK_GRAU] }]
                            },
                            _required: true,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    bFirerate: 720
                },
                fleaPriceRoubles: 36020,
                parentId: "5447b5f14bdc2d61278b4567",
                handbookPriceRoubles: 36020,
                handbookParentId: handbookCategory.handbookCategory.Assaultrifles,
                locales: {
                    en: {
                        name: "ZLR GRAU 762 assault rifle",
                        shortName: "GRAU 762",
                        description: "GRAU 762 is a replicated version from SG-550 series with 7.62×39 cartridges, manufactured by ZLR USA."
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_SCARH762,
                        newSlotName: mod_slot.mod_slot.magazine
                    },
                    {
                        id: IDDL.MK17_TOP,
                        newSlotName: mod_slot.mod_slot.scope
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "ZLR GRAU",
                        Templates: [IDDL.WEAPON_GRAU762],
                        Level2: 150,
                        Level3: 300
                    }
                ],
                addweaponpreset: false,
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
                    Slots: [
                        {
                            _name: mod_slot.pistol_grip,
                            _id: "683aa6a3b5505596b500bde9",
                            _parent: IDDL.WEAPON_GRAU556,
                            _props: { filters: [{ Filter: [...List_PGs] }] },
                            _required: true,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            _name: mod_slot.magazine,
                            _id: "683aa6a6c8a5ff60bf2473c4",
                            _parent: IDDL.WEAPON_GRAU556,
                            _props: {
                                filters: [{ Filter: ["c7332f93b1803894918b1085"] }]
                            },
                            _required: false,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c394bdc2dae468b4577"
                        },
                        {
                            _name: mod_slot.reciever,
                            _id: "683aa6a9ec1ab6d8f2ea4952",
                            _parent: IDDL.WEAPON_GRAU556,
                            _props: {
                                filters: [{ Filter: [IDDL.RECIEVER_GRAU556] }]
                            },
                            _required: true,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            _name: mod_slot.stock,
                            _id: "683aa6ae516c7098cc4a5b36",
                            _parent: IDDL.WEAPON_GRAU556,
                            _props: {
                                filters: [{ Filter: [...List_Stocks] }]
                            },
                            _required: true,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        }
                    ],
                    bFirerate: 720
                },
                fleaPriceRoubles: 36020,
                parentId: "5447b5f14bdc2d61278b4567",
                handbookPriceRoubles: 36020,
                handbookParentId: handbookCategory.Assaultrifles,
                locales: {
                    en: {
                        name: "ZLR GRAU 556 assault rifle",
                        shortName: "GRAU 556",
                        description: "GRAU 556 is a replicated version from SG-550 series with 5.56×45 cartridges, manufactured by ZLR USA."
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_SCARL556,
                        newSlotName: mod_slot.mod_slot.magazine
                    },
                    {
                        id: IDDL.MK17_TOP,
                        newSlotName: mod_slot.mod_slot.scope
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "ZLR GRAU",
                        Templates: [IDDL.WEAPON_GRAU556],
                        Level2: 150,
                        Level3: 300
                    }
                ],
                addweaponpreset: false,
            },
            receiver_grau_762: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.RECIEVER_GRAU762,
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/receiver_grau_762.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.65,
                    Ergonomics: 5,
                    Slots: [
                        {
                            _name: mod_slot.scope,
                            _id: "683aaed9cf9292970bdf6f08",
                            _parent: IDDL.RECIEVER_GRAU762,
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
                            _required: false,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            _name: mod_slot.handguard,
                            _id: "683aaed9cf9292970bdf6f08",
                            _parent: IDDL.RECIEVER_GRAU762,
                            _props: { filters: [{ Filter: [...List_Handguards] }] },
                            _required: true,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        }
                    ]
                },
                fleaPriceRoubles: 23000,
                parentId: "55818a304bdc2db5418b457d",
                handbookPriceRoubles: 23000,
                handbookParentId: handbookCategory.Receivers,
                locales: {
                    en: {
                        name: "ZLR GRAU 762 Upper Receiver",
                        shortName: "GRAU 762 upper",
                        description: "Upper receiver component for GRAU 762."
                    }
                }
            },
            receiver_grau_556: {
                itemTplToClone: IDDL.BARRAL_SCARL556,
                newId: IDDL.RECIEVER_GRAU556,
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/receiver_grau_556.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.65,
                    Ergonomics: 5,
                    Slots: [
                        {
                            _name: mod_slot.scope,
                            _id: "slot_scope",
                            _parent: IDDL.RECIEVER_GRAU556,
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
                            _required: false,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            _name: mod_slot.handguard,
                            _id: "slot_hg",
                            _parent: IDDL.RECIEVER_GRAU556,
                            _props: { filters: [{ Filter: [...List_Handguards] }] },
                            _required: true,
                            _mergeSlotWithChildren: false,
                            _proto: "55d30c4c4bdc2db4468b457e"
                        }
                    ]
                },
                fleaPriceRoubles: 23000,
                parentId: "55818a304bdc2db5418b457d",
                handbookPriceRoubles: 23000,
                handbookParentId: handbookCategory.Receivers,
                locales: {
                    en: {
                        name: "ZLR GRAU 556 Upper Receiver",
                        shortName: "GRAU 556 upper",
                        description: "Upper receiver component for GRAU 556."
                    }
                }
            },
            barrel_grau_762_std: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_STANDARD,
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_762_std.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.89,
                    Recoil: -1,
                    "HeatFactor": 0.96,
                    "CoolFactor": 1,
                    Ergonomics: -1
                },
                fleaPriceRoubles: 15000,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 15000,
                handbookParentId: handbookCategory.Barrels,
                locales: {
                    en: {
                        name: "ZLR GRAU 762 Standard Barrel",
                        shortName: "GRAU Std.",
                        description: "Standard issue barrel for GRAU 762."
                    }
                }
            },
            barrel_grau_762_light: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_LIGHT,
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_762_light.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 0.78,
                    Recoil: 1,
                    Ergonomics: 2
                },
                fleaPriceRoubles: 17000,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 17000,
                handbookParentId: handbookCategory.Barrels,
                locales: {
                    en: {
                        name: "ZLR GRAU 762 Light Barrel",
                        shortName: "GRAU Lt.",
                        description: "Lightweight barrel for improved handling."
                    }
                }
            },
            barrel_grau_762_hvy: {
                itemTplToClone: IDDL.BARRAL_SCARH762,
                newId: IDDL.BARREL_GRAU762_HVY,
                overrideProperties: {
                    Prefab: {
                        path: "assets/grau/mods/barrel_grau_762_hvy.bundle",
                        rcid: ""
                    },
                    Width: 2,
                    Height: 1,
                    Weight: 1.12,
                    Recoil: -3,
                    Ergonomics: -2
                },
                fleaPriceRoubles: 20000,
                parentId: "555ef6e44bdc2de9068b457e",
                handbookPriceRoubles: 20000,
                handbookParentId: handbookCategory.Barrels,
                locales: {
                    en: {
                        name: "ZLR GRAU 762 Heavy Barrel",
                        shortName: "GRAU Hv.",
                        description: "Heavy barrel variant for reduced recoil."
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
            const def = this.data[x];
            const id = def.newId || x;

            const item = {
                itemTplToClone: def.itemTplToClone,
                overrideProperties: def.overrideProperties,
                newId: id,
                fleaPriceRoubles: def.fleaPriceRoubles,
                parentId: def.parentId,
                handbookPriceRoubles: def.handbookPriceRoubles,
                handbookParentId: def.handbookParentId,
                locales: def.locales
            };

            CustomItem.createItemFromClone(item);
            MMA.registerNewItem(id);

            if (def.addtoTraders) {
                MMA.traderAddItems(id, def.barterScheme?.[0].count || 0, NTrader.Default, def.loyallevelitems);
            }

            if (def.copySlot) {
                def.copySlots?.forEach((slotData, index) => {
                    const tgtSlotName = slotData.tgtSlotName || slotData.newSlotName;
                    const newFilter = this.JsonUtil.clone(
                        this.MMA.itemGetSlotbyName(tgtSlotName, slotData.id)._props.filters[0].Filter
                    );
                    const newSlot = this.MMA.newSlot(slotData.newSlotName, "F" + index.toString(16), id, false, false, newFilter);
                    this.DBitems[id]._props.Slots.push(newSlot);
                });
            }

            MMA.processItemCartridges(this.DBitems[id]);
            MMA.processItemChambers(this.DBitems[id]);
            MMA.processItemSlots(this.DBitems[id]);

            if (def.masteries) {
                const masteries = def.masterySections;
                if (MMA.isMasteringExists(masteries[0].Name)) {
                    masteries[0].Templates.forEach(t => MMA.weaponAddtoMastering(t, masteries[0].Name));
                } else {
                    this.DBmasterings.push(masteries[0]);
                }
            }

            if (def.addweaponpreset) {
                const presets = this.data[x].weaponpresets;
                for (let y in presets) {
                    MMA.addPreset(presets[y]);
                }
            }

            if (def.addtoModSlots) {
                const MODINFO = {
                    ItemId: id,
                    ItemSlotClone: {
                        SlotCloneFromId: def.itemTplToClone,
                        TargetSlots: def.modSlot
                    },
                    ConflictCloneFromId: id
                };
                MMA.modifyItems(MODINFO);
            }
            //MMA.traderGenerateAssortFromPreset("683aa2a14f721ca2c0b7e28f", 65000, NTrader.NTrader.Default, 1, Money.Money.ROUBLES);
            //MMA.traderGenerateAssortFromPreset("683aa467c38993dae8bba89f", 60000, NTrader.NTrader.Default, 1, Money.Money.ROUBLES);
            //ModifyInfos[IDDL.WEAPON_DG56] = {
            //    ItemId: IDDL.WEAPON_DG56,
            //    WeaponCaliberCloneFromId: "itself"
            //};
            //MMA.loadModifierObj(ModifyInfos);
            //for (let lang in this.DBlocales) {
            //    this.DBlocales[lang]["683aa467c38993dae8bba89f"] = "";
            //}
        }
    }
}

module.exports = ZLR_GRAU;
