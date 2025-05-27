namespace sensors {
    export const enum LineSensorState {
        //% block="OFF"
        OFF = 0,
        //% block="ON"
        ON = 1,
    }

    //% fixedInstances
    export class FwdLineFollowerClient extends modules.ReflectedLightClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns whether or not the line sensor is detecting a reflection
         */
        //% group="Line"
        //% block="$this state"
        //% blockId=fwd_line_sensor_state
        fwdLineSensorState(): LineSensorState {
            return Math.round(super.brightness() / 100)
        }

        /**
         * Checks for a specific line sensor state
         * @param state ON or OFF
         */
        //% group="Line"
        //% block="$this is $state"
        //% blockId=fwd_line_sensor_state_check
        fwdIsLineSensorState(state: LineSensorState): boolean {
            return state === this.fwdLineSensorState()
        }

        /**
         * Runs code when the sensor changes from one state to another
         */
        //% group="Line"
        //% block="on $this state changes"
        //% blockId=fwd_line_sensor_on_state_change
        fwdOnLineSensorStateChange(handler: () => void): void {
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
