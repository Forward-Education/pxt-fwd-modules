namespace fwdLights {
    /**
     * Controls LED lights
     **/
    //% fixedInstances blockGap=8
    export class LightsClient extends fwdBase.LightbulbClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Set the brightness of a light or light strip. Brightness peaks at different percentages for different lights.
         * Try a range of percentages to find the zone of control for your specific light.
         * @param brightness 0%-100%
         */
        //% group="Lights"
        //% blockId=fwd_lights_set_brightness
        //% block="set $this brightness to $brightness (\\%)"
        //% brightness.min=0
        //% brightness.max=100
        setBrightness(brightness: number) {
            super.setBrightness(brightness)
        }

        /**
         * Returns true if the light brightness is anything other than 0%.
         */
        //% group="Lights"
        //% block="$this is on"
        //% blockId=fwd_lights_is_on
        isOn(): boolean {
            return super.isOn()
        }
    }

    //% fixedInstance whenUsed
    export const lights1 = new LightsClient("lights1")
    //% fixedInstance whenUsed
    export const lights2 = new LightsClient("lights2")
    //% fixedInstance whenUsed
    export const lights3 = new LightsClient("lights3")
    //% fixedInstance whenUsed
    export const lights4 = new LightsClient("lights4")
}
