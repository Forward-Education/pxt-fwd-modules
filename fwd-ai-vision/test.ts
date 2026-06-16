// AI Vision Tests
// Type: compilation
fwdAiVision.initI2c()
fwdAiVision.initMode(fwdAiVision.protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
fwdAiVision.request()
basic.showNumber(fwdAiVision.getIds())
if (fwdAiVision.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
}
basic.showNumber(fwdAiVision.readBox_s(Content3.ID))
basic.showNumber(fwdAiVision.readArrow_s(Content4.ID))
if (fwdAiVision.isLearned(1)) {
}
if (fwdAiVision.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
}
basic.showNumber(fwdAiVision.readeBox(1, Content1.xCenter))
basic.showNumber(fwdAiVision.readeArrow(1, Content2.xOrigin))
basic.showNumber(fwdAiVision.getBox(HUSKYLENSResultType_t.HUSKYLENSResultBlock))
basic.showNumber(fwdAiVision.readBox_ss(1, Content3.ID))
basic.showNumber(fwdAiVision.readArrow_ss(1, Content4.ID))
basic.showNumber(
    fwdAiVision.getBox_S(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock),
)
basic.showNumber(fwdAiVision.readeBox_index(1, 1, Content1.xCenter))
basic.showNumber(fwdAiVision.readeArrow_index(1, 1, Content2.xOrigin))
fwdAiVision.writeLearn1(1)
fwdAiVision.forgetLearn()
fwdAiVision.writeName(1, "DFRobot")
fwdAiVision.writeOSD("DFRobot", 150, 30)
fwdAiVision.clearOSD()
fwdAiVision.takePhotoToSDCard(HUSKYLENSphoto.PHOTO)
fwdAiVision.saveModelToTFCard(HUSKYLENSMode.SAVE, 0)
basic.forever(function () {})
