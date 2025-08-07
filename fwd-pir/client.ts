namespace fwdSensors {
    //% fixedInstances
    export class FwdPirClient extends modules.MotionClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Run code when motion is detected.
         * @param handler the code to run
         */
        //% group="PIR"
        //% block="on $this motion detection"
        //% blockId=fwd_pir_on_event
        //% weight=100
        onMovement(handler: () => void): void {
            super.onMovement(handler)
        }

        /**
         * Returns true when motion has been detected in the past 3 seconds.
         */
        //% group="PIR"
        //% block="$this detects motion"
        //% blockId=fwd_pir_motion_detected
        //% weight=99
        motionDetected(): boolean {
            return super.moving()
        }
    }

    //% fixedInstance whenUsed
    export const ph1 = new FwdPirClient("pir1")
    //% fixedInstance whenUsed
    export const ph2 = new FwdPirClient("pir2")
    //% fixedInstance whenUsed
    export const ph3 = new FwdPirClient("pir3")
    //% fixedInstance whenUsed
    export const ph4 = new FwdPirClient("pir4")
}
