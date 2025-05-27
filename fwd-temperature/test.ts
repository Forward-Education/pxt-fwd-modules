// temperature tests
// temperature(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
console.log("temperature: " + sensors.temperature1.temperature())
input.onButtonPressed(Button.A, function () {
    if (
        sensors.temperature1.isPastThreshold(
            25,
            sensors.ThresholdDirection.Over
        )
    ) {
        console.log(sensors.temperature1.temperature() + " is over 25°C")
    }
    if (
        sensors.temperature1.isPastThreshold(
            25,
            sensors.ThresholdDirection.Under
        )
    ) {
        console.log(sensors.temperature1.temperature() + " is under 25°C")
    }
    basic.pause(1000)
})
