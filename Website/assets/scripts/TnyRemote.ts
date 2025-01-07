class TnyRemote extends EventTarget {
    private static instance: TnyRemote
    public static getInstance() {
        if (!TnyRemote.instance) {
            TnyRemote.instance = new TnyRemote();
            (window as any).TnyRemote = TnyRemote.instance;
        }
        return TnyRemote.instance;
    }
    private constructor() {
        super();
    }

    public async connect(ip: string) {
        return new Promise((resolve, reject) => {
            console.log(`Connecting to ${ip} ...`);
            setTimeout(() => {
                console.log(`Connected to ${ip}`);
                resolve(true);
            }, 20);
        });
    }

    public async disconnect() {
        return new Promise((resolve, reject) => {
            console.log(`Disconnecting ...`);
            setTimeout(() => {
                console.log(`Disconnected`);
                resolve(true);
            }, 20);
        });
    }

    public async setMotorRotation(motor: number, rotation: number, lerpTime: number = 0) {
        return new Promise((resolve, reject) => {
            console.log(`Setting motor ${motor} rotation to ${rotation} ...`);
            setTimeout(() => {
                console.log(`Motor ${motor} rotation set to ${rotation}`);
                resolve(true);
            }, 20);
        });
    }

    public async rotateMotorBy(motor: number, rotation: number, lerpTime: number = 0) {
        return new Promise((resolve, reject) => {
            console.log(`Rotating motor ${motor} by ${rotation} ...`);
            setTimeout(() => {
                console.log(`Motor ${motor} rotated by ${rotation}`);
                resolve(true);
            }, 20);
        });
    }

    public async getMotorRotation(motor: number) {
        return new Promise((resolve, reject) => {
            console.log(`Getting motor ${motor} rotation ...`);
            setTimeout(() => {
                console.log(`Motor ${motor} rotation is 0`);
                resolve(0);
            }, 20);
        });
    }
}

export default TnyRemote;