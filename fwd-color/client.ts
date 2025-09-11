namespace fwdSensors {
    export const enum redGreenBlue {
        //% block="red"
        Red = 0,
        //% block="green"
        Green = 1,
        //% block="blue"
        Blue = 2,
    }

    //% fixedInstances
    export class FwdColorClient extends modules.ColorClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's red reading.
         */
        //% group="Color"
        //% block="$this $color"
        //% blockId=fwd_ph_get_ph
        //% weight=100
        reading(color: redGreenBlue): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[color] * 100
        }

        // /**
        //  * Returns true when the pH is past the provided threshold in the designated direction.
        //  * @param threshold the pH to check against
        //  * @param direction over or under the threshold
        //  */
        // //% group="pH"
        // //% block="$this is $direction $threshold pH"
        // //% blockId=fwd_ph_is_past_threshold
        // //% weight=99
        // isPastThreshold(
        //     threshold: number,
        //     direction: fwdEnums.OverUnder
        // ): boolean {
        //     const difference = this.ph() - threshold > 0
        //     const isPastThreshold =
        //         (direction === fwdEnums.OverUnder.Over && difference) ||
        //         (direction === fwdEnums.OverUnder.Under && !difference)
        //     return isPastThreshold
        // }
    }

    //% fixedInstance whenUsed
    export const color1 = new FwdColorClient("color1")
    //% fixedInstance whenUsed
    export const color2 = new FwdColorClient("color2")
    //% fixedInstance whenUsed
    export const color3 = new FwdColorClient("color3")
    //% fixedInstance whenUsed
    export const color4 = new FwdColorClient("color4")
}
