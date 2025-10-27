namespace jacdac {
    // Service Character display constants
    export const SRV_FWDI2CSVC = 0x19522263

    export const enum FwdI2CSvcCmd {
        /**
         * No-args command. Returns the cursor to the upper-left corner.
         */
        WriteI2C = 0x83,

        /**
         * No-args command. Clears the LCD display.
         */
        ReadI2C = 0x84,
    }



    export namespace FwdI2CSvcCmdPack {
        export const WriteI2C = "u8 u8 b" // [addr7: u8][sendstop: u8][data: bytes...]
        export const ReadI2C = "u8 u16" // [addr7: u8][count: u16]
        export const ReadI2CReport = "b" // Response payload for ReadI2C: [data: bytes...]
    }
}
