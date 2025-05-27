namespace buttons {
    export const enum DialDirection {
        //% block="↻"
        CW,
        //% block="↺"
        CCW,
    }

    //% fixedInstances
    export class FwdDialClient extends modules.RotaryEncoderClient {
        private _cwAction: () => void
        private _ccwAction: () => void

        constructor(role: string) {
            super(role)

            this._cwAction = () => {}
            this._ccwAction = () => {}

            // this sets up the functions to run when the dial is turned clockwise or counterclockwise
            // initially the functions are blank, they get assigned by the makecode program through fwdOnDialTurned()
            super.onReadingChangedBy(1, (delta: number) => {
                if (delta < 0) {
                    this._cwAction()
                } else {
                    this._ccwAction()
                }
            })
        }

        /**
         * The position of the dial relative to it's starting position when it was connected.
         * 0 is the starting position. A clockwise click is +1. A counterclockwise click is -1.
         * It does not reset to 0 after 1 full rotation. Instead it continues to increment.
         */
        //% group="Dial"
        //% block="$this position"
        //% blockId=fwd_dial_position
        position(): number {
            return super.position()
        }

        /**
         * Run code when the dial is rotated in the chosen direction.
         * @param direction choose between clockwise (CW) and counterclockwise (CCW)
         */
        //% group="Dial"
        //% block="on $this rotated $direction"
        //% blockId=fwd_dial_on_rotated
        //% weight=98
        onRotated(direction: DialDirection, handler: () => void): void {
            if (direction === DialDirection.CW) {
                this._cwAction = handler
            } else {
                this._ccwAction = handler
            }
        }
    }

    //% fixedInstance whenUsed
    export const dial1 = new FwdDialClient("dial1")
    //% fixedInstance whenUsed
    export const dial2 = new FwdDialClient("dial2")
    //% fixedInstance whenUsed
    export const dial3 = new FwdDialClient("dial3")
    //% fixedInstance whenUsed
    export const dial4 = new FwdDialClient("dial4")

    //% fixedInstances
    export class FwdDialButtonClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when the chosen event occurs. The hold event fires every 100ms that the button is held.
         * @param event button down, hold, or up
         */
        //% group="Dial"
        //% block="on $this $event"
        //% blockId=fwd_dialbutton_on_event
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns how long the button has been held in ms.
         */
        //% group="Dial"
        //% block="$this hold duration (ms)"
        //% blockId=fwd_dialbutton_hold_duration
        holdDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false.
         */
        //% group="Dial"
        //% block="$this pressed"
        //% blockId=fwd_dialbutton_is_pressed
        isPressed(): boolean {
            return super.pressed()
        }
    }

    //% fixedInstance whenUsed
    export const dialButton1 = new FwdDialButtonClient("dialButton1")
    //% fixedInstance whenUsed
    export const dialButton2 = new FwdDialButtonClient("dialButton2")
    //% fixedInstance whenUsed
    export const dialButton3 = new FwdDialButtonClient("dialButton3")
    //% fixedInstance whenUsed
    export const dialButton4 = new FwdDialButtonClient("dialButton4")
}
