namespace fwdLights {
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
        constructor(role: string) {
            super(role)
        }

        /**
         * Prints the provided number on the designated line of the LCD. Limited to 16 characters.
         * A number over 16 characters is replaced with the message ">16 chars".
         * An invalid line parameter triggers the message "err:!1-2" on line 1.
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
                string_ = ">16 chars"
            }
            this.printLineString(string_, line)
        }

        /**
         * Prints the provided text on the designated line of the LCD. Limited to 16 characters.
         * A string over 16 characters gets truncated.
         * An invalid line parameter triggers the message "err:!1-2" on line 1.
         * @param message the message to print
         * @param line the line to print the message on
         */
        //% block="print string $message on line $line of $this"
        //% line.min=1 line.max=2 line.defl=1
        //% blockId=fwd_lcd_print_line_string
        //% group="LCD"
        printLineString(message: string, line: number) {
            line -= 1

            if (message.length > 16) {
                message = message.substr(0, 16)
            }

            if (line < 0 || line > 1) {
                
                
                super.setCursor(0, 0)
                basic.pause(1000)
                super.show("err:!1-2")
                basic.pause(1000)
            } else {
                let blanks = "";
                let numberOfBlanks = 16 - message.length;
                for (let i = 0; i < numberOfBlanks; i++) {
                    blanks += " ";
                }
                super.setCursor(0, line)
                basic.pause(300)
                super.show(message + blanks);
                basic.pause(300)
            }
        }

        /**
         * Prints the provided number on the designated quadrant of the LCD. Limited to 8 characters.
         * A number over 8 characters is replaced with the message ">8 chars".
         * An invalid quadrant parameter triggers the message "err:!1-4" in quadrant 1.
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
                string_ = ">8 chars"
            }
            this.printQuadrantString(string_, quadrant)
        }

        /**
         * Prints the provided text on the designated quadrant of the LCD. Limited to 8 characters.
         * A string over 8 characters gets truncated.
         * An invalid quadrant parameter triggers the message "err:!1-4" in quadrant 1.
         * @param message the message to print
         * @param quadrant the quadrant to print the message on
         */
        //% block="print string $message on quadrant $quadrant of $this"
        //% quadrant.min=1 quadrant.max=4 quadrant.defl=1
        //% blockId=fwd_lcd_print_quadrant_string
        //% group="LCD"
        printQuadrantString(message: string, quadrant: number) {
            let col = 0
            let row = 0

            if (message.length > 8) {
                message = message.substr(0, 8)
            }

            switch (quadrant) {
                case 1:
                    break
                case 2:
                    col = 16 - message.length
                    row = 0
                    break
                case 3:
                    col = 0
                    row = 1
                    break
                case 4:
                    col = 16 - message.length
                    row = 1
                    break
                default:
                    message = "err:!1-4"
            }

            super.setCursor(col, row)
            super.show("        ")
            super.setCursor(col, row)
            super.show(message)
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
