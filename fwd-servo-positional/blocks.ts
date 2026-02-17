namespace fwdMotors {
    /**
     * Set the angle of the servo and immediately run the next block.
     * @param servo the servo client to set the angle of
     * @param angle servo angle
     */
    //% group="Servo - 270° Positional"
    //% block="set $servo to $angle °"
    //% blockId=fwd_servopos_set_angle
    //% angle.min=0 angle.max=270
    //% weight=99
    export function setAngle(
        servo: fwdBase.FwdServoClient,
        angle: number,
    ): void {
        servo.setAngle(angle)
    }

    /**
     * Set the angle of the servo and wait 1 second so the movement finishes before running the next block.
     * @param servo the servo client to set the angle of
     * @param angle servo angle
     */
    //% group="Servo - 270° Positional"
    //% block="set $servo to $angle ° and wait"
    //% blockId=fwd_servopos_set_angle_and_wait
    //% angle.min=0 angle.max=270
    //% weight=98
    export function setAngleAndWait(
        servo: fwdBase.FwdServoClient,
        angle: number,
    ): void {
        servo.setAngleAndWait(angle)
    }

    /**
     * Returns the angle that the servo is set to.
     * @param servo the servo client to get the angle of
     */
    //% group="Servo - 270° Positional"
    //% block="$servo angle (°)"
    //% blockId=fwd_servopos_get_angle
    //% weight=97
    export function getAngle(servo: fwdBase.FwdServoClient): number {
        return servo.getAngle()
    }
}
