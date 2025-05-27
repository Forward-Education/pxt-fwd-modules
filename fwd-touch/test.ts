// touch tests
// onEvent(event: jacdac.ButtonEvent, handler: () => void)
// holdDuration(): number
// isPressed(): boolean
console.log("Button pressed? " + buttons.touch1.isPressed())
buttons.touch1.onEvent(jacdac.ButtonEvent.Down, () => console.log("touchdown"))
buttons.touch1.onEvent(jacdac.ButtonEvent.Up, () => console.log("touchup"))
buttons.touch1.onEvent(jacdac.ButtonEvent.Hold, () =>
    console.log("Hold Duration: " + buttons.touch1.holdDuration())
)
