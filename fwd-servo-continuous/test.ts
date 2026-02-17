// Continuous Servo Tests
// Type: compilation
//  setSpeed(servo: fwdBase.FwdServoClient, speed: number): void
//  getSpeed(servo: fwdBase.FwdServoClient): number
//  setupDriving(left: fwdBase.FwdServoClient, right: fwdBase.FwdServoClient)
//  function drive(leftSpeed: number, rightSpeed: number, duration: number)
fwdMotors.setSpeed(fwdBase.leftServo, 0)
basic.showNumber(fwdMotors.getSpeed(fwdBase.leftServo))
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.leftServo)
fwdMotors.drive(50, 50, 2)
