namespace fwdSensors {
    //% fixedInstances
    export class FwdEco2Client extends modules.ECO2Client {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's estimated CO2 (eCO2) reading (ppm).
         */
        //% group="eCO2"
        //% block="$this ppm"
        //% blockId=fwd_eco2_get_eco2
        //% weight=100
        eco2(): number {
            return super.eCO2()
        }

        /**
         * Returns true when the eCO2 (ppm) is past the provided threshold in the designated direction.
         * @param threshold the eCO2 (ppm) to check against
         * @param direction over or under the threshold
         */
        //% group="eCO2"
        //% block="$this is $direction $threshold \\%"
        //% blockId=fwd_eco2_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.eco2() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const eCO2_1 = new FwdEco2Client("eCO2_1")
    //% fixedInstance whenUsed
    export const eCO2_2 = new FwdEco2Client("eCO2_2")
    //% fixedInstance whenUsed
    export const eCO2_3 = new FwdEco2Client("eCO2_3")
    //% fixedInstance whenUsed
    export const eCO2_4 = new FwdEco2Client("eCO2_4")

    //% fixedInstances
    export class FwdTvocClient extends modules.TvocClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's total VOC (tVOC) reading.
         */
        //% group="tVOC"
        //% block="$this reading"
        //% blockId=fwd_tvoc_get_tvoc
        //% weight=98
        tvoc(): number {
            return super.tVOC()
        }

        /**
         * Returns true when the tVOC reading is past the provided threshold in the designated direction.
         * @param threshold the tVOC value to check against
         * @param direction over or under the threshold
         */
        //% group="tVOC"
        //% block="$this is $direction $threshold"
        //% blockId=fwd_eco2_is_past_threshold
        //% weight=97
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.tvoc() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const tvoc1 = new FwdTvocClient("tVOC1")
    //% fixedInstance whenUsed
    export const tvoc2 = new FwdTvocClient("tVOC2")
    //% fixedInstance whenUsed
    export const tvoc3 = new FwdTvocClient("tVOC3")
    //% fixedInstance whenUsed
    export const tvoc4 = new FwdTvocClient("tVOC4")
}
