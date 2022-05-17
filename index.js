//const { spy } = require("chai");

function receivesAFunction(callback) {
    callback();
    return 7;
};



function returnsANamedFunction() {
    return function newFunction () {
        console.log("Hi");
        }
    };

function returnsAnAnonymousFunction () {
    return function () {
        console.log("Heyo");
    }
}