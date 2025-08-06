// Doing any kind of string manipulation of the parameter seems to create unpredictable behavior.
// Best to only use the unmanipulated string or a string literal.
// There are seemingly unnecessary returns after some printAndWait() calls. 
// Those returns seemed to prevent unpredictable behavior in testing.

namespace fwdLights {
    /**
     * Initializing the LCD makes it's blocks work more reliably in "on start".
     * Initialization will delay your program execution by 500 ms.
     */
    //% block="initialize LCD's"
    //% blockId=fwd_lcd_initialize
    //% group="LCD"
    export function initialize_lcd() {
        pause(500)
    }

    /**
     * Takes a number and rounds it to the provided decimal point.
     */
    //% block="round $number_ to $decimals decimals"
    //% decimals.min=0 decimals.max=4 decimals.defl=0
    //% blockId=fwd_lcd_round
    //% group="LCD"
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
        private readonly delay = 20

        constructor(role: string) {
            super(role)
            super.setEnabled(1)
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
        printLineNumber(number_: number, line: number) {
            this.printLineString(number_.toString(), line)
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
        printLineString(string_: string, line: number) {
            line -= 1

            if (line < 0 || line > 1) {
                this.setCursorAndWait(0, 0)
                this.printAndWait("err:!1-2        ")
                return
            }

            if (string_.length > 16) {
                this.setCursorAndWait(0, line)
                this.printAndWait(">16 chars")
                return
            }

            this.setCursorAndWait(0, line)
            this.printAndWait(string_);
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
        printQuadrantNumber(number_: number, quadrant: number) {
            this.printQuadrantString(number_.toString(), quadrant)
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
        printQuadrantString(string_: string, quadrant: number) {
            let col = 0
            let row = 0

            switch (quadrant) {
                case 1:
                    break
                case 2:
                    col = 16 - string_.length
                    row = 0
                    break
                case 3:
                    col = 0
                    row = 1
                    break
                case 4:
                    col = 16 - string_.length
                    row = 1
                    break
                default:
                    this.setCursorAndWait(col, row)
                    this.printAndWait("err:!1-4")
                    return
            }

            this.setCursorAndWait(col, row)

            if (string_.length > 8) {
                this.printAndWait(">8 chars")
                return
            }

            this.printAndWait(string_)
        }

        setCursorAndWait(x:number, y:number) {
            super.setCursor(x, y)
            pause(this.delay)
        }

        printAndWait(string_: string) {
            let blanks = this.makeBlanksString(string_.length, 16)
            super.show(string_ + blanks)
            pause(this.delay)
        }

        makeBlanksString(stringLength: number, totalChars: number): string {
            let blanks = ""
            let numberOfBlanks = totalChars - stringLength
            for (let i = 0; i < numberOfBlanks; i++) {
                blanks += " ";
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
