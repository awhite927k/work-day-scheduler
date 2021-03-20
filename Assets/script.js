var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $calendarArea = $(".calendar");
var toDoItems = [];
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
var $thisBlock = $(this);
$currentDay.text(currentDate);

// code for saving entries locally
// code for color-coding the times

