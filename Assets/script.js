var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $calendarArea = $(".calendar");
var toDoItems = [];
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
var $thisBlock = $(this);
$currentDay.text(currentDate);

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