"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mass_ModClass = void 0;
class Mass_ModClass {
    container;
    logger;
    JsonUtil;
    FileSystem;
    databaseServer;
    Table;
    DBitems;
    DBhandbooks;
    DBhbItems;
    DBprice;
    DBlocales;
    DBtraders;
    // DBquests: Record<string, IQuest>;
    DBpresets;
    DBmasterings;
    constructor(container) {
        this.container = container;
        this.logger = container.resolve("WinstonLogger");
        this.JsonUtil = container.resolve("JsonUtil");
        this.FileSystem = container.resolve("FileSystem");
        this.databaseServer = container.resolve("DatabaseServer");
        this.Table = this.databaseServer.getTables();
        this.DBitems = this.Table.templates.items;
        this.DBhandbooks = this.Table.templates.handbook;
        this.DBhbItems = this.DBhandbooks.Items;
        this.DBprice = this.Table.templates.prices;
        this.DBlocales = this.Table.locales.global;
        this.DBtraders = this.Table.traders;
        // this.DBquests = this.Table.templates.quests;
        this.DBpresets = this.Table.globals.ItemPresets;
        this.DBmasterings = this.Table.globals.config.Mastering;
    }
}
exports.Mass_ModClass = Mass_ModClass;
//# sourceMappingURL=Mass_ModClass.js.map