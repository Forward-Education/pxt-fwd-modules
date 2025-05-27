// float tests
// onFloatChange(state: FloatState, handler: () => void)
// floatStateConditional(state: FloatState): boolean
// floatState(): string
sensors.float1.onFloatChange(sensors.FloatState.raised, () => {
    console.log("Event: raised")
})
sensors.float1.onFloatChange(sensors.FloatState.lowered, () => {
    console.log("Event: lowered")
})
basic.forever(() => {
    if (sensors.float1.floatStateConditional(sensors.FloatState.raised)) {
        console.log("State: " + sensors.float1.floatState())
    }
    if (sensors.float1.floatStateConditional(sensors.FloatState.lowered)) {
        console.log("State: " + sensors.float1.floatState())
    }
    basic.pause(1000)
})
