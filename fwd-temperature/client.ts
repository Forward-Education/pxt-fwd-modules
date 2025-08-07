namespace fwdSensors {
    //% fixedInstances
    export class FwdTemperatureClient extends modules.TemperatureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's temperature reading (°C).
         */
        //% group="Temperature Probe"
        //% block="$this °C"
        //% blockId=fwd_temperature_get_temperature
        //% weight=100
        temperature(): number {
            return super.temperature()
        }

        /**
         * Returns true when the temperature (°C) is past the provided threshold in the designated direction.
         * @param threshold the temperature (°C) to check against
         * @param direction over or under the threshold
         */
        //% group="Temperature Probe"
        //% block="$this is $direction $threshold °C"
        //% blockId=fwd_temperature_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.temperature() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const temperature1 = new FwdTemperatureClient("temperature1")
    //% fixedInstance whenUsed
    export const temperature2 = new FwdTemperatureClient("temperature2")
    //% fixedInstance whenUsed
    export const temperature3 = new FwdTemperatureClient("temperature3")
    //% fixedInstance whenUsed
    export const temperature4 = new FwdTemperatureClient("temperature4")
}
