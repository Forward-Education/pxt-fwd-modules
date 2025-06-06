namespace fwdLights {
    export const enum LEDRingPixels {
        //% block="1"
        PIX1 = 0,
        //% block="2"
        PIX2 = 1,
        //% block="3"
        PIX3 = 2,
        //% block="4"
        PIX4 = 3,
        //% block="5"
        PIX5 = 4,
        //% block="6"
        PIX6 = 5,
        //% block="7"
        PIX7 = 6,
        //% block="8"
        PIX8 = 7,
    }

    //% fixedInstances
    export class FwdLEDRingClient extends modules.LedClient {
        MAX_REPORT_BRIGHTNESS = 10
        MAX_SERVICE_BRIGHTNESS = 100
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
         * Set a specific pixel to a color.
         * @param pixel the pixel number (1-8)
         * @param color the hex value of the color
         */
        //% block="set $this pixel $pixel to $color=colorNumberPicker"
        //% blockId=fwd_led_ring_set_pixel_color
        //% group="LED Ring"
        setPixelColor(pixel: LEDRingPixels, color: number): void {
            super.setPixelColor(pixel, color)
        }

        /**
         * Set all pixels to a color.
         * @param color the hex value of the color
         */
        //% block="set all $this pixels to $color=colorNumberPicker"
        //% blockId=fwd_led_set_all_pixels_color
        //% group="LED Ring"
        setAllPixelsColor(color: number): void {
            super.setAll(color)
        }

        /**
         * Set the brightness of the pixels.
         * @param brightness a number between 0 (off) and 10 (full power)
         */
        //% block="set $this brightness to $brightness"
        //% blockId=fwd_led_ring_set_brightness
        //% group="LED Ring"
        //% brightness.min=0 brightness.max=10 brightness.defl=10
        setBrightness(brightness: number): void {
            super.setBrightness(this.toServiceBrightness(brightness))
        }

        /**
         * Rotate the light pattern left or right, wrapping the last pixel back to the first
         * @param offset the number of positions to rotate, +ve = cw and -ve = ccw
         */
        //% block="rotate $this pattern by $offset"
        //% blockId=fwd_led_ring_rotate
        //% group="LED Ring"
        //% offset.defl=1
        rotate(offset: number): void {
            super.rotate(offset)
        }

        /**
         * Shift the light pattern left or right. If the light pattern is shifted past the first or last light, that part of the pattern is removed.
         * @param offset the number of positions to shift, +ve = cw and -ve = ccw
         */
        //% block="shift $this pattern by $offset"
        //% blockId=fwd_led_ring_shift
        //% group="LED Ring"
        //% offset.defl=1
        shift(offset: number): void {
            super.shift(offset)
        }

        /**
         * Returns the brightness level of the ring (0-10).
         */
        //% block="$this brightness"
        //% blockId=fwd_led_ring_get_brightness
        //% group="LED Ring"
        brightness(): number {
            return this.toBlocksBrightness(super.brightness())
        }
    }

    //% fixedInstance whenUsed
    export const ledRing1 = new FwdLEDRingClient("ledRing1")
    //% fixedInstance whenUsed
    export const ledRing2 = new FwdLEDRingClient("ledRing2")
    //% fixedInstance whenUsed
    export const ledRing3 = new FwdLEDRingClient("ledRing3")
    //% fixedInstance whenUsed
    export const ledRing4 = new FwdLEDRingClient("ledRing4")
}
