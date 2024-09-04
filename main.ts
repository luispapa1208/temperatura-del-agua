basic.forever(function () {
    if (input.temperature() >= 0 && input.temperature() <= 20) {
        basic.showNumber(input.temperature())
        basic.showString("T. BAJA")
        music.playTone(262, music.beat(BeatFraction.Double))
    } else if (input.temperature() >= 32 && input.temperature() <= 50) {
        basic.showNumber(input.temperature())
        basic.showString("T. ALTA")
        music.playTone(262, music.beat(BeatFraction.Double))
    } else if (input.temperature() >= 20 && input.temperature() <= 32) {
        basic.showNumber(input.temperature())
        basic.showString("T. OPTIMA")
    }
})
