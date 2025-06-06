namespace fwdSensors {
    //% fixedInstances
    export class FwdFloatClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when the chosen event occurs.
         */
        //% group="Float"
        //% block="on $this $state"
        //% blockId=fwd_float_on_change
        onFloatChange(state: fwdEnums.RaisedLowered, handler: () => void) {
            if (state === fwdEnums.RaisedLowered.Raised) {
                super.onEvent(jacdac.ButtonEvent.Down, handler)
            } else if (state === fwdEnums.RaisedLowered.Lowered) {
                super.onEvent(jacdac.ButtonEvent.Up, handler)
            }
        }

        /**
         * Returns the sensor state, 1 is raised and 0 is lowered.
         */
        //% group="Float"
        //% block="$this state"
        //% blockId=fwd_float_state
        floatState(): number {
            if (super.pressed()) {
                return fwdEnums.RaisedLowered.Raised
            } else {
                return fwdEnums.RaisedLowered.Lowered
            }
        }

        /**
         * Returns true if the sensor is in the designated state.
         */
        //% group="Float"
        //% block="$this is $state"
        //% blockId=fwd_float_state_conditional
        floatStateConditional(state: fwdEnums.RaisedLowered): boolean {
            if (state === fwdEnums.RaisedLowered.Raised) {
                return super.pressed()
            } else {
                return !super.pressed()
            }
        }
    }

    //% fixedInstance whenUsed
    export const float1 = new FwdFloatClient("float1")
    //% fixedInstance whenUsed
    export const float2 = new FwdFloatClient("float2")
    //% fixedInstance whenUsed
    export const float3 = new FwdFloatClient("float3")
    //% fixedInstance whenUsed
    export const float4 = new FwdFloatClient("float4")
}
