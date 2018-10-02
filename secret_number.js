'use strict';
module.exports = function () {
    let secretNumber = Math.floor(Math.random() * 1000000);
    return function () {
        return secretNumber;
    }

}