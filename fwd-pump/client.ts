namespace fwdMotors {
    //% fixedInstances
    export class FwdPumpClient extends modules.RelayClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Turn the pump on or off.
         * @param on on = true, off = false
         */
        //% group="Pump"
        //% block="turn $this $on"
        //% blockId=fwd_pump_set_on
        //% on.shadow="toggleOnOff"
        //% weight=100
        setOn(on: boolean): void {
            super.setActive(on)
        }

        /**
         * Turn on the pump for the selected duration (ms).
         * @param duration how long to run the pump (ms)
         */
        //% group="Pump"
        //% block="run $this for $duration ms"
        //% duration.shadow="timePicker"
        //% blockId=fwd_pump_timed_run
        //% weight=99
        timedRun(duration: number): void {
            control.inBackground(() => {
                this.setActive(true)
                basic.pause(duration)
                this.setActive(false)
            })
        }

        /**
         * Returns true if the pump is running and false if it's stopped.
         */
        //% group="Pump"
        //% block="$this is on"
        //% blockId=fwd_pump_is_on
        //% weight=98
        isOn(): boolean {
            return super.active()
        }
    }

    //% fixedInstance
    export const pump = new FwdPumpClient("pump")
}
