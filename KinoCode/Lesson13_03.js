// プロパティの追加
class Student {
    avg(math,english) {
        console.log((math+english) / 2);
    }
}

// 実体化(インスタンa001の生成)
var a001 = new Student();
// プロパティの追加
a001.name = "sato";
// メソッドの呼び出し
a001.avg(80,70);

console.log(a001.name);