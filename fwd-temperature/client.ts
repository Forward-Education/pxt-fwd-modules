namespace fwdSensors {
    //% fixedInstances
    export class FwdTemperatureClient extends modules.TemperatureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's temperature reading in °C.
         */
        //% group="Temperature Probe"
        //% block="$client °C"
        //% blockId=fwd_temperature_get_temperature
        temperature(): number {
            return super.temperature()
        }

        /**
         * Returns true when the temperature is past the provided threshold in the designated direction.
         * @param threshold what temperature to check against
         * @param direction over or under the threshold
         */
        //% group="Temperature Probe"
        //% block="$client is $direction $threshold °C"
        //% blockId=fwd_temperature_is_past_threshold
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
