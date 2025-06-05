namespace fwdSensors {
    //% fixedInstances
    export class FwdDcVoltageClient extends modules.DcVoltageMeasurementClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's voltage reading in V.
         */
        //% group="Energy"
        //% block="$client V"
        //% blockId=fwd_dcvoltage_get_voltage
        voltage(): number {
            return super.reading()
        }

        /**
         * Returns true when the voltage is past the provided threshold in the designated direction.
         * @param threshold what voltage to check against
         * @param direction over or under the threshold
         */
        //% group="Energy"
        //% block="$client is $direction $threshold V"
        //% blockId=fwd_dcvoltage_is_past_threshold
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.voltage() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const voltage1 = new FwdDcVoltageClient("voltage1")
    //% fixedInstance whenUsed
    export const voltage2 = new FwdDcVoltageClient("voltage2")
    //% fixedInstance whenUsed
    export const voltage3 = new FwdDcVoltageClient("voltage3")
    //% fixedInstance whenUsed
    export const voltage4 = new FwdDcVoltageClient("voltage4")

    //% fixedInstances
    export class FwdDcCurrentClient extends modules.DcCurrentMeasurementClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's current reading in mA.
         */
        //% group="Energy"
        //% block="$client mA"
        //% blockId=fwd_dccurrent_get_current
        current(): number {
            const amps = super.reading()
            const milliamps = Math.round(amps * 1000)
            return milliamps
        }

        /**
         * Returns true when the current is past the provided threshold in the designated direction.
         * @param threshold what current to check against
         * @param direction over or under the threshold
         */
        //% group="Energy"
        //% block="$client is $direction $threshold mA"
        //% blockId=fwd_dccurrent_is_past_threshold
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.current() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const current1 = new FwdDcCurrentClient("current1")
    //% fixedInstance whenUsed
    export const current2 = new FwdDcCurrentClient("current2")
    //% fixedInstance whenUsed
    export const current3 = new FwdDcCurrentClient("current3")
    //% fixedInstance whenUsed
    export const current4 = new FwdDcCurrentClient("current4")
}
