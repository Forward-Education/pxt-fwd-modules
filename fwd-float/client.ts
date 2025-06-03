namespace fwdSensors {
    export const enum FloatState {
        //% block="raised"
        raised = 1,
        //% block="lowered"
        lowered = 0,
    }

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
        onFloatChange(state: FloatState, handler: () => void) {
            if (state === FloatState.raised) {
                super.onEvent(jacdac.ButtonEvent.Down, handler)
            } else if (state === FloatState.lowered) {
                super.onEvent(jacdac.ButtonEvent.Up, handler)
            }
        }

        /**
         * Returns true if the sensor is in the designated state.
         */
        //% group="Float"
        //% block="$this is $state"
        //% blockId=fwd_float_state_conditional
        floatStateConditional(state: FloatState): boolean {
            if (state === FloatState.raised) {
                return super.pressed()
            } else {
                return !super.pressed()
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
                return FloatState.raised
            } else {
                return FloatState.lowered
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
