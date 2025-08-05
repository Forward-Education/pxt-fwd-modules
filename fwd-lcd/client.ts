// doing any kind of string manipulation before display seems to create unpredictable behavior
// best to put exactly what you want in the function parameter rather than rely on assignment

namespace fwdLights {
    /**
     * Initializing the LCD makes it's blocks work more reliably in "on start".
     * Initialization will delay your program execution by 500 ms.
     */
    //% block="initialize LCD's"
    //% blockId=fwd_lcd_initialize
    //% group="LCD"
    export function initialize() {
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
         * This block has a 20 ms pause built-in to ensure proper processing of commands.
         * @param number_ the number to print
         * @param line the line to print the number on
         */
        //% block="print number $number_ on line $line of $this"
        //% line.min=1 line.max=2 line.defl=1
        //% blockId=fwd_lcd_print_line_number
        //% group="LCD"
        printLineNumber(number_: number, line: number) {
            let string_ = number_.toString()
            if (string_.length > 16) {
                this.printLineString(">16 chars", line)
            } else {
                this.printLineString(number_.toString(), line)
            }
        }

        /**
         * Prints the provided text on the designated line of the LCD. Limited to 16 characters.
         * A string over 16 characters gets truncated.
         * An invalid line parameter triggers the message "err:!1-2" on line 1.
         * This block has a 20 ms pause built-in to ensure proper processing of commands.
         * @param string_ the string to print
         * @param line the line to print the string on
         */
        //% block="print string $string_ on line $line of $this"
        //% line.min=1 line.max=2 line.defl=1
        //% blockId=fwd_lcd_print_line_string
        //% group="LCD"
        printLineString(string_: string, line: number) {
            line -= 1

            if (string_.length > 16) {
                this.setCursorAndWait(0, 0)
                this.printAndWait(string_.substr(0, 16))
            }
            
            if (line < 0 || line > 1) {
                this.setCursorAndWait(0, 0)
                this.printAndWait("err:!1-2        ")
            } else {
                let blanks = this.makeBlanksString(string_.length, 16)
                this.setCursorAndWait(0, line)
                this.printAndWait(string_ + blanks);
            }
        }

        /**
         * Prints the provided number on the designated quadrant of the LCD. Limited to 8 characters.
         * A number over 8 characters is replaced with the message ">8 chars".
         * An invalid quadrant parameter triggers the message "err:!1-4" in quadrant 1.
         * This block has a 20 ms pause built-in to ensure proper processing of commands.
         * @param number_ the number to print
         * @param quadrant the quadrant to print the number on
         */
        //% block="print number $number_ on quadrant $quadrant of $this"
        //% quadrant.min=1 quadrant.max=4 quadrant.defl=1
        //% blockId=fwd_lcd_print_quadrant_number
        //% group="LCD"
        printQuadrantNumber(number_: number, quadrant: number) {
            let string_ = number_.toString()
            if (string_.length > 8) {
                this.printQuadrantString(">8 chars", quadrant)
            } else {
                this.printQuadrantString(number_.toString(), quadrant)
            }
        }

        /**
         * Prints the provided text on the designated quadrant of the LCD. Limited to 8 characters.
         * A string over 8 characters gets truncated.
         * An invalid quadrant parameter triggers the message "err:!1-4" in quadrant 1.
         * This block has a 20 ms pause built-in to ensure proper processing of commands.
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

            if (string_.length > 8) {
                string_ = string_.substr(0, 8)
            }

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
                    string_ = "err:!1-4"
            }

            let blanks = this.makeBlanksString(string_.length, 8)
            this.setCursorAndWait(col, row)
            this.printAndWait(string_ + blanks)
        }

        setCursorAndWait(x:number, y:number) {
            super.setCursor(x, y)
            pause(this.delay)
        }

        printAndWait(string_: string) {
            super.show(string_)
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
