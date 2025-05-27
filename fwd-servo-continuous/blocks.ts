namespace motors {
    /**
     * Reports what speed the servo is set to
     */
    //% group="Servo (continuous)"
    //% block="$servo speed (\\%)"
    //% blockId=fwd_servocon_get_speed
    export function getSpeed(servo: FwdServoClient): number {
        return servo.getSpeed()
    }

    /**
     * Set what speed the servo should run at
     * @param speed Can be set between 100% foward and -100% reverse
     */
    //% group="Servo (continuous)"
    //% block="set $servo $speed \\%"
    //% blockId=fwd_servocon_set_speed
    //% speed.min=-100 speed.max=100
    export function setSpeed(servo: FwdServoClient, speed: number): void {
        servo.setSpeed(speed)
    }
}
