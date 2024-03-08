/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum day {
  MON,
  TUE,
  WED,
  THUR,
  FRI,
  SAT,
  SUN,
}
function isWeekend(day: day): boolean {
  if (day === day.SAT || day === day.SUN) {
    return true;
  } else {
    return false;
  }
}
