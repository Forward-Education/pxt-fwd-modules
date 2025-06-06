namespace fwdMotors {
    /**
     * Set the servo to enabled or disabled
     * @param state enabled = true, disabled = false
     */
    //% group="Servo - Continuous"
    //% block="turn $servo $state"
    //% blockId=fwd_servocon_set_enabled
    //% state.shadow="toggleOnOff"
    export function conSetEnabled(
        servo: fwdBase.FwdServoClient,
        state: boolean
    ): void {
        return servo.setEnabled(state)
    }

    /**
     * Set what speed the servo should run at
     * @param speed Can be set between 100% foward and -100% reverse
     */
    //% group="Servo - Continuous"
    //% block="set $servo to $speed \\%"
    //% blockId=fwd_servocon_set_speed
    //% speed.min=-100 speed.max=100
    export function setSpeed(
        servo: fwdBase.FwdServoClient,
        speed: number
    ): void {
        servo.setSpeed(speed)
    }

    /**
     * Reports what speed the servo is set to
     */
    //% group="Servo - Continuous"
    //% block="$servo speed (\\%)"
    //% blockId=fwd_servocon_get_speed
    export function getSpeed(servo: fwdBase.FwdServoClient): number {
        return servo.getSpeed()
    }

    /**
     * Is the servo enabled or disabled? Enabled = true, disabled = false
     */
    //% group="Servo - Continuous"
    //% block="$servo is enabled"
    //% blockId=fwd_servocon_is_enabled
    export function conIsEnabled(servo: fwdBase.FwdServoClient): boolean {
        return servo.enabled()
    }
}
