namespace fwdButtons {
    //% fixedInstances
    export class FwdSolder3b3lBtnClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when a chosen event occurs
         * @param event button down, hold, or up
         * @param handler the code to run
         */
        //% group="Smart Solder"
        //% block="on $this $event"
        //% blockId=fwd_solder3b3lbtn_on_event
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns the ms duration of the last button hold in ms
         */
        //% group="Smart Solder"
        //% block="$this hold duration (ms)"
        //% blockId=fwd_solder3b3lbtn_hold_duration
        holdDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false
         */
        //% group="Smart Solder"
        //% block="$this is pressed"
        //% blockId=fwd_solder3b3lbtn_is_pressed
        isPressed(): boolean {
            return super.pressed()
        }
    }

    //% fixedInstance whenUsed
    export const BTN1 = new FwdSolder3b3lBtnClient("BTN1?srvo=0")
    //% fixedInstance whenUsed
    export const BTN2 = new FwdSolder3b3lBtnClient("BTN2?srvo=1")
    //% fixedInstance whenUsed
    export const BTN3 = new FwdSolder3b3lBtnClient("BTN3?srvo=2")

    //% fixedInstance whenUsed
    export const BTN4 = new FwdSolder3b3lBtnClient("BTN4")
    //% fixedInstance whenUsed
    export const BTN5 = new FwdSolder3b3lBtnClient("BTN5")
    //% fixedInstance whenUsed
    export const BTN6 = new FwdSolder3b3lBtnClient("BTN6")
}

namespace fwdLights {
    //% fixedInstances
    export class FwdSolder3b3lLightClient extends fwdBase.LightbulbClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Turn the light on or off.
         * @param onOff on or off
         */
        //% group="Smart Solder"
        //% block="set $this to $onOff"
        //% blockId=fwd_solder3b3llight_set_on_off
        setOnOff(onOff: fwdEnums.OnOff) {
            if (onOff === fwdEnums.OnOff.On) {
                super.setBrightness(100)
            } else {
                super.setBrightness(0)
            }
        }

        /**
         * Returns true if the light brightness is anything other than 0%.
         */
        //% group="Smart Solder"
        //% block="$this is on"
        //% blockId=fwd_solder3b3llight_is_on
        isOn(): boolean {
            return super.isOn()
        }
    }

    //% fixedInstance
    export const GREEN = new FwdSolder3b3lLightClient("GREEN?srvo=0")
    //% fixedInstance
    export const YELLOW = new FwdSolder3b3lLightClient("YELLOW?srvo=1")
    //% fixedInstance
    export const RED = new FwdSolder3b3lLightClient("RED?srvo=2")

    //% fixedInstance
    export const GREEN2 = new FwdSolder3b3lLightClient("GREEN2")
    //% fixedInstance
    export const YELLOW2 = new FwdSolder3b3lLightClient("YELLOW2")
    //% fixedInstance
    export const RED2 = new FwdSolder3b3lLightClient("RED2")
}
