namespace buttons {
    //% fixedInstances
    export class FwdSolderBtnClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when a chosen event occurs
         * @param event Button pressed (down), held, released (up)
         */
        //% group="Smart Solder"
        //% block="on $this $event"
        //% blockId=fwd_solderbtn_on_event
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns the ms duration of the last button hold in ms
         */
        //% group="Smart Solder"
        //% block="$this hold duration (ms)"
        //% blockId=fwd_solderbtn_hold_duration
        holdDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false
         */
        //% group="Smart Solder"
        //% block="$this pressed"
        //% blockId=fwd_solderbtn_is_pressed
        isPressed(): boolean {
            return super.pressed()
        }
    }

    //% fixedInstance whenUsed
    export const BTN1 = new FwdSolderBtnClient("BTN1?srvo=0")
    //% fixedInstance whenUsed
    export const BTN2 = new FwdSolderBtnClient("BTN2?srvo=1")
    //% fixedInstance whenUsed
    export const BTN3 = new FwdSolderBtnClient("BTN3?srvo=2")

    //% fixedInstance whenUsed
    export const BTN4 = new FwdSolderBtnClient("BTN4")
    //% fixedInstance whenUsed
    export const BTN5 = new FwdSolderBtnClient("BTN5")
    //% fixedInstance whenUsed
    export const BTN6 = new FwdSolderBtnClient("BTN6")
}

namespace lights {
    //% fixedInstances
    export class FwdSolderLightClient extends modules.LightbulbClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
         */
        //% group="Smart Solder"
        //% blockId=fwd_solderlight_set_brightness
        //% block="set %lights brightness to %value (\\%)"
        //% weight=100
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setBrightness(value: number) {
            super.setBrightness(value)
        }
    }

    //% fixedInstance
    export const GREEN = new FwdSolderLightClient("GREEN?srvo=0")
    //% fixedInstance
    export const YELLOW = new FwdSolderLightClient("YELLOW?srvo=1")
    //% fixedInstance
    export const RED = new FwdSolderLightClient("RED?srvo=2")

    //% fixedInstance
    export const GREEN2 = new FwdSolderLightClient("GREEN2")
    //% fixedInstance
    export const YELLOW2 = new FwdSolderLightClient("YELLOW2")
    //% fixedInstance
    export const RED2 = new FwdSolderLightClient("RED2")
}
