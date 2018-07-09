//6.1
var person = new Object();
person.name = "Nicholas";
person.age = 26;
person.sayName = function () {
    alert(this.name);
};

var person = {
    name: "Nisss",
    age: 298,
    job: "sortware",
    sayName: function () {
        alert(this.name);
    }
};
//6.1.1
var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "asd"
});
console.log(person.name);
delete person.name;
var person = {};
// Object.defineProperty(person, "name", {
//     configurable: false,
//     value:"asd"
// });
Object.defineProperty(person, "name", {
    configurable: true,
    value: "AAA"
});
console.log(person.name);
var book = {
    _year: 2004,
    edition: 1
};
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
var book = {
    _year: 2004,
    edition: 2
};
book.__defineGetter__("year", function () {
    return this.year;
});
book.__defineSetter__("year", function (newValue) {
    if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
    }
});
book.year = 2005;
console.log(book.edition);
//6.1.2