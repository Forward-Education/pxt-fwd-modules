namespace sensors {
    //% fixedInstances
    export class FwdSoilMoistureClient extends modules.SoilMoistureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's moisture level as a number between 0-100
         */
        //% group="Moisture"
        //% block="$this level (\\%)"
        //% blockId=fwd_moisture_get_moisture_level
        moistureLevel(): number {
            return super.moisture()
        }

        /**
         * Returns true when the moisture level is past the provided threshold in the designated direction.
         * @param threshold what moisture level to check against
         * @param direction over or under the threshold
         */
        //% group="Moisture"
        //% block="$this is $direction $threshold (\\%)"
        //% blockId=fwd_moisture_is_past_threshold
        //% threshold.min=0 threshold.max=100 threshold.defl=5
        isPastThreshold(
            threshold: number,
            direction: ThresholdDirection
        ): boolean {
            const difference = super.moisture() - threshold > 0
            const isPastThreshold =
                (direction === ThresholdDirection.Over && difference) ||
                (direction === ThresholdDirection.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const moisture1 = new FwdSoilMoistureClient("moisture1")
    //% fixedInstance whenUsed
    export const moisture2 = new FwdSoilMoistureClient("moisture2")
    //% fixedInstance whenUsed
    export const moisture3 = new FwdSoilMoistureClient("moisture3")
    //% fixedInstance whenUsed
    export const moisture4 = new FwdSoilMoistureClient("moisture4")
}
