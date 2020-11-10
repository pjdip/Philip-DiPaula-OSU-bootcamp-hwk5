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

var retrievedEvents = localStorage.getItem("events");
if (retrievedEvents !== null) {
    eventList = JSON.parse(retrievedEvents);
}

var event9 = $("#9").val();
var event10 = $("#11").val();
var event11 = $("#12").val();
var event12 = $("#13").val();
var event13 = $("#14").val();
var event14 = $("#15").val();
var event15 = $("#16").val();
var event16 = $("#17").val();
var event17 = $("#18").val();



function storeEvents() {
    var events = JSON.stringify(eventList);
    localStorage.setItem("events", events);
}


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
