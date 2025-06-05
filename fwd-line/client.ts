namespace fwdSensors {
    //% fixedInstances
    export class FwdLineFollowerClient extends modules.ReflectedLightClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns whether or not the line sensor is detecting a reflection
         */
        //% group="Line"
        //% block="$client state"
        //% blockId=fwd_line_sensor_state
        lineSensorState(): fwdEnums.OnOff {
            return Math.round(super.brightness() / 100)
        }

        /**
         * Checks for a specific line sensor state
         * @param state ON or OFF
         */
        //% group="Line"
        //% block="$client is $state"
        //% blockId=fwd_line_is_line_sensor_state
        isLineSensorState(state: fwdEnums.OnOff): boolean {
            return state === this.lineSensorState()
        }

        /**
         * Runs code when the sensor changes from one state to another
         */
        //% group="Line"
        //% block="on $client state changes"
        //% blockId=fwd_line_on_line_sensor_state_change
        onLineSensorStateChange(handler: () => void): void {
            super.onReadingChangedBy(0.5, handler)
        }
    }

    //% fixedInstance
    export const line1 = new FwdLineFollowerClient("line1?srvo=0")
    //% fixedInstance
    export const line2 = new FwdLineFollowerClient("line2?srvo=1")
    //% fixedInstance
    export const line3 = new FwdLineFollowerClient("line3?srvo=2")
}
