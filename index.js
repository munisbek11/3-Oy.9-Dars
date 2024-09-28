/////////////// 1 - masala ///////////////

// Array.prototype.MyFactorial = function () {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     let a = this[i];
//     function res(a) {
//       if (a == 0 || a == 1) {
//         return 1;
//       }
//       return a * res(a - 1);
//     }
//     let result = res(a);
//     newArr.push(result);
//   }
//   return newArr;
// };
// let arr = [5, 4, 6];
// console.log(arr.MyFactorial());

/////////////// 2 - masala ///////////////

// function Car(model, color) {
//   (this.model = model), (this.color = color);
// }
// Car.prototype.add = function () {
//   console.log(`Menda ${this.color} rangli ${this.model} moshina bor`);
// };
// let car1 = new Car("Nexia", "oq");
// car1.add();

/////////////// 3 - masala ///////////////

// String.prototype.MyIsNumber = function () {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     let res = parseInt(this[i]);
//     if (!isNaN(res)) {
//       newArr.push(res);
//     }
//   }
//   return newArr;
// };
// let str = "1a2b3c";
// console.log(str.MyIsNumber());

/////////////// 4 - masala ///////////////

// Array.prototype.MySlice = function (a, b) {
//   let newArr = [];
//   if (b === undefined || b > this.length) {
//     for (let i = a; i < this.length; i++) {
//       newArr.push(this[i]);
//     }
//   } else {
//     for (let i = a; i < b; i++) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.MySlice(2));

/////////////// 5 - masala ///////////////

// function Football(name, age, club) {
//   (this.name = name), (this.age = age), (this.club = club);
// }
// Football.prototype.upgradeClub = function (oldClub) {
//   this.club = oldClub;
// };

// let obj1 = new Football("Ronaldo", 39, "Al-Nasr");
// obj1.upgradeClub("Real Madrid");
// console.log(obj1.club);

/////////////// 6 - masala ///////////////

// function MyObject(name, age) {
//   this.name = name;
//   this.age = age;
// }
// MyObject.prototype.myFavoriteNums = [4, 6, 7, 12];
// let obj = new MyObject("Munisbek", 20);
// obj.myFavoriteNums.push(8);
// console.log(obj.myFavoriteNums);

/////////////// 7 - masala ///////////////

// function myFunc(a, b) {
//   return a + b;
// }
// let res = new myFunc();
// console.log(myFunc.prototype.isPrototypeOf(res));

/////////////// 8 - masala ///////////////

// function MyObject(name, hobby) {
//   this.name = name;
//   this.hobby = hobby;
// }
// MyObject.prototype.greet = function () {
//   console.log(`Mening ismim ${this.name} va men ${this.hobby}ga qiziqman!`);
// };
// delete MyObject.prototype.greet();
// let student1 = new MyObject("Munisbek", "Futbol o'ynash");

/////////////// 9 - masala ///////////////

// Array.prototype.MyRepeat = function (n) {
//   let newArr = [];
//   for (let i = 0; i < n; i++) {
//     newArr.push(...arr);
//   }
//   return newArr;
// };
// let arr = [1, 2, 3];
// console.log(arr.MyRepeat(2));

/////////////// 10- masala ///////////////

// Array.prototype.Mymulty = function (n) {
//   for (let i = 0; i < this.length; i++) {
//     this[i] *= n;
//   }
//   return this;
// };
// let arr = [3, 6, 4, 7];
// console.log(arr.Mymulty(2));

///////////Qo'shimcha masalalar///////////

/////////////// 1 - masala ///////////////

// function MyObject(a, b) {
//   this.a = a;
//   this.b = b;
// }
// MyObject.prototype.Sum = function () {
//   return this.a + this.b;
// };
// let obj = new MyObject(4, 12);
// console.log(obj.Sum());

/////////////// 2 - masala ///////////////

// function MyObject(name, age) {
//   this.name = name;
//   this.age = age;
// }
// MyObject.prototype.myHobby = "table tennis";
// let obj = new MyObject("Munisbek", 20);
// console.log(obj.myHobby);

/////////////// 3 - masala ///////////////

// Array.prototype.IsSquareOfNumber = function () {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (Number.isInteger(Math.sqrt(this[i]))) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };
// let arr = [4, 9, 16, 3, 6];
// console.log(arr.IsSquareOfNumber());

/////////////// 4 - masala ///////////////

// Array.prototype.JuftVaToq = function () {
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] % 2 === 0) {
//       arr1.push(this[i]);
//     } else {
//       arr2.push(this[i]);
//     }
//   }
//   return {
//     juftsonlar: arr1,
//     toqsonlar: arr2,
//   };
// };
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.JuftVaToq());

/////////////// 5 - masala ///////////////

// String.prototype.MyReplaseAll = function (s, m) {
//   let result = "";
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === s) {
//       result += m;
//     } else {
//       result += this[i];
//     }
//   }
//   return result;
// };
// let str = "hello";
// console.log(str.MyReplaseAll("o", "A"));

/////////////// 6 - masala ///////////////

// function MyObject(a, b, c) {
//   (this.a = a), (this.b = b), (this.c = c);
// }
// MyObject.prototype.Mymulty = function () {
//   return this.a * this.b * this.c;
// };
// MyObject.prototype.MySum = function () {
//   return this.a + this.b + this.c;
// };
// let obj = new MyObject(2, 3, 4);
// console.log(obj.Mymulty());
// console.log(obj.MySum());

/////////////// 7 - masala ///////////////

// function MyObject(name, sureName, age) {
//   (this.name = name), (this.sureName = sureName), (this.age = age);
// }
// MyObject.prototype.Fullname = function () {
//   return console.log(
//     `Men ${this.sureName} ${this.name} ${this.age} yoshdaman!`
//   );
// };
// let obj = new MyObject("Munisbek", "Shomurodov", 20);
// obj.Fullname();