let graden = 0
basic.forever(function () {
    graden = input.compassHeading()
    if (graden < 45 || graden < 45) {
        basic.showString("n")
    } else if (graden < 135) {
        basic.showString("o")
    } else if (graden < 225) {
        basic.showString("z")
    } else {
        basic.showString("w")
    }
})
