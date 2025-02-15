controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(img`
    ...........aaaaaa55.............
    .........aaacaaafaaaaa..........
    ........caafaa55acaacac.........
    .......ffc5555555a5f5fa5........
    ......bcf5affa555fffacfffcc.....
    .....cfcaf1fa1aaabfa1cfffca.....
    ...dcaafaacca1a5aff5115cacaca...
    .aacaac511aa11151aa5115cacacccc.
    cffcaac5111111b51111115cacaaaca.
    ffacacc5b111115591111b5cacaaaacc
    afccaac5555555555555555caacccacc
    afccaac555555555555555afcaccaac.
    .ccaacc555555555555555afccaaac..
    ..acccaf55555f11c5555affcaaa....
    .....aaaf55555ff55555faaa.......
    .........aac555555a.............
    ..........a.aaacaa.a............
    .........55..cccca.55...........
    ..........588cccc5b5............
    ..........cc988c89c8............
    ............88ccc8..............
    ............c8988c..............
    ...........c888cc8..............
    ..........c89888fc..............
    ..........cccccc8c..............
    ............f...cf..............
    `, SpriteKind.Player)
mySprite.top = 102
mySprite.sayText(":)", 500, true)
