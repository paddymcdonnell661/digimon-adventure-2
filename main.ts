namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const bee = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 
7 e 7 e e e e 7 e e e e e e e 7 
7 e e e e e e e e e e e e e e e 
e e e b e e e e e b e e e e b e 
b e e e e e e e e e e e e e e e 
e e e e e e e b e e e b e e e e 
e e e b e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e b e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e b e e e e e e e e e e e 
e c c e e c c e e e e e c c c c 
c . . c c c . c c c c c c . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . 2 . . . . . 2 . . . . 
. . . . . 2 2 . 5 . 2 2 . . . . 
. . . . . 2 2 5 5 5 2 2 . . . . 
. . . . . 2 2 5 5 5 2 2 . . . . 
. . . . . . 2 2 5 2 2 . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bat.vy == 0) {
        bat.vy = -180
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bee, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (bat.bottom < otherSprite.bottom) {
        info.changeScoreBy(2)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee2 = sprites.create(img`
. . f . f . . . 
6 . a 5 a . 6 . 
6 6 5 5 5 6 6 . 
. f f f f f . . 
f . 5 5 5 . f . 
. . f 5 f . . . 
. f . f . f . . 
f . . . . . f . 
`, SpriteKind.bee)
    bee_x = bat.x + 80
    bee_y = Math.max(bat.y - 60, 0)
    bee2.setPosition(bee_x, bee_y)
    bee2.follow(bat)
    animation.runImageAnimation(
    bee2,
    [img`
. . f . f . . . 
6 . a 5 a . 6 . 
6 6 5 5 5 6 6 . 
. f f f f f . . 
f . 5 5 5 . f . 
. . f f f . . . 
. f . f . f . . 
f . . . . . f . 
`,img`
. . f . f . . . 
. 6 a 5 a 6 . . 
. 6 5 5 5 6 . . 
. f f f f f . . 
f . 5 5 5 . f . 
. . f f f . . . 
. f . f . f . . 
f . . . . . f . 
`],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    current_level = 2
    game.over(true)
})
let bee_y = 0
let bee_x = 0
let bee2: Sprite = null
let flower: Sprite = null
let coin2: Sprite = null
let current_level = 0
let bat: Sprite = null
scene.setBackgroundColor(9)
bat = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(bat, 100, 0)
current_level = 1
if (current_level == 1) {
    tiles.setTilemap(tiles.createTilemap(
            hex`2000080000000000000000000000000000000606060606000000000000000000000000040000000000000600000000000000030303030300000706060606000303000000000600000000000000000000060000000000000003030303030300060000030300000000000003000000000303000000000000000000000000000003000000000700000000000000000000000007000000000000000000000003000007000000030303030300000007000000000303000000030006070606000000030303000000000000000003030303030300000000000000000303030303000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . 2 2 
. . . . . . 2 . . . . 2 2 . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 
2 2 2 2 2 . . . . . . . . 2 2 . . . 2 . . . . . . . . 2 2 2 . . 
. . . . . . 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tileGrass1,myTiles.tile1,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
} else if (current_level == 2) {
    tiles.setTilemap(tiles.createTilemap(
            hex`2000080000000000000000000000000000000000000000000000000000000000000000070000000000000008030000000000000000000000000208000000000003000000000300020800010101010000000300000000000000010101000800000100010000010101010000000000000200010000000000080200000000010100000000000000000000000800030001010000000003020001010101000000000000000000000000000001010101000000000000000101000000000000000202020800000002030202000000000000010101010000000000000000000000010101010000000101010104040404040404040404040404040404040404040404040404040404`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . 
. . . . 2 . 2 2 2 2 . . . . . . . . . . . 2 2 2 . 2 . . 2 . 2 . 
. 2 2 2 2 . . . . . . . . 2 . . . . . 2 . . . . . 2 2 . . . . . 
. . . . . . 2 . . . 2 2 . . . . . . . 2 2 2 2 . . . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 2 2 . . . . . . . . . . 2 . . . 
. . . . . . . . . . 2 2 2 2 . . . . . . . . . . . 2 2 2 2 . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.hazardWater,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.dungeon.collectibleBlueCrystal,sprites.builtin.forestTiles0,sprites.builtin.field0,sprites.builtin.field1],
            TileScale.Sixteen
        ))
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else {
    tiles.setTilemap(tiles.createTilemap(
            hex`200010000000000000000000000000000000000000000000000000000000000000000008000000000003070000000000000000000302020000000000000000000000000000030000010101000003020202000001010101000000000000000700030202000101010000000000010101010000000000000000000003020200010101010100000000070300000000000000000003000700000000010101010000000000000000000001010100000307000001010101010000000000000000000000000000000000000000000001010100020200000000000002020300000000000000000000000000000000000000000001010100000000000101010101000000000000000000000000000000000000000000000702020000000000000000020200000000000002020307000000000702020200010101000000000000000003000202000000000101010101000000010101010000000000020202000000010101010100000000000000000000030000000000000000000700000300000000000000000000000000000000010101000000000000000000010101010100000000000000000000030202020000000000000003000007000000000000000000070003000000000001010101000000000001010101010100000000000000000001010101010100000606060606060606060606060606060606060606060606060606060606060606`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . 2 2 2 2 . . . . . . . 2 . . . . . 
2 2 2 . . . . . 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 . 
. . . 2 . . . . . . . . . . . . 2 . . . . 2 2 2 2 . . . . . . . 
. . . 2 2 2 . . . 2 . . 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 . . . . . 2 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
. . . . 2 . . . . 2 . . . . 2 2 2 . . . . . . . . . . . . . . . 
. 2 2 2 2 2 . . . 2 2 2 2 . . . . . . . . . . . 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . 
2 2 2 2 . . . . . 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.hazardWater,sprites.dungeon.hazardLava0,sprites.builtin.forestTiles0,sprites.dungeon.collectibleBlueCrystal],
            TileScale.Sixteen
        ))
}
bat.ay = 350
scene.cameraFollowSprite(bat)
for (let CoinPosition of tiles.getTilesByType(myTiles.tile2)) {
    coin2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 4 4 4 4 5 5 f . . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.coin)
    tiles.placeOnTile(coin2, CoinPosition)
    animation.runImageAnimation(
    coin2,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 4 4 4 4 5 5 f . . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 4 4 5 5 f . . . . 
. . . f 5 5 4 5 5 5 5 5 f . . . 
. . . f 5 5 4 5 5 5 5 5 f . . . 
. . . f 5 5 4 5 5 5 5 5 f . . . 
. . . f 5 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 f . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 4 5 5 5 f . . . . 
. . . . f 5 5 4 5 5 5 f . . . . 
. . . . f 5 5 4 5 5 5 f . . . . 
. . . . f 5 5 4 5 5 5 f . . . . 
. . . . . f 5 4 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 4 5 5 5 f . . . . 
. . . . f 5 5 4 5 5 5 f . . . . 
. . . . f 5 5 4 5 5 5 f . . . . 
. . . . f 5 5 4 5 5 5 f . . . . 
. . . . . f 5 4 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 4 4 5 5 f . . . . 
. . . f 5 5 4 5 5 5 5 5 f . . . 
. . . f 5 5 4 5 5 5 5 5 f . . . 
. . . f 5 5 4 5 5 5 5 5 f . . . 
. . . f 5 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 f . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    animation.runMovementAnimation(
    coin2,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    pause(500)
}
for (let FlowerPosition of tiles.getTilesByType(myTiles.tile3)) {
    flower = sprites.create(img`
. . . . . 2 . . . . . 2 . . . . 
. . . . . 2 2 . 2 . 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
`, SpriteKind.flower)
    tiles.placeOnTile(flower, FlowerPosition)
    pause(500)
}
game.onUpdate(function () {
    if (bat.y >= scene.screenHeight()) {
        game.over(false)
    }
})
game.onUpdate(function () {
    if (bat.vy > 0) {
        bat.setImage(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`)
    } else if (bat.vy < 0) {
        bat.setImage(img`
. . . . . . . . . . . . . . . . 
. . c c . . c c . . . . . . . . 
. . c 3 c c 3 c c c . . . . . . 
. c b 3 b c 3 b c c c . . . . . 
. c b b b b b b b b f f . . . . 
c c b b b b b b b b f f . . . . 
c b 1 b b b 1 b b c f f f . . . 
c b b b b b b b b f f f f . . . 
f b c b b b c b c c b b b . . . 
f b 1 f f f 1 b f c c c c . . . 
. f b b b b b b f b b c c . . . 
c c f b b b b b c c b b c . . . 
c c c f f f f f f c c b b c . . 
. c c c . . . . . . c c c c c . 
. . c c c . . . . . . . c c c c 
. . . . . . . . . . . . . . . . 
`)
    } else {
        bat.setImage(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`)
    }
    if (bat.vx > 0) {
        bat.image.flipX()
    }
})
