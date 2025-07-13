`use strict`;

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"


const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");

startBtn.disabled = true;

let userSelectedDate = null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const currentDate = new Date();

        userSelectedDate = selectedDate;
        console.log("Обрана дата:", userSelectedDate);


        if (selectedDate <= currentDate) {
            window.alert("Please choose a date in the future");
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    },
};
  
flatpickr(input, options);


