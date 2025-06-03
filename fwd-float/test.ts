// float tests
// onFloatChange(state: FloatState, handler: () => void)
// floatStateConditional(state: FloatState): boolean
// floatState(): string
fwdSensors.float1.onFloatChange(fwdSensors.FloatState.raised, () => {
    console.log("Event: raised")
})
fwdSensors.float1.onFloatChange(fwdSensors.FloatState.lowered, () => {
    console.log("Event: lowered")
})
basic.forever(() => {
    if (fwdSensors.float1.floatStateConditional(fwdSensors.FloatState.raised)) {
        console.log("State: " + fwdSensors.float1.floatState())
    }
    if (
        fwdSensors.float1.floatStateConditional(fwdSensors.FloatState.lowered)
    ) {
        console.log("State: " + fwdSensors.float1.floatState())
    }
    basic.pause(1000)
})
