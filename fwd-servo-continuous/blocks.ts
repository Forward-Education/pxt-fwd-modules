namespace fwdMotors {
    /**
     * Is the servo enabled or disabled? Enabled = true, disabled = false
     */
    //% group="Servo - Continuous"
    //% block="$servo state"
    //% blockId=fwd_servo_is_enabled
    export function isEnabled(servo: FwdServoClient): boolean {
        return servo.enabled()
    }

    /**
     * Set the servo to enabled or disabled
     * @param state enabled = true, disabled = false
     */
    //% group="Servo - Continuous"
    //% block="set $servo $state"
    //% blockId=fwd_servo_set_enabled
    //% state.shadow="toggleOnOff"
    export function setEnabled(servo: FwdServoClient, state: boolean): void {
        return servo.setEnabled(state)
    }

    /**
     * Reports what speed the servo is set to
     */
    //% group="Servo - Continuous"
    //% block="$servo speed (\\%)"
    //% blockId=fwd_servocon_get_speed
    export function getSpeed(servo: FwdServoClient): number {
        return servo.getSpeed()
    }

    /**
     * Set what speed the servo should run at
     * @param speed Can be set between 100% foward and -100% reverse
     */
    //% group="Servo - Continuous"
    //% block="set $servo $speed \\%"
    //% blockId=fwd_servocon_set_speed
    //% speed.min=-100 speed.max=100
    export function setSpeed(servo: FwdServoClient, speed: number): void {
        servo.setSpeed(speed)
    }
}
