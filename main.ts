let 가변저항 = 0
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
basic.forever(function () {
    가변저항 = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P8, pins.analogReadPin(AnalogPin.P0))
})
basic.forever(function () {
    가변저항 = pins.analogReadPin(AnalogPin.P0)
    if (170 < 가변저항) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (170 < 가변저항 && 가변저항 < 340) {
    	
    } else if (340 < 가변저항 && 가변저항 < 510) {
    	
    } else if (340 < 가변저항 && 가변저항 < 510) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
