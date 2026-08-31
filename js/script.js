"use strict";

const startPauseButton = document.querySelector(".home-start-button");
const completePauseButton = document.querySelector(".pause-complete-button");
const savedStartTime = localStorage.getItem("startTime");

if (startPauseButton) {
    startPauseButton.addEventListener('click', function () {
        const startTime = Date.now();
        localStorage.setItem("startTime", startTime);
        window.location.href = 'pause.html';
    });

}

if (completePauseButton) {
    completePauseButton.addEventListener('click', function () {
        window.location.href = 'completed.html';
    });
}