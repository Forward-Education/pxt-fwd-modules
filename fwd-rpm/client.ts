namespace fwdSensors {
    //% fixedInstances
    export class FwdRpmClient extends jacdac.SimpleSensorClient {
        constructor(role: string) {
            super(0x19f8e291, role, "i24.8")
        }

        /**
         * Speed measured by the sensor.
         * Positive is recommended to be clockwise rotation and negative counterclockwise
         */
        //% group="RPM"
        //% block="$this RPM"
        //% blockId=fwd_rpm_get_rpm
        //% weight=100
        rpm(): number {
            return this.reading()
        }
    }

    //% fixedInstance whenUsed
    export const rpm1 = new FwdRpmClient("RPM1")
    //% fixedInstance whenUsed
    export const rpm2 = new FwdRpmClient("RPM2")
    //% fixedInstance whenUsed
    export const rpm3 = new FwdRpmClient("RPM3")
    //% fixedInstance whenUsed
    export const rpm4 = new FwdRpmClient("RPM4")
}
