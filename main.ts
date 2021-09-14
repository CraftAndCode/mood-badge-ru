input.onButtonPressed(Button.A, function () {
    Mode = "Mood"
    if (mood == List_of_moods.length - 1) {
        mood = 0
    } else {
        mood += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    Mode = "Heart"
})
input.onButtonPressed(Button.B, function () {
    Mode = "Name"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Mode = "Watch"
})
input.onGesture(Gesture.Shake, function () {
    Mode = "Oracle"
})
let mood = 0
let Mode = ""
let List_of_moods: Image[] = []
let name = "Your name"
timeanddate.setTime(11, 30, 0, timeanddate.MornNight.AM)
List_of_moods = [
images.iconImage(IconNames.Silly),
images.iconImage(IconNames.Happy),
images.iconImage(IconNames.Sad),
images.iconImage(IconNames.Confused),
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.Fabulous),
images.createImage(`
    . . # . .
    . # . # .
    . . . # .
    . . # . .
    . . # . .
    `)
]
Mode = "Heart"
basic.forever(function () {
    if (Mode == "Heart") {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.SmallHeart)
    } else if (Mode == "Mood") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        List_of_moods[mood].showImage(0)
    } else if (Mode == "Name") {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.clearScreen()
        proportionalFont.showString("" + name + "   ", 200)
    } else if (Mode == "Watch") {
        basic.clearScreen()
        proportionalFont.showString("" + timeanddate.time(timeanddate.TimeFormat.HMMAMPM) + "   ", 200)
    } else if (Mode == "Oracle") {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        images.createBigImage(`
            . . . . # # # # # #
            . . . # # # # # # #
            . . # # # # # # # #
            . # # # # # # # # #
            # # # # # # # # # #
            `).scrollImage(1, 200)
        if (Math.randomBoolean()) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showIcon(IconNames.Happy)
        } else {
            if (Math.randomBoolean()) {
                pins.digitalWritePin(DigitalPin.P1, 1)
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showString("?")
            }
        }
        basic.pause(2000)
        if (Mode == "Oracle") {
            Mode = "Heart"
        }
    }
})
