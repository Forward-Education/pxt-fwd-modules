// pH tests
// ph(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
// calibrate(standard1: number, reading1: number, standard2: number, reading2: number): void
console.log("ph: " + sensors.ph1.ph())
input.onButtonPressed(Button.A, function () {
    if (sensors.ph1.isPastThreshold(7, sensors.ThresholdDirection.Over)) {
        console.log(sensors.ph1.ph() + " is over 7")
    }
    if (sensors.ph1.isPastThreshold(7, sensors.ThresholdDirection.Under)) {
        console.log(sensors.ph1.ph() + " is under 7")
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    sensors.ph1.calibrate(4, 5, 7, 8)
})
