namespace sensors {
    //% fixedInstances
    export class FwdSolarClient extends modules.LightLevelClient {
        MAX_REPORT_BRIGHTNESS = 100
        MAX_SERVICE_BRIGHTNESS = 1

        toBlocksBrightness(serviceBrightness: number): number {
            return (
                (this.MAX_REPORT_BRIGHTNESS * serviceBrightness) /
                this.MAX_SERVICE_BRIGHTNESS
            )
        }

        toServiceBrightness(reportBrightness: number): number {
            return (
                (this.MAX_SERVICE_BRIGHTNESS * reportBrightness) /
                this.MAX_REPORT_BRIGHTNESS
            )
        }

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's light level as a number between 0-100
         */
        //% group="Solar"
        //% block="$this light level (\\%)"
        //% blockId=fwd_solar_get_light_level
        lightLevel(): number {
            return super.lightLevel()
        }

        /**
         * Returns true when the light level is past the provided threshold in the designated direction.
         * @param threshold what light level to check against
         * @param direction over or under the threshold
         */
        //% group="Solar"
        //% block="$this is $direction $threshold (\\%)"
        //% blockId=fwd_solar_is_past_threshold
        //% threshold.min=0 threshold.max=100 threshold.defl=5
        isPastThreshold(
            threshold: number,
            direction: ThresholdDirection
        ): boolean {
            const difference = super.lightLevel() - threshold > 0
            const isPastThreshold =
                (direction === ThresholdDirection.Over && difference) ||
                (direction === ThresholdDirection.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const solar1 = new FwdSolarClient("solar1")
    //% fixedInstance whenUsed
    export const solar2 = new FwdSolarClient("solar2")
    //% fixedInstance whenUsed
    export const solar3 = new FwdSolarClient("solar3")
    //% fixedInstance whenUsed
    export const solar4 = new FwdSolarClient("solar4")
}
