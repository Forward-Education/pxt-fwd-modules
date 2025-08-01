namespace fwdSensors {
    /**
     * A sensor measuring ElectricalConductivity.
     **/
    //% fixedInstances
    export class FwdEcClient extends modules.ElectricalConductivityClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's relative EC reading (mV).
         */
        //% group="Relative EC"
        //% block="$this mV"
        //% blockId=fwd_ec_get_ec
        ec(): number {
            return super.reading()
        }

        /**
         * Returns true when the relative EC (mV) is past the provided threshold in the designated direction.
         * @param threshold the relative EC (mV) to check against
         * @param direction over or under the threshold
         */
        //% group="Relative EC"
        //% block="$this is $direction $threshold mV"
        //% blockId=fwd_ec_is_past_threshold
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.ec() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const ec1 = new FwdEcClient("ec1")
    //% fixedInstance whenUsed
    export const ec2 = new FwdEcClient("ec2")
    //% fixedInstance whenUsed
    export const ec3 = new FwdEcClient("ec3")
    //% fixedInstance whenUsed
    export const ec4 = new FwdEcClient("ec4")
}
