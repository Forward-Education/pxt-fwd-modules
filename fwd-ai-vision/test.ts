// AI Vision Tests
// Type: compilation
fwdAiVision.initI2c()
fwdAiVision.initMode(fwdAiVision.ProtocolAlgorithm.FaceRecognition)
fwdAiVision.request()
basic.showNumber(fwdAiVision.learnedIdCount())
if (fwdAiVision.isOnScreen(fwdAiVision.ResultType.Frame)) {
}
basic.showNumber(fwdAiVision.readClosestBox(fwdAiVision.BoxDataWithId.ID))
basic.showNumber(fwdAiVision.readClosestArrow(fwdAiVision.ArrowDataWithId.ID))
if (fwdAiVision.isLearned(1)) {
}
if (fwdAiVision.isIdOnScreen(1, fwdAiVision.ResultType.Frame)) {
}
basic.showNumber(fwdAiVision.readIdBox(1, fwdAiVision.BoxData.XCenter))
basic.showNumber(fwdAiVision.readIdArrow(1, fwdAiVision.ArrowData.XOrigin))
basic.showNumber(fwdAiVision.resultCount(fwdAiVision.ResultType.Frame))
basic.showNumber(fwdAiVision.readBoxAt(1, fwdAiVision.BoxDataWithId.ID))
basic.showNumber(fwdAiVision.readArrowAt(1, fwdAiVision.ArrowDataWithId.ID))
basic.showNumber(fwdAiVision.idResultCount(1, fwdAiVision.ResultType.Frame))
basic.showNumber(fwdAiVision.readIdBoxAt(1, 1, fwdAiVision.BoxData.XCenter))
basic.showNumber(fwdAiVision.readIdArrowAt(1, 1, fwdAiVision.ArrowData.XOrigin))
fwdAiVision.learnId(1)
fwdAiVision.forgetLearn()
fwdAiVision.writeName(1, "DFRobot")
fwdAiVision.showCustomText("DFRobot", 150, 30)
fwdAiVision.clearCustomText()
fwdAiVision.takePhotoToSDCard(fwdAiVision.Capture.Photo)
fwdAiVision.saveModelToTFCard(fwdAiVision.ModelAction.Save, 0)
basic.forever(function () {})
