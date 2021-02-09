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
}
