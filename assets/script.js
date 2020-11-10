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
    var hr = $(".saveBtn").prev().attr('id');    
    var inf = $(".saveBtn").prev().val();
    var newEvent = new Event(hr, inf);
    eventList.push(newEvent);
    storeEvents();
});

/* var event9 = new Event("9", $("#9").val());
var event10 = new Event ("10", $("#10").val());
var event11 = new Event ("11", $("#11").val());
var event12 = new Event ("12", $("#12").val());
var event13 = new Event ("13", $("#13").val());
var event14 = new Event ("14", $("#14").val());
var event15 = new Event ("15", $("#15").val());
var event16 = new Event ("16", $("#16").val());
var event17 = new Event ("17", $("#17").val()); */

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
