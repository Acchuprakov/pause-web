"use strict";

const startPauseButton = document.querySelector(".home-start-button");
const completePauseButton = document.querySelector(".pause-complete-button");
const pauseTime = document.querySelector(".pause-time");
const completedDuration = document.querySelector(".completed-duration");
const completedDate = document.querySelector(".completed-date");
const backButton = document.querySelector(".header-back");
const pauseAnswers = document.querySelectorAll("textarea");
const chips = document.querySelectorAll(".chip");

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

        const feelings = pauseAnswers[0].value;
        const thoughts = pauseAnswers[1].value;
        const needs = pauseAnswers[2].value;

        const endTime = Date.now();

        const duration = endTime - Number(savedStartTime);

        const pauseData = {
            feelings: feelings,
            thoughts: thoughts,
            needs: needs,
            duration: duration,
            endTime: endTime
        };

        const savedPauses = localStorage.getItem("pauses");

        const pauses = savedPauses ? JSON.parse(savedPauses) : [];

        pauses.push(pauseData);

        localStorage.setItem("pauses", JSON.stringify(pauses));

        const pauseDataString = JSON.stringify(pauseData);

        localStorage.setItem("pauseData", pauseDataString);

        localStorage.setItem("pauseDuration", duration);

        localStorage.setItem("pauseEndTime", endTime);

        window.location.href = "completed.html";

    });

}

if (completedDuration) {

    const savedPauses = localStorage.getItem("pauses");

    const pauses = JSON.parse(savedPauses);

    console.log(pauses);

    const savedPauseData = localStorage.getItem("pauseData");

    const parsedPauseData = JSON.parse(savedPauseData);

    console.log(parsedPauseData);

    console.log(parsedPauseData.feelings);

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

if (backButton) {

    backButton.addEventListener("click", function () {

        localStorage.removeItem("startTime");

        window.location.href = "home.html";

    });

}

chips.forEach(function (chip) {

    chip.addEventListener("click", function () {

        const questionCard = chip.closest(".question-card");

        const textarea = questionCard.querySelector("textarea");

        if (textarea.value) {

            textarea.value += `, ${chip.textContent}`;

        } else {

            textarea.value = chip.textContent;

        }

    });

});