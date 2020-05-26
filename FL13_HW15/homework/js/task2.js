const SET_INTERVAL_TIME_DRIVE = 2000;
const SLOW_DOWN_TIMEOUT = 1500;
const MAX_VALUE = 30;

function Vehicle(color, engine) {
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 70;
    this.currentSpeed = 0;
    this.minSpeed = 20;
    this.maxValueSpeed = 0;
    this.isBraking = false;

    this.upgradeEngine = function (newEngine, maxSpeed) {
        if (this.currentSpeed === 0) {
            this.engine = newEngine;
            this.maxSpeed = maxSpeed;
        }
    }

    this.getInfo = () => {
        let obj = {};
        obj.engine = this.engine;
        obj.color = this.color;
        obj.maxSpeed = this.maxSpeed;
        if (this.model !== undefined) {
            obj.model = this.model;
        } else {
            obj.model = 'unknown model';
        }
        return obj;
    }

    this.drive = () => {
        if (this.currentSpeed !== 0) {
            console.log('Already driving');
            return;
        }

        let interval = setInterval(() => {
            if (this.isBraking) {
                return clearInterval(interval)
            }
            this.currentSpeed += 20;
            if (this.currentSpeed > this.maxValueSpeed) {
                this.maxValueSpeed = this.currentSpeed;
            }
            console.log(this.currentSpeed);
            if (this.currentSpeed >= this.maxSpeed) {
                console.log('speed is too high, SLOW DOWN!');
            }
        }, SET_INTERVAL_TIME_DRIVE)
    }

    this._slowDown = (cb) => {
        if (this.isBraking) {
            console.log('Already slows down');
            return;
        }
        this.isBraking = true;
        let interval = setInterval(() => {
            if (!this.isBraking) {
                return clearInterval(interval)
            }
            this.currentSpeed -= 20;
            console.log(this.currentSpeed);
            if (this.currentSpeed <= 0) {
                this.currentSpeed = 0;
                this.isBraking = false;
                clearInterval(interval);
                cb.apply(this);
            }
        }, SLOW_DOWN_TIMEOUT)
    }


    this.stop = () => {
        this._slowDown(() => {
            console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maxValueSpeed}`);
        })
    }
}

function Car(model, color, engine) {
    Vehicle.call(this, color, engine)
    this.model = model;
    this.maxSpeed = 80

    this.stop = () => {
        this._slowDown(() => {
            console.log(`Car ${this.model} is stopped. Maximum speed during the drive ${this.maxValueSpeed}`);
        })
    }

    this.changeColor = function (newColor) {
        if (newColor === this.color) {
            console.log('The selected color is the same as the previous, please choose another one');
        } else {
            this.color = newColor;
        }
    }
}

function Motorcycle(model, color, engine) {
    Vehicle.call(this, color, engine)
    this.model = model;
    this.maxSpeed = 90

    this.drive = () => {
        if (this.currentSpeed !== 0) {
            console.log('Already driving');
            return;
        }
        console.log('Let’s drive');
        let interval = setInterval(() => {
            if (this.isBraking) {
                return clearInterval(interval)
            }
            this.currentSpeed += 20;
            if (this.currentSpeed > this.maxValueSpeed) {
                this.maxValueSpeed = this.currentSpeed;
            }
            console.log(this.currentSpeed);
            if (this.currentSpeed >= this.maxSpeed) {
                console.log('speed is too high, SLOW DOWN!');
            }
            if (!this.isBraking && this.currentSpeed - this.maxSpeed >= MAX_VALUE) {
                console.log('Engine overheating');
                this.stop()
            }
        }, SET_INTERVAL_TIME_DRIVE)
    }

    this.stop = () => {
        this._slowDown(() => {
            console.log(`Motorcycle ${this.model} is stopped. Good drive`);
        })

    }
}