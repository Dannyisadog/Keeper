window.onload = function() {
  createCalendarMenu();
  createCalendar();
}

var firstday_1917 = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
var firstday_year = firstday_1917;



function createCalendar(year, month) {
    year = 2017;
    month = 3;
    var table = document.createElement('table');
    table.setAttribute('id', 'table-calendar');
    table.setAttribute('border', '1px');

    var weekDay = ['', 'S', 'M', 'T', 'W', 'T', 'F', 'S'];
    var count = 1;
    var space = 0;

    getYearCalendar(2017);

    for (var i = 1; i <= 7; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= 7; j++) {
            if (i == 1) {
                var td = document.createElement('td');
                var tdText = document.createTextNode(weekDay[j]);
                var dateDiv = document.createElement('div');
                dateDiv.setAttribute('class', 'calendar-date');
                dateDiv.setAttribute('id', 'calendar-date' + i + j);
                dateDiv.appendChild(tdText);
                td.appendChild(dateDiv);
                tr.appendChild(td);
                table.appendChild(tr);
            } else {
                if (isLeap(year)) {
                    if (day_31(month)) {
                        for (var k = 1; k <= 31; k++) {

                        }
                    } else if (day_30(month)) {
                        for (var k = 1; k <= 30; k++) {

                        }
                    } else if (day_29(month)) {
                        for (var k = 1; k <= 29; k++) {

                        }
                    }
                } else if (!isLeap(year)) {
                    if (day_31(month) && count <= 31) {
                        if (space < firstday_year[month - 1]) {
                            var td = document.createElement('td');
                            var tdText = document.createTextNode('');
                            var dateDiv = document.createElement('div');
                            dateDiv.setAttribute('class', 'calendar-date');
                            dateDiv.setAttribute('id', 'calendar-date' + i + j);
                            dateDiv.appendChild(tdText);
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            space++;
                        } else {
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count++);
                            var dateDiv = document.createElement('div');
                            dateDiv.setAttribute('class', 'calendar-date');
                            dateDiv.setAttribute('id', 'calendar-date' + i + j);
                            dateDiv.appendChild(tdText);
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                        }
                    } else if (day_30(month) && count <= 30) {
                        if (space < firstday_year[month - 1]) {
                            var td = document.createElement('td');
                            var tdText = document.createTextNode('');
                            var dateDiv = document.createElement('div');
                            dateDiv.setAttribute('class', 'calendar-date');
                            dateDiv.setAttribute('id', 'calendar-date' + i + j);
                            dateDiv.appendChild(tdText);
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            space++;
                        } else {
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count++);
                            var dateDiv = document.createElement('div');
                            dateDiv.setAttribute('class', 'calendar-date');
                            dateDiv.setAttribute('id', 'calendar-date' + i + j);
                            dateDiv.appendChild(tdText);
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                        }
                    } else if (day_28(month) && count <= 28) {
                        if (space < firstday_year[month - 1]) {
                            var td = document.createElement('td');
                            var tdText = document.createTextNode('');
                            var dateDiv = document.createElement('div');
                            dateDiv.setAttribute('class', 'calendar-date');
                            dateDiv.setAttribute('id', 'calendar-date' + i + j);
                            dateDiv.appendChild(tdText);
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            space++;
                        } else {
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count++);
                            var dateDiv = document.createElement('div');
                            dateDiv.setAttribute('class', 'calendar-date');
                            dateDiv.setAttribute('id', 'calendar-date' + i + j);
                            dateDiv.appendChild(tdText);
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                        }
                    }
                }
            }
        }
    }

    // for (var i = 0; i < 12; i++) {
    //     var testNode = document.createTextNode(firstday_year[i]);
    //     document.getElementById('home-calendar').appendChild(testNode);
    // }

    document.getElementById('home-calendar').appendChild(table);
}

function createCalendarMenu(year, month, date) {

    var menuDiv = document.createElement('div');
    menuDiv.style.backgroundColor = 'rgba(181, 255, 135, 0.2)';
    menuDiv.style.width = '65vw';
    menuDiv.style.height = '6vh';
    menuDiv.style.marginRight = 'auto';
    menuDiv.style.marginLeft = 'auto';
    menuDiv.style.marginTop = '30px';

    var menuNextButton = document.createElement('button');
    menuNextButton.style.float = 'right';
    var menuNextButtonText = document.createTextNode('Next');
    menuNextButton.appendChild(menuNextButtonText);

    menuDiv.appendChild(menuNextButton);

    var menuPreButton = document.createElement('button');
    menuPreButton.style.float = 'right';
    var menuPreButtonText = document.createTextNode('Pre');
    menuPreButton.appendChild(menuPreButtonText);

    menuDiv.appendChild(menuPreButton);

    var today = document.createElement('p');
    today.style.color = 'rgba(241, 241, 241, 1)';
    today.style.textAlign = 'center';
    today.style.fontSize = '200%';
    var todayText = document.createTextNode(year + '/' + month + '/' + date);


    today.appendChild(todayText);

    menuDiv.appendChild(today);

    document.getElementById('home-calendar').appendChild(menuDiv);
}

function getYearCalendar(some_year) {
    for (var j = 1918; j <= some_year; j++) {
        for (var i = 0; i < 12; i++) {
            if (isLeap(j)) {
                if (i >= 2) {
                    firstday_year[i] += 2;
                } else {
                    firstday_year[i] += 1;
                }
            } else if (isLeap(j) == false && isLeap(j - 1) == false) {
                firstday_year[i] += 1;
            } else if (isLeap(j) == false && isLeap(j - 1) == true) {
                if (i >= 2) {
                    firstday_year[i] += 1;
                } else {
                    firstday_year[i] += 2;
                }
            }
        }
    }

    for (var i = 0; i < 12; i++) {
        if (firstday_year[i] >= 7) {
            firstday_year[i] = firstday_year[i] % 7;
        }
    }
}

function isLeap(some_year) {
    if (some_year % 4 != 0) {
        return false;
    } else if (some_year % 4 == 0 && some_year % 100 != 0) {
        return true;
    } else if (some_year % 100 == 0 && some_year % 400 != 0) {
        return false;
    } else if (some_year % 400 == 0) {
        return true;
    }
}

function day_31(month) {
    if (month == 1) {
        return true;
    }
    if (month == 3) {
        return true;
    }
    if (month == 5) {
        return true;
    }
    if (month == 7) {
        return true;
    }
    if (month == 8) {
        return true;
    }
    if (month == 10) {
        return true;
    }
    if (month == 12) {
        return true;
    } else {
        return false;
    }
}

function day_30(month) {
    if (month == 4) {
        return true;
    }
    if (month == 6) {
        return true;
    }
    if (month == 9) {
        return true;
    }
    if (month == 11) {
        return true;
    } else {
        return false;
    }
}

function day_28(month) {
    if (month == 2) {
        return true;
    } else {
        return false;
    }
}

function day_29(month) {
    if (month == 2) {
        return true;
    } else {
        return false;
    }
}

var weekDay = ['', 'S', 'M', 'T', 'W', 'T', 'F', 'S'];
var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function monthNumberToName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "January";
            break;
        case 2:
            return "February";
            break;
        case 3:
            return "March";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "July";
            break;
        case 8:
            return "August";
            break;
        case 9:
            return "September";
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "December";
            break;
        default:
            return "Not a Month";
            break;
    }
}
