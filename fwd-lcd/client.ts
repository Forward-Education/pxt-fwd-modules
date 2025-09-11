// Doing any kind of string manipulation of the parameter seems to create unpredictable behavior.
// Best to only use the unmanipulated string or a string literal.
// There are seemingly unnecessary returns after some printAndWait() calls.
// Those returns seemed to prevent unpredictable behavior in testing.

namespace fwdSensors {
    /**
     * Initializing makes LCD blocks work more reliably in "on start".
     * Place this block in "on start" before the LCD blocks.
     * It simply delays program execution by 1 second.
     */
    //% block="initialize LCD"
    //% blockId=fwd_lcd_initialize
    //% group="LCD"
    //% weight=100
    export function initializeLcd() {
        pause(1000)
    }

    /**
     * Takes a number and rounds it to the provided decimal point.
     */
    //% block="round $number_ to $decimals decimals"
    //% decimals.min=0 decimals.max=4 decimals.defl=0
    //% blockId=fwd_lcd_round
    //% group="LCD"
    //% weight=95
    export function round(number_: number, decimals: number): number {
        if (decimals < 0) {
            return number_
        }

        const factor = Math.pow(10, decimals)
        let rounded = Math.round(number_ * factor) / factor
        return rounded
    }

    //% fixedInstances blockGap=8
    export class LCDClient extends modules.CursorCharacterScreenClient {
        private readonly delay = 40

        constructor(role: string) {
            super(role)
            super.setEnabled(1) // prevents an issue where the first setCursor() call doesn't work
        }

        /**
        * Clear the entire screen.
         */
        //% block="clear $this"
        //% blockId=fwd_lcd_clear_screen
        //% group="LCD"
        //% weight=94
        clearScreen() {
            this.printLineString("                ", 1)
            this.printLineString("                ", 2)
        }

        /**
         * Prints the provided text on the designated line of the LCD. Limited to 16 characters.
         * A string over 16 characters is replaced with the message ">16 chars".
         * An invalid line parameter triggers the message "err:!1-2" on line 1.
         * This block has a 40 ms pause built-in to ensure proper processing of commands.
         * @param string_ the string to print
         * @param line the line to print the string on
         */
        //% block="print string $string_ on line $line of $this"
        //% line.min=1 line.max=2 line.defl=1
        //% blockId=fwd_lcd_print_line_string
        //% group="LCD"
        //% weight=99
        printLineString(string_: string, line: number) {
            line -= 1

            if (line < 0 || line > 1) {
                this.setCursorAndWait(0, 0)
                this.printAndWait("err:!1-2", 'line', false)
                return
            }

            if (string_.length > 16) {
                this.setCursorAndWait(0, line)
                this.printAndWait(">16 chars", 'line', false)
                return
            }

            this.setCursorAndWait(0, line)
            this.printAndWait(string_, 'line', false)
        }

        /**
         * Prints the provided text on the designated quadrant of the LCD. Limited to 8 characters.
         * A string over 8 characters is replaced with the message ">8 chars".
         * An invalid quadrant parameter triggers the message "err:!1-4" in quadrant 1.
         * This block has a 40 ms pause built-in to ensure proper processing of commands.
         * @param string_ the string_ to print
         * @param quadrant the quadrant to print the string_ on
         */
        //% block="print string $string_ on quadrant $quadrant of $this"
        //% quadrant.min=1 quadrant.max=4 quadrant.defl=1
        //% blockId=fwd_lcd_print_quadrant_string
        //% group="LCD"
        //% weight=98
        printQuadrantString(string_: string, quadrant: number) {
            let col = 0
            let row = 0
            let rightAlign = false

            switch (quadrant) {
                case 1:
                    break
                case 2:
                    col = 8
                    row = 0
                    rightAlign = true
                    break
                case 3:
                    col = 0
                    row = 1
                    break
                case 4:
                    col = 8
                    row = 1
                    rightAlign = true
                    break
                default:
                    this.setCursorAndWait(col, row)
                    this.printAndWait("err:!1-4", 'quadrant', rightAlign)
                    return
            }

            this.setCursorAndWait(col, row)

            if (string_.length > 8) {
                this.printAndWait(">8 chars", 'quadrant', rightAlign)
                return
            }

            this.printAndWait(string_, 'quadrant', rightAlign)
        }

        /**
         * Prints the provided number on the designated line of the LCD. Limited to 16 characters.
         * A number over 16 characters is replaced with the message ">16 chars".
         * An invalid line parameter triggers the message "err:!1-2" on line 1.
         * This block has a 40 ms pause built-in to ensure proper processing of commands.
         * @param number_ the number to print
         * @param line the line to print the number on
         */
        //% block="print number $number_ on line $line of $this"
        //% line.min=1 line.max=2 line.defl=1
        //% blockId=fwd_lcd_print_line_number
        //% group="LCD"
        //% weight=97
        printLineNumber(number_: number, line: number) {
            this.printLineString(number_.toString(), line)
        }

        /**
         * Prints the provided number on the designated quadrant of the LCD. Limited to 8 characters.
         * A number over 8 characters is replaced with the message ">8 chars".
         * An invalid quadrant parameter triggers the message "err:!1-4" in quadrant 1.
         * This block has a 40 ms pause built-in to ensure proper processing of commands.
         * @param number_ the number to print
         * @param quadrant the quadrant to print the number on
         */
        //% block="print number $number_ on quadrant $quadrant of $this"
        //% quadrant.min=1 quadrant.max=4 quadrant.defl=1
        //% blockId=fwd_lcd_print_quadrant_number
        //% group="LCD"
        //% weight=96
        printQuadrantNumber(number_: number, quadrant: number) {
            this.printQuadrantString(number_.toString(), quadrant)
        }

        setCursorAndWait(x: number, y: number) {
            super.setCursor(x, y)
            pause(this.delay)
        }

        printAndWait(string_: string, lineOrQuadrant: string, rightAlign: boolean) {
            if (string_ === 'undefined') {
                string_ = '--'
            }

            let blanks = ""
            if (lineOrQuadrant === 'quadrant') {
                blanks = this.makeBlanksString(8 - string_.length)
            } else if (lineOrQuadrant === 'line') {
                blanks = this.makeBlanksString(16 - string_.length)
            }

            if (rightAlign) {
                super.show(blanks + string_)
            } else {
                super.show(string_ + blanks)
            }
            
            pause(this.delay)
        }

        makeBlanksString(numberOfBlanks: number): string {
            let blanks = ""
            for (let i = 0; i < numberOfBlanks; i++) {
                blanks += " "
            }
            return blanks
        }
    }

    //% fixedInstance whenUsed
    export const lcd1 = new LCDClient("lcd1")
    //% fixedInstance whenUsed
    export const lcd2 = new LCDClient("lcd2")
    //% fixedInstance whenUsed
    export const lcd3 = new LCDClient("lcd3")
    //% fixedInstance whenUsed
    export const lcd4 = new LCDClient("lcd4")
}
