namespace fwdMotors {
    /**
     * Set the servo to enabled or disabled.
     * @param servo the servo client to set the status of
     * @param state enabled = true, disabled = false
     */
    //% group="Servo - 270° Positional"
    //% block="turn $servo $state"
    //% blockId=fwd_servopos_set_enabled
    //% state.shadow="toggleOnOff"
    export function posSetEnabled(
        servo: fwdBase.FwdServoClient,
        state: boolean
    ): void {
        return servo.setEnabled(state)
    }

    /**
     * Set the angle of the servo and immediately run the next block.
     * @param servo the servo client to set the angle of
     * @param angle servo angle
     */
    //% group="Servo - 270° Positional"
    //% block="set $servo to $angle °"
    //% blockId=fwd_servopos_set_angle
    //% angle.min=0 angle.max=270
    export function setAngle(
        servo: fwdBase.FwdServoClient,
        angle: number
    ): void {
        servo.setAngle(angle)
    }

    /**
     * Set the angle of the servo and wait for the movement to finish before running the next block.
     * @param servo the servo client to set the angle of
     * @param angle servo angle
     */
    //% group="Servo - 270° Positional"
    //% block="set $servo to $angle ° and wait"
    //% blockId=fwd_servopos_set_angle_and_wait
    //% angle.min=0 angle.max=270
    export function setAngleAndWait(
        servo: fwdBase.FwdServoClient,
        angle: number
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
    export function getAngle(servo: fwdBase.FwdServoClient): number {
        return servo.getAngle()
    }

    /**
     * Preset servo positions based on a clock's hour hand.
     * @param position pos0 through pos9 where the number represents the clock hour position
     */
    //% group="Servo - 270° Positional"
    //% block="position $position"
    //% blockId=fwd_servopos_position_presets
    export function positionPresets(position: ServoClockPositions): number {
        return position as number
    }

    /**
     * Returns whether the servo is enabled, enabled = true, disabled = false.
     * @param servo the servo client to get the status of
     */
    //% group="Servo - 270° Positional"
    //% block="$servo is enabled"
    //% blockId=fwd_servopos_is_enabled
    export function posIsEnabled(servo: fwdBase.FwdServoClient): boolean {
        return servo.enabled()
    }

    export const enum ServoClockPositions {
        //% block="🕛 00:00"
        Position0 = 270,
        //% block="🕐 01:00"
        Position1 = 240,
        //% block="🕑 02:00"
        Position2 = 210,
        //% block="🕒 03:00"
        Position3 = 180,
        //% block="🕓 04:00"
        Position4 = 150,
        //% block="🕔 05:00"
        Position5 = 120,
        //% block="🕕 06:00"
        Position6 = 90,
        //% block="🕖 07:00"
        Position7 = 60,
        //% block="🕗 08:00"
        Position8 = 30,
        //% block="🕘 09:00"
        Position9 = 0,
    }
}
