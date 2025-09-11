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
         * Returns one of the sensor's color readings (%).
         */
        //% group="Color"
        //% block="$this $color \\%"
        //% blockId=fwd_color_get_color
        //% weight=100
        color(color: redGreenBlue): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return Math.round(values[color] * 100)
        }

        /**
         * Returns true when the color (%) is past the provided threshold in the designated direction.
         * @param threshold the color (%) to check against
         * @param direction over or under the threshold
         */
        //% group="Color"
        //% block="$this $color is $direction $threshold \\%"
        //% blockId=fwd_color_is_past_threshold
        //% weight=99
        isPastThreshold(
            color: redGreenBlue,
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.color(color) - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
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
