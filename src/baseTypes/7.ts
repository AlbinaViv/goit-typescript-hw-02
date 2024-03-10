/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  mon = "mon",
  tue = "tue",
  wed = "wed",
  thur = "thur",
  fri = "fri",
  sat = "sat",
  sun = "sun",
}
function isWeekend(day: Day): boolean {
  if (day === Day.sat || day === Day.sun) {
    return true;
  } else {
    return false;
  }
}
