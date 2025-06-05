namespace fwdMotors {
    //% fixedInstances
    export class FwdPumpClient extends modules.RelayClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns true if the pump is running and false if it's stopped.
         */
        //% group="Pump"
        //% block="$client on"
        //% blockId=fwd_pump_is_on
        isOn(): boolean {
            return super.active()
        }

        /**
         * Turn the pump on or off.
         * @param on on = true, off = false
         */
        //% group="Pump"
        //% block="set $client $on"
        //% blockId=fwd_pump_set_on
        //% on.shadow="toggleOnOff"
        setOn(on: boolean): void {
            super.setActive(on)
        }

        /**
         * Turn on the pump for the chosen number of seconds.
         * @param duration how long to run the pump
         */
        //% group="Pump"
        //% block="run $client for $duration"
        //% duration.shadow="timePicker"
        //% blockId=fwd_pump_timed_run
        timedRun(duration: number): void {
            control.inBackground(() => {
                this.setActive(true)
                basic.pause(duration)
                this.setActive(false)
            })
        }
    }

    //% fixedInstance
    export const pump = new FwdPumpClient("pump")
}
