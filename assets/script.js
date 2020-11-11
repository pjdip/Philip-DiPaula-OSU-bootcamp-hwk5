// time and color updating interval
setInterval(function () {

    // update the displayed date and time
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, H:mm:ss"));

    // change the color coding based on some logic comparing the hour and time-block ID
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
}, 1000);

// creating Event object prototype
class Event {
    constructor(hour, info) {
        this.hour = hour;
        this.info = info;
    }
}

// establishing some variables for later
var eventList = [];
var newEvent;
var newEventExists;

// check localStorage to see if there are saved events
// If there are saved events, update eventList
var retrievedEvents = localStorage.getItem("events");
if (retrievedEvents !== null) {
    eventList = JSON.parse(retrievedEvents);
}

// send all the events to the page in their respective time-block
for (var i = 0; i < eventList.length; i++) {
    var hourID = "#" + eventList[i].hour;
    var eventInfo = eventList[i].info;
    $(hourID).val(eventInfo);
}

// check if there are any identical events in the eventList
// return true if there is a duplicate, false if there isn't
function checkEventDuplicates(hr1, inf1) {
    var dupes = false;
    eventList.forEach(function(evnt) {
        if (evnt.hour === hr1 && evnt.info === inf1) {
            dupes = true;
        }
    });
    return dupes;
}

// check if we are updating an event (is the hour the same or not)
// return true if we are updating, false if we are not
function checkForUpdates(hr2) {
    var updates = false;
    eventList.forEach(function(evt) {
        if (evt.hour === hr2) {
            updates = true;
        }
    });
    return updates;
}

// updates the event with the new data
function updateExisting(hr3, inf3) {
    eventList.forEach(function(e) {
        if (e.hour === hr3) {
            e.info = inf3;
        }
    });
}

// stores the eventList when called
function storeEvents() {
    var stringyEvents = JSON.stringify(eventList);
    localStorage.setItem("events", stringyEvents);
}

// onclick event added to all the save buttons
$(".saveBtn").on("click", function() {

    // grab the id and content of the textarea immediately preceding the clicked save button
    var hr = $(this).prev().attr('id');
    var inf = $(this).prev().val();

    // establish this housekeeping variable's value to be changed later as needed
    newEventExists = false;

    // if the save button is clicked without changing anything, do nothing
    if (checkEventDuplicates(hr, inf) === true) {

    // if the content is changing, update the event info property
    } else if (checkForUpdates(hr) === true) {
        updateExisting(hr, inf);

    // if we are making a brand new event, create it
    // update the housekeeping variable
    } else {
        newEvent = new Event(hr, inf);
        newEventExists = true;
    }

    // if we made a new event, push it to the eventList
    if (newEventExists === true) {
        eventList.push(newEvent);
    }

    console.log(eventList);
    storeEvents();
});