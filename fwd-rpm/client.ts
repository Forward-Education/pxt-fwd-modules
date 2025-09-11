namespace fwdSensors {
    //% fixedInstances
    export class FwdRpmClient extends modules.RotationsPerMinuteClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Speed measured by the sensor.
         * Positive values are clockwise rotation and negative are counterclockwise.
         */
        //% group="RPM"
        //% block="$this RPM"
        //% blockId=fwd_rpm_get_rpm
        //% weight=100
        rpm(): number {
            return Math.round(super.reading())
        }

        /**
         * Returns true when the RPM is past the provided threshold in the designated direction.
         * @param threshold the RPM value to check against
         * @param direction over or under the threshold
         */
        //% group="RPM"
        //% block="$this is $direction $threshold RPM"
        //% blockId=fwd_rpm_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.rpm() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const rpm1 = new FwdRpmClient("RPM1")
    //% fixedInstance whenUsed
    export const rpm2 = new FwdRpmClient("RPM2")
    //% fixedInstance whenUsed
    export const rpm3 = new FwdRpmClient("RPM3")
    //% fixedInstance whenUsed
    export const rpm4 = new FwdRpmClient("RPM4")
}
