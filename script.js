// Assigning the <p> element in the header to a variable to update its text content with the current day and time
var currentDayEl = $('#currentDay');
// Assigning the current day and time to a variable
var currentDayAndTime = moment().format('dddd MMMM Do, YYYY - h:mm A');

//Setting the text content of the <p> element in the header to be the current date and time
currentDayEl.text(currentDayAndTime);

// Assigning each time block element to a variable and giving them each an hour value to later compare to the current hour of the day
var nineAM = $('#9am').data('hour', 9);
var tenAM = $('#10am').data('hour', 10);
var elevenAM = $('#11am').data('hour', 11);
var twelvePM = $('#12pm').data('hour', 12);
var onePM = $('#1pm').data('hour', 13);
var twoPM = $('#2pm').data('hour', 14);
var threePM = $('#3pm').data('hour', 15);
var fourPM = $('#4pm').data('hour', 16);
var fivePM = $('#5pm').data('hour', 17);

// Adding each time block element to an array so each element can be given the same treatment within a function
var timeBlocks = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

// Comparing the current time to each time block's range to delegate classes for past, present, and future
function timeCheck() {
    // Assigning the current hour to a variable to compare to the hour ranges for each time block element
    var currentHour = moment().format('HH');
    // Iterating on each time block to determine whether it lies in the past, present, or future
    for (var i = 0; i < timeBlocks.length; i++) {
        
        if (timeBlocks[i].data('hour') < currentHour) {
            timeBlocks[i].addClass('past');

        } else if (timeBlocks[i].data('hour') == currentHour) {
            timeBlocks[i].addClass('present');

        } else {
            timeBlocks[i].addClass('future');
        };
    };
};
 
// Styles each time block based on the current time as the page loads based on whether the time block lies in the past, present, or future
timeCheck();

// Add function here to call for what's in the local storage and display it

// Assigning each save button element to a variable to handle click events and save notes for each respective time block to the local storage
var nineAM_Btn = $('#9am-Btn');
var tenAM_Btn = $('#10am-Btn');
var elevenAM_Btn = $('#11am-Btn');
var twelvePM_Btn = $('#12pm-Btn');
var onePM_Btn = $('#1pm-Btn');
var twoPM_Btn = $('#2pm-Btn');
var threePM_Btn = $('#3pm-Btn');
var fourPM_Btn = $('#4pm-Btn');
var fivePM_Btn = $('#5pm-Btn');

// Creating empty variables globally to store events for each hour into the local storage so that they may be called as the page loads
var nineAM_Events;
var tenAM_Events;
var elevenAM_Events;
var twelvePM_Events;
var onePM_Events;
var twoPM_Events;
var threePM_Events;
var fourPM_Events;
var fivePM_Events;







