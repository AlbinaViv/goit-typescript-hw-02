/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Day;
(function (Day) {
    Day["mon"] = "mon";
    Day["tue"] = "tue";
    Day["wed"] = "wed";
    Day["thur"] = "thur";
    Day["fri"] = "fri";
    Day["sat"] = "sat";
    Day["sun"] = "sun";
})(Day || (Day = {}));
function isWeekend(day) {
    if (day === Day.sat || day === Day.sun) {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=7.js.map