// eCO2 Tests
// Type: compilation
//  eco2(): number
//  isPastThreshold(threshold: number, direction: fwdEnums.OverUnder): boolean
if (
    fwdSensors.eCO2_1.isPastThreshold(
        fwdSensors.eCO2_1.eco2(),
        fwdEnums.OverUnder.Over
    )
) {
}

// tVOC Tests
// Type: compilation
//  tvoc(): number
//  isPastThreshold(threshold: number, direction: fwdEnums.OverUnder): boolean
if (
    fwdSensors.tVOC1.isPastThreshold(
        fwdSensors.tVOC1.tvoc(),
        fwdEnums.OverUnder.Over
    )
) {
}
