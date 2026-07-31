namespace fwdAiVision {
    export enum BoxData {
        //% block="x center"
        XCenter = 1,
        //% block="y center"
        YCenter = 2,
        //% block="width"
        Width = 3,
        //% block="height"
        Height = 4,
    }

    export enum ArrowData {
        //% block="x beginning"
        XOrigin = 1,
        //% block="y beginning"
        YOrigin = 2,
        //% block="x endpoint"
        XTarget = 3,
        //% block="y endpoint"
        YTarget = 4,
    }

    export enum BoxDataWithId {
        //% block="ID"
        ID = 5,
        //% block="x center"
        XCenter = 1,
        //% block="y center"
        YCenter = 2,
        //% block="width"
        Width = 3,
        //% block="height"
        Height = 4,
    }

    export enum ArrowDataWithId {
        //% block="ID"
        ID = 5,
        //% block="x beginning"
        XOrigin = 1,
        //% block="y beginning"
        YOrigin = 2,
        //% block="x endpoint"
        XTarget = 3,
        //% block="y endpoint"
        YTarget = 4,
    }

    export enum ResultType {
        //%block="frame"
        Frame = 1,
        //%block="arrow"
        Arrow = 2,
    }

    export enum ModelAction {
        //%block="save"
        Save,
        //%block="load"
        Load,
    }

    export enum Capture {
        //%block="photo"
        Photo,
        //%block="screenshot"
        Screenshot,
    }

    enum ProtocolCommand {
        Request = 0x20,
        RequestBlocks = 0x21,
        RequestArrows = 0x22,
        RequestLearned = 0x23,
        RequestBlocksLearned = 0x24,
        RequestArrowsLearned = 0x25,
        RequestById = 0x26,
        RequestBlocksById = 0x27,
        RequestArrowsById = 0x28,
        ReturnInfo = 0x29,
        ReturnBlock = 0x2a,
        ReturnArrow = 0x2b,
        RequestKnock = 0x2c,
        RequestAlgorithm = 0x2d,
        ReturnOk = 0x2e,
        RequestLearn = 0x2f,
        RequestForget = 0x30,
        RequestSensor = 0x31,
    }

    export enum ProtocolAlgorithm {
        //%block="face recognition"
        FaceRecognition = 0,
        //%block="object tracking"
        ObjectTracking = 1,
        //%block="object recognition"
        ObjectRecognition = 2,
        //%block="line tracking"
        LineTracking = 3,
        //%block="color recognition"
        ColorRecognition = 4,
        //%block="tag recognition"
        TagRecognition = 5,
        //%block="object classification"
        ObjectClassification,
        //%block="QR recognition (EDU only)"
        QRRecognition,
        //%block="barcode recognition (EDU only)"
        BarcodeRecognition,
    }

    const HUSKYLENS_I2C_ADDR = 0x32 // i2c address
    let protocolPtr: number[][] = [
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
    ]
    let protocolInfo: number[] = [0, 0, 0, 0, 0, 0]
    let FRAME_BUFFER_SIZE = 128
    let HEADER_0_INDEX = 0
    let HEADER_1_INDEX = 1
    let ADDRESS_INDEX = 2
    let CONTENT_SIZE_INDEX = 3
    let COMMAND_INDEX = 4
    let CONTENT_INDEX = 5
    let PROTOCOL_SIZE = 6
    let sendIndex = 0
    let receiveIndex = 0

    let receiveBuffer: number[] = []
    let sendBuffer: number[] = []

    let sendFail = false
    let receiveFail = false
    let contentCurrent = 0
    let contentEnd = 0
    let contentReadEnd = false

    let deviceAddress = 0

    /**
     * Connect to the HuskyLens over I2C, retrying until the camera answers.
     */
    //%block="HuskyLens initialize I2C until success"
    //% weight=90
    export function initI2c(): void {
        deviceAddress = HUSKYLENS_I2C_ADDR
        while (!readKnock());
    }
    /**
     * Switch the HuskyLens to a different recognition algorithm, retrying until
     * the camera confirms the change.
     * @param mode the recognition algorithm to switch to
     */
    //%block="HuskyLens switch algorithm to %mode"
    //% weight=85
    export function initMode(mode: ProtocolAlgorithm) {
        writeAlgorithm(mode, ProtocolCommand.RequestAlgorithm)
        while (!wait(ProtocolCommand.ReturnOk));
    }
    /**
     * Ask the HuskyLens what it can see right now and store it as the result.
     * The other blocks all read from that stored result.
     */
    //% block="HuskyLens request data once and save into the result"
    //% weight=80
    export function request(): void {
        protocolWriteCommand(ProtocolCommand.Request)
        processReturn()
    }
    /**
     * How many IDs the current algorithm has learned, from the stored result.
     */
    //%block="HuskyLens get a total number of learned IDs from the result"
    //% weight=79
    export function learnedIdCount(): number {
        return protocolInfo[2]
    }
    /**
     * Check whether anything at all is on screen in the stored result.
     * @param resultType whether to look for frames or for arrows
     */
    //%block="HuskyLens check if %resultType is on screen from the result"
    //% weight=78
    export function isOnScreen(resultType: ResultType): boolean {
        switch (resultType) {
            case 1:
                return countAllBlocks() != 0 ? true : false
            case 2:
                return countAllArrows() != 0 ? true : false
            default:
                return false
        }
    }
    /**
     * Read one measurement of the frame closest to the center of the screen,
     * from the stored result. Gives -1 if there is no frame on screen.
     * @param data which measurement of the frame to read
     */
    //% block="HuskyLens get %data of frame closest to the center of screen from the result"
    //% weight=77
    export function readClosestBox(data: BoxDataWithId): number {
        let value
        let resultIndex = readBlockCenterParameterDirect()
        if (resultIndex != -1) {
            switch (data) {
                case 1:
                    value = protocolPtr[resultIndex][1]
                    break
                case 2:
                    value = protocolPtr[resultIndex][2]
                    break
                case 3:
                    value = protocolPtr[resultIndex][3]
                    break
                case 4:
                    value = protocolPtr[resultIndex][4]
                    break
                default:
                    value = protocolPtr[resultIndex][5]
            }
        } else value = -1
        return value
    }
    /**
     * Read one measurement of the arrow closest to the center of the screen,
     * from the stored result. Gives -1 if there is no arrow on screen.
     * @param data which measurement of the arrow to read
     */
    //% block="HuskyLens get %data of arrow closest to the center of screen from the result"
    //% weight=77
    export function readClosestArrow(data: ArrowDataWithId): number {
        let value
        let resultIndex = readArrowCenterParameterDirect()
        if (resultIndex != -1) {
            switch (data) {
                case 1:
                    value = protocolPtr[resultIndex][1]
                    break
                case 2:
                    value = protocolPtr[resultIndex][2]
                    break
                case 3:
                    value = protocolPtr[resultIndex][3]
                    break
                case 4:
                    value = protocolPtr[resultIndex][4]
                    break
                default:
                    value = protocolPtr[resultIndex][5]
            }
        } else value = -1
        return value
    }
    /**
     * Check whether the current algorithm has already learned an ID.
     * @param id the ID to check for, eg: 1
     */
    //% block="HuskyLens check if ID %id is learned from the result"
    //% weight=76
    export function isLearned(id: number): boolean {
        let value = countLearnedIDs()
        if (id <= value) return true
        return false
    }
    /**
     * Check whether something with a given ID is on screen in the stored result.
     * @param id the learned ID to look for, eg: 1
     * @param resultType whether to look for frames or for arrows
     */
    //% block="HuskyLens check if ID %id %resultType is on screen from the result"
    //% weight=75
    export function isIdOnScreen(id: number, resultType: ResultType): boolean {
        switch (resultType) {
            case 1:
                return countBlocks(id) != 0 ? true : false
            case 2:
                return countArrows(id) != 0 ? true : false
            default:
                return false
        }
    }
    /**
     * Read one measurement of the first frame with a given ID, from the stored
     * result. Gives -1 if no frame on screen has that ID.
     * @param id the learned ID of the frame to read, eg: 1
     * @param data which measurement of the frame to read
     */
    //%block="HuskyLens get $data of ID $id frame from the result"
    //% weight=65
    export function readIdBox(id: number, data: BoxData): number {
        let resultIndex = findBlockIndex(id, 1)
        let value
        if (countBlocks(id) != 0) {
            if (resultIndex != null) {
                switch (data) {
                    case 1:
                        value = protocolPtr[resultIndex][1]
                        break
                    case 2:
                        value = protocolPtr[resultIndex][2]
                        break
                    case 3:
                        value = protocolPtr[resultIndex][3]
                        break
                    case 4:
                        value = protocolPtr[resultIndex][4]
                        break
                }
            } else value = -1
        } else value = -1
        return value
    }
    /**
     * Read one measurement of the first arrow with a given ID, from the stored
     * result. Gives -1 if no arrow on screen has that ID.
     * @param id the learned ID of the arrow to read, eg: 1
     * @param data which measurement of the arrow to read
     */
    //%block="HuskyLens get $data of ID $id arrow from the result"
    //% weight=60
    export function readIdArrow(id: number, data: ArrowData): number {
        let resultIndex = findArrowIndex(id, 1)
        let value
        if (countArrows(id) != 0) {
            if (resultIndex != null) {
                switch (data) {
                    case 1:
                        value = protocolPtr[resultIndex][1]
                        break
                    case 2:
                        value = protocolPtr[resultIndex][2]
                        break
                    case 3:
                        value = protocolPtr[resultIndex][3]
                        break
                    case 4:
                        value = protocolPtr[resultIndex][4]
                        break
                    default:
                        value = -1
                }
            } else value = -1
        } else value = -1
        return value
    }
    /**
     * How many frames or arrows are on screen in the stored result.
     * @param resultType whether to count frames or arrows
     */
    //%block="HuskyLens get a total number of %resultType from the result"
    //% weight=90
    //% advanced=true
    export function resultCount(resultType: ResultType): number {
        switch (resultType) {
            case 1:
                return countAllBlocks()
            case 2:
                return countAllArrows()
            default:
                return 0
        }
    }
    /**
     * Read one measurement of a frame picked by its place in the stored result.
     * Gives -1 if there is no frame in that place.
     * @param index which frame to read, counting from 1, eg: 1
     * @param data which measurement of the frame to read
     */
    //% block="HuskyLens get $data of the No. $index frame from the result"
    //% weight=60
    //% advanced=true
    export function readBoxAt(index: number, data: BoxDataWithId): number {
        let value = -1
        let resultIndex = index - 1
        if (protocolPtr[resultIndex][0] == ProtocolCommand.ReturnBlock) {
            switch (data) {
                case 1:
                    value = protocolPtr[resultIndex][1]
                    break
                case 2:
                    value = protocolPtr[resultIndex][2]
                    break
                case 3:
                    value = protocolPtr[resultIndex][3]
                    break
                case 4:
                    value = protocolPtr[resultIndex][4]
                    break
                default:
                    value = protocolPtr[resultIndex][5]
            }
        } else value = -1
        return value
    }
    /**
     * Read one measurement of an arrow picked by its place in the stored result.
     * Gives -1 if there is no arrow in that place.
     * @param index which arrow to read, counting from 1, eg: 1
     * @param data which measurement of the arrow to read
     */
    //% block="HuskyLens get $data of the No. $index arrow from the result"
    //% weight=60
    //% advanced=true
    export function readArrowAt(index: number, data: ArrowDataWithId): number {
        let value
        let resultIndex = index - 1
        if (protocolPtr[resultIndex][0] == ProtocolCommand.ReturnArrow) {
            switch (data) {
                case 1:
                    value = protocolPtr[resultIndex][1]
                    break
                case 2:
                    value = protocolPtr[resultIndex][2]
                    break
                case 3:
                    value = protocolPtr[resultIndex][3]
                    break
                case 4:
                    value = protocolPtr[resultIndex][4]
                    break
                default:
                    value = protocolPtr[resultIndex][5]
            }
        } else value = -1
        //protocolPtr[resultIndex][0] = 0;
        return value
    }
    /**
     * How many frames or arrows with a given ID are on screen in the stored
     * result.
     * @param id the learned ID to count, eg: 1
     * @param resultType whether to count frames or arrows
     */
    //%block="HuskyLens get a total number of ID %id %resultType from the result"
    //% weight=55
    //% advanced=true
    export function idResultCount(id: number, resultType: ResultType): number {
        switch (resultType) {
            case 1:
                return countBlocks(id)
            case 2:
                return countArrows(id)
            default:
                return 0
        }
    }
    /**
     * Read one measurement of a frame with a given ID, picked by its place
     * among that ID's frames in the stored result. Gives -1 if there is no such
     * frame.
     * @param id the learned ID of the frame to read, eg: 1
     * @param index which of that ID's frames to read, counting from 1, eg: 1
     * @param data which measurement of the frame to read
     */
    //%block="HuskyLens get $data of the ID $id No. $index frame from the result"
    //% weight=45
    //% advanced=true
    export function readIdBoxAt(
        id: number,
        index: number,
        data: BoxData,
    ): number {
        let resultIndex = findBlockIndex(id, index)
        let value
        if (countBlocks(id) != 0) {
            if (resultIndex != null) {
                switch (data) {
                    case 1:
                        value = protocolPtr[resultIndex][1]
                        break
                    case 2:
                        value = protocolPtr[resultIndex][2]
                        break
                    case 3:
                        value = protocolPtr[resultIndex][3]
                        break
                    case 4:
                        value = protocolPtr[resultIndex][4]
                        break
                    default:
                        value = -1
                }
            } else value = -1
        } else value = -1
        return value
    }
    /**
     * Read one measurement of an arrow with a given ID, picked by its place
     * among that ID's arrows in the stored result. Gives -1 if there is no such
     * arrow.
     * @param id the learned ID of the arrow to read, eg: 1
     * @param index which of that ID's arrows to read, counting from 1, eg: 1
     * @param data which measurement of the arrow to read
     */
    //%block="HuskyLens get $data of the ID $id No. $index arrow from the result"
    //% weight=35
    //% advanced=true
    export function readIdArrowAt(
        id: number,
        index: number,
        data: ArrowData,
    ): number {
        let resultIndex = findArrowIndex(id, index)
        let value
        if (countArrows(id) != 0) {
            if (resultIndex != null) {
                switch (data) {
                    case 1:
                        value = protocolPtr[resultIndex][1]
                        break
                    case 2:
                        value = protocolPtr[resultIndex][2]
                        break
                    case 3:
                        value = protocolPtr[resultIndex][3]
                        break
                    case 4:
                        value = protocolPtr[resultIndex][4]
                        break
                    default:
                        value = -1
                }
            } else value = -1
        } else value = -1
        return value
    }
    /**
     * Learn whatever is in view once, and save it under an ID.
     * @param id the ID to save what the camera sees as, eg: 1
     */
    //%block="HuskyLens learn ID %id once automatically"
    //% weight=30
    //% advanced=true
    export function learnId(id: number): void {
        writeAlgorithm(id, 0x36)
        //while(!wait(ProtocolCommand.ReturnOk));
    }
    /**
     * Forget everything the current algorithm has learned.
     */
    //%block="HuskyLens forget all learning data of the current algorithm"
    //% weight=29
    //% advanced=true
    export function forgetLearn(): void {
        writeAlgorithm(0x47, 0x37)
        //while(!wait(ProtocolCommand.ReturnOk));
    }
    /**
     * Give one of the current algorithm's learned IDs a name, which the
     * HuskyLens shows on screen next to it.
     * @param id the learned ID to name, eg: 1
     * @param name the name to give that ID, eg: "DFRobot"
     */
    //%block="HuskyLens name ID %id of the current algorithm as %name"
    //% weight=28
    //% advanced=true
    export function writeName(id: number, name: string): void {
        //do{
        let newname = name
        let buffer = protocolWriteBegin(0x2f)
        sendBuffer[sendIndex] = id
        sendBuffer[sendIndex + 1] = (newname.length + 1) * 2
        sendIndex += 2
        for (let i = 0; i < newname.length; i++) {
            sendBuffer[sendIndex] = newname.charCodeAt(i)
            //serial.writeNumber(newname.charCodeAt(i))
            sendIndex++
        }
        sendBuffer[sendIndex] = 0
        sendIndex += 1
        protocolWriteEnd()
        let Buffer = pins.createBufferFromArray(buffer)
        protocolWrite(Buffer)
        //}while(!wait(ProtocolCommand.ReturnOk));
    }
    /**
     * Show your own text on the HuskyLens screen.
     * @param text the text to show, eg: "DFRobot"
     * @param x how far across the screen to put the text, eg: 150
     * @param y how far down the screen to put the text, eg: 30
     */
    //%block="HuskyLens show custom texts %text at position x %x y %y on screen"
    //% weight=27
    //% advanced=true
    //% x.min=0 x.max=319
    //% y.min=0 y.max=210
    export function showCustomText(text: string, x: number, y: number): void {
        //do{
        let buffer = protocolWriteBegin(0x34)
        sendBuffer[sendIndex] = text.length
        if (x > 255) {
            sendBuffer[sendIndex + 2] = x % 255
            sendBuffer[sendIndex + 1] = 0xff
        } else {
            sendBuffer[sendIndex + 1] = 0
            sendBuffer[sendIndex + 2] = x
        }
        sendBuffer[sendIndex + 3] = y
        sendIndex += 4
        for (let i = 0; i < text.length; i++) {
            sendBuffer[sendIndex] = text.charCodeAt(i)
            //serial.writeNumber(text.charCodeAt(i));
            sendIndex++
        }
        protocolWriteEnd()
        let Buffer = pins.createBufferFromArray(buffer)
        protocolWrite(Buffer)
        //}while(!wait(ProtocolCommand.ReturnOk));
    }
    /**
     * Remove all of your own text from the HuskyLens screen.
     */
    //%block="HuskyLens clear all custom texts on screen"
    //% weight=26
    //% advanced=true
    export function clearCustomText(): void {
        writeAlgorithm(0x45, 0x35)
        //while(!wait(ProtocolCommand.ReturnOk));
    }
    /**
     * Take a picture and save it to the SD card in the HuskyLens.
     * @param capture whether to save a camera photo or a screenshot of the display
     */
    //%block="HuskyLens take %capture and save to SD card"
    //% weight=25
    //% advanced=true
    export function takePhotoToSDCard(capture: Capture): void {
        switch (capture) {
            case Capture.Photo:
                writeAlgorithm(0x40, 0x30)
                //while(!wait(ProtocolCommand.ReturnOk))
                break
            case Capture.Screenshot:
                writeAlgorithm(0x49, 0x39)
                //while(!wait(ProtocolCommand.ReturnOk));
                break
            default:
                writeAlgorithm(0x40, 0x30)
            //while(!wait(ProtocolCommand.ReturnOk));
        }
        basic.pause(500)
    }
    /**
     * Save what the current algorithm has learned to the SD card as a numbered
     * model, or load a model back from the card.
     * @param action whether to save the model or load it
     * @param data which numbered model slot on the card to use, eg: 0
     */
    //%block="HuskyLens %action current algorithm data as No. %data model of SD card"
    //% weight=24
    //% advanced=true
    //% data.min=0 data.max=5
    export function saveModelToTFCard(action: ModelAction, data: number): void {
        switch (action) {
            case ModelAction.Save:
                writeAlgorithm(data, 0x32)
                //while(!wait(ProtocolCommand.ReturnOk));
                break
            case ModelAction.Load:
                writeAlgorithm(data, 0x33)
                //while(!wait(ProtocolCommand.ReturnOk));
                break
            default:
                writeAlgorithm(data, 0x32)
            //while(!wait(ProtocolCommand.ReturnOk));
        }
        basic.pause(500)
    }

    function validateCheckSum() {
        let stackSumIndex = receiveBuffer[3] + CONTENT_INDEX
        let sum = 0
        for (let i = 0; i < stackSumIndex; i++) {
            sum += receiveBuffer[i]
        }
        sum = sum & 0xff

        return sum == receiveBuffer[stackSumIndex]
    }

    function protocolWriteEnd() {
        if (sendFail) {
            return 0
        }
        if (sendIndex + 1 >= FRAME_BUFFER_SIZE) {
            return 0
        }
        sendBuffer[CONTENT_SIZE_INDEX] = sendIndex - CONTENT_INDEX
        //serial.writeValue("618", sendBuffer[CONTENT_SIZE_INDEX])
        let sum = 0
        for (let i = 0; i < sendIndex; i++) {
            sum += sendBuffer[i]
        }

        sum = sum & 0xff
        sendBuffer[sendIndex] = sum
        sendIndex++
        return sendIndex
    }

    function protocolWriteBegin(command = 0) {
        sendFail = false
        sendBuffer[HEADER_0_INDEX] = 0x55
        sendBuffer[HEADER_1_INDEX] = 0xaa
        sendBuffer[ADDRESS_INDEX] = 0x11
        //sendBuffer[CONTENT_SIZE_INDEX] = datalen;
        sendBuffer[COMMAND_INDEX] = command
        sendIndex = CONTENT_INDEX
        return sendBuffer
    }

    function protocolWrite(buffer: Buffer) {
        // write-only I2C transaction (num_read = 0)
        fwdAiVision.huskylens1.transactionI2C(deviceAddress, 0, buffer)
        basic.pause(50)
    }

    function processReturn() {
        if (!wait(ProtocolCommand.ReturnInfo)) return false
        protocolReadInfo(ProtocolCommand.ReturnInfo)
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (!wait()) return false
            if (protocolReadResult(i, ProtocolCommand.ReturnBlock)) continue
            else if (protocolReadResult(i, ProtocolCommand.ReturnArrow))
                continue
            else return false
        }
        return true
    }

    function wait(command = 0) {
        timerBegin()
        while (!timerAvailable()) {
            if (protocolAvailable()) {
                if (command) {
                    if (protocolReadBegin(command)) {
                        //serial.writeNumber(0);
                        return true
                    }
                } else {
                    return true
                }
            } else {
                return false
            }
        }
        return false
    }

    function protocolReadBegin(command = 0) {
        if (command == receiveBuffer[COMMAND_INDEX]) {
            contentCurrent = CONTENT_INDEX
            contentReadEnd = false
            receiveFail = false
            return true
        }
        return false
    }

    let timeOutDuration = 100
    let timeOutTimer: number
    function timerBegin() {
        timeOutTimer = input.runningTime()
    }

    function timerAvailable() {
        return input.runningTime() - timeOutTimer > timeOutDuration
    }

    let readBufferIndex = 16
    function protocolAvailable() {
        let buf = pins.createBuffer(16)
        if (readBufferIndex == 16) {
            // read-only I2C transaction: empty write_buf, num_read = 16
            buf = fwdAiVision.huskylens1.transactionI2C(
                deviceAddress,
                16,
                Buffer.create(0),
            )
            readBufferIndex = 0
        }
        if (buf) {
            for (let i = readBufferIndex; i < 16; i++) {
                if (protocolReceive(buf[i])) {
                    readBufferIndex++
                    return true
                }
                readBufferIndex++
            }
        }
        return false
    }

    function protocolReceive(data: number): boolean {
        switch (receiveIndex) {
            case HEADER_0_INDEX:
                if (data != 0x55) {
                    receiveIndex = 0
                    return false
                }
                receiveBuffer[HEADER_0_INDEX] = 0x55
                break
            case HEADER_1_INDEX:
                if (data != 0xaa) {
                    receiveIndex = 0
                    return false
                }
                receiveBuffer[HEADER_1_INDEX] = 0xaa
                break
            case ADDRESS_INDEX:
                receiveBuffer[ADDRESS_INDEX] = data
                break
            case CONTENT_SIZE_INDEX:
                if (data >= FRAME_BUFFER_SIZE - PROTOCOL_SIZE) {
                    receiveIndex = 0
                    return false
                }
                receiveBuffer[CONTENT_SIZE_INDEX] = data
                break
            default:
                receiveBuffer[receiveIndex] = data

                if (
                    receiveIndex ==
                    receiveBuffer[CONTENT_SIZE_INDEX] + CONTENT_INDEX
                ) {
                    contentEnd = receiveIndex
                    receiveIndex = 0
                    return validateCheckSum()
                }
                break
        }
        receiveIndex++
        return false
    }

    function protocolWriteInt16(content = 0) {
        let x: number = content.toString().length
        if (sendIndex + x >= FRAME_BUFFER_SIZE) {
            sendFail = true
            return
        }
        sendBuffer[sendIndex] = content & 0xff
        sendBuffer[sendIndex + 1] = (content >> 8) & 0xff
        sendIndex += 2
    }

    function protocolReadInfo(command = 0) {
        if (protocolReadBegin(command)) {
            protocolInfo[0] = command
            protocolInfo[1] = protocolReadInt16()
            protocolInfo[2] = protocolReadInt16()
            protocolInfo[3] = protocolReadInt16()
            protocolInfo[4] = protocolReadInt16()
            protocolInfo[5] = protocolReadInt16()
            protocolReadEnd()
            return true
        } else {
            return false
        }
    }

    function protocolReadResult(i: number, command = 0) {
        if (protocolReadBegin(command)) {
            protocolPtr[i][0] = command
            protocolPtr[i][1] = protocolReadInt16()
            protocolPtr[i][2] = protocolReadInt16()
            protocolPtr[i][3] = protocolReadInt16()
            protocolPtr[i][4] = protocolReadInt16()
            protocolPtr[i][5] = protocolReadInt16()
            protocolReadEnd()
            return true
        } else {
            return false
        }
    }

    function protocolReadInt16() {
        if (contentCurrent >= contentEnd || contentReadEnd) {
            receiveFail = true
            return 0
        }
        let result =
            (receiveBuffer[contentCurrent + 1] << 8) |
            receiveBuffer[contentCurrent]
        contentCurrent += 2
        return result
    }

    function protocolReadEnd() {
        if (receiveFail) {
            receiveFail = false
            return false
        }
        return contentCurrent == contentEnd
    }

    function countLearnedIDs() {
        return protocolInfo[2]
    }

    function countBlocks(ID: number) {
        let counter = 0
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (
                protocolPtr[i][0] == ProtocolCommand.ReturnBlock &&
                protocolPtr[i][5] == ID
            )
                counter++
        }
        return counter
    }

    function countAllBlocks() {
        let counter = 0
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (protocolPtr[i][0] == ProtocolCommand.ReturnBlock) counter++
        }
        //serial.writeNumber(counter)
        return counter
    }

    function countArrows(ID: number) {
        let counter = 0
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (
                protocolPtr[i][0] == ProtocolCommand.ReturnArrow &&
                protocolPtr[i][5] == ID
            )
                counter++
        }
        return counter
    }

    function countAllArrows() {
        let counter = 0
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (protocolPtr[i][0] == ProtocolCommand.ReturnArrow) counter++
        }
        return counter
    }

    function readKnock() {
        for (let i = 0; i < 5; i++) {
            protocolWriteCommand(ProtocolCommand.RequestKnock) //I2C
            if (wait(ProtocolCommand.ReturnOk)) {
                return true
            }
        }
        return false
    }

    function protocolWriteCommand(command = 0) {
        protocolInfo[0] = command
        let buffer = protocolWriteBegin(protocolInfo[0])
        protocolWriteEnd()
        let Buffer = pins.createBufferFromArray(buffer)
        protocolWrite(Buffer)
    }

    function writeAlgorithm(algorithmType: number, comemand = 0) {
        protocolWriteOneInt16(algorithmType, comemand)
        //return true//wait(ProtocolCommand.ReturnOk);
        //while(!wait(ProtocolCommand.ReturnOk));
        //return true
    }

    function protocolWriteOneInt16(algorithmType: number, command = 0) {
        let buffer = protocolWriteBegin(command)
        protocolWriteInt16(algorithmType)
        protocolWriteEnd()
        let Buffer = pins.createBufferFromArray(buffer)
        protocolWrite(Buffer)
    }

    function findBlockIndex(ID: number, index = 1): number {
        let counter = 0
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (
                protocolPtr[i][0] == ProtocolCommand.ReturnBlock &&
                protocolPtr[i][5] == ID
            ) {
                counter++
                if (index == counter) return i
            }
        }
        return null
    }

    function findArrowIndex(ID: number, index = 1): number {
        let counter = 0
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (
                protocolPtr[i][0] == ProtocolCommand.ReturnArrow &&
                protocolPtr[i][5] == ID
            ) {
                counter++
                if (index == counter) return i
            }
        }
        return null
    }

    function readBlockCenterParameterDirect(): number {
        let distanceMinIndex = -1
        let distanceMin = 65535
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (protocolPtr[i][0] == ProtocolCommand.ReturnBlock) {
                let distance =
                    Math.round(
                        Math.sqrt(Math.abs(protocolPtr[i][1] - 320 / 2)),
                    ) +
                    Math.round(Math.sqrt(Math.abs(protocolPtr[i][2] - 240 / 2)))
                if (distance < distanceMin) {
                    distanceMin = distance
                    distanceMinIndex = i
                }
            }
        }
        return distanceMinIndex
    }

    function readArrowCenterParameterDirect(): number {
        let distanceMinIndex = -1
        let distanceMin = 65535
        for (let i = 0; i < protocolInfo[1]; i++) {
            if (protocolPtr[i][0] == ProtocolCommand.ReturnArrow) {
                let distance =
                    Math.round(
                        Math.sqrt(Math.abs(protocolPtr[i][1] - 320 / 2)),
                    ) +
                    Math.round(Math.sqrt(Math.abs(protocolPtr[i][2] - 240 / 2)))
                if (distance < distanceMin) {
                    distanceMin = distance
                    distanceMinIndex = i
                }
            }
        }
        return distanceMinIndex
    }

    export class HuskylensClient extends jacdac.Client {
        constructor(role: string) {
            super(fwdI2C.SRV_I2CSVC, role)
        }

        private _rx: Buffer
        private _lastStatus: fwdI2C.Status = fwdI2C.Status.OK

        dumpHexBytes(buf: Buffer): string {
            if (!buf) return "(null)"
            const hex = "0123456789ABCDEF"
            let out = ""
            for (let i = 0; i < buf.length; i++) {
                const b = buf[i] & 0xff
                out +=
                    (i ? " " : "") + "0x" + hex[(b >> 4) & 0x0f] + hex[b & 0x0f]
            }
            return out
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            if (
                pkt.isReport &&
                pkt.serviceCommand ===
                    fwdI2C.FwdI2CTransactionCmd.Transaction &&
                (this.serviceIndex == null ||
                    pkt.serviceIndex === this.serviceIndex)
            ) {
                // report: [status: u8][read_buf: bytes...]
                const data = pkt.data
                this._lastStatus =
                    data && data.length
                        ? (data[0] as fwdI2C.Status)
                        : fwdI2C.Status.OK
                this._rx =
                    data && data.length > 1 ? data.slice(1) : Buffer.create(0)
            }
        }

        /**
         * Combined I2C transaction:
         * cmd payload: [address: u8][num_read: u8][write_buf: bytes...]
         * report:      [status: u8][read_buf: bytes...]
         */
        transactionI2C(
            i2caddr: number,
            numRead: number,
            writeBuf: Buffer,
        ): Buffer {
            this._rx = null
            this._lastStatus = fwdI2C.Status.OK

            const pkt = jacdac.JDPacket.from(
                fwdI2C.FwdI2CTransactionCmd.Transaction,
                jacdac.jdpack(
                    fwdI2C.FwdI2CTransactionCmdPack.Transaction, // "u8 u8 b"
                    [i2caddr & 0xff, numRead & 0xff, writeBuf],
                ),
            )

            this.sendCommand(pkt)

            const t0 = control.millis()
            while (!this._rx && control.millis() - t0 < 200) pause(10)

            return this._rx
        }

        lastStatus(): fwdI2C.Status {
            return this._lastStatus
        }

        ok(): boolean {
            return this._lastStatus === fwdI2C.Status.OK
        }
    }

    //% fixedInstance whenUsed weight=1 block="huskylens1"
    export const huskylens1 = new HuskylensClient("huskylens1")
}
