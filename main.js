"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var a;
var b;
var e;
e = {};
b = [1, 2, 3];
a = "hello";
console.log(a, b);
function Hello(name) {
    console.log("Hello " + name);
    return name;
}
var Name = Hello("aabhas");
exports.z = function () { return (console.log("imported")); };
function decorate(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: true,
            get: function () {
                return "Hello";
            }
        });
    };
}
var A = /** @class */ (function () {
    function A(Name) {
        this.name = Name;
    }
    A.prototype.display = function () {
        console.log(this.name);
    };
    __decorate([
        decorate('Yo')
    ], A.prototype, "name");
    return A;
}());
var out = new A('ram');
out.display();
