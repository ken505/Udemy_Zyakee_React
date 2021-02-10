"use strict";
{
  // テンプレート文字列(テンプレートリテラルと同義だった🙄)
  // const name = "けん";
  // const age = 17;
  // // 「私の名前はけんです。年齢は17才です。」
  // // 従来の方法
  // const message1 = "私の名前は" + name + "です。" + "年齢は" + age + "才です。";
  // // テンプレートリテラル
  // const message2 = `私の名前は${name}で、${age}才です。`;
  // console.log(message2);
  // アロー関数
  // 従来の関数
  // function Cat(string) {
  //   return string;
  // }
  // console.log(Cat("ムギ"));
  // const Cat = function(string) {
  //   return string;
  // }
  // console.log(Cat("レオ"));
  //
  // アロー関数
  // const Dog = (string) => {
  //   return string;
  // };
  // const Dog = (string) => {
  //   return string};
  //   console.log(Dog("ココ"));
  // const Dog = (string) => string;
  // console.log(Dog("ムギ"));
  // const sum = (num1, num2) => {
  //   return num1 + num2;
  // console.log(sum(2, 3));
  // };
  // const sum = (num1, num2) =>  num1 + num2;
  // console.log(sum(5, 4));
  // 分割代入_オブジェクト
  // const myCar = {
  //   autoManufacturer: " TESLA ",
  //   carName: " ModelS ",
  //   horsePower: " 1020pw ",
  // };
  // const Introduction1 = `私のお気に入りは${myCar.autoManufacturer}の${myCar.carName}で、馬力は${myCar.horsePower}あります。`;
  // console.log(Introduction1);
  // const { autoManufacturer, carName, horsePower } = myCar;
  // const Introduction2 = `私のお気に入りは${autoManufacturer}の${name}で、馬力は${horsePower}あります。`;
  // console.log(Introduction2);
  // 分割代入_配列
  // const Vehicle = [" TESLA ", " ModelS "];
  // const WantToRide1 = `私が乗ってみたい車は、${Vehicle[0]}の${Vehicle[1]}です。`;
  // console.log(WantToRide1);
  // const [autoManufacturer,carName] = Vehicle;
  // const WantToRide2 = `わしが乗ってみたいんは${autoManufacturer}の${carName}じゃ。`
  // console.log(WantToRide2);
  // デフォルト値、引数
  // const sayHello = (name = "guests") => console.log(`こんにちは、${name}さん！`);
  // sayHello("jhon");
  // sayHello();
  // スプレッド構文（展開）
  // 配列の展開
  //   const arr1 = [1, 2];
  //   // console.log(arr1);
  //   // console.log(...arr1);
  //   const sumFunc = (num1, num2) => console.log(num1 + num2);
  //   sumFunc(arr1[0],arr1[1]);
  //   sumFunc(...arr1);
  // レスト構文（集約）
  // const arr2 = [1, 2, 3, 4, 5];
  // const [num1,num2, ...arr3] = arr2;
  // console.log(num1,num2,arr3);
  // 配列のコピー、結合
  // const arr4 = [10, 20];
  // const arr5 = [30, 40];
  // const arr6 = [...arr4];
  // console.log(arr6);
  // const arr7 = [...arr4, ...arr5];
  // console.log(arr7);
  // map や filter を使った配列の処理。
  // const nameArr1 = ["田中", "佐藤", "斉藤"];
  // for (let i = 0; i < nameArr1.length; i++) {
  //   console.log(nameArr1[i]);
  //   console.log(`${i + 1}番目は${nameArr1[i]}です。`);
  // }
  // const nameArr2 = nameArr1.map((name)=> {
  //   return name;
  // })
  // console.log(nameArr2);
  // nameArr1.map((name) => console.log(`わしは${name}じゃ`));
  // nameArr1.map((name, i) => console.log(`${i + 1}番目は${name}じゃろ`));
  // // const numArr = [1, 2, 3, 4, 5];
  // const newNumArr = numArr.filter((num) => {
  //   return num % 2 === 1;
  // });
  // console.log(newNumArr);
  // const newNameArr = nameArr1.map((name) => {
  //   if (name === "斉藤") {
  //     return name;
  //   } else {
  //     return `${name}さん`;
  //   }
  // });
  // console.log(newNameArr);
  // 三項演算子
  // 条件 ? 条件が true の時の処理 : 条件が false の時の処理 ;
  // const val1 = 1 > 0 ? "trueじゃ" : "falseじゃ";
  // console.log(val1);
  // const num = "1300";
  // const formattedNum =
  //   typeof num === "number" ? num.toExponential() : "数値を入力するんじゃ!";
  // console.log(formattedNum);
  // const checkSum = (num1, num2) => {
  //   return num1 + num2 > 100 ? "１００を超えとるのう":"１００超えてないのう";
  // }
  // console.log(checkSum(100,1));
  // 論理演算子の本当の意味 && ||
  // const flag1 = true;
  // const flag2 = true;
  // if (flag1 || flag2) {
  //   console.log("１か２はtrueじゃのう");
  // }
  // if (flag1 && flag2) {
  //   console.log("１と２はtrueじゃけぇ");
  // }
  // || 左辺が false なら右辺を返す。
  // const num = null;
  // const fee = num || "金額未設定です";
  // console.log(fee);
  // // && 左辺が true なら右辺を返す。
  // const num2 = 100;
  // const fee2 = num2 && "何か設定されたけぇ";
  // console.log(fee2);
}
