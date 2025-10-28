let loot_batch = {
    "militaristic_playdoh:play_doh_cup_closed_pink" : 0.01,
    "militaristic_playdoh:play_doh_cup_closed_green" : 0.01,
    "militaristic_playdoh:play_doh_cup_closed_brown" : 0.01,
    "militaristic_playdoh:play_doh_cup_closed_orange" : 0.01,
    "militaristic_playdoh:play_doh_cup_closed_red" : 0.01,
    "militaristic_playdoh:play_doh_cup_closed_yellow" : 0.01,
    "militaristic_playdoh:play_doh_cup_closed_blue" : 0.01,
    "take_only_two:scp_330" : 0.02,
    "panacea:panacea_container_5" : 0.04,
    "malo:phone": 0.04,
    "tempad:tempad" : 0.002,
    "gas_mask:scp_1499_item" : 0.01,
    "the_old_ai:scp_079_offline" : 0.01,
    "eidolon:soulbone_amulet" : 0.01,
    "eidolon:void_amulet" : 0.01,
    "eidolon:basic_amulet" : 0.01,
    "eidolon:sanguine_amulet" : 0.01,
    "thecowbell:scp_513_item" : 0.03,
    "lovecraftian_locket:lovecraftian_locket" : 0.01,
    "thebestweedintheworld:scp_420_j" : 0.02,
    "thebestweedintheworld:scp_420_j_seeds" : 0.005,
    "createaddition:electrum_amulet" : 0.01,
    "colabottles:scp_207" : 0.04,
    "colabottles:broken_scp_207" : 0.01,
    "shy_guy:scramble_goggles_helmet" : 0.01,
    "buttghos:plunger" : 0.02,
    "botania:fire_resistance" : 0.01,
    "botania:cosmetic_tiny_potato_mask" : 0.02,
    "botania:cosmetic_eerie_mask" : 0.01,
    "botania:cosmetic_ancient_mask" : 0.01,
    "mekanism:hazmat_mask" : 0.01,
    "mekanism:hazmat_gown" : 0.01,
    "mekanism:hazmat_pants" : 0.01,
    "pink_flamingos:pink_flamingos_spawn_egg" : 0.01,
    "exposure:camera" : 0.02,
    "camera:camera" : 0.02
}


let loot_tables = ["minecraft:chests/desert_pyramid", "minecraft:chests/village/village_plains_house", "minecraft:chests/simple_dungeon", "minecraft:chests/shipwreck_supply", "minecraft:chests/stronghold_library", "minecraft:chests/woodland_mansion", "minecraft:chests/village/village_butcher", "minecraft:chests/stronghold_crossing", "minecraft:chests/village/village_snowy_house", "minecraft:chests/igloo_chest", "minecraft:chests/village/village_tannery", "minecraft:chests/spawn_bonus_chest"]

LootJS.modifiers(event => {
    for (let loot_table of loot_tables) {
        for (let loot_to_add in loot_batch) {

            event.addLootTableModifier(loot_table)
                .randomChance(loot_batch[loot_to_add])
                .addLoot(loot_to_add);

            event.addLootTableModifier(loot_table)
                .removeLoot("enderio:wood_gear")
        }
    }
});
