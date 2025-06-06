namespace fwdSensors {
    //% fixedInstances
    export class FwdLineFollowerClient extends modules.ReflectedLightClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Runs code when the sensor changes between detection and no detection states.
         * @param handler the code to run
         */
        //% group="Line"
        //% block="on $this state change"
        //% blockId=fwd_line_on_line_sensor_state_change
        onLineSensorStateChange(handler: () => void): void {
            super.onReadingChangedBy(0.5, handler)
        }

        /**
         * Returns the sensor state, true is detection and false is no detection.
         */
        //% group="Line"
        //% block="$this state"
        //% blockId=fwd_line_sensor_state
        lineSensorState(): fwdEnums.OnOff {
            return Math.round(super.brightness() / 100)
        }

        /**
         * Returns true if the sensor is in the designated state.
         * @param state on or off
         */
        //% group="Line"
        //% block="$this is $state"
        //% blockId=fwd_line_is_line_sensor_state
        isLineSensorState(state: fwdEnums.OnOff): boolean {
            return state === this.lineSensorState()
        }
    }

    //% fixedInstance
    export const line1 = new FwdLineFollowerClient("line1?srvo=0")
    //% fixedInstance
    export const line2 = new FwdLineFollowerClient("line2?srvo=1")
    //% fixedInstance
    export const line3 = new FwdLineFollowerClient("line3?srvo=2")
}
