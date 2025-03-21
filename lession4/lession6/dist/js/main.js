"use strict";
console.log("clasess in the tyepscrit");
class Coder {
    // onstructor to initialize the member variables
    constructor(userName, music, age, // access within the class only
    lang) {
        this.userName = userName;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.userName = userName;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return ` hi i am ${this.age}`;
    }
}
class webDev extends Coder {
    constructor(computer, userName, music, age) {
        super(userName, music, age);
        this.computer = computer;
        this.computer = computer;
    }
}
// we have heard about the data modifiers and access modifiers
const Dave = new Coder("Coder", "core", 21);
console.log(Dave.getAge());
