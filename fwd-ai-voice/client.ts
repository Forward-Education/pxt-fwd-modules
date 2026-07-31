namespace fwdAiVoice {
    export enum WakeupWords {
        //% blockId="fwd_ai_voice_W1" block="wake-up words for learning"
        W1 = 1,
        //% blockId="fwd_ai_voice_W2" block="hello robot"
        W2 = 2,
        //% blockId="fwd_ai_voice_W3" block="---"
        W3 = 3,
    }

    export enum LearningCommandWords {
        //% blockId="fwd_ai_voice_W5" block="the first custom command"
        W5 = 5,
        //% blockId="fwd_ai_voice_W6" block="the second custom command"
        W6 = 6,
        //% blockId="fwd_ai_voice_W7" block="the third custom command"
        W7 = 7,
        //% blockId="fwd_ai_voice_W8" block="the fourth custom command"
        W8 = 8,
        //% blockId="fwd_ai_voice_W9" block="the fifth custom command"
        W9 = 9,
        //% blockId="fwd_ai_voice_W10" block="the sixth custom command"
        W10 = 10,
        //% blockId="fwd_ai_voice_W11" block="the seventh custom command"
        W11 = 11,
        //% blockId="fwd_ai_voice_W12" block="the eighth custom command"
        W12 = 12,
        //% blockId="fwd_ai_voice_W13" block="the ninth custom command"
        W13 = 13,
        //% blockId="fwd_ai_voice_W14" block="the tenth custom command"
        W14 = 14,
        //% blockId="fwd_ai_voice_W15" block="the eleventh custom command"
        W15 = 15,
        //% blockId="fwd_ai_voice_W16" block="the twelfth custom command"
        W16 = 16,
        //% blockId="fwd_ai_voice_W17" block="the thirteenth custom command"
        W17 = 17,
        //% blockId="fwd_ai_voice_W18" block="the fourteenth custom command"
        W18 = 18,
        //% blockId="fwd_ai_voice_W19" block="the fifteenth custom command"
        W19 = 19,
        //% blockId="fwd_ai_voice_W20" block="the sixteenth custom command"
        W20 = 20,
        //% blockId="fwd_ai_voice_W21" block="the seventeenth custom command"
        W21 = 21,
    }

    export enum FixedCommandWords {
        //% blockId="fwd_ai_voice_W22" block="go forward"
        W22 = 22,
        //% blockId="fwd_ai_voice_W23" block="retreat"
        W23 = 23,
        //% blockId="fwd_ai_voice_W24" block="park a car"
        W24 = 24,
        //% blockId="fwd_ai_voice_W25" block="turn left ninety degrees"
        W25 = 25,
        //% blockId="fwd_ai_voice_W26" block="turn left forty-five degrees"
        W26 = 26,
        //% blockId="fwd_ai_voice_W27" block="turn left thirty degrees"
        W27 = 27,
        //% blockId="fwd_ai_voice_W28" block="turn right ninety degrees"
        W28 = 28,
        //% blockId="fwd_ai_voice_W29" block="turn right forty-five degrees"
        W29 = 29,
        //% blockId="fwd_ai_voice_W30" block="turn right thirty degrees"
        W30 = 30,
        //% blockId="fwd_ai_voice_W31" block="shift down a gear"
        W31 = 31,
        //% blockId="fwd_ai_voice_W32" block="line tracking mode"
        W32 = 32,
        //% blockId="fwd_ai_voice_W33" block="light tracking mode"
        W33 = 33,
        //% blockId="fwd_ai_voice_W34" block="bluetooth mode"
        W34 = 34,
        //% blockId="fwd_ai_voice_W35" block="obstacle avoidance mode"
        W35 = 35,
        //% blockId="fwd_ai_voice_W36" block="face recognition"
        W36 = 36,
        //% blockId="fwd_ai_voice_W37" block="object tracking"
        W37 = 37,
        //% blockId="fwd_ai_voice_W38" block="object recognition"
        W38 = 38,
        //% blockId="fwd_ai_voice_W39" block="line tracking"
        W39 = 39,
        //% blockId="fwd_ai_voice_W40" block="color recognition"
        W40 = 40,
        //% blockId="fwd_ai_voice_W41" block="tag recognition"
        W41 = 41,
        //% blockId="fwd_ai_voice_W42" block="object sorting"
        W42 = 42,
        //% blockId="fwd_ai_voice_W43" block="QR code recognition"
        W43 = 43,
        //% blockId="fwd_ai_voice_W44" block="general settings"
        W44 = 44,
        //% blockId="fwd_ai_voice_W45" block="clear screen"
        W45 = 45,
        //% blockId="fwd_ai_voice_W46" block="learn once"
        W46 = 46,
        //% blockId="fwd_ai_voice_W47" block="forget"
        W47 = 47,
        //% blockId="fwd_ai_voice_W48" block="load model"
        W48 = 48,
        //% blockId="fwd_ai_voice_W49" block="save model"
        W49 = 49,
        //% blockId="fwd_ai_voice_W50" block="take photos and save them"
        W50 = 50,
        //% blockId="fwd_ai_voice_W51" block="save and return"
        W51 = 51,
        //% blockId="fwd_ai_voice_W52" block="display number zero"
        W52 = 52,
        //% blockId="fwd_ai_voice_W53" block="display number one"
        W53 = 53,
        //% blockId="fwd_ai_voice_W54" block="display number two"
        W54 = 54,
        //% blockId="fwd_ai_voice_W55" block="display number three"
        W55 = 55,
        //% blockId="fwd_ai_voice_W56" block="display number four"
        W56 = 56,
        //% blockId="fwd_ai_voice_W57" block="display number five"
        W57 = 57,
        //% blockId="fwd_ai_voice_W58" block="display number six"
        W58 = 58,
        //% blockId="fwd_ai_voice_W59" block="display number seven"
        W59 = 59,
        //% blockId="fwd_ai_voice_W60" block="display number eight"
        W60 = 60,
        //% blockId="fwd_ai_voice_W61" block="display number nine"
        W61 = 61,
        //% blockId="fwd_ai_voice_W62" block="display smiley face"
        W62 = 62,
        //% blockId="fwd_ai_voice_W63" block="display crying face"
        W63 = 63,
        //% blockId="fwd_ai_voice_W64" block="display heart"
        W64 = 64,
        //% blockId="fwd_ai_voice_W65" block="turn off dot matrix"
        W65 = 65,
        //% blockId="fwd_ai_voice_W66" block="read current posture"
        W66 = 66,
        //% blockId="fwd_ai_voice_W67" block="read ambient light"
        W67 = 67,
        //% blockId="fwd_ai_voice_W68" block="read compass"
        W68 = 68,
        //% blockId="fwd_ai_voice_W69" block="read temperature"
        W69 = 69,
        //% blockId="fwd_ai_voice_W70" block="read acceleration"
        W70 = 70,
        //% blockId="fwd_ai_voice_W71" block="reading sound intensity"
        W71 = 71,
        //% blockId="fwd_ai_voice_W72" block="calibrate electronic gyroscope"
        W72 = 72,
        //% blockId="fwd_ai_voice_W73" block="turn on the camera"
        W73 = 73,
        //% blockId="fwd_ai_voice_W74" block="turn off the camera"
        W74 = 74,
        //% blockId="fwd_ai_voice_W75" block="turn on the fan"
        W75 = 75,
        //% blockId="fwd_ai_voice_W76" block="turn off the fan"
        W76 = 76,
        //% blockId="fwd_ai_voice_W77" block="turn fan speed to gear one"
        W77 = 77,
        //% blockId="fwd_ai_voice_W78" block="turn fan speed to gear two"
        W78 = 78,
        //% blockId="fwd_ai_voice_W79" block="turn fan speed to gear three"
        W79 = 79,
        //% blockId="fwd_ai_voice_W80" block="start oscillating"
        W80 = 80,
        //% blockId="fwd_ai_voice_W81" block="stop oscillating"
        W81 = 81,
        //% blockId="fwd_ai_voice_W82" block="reset"
        W82 = 82,
        //% blockId="fwd_ai_voice_W83" block="set servo to ten degrees"
        W83 = 83,
        //% blockId="fwd_ai_voice_W84" block="set servo to thirty degrees"
        W84 = 84,
        //% blockId="fwd_ai_voice_W85" block="set servo to forty-five degrees"
        W85 = 85,
        //% blockId="fwd_ai_voice_W86" block="set servo to sixty degrees"
        W86 = 86,
        //% blockId="fwd_ai_voice_W87" block="set servo to ninety degrees"
        W87 = 87,
        //% blockId="fwd_ai_voice_W88" block="turn on the buzzer"
        W88 = 88,
        //% blockId="fwd_ai_voice_W89" block="turn off the buzzer"
        W89 = 89,
        //% blockId="fwd_ai_voice_W90" block="turn on the speaker"
        W90 = 90,
        //% blockId="fwd_ai_voice_W91" block="turn off the speaker"
        W91 = 91,
        //% blockId="fwd_ai_voice_W92" block="play music"
        W92 = 92,
        //% blockId="fwd_ai_voice_W93" block="stop playing"
        W93 = 93,
        //% blockId="fwd_ai_voice_W94" block="the last track"
        W94 = 94,
        //% blockId="fwd_ai_voice_W95" block="the next track"
        W95 = 95,
        //% blockId="fwd_ai_voice_W96" block="repeat this track"
        W96 = 96,
        //% blockId="fwd_ai_voice_W97" block="volume up"
        W97 = 97,
        //% blockId="fwd_ai_voice_W98" block="volume down"
        W98 = 98,
        //% blockId="fwd_ai_voice_W99" block="change volume to maximum"
        W99 = 99,
        //% blockId="fwd_ai_voice_W100" block="change volume to minimum"
        W100 = 100,
        //% blockId="fwd_ai_voice_W101" block="change volume to medium"
        W101 = 101,
        //% blockId="fwd_ai_voice_W102" block="play poem"
        W102 = 102,
        //% blockId="fwd_ai_voice_W103" block="turn on the light"
        W103 = 103,
        //% blockId="fwd_ai_voice_W104" block="turn off the light"
        W104 = 104,
        //% blockId="fwd_ai_voice_W105" block="brighten the light"
        W105 = 105,
        //% blockId="fwd_ai_voice_W106" block="dim the light"
        W106 = 106,
        //% blockId="fwd_ai_voice_W107" block="adjust brightness to maximum"
        W107 = 107,
        //% blockId="fwd_ai_voice_W108" block="adjust brightness to minimum"
        W108 = 108,
        //% blockId="fwd_ai_voice_W109" block="increase color temperature"
        W109 = 109,
        //% blockId="fwd_ai_voice_W110" block="decrease color temperature"
        W110 = 110,
        //% blockId="fwd_ai_voice_W111" block="adjust color temperature to maximum"
        W111 = 111,
        //% blockId="fwd_ai_voice_W112" block="adjust color temperature to minimum"
        W112 = 112,
        //% blockId="fwd_ai_voice_W113" block="daylight mode"
        W113 = 113,
        //% blockId="fwd_ai_voice_W114" block="moonlight mode"
        W114 = 114,
        //% blockId="fwd_ai_voice_W115" block="color mode"
        W115 = 115,
        //% blockId="fwd_ai_voice_W116" block="set to red"
        W116 = 116,
        //% blockId="fwd_ai_voice_W117" block="set to orange"
        W117 = 117,
        //% blockId="fwd_ai_voice_W118" block="set to yellow"
        W118 = 118,
        //% blockId="fwd_ai_voice_W119" block="set to green"
        W119 = 119,
        //% blockId="fwd_ai_voice_W120" block="set to cyan"
        W120 = 120,
        //% blockId="fwd_ai_voice_W121" block="set to blue"
        W121 = 121,
        //% blockId="fwd_ai_voice_W122" block="set to purple"
        W122 = 122,
        //% blockId="fwd_ai_voice_W123" block="set to white"
        W123 = 123,
        //% blockId="fwd_ai_voice_W124" block="turn on AC"
        W124 = 124,
        //% blockId="fwd_ai_voice_W125" block="turn off AC"
        W125 = 125,
        //% blockId="fwd_ai_voice_W126" block="increase temperature"
        W126 = 126,
        //% blockId="fwd_ai_voice_W127" block="decrease temperature"
        W127 = 127,
        //% blockId="fwd_ai_voice_W128" block="cool mode"
        W128 = 128,
        //% blockId="fwd_ai_voice_W129" block="heat mode"
        W129 = 129,
        //% blockId="fwd_ai_voice_W130" block="auto mode"
        W130 = 130,
        //% blockId="fwd_ai_voice_W131" block="dry mode"
        W131 = 131,
        //% blockId="fwd_ai_voice_W132" block="fan mode"
        W132 = 132,
        //% blockId="fwd_ai_voice_W133" block="enable blowing up and down"
        W133 = 133,
        //% blockId="fwd_ai_voice_W134" block="disable blowing up and down"
        W134 = 134,
        //% blockId="fwd_ai_voice_W135" block="enable blowing right and left"
        W135 = 135,
        //% blockId="fwd_ai_voice_W136" block="disable blowing right and left"
        W136 = 136,
        //% blockId="fwd_ai_voice_W137" block="open the window"
        W137 = 137,
        //% blockId="fwd_ai_voice_W138" block="close the window"
        W138 = 138,
        //% blockId="fwd_ai_voice_W139" block="open curtain"
        W139 = 139,
        //% blockId="fwd_ai_voice_W140" block="close curtain"
        W140 = 140,
        //% blockId="fwd_ai_voice_W141" block="open the door"
        W141 = 141,
        //% blockId="fwd_ai_voice_W142" block="close the door"
        W142 = 142,
        //% blockId="fwd_ai_voice_W143" block="---"
        W143 = 143,
        //% blockId="fwd_ai_voice_W144" block="---"
        W144 = 144,
        //% blockId="fwd_ai_voice_W145" block="---"
        W145 = 145,
        //% blockId="fwd_ai_voice_W146" block="---"
        W146 = 146,
        //% blockId="fwd_ai_voice_W147" block="---"
        W147 = 147,
        //% blockId="fwd_ai_voice_W148" block="---"
        W148 = 148,
        //% blockId="fwd_ai_voice_W149" block="---"
        W149 = 149,
        //% blockId="fwd_ai_voice_W150" block="---"
        W150 = 150,
        //% blockId="fwd_ai_voice_W151" block="---"
        W151 = 151,
        //% blockId="fwd_ai_voice_W152" block="---"
        W152 = 152,
        //% blockId="fwd_ai_voice_W153" block="---"
        W153 = 153,
        //% blockId="fwd_ai_voice_W154" block="---"
        W154 = 154,
        //% blockId="fwd_ai_voice_W155" block="---"
        W155 = 155,
        //% blockId="fwd_ai_voice_W156" block="---"
        W156 = 156,
    }

    export enum LearningRelatedCommands {
        //% blockId="fwd_ai_voice_W200" block="learning wake word"
        W200 = 200,
        //% blockId="fwd_ai_voice_W201" block="learning command word"
        W201 = 201,
        //% blockId="fwd_ai_voice_W202" block="re-learn"
        W202 = 202,
        //% blockId="fwd_ai_voice_W203" block="exit learning"
        W203 = 203,
        //% blockId="fwd_ai_voice_W204" block="I want to delete"
        W204 = 204,
        //% blockId="fwd_ai_voice_W205" block="delete wake word"
        W205 = 205,
        //% blockId="fwd_ai_voice_W206" block="delete command word"
        W206 = 206,
        //% blockId="fwd_ai_voice_W207" block="exit deleting"
        W207 = 207,
        //% blockId="fwd_ai_voice_W208" block="delete all"
        W208 = 208,
    }

    const DF2301Q_I2C_ADDR = 0x64 // i2c address

    const DF2301Q_I2C_REG_CMDID = 0x02 // register address for requesting the command word ID
    const DF2301Q_I2C_REG_PLAY_CMDID = 0x03 // register address for playing audio by command word ID
    const DF2301Q_I2C_REG_SET_MUTE = 0x04 // register for setting mute mode
    const DF2301Q_I2C_REG_SET_VOLUME = 0x05 // register for setting the volume
    const DF2301Q_I2C_REG_WAKE_TIME = 0x06 // register address for the wake-up time

    const DF2301Q_UART_BAUDRATE = 9600 // UART baud rate
    const DF2301Q_UART_MSG_DATA_MAX_SIZE = 8 // maximum data length of a serial data frame

    /*header*/
    const DF2301Q_UART_MSG_HEAD_LOW = 0xf4
    const DF2301Q_UART_MSG_HEAD_HIGH = 0xf5
    const DF2301Q_UART_MSG_HEAD =
        (DF2301Q_UART_MSG_HEAD_HIGH << 8) | DF2301Q_UART_MSG_HEAD_LOW
    /*tail*/
    const DF2301Q_UART_MSG_TAIL = 0xfb
    /*msgType*/
    const DF2301Q_UART_MSG_TYPE_CMD_UP = 0xa0
    const DF2301Q_UART_MSG_TYPE_CMD_DOWN = 0xa1
    const DF2301Q_UART_MSG_TYPE_ACK = 0xa2
    const DF2301Q_UART_MSG_TYPE_NOTIFY = 0xa3
    /*msgCmd*/
    const DF2301Q_UART_MSG_CMD_ASR_RESULT = 0x91 //report the speech recognition result
    const DF2301Q_UART_MSG_CMD_PLAY_VOICE = 0x92 //play a local announcement sound
    const DF2301Q_UART_MSG_CMD_GET_FLASHUID = 0x93 //read the FLASH serial number
    const DF2301Q_UART_MSG_CMD_GET_VERSION = 0x94 //read the version number
    const DF2301Q_UART_MSG_CMD_RESET_MODULE = 0x95 //reset the voice module
    const DF2301Q_UART_MSG_CMD_SET_CONFIG = 0x96 //configure settings
    const DF2301Q_UART_MSG_CMD_ENTER_OTA_MODE = 0x97 //enter upgrade mode
    const DF2301Q_UART_MSG_CMD_NOTIFY_STATUS = 0x9a //event notification
    const DF2301Q_UART_MSG_CMD_ACK_COMMON = 0xaa
    /* !!! if user want add please add form DF2301Q_UART_MSG_CMD_USER_START*/
    const DF2301Q_UART_MSG_CMD_USER_START = 0xb0
    /*msgData  msgCmd:DF2301Q_UART_MSG_CMD_PLAY_VOICE*/
    const DF2301Q_UART_MSG_DATA_PLAY_START = 0x80
    const DF2301Q_UART_MSG_DATA_PLAY_PAUSE = 0x81
    const DF2301Q_UART_MSG_DATA_PLAY_RESUME = 0x82
    const DF2301Q_UART_MSG_DATA_PLAY_STOP = 0x83
    const DF2301Q_UART_MSG_DATA_PLAY_BY_VOICEID = 0x90
    const DF2301Q_UART_MSG_DATA_PLAY_BY_SEMANTIC_ID = 0x91
    const DF2301Q_UART_MSG_DATA_PLAY_BY_CMD_ID = 0x92
    /*msgData  msg_cmd:DF2301Q_UART_MSG_CMD_GET_VERSION*/
    const DF2301Q_UART_MSG_DATA_VER_PROTOCOL = 0x80 // serial protocol version number
    const DF2301Q_UART_MSG_DATA_VER_SDK = 0x81 // SDK version number
    const DF2301Q_UART_MSG_DATA_VER_ASR = 0x82 // ASR component version number
    const DF2301Q_UART_MSG_DATA_VER_PREPROCESS = 0x83 // speech pre-processing algorithm version number
    const DF2301Q_UART_MSG_DATA_VER_PLAYER = 0x84 // player version number
    const DF2301Q_UART_MSG_DATA_VER_APP = 0x8a // application version number
    /*msgData  msg_cmd:DF2301Q_UART_MSG_CMD_NOTIFY_STATUS*/
    const DF2301Q_UART_MSG_DATA_NOTIFY_POWERON = 0xb0
    const DF2301Q_UART_MSG_DATA_NOTIFY_WAKEUPENTER = 0xb1
    const DF2301Q_UART_MSG_DATA_NOTIFY_WAKEUPEXIT = 0xb2
    const DF2301Q_UART_MSG_DATA_NOTIFY_PLAYSTART = 0xb3
    const DF2301Q_UART_MSG_DATA_NOTIFY_PLAYEND = 0xb4
    /*msgData msg_cmd:DF2301Q_UART_MSG_CMD_SET_CONFIG*/
    const DF2301Q_UART_MSG_CMD_SET_VOLUME = 0x80
    const DF2301Q_UART_MSG_CMD_SET_ENTERWAKEUP = 0x81
    const DF2301Q_UART_MSG_CMD_SET_PRT_MID_RST = 0x82
    const DF2301Q_UART_MSG_CMD_SET_MUTE = 0x83
    const DF2301Q_UART_MSG_CMD_SET_WAKE_TIME = 0x84
    const DF2301Q_UART_MSG_CMD_SET_NEEDACK = 0x90
    const DF2301Q_UART_MSG_CMD_SET_NEEDSTRING = 0x91
    /*ACK error code*/
    const DF2301Q_UART_MSG_ACK_ERR_NONE = 0x0
    const DF2301Q_UART_MSG_ACK_ERR_CHECKSUM = 0xff
    const DF2301Q_UART_MSG_ACK_ERR_NOSUPPORT = 0xfe

    let deviceAddress = 0
    let saveCmdID = 0

    /**
     * Connect to the voice recognition module over I2C, retrying until the
     * module answers.
     */
    //% weight=100
    //% blockId=fwd_ai_voice_init block="voice recognition setup I2C mode address 0x64"
    export function init(): void {
        deviceAddress = DF2301Q_I2C_ADDR
        while (!readKnock());
    }

    /**
     * Set how loudly the module plays its announcements.
     * @param volume the volume level, from 1 (quietest) to 7 (loudest)
     */
    //% weight=98
    //% blockId=fwd_ai_voice_setVolume block="set volume|%volume"
    //% volume.min=1 volume.max=7 volume.defl=4
    export function setVolume(volume: number): void {
        if (volume < 1) {
            volume = 1
        }
        if (volume > 7) {
            volume = 7
        }
        writeData([DF2301Q_I2C_REG_SET_VOLUME, volume])
    }

    /**
     * Silence or unsilence the module's speaker.
     * @param mute on to silence the speaker, off to let it play again
     */
    //% weight=95
    //% blockId=fwd_ai_voice_setMuteMode block="set mute mode|%mute"
    //% advanced=true
    export function setMuteMode(mute: fwdEnums.OnOff): void {
        const muted = mute == fwdEnums.OnOff.Off ? 0 : 1
        writeData([DF2301Q_I2C_REG_SET_MUTE, muted])
    }

    /**
     * Set how long the module keeps listening for commands after it hears the
     * wake-up word.
     * @param time the wake-up duration in seconds, from 0 to 255
     */
    //% weight=90
    //% blockId=fwd_ai_voice_setWakeTime block="set wake time|%time"
    //% time.min=0 time.max=255 time.defl=20
    export function setWakeTime(time: number): void {
        writeData([DF2301Q_I2C_REG_WAKE_TIME, time])
    }

    /**
     * How long the module stays awake after the wake-up word, in seconds.
     */
    //% weight=85
    //% blockId=fwd_ai_voice_getWakeTime block="get wake time"
    //% advanced=true
    export function getWakeTime(): number {
        const buf: Buffer = readData(DF2301Q_I2C_REG_WAKE_TIME, 1)
        if (!buf || buf.length < 1) return -1

        return buf.getNumber(NumberFormat.UInt8BE, 0)
    }

    /**
     * Have the module say the announcement that belongs to a command word.
     * @param id the ID of the command word to announce
     */
    //% weight=80
    //% blockId=fwd_ai_voice_playByCMDID block="play|%id"
    //% id.defl=23
    export function playByCMDID(id: number): void {
        writeData([DF2301Q_I2C_REG_PLAY_CMDID, id])
        basic.pause(1000)
    }

    /**
     * Ask the module what it heard and store it as the result. The other
     * blocks all read from that stored result.
     */
    //% weight=75
    //% blockId=fwd_ai_voice_getCMDID block="identify once and save the results"
    export function getCMDID(): void {
        const buf: Buffer = readData(DF2301Q_I2C_REG_CMDID, 1)
        if (!buf || buf.length < 1) return

        saveCmdID = buf.getNumber(NumberFormat.UInt8BE, 0)
    }

    /**
     * Returns true when the stored result holds a recognized command word.
     */
    //% weight=70
    //% blockId=fwd_ai_voice_checkCMDID block="recognize it?"
    export function checkCMDID(): boolean {
        return saveCmdID == 0 ? false : true
    }

    /**
     * The ID of the command word in the stored result, or 0 if nothing was
     * recognized.
     */
    //% weight=65
    //% blockId=fwd_ai_voice_readCMDID block="get the result"
    export function readCMDID(): number {
        return saveCmdID
    }

    /**
     * The ID of a wake-up word, for comparing against the stored result.
     * @param word the wake-up word to look up
     */
    //% weight=60
    //% blockId=fwd_ai_voice_checkWord1 block="wake-up words %word ID"
    export function checkWord1(word: WakeupWords): number {
        return word
    }

    /**
     * The ID of a custom command you taught the module, for comparing against
     * the stored result.
     * @param word the custom command slot to look up
     */
    //% weight=55
    //% blockId=fwd_ai_voice_checkWord2 block="commands for learning %word ID"
    export function checkWord2(word: LearningCommandWords): number {
        return word
    }

    /**
     * The ID of one of the module's built-in command words, for comparing
     * against the stored result.
     * @param word the built-in command word to look up
     */
    //% weight=50
    //% blockId=fwd_ai_voice_checkWord3 block="fixed command words %word ID"
    export function checkWord3(word: FixedCommandWords): number {
        return word
    }

    /**
     * The ID of a command that starts or stops learning, for comparing against
     * the stored result.
     * @param word the learning-related command to look up
     */
    //% weight=45
    //% blockId=fwd_ai_voice_checkWord4 block="learning-related commands %word ID"
    export function checkWord4(word: LearningRelatedCommands): number {
        return word
    }

    function readKnock() {
        for (let i = 0; i < 5; i++) {
            let wakeTime = getWakeTime()
            if (wakeTime >= 0) return true
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

    function wait() {
        timerBegin()
        while (!timerAvailable()) {
            pause(10)
        }
    }

    function readData(reg: number, len: number): Buffer {
        // write_buf = [reg], num_read = len
        const w = pins.createBuffer(1)
        w.setNumber(NumberFormat.UInt8BE, 0, reg & 0xff)
        return fwdAiVoice.voicerecognition1.transactionI2C(
            deviceAddress,
            len,
            w,
        )
    }

    function writeData(buf: number[]): void {
        const w = pins.createBufferFromArray(buf)
        fwdAiVoice.voicerecognition1.transactionI2C(deviceAddress, 0, w)
        pause(10)
    }

    export class VoiceRecognitionClient extends jacdac.Client {
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
         * @param i2caddr the I2C address of the target device
         * @param numRead how many bytes to read back, 0 for a write-only transaction
         * @param writeBuf the bytes to write before reading
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

    //% fixedInstance whenUsed weight=1 block="voicerecognition1"
    export const voicerecognition1 = new VoiceRecognitionClient(
        "voicerecognition1",
    )
}
