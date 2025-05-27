// dial tests
// position()
// onRotated(direction: DialDirection, handler: () => void): void
buttons.dial1.onRotated(buttons.DialDirection.CW, () =>
    console.log("turned -> position " + buttons.dial1.position())
)
buttons.dial1.onRotated(buttons.DialDirection.CCW, () =>
    console.log("turned <- position " + +buttons.dial1.position())
)

// button tests
// onEvent(event: jacdac.ButtonEvent, handler: () => void)
// holdDuration(): number
// isPressed(): boolean
console.log("Button pressed? " + buttons.dialButton1.isPressed())
buttons.dialButton1.onEvent(jacdac.ButtonEvent.Down, () =>
    console.log("dialdown")
)
buttons.dialButton1.onEvent(jacdac.ButtonEvent.Up, () => console.log("dialup"))
buttons.dialButton1.onEvent(jacdac.ButtonEvent.Hold, () =>
    console.log("Hold Duration: " + buttons.dialButton1.holdDuration())
)
