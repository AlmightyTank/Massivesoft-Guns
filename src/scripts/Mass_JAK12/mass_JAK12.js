"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const cpntName = "Mass_JAK12";
const IDList = {
    WEAPON_JAK12: "023023A12A12A12000000000",
    WEAPON_HALO: "023023A12A12FA0000000000",
    WEAPON_SAIGA12: "576165642459773c7a400233",
    BARREL_JAK12: "04B04Ba12a12BABA00000000",
    BARREL_HALO: "04B04Ba12FA0BABA00000000",
    BARREL_M870: "5a787fdfc5856700142fdd9a",
    HANDGUARD_JAK12: "041041A12A12041000000000",
    HANDGUARD_HALO: "041041A12FA0041000000000",
    HANDGUARD_HK416: "5bb20de5d4351e0035629e59",
    MOUNT_JAK12_BOTTOM: "0410FBA12A120FB000000000",
    MOUNT_HALO_BOTTOM: "0410FBA12FA00FB000000000",
    MOUNT_JAK12_SIDE: "0410FFA12A120FF000000000",
    MOUNT_HALO_SIDE: "0410FFA12FA00FF000000000",
    MOUNT_MLOK_41: "5b7be4895acfc400170e2dd5",
    MOUNT_MLOK_25: "5b7be47f5acfc400170e2dd2",
    STOCK_JAK12_PAD: "043043a12a12043000000000",
    STOCK_RBP_PAD: "58d2912286f7744e27117493",
    MAGAZINE_JAK12_8: "02F02FA12A12080800000000",
    MAGAZINE_JAK12_20: "02F02FA12A12202000000000",
    MAGAZINE_JAK12_32: "02F02FA12A12323200000000",
    MAGAZINE_HALO_8: "02F02FA12FA0080800000000",
    MAGAZINE_SAGA12_5: "57616a9e2459773c7a400234",
    SIGHT_FRONT_JAK12: "049049A12A120F9000000000",
    SIGHT_FRONT_SIG_MPX: "5894a73486f77426d259076c",
    SIGHT_REAR_JAK12: "049099a12a120b9000000000",
    SIGHT_REAR_SAIGA12: "57a9b9ce2459770ee926038d",
    MUZZLE_JAK12: "04A04AA12A120AA000000000",
    MUZZLE_HALO: "04A04AA12FA00AA000000000",
    MUZZLE_VPO209_PROTECTOR: "59e8a00d86f7742ad93b569c",
    AMMO_85: "5d6e6806a4b936088465b17e",
    AMMO_AP20: "5d6e68a8a4b9360b6c0d54e2",
    AMMO_BLUE: "00006806a4b936088465bFA0",
    AMMO_EXP: "000068a8a4b9360b6c0d5FA0",
    MOUNT_SHORT_JAK12_SIDE: "041AFFA12A12AFF000000000",
    HANDGUARD_SHORT_JAK12: "041A41A12A12A41000000000",
    BARREL_SHORT_JAK12: "04BA4Ba12a12BABA00000000",
    MOUNT_HEAVY_JAK12_SIDE: "041BFFA12A12BFF000000000",
    HANDGUARD_HEAVY_JAK12: "041B41A12A12B41000000000",
    BARREL_HEAVY_JAK12: "04BB4Ba12a12BBBB00000000",
    MUZZLE_HEAVY_JAK12: "04AB4AA12A12BAA000000000",
    bar_mp155: "6076c1b9f2cb2e02a42acedc",
    HANDGUARD_LONG_JAK12: "041C41A12A12C41000000000",
    BARREL_LONG_JAK12: "04BC4Ba12a12CCCC00000000",
    MUZZLE_LONG_JAK12: "04AC4AA12A12CAA000000000",
};
const IDhandguards = [
    IDList.HANDGUARD_JAK12,
    IDList.HANDGUARD_SHORT_JAK12,
    IDList.HANDGUARD_HEAVY_JAK12,
    IDList.HANDGUARD_LONG_JAK12
];
const IDbarrels = [
    IDList.BARREL_JAK12,
    IDList.BARREL_SHORT_JAK12,
    IDList.BARREL_HEAVY_JAK12,
    IDList.BARREL_LONG_JAK12
];
const IDmuzzles = [
    IDList.MUZZLE_JAK12,
    IDList.MUZZLE_HEAVY_JAK12
];
const IDmags = [
    IDList.MAGAZINE_JAK12_8,
    IDList.MAGAZINE_JAK12_20,
    IDList.MAGAZINE_JAK12_32
];
class Mass_JAK12 extends Mass_ModClass_1.Mass_ModClass {
    MMA;
    MThisModPath;
    constructor(container, MMA) {
        super(container);
        this.MMA = MMA;
        this.MThisModPath = this.MMA.ThisModPathNodes;
    }
    /**
     * onLoadMod
     */
    async onLoadMod() {
        const MThisModPath = "/bundles/JAK12/";
        const Mass_ModApi = this.MMA;
        this.handguard();
        // this.rail_bottom();
        this.rail_side();
        this.magazine();
        this.drum20();
        this.drum32();
        this.weapon();
        this.sight_front();
        this.sight_rear();
        this.stock();
        this.barrel();
        this.muzzle();
        this.preset();
        this.parts_short();
        this.parts_heavy();
        this.parts_long();
        await this.MMA.loadModifierList(this.MThisModPath[cpntName].itemmodifier);
        /*
                var list = [
                    "023023A12A12A12000000000",
                    "04B04Ba12a12BABA00000000",
                    "041041A12A12041000000000",
                    "0410FBA12A120FB000000000",
                    "0410FFA12A120FF000000000",
                    "043043a12a12043000000000",
                    "02F02FA12A12080800000000",
                    "04A04AA12A120AA000000000",
                    "049099a12a120b9000000000",
                    "049049A12A120F9000000000"
                ]
                var file: Record<string, ITemplateItem> = {};
                var handbook: HandbookItem[] = [];
        
                for (let i in list) {
                    var id = list[i];
                    var item = this.JsonUtil.clone(this.DBitems[id]);
                    item._props.Name = this.DBlocales["ch"][`${id} Name`];
                    item._props.Description = this.DBlocales["ch"][`${id} Description`];
                    item._props.ShortName = this.DBlocales["ch"][`${id} ShortName`];
                    
                    file[id] = item;
        
                    for(let hb in this.DBhbItems){
                        if(this.DBhbItems[hb].Id == id){
                            handbook.push(this.DBhbItems[hb])
                        }
                    }
                }
                this.MMA.jsonWrite(`./outputdata_item.json`, file);
                this.MMA.jsonWrite(`./outputdata_handbook.json`, handbook);
        */
    }
    loadLoc(id, locs) {
        for (let lang in this.DBlocales) {
            this.MMA.addNewLoc(id, lang, locs["en"]);
        }
        for (let lang in locs) {
            this.MMA.addNewLoc(id, lang, locs[lang]);
        }
    }
    weapon() {
        const id = IDList.WEAPON_JAK12;
        const saiga12 = IDList.WEAPON_SAIGA12;
        let item = this.MMA.cloneItem(saiga12, id);
        item._props.Prefab.path = "assets/jak12/weapon_jak12_12g_container.bundle";
        //Slots
        var slots = [];
        var barrel = this.MMA.newSlot(mod_slot_1.mod_slot.barrel, "A0B", id, true);
        barrel._props.filters[0].Filter = IDbarrels;
        slots.push(barrel);
        var magazine = this.MMA.newSlot(mod_slot_1.mod_slot.magazine, "A0F", id, false);
        magazine._props.filters[0].Filter = IDmags;
        slots.push(magazine);
        item._props.defMagType = IDList.MAGAZINE_JAK12_8;
        var handguard = this.MMA.newSlot(mod_slot_1.mod_slot.handguard, "A0A", id, true);
        handguard._props.filters[0].Filter = IDhandguards;
        slots.push(handguard);
        var sight_front = this.MMA.newSlot(mod_slot_1.mod_slot.sight_front, "A01", id);
        sight_front._props.filters[0].Filter = [
            IDList.SIGHT_FRONT_JAK12
        ];
        slots.push(sight_front);
        var sight_rear = this.MMA.newSlot(mod_slot_1.mod_slot.sight_rear, "A02", id);
        sight_rear._props.filters[0].Filter = [
            IDList.SIGHT_REAR_JAK12
        ];
        slots.push(sight_rear);
        var stock = this.MMA.newSlot(mod_slot_1.mod_slot.stock, "A0C", id);
        stock._props.filters[0].Filter = [
            IDList.STOCK_JAK12_PAD
        ];
        slots.push(stock);
        var scope = this.MMA.newSlot(mod_slot_1.mod_slot.mount_000, "A03", id);
        scope._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.scope, "5fb64bc92b1b027b1f50bcf2")._props.filters[0].Filter);
        slots.push(scope);
        item._props.Slots = slots;
        item._props.Chambers = [];
        //Modify property
        const pps = item._props;
        var npps = {
            weapFireType: [
                "fullauto"
            ],
            bFirerate: 305,
            CompactHandling: false,
            AllowFeed: false,
            AllowJam: false,
            AllowSlide: false,
            AllowMisfire: false,
            Foldable: false,
            "RecoilCategoryMultiplierHandRotation": 0.23,
            "RecoilReturnSpeedHandRotation": 2.5,
            "RecoilDampingHandRotation": 0.85,
            "RecoilCamera": 0.06,
            "RecoilStableIndexShot": 5,
            "RecoilForceBack": 380,
            "RecoilForceUp": 180,
            "RecolDispersion": 10,
            "RecoilPosZMult": 1,
            "RecoilReturnPathDampingHandRotation": 0.4,
            "RecoilReturnPathOffsetHandRotation": 0.01,
            "RecoilAngle": 90,
            "RecoilStableAngleIncreaseStep": 2.5,
            "CameraSnap": 3.5,
            Velocity: 0,
            CenterOfImpact: 0.4,
            FoldedSlot: "",
            HeatFactorGun: 0.99,
            CoolFactorGun: 4.032,
            CoolFactorGunMods: 1.03,
            HeatFactorByShot: 5.5,
            Width: 5,
            Height: 2,
            Weight: 3.21
        };
        item._props = this.setItemProps(item._props, npps);
        item._props.PostRecoilVerticalRangeHandRotation = {
            "x": -1.3,
            "y": 0,
            "z": 0
        };
        item._props.ShotsGroupSettings = [
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
                    "x": -6,
                    "y": 6,
                    "z": 0
                }
            }
        ];
        //Price and Trader
        const Price = 35000;
        this.DBprice[id] = Price;
        // this.MMA.traderAddItems(id, Price, NTrader.Default,1,Money.ROUBLES);
        //Localization
        var locs = {
            "ch": {
                "Name": "XRK JAK-12 12铅径 自动霰弹枪",
                "ShortName": "JAK-12",
                "Description": "JAK-12，是长行程导气活塞式原理、摆动式卡铁闭锁、开膛待击、采用恒定后座系统的全自动霰弹枪，发射12铅径弹药，是MPS AA-12自动霰弹枪的仿制品。"
            },
            "en": {
                "Name": "XRK JAK-12 12ga automatic shotgun",
                "ShortName": "JAK-12",
                "Description": "JAK-12 automatic shotgun chambered in 12ga."
            }
        };
        this.loadLoc(id, locs);
        //Handbook
        var hb = this.MMA.cloneHandbookById(IDList.WEAPON_SAIGA12);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
        //Finish
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        this.MMA.weaponAddToPrimarySlot(id);
        this.MMA.weaponAddToQuestKillShotgun(id);
    }
    barrel() {
        const id = IDList.BARREL_JAK12;
        const clone_id = IDList.BARREL_M870;
        const bar_mp155 = "6076c1b9f2cb2e02a42acedc";
        let item = this.MMA.cloneItem(clone_id, id);
        item._props.Slots = [];
        var muzzle = this.MMA.newSlot(mod_slot_1.mod_slot.muzzle, "A01", id, false);
        muzzle._props.filters[0].Filter = [
            ...this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, bar_mp155)._props.filters[0].Filter,
            ...IDmuzzles
        ];
        item._props.Slots.push(muzzle);
        var npps = {
            Weight: 0.65,
            CenterOfImpact: 0.68,
            Recoil: 0,
            ShotgunDispersion: 1.4,
            DurabilityBurnModificator: 0.9
        };
        item._props = this.setItemProps(item._props, npps);
        const Price = 3000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/barrel_jak12_12g.bundle";
        //Localization
        var locs = {
            "ch": {
                "Name": "JAK-12 标准枪管",
                "ShortName": "JAK-12 标准",
                "Description": "JAK-12 霰弹枪的标准枪管。"
            },
            "en": {
                "Name": "JAK-12 barrel std.",
                "ShortName": "JAK-12 std.",
                "Description": "Standard barrel for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    muzzle() {
        const id = IDList.MUZZLE_JAK12;
        const clone_id = IDList.MUZZLE_VPO209_PROTECTOR;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 3000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/muzzle_jak12_12g";
        item._props.Weight = 0.02;
        var locs = {
            "ch": {
                "Name": "JAK-12 枪口螺纹护盖",
                "ShortName": "JAK-12 护盖",
                "Description": "JAK-12 霰弹枪的默认枪口螺纹护盖。"
            },
            "en": {
                "Name": "JAK-12 muzzle thread protector",
                "ShortName": "JAK-12 muz.",
                "Description": "Default muzzle thread protector for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    handguard() {
        const id = IDList.HANDGUARD_JAK12;
        let item = this.MMA.cloneItem(IDList.HANDGUARD_HK416, id);
        item._props.Slots = [];
        const Price = 4000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/handguard_jak12.bundle";
        var fore_grip = this.MMA.newSlot(mod_slot_1.mod_slot.foregrip, "A0B", id, false);
        fore_grip._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDList.MOUNT_MLOK_41)._props.filters[0].Filter);
        item._props.Slots.push(fore_grip);
        var mount_001 = this.MMA.newSlot(mod_slot_1.mod_slot.mount_001, "A01", id, false);
        mount_001._props.filters[0].Filter = [
            IDList.MOUNT_JAK12_SIDE
        ];
        item._props.Slots.push(mount_001);
        var mount_002 = this.MMA.newSlot(mod_slot_1.mod_slot.mount_002, "A02", id, false);
        mount_002._props.filters[0].Filter = [
            IDList.MOUNT_JAK12_SIDE
        ];
        item._props.Slots.push(mount_002);
        var npps = {
            Weight: 0.4,
            ExtraSizeLeft: 0,
            Ergonomics: 10,
            CoolFactor: 0.99,
            HeatFactor: 1.01
        };
        item._props = this.setItemProps(item._props, npps);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_HK416);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
        var locs = {
            "ch": {
                "Name": "JAK-12 标准护木",
                "ShortName": "JAK-12 标准",
                "Description": "JAK-12 霰弹枪的默认护木。"
            },
            "en": {
                "Name": "JAK-12 handguard std.",
                "ShortName": "JAK-12 std.",
                "Description": "Default handguard for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
    }
    setItemProps(oldProps, newProps) {
        return { ...oldProps, ...newProps };
    }
    // private rail_bottom() {
    //     const id = IDList.MOUNT_JAK12_BOTTOM;
    //     const clone_id = IDList.MOUNT_MLOK_41;
    //     let item = this.MMA.cloneItem(clone_id, id);
    //     const Price = 3000;
    //     this.DBprice[id] = Price;
    //     this.MMA.traderAddItems(id, Price, NTrader.Default, 1, Money.ROUBLES);
    //     item._props.Prefab.path = "assets/jak12/mods/mount_jak12_bottom.bundle";
    //     var locs: Record<string, ILocProp> = {
    //         "ch": {
    //             "Name": "JAK-12 护木底部导轨",
    //             "ShortName": "JAK-12 底部导轨",
    //             "Description": "安装在 JAK-12 护木底部的导轨。"
    //         },
    //         "en": {
    //             "Name": "JAK-12 bottom rail",
    //             "ShortName": "JAK-12 rail bott.",
    //             "Description": "Bottom rail for JAK-12.",
    //         }
    //     }
    //     this.loadLoc(id, locs);
    //     this.DBitems[id] = item;
    //     this.MMA.registerNewItem(id);
    //     var hb = this.MMA.cloneHandbookById(clone_id);
    //     hb.Price = Price;
    //     hb.Id = id;
    //     this.DBhbItems.push(hb);
    // }
    rail_side() {
        const id = IDList.MOUNT_JAK12_SIDE;
        const clone_id = IDList.MOUNT_MLOK_25;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 2000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/mount_jak12_side.bundle";
        var locs = {
            "ch": {
                "Name": "JAK-12 护木侧导轨",
                "ShortName": "JAK-12 侧导轨",
                "Description": "安装在 JAK-12 标准护木两侧的导轨。"
            },
            "en": {
                "Name": "JAK-12 side rail",
                "ShortName": "JAK-12 rail side",
                "Description": "Side rail for JAK-12 standard handguard.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    stock() {
        const id = IDList.STOCK_JAK12_PAD;
        const clone_id = IDList.STOCK_RBP_PAD;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 2000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/stock_jak12.bundle";
        item._props.IsShoulderContact = true;
        item._props.HasShoulderContact = true;
        var locs = {
            "ch": {
                "Name": "JAK-12 枪托垫",
                "ShortName": "JAK-12 枪托垫",
                "Description": "JAK-12 的枪托缓冲垫。"
            },
            "en": {
                "Name": "JAK-12 stock pad",
                "ShortName": "JAK-12 pad",
                "Description": "Stock pad for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    magazine() {
        const id = IDList.MAGAZINE_JAK12_8;
        const clone_id = IDList.MAGAZINE_SAGA12_5;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 2000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/magazine_jak12_12ga_10.bundle";
        item._props.Cartridges[0]._max_count = 8;
        var locs = {
            "ch": {
                "Name": "JAK-12 12/70 8发弹匣",
                "ShortName": "JAK-12 8",
                "Description": "JAK-12 的8发弹匣，使用12/70弹药。"
            },
            "en": {
                "Name": "JAK-12 12/70 8-round magazine",
                "ShortName": "JAK-12 8",
                "Description": "A 8-round magazine for JAK-12, intended for use with 12/70 shells.",
            }
        };
        var npps = {
            Weight: 0.4,
            ExtraSizeDown: 0,
            magAnimationIndex: 0
        };
        item._props = this.setItemProps(item._props, npps);
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    drum20() {
        const id = IDList.MAGAZINE_JAK12_20;
        const clone_id = "5cf8f3b0d7f00c00217872ef";
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 22000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/magazine_jak12_12ga_20.bundle";
        item._props.Cartridges[0]._max_count = 20;
        var locs = {
            "ch": {
                "Name": "Corvus JAK-12 12/70 20发弹鼓",
                "ShortName": "JAK-12 20",
                "Description": "JAK-12 的20发弹鼓，使用12/70弹药。"
            },
            "en": {
                "Name": "Corvus JAK-12 12/70 20-round drum magazine",
                "ShortName": "JAK-12 20",
                "Description": "A 20-round drum magazine for JAK-12, intended for use with  12/70 shells.",
            }
        };
        var npps = {
            ExtraSizeDown: 0,
            magAnimationIndex: 1,
            "VisibleAmmoRangesString": "1-2",
            "CheckOverride": 0
        };
        item._props = this.setItemProps(item._props, npps);
        item._props.Weight = item._props.Weight * 1.2;
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    drum32() {
        const id = IDList.MAGAZINE_JAK12_32;
        const clone_id = "5cf8f3b0d7f00c00217872ef";
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 32000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/magazine_jak12_12ga_32.bundle";
        item._props.Cartridges[0]._max_count = 32;
        var locs = {
            "ch": {
                "Name": "Corvus JAK-12 12/70 32发弹鼓",
                "ShortName": "JAK-12 32",
                "Description": "JAK-12 的32发弹鼓，使用12/70弹药。"
            },
            "en": {
                "Name": "Corvus JAK-12 12/70 32-round drum magazine",
                "ShortName": "JAK-12 32",
                "Description": "A 32-round drum magazine for JAK-12, intended for use with 12/70 shells.",
            }
        };
        var npps = {
            ExtraSizeDown: 0,
            magAnimationIndex: 1,
            "VisibleAmmoRangesString": "1-2",
            "Ergonomics": -30,
            "CheckOverride": 0,
            "LoadUnloadModifier": 20
        };
        item._props = this.setItemProps(item._props, npps);
        item._props.Weight = item._props.Weight * 1.6;
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    sight_front() {
        const id = IDList.SIGHT_FRONT_JAK12;
        const clone_id = IDList.SIGHT_FRONT_SIG_MPX;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 2000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/sight_front_jak12.bundle";
        item._props.Weight = 0.03;
        item._props.SightingRange = 100;
        item._props.CalibrationDistances = [[25]];
        var locs = {
            "ch": {
                "Name": "JAK-12 准星",
                "ShortName": "JAK-12 准星",
                "Description": "JAK-12 的可拆卸准星。"
            },
            "en": {
                "Name": "JAK-12 front sight",
                "ShortName": "JAK-12 FS",
                "Description": "A detachable front sight for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    sight_rear() {
        const id = IDList.SIGHT_REAR_JAK12;
        const clone_id = IDList.SIGHT_REAR_SAIGA12;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 2000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/sight_rear_jak12.bundle";
        item._props.Weight = 0.03;
        var locs = {
            "ch": {
                "Name": "JAK-12 照门",
                "ShortName": "JAK-12 照门",
                "Description": "JAK-12的可拆卸照门。"
            },
            "en": {
                "Name": "JAK-12 rear sight",
                "ShortName": "JAK-12 RS",
                "Description": "A detachable rear sight for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    preset() {
        const Mid = "223023A12A12A120000000";
        const id = Mid + "00";
        const parentID = Mid + "01";
        var preset = {
            _id: id,
            _name: "JAK-12 Default",
            _changeWeaponName: false,
            _parent: parentID,
            _encyclopedia: IDList.WEAPON_JAK12,
            _type: "Preset",
            _items: [
                {
                    _id: parentID,
                    _tpl: IDList.WEAPON_JAK12
                },
                {
                    _id: Mid + "02",
                    _tpl: IDList.BARREL_JAK12,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.barrel
                },
                {
                    _id: Mid + "03",
                    _tpl: IDList.MUZZLE_JAK12,
                    parentId: Mid + "02",
                    slotId: mod_slot_1.mod_slot.muzzle
                },
                {
                    _id: Mid + "04",
                    _tpl: IDList.SIGHT_FRONT_JAK12,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.sight_front
                },
                {
                    _id: Mid + "05",
                    _tpl: IDList.STOCK_JAK12_PAD,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.stock
                },
                {
                    _id: Mid + "06",
                    _tpl: IDList.MAGAZINE_JAK12_8,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.magazine
                },
                {
                    _id: Mid + "07",
                    _tpl: IDList.SIGHT_REAR_JAK12,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.sight_rear
                },
                {
                    _id: Mid + "08",
                    _tpl: IDList.HANDGUARD_JAK12,
                    parentId: parentID,
                    slotId: mod_slot_1.mod_slot.handguard
                }
            ]
        };
        this.DBpresets[id] = preset;
        this.MMA.traderGenerateAssortFromPreset(id, 220, NTrader_1.NTrader.Default, 1, Money_1.Money.EUROS);
    }
    parts_short() {
        this.short_rail_side();
        this.short_barrel();
        this.short_handguard();
    }
    short_rail_side() {
        const id = IDList.MOUNT_SHORT_JAK12_SIDE;
        const clone_id = IDList.MOUNT_MLOK_25;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 2000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/mount_jak12_side_2.bundle";
        var locs = {
            "ch": {
                "Name": "XRK Karbon护木侧导轨",
                "ShortName": "XRK Karbon",
                "Description": "安装在 JAK-12 XRK Karbon 护木两侧的导轨。"
            },
            "en": {
                "Name": "XRK Karbon handguard side rail",
                "ShortName": "XRK Karbon",
                "Description": "Side rail for JAK-12's XRK Karbon handguard.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    short_barrel() {
        const id = IDList.BARREL_SHORT_JAK12;
        const clone_id = IDList.BARREL_M870;
        let item = this.MMA.cloneItem(clone_id, id);
        item._props.Slots = [];
        var muzzle = this.MMA.newSlot(mod_slot_1.mod_slot.muzzle, "A01", id, false);
        muzzle._props.filters[0].Filter = [
            ...this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDList.bar_mp155)._props.filters[0].Filter,
            ...IDmuzzles
        ];
        item._props.Slots.push(muzzle);
        var npps = {
            Weight: 0.62,
            CenterOfImpact: 0.7,
            Recoil: 2,
            Ergonomics: 5,
            Velocity: 2
        };
        item._props = this.setItemProps(item._props, npps);
        item._props.ConflictingItems = [
            IDList.HANDGUARD_JAK12
        ];
        const Price = 3000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/barrel_jak12_short_12g.bundle";
        //Localization
        var locs = {
            "ch": {
                "Name": "Urban King JAK-12 短枪管",
                "ShortName": "Urban King",
                "Description": "JAK-12 霰弹枪的短枪管。"
            },
            "en": {
                "Name": "Urban King JAK-12 short barrel",
                "ShortName": "Urban King",
                "Description": "Short barrel for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    short_handguard() {
        const id = IDList.HANDGUARD_SHORT_JAK12;
        let item = this.MMA.cloneItem(IDList.HANDGUARD_HK416, id);
        item._props.Slots = [];
        item._props.ConflictingItems = [
            IDList.BARREL_JAK12
        ];
        const Price = 4000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/handguard_jak12_short.bundle";
        var fore_grip = this.MMA.newSlot(mod_slot_1.mod_slot.foregrip, "A0B", id, false);
        fore_grip._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDList.MOUNT_MLOK_41)._props.filters[0].Filter);
        item._props.Slots.push(fore_grip);
        var mount_001 = this.MMA.newSlot(mod_slot_1.mod_slot.mount_001, "A01", id, false);
        mount_001._props.filters[0].Filter = [
            IDList.MOUNT_SHORT_JAK12_SIDE
        ];
        item._props.Slots.push(mount_001);
        var mount_002 = this.MMA.newSlot(mod_slot_1.mod_slot.mount_002, "A02", id, false);
        mount_002._props.filters[0].Filter = [
            IDList.MOUNT_SHORT_JAK12_SIDE
        ];
        item._props.Slots.push(mount_002);
        var npps = {
            Weight: 0.35,
            ExtraSizeLeft: 0,
            Ergonomics: 12,
            CoolFactor: 0.99,
            HeatFactor: 1.02
        };
        item._props = this.setItemProps(item._props, npps);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_HK416);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
        var locs = {
            "ch": {
                "Name": "XRK Karbon JAK-12 护木",
                "ShortName": "XRK Karbon",
                "Description": "JAK-12 的 XRK Karbon 护木，适配 Urban King 短枪管。"
            },
            "en": {
                "Name": "XRK Karbon JAK-12 handguard",
                "ShortName": "XRK Karbon",
                "Description": "XRK Karbon handguard for JAK-12, compatible with the Urban King short barrel.",
            }
        };
        this.loadLoc(id, locs);
    }
    parts_heavy() {
        this.heavy_rail_side();
        this.heavy_barrel();
        this.heavy_handguard();
        this.heavy_muzzle();
    }
    heavy_rail_side() {
        const id = IDList.MOUNT_HEAVY_JAK12_SIDE;
        const clone_id = IDList.MOUNT_MLOK_25;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 2000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/mount_jak12_side_3.bundle";
        var locs = {
            "ch": {
                "Name": "JAK-12 短护木侧导轨",
                "ShortName": "JAK-12 短",
                "Description": "安装在 JAK-12 短护木两侧的导轨。"
            },
            "en": {
                "Name": "JAK-12 short handguard side rail",
                "ShortName": "JAK-12 short",
                "Description": "Side rail for JAK-12's short handguard.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    heavy_barrel() {
        const id = IDList.BARREL_HEAVY_JAK12;
        const clone_id = IDList.BARREL_M870;
        let item = this.MMA.cloneItem(clone_id, id);
        item._props.Slots = [];
        var muzzle = this.MMA.newSlot(mod_slot_1.mod_slot.muzzle, "A01", id, false);
        muzzle._props.filters[0].Filter = [
            ...this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDList.bar_mp155)._props.filters[0].Filter,
            ...IDmuzzles
        ];
        item._props.Slots.push(muzzle);
        var npps = {
            Weight: 0.85,
            Width: 3,
            CenterOfImpact: 0.64,
            "ExtraSizeLeft": 1,
            "ExtraSizeRight": 0,
            "ExtraSizeUp": 0,
            "ExtraSizeDown": 0,
            "ExtraSizeForceAdd": false,
            shotgunDispersion: 1,
            DurabilityBurnModificator: 0.9,
            HeatFactor: 0.9,
            CoolFactor: 1.1,
            Recoil: -3,
            Ergonomics: -2,
            Velocity: 3.2
        };
        item._props = this.setItemProps(item._props, npps);
        item._props.ConflictingItems = [
            IDList.HANDGUARD_JAK12,
            IDList.HANDGUARD_SHORT_JAK12
        ];
        const Price = 3000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/barrel_jak12_heavy_12g.bundle";
        //Localization
        var locs = {
            "ch": {
                "Name": "ZLR J-2800 Influx JAK-12 重枪管",
                "ShortName": "J-2800",
                "Description": "JAK-12 霰弹枪的重枪管。"
            },
            "en": {
                "Name": "ZLR J-2800 Influx heavy barrel",
                "ShortName": "J-2800",
                "Description": "Heavy barrel for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    heavy_handguard() {
        const id = IDList.HANDGUARD_HEAVY_JAK12;
        let item = this.MMA.cloneItem(IDList.HANDGUARD_HK416, id);
        item._props.Slots = [];
        item._props.ConflictingItems = [
            IDList.BARREL_JAK12,
            IDList.BARREL_SHORT_JAK12
        ];
        const Price = 4000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/handguard_jak12_heavy.bundle";
        var fore_grip = this.MMA.newSlot(mod_slot_1.mod_slot.foregrip, "A0B", id, false);
        fore_grip._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDList.MOUNT_MLOK_41)._props.filters[0].Filter);
        item._props.Slots.push(fore_grip);
        var mount_001 = this.MMA.newSlot(mod_slot_1.mod_slot.mount_001, "A01", id, false);
        mount_001._props.filters[0].Filter = [
            IDList.MOUNT_HEAVY_JAK12_SIDE
        ];
        item._props.Slots.push(mount_001);
        var mount_002 = this.MMA.newSlot(mod_slot_1.mod_slot.mount_002, "A02", id, false);
        mount_002._props.filters[0].Filter = [
            IDList.MOUNT_HEAVY_JAK12_SIDE
        ];
        item._props.Slots.push(mount_002);
        var npps = {
            Weight: 0.4,
            ExtraSizeLeft: 0,
            Ergonomics: 10,
            CoolFactor: 0.99,
            HeatFactor: 1.01
        };
        item._props = this.setItemProps(item._props, npps);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_HK416);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
        var locs = {
            "ch": {
                "Name": "ZLR J-2800 Influx JAK-12 护木",
                "ShortName": "Influx",
                "Description": "适配 ZLR J-2800 Influx 重型枪管的JAK-12护木。"
            },
            "en": {
                "Name": "ZLR J-2800 Influx JAK-12 handguard",
                "ShortName": "Influx",
                "Description": "JAK-12 handguard compatible with ZLR J-2800 Influx heavy barrel.",
            }
        };
        this.loadLoc(id, locs);
    }
    heavy_muzzle() {
        const id = IDList.MUZZLE_HEAVY_JAK12;
        const clone_id = IDList.MUZZLE_VPO209_PROTECTOR;
        let item = this.MMA.cloneItem(clone_id, id);
        var npps = {
            Weight: 0.16,
            ExtraSizeLeft: 0,
            "ExtraSizeForceAdd": false,
            Ergonomics: -2,
            Recoil: -8,
            HeatFactor: 0.99,
            CoolFactor: 1.01,
            DurabilityBurnModificator: 0.99
        };
        item._props = this.setItemProps(item._props, npps);
        const Price = 3000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/muzzle_jak12_heavy_12g.bundle";
        item._props.Weight = 0.02;
        var locs = {
            "ch": {
                "Name": "ZLR J-2800 Influx JAK-12 枪口装置",
                "ShortName": "Influx",
                "Description": "JAK-12 霰弹枪的 ZLR J-2800 Influx 枪口装置。"
            },
            "en": {
                "Name": "ZLR J-2800 Influx JAK-12 muzzle device",
                "ShortName": "Influx",
                "Description": "ZLR J-2800 Influx muzzle device for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    parts_long() {
        this.long_barrel();
        this.long_handguard();
        this.long_muzzle();
    }
    long_barrel() {
        const id = IDList.BARREL_LONG_JAK12;
        const clone_id = IDList.BARREL_M870;
        let item = this.MMA.cloneItem(clone_id, id);
        item._props.Slots = [];
        var muzzle = this.MMA.newSlot(mod_slot_1.mod_slot.muzzle, "A01", id, false);
        muzzle._props.filters[0].Filter = [
            IDList.MUZZLE_LONG_JAK12,
            ...IDmuzzles
        ];
        item._props.Slots.push(muzzle);
        var npps = {
            Weight: 1.0,
            Width: 3,
            CenterOfImpact: 0.6,
            "ExtraSizeLeft": 1,
            "ExtraSizeRight": 0,
            "ExtraSizeUp": 0,
            "ExtraSizeDown": 0,
            "ExtraSizeForceAdd": false,
            shotgunDispersion: 1,
            DurabilityBurnModificator: 1,
            HeatFactor: 0.9,
            CoolFactor: 1.1,
            "DeviationCurve": 2.5,
            "DeviationMax": 10,
            Recoil: -6,
            Ergonomics: -5,
            Velocity: 5.2
        };
        item._props = this.setItemProps(item._props, npps);
        item._props.ConflictingItems = [
            IDList.HANDGUARD_JAK12,
            IDList.HANDGUARD_SHORT_JAK12,
            IDList.HANDGUARD_HEAVY_JAK12
        ];
        const Price = 3000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/barrel_jak12_long_12g.bundle";
        //Localization
        var locs = {
            "ch": {
                "Name": "ZLR J-3600 Torrent JAK-12 延长枪管",
                "ShortName": "J-3600",
                "Description": "JAK-12 霰弹枪的延长枪管。"
            },
            "en": {
                "Name": "ZLR J-3600 Torrent JAK-12 extended barrel",
                "ShortName": "J-3600",
                "Description": "Extended barrel for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    long_handguard() {
        const id = IDList.HANDGUARD_LONG_JAK12;
        let item = this.MMA.cloneItem(IDList.HANDGUARD_HK416, id);
        item._props.Slots = [];
        item._props.ConflictingItems = [
            IDList.BARREL_JAK12,
            IDList.BARREL_SHORT_JAK12,
            IDList.BARREL_HEAVY_JAK12
        ];
        const Price = 4000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Prefab.path = "assets/jak12/mods/handguard_jak12_long.bundle";
        var fore_grip = this.MMA.newSlot(mod_slot_1.mod_slot.foregrip, "A0B", id, false);
        fore_grip._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDList.MOUNT_MLOK_41)._props.filters[0].Filter);
        item._props.Slots.push(fore_grip);
        var tac_001 = this.MMA.newSlot(mod_slot_1.mod_slot.tactical_001, "A01", id, false);
        tac_001._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.tactical, IDList.MOUNT_MLOK_25)._props.filters[0].Filter);
        item._props.Slots.push(tac_001);
        var tac_02 = this.MMA.newSlot(mod_slot_1.mod_slot.tactical_002, "A02", id, false);
        tac_02._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.tactical, IDList.MOUNT_MLOK_25)._props.filters[0].Filter);
        item._props.Slots.push(tac_02);
        var tac_00 = this.MMA.newSlot(mod_slot_1.mod_slot.tactical_000, "A03", id, false);
        tac_00._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.tactical, IDList.MOUNT_MLOK_25)._props.filters[0].Filter);
        item._props.Slots.push(tac_00);
        var npps = {
            Width: 3,
            Weight: 0.55,
            ExtraSizeLeft: 1,
            Ergonomics: 7,
            CoolFactor: 0.99,
            HeatFactor: 1.01,
            "ExtraSizeForceAdd": false
        };
        item._props = this.setItemProps(item._props, npps);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_HK416);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
        var locs = {
            "ch": {
                "Name": "ZLR J-3600 Torrent JAK-12 护木",
                "ShortName": "Torrent",
                "Description": "适配 ZLR J-3600 Torrent 延长枪管的JAK-12护木。"
            },
            "en": {
                "Name": "ZLR J-3600 Torrent JAK-12 handguard",
                "ShortName": "Torrent",
                "Description": "JAK-12 handguard compatible with ZLR J-3600 Torrent extended barrel.",
            }
        };
        this.loadLoc(id, locs);
    }
    long_muzzle() {
        const id = IDList.MUZZLE_LONG_JAK12;
        const clone_id = IDList.MUZZLE_VPO209_PROTECTOR;
        let item = this.MMA.cloneItem(clone_id, id);
        const Price = 3000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, 1, Money_1.Money.ROUBLES);
        item._props.Slots = [];
        var muzzle = this.MMA.newSlot(mod_slot_1.mod_slot.muzzle, "A01", id, false);
        muzzle._props.filters[0].Filter = this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDList.bar_mp155)._props.filters[0].Filter;
        item._props.Slots.push(muzzle);
        item._props.Prefab.path = "assets/jak12/mods/muzzle_jak12_long_12g.bundle";
        var npps = {
            Weight: 0.08,
            ExtraSizeLeft: 0,
            "ExtraSizeForceAdd": false,
            Ergonomics: 0
        };
        item._props = this.setItemProps(item._props, npps);
        var locs = {
            "ch": {
                "Name": "JAK-12 枪口装置转接器",
                "ShortName": "枪口转接器",
                "Description": "JAK-12 霰弹枪的枪口装置转接器。"
            },
            "en": {
                "Name": "JAK-12 muzzle device adapter",
                "ShortName": "muz. adapter",
                "Description": "Muzzle device adapter for JAK-12.",
            }
        };
        this.loadLoc(id, locs);
        this.DBitems[id] = item;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(clone_id);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
}
module.exports = Mass_JAK12;
//# sourceMappingURL=mass_JAK12.js.map