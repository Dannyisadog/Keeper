window.onload = function() {
    currentDay = new Date();
    currentYear = currentDay.getFullYear();
    currentMonth = currentDay.getMonth() + 1;
    currentDate = currentDay.getDate();
    createCalendarMenu(currentYear, currentMonth, currentDate);
    createCalendar(currentYear, currentMonth);
    isLogin();
}
