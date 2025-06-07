const fs = require("fs");
const path = require("path");

const massPath = path.join(__dirname, "src", "scripts", "Mass_ISOH", "Mass_ISOH.js");
const assortPath = path.join(__dirname, "config", "Mass_ISOH", "assortConfig.json");

const massLines = fs.readFileSync(massPath, "utf8").split("\n");
let assortConfig = JSON.parse(fs.readFileSync(assortPath, "utf8"));

// 1. Extract IDDL map
const iddlMap = {};
let insideIDDL = false;

for (const line of massLines) {
    if (line.includes("const IDDL = {")) {
        insideIDDL = true;
        continue;
    }
    if (insideIDDL && line.includes("};")) {
        break;
    }
    if (insideIDDL) {
        const match = line.match(/^\s*([A-Z0-9_]+):\s*"([0-9A-Z]+)"/);
        if (match) {
            iddlMap[match[1]] = match[2];
        }
    }
}

// 2. Scan line-by-line and detect items
let insideItem = false;
let braceDepth = 0;
let currentBlock = [];
let updated = 0;

for (let line of massLines) {
    if (line.includes("{")) braceDepth++;
    if (line.includes("}")) braceDepth--;

    if (braceDepth >= 2) {
        insideItem = true;
        currentBlock.push(line);
    } else if (insideItem && braceDepth < 2) {
        insideItem = false;

        // Join block
        const block = currentBlock.join("\n");
        currentBlock = [];

        const idMatch = block.match(/newId:\s*IDDL\.([A-Z0-9_]+)/);
        const priceMatch = block.match(/barterScheme:\s*\[\s*{[^}]*count:\s*(\d+)/);

        if (idMatch && priceMatch) {
            const iddlKey = idMatch[1];
            const resolvedId = iddlMap[iddlKey];
            const price = parseInt(priceMatch[1]);

            if (resolvedId) {
                assortConfig[resolvedId] = {
                    price,
                    loyaltyLevel: 1
                };
                console.log(`✅ Added ${resolvedId} → ${price}`);
                updated++;
            } else {
                console.warn(`⚠️ Unresolved IDDL: ${iddlKey}`);
            }
        }
    }
}

if (updated > 0) {
    fs.writeFileSync(assortPath, JSON.stringify(assortConfig, null, 2), "utf8");
    console.log(`\n✅ Done. ${updated} entries added to assortConfig.json`);
} else {
    console.warn("\n⚠️ No matching items were found.");
}