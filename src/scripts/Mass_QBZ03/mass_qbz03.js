"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const assortConfig = require("../../../config/Mass_QBZ03/assortConfig.json");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const cpntName = "Mass_QBZ03";
const IDList = {
    WEAPON_QBZ03: "020020BBA03BBA0300000000",
    WEAPON_AKM: "59d6088586f774275f37482f",
    WEAPON_M4A1: "5447a9cd4bdc2dbd208b4567",
    HANDGUARD_QBZ03: "041041BBA03BBA0341000000",
    HANDGUARD_RAIL_QBZ03: "0410AABBA03BBA03AA000000",
    HANDGUARD_HK416: "5bb20de5d4351e0035629e59",
    PISTOL_GRIP_QBZ03: "042042BBA03BBA0342000000",
    PISTOL_GRIP_AK12: "5947f92f86f77427344a76b1",
    STOCK_QBZ03: "043043BBA03BBA0343000000",
    STOCK_AKM: "59d6514b86f774171a068a08",
    STOCK_TUBE_SVD: "6197b229af1f5202c57a9bea",
    STOCK_TUBE_QBZ03: "043BBBBBA03BBA03BB000000",
    SIGHT_QBZ03: "049049BBA03BBA0349000000",
    SIGHT_AR15: "55d5f46a4bdc2d1b198b4567",
    MOUNT_TULA: "5d2c76ed48f03532f2136169",
    MOUNT_QBZ03: "044AAABBA03BBA030A000000",
    BARREL_M4: "55d35ee94bdc2d61338b4568",
    MUZZLE_QBZ03: "04A04ABBA03BBA034A000000",
    MUZZLE_AR15: "544a38634bdc2d58388b4568",
    MAGAZINE_416: "5c05413a0db834001c390617",
    MAGAZINE_QBZ03: "02F02FBBA03BBA032F000000",
    MAGAZINE_AR15: "55d4887d4bdc2d962f8b4570",
    HANDGUARD_SEK_QBZ03: "041BEFBBA03BBA03BEF00000",
    PISTOL_GRIP_SEK_QBZ03: "042BEFBBA03BBA03BEF00000",
    MUZZLE_SEK_QBZ03: "04ABEFBBA03BBA03BEF00000",
    GAS_TUBE_AK74: "59c6633186f7740cf0493bb9",
    GAS_BLOCK_SEK_QBZ03: "04C04CBBA03BBA03CCC00000",
    CHARGE_AKM: "5648ac824bdc2ded0b8b457d",
    CHARGE_SEK_QBZ03: "04C04DBBA03BBA03DDD00000",
    RELEASE_SEK_QBZ03: "04E04FBBA03BBA03DEF00000",
    HANDGUARD_MIDWEST: "5c5db63a2e2216000f1b284a",
    STOCK_SEK_QBZ03: "043BEFBBA03BBA03EF000000"
};
class Mass_QBZ03 extends Mass_ModClass_1.Mass_ModClass {
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
        this.QBZ03();
        this.handguard();
        this.handguard_rail();
        this.pistol_grip();
        this.stock();
        this.sight_rear();
        this.muzzle();
        this.stock_tube();
        this.handguard_sek();
        this.pistol_grip_sek();
        // this.muzzle_sek();
        this.gas_block();
        this.charge_sek();
        this.stock_sek();
        this.release_sek();
        // this.magazine();
        const cloneList = await this.MThisModPath[cpntName].items_clone;

        await this.MMA.loadCloneItems(cloneList);

        // Mass_ModApi.loadTraderAssort(MThisModPath[cpntName].traders.assort, NTrader.Default);
        // Mass_ModApi.loadPresets(MThisModPath[cpntName].itemPresets);

        //this.logger.log(`${cpntName} (${JSON.stringify(this.MThisModPath[cpntName].locales)}) path: ${this.MThisModPath[cpntName].locales ? "found" : "undefined"}`, "red");

        await this.MMA.loadLocales(this.MThisModPath[cpntName].locales);
        await this.MMA.loadModifierList(this.MThisModPath[cpntName].itemmodifier);
        for (let x in cloneList) {
            var ItemList = await this.MMA.jsonRead(cloneList[x]);
            for (let i in ItemList) {
                // await this.MMA.generateHandbookByCloneItem(ItemList[i]);
                await this.MMA.generatePrice(ItemList[i].data._id, ItemList[i].cloneid);
            }
        }
        this.createPresetAssortRail();
        this.createPresetAssort();
        this.mount();
        this.test();
    }
    QBZ03() {
        let qbz03 = this.JsonUtil.clone(this.DBitems[IDList.WEAPON_AKM]);
        const id = IDList.WEAPON_QBZ03;
        qbz03._id = IDList.WEAPON_QBZ03;
        this.MMA.processItemChambers(qbz03);
        qbz03._props.Weight = 2.515;
        const Price = 23230;
        this.DBprice[id] = Price;
        qbz03._props.Prefab.path = "assets/qbz03/weapon_qbz03_container.bundle";
        qbz03._props.Ergonomics = 42;
        qbz03._props.Velocity = -1;
        qbz03._props.RecoilForceUp = 124;
        qbz03._props.RecoilForceBack = 360;
        qbz03._props.RecolDispersion = 25;
        qbz03._props.bFirerate = 750;
        qbz03._props.RecoilCamera = 0.08;
        qbz03._props.AimPlane = 0.17;
        qbz03._props.CenterOfImpact = 0.042;
        qbz03._props.ammoCaliber = this.DBitems[IDList.WEAPON_M4A1]._props.ammoCaliber;
        qbz03._props.RecoilAngle = 90;
        qbz03._props.Width = 4;
        qbz03._props.Foldable = true;
        qbz03._props.FoldedSlot = "mod_stock";
        qbz03._props.CompactHandling = true;
        var slots = [];
        var mag = this.MMA.newSlot(mod_slot_1.mod_slot.magazine, "AAF", id, false);
        mag._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.magazine, IDList.WEAPON_M4A1)._props.filters[0].Filter);
        slots.push(mag);
        var gastube = this.MMA.newSlot(mod_slot_1.mod_slot.gas_block, "AA1", id, true);
        gastube._props.filters[0].Filter = [
            IDList.HANDGUARD_QBZ03,
            IDList.HANDGUARD_RAIL_QBZ03
        ];
        slots.push(gastube);
        var pistol_grip = this.MMA.newSlot(mod_slot_1.mod_slot.pistol_grip, "AA2", id, true);
        pistol_grip._props.filters[0].Filter =
            [
                IDList.PISTOL_GRIP_QBZ03
            ];
        slots.push(pistol_grip);
        var stock = this.MMA.newSlot(mod_slot_1.mod_slot.stock, "AA3", id, false);
        stock._props.filters[0].Filter = [
            IDList.STOCK_QBZ03,
            IDList.STOCK_TUBE_QBZ03
        ];
        slots.push(stock);
        var sight_rear = this.MMA.newSlot(mod_slot_1.mod_slot.sight_rear, "AA4", id, false);
        sight_rear._props.filters[0].Filter =
            [
                IDList.SIGHT_QBZ03
            ];
        slots.push(sight_rear);
        var recivers = this.MMA.newSlot(mod_slot_1.mod_slot.reciever, "AA5", id, false);
        recivers._props.filters[0].Filter = [
            IDList.MOUNT_QBZ03
        ];
        slots.push(recivers);
        var charge = this.MMA.newSlot(mod_slot_1.mod_slot.charge, "AAC", id, false);
        charge._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.charge, IDList.WEAPON_AKM)._props.filters[0].Filter);
        slots.push(charge);
        var muzzle = this.MMA.newSlot(mod_slot_1.mod_slot.muzzle, "AA6", id, false);
        muzzle._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDList.BARREL_M4)._props.filters[0].Filter);
        muzzle._props.filters[0].Filter.push(IDList.MUZZLE_QBZ03);
        slots.push(muzzle);
        var tactical = this.MMA.newSlot(mod_slot_1.mod_slot.tactical, "AA9", id, false);
        tactical._props.filters[0].Filter = [];
        slots.push(tactical);
        qbz03._props.Slots = slots;
        qbz03._props.Chambers[0]._props.filters[0].Filter = this.JsonUtil.clone(this.DBitems[IDList.WEAPON_M4A1]._props.Chambers[0]._props.filters[0].Filter);
        qbz03._props.defMagType = this.DBitems[IDList.WEAPON_M4A1]._props.defMagType;
        qbz03._props.defAmmo = this.DBitems[IDList.WEAPON_M4A1]._props.defAmmo;
        // qbz03._props.AllowJam = false;
        // qbz03._props.AllowFeed = false;
        // qbz03._props.AllowMisfire = false;
        // qbz03._props.AllowSlide = false;
        // qbz03._props.AllowOverheat = false;
        //	Logger.log(l85a2._props.Slots);

        const locales = {
            "en": {
                "Name": "QBZ-03 5.56x45 assault rifle",
                "ShortName": "QBZ-03",
                "Description": "The Type 03 automatic rifle is a Chinese small caliber rifle developed and finalized in 2003. This gun is an export version that chambers 5.56x45mm NATO."
            }
        };

        for (const lang in locales) {
            this.MMA.addNewLoc(id, lang, locales[lang]);
        }

        this.DBitems[id] = qbz03;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.WEAPON_AKM);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    handguard() {
        let handguard = this.JsonUtil.clone(this.DBitems[IDList.HANDGUARD_HK416]);
        const id = IDList.HANDGUARD_QBZ03;
        handguard._id = id;
        this.MMA.processItemSlots(handguard);
        handguard._props.Slots = [];
        handguard._props.Weight = 0.3;
        handguard._props.Ergonomics = 8;
        handguard._props.Recoil = -1;
        handguard._props.ExtraSizeLeft = 0;
        const Price = 4000;
        this.DBprice[id] = Price;
        handguard._props.Prefab.path = "assets/qbz03/handguard/handguard_qbz03.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = handguard;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_HK416);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    handguard_rail() {
        let handguard_rail = this.JsonUtil.clone(this.DBitems[IDList.HANDGUARD_HK416]);
        const id = IDList.HANDGUARD_RAIL_QBZ03;
        handguard_rail._id = id;
        this.MMA.processItemSlots(handguard_rail);
        handguard_rail._props.Weight = 0.4;
        handguard_rail._props.Ergonomics = 6;
        handguard_rail._props.Recoil = -1;
        handguard_rail._props.ExtraSizeLeft = 0;
        var j = this.MMA.itemObjGetSlotNumbyName(mod_slot_1.mod_slot.tactical_000, handguard_rail);
        var slot = handguard_rail._props.Slots[j]._props.filters[0].Filter;
        var scope = this.MMA.itemObjGetSlotbyName(mod_slot_1.mod_slot.scope, handguard_rail);
        var newslot = [...scope._props.filters[0].Filter, ...slot];
        scope._props.filters[0].Filter = newslot;
        handguard_rail._props.Slots.splice(j, 1);
        handguard_rail._props.Slots.splice(this.MMA.itemObjGetSlotNumbyName(mod_slot_1.mod_slot.sight_front, handguard_rail), 1);
        const handguard_railConfig = assortConfig.handguard_rail;
        const Price = handguard_railConfig.price;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, handguard_railConfig.loyaltyLevel, Money_1.Money.ROUBLES);
        handguard_rail._props.Prefab.path = "assets/qbz03/handguard/handguard_qbz03_rail.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = handguard_rail;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_HK416);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    pistol_grip() {
        let pslgrp = this.JsonUtil.clone(this.DBitems[IDList.PISTOL_GRIP_AK12]);
        const id = IDList.PISTOL_GRIP_QBZ03;
        pslgrp._id = id;
        pslgrp._props.Ergonomics = 5;
        this.MMA.processItemSlots(pslgrp);
        const Price = 4000;
        this.DBprice[id] = Price;
        pslgrp._props.Prefab.path = "assets/qbz03/pistol_qbz03.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = pslgrp;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.PISTOL_GRIP_AK12);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    stock() {
        let stock = this.JsonUtil.clone(this.DBitems[IDList.STOCK_AKM]);
        const id = IDList.STOCK_QBZ03;
        stock._id = id;
        stock._props.Weight = 0.31;
        stock._props.Ergonomics = 6;
        stock._props.Recoil = -31;
        stock._props.BlocksFolding = false;
        stock._props.Slots = [];
        this.MMA.processItemSlots(stock);
        const Price = 2000;
        this.DBprice[id] = Price;
        stock._props.Prefab.path = "assets/qbz03/stock_qbz03.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = stock;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.STOCK_AKM);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    sight_rear() {
        let sight = this.JsonUtil.clone(this.DBitems[IDList.SIGHT_AR15]);
        const id = IDList.SIGHT_QBZ03;
        sight._id = id;
        this.MMA.processItemSlots(sight);
        sight._props.Weight = 0.02;
        const Price = 2000;
        this.DBprice[id] = Price;
        sight._props.Prefab.path = "assets/qbz03/sight_rear_qbz03.bundle";
        sight._props.ConflictingItems = [];
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = sight;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.SIGHT_AR15);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    mount() {
        let recivers = [
            "5649af094bdc2df8348b4586",
            "59d6507c86f7741b846413a2",
            "59e6449086f7746c9f75e822",
            "5ac50da15acfc4001718d287"
        ];
        const MNT_scope_clone_id = "618426d96c780c1e710c9b9f"; //MK17 TOP COVER
        var MNT_scope = this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.scope, IDList.MOUNT_TULA);
        var MNT_scope_clone = this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.scope, MNT_scope_clone_id);
        MNT_scope._props.filters[0].Filter = this.JsonUtil.clone(MNT_scope_clone._props.filters[0].Filter);
        this.DBitems[IDList.MOUNT_TULA]._props.ConflictingItems = [
            "5947db3f86f77447880cf76f",
            "57486e672459770abd687134",
            "5c82342f2e221644f31c060e",
            "576fd4ec2459777f0b518431",
            "5c82343a2e221644f31c0611",
            "5cf638cbd7f00c06595bc936",
            "5a7c74b3e899ef0014332c29",
            "591ee00d86f774592f7b841e",
            "5d0a29ead7ad1a0026013f27",
            "57acb6222459771ec34b5cb0",
            "5c61a40d2e2216001403158d",
            "5c90c3622e221601da359851"
        ];
        for (let x of recivers) {
            var mount = this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.mount, x);
            if (!mount._props.filters[0].Filter.includes(IDList.MOUNT_TULA)) {
                mount._props.filters[0].Filter.push(IDList.MOUNT_TULA);
            }
        }
        var Mount_tula_id_loc_ch = {
            "Name": "Tactica Tula 10000导轨",
            "ShortName": "TT10000",
            "Description": "安装在AK防尘盖上的通用导轨，由Tactica Tula公司生产。设计用以在AK系列和Saiga半自动滑膛卡宾枪上安装光学瞄准镜, 准直式瞄准镜, 激光指示器以及其他设备和配件。"
        };
        var Mount_tula_id_loc_en = {
            "Name": "Tactica Tula 10000Rail",
            "ShortName": "TT10000",
            "Description": "TT10000 Rail"
        };
        for (let lang in this.DBlocales) {
            this.MMA.addNewLoc(IDList.MOUNT_TULA, lang, Mount_tula_id_loc_en);
        }
        this.MMA.addNewLoc(IDList.MOUNT_TULA, "ch", Mount_tula_id_loc_ch);
        const id = IDList.MOUNT_QBZ03;
        let qbzMount = this.JsonUtil.clone(this.DBitems[IDList.MOUNT_TULA]);
        qbzMount._id = IDList.MOUNT_QBZ03;
        const mountConfig = assortConfig.mount;
        const Price = mountConfig.price;
        this.DBprice[IDList.MOUNT_QBZ03] = Price;
        this.MMA.processItemSlots(qbzMount);
        qbzMount._props.Weight = 0.08;
        qbzMount._props.Prefab.path = "assets/qbz03/mount_qbz03.bundle";
        qbzMount._props.Ergonomics = -1;
        this.DBitems[IDList.MOUNT_QBZ03] = qbzMount;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.MOUNT_TULA);
        hb.Id = id;
        this.DBhbItems.push(hb);
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, mountConfig.loyaltyLevel, Money_1.Money.ROUBLES);
    }
    muzzle() {
        let muzzle = this.JsonUtil.clone(this.DBitems[IDList.MUZZLE_AR15]);
        const id = IDList.MUZZLE_QBZ03;
        muzzle._id = id;
        muzzle._props.Weight = 0.1;
        muzzle._props.Slots = [];
        muzzle._props.Ergonomics = -2;
        muzzle._props.Recoil = -8;
        const Price = 8000;
        this.DBprice[id] = Price;
        muzzle._props.Prefab.path = "assets/qbz03/muzzle_qbz03.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = muzzle;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.MUZZLE_AR15);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    stock_tube() {
        let stock_tube = this.JsonUtil.clone(this.DBitems[IDList.STOCK_TUBE_SVD]);
        const id = IDList.STOCK_TUBE_QBZ03;
        stock_tube._id = id;
        this.MMA.processItemSlots(stock_tube);
        const stock_tubeConfig = assortConfig.stock_tube;
        const Price = stock_tubeConfig.price;
        this.DBprice[id] = Price;
        stock_tube._props.Weight = 0.13;
        stock_tube._props.BlocksFolding = true;
        stock_tube._props.Prefab.path = "assets/qbz03/tube_qbz03.bundle";
        this.DBitems[id] = stock_tube;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.STOCK_TUBE_SVD);
        hb.Id = id;
        this.DBhbItems.push(hb);
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, stock_tubeConfig.loyaltyLevel, Money_1.Money.ROUBLES);
    }
    magazine() {
        let mag = this.JsonUtil.clone(this.DBitems[IDList.MAGAZINE_416]);
        const id = IDList.MAGAZINE_QBZ03;
        mag._id = IDList.MAGAZINE_QBZ03;
        this.DBprice[id] = this.DBprice[IDList.MAGAZINE_416];
        this.DBitems[id] = mag;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_HK416);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    createPresetAssort() {
        var presetID = "220000C03C03000000000000";
        var presetParent = "220000C03C03000000000001";
        var preset = {
            _id: presetID,
            _type: "Preset",
            _changeWeaponName: false,
            _name: "QBZ-03",
            _encyclopedia: presetID,
            _parent: presetParent,
            _encyclopedia: IDList.WEAPON_QBZ03,
            _items: [
                {
                    "_id": presetParent,
                    "_tpl": IDList.WEAPON_QBZ03,
                },
                {
                    "_id": "220000C03C03000000000002",
                    "_tpl": IDList.MAGAZINE_AR15,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.magazine
                },
                {
                    "_id": "220000C03C03000000000003",
                    "_tpl": IDList.SIGHT_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.sight_rear
                },
                {
                    "_id": "220000C03C03000000000004",
                    "_tpl": IDList.STOCK_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.stock
                },
                {
                    "_id": "220000C03C03000000000005",
                    "_tpl": IDList.MUZZLE_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.muzzle
                },
                {
                    "_id": "220000C03C0300000000000E",
                    "_tpl": IDList.GAS_BLOCK_SEK_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.gas_block
                },
                {
                    "_id": "220000C03C03000000000006",
                    "_tpl": IDList.HANDGUARD_QBZ03,
                    "parentId": "220000C03C0300000000000E",
                    "slotId": mod_slot_1.mod_slot.handguard
                },
                {
                    "_id": "220000C03C03000000000007",
                    "_tpl": IDList.PISTOL_GRIP_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.pistol_grip
                }
            ]
        };
        const locales = {
            "en": {
                "Name": "QBZ-03 5.56x45 assault rifle",
                "ShortName": "QBZ-03",
                "Description": "The Type 03 automatic rifle is a Chinese small caliber rifle developed and finalized in 2003. This gun is an export version that chambers 5.56x45mm NATO."
            }
        };

        for (const lang in locales) {
            this.MMA.addNewLoc(presetID, lang, locales[lang]);
        }
        this.DBpresets[presetID] = preset;
        const Config = assortConfig.Assort;
        this.MMA.traderGenerateAssortFromPreset(presetID, Config.price, NTrader_1.NTrader.Default, Config.loyaltyLevel);
    }
    createPresetAssortRail() {
        var presetID = "220000C03C03A00000000000";
        var presetParent = "220000C03C03A00000000001";
        var preset = {
            _id: presetID,
            _type: "Preset",
            _changeWeaponName: false,
            _encyclopedia: presetID,
            _name: "QBZ-03 Rail",
            _parent: presetParent,
            _items: [
                {
                    "_id": presetParent,
                    "_tpl": IDList.WEAPON_QBZ03,
                },
                {
                    "_id": "220000C03C03A00000000002",
                    "_tpl": IDList.MAGAZINE_AR15,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.magazine
                },
                {
                    "_id": "220000C03C03A00000000003",
                    "_tpl": IDList.SIGHT_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.sight_rear
                },
                {
                    "_id": "220000C03C03A00000000004",
                    "_tpl": IDList.STOCK_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.stock
                },
                {
                    "_id": "220000C03C03A00000000005",
                    "_tpl": IDList.MUZZLE_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.muzzle
                },
                {
                    "_id": "220000C03C03A0000000000E",
                    "_tpl": IDList.GAS_BLOCK_SEK_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.gas_block
                },
                {
                    "_id": "220000C03C03A00000000006",
                    "_tpl": IDList.HANDGUARD_RAIL_QBZ03,
                    "parentId": "220000C03C03A0000000000E",
                    "slotId": mod_slot_1.mod_slot.handguard
                },
                {
                    "_id": "220000C03C03A00000000007",
                    "_tpl": IDList.PISTOL_GRIP_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.pistol_grip
                },
                {
                    "_id": "220000C03C03A00000000008",
                    "_tpl": IDList.MOUNT_QBZ03,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.reciever
                }
            ]
        };
        const locales = {
            "en": {
                "Name": "QBZ-03 5.56x45 assault rifle",
                "ShortName": "QBZ-03 Rail",
                "Description": "The Type 03 automatic rifle is a Chinese small caliber rifle developed and finalized in 2003. This gun is an export version that chambers 5.56x45mm NATO."
            }
        };

        for (const lang in locales) {
            this.MMA.addNewLoc(presetID, lang, locales[lang]);
        }
        this.DBpresets[presetID] = preset;
        const Config = assortConfig.AssortRail;
        this.MMA.traderGenerateAssortFromPreset(presetID, Config.price, NTrader_1.NTrader.Default, Config.loyaltyLevel);
    }
    test() {
        if (true) {
            return;
        }
        let mags = this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.magazine, IDList.WEAPON_M4A1)._props.filters[0].Filter;
        for (let i in mags) {
            this.logger.log(`${this.DBlocales.ch[`${mags[i]} Name`]} : ${this.DBitems[mags[i]]._props.magAnimationIndex} , ${this.DBitems[mags[i]]._props.AnimationVariantsNumber}`, "cyan");
        }
        let Amags = this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.magazine, IDList.WEAPON_AKM)._props.filters[0].Filter;
        for (let i in Amags) {
            this.logger.log(`${this.DBlocales.ch[`${Amags[i]} Name`]} : ${this.DBitems[Amags[i]]._props.magAnimationIndex} , ${this.DBitems[Amags[i]]._props.AnimationVariantsNumber}`, "cyan");
        }
    }
    handguard_sek() {
        let handguard_sek = this.JsonUtil.clone(this.DBitems[IDList.HANDGUARD_HK416]);
        const id = IDList.HANDGUARD_SEK_QBZ03;
        handguard_sek._id = id;
        handguard_sek._props.Weight = 0.43;
        handguard_sek._props.Ergonomics = 10;
        handguard_sek._props.Recoil = -1;
        handguard_sek._props.ExtraSizeLeft = 0;
        handguard_sek._props.Width = 4;
        handguard_sek._props.ConflictingItems = [IDList.MOUNT_QBZ03];
        var Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName("mod_mount_004", IDList.HANDGUARD_MIDWEST)._props.filters[0].Filter);
        var m00 = this.MMA.newSlot("mod_mount_000", "0A0", id, false, false, Filter);
        var m01 = this.MMA.newSlot("mod_mount_001", "0A1", id, false, false, Filter);
        var m02 = this.MMA.newSlot("mod_mount_002", "0A2", id, false, false, Filter);
        var m03 = this.MMA.newSlot("mod_mount_003", "0A3", id, false, false, Filter);
        var m04 = this.MMA.newSlot("mod_mount_004", "0A4", id, false, false, Filter);
        var tac = this.MMA.newSlot(mod_slot_1.mod_slot.tactical, "0A5", id, false, false, this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.tactical_000, "5bd70322209c4d00d7167b8f")._props.filters[0].Filter));
        handguard_sek._props.Slots = [
            m00, m01, m02, m03, m04, tac,
            this.JsonUtil.clone(this.MMA.itemGetSlotbyName("mod_scope", "622b3d5cf9cfc87d675d2de9")), //"mount_m14_ultimak_m8_forward_optic_mount"
            this.JsonUtil.clone(this.MMA.itemGetSlotbyName("mod_mount", "622b3d5cf9cfc87d675d2de9")), //"mount_m14_ultimak_m8_forward_optic_mount"
            this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDList.HANDGUARD_MIDWEST)),
        ];
        this.MMA.processItemSlots(handguard_sek);
        const handguard_sekConfig = assortConfig.handguard_sek;
        const Price = handguard_sekConfig.price;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, handguard_sekConfig.loyaltyLevel, Money_1.Money.ROUBLES);
        handguard_sek._props.Prefab.path = "assets/qbz03_sek/handguard_qbz03_sek_hmmlok01.bundle";
        this.DBitems[id] = handguard_sek;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_HK416);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    pistol_grip_sek() {
        let pslgrp = this.JsonUtil.clone(this.DBitems[IDList.PISTOL_GRIP_AK12]);
        const id = IDList.PISTOL_GRIP_SEK_QBZ03;
        pslgrp._id = id;
        pslgrp._props.Weight += 0.01;
        this.MMA.processItemSlots(pslgrp);
        const pistol_grip_sekConfig = assortConfig.pistol_grip_sek;
        const Price = pistol_grip_sekConfig.price;
        this.DBprice[id] = Price;
        pslgrp._props.Prefab.path = "assets/qbz03_sek/pistol_qbz03_sek_wb02.bundle";
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, pistol_grip_sekConfig.loyaltyLevel);
        this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.pistol_grip, IDList.WEAPON_QBZ03)._props.filters[0].Filter.push(id);
        this.DBitems[id] = pslgrp;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.PISTOL_GRIP_AK12);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    muzzle_sek() {
        let muzzle = this.JsonUtil.clone(this.DBitems[IDList.MUZZLE_AR15]);
        const id = IDList.MUZZLE_SEK_QBZ03;
        muzzle._id = id;
        muzzle._props.Weight = 0.1;
        muzzle._props.Slots = [];
        muzzle._props.Ergonomics = -2;
        muzzle._props.Recoil = -8;
        const muzzle_sekConfig = assortConfig.muzzle_sek;
        const Price = muzzle_sekConfig.price;
        this.DBprice[id] = Price;
        muzzle._props.Prefab.path = "assets/qbz03_sek/muzzle_qbz03_ztq_my.bundle";
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, muzzle_sekConfig.loyaltyLevel);
        this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.muzzle, IDList.WEAPON_QBZ03)._props.filters[0].Filter.push(id);
        this.DBitems[id] = muzzle;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.MUZZLE_AR15);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    gas_block() {
        let gas_block = this.JsonUtil.clone(this.DBitems[IDList.GAS_TUBE_AK74]);
        const id = IDList.GAS_BLOCK_SEK_QBZ03;
        gas_block._id = id;
        gas_block._props.Weight = 0.005;
        this.MMA.itemObjGetSlotbyName(mod_slot_1.mod_slot.handguard, gas_block)._props.filters[0].Filter = [
            IDList.HANDGUARD_QBZ03,
            IDList.HANDGUARD_RAIL_QBZ03,
            IDList.HANDGUARD_SEK_QBZ03
        ];
        this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.gas_block, IDList.WEAPON_QBZ03)._props.filters[0].Filter = [id];
        this.MMA.processItemSlots(gas_block);
        const Price = 3000;
        this.DBprice[id] = Price;
        gas_block._props.Prefab.path = "assets/qbz03_sek/gas_block_qbz03.bundle";
        this.DBitems[id] = gas_block;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.GAS_TUBE_AK74);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    charge_sek() {
        let charge_sek = this.JsonUtil.clone(this.DBitems[IDList.CHARGE_AKM]);
        const id = IDList.CHARGE_SEK_QBZ03;
        charge_sek._id = id;
        charge_sek._props.Ergonomics = 4;
        const Config = assortConfig.charge_sek;
        const Price = Config.price;
        this.DBprice[id] = Price;
        charge_sek._props.Prefab.path = "assets/qbz03_sek/charge_qbz03_sek_ljb01.bundle";
        this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.charge, IDList.WEAPON_QBZ03)._props.filters[0].Filter.push(id);
        this.DBitems[id] = charge_sek;
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, Config.loyaltyLevel);
        var hb = this.MMA.cloneHandbookById(IDList.CHARGE_AKM);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    stock_sek() {
        let stock = this.JsonUtil.clone(this.DBitems[IDList.STOCK_AKM]);
        const id = IDList.STOCK_SEK_QBZ03;
        stock._id = id;
        stock._props.Weight = 0.75;
        stock._props.Ergonomics = 16;
        stock._props.Recoil = -27;
        stock._props.BlocksFolding = true;
        stock._props.Slots = [];
        const Config = assortConfig.stock_sek;
        const Price = Config.price;
        this.DBprice[id] = Price;
        stock._props.Prefab.path = "assets/qbz03_sek/stock_qbz03_sek.bundle";
        this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.stock, IDList.WEAPON_QBZ03)._props.filters[0].Filter.push(id);
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, Config.loyaltyLevel);
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = stock;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.STOCK_AKM);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    release_sek() {
        let release_sek = this.JsonUtil.clone(this.DBitems[IDList.CHARGE_AKM]);
        const id = IDList.RELEASE_SEK_QBZ03;
        release_sek._props.Weight = 0.005;
        release_sek._id = id;
        release_sek._props.Ergonomics = 2;
        const Config = assortConfig.release_sek;
        const Price = Config.price;
        this.DBprice[id] = Price;
        release_sek._props.Prefab.path = "assets/qbz03_sek/release_qbz03_sek.bundle";
        this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.tactical, IDList.WEAPON_QBZ03)._props.filters[0].Filter.push(id);
        this.DBitems[id] = release_sek;
        this.MMA.registerNewItem(id);
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default, Config.loyaltyLevel);
        var hb = this.MMA.cloneHandbookById(IDList.CHARGE_AKM);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
}
module.exports = Mass_QBZ03;
