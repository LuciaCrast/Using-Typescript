"use strict";
var weeksDays;
(function (weeksDays) {
    weeksDays[weeksDays["Monday"] = 0] = "Monday";
    weeksDays[weeksDays["Tursday"] = 1] = "Tursday";
    weeksDays[weeksDays["Wednesday"] = 2] = "Wednesday";
})(weeksDays || (weeksDays = {}));
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
