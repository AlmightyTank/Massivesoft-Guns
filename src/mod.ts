import { Mass_ModApi } from "./Mass_ModApi";

import path from "path";

class MainLoader {
    private mod = "Massivesoft-Guns";
    private beforeLoadHbList: string[] = [];
    private beforeLoadItemList: string[] = [];

    private logger: any;
    private preSptModLoader: any;
    private ThisModPath: string;
    private FileSystem: any;
    private db: any;
    private mydb: any;
    private jsonUtil: any;
    private MassModApi: any;
    private databaseServer: any;

    preSptLoad(container: any): void {
        this.logger = container.resolve("WinstonLogger");
        this.preSptModLoader = container.resolve("PreSptModLoader");
        this.ThisModPath = this.preSptModLoader.getModPath(this.mod);
        this.FileSystem = container.resolve("FileSystem");
    }

    async postDBLoad(container: any): Promise<void> {
        this.logger.debug(`[${this.mod}] Delayed Loading...`);

        this.databaseServer = container.resolve("DatabaseServer");
        this.jsonUtil = container.resolve("JsonUtil");
        this.MassModApi = new Mass_ModApi(container);
        this.MassModApi.initMod(this.ThisModPath);

        this.db = this.databaseServer.getTables();

        const configPath = path.join(this.ThisModPath, "modWeapons.json");
        if (!this.FileSystem.exists(configPath)) {
            this.logger.error(`[${this.mod}] modWeapons.json not found!`);
            return;
        }

        const weaponConfig = await this.jsonUtil.deserialize(await this.FileSystem.read(configPath));
        const enabledWeapons: string[] = [];

        for (const weaponKey in weaponConfig) {
            const weaponData = weaponConfig[weaponKey];
            if (weaponData._enabled) {
                this.logger.log(`[${this.mod}] Enabling weapon: ${weaponData._name || weaponKey}`, "cyan");
                enabledWeapons.push(weaponKey);
            } else {
                this.logger.log(`[${this.mod}] Skipping disabled weapon: ${weaponData._name || weaponKey}`, "yellow");
            }
        }

        await this.loadComponetList(container, enabledWeapons);
    }

    postSptLoad(_container: any): void {
        return;
    }

    async loadComponetList(container: any, componentList: string[]): Promise<void> {
        const BundleLoader = container.resolve("BundleLoader");

        for (const componentName of componentList) {
            const scriptDir = path.resolve(this.ThisModPath, "src", "scripts", componentName);
            const scriptFile = path.join(scriptDir, `${componentName}.js`);

            //if (componentName === "ZLR_GRAU") {
            //    await this.loadZLRGRAU(container);
            //    continue;
            //}

            if (this.FileSystem.exists(scriptFile)) {
                try {
                    const { default: ModJs } = await import(scriptFile);
                    const ModInst = new ModJs(container, this.MassModApi);
                    ModInst.onLoadMod();
                } catch (err) {
                    this.logger.error(`Failed to load script for ${componentName}: ${err.message}`);
                }
            } else {
                this.logger.log(`No script found for ${componentName}`, "magenta");
            }

            const bundlePath = path.join(this.ThisModPath, componentName, "bundles.json");
            if (this.FileSystem.exists(bundlePath)) {
                BundleLoader.addBundles(`${this.ThisModPath}/${componentName}/`);
            }
        }
    }
}

export const mod = new MainLoader();
