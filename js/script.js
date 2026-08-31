"use strict";

const startPauseButton = document.querySelector(".home-start-button");
const completePauseButton = document.querySelector(".pause-complete-button");
const pauseTime = document.querySelector(".pause-time");
const completedDuration = document.querySelector(".completed-duration");
const completedDate = document.querySelector(".completed-date");

if (startPauseButton) {

    startPauseButton.addEventListener("click", function () {

        const startTime = Date.now();

        localStorage.setItem("startTime", startTime);

        window.location.href = "pause.html";

    });

}

if (completePauseButton) {

    const savedStartTime = localStorage.getItem("startTime");

    setInterval(function () {

        const elapsedTime = Date.now() - Number(savedStartTime);

        const totalSeconds = Math.floor(elapsedTime / 1000);

        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        const formattedMinutes = String(minutes).padStart(2, "0");

        const formattedSeconds = String(seconds).padStart(2, "0");

        const formattedTime = `${formattedMinutes}:${formattedSeconds}`;

        pauseTime.textContent = formattedTime;

    }, 1000);

    completePauseButton.addEventListener("click", function () {

        const endTime = Date.now();

        const duration = endTime - Number(savedStartTime);

        localStorage.setItem("pauseDuration", duration);

        localStorage.setItem("pauseEndTime", endTime);

        window.location.href = "completed.html";

    });

}

if (completedDuration) {

    const savedDuration = localStorage.getItem("pauseDuration");

    const totalSeconds = Math.floor(Number(savedDuration) / 1000);

    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");

    const formattedSeconds = String(seconds).padStart(2, "0");

    const formattedDuration = `${formattedMinutes}:${formattedSeconds}`;

    completedDuration.textContent = `Время паузы: ${formattedDuration}`;

}

if (completedDate) {

    const savedEndTime = localStorage.getItem("pauseEndTime");

    const date = new Date(Number(savedEndTime));

    const formattedDate = date.toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    completedDate.textContent = formattedDate;

}