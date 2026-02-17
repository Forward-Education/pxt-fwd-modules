// Continuous Servo Tests
// Type: compilation
//  setSpeed(servo: fwdBase.FwdServoClient, speed: number): void
//  getSpeed(servo: fwdBase.FwdServoClient): number
//  setupDriving(left: fwdBase.FwdServoClient, right: fwdBase.FwdServoClient, bias = 0)
//  drive(direction: fwdEnums.ForwardReverse, speed: number)
//  stop()
//  turn(angle: number)
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.leftServo)
fwdMotors.setSpeed(fwdBase.leftServo, 0)
fwdMotors.drive(fwdEnums.ForwardReverse.Forward, 50)
fwdMotors.turn(0)
basic.showNumber(fwdMotors.getSpeed(fwdBase.leftServo))
fwdMotors.stop()
