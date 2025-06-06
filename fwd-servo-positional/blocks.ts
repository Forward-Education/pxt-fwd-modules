namespace fwdMotors {
    /**
     * Reports what angle the servo is set to
     */
    //% group="Servo - 270° Positional"
    //% block="$servo angle (°)"
    //% blockId=fwd_servopos_get_angle
    export function getAngle(servo: fwdBase.FwdServoClient): number {
        return servo.getAngle()
    }

    /**
     * Preset servo positions based on a clock's hour hand
     */
    //% group="Servo - 270° Positional"
    //% block="position %position"
    //% blockId=fwd_servopos_position_presets
    //% position.defl=0
    export function positionPresets(position: ServoClockPositions): number {
        return position as number
    }

    /**
     * Is the servo enabled or disabled? Enabled = true, disabled = false
     */
    //% group="Servo - 270° Positional"
    //% block="$servo is enabled"
    //% blockId=fwd_servopos_is_enabled
    export function posIsEnabled(servo: fwdBase.FwdServoClient): boolean {
        return servo.enabled()
    }

    /**
     * Set the servo to enabled or disabled
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
     * Set what angle the servo should point to and immediately run the next block
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
     * Set what angle the servo should point to, and wait for the movement to finish before running the next block
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

    export const enum ServoClockPositions {
        //% block="🕛 00:00"
        Pos0 = 270,
        //% block="🕐 01:00"
        Pos1 = 240,
        //% block="🕑 02:00"
        Pos2 = 210,
        //% block="🕒 03:00"
        Pos3 = 180,
        //% block="🕓 04:00"
        Pos4 = 150,
        //% block="🕔 05:00"
        Pos5 = 120,
        //% block="🕕 06:00"
        Pos6 = 90,
        //% block="🕖 07:00"
        Pos7 = 60,
        //% block="🕗 08:00"
        Pos8 = 30,
        //% block="🕘 09:00"
        Pos9 = 0,
    }
}
