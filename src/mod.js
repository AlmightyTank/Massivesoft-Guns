"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
const Mass_ModApi_1 = require("./Mass_ModApi");
const path_1 = __importDefault(require("path"));
class MainLoader {
    mod = "Massivesoft-Guns";
    beforeLoadHbList = [];
    beforeLoadItemList = [];
    logger;
    preSptModLoader;
    ThisModPath;
    FileSystem;
    db;
    mydb;
    jsonUtil;
    MassModApi;
    databaseServer;
    preSptLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        this.preSptModLoader = container.resolve("PreSptModLoader");
        this.ThisModPath = this.preSptModLoader.getModPath(this.mod);
        this.FileSystem = container.resolve("FileSystem");
    }
    async postDBLoad(container) {
        this.logger.debug(`[${this.mod}] Delayed Loading...`);
        this.databaseServer = container.resolve("DatabaseServer");
        this.jsonUtil = container.resolve("JsonUtil");
        this.MassModApi = new Mass_ModApi_1.Mass_ModApi(container);
        this.MassModApi.initMod(this.ThisModPath);
        this.db = this.databaseServer.getTables();
        const configPath = path_1.default.join(this.ThisModPath, "modWeapons.json");
        if (!this.FileSystem.exists(configPath)) {
            this.logger.error(`[${this.mod}] modWeapons.json not found!`);
            return;
        }
        const weaponConfig = await this.jsonUtil.deserialize(await this.FileSystem.read(configPath));
        const enabledWeapons = [];
        for (const weaponKey in weaponConfig) {
            const weaponData = weaponConfig[weaponKey];
            if (weaponData._enabled) {
                this.logger.log(`[${this.mod}] Enabling weapon: ${weaponData._name || weaponKey}`, "cyan");
                enabledWeapons.push(weaponKey);
            }
            else {
                this.logger.log(`[${this.mod}] Skipping disabled weapon: ${weaponData._name || weaponKey}`, "yellow");
            }
        }
        await this.loadComponetList(container, enabledWeapons);
    }
    postSptLoad(_container) {
        return;
    }
    async loadComponetList(container, componentList) {
        const BundleLoader = container.resolve("BundleLoader");
        for (const componentName of componentList) {
            const scriptDir = path_1.default.resolve(this.ThisModPath, "src", "scripts", componentName);
            const scriptFile = path_1.default.join(scriptDir, `${componentName}.js`);
            //if (componentName === "ZLR_GRAU") {
            //    await this.loadZLRGRAU(container);
            //    continue;
            //}
            if (this.FileSystem.exists(scriptFile)) {
                try {
                    const { default: ModJs } = await Promise.resolve(`${scriptFile}`).then(s => __importStar(require(s)));
                    const ModInst = new ModJs(container, this.MassModApi);
                    ModInst.onLoadMod();
                }
                catch (err) {
                    this.logger.error(`Failed to load script for ${componentName}: ${err.message}`);
                }
            }
            else {
                this.logger.log(`No script found for ${componentName}`, "magenta");
            }
            const bundlePath = path_1.default.join(this.ThisModPath, componentName, "bundles.json");
            if (this.FileSystem.exists(bundlePath)) {
                BundleLoader.addBundles(`${this.ThisModPath}/${componentName}/`);
            }
        }
    }
}
exports.mod = new MainLoader();
//# sourceMappingURL=mod.js.map