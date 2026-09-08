"use strict";


/* ==========================================================
   ЭЛЕМЕНТЫ СТРАНИЦ ПАУЗЫ
   ========================================================== */

const startPauseButton = document.querySelector(".home-start-button");
const completePauseButton = document.querySelector(".pause-complete-button");
const pauseTime = document.querySelector(".pause-time");
const completedDuration = document.querySelector(".completed-duration");
const completedDate = document.querySelector(".completed-date");
const backButton = document.querySelector(".header-back");
const pauseAnswers = document.querySelectorAll("textarea");
const chips = document.querySelectorAll(".chip");
const pausesList = document.querySelector(".pauses-list");


/* ==========================================================
   МОДАЛКА АВТОРИЗАЦИИ
   ========================================================== */

const authModalCard = document.querySelector(".auth-modal-card");
const authModalHeading = document.querySelector(".auth-modal-heading");
const authModalSubtitle = document.querySelector(".auth-modal-subtitle");
const authModalSubmit = document.querySelector(".auth-modal-submit");
const authModalSwitchText = document.querySelector(".auth-modal-switch-text");
const authModeSwitch = document.querySelector(".auth-mode-switch");

const authModal = document.querySelector(".auth-modal");
const authModalOverlay = document.querySelector(".auth-modal-overlay");
const authModalClose = document.querySelector(".auth-modal-close");

const desktopLoginButton = document.querySelector(".desktop-login-button");
const desktopRegisterButton = document.querySelector(".hero-secondary-button");
const authRequiredButtons = document.querySelectorAll(".auth-required-button");


/* ==========================================================
   DESKTOP-МОДАЛКА ЗАВЕРШЕНИЯ ПАУЗЫ
   ========================================================== */

const completedModal = document.querySelector(".completed-modal");
const completedModalOverlay = document.querySelector(".completed-modal-overlay");
const completedModalClose = document.querySelector(".completed-modal-close");
const completedModalDate = document.querySelector(".completed-modal-date");
const completedModalDuration = document.querySelector(".completed-modal-duration");


/* ==========================================================
   ОБЩЕЕ ФОРМАТИРОВАНИЕ ДАННЫХ ПАУЗЫ
   ========================================================== */

function formatPauseDuration(duration) {

    const totalSeconds = Math.floor(Number(duration) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;

}


function formatPauseDate(endTime) {

    const date = new Date(Number(endTime));

    return date.toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

}


/* ==========================================================
   НАЧАЛО ПАУЗЫ
   ========================================================== */

if (startPauseButton) {

    startPauseButton.addEventListener("click", function () {

        const startTime = Date.now();

        localStorage.setItem("startTime", startTime);

        window.location.href = "pause.html";

    });

}


/* ==========================================================
   ТАЙМЕР И ЗАВЕРШЕНИЕ ПАУЗЫ
   ========================================================== */

if (completePauseButton) {

    const savedStartTime = localStorage.getItem("startTime");

    /*
       Обычно startTime создаётся на home.html.
       Запасное значение не даёт таймеру сломаться,
       если pause.html открыли напрямую.
    */

    const startTimestamp = savedStartTime
        ? Number(savedStartTime)
        : Date.now();


    function updatePauseTimer() {

        if (!pauseTime) {
            return;
        }

        const elapsedTime = Date.now() - startTimestamp;

        pauseTime.textContent = formatPauseDuration(elapsedTime);

    }


    /* Показываем актуальное значение сразу, затем обновляем раз в секунду. */

    updatePauseTimer();

    const pauseTimerId = setInterval(updatePauseTimer, 1000);


    completePauseButton.addEventListener("click", function () {

        clearInterval(pauseTimerId);

        const feelings = pauseAnswers[0] ? pauseAnswers[0].value : "";
        const thoughts = pauseAnswers[1] ? pauseAnswers[1].value : "";
        const needs = pauseAnswers[2] ? pauseAnswers[2].value : "";

        const endTime = Date.now();
        const duration = endTime - startTimestamp;

        const pauseData = {
            feelings: feelings,
            thoughts: thoughts,
            needs: needs,
            duration: duration,
            endTime: endTime
        };


        /* Добавляем новую запись в общую историю пауз. */

        const savedPauses = localStorage.getItem("pauses");
        const pauses = savedPauses ? JSON.parse(savedPauses) : [];

        pauses.push(pauseData);

        localStorage.setItem("pauses", JSON.stringify(pauses));


        /* Эти значения использует мобильная completed.html. */

        localStorage.setItem("pauseData", JSON.stringify(pauseData));
        localStorage.setItem("pauseDuration", duration);
        localStorage.setItem("pauseEndTime", endTime);


        /* Завершённая пауза больше не должна продолжать старый таймер. */

        localStorage.removeItem("startTime");


        /*
           Desktop: остаёмся на pause.html и открываем модалку.
           Mobile: переходим на существующую completed.html.
        */

        const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

        if (isDesktop && completedModal) {

            openCompletedModal(pauseData);

        } else {

            window.location.href = "completed.html";

        }

    });

}


/* ==========================================================
   МОБИЛЬНАЯ СТРАНИЦА COMPLETED.HTML
   ========================================================== */

if (completedDuration) {

    const savedDuration = localStorage.getItem("pauseDuration");

    if (savedDuration !== null) {

        completedDuration.textContent =
            `Время паузы: ${formatPauseDuration(savedDuration)}`;

    }

}


if (completedDate) {

    const savedEndTime = localStorage.getItem("pauseEndTime");

    if (savedEndTime !== null) {

        completedDate.textContent = formatPauseDate(savedEndTime);

    }

}


/* ==========================================================
   КНОПКА НАЗАД
   ========================================================== */

if (backButton) {

    backButton.addEventListener("click", function () {

        localStorage.removeItem("startTime");

        window.location.href = "home.html";

    });

}


/* ==========================================================
   БЫСТРЫЕ ВАРИАНТЫ ОТВЕТОВ
   ========================================================== */

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


/* ==========================================================
   ИСТОРИЯ ПАУЗ
   ========================================================== */

if (pausesList) {

    const savedPauses = localStorage.getItem("pauses");
    const pauses = savedPauses ? JSON.parse(savedPauses) : [];

    pausesList.innerHTML = "";

    const sections = {};
    const reversedPauses = [...pauses].reverse();

    reversedPauses.forEach(function (pause) {

        const pauseCard = document.createElement("article");
        pauseCard.classList.add("pause-card");


        /* Шапка карточки: длительность и время завершения. */

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("pause-card-header");

        const durationElement = document.createElement("span");
        durationElement.classList.add("pause-duration");
        durationElement.textContent = formatPauseDuration(pause.duration);

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


        /* При первом появлении даты создаём её секцию. */

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


        /* Ответы пользователя. */

        const cardContent = document.createElement("div");
        cardContent.classList.add("pause-card-content");

        const answers = [
            ["Чувства: ", pause.feelings],
            ["Мысли: ", pause.thoughts],
            ["Себе: ", pause.needs]
        ];

        answers.forEach(function (answer) {

            const row = document.createElement("p");

            const label = document.createElement("strong");
            label.textContent = answer[0];

            const text = document.createElement("span");
            text.textContent = answer[1];

            row.append(label);
            row.append(text);
            cardContent.append(row);

        });

        pauseCard.append(cardContent);
        sections[sectionTitle].append(pauseCard);

    });

}


/* ==========================================================
   МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ
   ========================================================== */

/* Переключает содержимое между регистрацией и входом. */

function setAuthMode(mode) {

    if (!authModalCard) {
        return;
    }


    if (mode === "register") {

        authModalCard.dataset.authMode = "register";

        authModalHeading.innerHTML =
            "Чтобы сохранить паузу —<br>создайте аккаунт";

        authModalSubmit.textContent = "Зарегистрироваться";
        authModalSwitchText.textContent = "Уже есть аккаунт?";
        authModeSwitch.textContent = "Войти";

    }


    if (mode === "login") {

        authModalCard.dataset.authMode = "login";

        authModalHeading.innerHTML =
            "Чтобы сохранить паузу —<br>войдите в аккаунт";

        authModalSubmit.textContent = "Войти";
        authModalSwitchText.textContent = "Нет аккаунта?";
        authModeSwitch.textContent = "Регистрация";

    }

}


function openAuthModal(mode) {

    if (!authModal) {
        return;
    }

    setAuthMode(mode);

    authModal.classList.add("auth-modal--open");
    document.body.classList.add("modal-open");

}


function closeAuthModal() {

    if (!authModal) {
        return;
    }

    authModal.classList.remove("auth-modal--open");
    document.body.classList.remove("modal-open");

}


/* Desktop: «Создать аккаунт». */

if (desktopRegisterButton) {

    desktopRegisterButton.addEventListener("click", function () {

        openAuthModal("register");

    });

}


/* Desktop: «Войти в аккаунт». */

if (desktopLoginButton) {

    desktopLoginButton.addEventListener("click", function () {

        openAuthModal("login");

    });

}


/* Пункты меню гостя, для которых требуется вход. */

authRequiredButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        openAuthModal("login");

    });

});


/* Переключение «Регистрация ↔ Вход». */

if (authModeSwitch) {

    authModeSwitch.addEventListener("click", function () {

        const currentMode = authModalCard.dataset.authMode;

        if (currentMode === "register") {

            setAuthMode("login");

        } else {

            setAuthMode("register");

        }

    });

}


if (authModalClose) {

    authModalClose.addEventListener("click", closeAuthModal);

}


if (authModalOverlay) {

    authModalOverlay.addEventListener("click", closeAuthModal);

}


/* ==========================================================
   DESKTOP-МОДАЛКА ЗАВЕРШЕНИЯ ПАУЗЫ
   ========================================================== */

function openCompletedModal(pauseData) {

    if (!completedModal) {
        return;
    }

    if (completedModalDate) {
        completedModalDate.textContent = formatPauseDate(pauseData.endTime);
    }

    if (completedModalDuration) {
        completedModalDuration.textContent =
            `Время паузы: ${formatPauseDuration(pauseData.duration)}`;
    }

    completedModal.classList.add("completed-modal--open");
    completedModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    if (completedModalClose) {
        completedModalClose.focus();
    }

}


/*
   Пауза уже сохранена, поэтому закрытие итогового окна
   возвращает пользователя на главную.
*/

function closeCompletedModal() {

    if (!completedModal) {
        return;
    }

    completedModal.classList.remove("completed-modal--open");
    completedModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    window.location.href = "home.html";

}


if (completedModalClose) {

    completedModalClose.addEventListener("click", closeCompletedModal);

}


if (completedModalOverlay) {

    completedModalOverlay.addEventListener("click", closeCompletedModal);

}


/* Escape закрывает ту модалку, которая сейчас открыта. */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") {
        return;
    }

    if (
        completedModal &&
        completedModal.classList.contains("completed-modal--open")
    ) {

        closeCompletedModal();
        return;

    }

    closeAuthModal();

});
