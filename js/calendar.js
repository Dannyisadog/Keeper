var firstday_1917 = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
var firstday_year;

var weekDay = ['', 'S', 'M', 'T', 'W', 'T', 'F', 'S'];
var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function createCalendarMenu(year, month, date) {

    var menuDiv = document.createElement('div');
    menuDiv.style.backgroundColor = 'rgba(156, 255, 240, 0)';
    menuDiv.style.width = '65vw';
    menuDiv.style.height = '6vh';
    menuDiv.style.marginRight = 'auto';
    menuDiv.style.marginLeft = 'auto';
    menuDiv.style.marginTop = '0px';
    menuDiv.setAttribute('id', 'calendar-Title');

    var menuNextButton = document.createElement('button');
    menuNextButton.style.float = 'right';
    menuNextButton.style.marginTop = '40px';
    menuNextButton.setAttribute('id', 'calendar-nextButton');
    var menuNextButtonText = document.createTextNode('Next');
    menuNextButton.appendChild(menuNextButtonText);

    menuDiv.appendChild(menuNextButton);

    var menuPreButton = document.createElement('button');
    menuPreButton.style.float = 'right';
    menuPreButton.style.marginTop = '40px';
    menuPreButton.setAttribute('id', 'calendar-preButton');
    var menuPreButtonText = document.createTextNode('Pre');
    menuPreButton.appendChild(menuPreButtonText);

    menuDiv.appendChild(menuPreButton);

    var menuTodayButton = document.createElement('button');
    menuTodayButton.style.float = 'right';
    menuTodayButton.style.marginTop = '40px';
    menuTodayButton.setAttribute('id', 'calendar-todayButton');
    var menuTodayButtonText = document.createTextNode('Today');
    menuTodayButton.appendChild(menuTodayButtonText);

    menuDiv.appendChild(menuTodayButton);

    var today = document.createElement('p');
    today.style.color = 'rgba(241, 241, 241, 1)';
    today.style.fontSize = '7vh';
    today.style.textAlign = 'left';
    today.style.marginTop = '10px';
    today.setAttribute('id', 'currentDate');
    var todayText = document.createTextNode(year + ' / ' + month);


    today.appendChild(todayText);

    menuDiv.appendChild(today);

    document.getElementById('home-calendar').appendChild(menuDiv);

    $(menuNextButton).click(e => {
        $("#calendar-Title").remove();
        month += 1;
        if (month == 13) {
            month = 1;
            year += 1;
        }
        createCalendarMenu(year, month, date);
        $('#table-calendar').remove();
        createCalendar(year, month);
        $('.home-calendar-item').remove();
        downloadFromDBToCalendar();
    });

    $(menuPreButton).click(e => {
        $("#calendar-Title").remove();
        month -= 1;
        if (month == 0) {
            month = 12;
            year -= 1;
        }
        createCalendarMenu(year, month, date);
        $('#table-calendar').remove();
        createCalendar(year, month);
        $('.home-calendar-item').remove();
        downloadFromDBToCalendar();
    });

    $(menuTodayButton).click(e => {
        getTodayCalendar();
        $('.home-calendar-item').remove();
        downloadFromDBToCalendar();
    });
}

function createCalendar(year, month) {

    var table = document.createElement('table');
    table.setAttribute('id', 'table-calendar');
    table.setAttribute('border', '1px');

    var weekDay = ['', '日', '一', '二', '三', '四', '五', '六'];
    var count = 1;
    var space = 0;

    firstday_year = firstday_1917.slice();

    getYearCalendar(year);

    for (var i = 1; i <= 7; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= 7; j++) {
            if (i == 1) {
                var td = document.createElement('td');
                var tdText = document.createTextNode(weekDay[j]);
                var dateDiv = document.createElement('div');
                dateDiv.setAttribute('class', 'calendar-date');
                dateDiv.setAttribute('id', 'calendar-title');
                dateDiv.appendChild(tdText);
                td.appendChild(dateDiv);
                tr.appendChild(td);
                table.appendChild(tr);
            } else {
                if (isLeap(year)) {
                    if (day_31(month) && count <= 31) {
                        if (space < firstday_year[month - 1]) {
                            createSpace(table, tr);
                            space++;
                        } else {
                            var buttonDateId = year + "/" + month + "/" + count; //count is date
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count);
                            var dateDiv = document.createElement('div');
                            if (j == 1 || j == 7) {
                                dateDiv.setAttribute('class', 'calendar-holiday');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            } else {
                                dateDiv.setAttribute('class', 'calendar-date');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            if (year == currentYear && month == currentMonth && count == currentDate) {
                                dateDiv.setAttribute('class', 'calendar-date today');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            dateDiv.appendChild(tdText);
                            if (myLoginStatus == "Login") {
                                td.appendChild(createEventButton(buttonDateId));
                            }
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            count += 1;
                        }
                    } else if (day_30(month) && count <= 30) {
                        if (space < firstday_year[month - 1]) {
                            createSpace(table, tr);
                            space++;
                        } else {
                            var buttonDateId = year + "/" + month + "/" + count; //count is date
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count);
                            var dateDiv = document.createElement('div');
                            if (j == 1 || j == 7) {
                                dateDiv.setAttribute('class', 'calendar-holiday');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            } else {
                                dateDiv.setAttribute('class', 'calendar-date');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            if (year == currentYear && month == currentMonth && count == currentDate) {
                                dateDiv.setAttribute('class', 'calendar-date today');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            dateDiv.appendChild(tdText);
                            if (myLoginStatus == "Login") {
                                td.appendChild(createEventButton(buttonDateId));
                            }
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            count += 1;
                        }
                    } else if (day_29(month) && count <= 29) {
                        if (space < firstday_year[month - 1]) {
                            createSpace(table, tr);
                            space++;
                        } else {
                            var buttonDateId = year + "/" + month + "/" + count; //count is date
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count);
                            var dateDiv = document.createElement('div');
                            if (j == 1 || j == 7) {
                                dateDiv.setAttribute('class', 'calendar-holiday');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            } else {
                                dateDiv.setAttribute('class', 'calendar-date');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            if (year == currentYear && month == currentMonth && count == currentDate) {
                                dateDiv.setAttribute('class', 'calendar-date today');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            dateDiv.appendChild(tdText);
                            if (myLoginStatus == "Login") {
                                td.appendChild(createEventButton(buttonDateId));
                            }
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            count += 1
                        }
                    }
                } else if (!isLeap(year)) {
                    if (day_31(month) && count <= 31) {
                        if (space < firstday_year[month - 1]) {
                            createSpace(table, tr);
                            space++;
                        } else {
                            var buttonDateId = year + "/" + month + "/" + count; //count is date
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count);
                            var dateDiv = document.createElement('div');
                            if (j == 1 || j == 7) {
                                dateDiv.setAttribute('class', 'calendar-holiday');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            } else {
                                dateDiv.setAttribute('class', 'calendar-date');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            if (year == currentYear && month == currentMonth && count == currentDate) {
                                dateDiv.setAttribute('class', 'calendar-date today');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            dateDiv.appendChild(tdText);
                            if (myLoginStatus == "Login") {
                                td.appendChild(createEventButton(buttonDateId));
                            }
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            count += 1;
                        }
                    } else if (day_30(month) && count <= 30) {
                        if (space < firstday_year[month - 1]) {
                            createSpace(table, tr);
                            space++;
                        } else {
                            var buttonDateId = year + "/" + month + "/" + count; //count is date
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count);
                            var dateDiv = document.createElement('div');
                            if (j == 1 || j == 7) {
                                dateDiv.setAttribute('class', 'calendar-holiday');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            } else {
                                dateDiv.setAttribute('class', 'calendar-date');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            if (year == currentYear && month == currentMonth && count == currentDate) {
                                dateDiv.setAttribute('class', 'calendar-date today');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            dateDiv.appendChild(tdText);
                            if (myLoginStatus == "Login") {
                                td.appendChild(createEventButton(buttonDateId));
                            }
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            count += 1
                        }
                    } else if (day_28(month) && count <= 28) {
                        if (space < firstday_year[month - 1]) {
                            createSpace(table, tr);
                            space++;
                        } else {
                            var buttonDateId = year + "/" + month + "/" + count; //count is date
                            var td = document.createElement('td');
                            var tdText = document.createTextNode(count);
                            var dateDiv = document.createElement('div');
                            if (j == 1 || j == 7) {
                                dateDiv.setAttribute('class', 'calendar-holiday');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            } else {
                                dateDiv.setAttribute('class', 'calendar-date');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            if (year == currentYear && month == currentMonth && count == currentDate) {
                                dateDiv.setAttribute('class', 'calendar-date today');
                                dateDiv.setAttribute('id', 'div' + buttonDateId);
                            }
                            dateDiv.appendChild(tdText);
                            if (myLoginStatus == "Login") {
                                td.appendChild(createEventButton(buttonDateId));
                            }
                            td.appendChild(dateDiv);
                            tr.appendChild(td);
                            table.appendChild(tr);
                            count += 1;
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
    createDialog();
}

function getTodayCalendar() {
    $("#calendar-Title").remove();
    createCalendarMenu(currentYear, currentMonth, currentDate);
    $('#table-calendar').remove();
    createCalendar(currentYear, currentMonth);
}

function uploadToDB(user_id, user_name, event_name, event_desc, event_date) {
    if (myLoginStatus == "Login") {
        if (event_name.length == 0) {
            return;
        } else {
            $.ajax({
                type: 'POST',
                url: '../php/uploadToDB.php',
                data: {
                    "user_id": user_id,
                    "user_name": user_name,
                    "event_name": event_name,
                    "event_desc": event_desc,
                    "event_date": event_date
                },
                success: function(result) {
                    console.log(result);
                },
            });
        }
    }
    updateEvent();
}

function downloadFromDBToCalendar() {
    if (myLoginStatus == "Login") {
        $.ajax({
            type: 'POST',
            url: '../php/downloadFromDB.php',
            dataType: 'json',
            data: {
                user_id: user_id
            },
            success: function(result) {
                console.log(result);
                for (var i = 0; i < Object.keys(result).length; i++) {
                    console.log(result[i].event_date);
                    console.log(result[i].event_name);
                    console.log(result[i].event_desc);
                    var eventName = document.createTextNode(result[i].event_name);
                    var eventDesc = document.createTextNode(result[i].event_desc);
                    var eventDate = document.createTextNode(result[i].event_date);
                    var id = 'div' + result[i].event_date;

                    var div = document.createElement('div');

                    div.setAttribute('class', 'home-calendar-item');

                    div.id = 'block';
                    div.style.width = '10px';
                    div.style.height = '10px';
                    div.style.float = 'left';
                    div.style.marginLeft = '2px';
                    div.style.marginTop = '2px';
                    div.style.backgroundColor = '#008aee';

                    if (document.getElementById(id)){
                      document.getElementById(id).appendChild(div);
                    }
                }
            },
        });
    }
}

function downloadFromDBToList() {
    if (myLoginStatus == "Login") {
        $.ajax({
            type: 'POST',
            url: '../php/downloadFromDB.php',
            dataType: 'json',
            data: {
                user_id: user_id
            },
            success: function(result) {
                console.log(result);
                for (var i = 0; i < Object.keys(result).length; i++) {

                    var eventName = document.createTextNode(result[i].event_name);
                    var eventDesc = document.createTextNode(result[i].event_desc);
                    var eventDate = document.createTextNode(result[i].event_date);
                    var listdiv = document.createElement('div');

                    listdiv.setAttribute('class', 'home-list-item');

                    listdiv.style.width = '18vw';
                    listdiv.style.height = '6vh';
                    listdiv.style.marginLeft = 'auto';
                    listdiv.style.marginRight = 'auto';
                    listdiv.style.marginTop = '11px';
                    listdiv.style.borderRadius = '10px';
                    listdiv.style.backgroundColor = 'rgba(194, 238, 255, 0.52)';
                    listdiv.style.color = 'rgb(249, 249, 249)';

                    var listEventName = document.createElement('p');
                    var listEventDesc = document.createElement('p');
                    var listEventDate = document.createElement('p');

                    listEventName.style.textAlign = 'center';
                    listEventName.style.margin = '0px';
                    listEventDate.style.textAlign = 'center';
                    listEventDate.style.margin = '0px';

                    listEventName.appendChild(eventName);
                    listEventDesc.appendChild(eventDesc);
                    listEventDate.appendChild(eventDate);

                    listdiv.appendChild(listEventName);
                    // listdiv.appendChild(listEventDesc);
                    listdiv.appendChild(listEventDate);

                    document.getElementById('home-list').appendChild(listdiv);
                }
            },
        });
    }
}

function updateEvent() {
    $('.home-list-item').remove();
    downloadFromDBToList();
    $('.home-calendar-item').remove();
    downloadFromDBToCalendar();
}

function createSpace(table, tr) {
    var td = document.createElement('td');
    var tdText = document.createTextNode('');
    var dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'calendar-date');
    dateDiv.setAttribute('id', 'calendar-date-space');
    dateDiv.appendChild(tdText);
    td.appendChild(dateDiv);
    tr.appendChild(td);
    table.appendChild(tr);
}

function createDialog() {
    var dialog, form,
        name = $("#name"),
        desc = $("#desc");
    allFields = $([]).add(name).add(desc);

    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 280,
        width: 350,
        modal: true,
        buttons: {
            "Create an event": function() {
                var buttonDate = $(this).data('buttonDate');
                uploadToDB(user_id, user_name, name.val(), desc.val(), buttonDate);
                dialog.dialog("close");
            },
            Cancel: function() {
                dialog.dialog("close");
            }
        },
        close: function() {
            form[0].reset();
        }
    });

    form = dialog.find("form").on("submit", function(event) {
        event.preventDefault();
    });

    $(".eventButton").button().on("click", function() {
        // console.log(" ID: ", $(this).attr("id"));
        var dateId = $(this).attr("id");
        console.log(dateId);
        dialog.data('buttonDate', dateId).dialog("open");
    });
}

function createEventButton(id) {

    var eventButton = document.createElement('button');
    var eventButtonText = document.createTextNode('+');

    eventButton.setAttribute('id', id);
    eventButton.setAttribute('class', 'eventButton');
    eventButton.style.float = 'right';

    eventButton.appendChild(eventButtonText);

    return eventButton;
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
