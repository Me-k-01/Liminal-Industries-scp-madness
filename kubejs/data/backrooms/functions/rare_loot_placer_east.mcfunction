scoreboard players set max RNG_Constant 15
function backrooms:rng

execute if score RNG RNG_Variable matches 1 run setblock ~ ~ ~ refurbished_furniture:recycle_bin{LootTable:"minecraft:chests/desert_pyramid"}
execute if score RNG RNG_Variable matches 2 run setblock ~ ~ ~ refurbished_furniture:light_toaster[facing=west]{LootTable:"minecraft:chests/village/village_tannery"}
execute if score RNG RNG_Variable matches 3 run setblock ~ ~ ~ minecraft:jukebox
execute if score RNG RNG_Variable matches 4 run setblock ~ ~ ~ refurbished_furniture:light_stove[facing=west]{LootTable:"minecraft:chests/village/village_butcher"}
execute if score RNG RNG_Variable matches 5 run setblock ~ ~ ~ refurbished_furniture:light_stove[facing=west]{LootTable:"minecraft:chests/village/village_butcher"}
execute if score RNG RNG_Variable matches 6 run setblock ~ ~ ~ refurbished_furniture:light_microwave[facing=west]{LootTable:"minecraft:chests/shipwreck_supply"}
execute if score RNG RNG_Variable matches 7 run setblock ~ ~ ~ refurbished_furniture:red_cooler[facing=west]{LootTable:"minecraft:chests/spawn_bonus_chest"}
execute if score RNG RNG_Variable matches 8 run setblock ~ ~ ~ refurbished_furniture:light_electricity_generator[facing=west]{LootTable:"minecraft:chests/stronghold_crossing"}
execute if score RNG RNG_Variable matches 9 run setblock ~ ~ ~ refurbished_furniture:oak_drawer[facing=west]{LootTable:"minecraft:chests/simple_dungeon"}
execute if score RNG RNG_Variable matches 10 run function backrooms:weird_chair
execute if score RNG RNG_Variable matches 11 run setblock ~ ~ ~ refurbished_furniture:plate
execute if score RNG RNG_Variable matches 12 run setblock ~ ~ ~ moyai:moyai[facing=east]
execute if score RNG RNG_Variable matches 13 run setblock ~ ~ ~ kubejs:batteries
execute if score RNG RNG_Variable matches 14 run function backrooms:wet_spot
