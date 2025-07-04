namespace fwdSensors {
    //% fixedInstances
    export class FwdMotionClient extends modules.MotionClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when the chosen event occurs.
         * The motion event fires as soon as motion is detected.
         * The stasis event fires when, following a motion detection, there is 3 seconds without another motion detection.
         * @param event motion or stasis
         * @param handler the code to run
         */
        //% group="Motion"
        //% blockId=fwd_motion_on_event
        //% block="on $this detects $event"
        onMotionEvent(event: fwdEnums.MotionStasis, handler: () => void): void {
            if (event === fwdEnums.MotionStasis.Motion) {
                super.on
            }
        }

        /**
         * Reports is movement is currently detected by the sensor.
         */
        //% callInDebugger
        //% group="Movement"
        //% block="%motion moving"
        //% blockId=jacdac_motion_moving___get
        //% weight=100
        moving(): boolean {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return !!values[0]
        }
    }

    //% fixedInstance whenUsed
    export const motion1 = new FwdMotionClient("motion1")
    //% fixedInstance whenUsed
    export const motion2 = new FwdMotionClient("motion2")
    //% fixedInstance whenUsed
    export const motion3 = new FwdMotionClient("motion3")
    //% fixedInstance whenUsed
    export const motion4 = new FwdMotionClient("motion4")
}
