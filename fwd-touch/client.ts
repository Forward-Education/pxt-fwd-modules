namespace fwdButtons {
    //% fixedInstances
    export class FwdTouchClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when a chosen event occurs
         * @param event button down, hold, or up
         * @param handler the code to run
         */
        //% group="Touch"
        //% block="on $this $event"
        //% blockId=fwd_touch_on_event
        //% weight=100
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns the duration (ms) of the button hold in ms
         */
        //% group="Touch"
        //% block="$this hold duration (ms)"
        //% blockId=fwd_touch_hold_duration
        //% weight=99
        holdDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false
         */
        //% group="Touch"
        //% block="$this is pressed"
        //% blockId=fwd_touch_is_pressed
        //% weight=98
        isPressed(): boolean {
            return super.pressed()
        }
    }

    //% fixedInstance whenUsed
    export const touch1 = new FwdTouchClient("touch1")
    //% fixedInstance whenUsed
    export const touch2 = new FwdTouchClient("touch2")
    //% fixedInstance whenUsed
    export const touch3 = new FwdTouchClient("touch3")
    //% fixedInstance whenUsed
    export const touch4 = new FwdTouchClient("touch4")
}
