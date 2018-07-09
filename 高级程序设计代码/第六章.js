//6.1


// var person = new Object();
// person.name = "Nicholas";
// person.age = 26;
// person.sayName = function () {
//     alert(this.name);
// };
// var person = {
//     name: "Nisss",
//     age: 298,
//     job: "sortware",
//     sayName: function () {
//         alert(this.name);
//     }
// };



//6.1.1

// var person = {};
// Object.defineProperty(person, "name", {
//     writable: false,
//     value: "asd"
// });
// console.log(person.name);
// delete person.name;
// var person = {};
// Object.defineProperty(person, "name", {
//     configurable: false,
//     value:"asd"
// });
// Object.defineProperty(person, "name", {
//     configurable: true,
//     value: "AAA"
// });
// console.log(person.name);
// var book = {
//     _year: 2004,
//     edition: 1
// };
// Object.defineProperty(book, "year", {
//     get: function () {
//         return this._year;
//     },
//     set: function (newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// });
// book.year = 2005;
// console.log(book.edition);
// var book = {
//     _year: 2004,
//     edition: 2
// };
// book.__defineGetter__("year", function () {
//     return this.year;
// });
// book.__defineSetter__("year", function (newValue) {
//     if (newValue > 2004) {
//         this._year = newValue;
//         this.edition += newValue - 2004;
//     }
// });
// book.year = 2005;
// console.log(book.edition);


//6.1.2


// var book = {};
// Object.defineProperties(book, {
//     _year: {
//         writable: true,
//         value: 2004
//     },
//     edition: {
//         writable: true,
//         value: 1
//     },
//     year: {
//         get: function () {
//             return this._year;
//         },
//         set: function (newValue) {
//             if (newValue > 2004) {
//                 this._year = newValue;
//                 this.edition += newValue - 2004;
//             }
//         }
//     }
// });

//6.1.3 读取属性的特性


// var book = {};
// Object.defineProperties(book, {
//     _year: {
//         value: 2004
//     },
//     edition: {
//         value: 1
//     },
//     year: {
//         get: function () {
//             return this._year;
//         },
//         set: function (newValue) {
//             if (newValue > 2004) {
//                 this._year = newValue;
//                 this.edition += newValue - 2004;
//             }
//         }
//     },
// });

// var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
// console.log(descriptor.value);
// console.log(descriptor.configurable);
// console.log(typeof descriptor.get);
// var descriptor = Object.getOwnPropertyDescriptor(book,"year");
// console.log(descriptor.value);
// console.log(descriptor.configurable);
// console.log(typeof descriptor.get);

//6.2 创建对象

//6.2.1 工厂模式
// function createPerson(name,age,job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function () {
//         return (this.name);
//     };
//     return o;
// }
// var person1= createPerson("sa",22,"sadasdas");
//  function sayName() {
//         return (this.name);
//  }
// function Person(name,age,job) {

//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = sayName
//   }

// var person2= new Person("sad",11,"323");
// var o = new Object();
// Person.call(o,"sd",22,"asd");

// console.log(o.sayName());

//6.2.3 原型模式

function Person() {}
Person.prototype.name = "sad";
Person.prototype.age = 22;
Person.prototype.job = "sda";
Person.prototype.sayName = function () {
    console.log(this.name);
};
var person1 = new Person();
person1.sayName();
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Object.getPrototypeOf(person1).name);

person1.name = "sadaa";
console.log(person1.name);
delete person1.name;
console.log(person1.name);
console.log("name" in person1);
//判断name是否存在 object的原型中 
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

function Person() {
}
Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "ssss",
    sayName: function () {
        console.log(this.name);
    }
};
//重构构造函数
Object.defineProperty(Person.prototype,"constructor",{
    enumerable:false,
    value:Person
});
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));

