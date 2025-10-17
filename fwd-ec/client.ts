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
         * Returns the sensor's relative EC reading.
         */
        //% group="Relative EC"
        //% block="$this reading"
        //% blockId=fwd_ec_get_ec
        //% weight=100
        ec(): number {
            return Math.round(super.reading())
        }

        /**
         * Returns true when the relative EC is past the provided threshold in the designated direction.
         * @param threshold the EC value to check against
         * @param direction over or under the threshold
         */
        //% group="Relative EC"
        //% block="$this is $direction $threshold"
        //% blockId=fwd_ec_is_past_threshold
        //% weight=99
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
