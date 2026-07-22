namespace fwdLights {
    export const enum LEDRingPixels {
        //% block="1"
        Pixel1 = 0,
        //% block="2"
        Pixel2 = 1,
        //% block="3"
        Pixel3 = 2,
        //% block="4"
        Pixel4 = 3,
        //% block="5"
        Pixel5 = 4,
        //% block="6"
        Pixel6 = 5,
        //% block="7"
        Pixel7 = 6,
        //% block="8"
        Pixel8 = 7,
    }

    //% fixedInstances
    export class FwdLEDRingClient extends modules.LedClient {
        BRIGHTNESS_LUT: number[]
        constructor(role: string) {
            super(role)
            this.BRIGHTNESS_LUT = [0, 0.8, 1.2, 1.9, 2.6, 3.5, 4.6, 5.8, 7.1, 8.7, 10]
        }

        /**
         * Set a specific pixel to a color.
         * @param pixel the pixel number (1-8)
         * @param color the hex value of the color
         */
        //% block="set $this pixel $pixel to $color=colorNumberPicker"
        //% blockId=fwd_led_ring_set_pixel_color
        //% group="LED Ring"
        //% weight=100
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
        //% weight=99
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
        //% weight=98
        setBrightness(brightness: number): void {
            console.log(this.BRIGHTNESS_LUT[brightness])
            super.setBrightness(this.BRIGHTNESS_LUT[brightness])
        }

        /**
         * Rotate the light pattern left or right, wrapping the last pixel back to the first
         * @param offset the number of positions to rotate, +ve = cw and -ve = ccw
         */
        //% block="rotate $this pattern by $offset"
        //% blockId=fwd_led_ring_rotate
        //% group="LED Ring"
        //% offset.defl=1
        //% weight=97
        rotate(offset: number): void {
            super.rotate(offset)
        }

        /**
         * Shift the light pattern left or right. If the light pattern is shifted past the first or last pixel, that part of the pattern is removed.
         * @param offset the number of positions to shift, +ve = cw and -ve = ccw
         */
        //% block="shift $this pattern by $offset"
        //% blockId=fwd_led_ring_shift
        //% group="LED Ring"
        //% offset.defl=1
        //% weight=96
        shift(offset: number): void {
            super.shift(offset)
        }

        /**
         * Returns the brightness level of the ring (0-10).
         */
        //% block="$this brightness"
        //% blockId=fwd_led_ring_get_brightness
        //% group="LED Ring"
        //% weight=95
        brightness(): number {
            const rawVal = super.brightness()
            // Walk through the array until the raw value is less than the target
            // As the value is passed around it always ends up lower than what was set
            for (let i = 0; i < this.BRIGHTNESS_LUT.length; i++) {
                if (rawVal <= this.BRIGHTNESS_LUT[i] + 0.05) { // add a tiny buffer to the set value
                    return i
                }
            }
            // fallback to the last index tested
            return this.BRIGHTNESS_LUT.length - 1
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
