function daysInMonth(month, year) {
  
  let date = new Date(year, month, 0).toDateString();
  return date.substring(8, 10)
}daysInMonth(1, 2012)