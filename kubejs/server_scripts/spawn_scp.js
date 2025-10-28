function isPlayerOutdoors(level, maxY, player) {
    const px = Math.floor(player.x);
    const py = Math.floor(player.y);
    const pz = Math.floor(player.z);
    // Loop from player's Y up to the sky
    for (let y = py + 1; y <= maxY; y++) {
        const block = level.getBlock(px, y, pz);
        if (block.id != "minecraft:air") return false; // something is above player
    }
    return true; // no blocks overhead
}

function pickPos(pos, radius) {
    const r_x   = (Math.random() * 0.5)+0.5;
    const dir_x = (Math.random() < 0.5) ? -1 : 1;

    const r_z   = (Math.random() - 0.5)+0.5;
    const dir_z = (Math.random() < 0.5) ? -1 : 1;

    const x = Math.floor(pos.x + r_x * dir_x * radius);
    const z = Math.floor(pos.z + r_z * dir_z * radius);

    return {x:x, z:z}
}

let netherEntities = {
    flamingo : { max: 1, proba : 0.6, spawn : (level, player) => {

        // Random location near that player
        const {x, z} = pickPos(player, 30);

        // Find the surface Y coordinate
        const y = level.getHeight("MOTION_BLOCKING_NO_LEAVES", x, z);
        const pos = BlockPos(x, y - 1, z); // Block to stand *on*

        const blockBelow = level.getBlock(pos);

        // Only spawn if the block is solid and not a slab, stair, fence, etc.
        if (!blockBelow.blockState.isSolid()) return; // skip air, fluids, etc.
        if (blockBelow.id.includes("slab")) return;
        if (blockBelow.id.includes("stairs")) return;
        if (blockBelow.id.includes("fence")) return;
        if (blockBelow.id.includes("wall")) return;

        let n = Math.floor(Math.random() * 4)+1;
        for (let i = 0; i < n; i++) {
            // Position where the entity stands (above the solid block)
            const spawnPos = BlockPos(x + 0.5, y, z + 0.5);

            const entity = level.createEntity("pink_flamingos:pink_flamingos");
            entity.setPos(spawnPos.x, spawnPos.y, spawnPos.z);
            // Check spawn validity (prevents clipping inside blocks)
            entity.spawn();
        }
        console.log(`Spawned ${n} flamingos at ${x}, ${y}, ${z}`);
    }},
    phantom : { max: 1, proba : 0.35, spawn : (level, player) => {
        // Spawn in the air
        const y = player.y + 20 + Math.floor(Math.random() * 20);

        if (!isPlayerOutdoors(level, y, player)) return;

        // Random offset horizontally around the player
        const x = player.x + (Math.random() - 0.5) * 30;
        const z = player.z + (Math.random() - 0.5) * 30;

        const entity = level.createEntity("minecraft:phantom");
        entity.setPos(x, y, z);

        // Check if the spawn position is valid (not inside blocks)
        entity.spawn();
        console.log(`Spawned phantom at ${x.toFixed(1)}, ${y}, ${z.toFixed(1)}`);
    }},
    shulker : { max: 1, proba : 0.05, spawn : (level, player) => {
        // Choose a random location near the player
        const {x, z} = pickPos(player, 30);
        const y = level.getHeight("MOTION_BLOCKING", x, z);

        const basePos = BlockPos(x, y - 1, z);
        const block = level.getBlock(basePos);

        // Must be solid so the shulker can attach
        if (!block.blockState.isSolid()) return;

        const entity = level.createEntity("minecraft:shulker");
        entity.setPos(x + 0.5, y, z + 0.5);

        entity.spawn();
        console.log(`Spawned shulker at ${x}, ${y}, ${z}`);
    }},
}


// Spawn entities in the nether
ServerEvents.tick(event => {


    for (let player of event.server.players)  {

        if (player.level.dimension != "minecraft:the_nether") continue;
        const level = player.level;

        // Very low chance per tick
        if (Math.random() > 0.0008) continue;

        let r = Math.random();
        for (let entityName in netherEntities) {
            let entity = netherEntities[entityName];
            if (r < entity.proba) {
                for (let i = 0; i < Math.floor(Math.random() * entity.max)+1; i++) {
                    entity.spawn(level, player)
                }
                continue
            }
            r -= entity.proba; // to loop over every entity proba
        }

    }
});

EntityEvents.checkSpawn(event => {
    if (event.entity.getType() == "eyeball:scp_718" && Math.random() < 0.95) {
        event.cancel();
    }
})
