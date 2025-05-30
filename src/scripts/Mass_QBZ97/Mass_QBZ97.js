"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const handbookCategory_1 = require("../../enum/handbookCategory");
const IDDL = {
    WEAPON_QBZ97: "020020BBA97BBA9700000000",
    WEAPON_MDR556: "5c488a752e221602b412af63",
    WEAPON_DG56: "020020DF056DF05600000000",
    BARRAL_MDR556: "5c48a2852e221602b21d5923",
    REAR_SIGHT_QBZ97: "04C04CBBA97BBA974C000000",
    REAR_SIGHT_AR15: "55d5f46a4bdc2d1b198b4567",
    MUZZLE_QBZ97: "04A04ABBA97BBA974A000000",
    MUZZLE_AR15: "544a38634bdc2d58388b4568",
    MK17_TOP: "618426d96c780c1e710c9b9f",
    MOUNT_OPTTIC: "046046BBA97BBA9746000000",
    MOUNT_FORE: "047047BBA97BBA9747000000",
    MOUNT_SIDE: "048048BBA97BBA9748000000",
    MOUNT_MLOK_41: "5b7be4895acfc400170e2dd5",
    MOUNT_MLOK_25: "5b7be47f5acfc400170e2dd2",
    MOUNT_M700: "5bfebc530db834001d23eb65"
};
const cpntName = "Mass_QBZ97";
class Mass_QBZ97 extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    data;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
        this.data = {
            weapon_qbz97: {
                itemTplToClone: IDDL.WEAPON_MDR556,
                newId: IDDL.WEAPON_QBZ97,
                overrideProperties: {
                    Prefab: {
                        path: "assets/qbz97/weapon_qbz97_556x45_container.bundle",
                        rcid: ""
                    },
                    Width: 4,
                    Height: 1,
                    Weight: 3.031,
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
                                            IDDL.REAR_SIGHT_QBZ97
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
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
                                            IDDL.MUZZLE_QBZ97
                                        ]
                                    }
                                ]
                            },
                            "_required": false,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        },
                        {
                            "_name": mod_slot_1.mod_slot.scope,
                            "_id": "5c488af32e2216398b5a960A",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MOUNT_OPTTIC
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
                            "_id": "5c488af32e2216398b5a960B",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MOUNT_SIDE
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
                            "_id": "5c488af32e2216398b5a960C",
                            "_parent": "5c488a752e221602b412af63",
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            IDDL.MOUNT_FORE
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
                    Velocity: -4.5,
                    CenterOfImpact: 0.040,
                    "RecoilReturnSpeedHandRotation": 2.5,
                    "RecoilDampingHandRotation": 0.85,
                    "RecoilCamera": 0.058,
                    "RecoilForceBack": 213,
                    "RecoilForceUp": 72,
                    "RecolDispersion": 10,
                    Ergonomics: 72
                },
                fleaPriceRoubles: 60000,
                parentId: this.DBitems[IDDL.WEAPON_MDR556]._parent,
                handbookPriceRoubles: 60000,
                handbookParentId: handbookCategory_1.handbookCategory.Assaultrifles,
                locales: {
                    "en": {
                        "name": "QBZ-97 5.56x45 assault rifle",
                        "shortName": "QBZ-97",
                        "description": "QBZ-97 is the export version of the Chinese QBZ-95 rifle, firing 5.56mm NATO catridge. Compared to the original version, this version of QBZ-97 has some but not all of the features of the later improved version QBZ-95-1."
                    },
                    "ch": {
                        "name": "QBZ-97 5.56x45 突击步枪",
                        "shortName": "QBZ-97",
                        "description": "QBZ-97是中国QBZ-95步枪的外贸版本，发射5.56mm NATO弹药。与原版相比，这型号的QBZ-97拥有一些但并非全部的QBZ-95-1改进型的特征。"
                    }
                },
                addtoTraders: false,
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.WEAPON_MDR556,
                        newSlotName: mod_slot_1.mod_slot.magazine
                    }
                ],
                masteries: true,
                masterySections: [
                    {
                        Name: "QBZ-97",
                        Templates: [
                            IDDL.WEAPON_QBZ97
                        ],
                        Level2: 150,
                        Level3: 300
                    }
                ],
                "addweaponpreset": true,
                "weaponpresets": [
                    {
                        "_changeWeaponName": false,
                        "_encyclopedia": IDDL.WEAPON_QBZ97,
                        "_id": "220020BBA97BBA9700000000",
                        "_items": [
                            {
                                "_id": "220020BBA97BBA9700000060",
                                "_tpl": IDDL.WEAPON_QBZ97
                            },
                            {
                                "_id": "220020BBA97BBA9700000063",
                                "_tpl": "55d4887d4bdc2d962f8b4570",
                                "parentId": "220020BBA97BBA9700000060",
                                "slotId": "mod_magazine"
                            },
                            {
                                "_id": "220020BBA97BBA9700000048",
                                "_tpl": IDDL.REAR_SIGHT_QBZ97,
                                "parentId": "220020BBA97BBA9700000060",
                                "slotId": "mod_sight_rear"
                            },
                            {
                                "_id": "220020BBA97BBA97000000e7",
                                "_tpl": IDDL.MUZZLE_QBZ97,
                                "parentId": "220020BBA97BBA9700000060",
                                "slotId": "mod_muzzle"
                            }
                        ],
                        "_name": "QBZ97 Default",
                        "_parent": "220020BBA97BBA9700000060",
                        "_type": "Preset"
                    }
                ]
            },
            sight_qbz97: {
                itemTplToClone: IDDL.REAR_SIGHT_AR15,
                newId: IDDL.REAR_SIGHT_QBZ97,
                overrideProperties: {
                    Weight: 0.1,
                    "Prefab": {
                        "path": "assets/qbz97/mods/sight_rear_qbz97_default.bundle",
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
                        "name": "QBZ-97 rear sight",
                        "shortName": "QBZ-97",
                        "description": "Rear sight for QBZ-97."
                    },
                    "ch": {
                        "name": "QBZ-97 照门组件",
                        "shortName": "QBZ-97",
                        "description": "QBZ-97的照门。"
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            muzzle_qbz97: {
                itemTplToClone: IDDL.MUZZLE_AR15,
                newId: IDDL.MUZZLE_QBZ97,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/qbz97/mods/muzzle_qbz97_default.bundle",
                        "rcid": ""
                    },
                    Weight: 0.072,
                    Slots: []
                },
                fleaPriceRoubles: 6000,
                parentId: this.DBitems[IDDL.MUZZLE_AR15]._parent,
                handbookPriceRoubles: 6000,
                handbookParentId: handbookCategory_1.handbookCategory["Flashhiders&brakes"],
                locales: {
                    "en": {
                        "name": "QBZ-97 muzzle device",
                        "shortName": "QBZ-97",
                        "description": "Default muzzle device for QBZ-97."
                    },
                    "ch": {
                        "name": "QBZ-97 枪口装置",
                        "shortName": "QBZ-97",
                        "description": "QBZ-97的原装枪口装置。"
                    }
                },
                addtoTraders: false,
                copySlot: false
            },
            mount_qbz97_foregrip: {
                itemTplToClone: IDDL.MOUNT_MLOK_41,
                newId: IDDL.MOUNT_FORE,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/qbz97/mods/mount_qbz97_foregrip.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_41]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "QBZ-97 bottom rail",
                        "shortName": "QBZ-97 bottom",
                        "description": "Rail installed at the bottom of QBZ-97 handguard."
                    },
                    "ch": {
                        "name": "QBZ-97 下导轨",
                        "shortName": "QBZ-97 下",
                        "description": "安装在QBZ-97护木底部的导轨。"
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
            mount_qbz97_optic: {
                itemTplToClone: IDDL.MOUNT_M700,
                newId: IDDL.MOUNT_OPTTIC,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/qbz97/mods/mount_qbz97_optic.bundle",
                        "rcid": ""
                    },
                    Slots: []
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.MOUNT_M700]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "QBZ-97 optic rail",
                        "shortName": "QBZ-97 optic",
                        "description": "Rail for QBZ-97 to mount optics."
                    },
                    "ch": {
                        "name": "QBZ-97 瞄具导轨",
                        "shortName": "QBZ-97",
                        "description": "QBZ-97的瞄具导轨。"
                    }
                },
                copySlot: true,
                copySlots: [
                    {
                        id: IDDL.MK17_TOP,
                        newSlotName: mod_slot_1.mod_slot.scope
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
            mount_qbz97_side: {
                itemTplToClone: IDDL.MOUNT_MLOK_25,
                newId: IDDL.MOUNT_SIDE,
                overrideProperties: {
                    "Prefab": {
                        "path": "assets/qbz97/mods/mount_qbz97_side.bundle",
                        "rcid": ""
                    }
                },
                fleaPriceRoubles: 3000,
                parentId: this.DBitems[IDDL.MOUNT_MLOK_25]._parent,
                handbookPriceRoubles: 3000,
                handbookParentId: handbookCategory_1.handbookCategory.Mounts,
                locales: {
                    "en": {
                        "name": "QBZ-97 side rail",
                        "shortName": "QBZ-97 side",
                        "description": "Rail installed at the side of QBZ-97 handguard."
                    },
                    "ch": {
                        "name": "QBZ-97 侧导轨",
                        "shortName": "QBZ-97 侧",
                        "description": "安装在QBZ-97护木侧面的导轨。"
                    }
                },
                addtoTraders: true,
                traderId: NTrader_1.NTrader.Default,
                "barterScheme": [
                    {
                        "count": 3000
                    }
                ]
            }
        };
        if (this.DBitems[IDDL.WEAPON_DG56] != undefined) {
            this.data.weapon_qbz97.copySlots.push({
                id: IDDL.WEAPON_DG56,
                newSlotName: mod_slot_1.mod_slot.stock
            }, {
                id: IDDL.WEAPON_DG56,
                newSlotName: mod_slot_1.mod_slot.stock_000
            });
        }
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
        MMA.traderGenerateAssortFromPreset("220020BBA97BBA9700000000", 50000, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        ModifyInfos[IDDL.WEAPON_QBZ97] = {
            ItemId: IDDL.WEAPON_QBZ97,
            WeaponCaliberCloneFromId: "itself"
        };
        MMA.loadModifierObj(ModifyInfos);
    }
}
module.exports = Mass_QBZ97;
//# sourceMappingURL=Mass_QBZ97.js.map