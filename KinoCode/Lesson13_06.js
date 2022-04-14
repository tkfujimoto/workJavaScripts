// クラス式でクラス宣言
var Student = class {
    constructor(name) {
        this.name = name; //インスタンス化の第一引数で代入
    }
    avg(math,english) {
        console.log((math+english) / 2);
    }
};  // クラス式では、セミコロンで閉じる必要がある。

// 実体化(インスタンa001の生成)
var a001 = new Student("sato");
console.log(a001.name);

// 実体化(インスタンa002の生成)
var a002 = new Student("tanaka");
console.log(a002.name);