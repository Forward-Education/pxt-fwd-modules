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
         * Returns true if the light brightness is anything other than 0%.
         */
        //% group="Lights"
        //% block="$client is on"
        //% blockId=fwd_lights_is_on
        isOn(): boolean {
            return super.isOn()
        }

        /**
         * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
         */
        //% group="Lights"
        //% blockId=fwd_lights_set_brightness
        //% block="set $client brightness to $value (\\%)"
        //% weight=100
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setBrightness(value: number) {
            super.setBrightness(value)
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
