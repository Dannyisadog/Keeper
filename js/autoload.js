window.onload = function() {
    currentDay = new Date();
    currentYear = currentDay.getFullYear();
    currentMonth = currentDay.getMonth() + 1;
    currentDate = currentDay.getDate();
    createCalendarMenu(currentYear, currentMonth, currentDate);
    createCalendar(currentYear, currentMonth);
    isLogin();
    downloadFromDBToCalendar();
    downloadFromDBToList();
    createUser();
}
// window.setInterval(function(){
//     updateEvent();
// }, 1000);
