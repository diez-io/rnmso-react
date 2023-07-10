export function getWeekDay(date) {
  const days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  return days[date.getDay()];
}
export function getMonthString(date) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return months[date.getMonth()];
}
export function getMonthStringVar2(month) {
  const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ];

  return months[month];
}

export function displayDateVar1(date) {
  const d = new Date(date);
  const dDay = d.getDate();
  const dMonth = getMonthString(d);
  const dYear = d.getFullYear();

  return `${dDay} ${dMonth} ${dYear}`;
}
export function displayDateVar2(date) {
  const d = new Date(date);
  const dDay = d.getDate();
  let dMonth = d.getMonth() + 1;
  if (dMonth < 10) dMonth = `0${dMonth}`;

  const dYear = d.getFullYear();

  return `${dDay}.${dMonth}.${dYear}`;
}
export function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
export function setRightMonth00(month){
  let rightMonth = month + 1;
  rightMonth = rightMonth < 10 ? "0"+rightMonth : rightMonth;
  return rightMonth;
}
