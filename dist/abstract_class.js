"use strict";
class ATakePhoto {
    constructor(camMode, filter) {
        this.camMode = camMode;
        this.filter = filter;
    }
    getReel() {
        return 8;
    }
}
class NewInsta extends ATakePhoto {
    constructor(camMode, filter, burst) {
        super(camMode, filter);
        this.camMode = camMode;
        this.filter = filter;
        this.burst = burst;
    }
    test() {
        console.log('test');
    }
}
let a = new NewInsta('', '', '');
a.test();
