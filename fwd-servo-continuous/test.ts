// Continuous Servo Tests
// Type: compilation
//  setSpeed(servo: fwdBase.FwdServoClient, speed: number): void
//  getSpeed(servo: fwdBase.FwdServoClient): number
//  setupDriving(left: fwdBase.FwdServoClient, right: fwdBase.FwdServoClient)
//  driveTimed(leftSpeed: number, rightSpeed: number, duration: number)
//  drive(leftSpeed: number, rightSpeed: number)
//  stop()
fwdMotors.setSpeed(fwdBase.leftServo, 0)
basic.showNumber(fwdMotors.getSpeed(fwdBase.leftServo))
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.leftServo)
fwdMotors.driveTimed(50, 50, 2)
fwdMotors.drive(50, -50)
fwdMotors.stop()
