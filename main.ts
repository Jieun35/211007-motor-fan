let 가변저항 = 0
basic.forever(function () {
    basic.showNumber(가변저항)
})
basic.forever(function () {
    가변저항 = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P8, pins.analogReadPin(AnalogPin.P0))
})
