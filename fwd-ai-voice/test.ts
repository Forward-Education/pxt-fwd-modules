// AI Voice Tests
// Type: compilation
fwdAiVoice.init()
fwdAiVoice.setVolume(4)
fwdAiVoice.setWakeTime(20)
fwdAiVoice.playByCMDID(23)
fwdAiVoice.getCMDID()
if (fwdAiVoice.checkCMDID()) {
}
fwdAiVoice.playByCMDID(fwdAiVoice.readCMDID())
fwdAiVoice.playByCMDID(
    fwdAiVoice.checkWord2(fwdAiVoice.LearningCommandWords.W5),
)
fwdAiVoice.playByCMDID(fwdAiVoice.checkWord1(fwdAiVoice.WakeupWords.W1))
fwdAiVoice.playByCMDID(fwdAiVoice.checkWord3(fwdAiVoice.FixedCommandWords.W22))
fwdAiVoice.playByCMDID(
    fwdAiVoice.checkWord4(fwdAiVoice.LearningRelatedCommands.W200),
)
fwdAiVoice.setMuteMode(fwdAiVoice.MUTE.OFF)
fwdAiVoice.playByCMDID(fwdAiVoice.getWakeTime())
