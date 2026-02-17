// Positional Servo Tests
// Type: functional
// setAngleAndWait() doesn't work in the simulator, but does with physical hardware.
// The "ADD SIMULATORS" button will add a 180 servo instead of a 270
//  setAngle(servo: fwdBase.FwdServoClient, angle: number): void
//  getAngle(servo: fwdBase.FwdServoClient): number
basic.forever(() => {
    console.log("test start")
    basic.pause(3000)
    fwdMotors.setAngle(fwdBase.leftServo, 90)
    console.log(fwdMotors.getAngle(fwdBase.leftServo))
    basic.pause(3000)
    fwdMotors.setAngle(fwdBase.leftServo, 45)
    console.log(fwdMotors.getAngle(fwdBase.leftServo))
    basic.pause(3000)
    console.log("test end")
})
