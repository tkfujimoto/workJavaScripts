// コンストラクタで空のプロパティの用意しておく
// (プロパティがundefinedにはならない)
class Student {
    constructor() {
        this.name = ""; //空のnameプロパティを用意する。
    }
    avg(math,english) {
        console.log((math+english) / 2);
    }
}

// 実体化(インスタンa001の生成)
var a001 = new Student();
// プロパティの表示
console.log(a001.name);

