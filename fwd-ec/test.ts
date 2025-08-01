if (fwdSensors.ec1.isPastThreshold(500, fwdEnums.OverUnder.Over)) {
    basic.showIcon(IconNames.Sad)
}
console.log("ec log: " + fwdSensors.ec1.ec())
