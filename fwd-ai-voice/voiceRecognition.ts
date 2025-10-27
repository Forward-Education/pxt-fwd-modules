namespace fwdAiVoice {
    export enum MUTE {
        //% blockId="voiceRecognition_MUTEOFF" block="OFF"
        OFF = 0,
        //% blockId="voiceRecognition_MUTEON" block="ON"
        ON = 1,
    }

    export enum WakeupWords {
        //% blockId="voiceRecognition_W1" block="Wake-up words for learning"
        W1 = 1,
        //% blockId="voiceRecognition_W2" block="Hello robot"
        W2 = 2,
        //% blockId="voiceRecognition_W3" block="---"
        W3 = 3,
    }

    export enum LearningCommandWords {
        //% blockId="voiceRecognition_W5" block=" The first custom command "
        W5 = 5,
        //% blockId="voiceRecognition_W6" block="The second custom command"
        W6 = 6,
        //% blockId="voiceRecognition_W7" block="The third custom command"
        W7 = 7,
        //% blockId="voiceRecognition_W8" block="The fourth custom command"
        W8 = 8,
        //% blockId="voiceRecognition_W9" block="The fifth custom command"
        W9 = 9,
        //% blockId="voiceRecognition_W10" block="The sixth custom command"
        W10 = 10,
        //% blockId="voiceRecognition_W11" block="The seventh custom command"
        W11 = 11,
        //% blockId="voiceRecognition_W12" block="The eighth custom command"
        W12 = 12,
        //% blockId="voiceRecognition_W13" block="The ninth custom command"
        W13 = 13,
        //% blockId="voiceRecognition_W14" block="The tenth custom command"
        W14 = 14,
        //% blockId="voiceRecognition_W15" block="The eleventh custom command"
        W15 = 15,
        //% blockId="voiceRecognition_W16" block="The twelfth custom command"
        W16 = 16,
        //% blockId="voiceRecognition_W17" block="The thirteenth custom command"
        W17 = 17,
        //% blockId="voiceRecognition_W18" block="The fourteenth custom command"
        W18 = 18,
        //% blockId="voiceRecognition_W19" block="The fifteenth custom command"
        W19 = 19,
        //% blockId="voiceRecognition_W20" block="The sixteenth custom command"
        W20 = 20,
        //% blockId="voiceRecognition_W21" block="The seventeenth custom command"
        W21 = 21,
    }

    export enum FixedCommandWords {
        //% blockId="voiceRecognition_W22" block="Go forward"
        W22 = 22,
        //% blockId="voiceRecognition_W23" block="Retreat"
        W23 = 23,
        //% blockId="voiceRecognition_W24" block="Park a car"
        W24 = 24,
        //% blockId="voiceRecognition_W25" block="Turn left ninety degrees"
        W25 = 25,
        //% blockId="voiceRecognition_W26" block="Turn left forty-five degrees"
        W26 = 26,
        //% blockId="voiceRecognition_W27" block="Turn left thirty degrees"
        W27 = 27,
        //% blockId="voiceRecognition_W28" block="Turn right ninety degrees"
        W28 = 28,
        //% blockId="voiceRecognition_W29" block="Turn right forty-five degrees"
        W29 = 29,
        //% blockId="voiceRecognition_W30" block="Turn right thirty degrees"
        W30 = 30,
        //% blockId="voiceRecognition_W31" block="Shift down a gear"
        W31 = 31,
        //% blockId="voiceRecognition_W32" block="Line tracking mode"
        W32 = 32,
        //% blockId="voiceRecognition_W33" block="Light tracking mode"
        W33 = 33,
        //% blockId="voiceRecognition_W34" block="Bluetooth mode"
        W34 = 34,
        //% blockId="voiceRecognition_W35" block="Obstacle avoidance mode"
        W35 = 35,
        //% blockId="voiceRecognition_W36" block="Face recognition"
        W36 = 36,
        //% blockId="voiceRecognition_W37" block="Object tracking"
        W37 = 37,
        //% blockId="voiceRecognition_W38" block="Object recognition"
        W38 = 38,
        //% blockId="voiceRecognition_W39" block="Line tracking"
        W39 = 39,
        //% blockId="voiceRecognition_W40" block="Color recognition"
        W40 = 40,
        //% blockId="voiceRecognition_W41" block="Tag recognition"
        W41 = 41,
        //% blockId="voiceRecognition_W42" block="Object sorting"
        W42 = 42,
        //% blockId="voiceRecognition_W43" block="Qr code recognition"
        W43 = 43,
        //% blockId="voiceRecognition_W44" block="General settings"
        W44 = 44,
        //% blockId="voiceRecognition_W45" block="Clear screen"
        W45 = 45,
        //% blockId="voiceRecognition_W46" block="Learn once"
        W46 = 46,
        //% blockId="voiceRecognition_W47" block="Forget"
        W47 = 47,
        //% blockId="voiceRecognition_W48" block="Load model"
        W48 = 48,
        //% blockId="voiceRecognition_W49" block="Save model"
        W49 = 49,
        //% blockId="voiceRecognition_W50" block="Take photos and save them"
        W50 = 50,
        //% blockId="voiceRecognition_W51" block="Save and return"
        W51 = 51,
        //% blockId="voiceRecognition_W52" block="Display number zero"
        W52 = 52,
        //% blockId="voiceRecognition_W53" block="Display number one"
        W53 = 53,
        //% blockId="voiceRecognition_W54" block="Display number two"
        W54 = 54,
        //% blockId="voiceRecognition_W55" block="Display number three"
        W55 = 55,
        //% blockId="voiceRecognition_W56" block="Display number four"
        W56 = 56,
        //% blockId="voiceRecognition_W57" block="Display number five"
        W57 = 57,
        //% blockId="voiceRecognition_W58" block="Display number six"
        W58 = 58,
        //% blockId="voiceRecognition_W59" block="Display number seven"
        W59 = 59,
        //% blockId="voiceRecognition_W60" block="Display number eight"
        W60 = 60,
        //% blockId="voiceRecognition_W61" block="Display number nine"
        W61 = 61,
        //% blockId="voiceRecognition_W62" block="Display smiley face"
        W62 = 62,
        //% blockId="voiceRecognition_W63" block="Display crying face"
        W63 = 63,
        //% blockId="voiceRecognition_W64" block="Display heart"
        W64 = 64,
        //% blockId="voiceRecognition_W65" block="Turn off dot matrix"
        W65 = 65,
        //% blockId="voiceRecognition_W66" block="Read current posture"
        W66 = 66,
        //% blockId="voiceRecognition_W67" block="Read ambient light"
        W67 = 67,
        //% blockId="voiceRecognition_W68" block="Read compass"
        W68 = 68,
        //% blockId="voiceRecognition_W69" block="Read temperature"
        W69 = 69,
        //% blockId="voiceRecognition_W70" block="Read acceleration"
        W70 = 70,
        //% blockId="voiceRecognition_W71" block="Reading sound intensity"
        W71 = 71,
        //% blockId="voiceRecognition_W72" block="Calibrate electronic gyroscope"
        W72 = 72,
        //% blockId="voiceRecognition_W73" block="Turn on the camera"
        W73 = 73,
        //% blockId="voiceRecognition_W74" block="Turn off the camera"
        W74 = 74,
        //% blockId="voiceRecognition_W75" block="Turn on the fan"
        W75 = 75,
        //% blockId="voiceRecognition_W76" block="Turn off the fan"
        W76 = 76,
        //% blockId="voiceRecognition_W77" block="Turn fan speed to gear one"
        W77 = 77,
        //% blockId="voiceRecognition_W78" block="Turn fan speed to gear two"
        W78 = 78,
        //% blockId="voiceRecognition_W79" block="Turn fan speed to gear three"
        W79 = 79,
        //% blockId="voiceRecognition_W80" block="Start oscillating"
        W80 = 80,
        //% blockId="voiceRecognition_W81" block="Stop oscillating"
        W81 = 81,
        //% blockId="voiceRecognition_W82" block="Reset"
        W82 = 82,
        //% blockId="voiceRecognition_W83" block="Set servo to ten degrees"
        W83 = 83,
        //% blockId="voiceRecognition_W84" block="Set servo to thirty degrees"
        W84 = 84,
        //% blockId="voiceRecognition_W85" block="Set servo to forty-five degrees"
        W85 = 85,
        //% blockId="voiceRecognition_W86" block="Set servo to sixty degrees"
        W86 = 86,
        //% blockId="voiceRecognition_W87" block="Set servo to ninety degrees"
        W87 = 87,
        //% blockId="voiceRecognition_W88" block="Turn on the buzzer"
        W88 = 88,
        //% blockId="voiceRecognition_W89" block="Turn off the buzzer"
        W89 = 89,
        //% blockId="voiceRecognition_W90" block="Turn on the speaker"
        W90 = 90,
        //% blockId="voiceRecognition_W91" block="Turn off the speaker"
        W91 = 91,
        //% blockId="voiceRecognition_W92" block="Play music"
        W92 = 92,
        //% blockId="voiceRecognition_W93" block="Stop playing"
        W93 = 93,
        //% blockId="voiceRecognition_W94" block="The last track"
        W94 = 94,
        //% blockId="voiceRecognition_W95" block="The next track"
        W95 = 95,
        //% blockId="voiceRecognition_W96" block="Repeat this track"
        W96 = 96,
        //% blockId="voiceRecognition_W97" block="Volume up"
        W97 = 97,
        //% blockId="voiceRecognition_W98" block="Volume down"
        W98 = 98,
        //% blockId="voiceRecognition_W99" block="Change volume to maximum"
        W99 = 99,
        //% blockId="voiceRecognition_W100" block="Change volume to minimum"
        W100 = 100,
        //% blockId="voiceRecognition_W101" block="Change volume to medium"
        W101 = 101,
        //% blockId="voiceRecognition_W102" block="Play poem"
        W102 = 102,
        //% blockId="voiceRecognition_W103" block="Turn on the light"
        W103 = 103,
        //% blockId="voiceRecognition_W104" block="Turn off the light"
        W104 = 104,
        //% blockId="voiceRecognition_W105" block="Brighten the light"
        W105 = 105,
        //% blockId="voiceRecognition_W106" block="Dim the light"
        W106 = 106,
        //% blockId="voiceRecognition_W107" block="Adjust brightness to maximum"
        W107 = 107,
        //% blockId="voiceRecognition_W108" block="Adjust brightness to minimum"
        W108 = 108,
        //% blockId="voiceRecognition_W109" block="Increase color temperature"
        W109 = 109,
        //% blockId="voiceRecognition_W110" block="Decrease color temperature"
        W110 = 110,
        //% blockId="voiceRecognition_W111" block="Adjust color temperature to maximum"
        W111 = 111,
        //% blockId="voiceRecognition_W112" block="Adjust color temperature to minimum"
        W112 = 112,
        //% blockId="voiceRecognition_W113" block="Daylight mode"
        W113 = 113,
        //% blockId="voiceRecognition_W114" block="Moonlight mode"
        W114 = 114,
        //% blockId="voiceRecognition_W115" block="Color mode"
        W115 = 115,
        //% blockId="voiceRecognition_W116" block="Set to red"
        W116 = 116,
        //% blockId="voiceRecognition_W117" block="Set to orange"
        W117 = 117,
        //% blockId="voiceRecognition_W118" block="Set to yellow"
        W118 = 118,
        //% blockId="voiceRecognition_W119" block="Set to green"
        W119 = 119,
        //% blockId="voiceRecognition_W120" block="Set to cyan"
        W120 = 120,
        //% blockId="voiceRecognition_W121" block="Set to blue"
        W121 = 121,
        //% blockId="voiceRecognition_W122" block="Set to purple"
        W122 = 122,
        //% blockId="voiceRecognition_W123" block="Set to white"
        W123 = 123,
        //% blockId="voiceRecognition_W124" block="Turn on ac"
        W124 = 124,
        //% blockId="voiceRecognition_W125" block="Turn off ac"
        W125 = 125,
        //% blockId="voiceRecognition_W126" block="Increase temperature"
        W126 = 126,
        //% blockId="voiceRecognition_W127" block="Decrease temperature"
        W127 = 127,
        //% blockId="voiceRecognition_W128" block="Cool mode"
        W128 = 128,
        //% blockId="voiceRecognition_W129" block="Heat mode"
        W129 = 129,
        //% blockId="voiceRecognition_W130" block="Auto mode"
        W130 = 130,
        //% blockId="voiceRecognition_W131" block="Dry mode"
        W131 = 131,
        //% blockId="voiceRecognition_W132" block="Fan mode"
        W132 = 132,
        //% blockId="voiceRecognition_W133" block="Enable blowing up and down"
        W133 = 133,
        //% blockId="voiceRecognition_W134" block="Disable blowing up and down"
        W134 = 134,
        //% blockId="voiceRecognition_W135" block="Enable blowing right and left"
        W135 = 135,
        //% blockId="voiceRecognition_W136" block="Disable blowing right and left"
        W136 = 136,
        //% blockId="voiceRecognition_W137" block="Open the window"
        W137 = 137,
        //% blockId="voiceRecognition_W138" block="Close the window"
        W138 = 138,
        //% blockId="voiceRecognition_W139" block="Open curtain"
        W139 = 139,
        //% blockId="voiceRecognition_W140" block="Close curtain"
        W140 = 140,
        //% blockId="voiceRecognition_W141" block="Open the door"
        W141 = 141,
        //% blockId="voiceRecognition_W142" block="Close the door"
        W142 = 142,
        //% blockId="voiceRecognition_W143" block="---"
        W143 = 143,
        //% blockId="voiceRecognition_W144" block="---"
        W144 = 144,
        //% blockId="voiceRecognition_W145" block="---"
        W145 = 145,
        //% blockId="voiceRecognition_W146" block="---"
        W146 = 146,
        //% blockId="voiceRecognition_W147" block="---"
        W147 = 147,
        //% blockId="voiceRecognition_W148" block="---"
        W148 = 148,
        //% blockId="voiceRecognition_W149" block="---"
        W149 = 149,
        //% blockId="voiceRecognition_W150" block="---"
        W150 = 150,
        //% blockId="voiceRecognition_W151" block="---"
        W151 = 151,
        //% blockId="voiceRecognition_W152" block="---"
        W152 = 152,
        //% blockId="voiceRecognition_W153" block="---"
        W153 = 153,
        //% blockId="voiceRecognition_W154" block="---"
        W154 = 154,
        //% blockId="voiceRecognition_W155" block="---"
        W155 = 155,
        //% blockId="voiceRecognition_W156" block="---"
        W156 = 156,
    }

    export enum LearningRelatedCommands {
        //% blockId="voiceRecognition_W200" block="Learning wake word"
        W200 = 200,
        //% blockId="voiceRecognition_W201" block="Learning command word"
        W201 = 201,
        //% blockId="voiceRecognition_W202" block="Re-learn"
        W202 = 202,
        //% blockId="voiceRecognition_W203" block="Exit learning"
        W203 = 203,
        //% blockId="voiceRecognition_W204" block="I want to delete"
        W204 = 204,
        //% blockId="voiceRecognition_W205" block="Delete wake word"
        W205 = 205,
        //% blockId="voiceRecognition_W206" block="Delete command word"
        W206 = 206,
        //% blockId="voiceRecognition_W207" block="Exit deleting"
        W207 = 207,
        //% blockId="voiceRecognition_W208" block="Delete all"
        W208 = 208,
    }

    const DF2301Q_I2C_ADDR = 0x64; // i2c address

    const DF2301Q_I2C_REG_CMDID = 0x02; // 请求得到命令词ID的寄存器地址
    const DF2301Q_I2C_REG_PLAY_CMDID = 0x03; // 用命令词ID播放Audio的寄存器地址
    const DF2301Q_I2C_REG_SET_MUTE = 0x04; // 设置静音模式的寄存器
    const DF2301Q_I2C_REG_SET_VOLUME = 0x05; // 设置音量的寄存器
    const DF2301Q_I2C_REG_WAKE_TIME = 0x06; // 唤醒时间的寄存器地址

    const DF2301Q_UART_BAUDRATE = 9600; // UART baud rate
    const DF2301Q_UART_MSG_DATA_MAX_SIZE = 8; // 串口数据帧的最大数据长度

    /*header*/
    const DF2301Q_UART_MSG_HEAD_LOW = 0xf4;
    const DF2301Q_UART_MSG_HEAD_HIGH = 0xf5;
    const DF2301Q_UART_MSG_HEAD =
        (DF2301Q_UART_MSG_HEAD_HIGH << 8) | DF2301Q_UART_MSG_HEAD_LOW;
    /*tail*/
    const DF2301Q_UART_MSG_TAIL = 0xfb;
    /*msgType*/
    const DF2301Q_UART_MSG_TYPE_CMD_UP = 0xa0;
    const DF2301Q_UART_MSG_TYPE_CMD_DOWN = 0xa1;
    const DF2301Q_UART_MSG_TYPE_ACK = 0xa2;
    const DF2301Q_UART_MSG_TYPE_NOTIFY = 0xa3;
    /*msgCmd*/
    const DF2301Q_UART_MSG_CMD_ASR_RESULT = 0x91; //报告语音识别结果
    const DF2301Q_UART_MSG_CMD_PLAY_VOICE = 0x92; //播放本地播报音
    const DF2301Q_UART_MSG_CMD_GET_FLASHUID = 0x93; //读取FLASH的序列号
    const DF2301Q_UART_MSG_CMD_GET_VERSION = 0x94; //读取版本号
    const DF2301Q_UART_MSG_CMD_RESET_MODULE = 0x95; //复位语音模块
    const DF2301Q_UART_MSG_CMD_SET_CONFIG = 0x96; //设置
    const DF2301Q_UART_MSG_CMD_ENTER_OTA_MODE = 0x97; //进入升级模式
    const DF2301Q_UART_MSG_CMD_NOTIFY_STATUS = 0x9a; //事件通知
    const DF2301Q_UART_MSG_CMD_ACK_COMMON = 0xaa;
    /* !!! if user want add please add form DF2301Q_UART_MSG_CMD_USER_START*/
    const DF2301Q_UART_MSG_CMD_USER_START = 0xb0;
    /*msgData  msgCmd:DF2301Q_UART_MSG_CMD_PLAY_VOICE*/
    const DF2301Q_UART_MSG_DATA_PLAY_START = 0x80;
    const DF2301Q_UART_MSG_DATA_PLAY_PAUSE = 0x81;
    const DF2301Q_UART_MSG_DATA_PLAY_RESUME = 0x82;
    const DF2301Q_UART_MSG_DATA_PLAY_STOP = 0x83;
    const DF2301Q_UART_MSG_DATA_PLAY_BY_VOICEID = 0x90;
    const DF2301Q_UART_MSG_DATA_PLAY_BY_SEMANTIC_ID = 0x91;
    const DF2301Q_UART_MSG_DATA_PLAY_BY_CMD_ID = 0x92;
    /*msgData  msg_cmd:DF2301Q_UART_MSG_CMD_GET_VERSION*/
    const DF2301Q_UART_MSG_DATA_VER_PROTOCOL = 0x80; // 串口协议版本号
    const DF2301Q_UART_MSG_DATA_VER_SDK = 0x81; // SDK版本号
    const DF2301Q_UART_MSG_DATA_VER_ASR = 0x82; // ASR组件版本号
    const DF2301Q_UART_MSG_DATA_VER_PREPROCESS = 0x83; // 语音预处理算法版本号
    const DF2301Q_UART_MSG_DATA_VER_PLAYER = 0x84; // 播放器版本号
    const DF2301Q_UART_MSG_DATA_VER_APP = 0x8a; // 应用程序版本号
    /*msgData  msg_cmd:DF2301Q_UART_MSG_CMD_NOTIFY_STATUS*/
    const DF2301Q_UART_MSG_DATA_NOTIFY_POWERON = 0xb0;
    const DF2301Q_UART_MSG_DATA_NOTIFY_WAKEUPENTER = 0xb1;
    const DF2301Q_UART_MSG_DATA_NOTIFY_WAKEUPEXIT = 0xb2;
    const DF2301Q_UART_MSG_DATA_NOTIFY_PLAYSTART = 0xb3;
    const DF2301Q_UART_MSG_DATA_NOTIFY_PLAYEND = 0xb4;
    /*msgData msg_cmd:DF2301Q_UART_MSG_CMD_SET_CONFIG*/
    const DF2301Q_UART_MSG_CMD_SET_VOLUME = 0x80;
    const DF2301Q_UART_MSG_CMD_SET_ENTERWAKEUP = 0x81;
    const DF2301Q_UART_MSG_CMD_SET_PRT_MID_RST = 0x82;
    const DF2301Q_UART_MSG_CMD_SET_MUTE = 0x83;
    const DF2301Q_UART_MSG_CMD_SET_WAKE_TIME = 0x84;
    const DF2301Q_UART_MSG_CMD_SET_NEEDACK = 0x90;
    const DF2301Q_UART_MSG_CMD_SET_NEEDSTRING = 0x91;
    /*ACK error code*/
    const DF2301Q_UART_MSG_ACK_ERR_NONE = 0x0;
    const DF2301Q_UART_MSG_ACK_ERR_CHECKSUM = 0xff;
    const DF2301Q_UART_MSG_ACK_ERR_NOSUPPORT = 0xfe;

    let deviceAddress = 0;
    let saveCmdID = 0;

    /**
     * Initialize the AI Voice module in "on start" before using it.
     */
    //% block="initialize the AI Voice module"
    //% weight=200
    export function init(): void {
        deviceAddress = DF2301Q_I2C_ADDR;
        while (!readKnock());
    }

    /**
     * Set the volume between 1 (quietest) and 7 (loudest).
     */
    //% block="set volume %volume"
    //% weight=199
    //% volume.min=1 volume.max=7 volume.defl=4
    export function setVolume(volume: number): void {
        if (volume < 1) {
            volume = 1;
        }
        if (volume > 7) {
            volume = 7;
        }
        writeData([DF2301Q_I2C_REG_SET_VOLUME, volume]);
    }

    /**
     * Mute or unmute the speaker.
     */
    //% block="set mute mode %mute"
    //% weight=198
    export function setMuteMode(mute: MUTE): void {
        if (mute != 0) {
            mute = 1;
        }
        writeData([DF2301Q_I2C_REG_SET_MUTE, mute]);
    }

    /**
     * Adjust the time (seconds) that the module stays in an awakened state after the wake-up word.
     * Use in "on start" after initalization.
     */
    //% block="set awake duration to %time seconds"
    //% weight=90
    //% time.min=0 time.max=255 time.defl=20
    export function setWakeTime(time: number): void {
        writeData([DF2301Q_I2C_REG_WAKE_TIME, time]);
    }

    /**
     * Return the awake duration (seconds).
     */
    //% block="awake duration"
    //% weight=85
    export function getWakeTime(): number {
        const buf: Buffer = readData(DF2301Q_I2C_REG_WAKE_TIME, 1);
        if (!buf || buf.length < 1) return -1;

        return buf.getNumber(NumberFormat.UInt8BE, 0);
    }

    /**
     *
     */
    //% block="manully trigger command %id"
    //% weight=80
    //% id.defl=2
    export function playByCMDID(id: number): void {
        writeData([DF2301Q_I2C_REG_PLAY_CMDID, id]);
        basic.pause(1000);
    }

    /**
     * The state of the AI Voice Module must be established using this block. 
     * Then check for command recognition.
     */
    //% block="collect command recognition data from module"
    //% weight=75
    export function getCMDID(): void {
        const buf: Buffer = readData(DF2301Q_I2C_REG_CMDID, 1);
        if (!buf || buf.length < 1) return;

        saveCmdID = buf.getNumber(NumberFormat.UInt8BE, 0);
    }

    /**
     * Check if a command has been recognized.
     */
    //% block="command recognized"
    //% weight=70
    export function checkCMDID(): boolean {
        return saveCmdID == 0 ? false : true;
    }

    /**
     *
     */
    //% block="command"
    //% weight=65
    export function readCMDID(): number {
        return saveCmdID;
    }

    /**
     *
     */
    //% block="wake-up command %word"
    //% weight=60
    export function checkWord1(word: WakeupWords): number {
        return word;
    }

    /**
     *
     */
    //% block="learned command %word"
    //% weight=55
    export function checkWord2(word: LearningCommandWords): number {
        return word;
    }

    /**
     *
     */
    //% block="default command %word"
    //% weight=50
    export function checkWord3(word: FixedCommandWords): number {
        return word;
    }

    /**
     *
     */
    //% block="learning command %word"
    //% weight=45
    export function checkWord4(word: LearningRelatedCommands): number {
        return word;
    }

    function readKnock() {
        for (let i = 0; i < 5; i++) {
            let wakeTime = getWakeTime();
            if (wakeTime >= 0) return true;
        }
        return false;
    }

    let timeOutDuration = 100;
    let timeOutTimer: number;
    function timerBegin() {
        timeOutTimer = input.runningTime();
    }

    function timerAvailable() {
        return input.runningTime() - timeOutTimer > timeOutDuration;
    }

    function wait() {
        timerBegin();
        while (!timerAvailable()) {
            pause(10);
        }
    }

    function readData(reg: number, len: number): Buffer {
        const buf = pins.createBuffer(1);
        buf.setNumber(NumberFormat.UInt8BE, 0, reg & 0xff);
        fwdAiVoice.voicerecognition1.writeI2C(deviceAddress, buf, false);
        pause(10);
        return fwdAiVoice.voicerecognition1.readI2C(deviceAddress, len);
    }

    function writeData(buf: number[]): void {
        fwdAiVoice.voicerecognition1.writeI2C(
            deviceAddress,
            pins.createBufferFromArray(buf)
        );
        pause(10);
    }

    export class VoiceRecognitionClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_FWDI2CSVC, role);
        }

        _rx: Buffer;

        dumpHexBytes(buf: Buffer): string {
            if (!buf) return "(null)";
            const hex = "0123456789ABCDEF";
            let out = "";
            for (let i = 0; i < buf.length; i++) {
                const b = buf[i] & 0xff;
                out +=
                    (i ? " " : "") +
                    "0x" +
                    hex[(b >> 4) & 0x0f] +
                    hex[b & 0x0f];
            }
            return out;
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            if (
                pkt.isReport &&
                pkt.serviceCommand === jacdac.FwdI2CSvcCmd.ReadI2C &&
                (this.serviceIndex == null ||
                    pkt.serviceIndex === this.serviceIndex)
            ) {
                this._rx = pkt.data;
            }
        }

        writeI2C(i2caddr: number, data: Buffer, sendStop: boolean = true) {
            return this.sendCommand(
                jacdac.JDPacket.from(
                    jacdac.FwdI2CSvcCmd.WriteI2C,
                    jacdac.jdpack(jacdac.FwdI2CSvcCmdPack.WriteI2C, [
                        i2caddr,
                        sendStop ? 1 : 0,
                        data,
                    ])
                )
            );
        }

        readI2C(i2caddr: number, n: number): Buffer {
            this._rx = null;

            const pkt = jacdac.JDPacket.from(
                jacdac.FwdI2CSvcCmd.ReadI2C,
                jacdac.jdpack(jacdac.FwdI2CSvcCmdPack.ReadI2C, [i2caddr, n])
            );
            this.sendCommand(pkt);
            const t0 = control.millis();
            while (!this._rx && control.millis() - t0 < 200) pause(10);

            return this._rx;
        }
    }

    //% fixedInstance whenUsed weight=1 block="voicerecognition1"
    export const voicerecognition1 = new VoiceRecognitionClient(
        "voicerecognition1"
    );
}
