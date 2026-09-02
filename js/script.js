"use strict";

const startPauseButton = document.querySelector(".home-start-button");
const completePauseButton = document.querySelector(".pause-complete-button");
const pauseTime = document.querySelector(".pause-time");
const completedDuration = document.querySelector(".completed-duration");
const completedDate = document.querySelector(".completed-date");
const backButton = document.querySelector(".header-back");
const pauseAnswers = document.querySelectorAll("textarea");
const chips = document.querySelectorAll(".chip");
const pausesList = document.querySelector(".pauses-list");

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

if (pausesList) {

    const savedPauses = localStorage.getItem("pauses");

    const pauses = savedPauses ? JSON.parse(savedPauses) : [];

    pausesList.innerHTML = "";

    const sections = {};

    const reversedPauses = [...pauses].reverse();

    reversedPauses.forEach(function (pause) {

        const pauseCard = document.createElement("article");

        pauseCard.classList.add("pause-card");

        const cardHeader = document.createElement("div");

        cardHeader.classList.add("pause-card-header");

        const durationElement = document.createElement("span");

        durationElement.classList.add("pause-duration");

        const totalSeconds = Math.floor(pause.duration / 1000);

        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        const formattedMinutes = String(minutes).padStart(2, "0");

        const formattedSeconds = String(seconds).padStart(2, "0");

        durationElement.textContent = `${formattedMinutes}:${formattedSeconds}`;

        const timeElement = document.createElement("time");

        timeElement.classList.add("pause-card-time");

        const date = new Date(pause.endTime);

        const today = new Date();

        const yesterday = new Date();

        yesterday.setDate(today.getDate() - 1);

        let sectionTitle = "";

        if (date.toDateString() === today.toDateString()) {

            sectionTitle = "СЕГОДНЯ";

        } else if (date.toDateString() === yesterday.toDateString()) {

            sectionTitle = "ВЧЕРА";

        } else {

            sectionTitle = date.toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long"
            }).toUpperCase();

        }

        if (!sections[sectionTitle]) {

            const pauseSection = document.createElement("section");

            pauseSection.classList.add("pause-section");

            const sectionLabel = document.createElement("h2");

            sectionLabel.classList.add("section-label");

            sectionLabel.textContent = sectionTitle;

            pauseSection.append(sectionLabel);

            pausesList.append(pauseSection);

            sections[sectionTitle] = pauseSection;

        }

        timeElement.textContent = date.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit"
        });

        cardHeader.append(durationElement);

        cardHeader.append(timeElement);

        pauseCard.append(cardHeader);

        const cardContent = document.createElement("div");

        cardContent.classList.add("pause-card-content");

        const feelingsRow = document.createElement("p");

        const feelingsLabel = document.createElement("strong");

        feelingsLabel.textContent = "Чувства: ";

        const feelingsText = document.createElement("span");

        feelingsText.textContent = pause.feelings;

        feelingsRow.append(feelingsLabel);

        feelingsRow.append(feelingsText);

        cardContent.append(feelingsRow);

        const thoughtsRow = document.createElement("p");

        const thoughtsLabel = document.createElement("strong");

        thoughtsLabel.textContent = "Мысли: ";

        const thoughtsText = document.createElement("span");

        thoughtsText.textContent = pause.thoughts;

        thoughtsRow.append(thoughtsLabel);

        thoughtsRow.append(thoughtsText);

        cardContent.append(thoughtsRow);

        const needsRow = document.createElement("p");

        const needsLabel = document.createElement("strong");

        needsLabel.textContent = "Себе: ";

        const needsText = document.createElement("span");

        needsText.textContent = pause.needs;

        needsRow.append(needsLabel);

        needsRow.append(needsText);

        cardContent.append(needsRow);

        pauseCard.append(cardContent);

        sections[sectionTitle].append(pauseCard);

    });

}