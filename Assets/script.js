var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $calendarArea = $(".calendar");
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
var $thisBlock = $(this);
$currentDay.text(currentDate);
var toDoItem = $(".input");

// code for saving entries locally

//code for color-coding the time blocks 
function timeColors() {
    var thisBlockHr = parseInt($thisBlock.attr("cal-hour"));
        if (thisBlockHr < currentHour) {
            $thisBlock.addClass("past").removeClass("present future");
        }
        else if (thisBlockHr == currentHour) {
            $thisBlock.addClass("present").removeClass("past future");
        }
        else {
            $thisBlock.addClass("future").removeClass("present past");
        }
    }

$(document).ready(function () {
    timeColors();
});

var saveItem = $thisBlock.toDoItem; 
var data = JSON.parse(localStorage.getItem(saveItem));
localStorage.setItem(saveItem, JSON.stringify(data));