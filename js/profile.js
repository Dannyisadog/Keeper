function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function test() {
    var testDiv = document.createElement("div");
    testDiv.style.backgroundColor = "rgba(238, 238, 238, 0.2)";
    testDiv.style.height = "300px";
    testDiv.style.width = "200px";
    testDiv.style.marginTop = "40px";
    testDiv.style.marginRight = "auto";
    testDiv.style.marginLeft = "30px";
    testDiv.style.float = "left";
    testDiv.id = 'block';


    testDiv.style.fontFamily = "Arial, Helvetica, sans-serif";
    testDiv.style.fontSize = "20px";
    testDiv.style.color = "rgba(241, 241, 241, 1)";
    testDiv.style.textAlign = "center";

    var testImg = document.createElement("img");
    testImg.setAttribute("src", "./Keeper/img/self.jpg");
    testImg.setAttribute("height", "200");
    testImg.setAttribute("width", "200");

    testDiv.appendChild(testImg);

    var chName = document.createElement("div");
    var chNameNode = document.createTextNode("陳 鍾 逸");
    chName.appendChild(chNameNode);

    testDiv.appendChild(chName);

    var enName = document.createElement("div");
    var enNameNode = document.createTextNode("Danny");
    enName.appendChild(enNameNode);

    testDiv.appendChild(enName);

    var phone = document.createElement("div");
    var phoneNode = document.createTextNode("0926240268");
    phone.appendChild(phoneNode);

    testDiv.appendChild(phone);

    var email = document.createElement("div");
    var emailNode = document.createTextNode("dannyisadog10@gmail.com");
    email.style.fontSize = "15px";
    email.appendChild(emailNode);

    testDiv.appendChild(email);

    document.getElementById("my-profile").appendChild(testDiv);
}

$(document).ready(function() {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: '2017-02-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [{
                title: 'All Day Event',
                start: '2017-02-01'
            },
            {
                title: 'Long Event',
                start: '2017-02-07',
                end: '2017-02-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-02-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-02-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2017-02-11',
                end: '2017-02-13'
            },
            {
                title: 'Meeting',
                start: '2017-02-12T10:30:00',
                end: '2017-02-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2017-02-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2017-02-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2017-02-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2017-02-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2017-02-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2017-02-28'
            }
        ]
    });

});
