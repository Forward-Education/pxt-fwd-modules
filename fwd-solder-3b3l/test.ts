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
    console.log("Light on? " + fwdLights.RED.isOn())
    basic.pause(1000)
    fwdLights.RED.setOnOff(fwdEnums.OnOff.Off)
    console.log("Light on? " + fwdLights.RED.isOn())
    basic.pause(1000)
    console.log("Test End")
})
