input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . # #
        . # # . .
        # . . # #
        . # # . .
        # . . # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("John Here, How Are You?        Idc, Im doing Good In The Motel.")
})
