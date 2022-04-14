//クラス宣言
class Student {
    constructor(name) {
        this.name = name;
    }
    avg(math, english) {
        console.log((math + english) / 2);
    }
}

var a001 = new Student("sato"); //インスタンス化
console.log(a001.name);
a001.avg(70,80);

var a002 = new Student("tanaka");
console.log(a002.name);
a001.avg(50,60);