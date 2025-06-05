// button tests
// onEvent(event: jacdac.ButtonEvent, handler: () => void)
// holdDuration(): number
// isPressed(): boolean
console.log("Button pressed? " + fwdButtons.BTN1.isPressed())
fwdButtons.BTN1.onEvent(jacdac.ButtonEvent.Down, () =>
    console.log("buttondown")
)
fwdButtons.BTN1.onEvent(jacdac.ButtonEvent.Up, () => console.log("buttonup"))
fwdButtons.BTN1.onEvent(jacdac.ButtonEvent.Hold, () =>
    console.log("Hold Duration: " + fwdButtons.BTN1.holdDuration())
)

// light tests
// setOnOff(onOff: fwdEnums.OnOff)
fwdLights.RED.setOnOff(fwdEnums.OnOff.Off) // this line simply ensures the simulator pops up without having to press A
input.onButtonPressed(Button.A, function () {
    console.log("Test Start")
    basic.pause(1000)
    fwdLights.RED.setOnOff(fwdEnums.OnOff.On)
    console.log("Light on.")
    basic.pause(1000)
    fwdLights.RED.setOnOff(fwdEnums.OnOff.Off)
    console.log("Light off.")
    basic.pause(1000)
    console.log("Test End")
})

fwdButtons.BTN2.onEvent(jacdac.ButtonEvent.Down, function () {
    delay = 3000
})
fwdButtons.BTN1.onEvent(jacdac.ButtonEvent.Down, function () {
    delay = 1000
})
fwdButtons.BTN3.onEvent(jacdac.ButtonEvent.Down, function () {
    delay = 5000
})
let delay = 0
delay = 3000
basic.forever(function () {
    fwdLights.YELLOW.setOnOff(fwdEnums.OnOff.Off)
    fwdLights.RED.setOnOff(fwdEnums.OnOff.On)
    basic.pause(delay)
    fwdLights.RED.setOnOff(fwdEnums.OnOff.Off)
    fwdLights.GREEN.setOnOff(fwdEnums.OnOff.On)
    basic.pause(delay)
    fwdLights.GREEN.setOnOff(fwdEnums.OnOff.Off)
    fwdLights.YELLOW.setOnOff(fwdEnums.OnOff.On)
    basic.pause(delay)
})
