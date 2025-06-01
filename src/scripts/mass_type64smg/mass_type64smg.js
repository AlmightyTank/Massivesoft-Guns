"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mass_ModClass_1 = require("../../Mass_ModClass");
const NTrader_1 = require("../../enum/NTrader");
const mod_slot_1 = require("../../enum/mod_slot");
const cpntName = "Mass_type64smg";
const IDList = {
    WEAPON_TYPE64: "022022C64C64000000000000",
    WEAPON_AKM: "59d6088586f774275f37482f",
    WEAPON_PPSH: "5ea03f7400685063ec28bfa8",
    WEAPON_MDR: "5c488a752e221602b412af63",
    WEAPON_MPX: "58948c8e86f77409493f7266",
    WEAPON_ASH12: "5cadfbf7ae92152ac412eeef",
    RECIEVER_PPSH: "5ea03e5009aa976f2e7a514b",
    RECIEVER_AKM: "59d6507c86f7741b846413a2",
    RECIEVER_M4A1: "5c07a8770db8340023300450",
    RECIEVER_TYPE64: "044044C64C64044000000000",
    RECIEVER_TYPE64_LSG: "044C64C64C64C64000000000",
    HANDGUARD_TYPE64_C: "0410CCC64C64CCC000000000",
    HANDGUARD_TYPE64_L: "0410FFC64C64FFF000000000",
    HANDGUARD_MIDWEST: "5c5db63a2e2216000f1b284a",
    HANDGUARD_HK416: "5bb20dfcd4351e00334c9e24",
    PISTOL_GRIP_TYPE64_DEFAULT: "042042C64C64042000000000",
    PISTOL_GRIP_TYPE64_LSG: "042F02C64C64F02000000000",
    PISTOL_GRIP_AK12: "5947f92f86f77427344a76b1",
    PISTOL_GRIP_AKM: "5649ad3f4bdc2df8348b4585",
    STOCK_TYPE64: "043043C64C64043000000000",
    STOCK_TYPE64_QTUM: "043301C64C64301000000000",
    STOCK_TYPE64_LSG: "043302C64C64302000000000",
    STOCK_AKMS: "59ff3b6a86f77477562ff5ed",
    STOCK_MCX: "5894a13e86f7742405482982",
    BARREL_ASVAL: "57c44dd02459772d2e0ae249",
    BARREL_TYPE64: "04B04BC64C6404B000000000",
    BARREL_TYPE64_LSG: "04BB01C64C64B01000000000",
    MAGAZINE_PPSH: "5ea034eb5aad6446a939737b",
    MAGAZINE_TYPE64: "02F000C64C6402F000000000",
    MAGAZINE_TYPE64_POLY: "02F111C64C64111000000000",
    AMMO_762X25_APDS: "010000abdf000000762a25ff",
    AMMO_762X25_APST: "010000abff000000762a25ff",
    AMMO_762X25_FMJ43: "5735ff5c245977640e39ba7e"
};
class Mass_type64smg extends Mass_ModClass_1.Mass_ModClass {
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
    onLoadMod() {
        const MThisModPath = this.MThisModPath;
        const Mass_ModApi = this.MMA;
        this.TYPE64();
        this.handguard_L();
        this.handguard_C();
        this.pistol_grip();
        this.pistol_grip_lsg();
        this.stock();
        this.stock_lsg();
        this.stock_qtum();
        this.barrel();
        this.barrel_lsg();
        this.reciever();
        this.reciever_lsg();
        this.ammo_apds();
        this.ammo_apst();
        // this.stock_tube();
        this.magazine();
        this.magazine_lsg();
        const cloneList = MThisModPath[cpntName].items_clone;
        Mass_ModApi.loadCloneItems(cloneList);
        // Mass_ModApi.loadTraderAssort(MThisModPath[cpntName].traders.assort, NTrader.Default);
        // Mass_ModApi.loadPresets(MThisModPath[cpntName].itemPresets);
        Mass_ModApi.loadLocales(MThisModPath[cpntName].locales);
        Mass_ModApi.loadModifierList(MThisModPath[cpntName].itemmodifier);
        this.createPresetAssortLsgC();
        this.createPresetAssortLsgL();
        this.createPresetAssort();
        // this.mount();
        // this.test();
    }
    loadLoc(id, locs) {
        for (let lang in this.DBlocales) {
            this.MMA.addNewLoc(id, lang, locs["en"]);
        }
        for (let lang in locs) {
            this.MMA.addNewLoc(id, lang, locs[lang]);
        }
    }
    TYPE64() {
        let type64 = this.JsonUtil.clone(this.DBitems[IDList.WEAPON_PPSH]);
        const id = IDList.WEAPON_TYPE64;
        type64._id = IDList.WEAPON_TYPE64;
        this.MMA.processItemSlots(type64);
        this.MMA.processItemChambers(type64);
        type64._props.Weight = 1.95;
        type64._props.Width = 2;
        const Price = 23230;
        this.DBprice[id] = Price;
        type64._props.Prefab.path = "assets/type64smg/weapon_type64_762x25_container.bundle";
        var slots = [];
        var mag = this.MMA.newSlot(mod_slot_1.mod_slot.magazine, "AAF", id);
        mag._props.filters[0].Filter = [
            IDList.MAGAZINE_TYPE64,
            IDList.MAGAZINE_TYPE64_POLY
        ];
        slots.push(mag);
        var handguard = this.MMA.newSlot(mod_slot_1.mod_slot.handguard, "AA1", id, false);
        handguard._props.filters[0].Filter = [
            IDList.HANDGUARD_TYPE64_C,
            IDList.HANDGUARD_TYPE64_L
        ];
        slots.push(handguard);
        var pistol_grip = this.MMA.newSlot(mod_slot_1.mod_slot.pistol_grip, "AA2", id, true, false);
        pistol_grip._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.pistol_grip, IDList.WEAPON_AKM)._props.filters[0].Filter);
        pistol_grip._props.filters[0].Filter.push(IDList.PISTOL_GRIP_TYPE64_DEFAULT, IDList.PISTOL_GRIP_TYPE64_LSG);
        slots.push(pistol_grip);
        var stock = this.MMA.newSlot(mod_slot_1.mod_slot.stock, "AA3", id, false);
        stock._props.filters[0].Filter = [
            IDList.STOCK_TYPE64,
            IDList.STOCK_TYPE64_LSG
        ];
        slots.push(stock);
        var recivers = this.MMA.newSlot(mod_slot_1.mod_slot.reciever, "AA4", id, true);
        recivers._props.filters[0].Filter = [
            IDList.RECIEVER_TYPE64,
            IDList.RECIEVER_TYPE64_LSG
        ];
        slots.push(recivers);
        var barrel = this.MMA.newSlot(mod_slot_1.mod_slot.barrel, "AAB", id, true);
        barrel._props.filters[0].Filter = [
            IDList.BARREL_TYPE64,
            IDList.BARREL_TYPE64_LSG
        ];
        slots.push(barrel);
        type64._props.Slots = slots;
        type64._props.defMagType = IDList.MAGAZINE_TYPE64;
        type64._props.bFirerate = 1200;
        type64._props.RecoilAngle = 90;
        type64._props.Velocity = -14;
        type64._props.CenterOfImpact = 0.15;
        type64._props.Ergonomics = 29;
        type64._props.RecoilForceBack = 362;
        type64._props.RecoilForceUp = 70;
        type64._props.AllowJam = false;
        type64._props.AllowFeed = false;
        type64._props.AllowMisfire = false;
        type64._props.AllowSlide = false;
        type64._props.AllowOverheat = false;
        type64._props.ConflictingItems.push("619b69037b9de8162902673e");
        this.DBitems[id] = type64;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.WEAPON_PPSH);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    reciever() {
        let reciever = this.JsonUtil.clone(this.DBitems[IDList.RECIEVER_AKM]);
        const id = IDList.RECIEVER_TYPE64;
        reciever._id = id;
        reciever._props.Weight = 0.09;
        reciever._props.Ergonomics = 4;
        this.MMA.processItemSlots(reciever);
        const Price = 4000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        reciever._props.Prefab.path = "assets/type64smg/mods/reciever_type64_default";
        reciever._props.Slots = [];
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = reciever;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.RECIEVER_AKM);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    reciever_lsg() {
        let reciever = this.JsonUtil.clone(this.DBitems[IDList.RECIEVER_AKM]);
        const id = IDList.RECIEVER_TYPE64_LSG;
        reciever._id = id;
        reciever._props.Weight = 0.07;
        reciever._props.Ergonomics = 2;
        this.MMA.processItemSlots(reciever);
        const Price = 5000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        reciever._props.Prefab.path = "assets/type64smg/mods/reciever_type64_lsg";
        var slots = [];
        var sight_rear = this.MMA.newSlot(mod_slot_1.mod_slot.sight_rear, "AA1", id);
        sight_rear._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.sight_rear, IDList.WEAPON_MDR)._props.filters[0].Filter);
        slots.push(sight_rear);
        reciever._props.Slots = slots;
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = reciever;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.RECIEVER_PPSH);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    handguard_C() {
        let handguard_C = this.JsonUtil.clone(this.DBitems[IDList.HANDGUARD_MIDWEST]);
        const id = IDList.HANDGUARD_TYPE64_C;
        handguard_C._id = id;
        this.MMA.processItemSlots(handguard_C);
        handguard_C._props.Weight = 0.17;
        handguard_C._props.Ergonomics = 8;
        handguard_C._props.Recoil = 0;
        handguard_C._props.ExtraSizeLeft = 1;
        handguard_C._props.ConflictingItems = [
            IDList.BARREL_TYPE64,
            IDList.RECIEVER_TYPE64
        ];
        var slots = [];
        var sight_front = this.MMA.newSlot(mod_slot_1.mod_slot.sight_front, "AA1", id);
        sight_front._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.sight_front, IDList.HANDGUARD_MIDWEST)._props.filters[0].Filter);
        slots.push(sight_front);
        var fore_grip = this.MMA.newSlot(mod_slot_1.mod_slot.foregrip, "AAF", id);
        fore_grip._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDList.HANDGUARD_MIDWEST)._props.filters[0].Filter);
        slots.push(fore_grip);
        var scope_000 = this.MMA.newSlot(mod_slot_1.mod_slot.scope + "_000", "ab0", id);
        scope_000._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.scope, IDList.HANDGUARD_HK416)._props.filters[0].Filter);
        slots.push(scope_000);
        var scope_001 = this.MMA.newSlot(mod_slot_1.mod_slot.scope + "_001", "ab1", id);
        scope_001._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.scope, IDList.RECIEVER_M4A1)._props.filters[0].Filter);
        slots.push(scope_001);
        var tacFilter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.mount_000, IDList.HANDGUARD_MIDWEST)._props.filters[0].Filter);
        for (let i = 0; i <= 1; i++) {
            var slot = this.MMA.newSlot(mod_slot_1.mod_slot.mount + "_00" + i.toString(), `AC${i.toString()}`, id);
            slot._props.filters[0].Filter = tacFilter;
            slots.push(slot);
        }
        handguard_C._props.Slots = slots;
        const Price = 14000;
        this.DBprice[id] = Price;
        handguard_C._props.Prefab.path = "assets/type64smg/mods/handguard_type64_m_lok_c.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = handguard_C;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_MIDWEST);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    handguard_L() {
        let handguard_L = this.JsonUtil.clone(this.DBitems[IDList.HANDGUARD_MIDWEST]);
        const id = IDList.HANDGUARD_TYPE64_L;
        handguard_L._id = id;
        this.MMA.processItemSlots(handguard_L);
        handguard_L._props.Weight = 0.2;
        handguard_L._props.Ergonomics = 6;
        handguard_L._props.Recoil = -1;
        handguard_L._props.ExtraSizeLeft = 2;
        handguard_L._props.ConflictingItems = [
            IDList.BARREL_TYPE64,
            IDList.RECIEVER_TYPE64
        ];
        var slots = [];
        var sight_front = this.MMA.newSlot(mod_slot_1.mod_slot.sight_front, "aa1", id);
        sight_front._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.sight_front, IDList.HANDGUARD_MIDWEST)._props.filters[0].Filter);
        slots.push(sight_front);
        var fore_grip = this.MMA.newSlot(mod_slot_1.mod_slot.foregrip, "aa2", id);
        fore_grip._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.foregrip, IDList.HANDGUARD_MIDWEST)._props.filters[0].Filter);
        slots.push(fore_grip);
        var scope_000 = this.MMA.newSlot(mod_slot_1.mod_slot.scope + "_000", "ab0", id);
        scope_000._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.scope, IDList.HANDGUARD_HK416)._props.filters[0].Filter);
        slots.push(scope_000);
        var scope_001 = this.MMA.newSlot(mod_slot_1.mod_slot.scope + "_001", "ab1", id);
        scope_001._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.scope, IDList.RECIEVER_M4A1)._props.filters[0].Filter);
        slots.push(scope_001);
        var tactical_000 = this.MMA.newSlot(mod_slot_1.mod_slot.tactical, "aa3", id);
        tactical_000._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.tactical_000, IDList.WEAPON_ASH12)._props.filters[0].Filter);
        slots.push(tactical_000);
        var tacFilter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.mount_000, IDList.HANDGUARD_MIDWEST)._props.filters[0].Filter);
        for (let i = 0; i <= 4; i++) {
            var slot = this.MMA.newSlot(mod_slot_1.mod_slot.mount + "_00" + i.toString(), `ac${i.toString()}`, id);
            slot._props.filters[0].Filter = tacFilter;
            slots.push(slot);
        }
        handguard_L._props.Slots = slots;
        const Price = 16000;
        this.DBprice[id] = Price;
        handguard_L._props.Prefab.path = "assets/type64smg/mods/handguard_type64_m_lok_l.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = handguard_L;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.HANDGUARD_MIDWEST);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    pistol_grip() {
        let pslgrp = this.JsonUtil.clone(this.DBitems[IDList.PISTOL_GRIP_AKM]);
        const id = IDList.PISTOL_GRIP_TYPE64_DEFAULT;
        pslgrp._id = id;
        this.MMA.processItemSlots(pslgrp);
        const Price = 3000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        pslgrp._props.Prefab.path = "assets/type64smg/mods/pistol_grip_type64_default.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = pslgrp;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.PISTOL_GRIP_AKM);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    pistol_grip_lsg() {
        let pslgrp = this.JsonUtil.clone(this.DBitems[IDList.PISTOL_GRIP_AK12]);
        const id = IDList.PISTOL_GRIP_TYPE64_LSG;
        pslgrp._id = id;
        this.MMA.processItemSlots(pslgrp);
        const Price = 5600;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        pslgrp._props.Prefab.path = "assets/type64smg/mods/pistol_grip_type64_lsg.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = pslgrp;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.PISTOL_GRIP_AK12);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    stock() {
        let stock = this.JsonUtil.clone(this.DBitems[IDList.STOCK_AKMS]);
        const id = IDList.STOCK_TYPE64;
        stock._id = id;
        stock._props.Weight = 0.52;
        stock._props.Slots = [];
        stock._props.IsAnimated = false;
        const Price = 1800;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        stock._props.Prefab.path = "assets/type64smg/mods/stock_type64_default";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = stock;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.STOCK_AKMS);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    stock_lsg() {
        const tube = "6197b229af1f5202c57a9bea";
        let stock = this.JsonUtil.clone(this.DBitems[tube]);
        const id = IDList.STOCK_TYPE64_LSG;
        stock._id = id;
        stock._props.Weight = 0.19;
        stock._props.Ergonomics = -1;
        stock._props.IsAnimated = false;
        stock._props.Slots = [];
        var stockslot = this.MMA.newSlot(mod_slot_1.mod_slot.stock, "aa1", id, false);
        stockslot._props.filters[0].Filter = this.JsonUtil.clone(this.MMA.itemGetSlotbyName(mod_slot_1.mod_slot.stock, IDList.WEAPON_MPX)._props.filters[0].Filter);
        // stockslot._props.filters[0].Filter.push(IDList.STOCK_TYPE64_QTUM);
        stock._props.Slots.push(stockslot);
        const Price = 2200;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        stock._props.Prefab.path = "assets/type64smg/mods/stock_type64_lsg";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = stock;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(tube);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    stock_qtum() {
        const LWSTOCK = "5fbcc437d724d907e2077d5c";
        let stock = this.JsonUtil.clone(this.DBitems[LWSTOCK]);
        const id = IDList.STOCK_TYPE64_QTUM;
        stock._id = id;
        stock._props.Slots = [];
        this.MMA.processItemSlots(stock);
        const Price = 8000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        stock._props.Prefab.path = "assets/type64smg/mods/stock_qtum.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = stock;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(LWSTOCK);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    barrel() {
        let barrel = this.JsonUtil.clone(this.DBitems[IDList.BARREL_ASVAL]);
        const id = IDList.BARREL_TYPE64;
        barrel._id = id;
        barrel._props.Weight = 0.5;
        barrel._props.Slots = [];
        barrel._props.Ergonomics = -5;
        barrel._props.Recoil = -18;
        const Price = 20000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        barrel._props.Prefab.path = "assets/type64smg/mods/barrel_typr64_default.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = barrel;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.BARREL_ASVAL);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    barrel_lsg() {
        let barrel = this.JsonUtil.clone(this.DBitems[IDList.BARREL_ASVAL]);
        const id = IDList.BARREL_TYPE64_LSG;
        barrel._id = id;
        barrel._props.Weight = 0.45;
        barrel._props.Slots = [];
        barrel._props.Ergonomics = -4;
        barrel._props.Recoil = -21;
        const Price = 25000;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        barrel._props.Prefab.path = "assets/type64smg/mods/barrel_type64_lsg.bundle";
        //	Logger.log(l85a2._props.Slots);
        this.DBitems[id] = barrel;
        this.MMA.registerNewItem(id);
        var hb = this.MMA.cloneHandbookById(IDList.BARREL_ASVAL);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    // private stock_tube() {
    //     let stock_tube = this.JsonUtil.clone(this.DBitems[IDList.STOCK_TUBE_SVD]);
    //     const id = IDList.STOCK_TUBE_QBZ03;
    //     stock_tube._id = id;
    //     this.MMA.processItemSlots(stock_tube);
    //     const Price = 2000;
    //     this.DBprice[id] = Price;
    //     stock_tube._props.Weight = 0.13
    //     stock_tube._props.Prefab.path = "assets/qbz03/tube_qbz03.bundle";
    //     this.DBitems[id] = stock_tube;
    //     this.MMA.registerNewItem(id);
    //     var hb = this.MMA.cloneHandbookById(IDList.STOCK_TUBE_SVD);
    //     hb.Id = id;
    //     this.DBhbItems.push(hb);
    // }
    magazine() {
        let mag = this.JsonUtil.clone(this.DBitems[IDList.MAGAZINE_PPSH]);
        const id = IDList.MAGAZINE_TYPE64;
        mag._id = id;
        this.DBprice[id] = this.DBprice[IDList.MAGAZINE_PPSH];
        mag._props.Prefab.path = "assets/type64smg/mods/magazine_type64_default";
        mag._props.Weight = 0.31;
        mag._props.Cartridges[0]._max_count = 30;
        this.DBitems[id] = mag;
        this.MMA.registerNewItem(id);
        this.MMA.processItemCartridges(mag);
        this.MMA.traderAddItems(id, this.DBprice[IDList.MAGAZINE_PPSH], NTrader_1.NTrader.Default);
        var hb = this.MMA.cloneHandbookById(IDList.MAGAZINE_PPSH);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    magazine_lsg() {
        let mag = this.JsonUtil.clone(this.DBitems[IDList.MAGAZINE_PPSH]);
        const id = IDList.MAGAZINE_TYPE64_POLY;
        mag._id = id;
        this.DBprice[id] = this.DBprice[IDList.MAGAZINE_PPSH];
        mag._props.ItemSound = "mag_plastic";
        mag._props.Prefab.path = "assets/type64smg/mods/magazine_type64_poly";
        mag._props.Weight = 0.2;
        mag._props.Cartridges[0]._max_count = 30;
        mag._props.LoadUnloadModifier = -5;
        mag._props.CheckTimeModifier = 0;
        this.DBitems[id] = mag;
        this.MMA.registerNewItem(id);
        this.MMA.processItemCartridges(mag);
        this.MMA.traderAddItems(id, this.DBprice[IDList.MAGAZINE_PPSH], NTrader_1.NTrader.Default);
        var hb = this.MMA.cloneHandbookById(IDList.MAGAZINE_PPSH);
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    createPresetAssort() {
        var Mid = "220064C64C646400000000";
        var presetID = Mid + "00";
        var presetParent = Mid + "01";
        var preset = {
            _id: presetID,
            _type: "Preset",
            _changeWeaponName: false,
            _name: "Type64SMG",
            _parent: presetParent,
            _encyclopedia: IDList.WEAPON_TYPE64,
            _items: [
                {
                    "_id": presetParent,
                    "_tpl": IDList.WEAPON_TYPE64,
                },
                {
                    "_id": Mid + "02",
                    "_tpl": IDList.MAGAZINE_TYPE64,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.magazine
                },
                {
                    "_id": Mid + "03",
                    "_tpl": IDList.STOCK_TYPE64,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.stock
                },
                {
                    "_id": Mid + "04",
                    "_tpl": IDList.BARREL_TYPE64,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.barrel
                },
                {
                    "_id": Mid + "05",
                    "_tpl": IDList.PISTOL_GRIP_TYPE64_DEFAULT,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.pistol_grip
                },
                {
                    "_id": Mid + "06",
                    "_tpl": IDList.RECIEVER_TYPE64,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.reciever
                }
            ]
        };
        this.DBpresets[presetID] = preset;
        this.MMA.traderGenerateAssortFromPreset(presetID, 50000, NTrader_1.NTrader.Default);
    }
    createPresetAssortLsgC() {
        var Mid = "220064C64C64CC00000000";
        var presetID = Mid + "00";
        var presetParent = Mid + "01";
        var preset = {
            _id: presetID,
            _type: "Preset",
            _changeWeaponName: true,
            _name: "TYPE64 LSG C",
            _parent: presetParent,
            _items: [
                {
                    "_id": presetParent,
                    "_tpl": IDList.WEAPON_TYPE64,
                },
                {
                    "_id": Mid + "02",
                    "_tpl": IDList.MAGAZINE_TYPE64_POLY,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.magazine
                },
                {
                    "_id": Mid + "03",
                    "_tpl": IDList.STOCK_TYPE64_LSG,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.stock
                },
                {
                    "_id": Mid + "04",
                    "_tpl": IDList.STOCK_TYPE64_QTUM,
                    "parentId": Mid + "03",
                    "slotId": mod_slot_1.mod_slot.stock
                },
                {
                    "_id": Mid + "05",
                    "_tpl": IDList.BARREL_TYPE64_LSG,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.barrel
                },
                {
                    "_id": Mid + "06",
                    "_tpl": IDList.PISTOL_GRIP_TYPE64_LSG,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.pistol_grip
                },
                {
                    "_id": Mid + "07",
                    "_tpl": IDList.HANDGUARD_TYPE64_C,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.handguard
                },
                {
                    "_id": Mid + "08",
                    "_tpl": IDList.RECIEVER_TYPE64_LSG,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.reciever
                }
            ]
        };
        this.DBpresets[presetID] = preset;
        this.MMA.traderGenerateAssortFromPreset(presetID, 66666, NTrader_1.NTrader.Default);
    }
    createPresetAssortLsgL() {
        var Mid = "220064C64C640000000000";
        var presetID = Mid + "00";
        var presetParent = Mid + "01";
        var preset = {
            _id: presetID,
            _type: "Preset",
            _changeWeaponName: true,
            _name: "TYPE64 LSG L",
            _parent: presetParent,
            _items: [
                {
                    "_id": presetParent,
                    "_tpl": IDList.WEAPON_TYPE64,
                },
                {
                    "_id": Mid + "02",
                    "_tpl": IDList.MAGAZINE_TYPE64_POLY,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.magazine
                },
                {
                    "_id": Mid + "03",
                    "_tpl": IDList.STOCK_TYPE64_LSG,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.stock
                },
                {
                    "_id": Mid + "04",
                    "_tpl": IDList.STOCK_TYPE64_QTUM,
                    "parentId": Mid + "03",
                    "slotId": mod_slot_1.mod_slot.stock
                },
                {
                    "_id": Mid + "05",
                    "_tpl": IDList.BARREL_TYPE64_LSG,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.barrel
                },
                {
                    "_id": Mid + "06",
                    "_tpl": IDList.PISTOL_GRIP_TYPE64_LSG,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.pistol_grip
                },
                {
                    "_id": Mid + "07",
                    "_tpl": IDList.HANDGUARD_TYPE64_L,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.handguard
                },
                {
                    "_id": Mid + "08",
                    "_tpl": IDList.RECIEVER_TYPE64_LSG,
                    "parentId": presetParent,
                    "slotId": mod_slot_1.mod_slot.reciever
                }
            ]
        };
        this.DBpresets[presetID] = preset;
        this.MMA.traderGenerateAssortFromPreset(presetID, 68666, NTrader_1.NTrader.Default);
    }
    ammo_apds() {
        const id = IDList.AMMO_762X25_APDS;
        const cloneid = IDList.AMMO_762X25_FMJ43;
        const Price = 300;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        var locs = {
            "ch": {
                "Name": "7.62x25毫米TT APDS",
                "ShortName": "APDS",
                "Description": "7.62x25mm TT 脱壳穿甲弹，弹头为一枚50格令.22穿甲弹头。"
            },
            "en": {
                "Name": "7.62x25mm TT APDS",
                "ShortName": "APDS",
                "Description": "Hand-loaded 7.62x25mm Tokarev cartridge with a 50gr .22 caliber armor piercing discarding sabot.",
            }
        };
        this.loadLoc(id, locs);
        var hb = this.MMA.cloneHandbookById(cloneid);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    ammo_apst() {
        const id = IDList.AMMO_762X25_APST;
        const cloneid = IDList.AMMO_762X25_FMJ43;
        const Price = 280;
        this.DBprice[id] = Price;
        this.MMA.traderAddItems(id, Price, NTrader_1.NTrader.Default);
        var locs = {
            "ch": {
                "Name": "7.62x25毫米TT APST",
                "ShortName": "APST",
                "Description": "7.62x25mm TT 钢芯穿甲弹。"
            },
            "en": {
                "Name": "7.62x25mm TT APST",
                "ShortName": "APST",
                "Description": "7.62x25mm Tokarev cartridge with a steel tip.",
            }
        };
        this.loadLoc(id, locs);
        var hb = this.MMA.cloneHandbookById(cloneid);
        hb.Price = Price;
        hb.Id = id;
        this.DBhbItems.push(hb);
    }
    test() {
        const tt = "571a12c42459771f627b58a0";
        this.DBitems[tt]._props.weapFireType.push("fullauto");
        this.DBitems[tt]._props.bFirerate = 1000;
        this.DBitems[tt]._props.SingleFireRate = 1000;
    }
}
module.exports = Mass_type64smg;
