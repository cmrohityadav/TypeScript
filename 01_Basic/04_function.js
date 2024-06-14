"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("india");
function signup(name, email, isPaid) {
}
signup("rohit", "rohit@gmail.com", true);
// default parameter
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("rohit", "r@readonly.com");
