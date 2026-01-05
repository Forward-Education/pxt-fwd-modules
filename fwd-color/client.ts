namespace fwdSensors {
    export const enum RedGreenBlue {
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
        color(color: RedGreenBlue): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return Math.round(values[color] * 100)
        }

        /**
         * Returns true when the color (%) is between the provided thresholds.
         * @param threshold1 the first color (%) threshold
         * @param threshold2 the second color (%) threshold
         */
        //% group="Color"
        //% block="$this $color is between $threshold1 and $threshold2 \\%"
        //% threshold1.min=0 threshold1.max=100 threshold1.defl=0
        //% threshold2.min=0 threshold2.max=100 threshold2.defl=100
        //% blockId=fwd_color_is_between
        //% weight=99
        isBetween(
            color: RedGreenBlue,
            threshold1: number,
            threshold2: number
        ): boolean {
            if (threshold1 > threshold2) {
                let holder = threshold1
                threshold1 = threshold2
                threshold2 = holder
            }
            if (this.color(color) - threshold1 < 0) {
                return false
            }
            if (this.color(color) - threshold2 > 0) {
                return false
            }
            return true
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

    //% fixedInstances
    export class FwdColorLEDClient extends fwdBase.LightbulbClient {
        constructor(role: string) {
            super(role)
            this.setBrightness(100)
        }

        /**
         * Set the brightness of the color sensor LED. Set it to 0% to turn it off.
         * @param brightness 0%-100% intensity
         */
        //% group="Color"
        //% blockId=fwd_color_set_brightness
        //% block="set $this brightness to $brightness (\\%)"
        //% brightness.min=0
        //% brightness.max=100
        //% weight=98
        setBrightness(brightness: number) {
            super.setBrightness(brightness)
        }

        /**
         * Returns true if the color sensor LED brightness is anything other than 0%.
         */
        //% group="Color"
        //% block="$this is on"
        //% blockId=fwd_color_is_on
        //% weight=97
        isOn(): boolean {
            return super.isOn()
        }
    }

    //% fixedInstance whenUsed
    export const colorLED1 = new FwdColorLEDClient("colorLED1")
    //% fixedInstance whenUsed
    export const colorLED2 = new FwdColorLEDClient("colorLED2")
    //% fixedInstance whenUsed
    export const colorLED3 = new FwdColorLEDClient("colorLED3")
    //% fixedInstance whenUsed
    export const colorLED4 = new FwdColorLEDClient("colorLED4")
}
