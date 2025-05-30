"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedNewItemFromCloneDetails = exports.StaticLootContainer = exports.copySlotInfo = exports.masterySection = void 0;
const NewItemDetails_1 = require("C:/snapshot/project/obj/models/spt/mod/NewItemDetails");
class masterySection {
    Name;
    Templates;
    Level2;
    Level3;
}
exports.masterySection = masterySection;
class copySlotInfo {
    id;
    newSlotName;
    tgtSlotName;
}
exports.copySlotInfo = copySlotInfo;
class StaticLootContainer {
    ContainerName;
    Probability;
}
exports.StaticLootContainer = StaticLootContainer;
class AdvancedNewItemFromCloneDetails extends NewItemDetails_1.NewItemDetailsBase {
    itemTplToClone;
    overrideProperties;
    parentId;
    newId;
    clearClonedProps;
    addtoInventorySlots;
    addtoModSlots;
    modSlot;
    ModdableItemWhitelist;
    ModdableItemBlacklist;
    addtoTraders;
    traderId;
    traderItems;
    barterScheme;
    loyallevelitems;
    addtoBots;
    addtostaticlootcontainer;
    addtoStaticLootContainers;
    StaticLootContainer;
    StaticLootContainers;
    Probability;
    addweaponpreset;
    weaponpresets;
    masteries;
    masterySections;
    copySlot;
    copySlots;
    addSlot;
    addSlots;
}
exports.AdvancedNewItemFromCloneDetails = AdvancedNewItemFromCloneDetails;
//# sourceMappingURL=AdvancedNewItemFromCloneDetails.js.map