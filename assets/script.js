setInterval(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, H:mm:ss"));
    var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    $.each(hourArray, function (index, val) {
        $("#" + val).removeClass("past present future");
        if (val === moment().hour()) {
            $("#" + val).addClass("present");
        } else if (val < moment().hour()) {
            $("#" + val).addClass("past");
        } else if (val > moment().hour()) {
            $("#" + val).addClass("future");
        }
    });
});

var eventList = [];

class Event {
    constructor(hour, info) {
        this.hour = hour;
        this.info = info;
    }
}

var retrievedEvents = localStorage.getItem("events");
if (retrievedEvents !== null) {
    eventList = JSON.parse(retrievedEvents);
}

for (var i = 0; i < eventList.length; i++) {
    var hourID = "#" + eventList[i].hour;
    var eventInfo = eventList[i].info;
    $(hourID).val(eventInfo);
}

function storeEvents() {
    var stringyEvents = JSON.stringify(eventList);
    localStorage.setItem("events", stringyEvents);
}

$(".saveBtn").on("click", function() {
    var hr = $(this).prev().attr('id');    
    var inf = $(this).prev().val();
    var newEvent = new Event(hr, inf);
    eventList.push(newEvent);
    storeEvents();
});

/* var minArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
$.each(minArray, function (index, val) {
  if (val === moment().minute()) {
    $("#" + val).toggleClass("present");
  } else if (val < moment().minute()) {
    $("#" + val).toggleClass("past");
  } else if (val > moment().minute()) {
    $("#" + val).toggleClass("future");
  }
}); 

var secArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
$.each(secArray, function (index, val) {
    $("#" + val).removeClass("past present future");
    if (val === moment().second()) {
        $("#" + val).addClass("present");
    } else if (val < moment().second()) {
        $("#" + val).addClass("past");
    } else if (val > moment().second()) {
        $("#" + val).addClass("future");
    }
});*/

/* $(".colorCoded").each(function() {
    if ()
}); */
