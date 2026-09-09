"use strict";


/* ==========================================================
   ЭЛЕМЕНТЫ СТРАНИЦ ПАУЗЫ
   ========================================================== */

const startPauseButton = document.querySelector(".home-start-button");
const guestStartPauseButton = document.querySelector(".guest-start-button");

const completePauseButton = document.querySelector(".pause-complete-button");
const pauseTime = document.querySelector(".pause-time");

const completedDuration = document.querySelector(".completed-duration");
const completedDate = document.querySelector(".completed-date");

const backButton = document.querySelector(".header-back");

const pauseAnswers = document.querySelectorAll(".question-card textarea");
const chips = document.querySelectorAll(".chip");
const pausesList = document.querySelector(".pauses-list");


/* Карточка последней паузы на home.html. */

const latestPauseCard = document.querySelector(
    ".home-latest-section .today-history-box"
);

const latestPauseTime = latestPauseCard
    ? latestPauseCard.querySelector(".pause-card-time")
    : null;

const latestPauseDuration = latestPauseCard
    ? latestPauseCard.querySelector(".pause-duration")
    : null;

const latestPauseContent = latestPauseCard
    ? latestPauseCard.querySelector(".pause-card-content")
    : null;


/* ==========================================================
   МОДАЛКА ПОЛНОГО ПРОСМОТРА ПАУЗЫ
   ========================================================== */

const pauseDetailsModal = document.querySelector(".pause-details-modal");
const pauseDetailsOverlay = document.querySelector(".pause-details-overlay");
const pauseDetailsClose = document.querySelector(".pause-details-close");

const pauseDetailsDate = document.querySelector(".pause-details-date");
const pauseDetailsDuration = document.querySelector(".pause-details-duration");
const pauseDetailsFeelings = document.querySelector(".pause-details-feelings");
const pauseDetailsThoughts = document.querySelector(".pause-details-thoughts");
const pauseDetailsNeeds = document.querySelector(".pause-details-needs");

let lastOpenedPauseCard = null;


/* ==========================================================
   МОДАЛКА АВТОРИЗАЦИИ
   ========================================================== */

const authModal = document.querySelector(".auth-modal");
const authModalCard = document.querySelector(".auth-modal-card");
const authModalOverlay = document.querySelector(".auth-modal-overlay");
const authModalClose = document.querySelector(".auth-modal-close");

const authModalHeading = document.querySelector(".auth-modal-heading");
const authModalSubmit = document.querySelector(".auth-modal-submit");
const authModalSwitchText = document.querySelector(".auth-modal-switch-text");
const authModeSwitch = document.querySelector(".auth-mode-switch");

const desktopLoginButton = document.querySelector(".desktop-login-button");
const desktopRegisterButton = document.querySelector(".hero-secondary-button");
const authRequiredButtons = document.querySelectorAll(".auth-required-button");

let authModalContext = "pause";


/* ==========================================================
   DESKTOP-МОДАЛКА ЗАВЕРШЕНИЯ ПАУЗЫ
   ========================================================== */

const completedModal = document.querySelector(".completed-modal");
const completedModalOverlay = document.querySelector(".completed-modal-overlay");
const completedModalClose = document.querySelector(".completed-modal-close");
const completedModalDate = document.querySelector(".completed-modal-date");
const completedModalDuration = document.querySelector(".completed-modal-duration");


/* ==========================================================
   РЕДАКТИРОВАНИЕ ПРОФИЛЯ
   ========================================================== */

const profileEditButton = document.querySelector(".btn-edit-profile");

const profileEditModal = document.querySelector(".profile-edit-modal");
const profileEditOverlay = document.querySelector(".profile-edit-overlay");
const profileEditClose = document.querySelector(".profile-edit-close");
const profileEditForm = document.querySelector(".profile-edit-card");

const profileEditName = document.querySelector("#profile-edit-name");
const profileEditEmail = document.querySelector("#profile-edit-email");
const profileEditPhone = document.querySelector("#profile-edit-phone");

const profileAvatarInput = document.querySelector(".profile-avatar-input");

const profileAvatarSelectButtons = document.querySelectorAll(
    ".profile-edit-avatar-button, .profile-avatar-change-button"
);

const profileEditAvatarImage = document.querySelector(
    ".profile-edit-avatar-image"
);

const profileEditAvatarPlaceholder = document.querySelector(
    ".profile-edit-avatar-placeholder"
);

const profileName = document.querySelector(".profile-name");
const profileEmail = document.querySelector(".profile-email");
const profilePhone = document.querySelector(".profile-phone");

const headerUserNames = document.querySelectorAll(".header-user-name");
const userAvatarImages = document.querySelectorAll(".user-avatar-image");
const userAvatarPlaceholders = document.querySelectorAll(
    ".user-avatar-placeholder"
);


/* ==========================================================
   ЛЕНТА
   ========================================================== */

const feedPostsContainer = document.querySelector(".feed-posts");

const feedFilter = document.querySelector(".feed-filter");
const feedFilterButton = document.querySelector(".feed-filter-button");
const feedFilterLabel = document.querySelector(".feed-filter-label");
const feedFilterMenu = document.querySelector(".feed-filter-menu");
const feedFilterIconDown = document.querySelector(".feed-filter-icon-down");
const feedFilterIconUp = document.querySelector(".feed-filter-icon-up");
const feedFilterOptions = document.querySelectorAll(".feed-filter-option");

const feedPage = document.querySelector(".feed-page");
const feedGuestAction = document.querySelector(".feed-guest-action");
const feedUserAction = document.querySelector(".feed-user-action");
const feedHomeLinks = document.querySelectorAll(".feed-home-link");
const feedProtectedLinks = document.querySelectorAll(
    ".feed-protected-link"
);


/*
   Пока настоящего сервера авторизации нет, факт входа храним
   локально. Страницы home, history и profile относятся к
   авторизованной части приложения и подтверждают этот статус.
*/

const authorizedPage = document.querySelector(
    ".home-page, .history-page, .profile-page"
);

if (authorizedPage) {
    localStorage.setItem("appAuthStatus", "authenticated");
}


function isUserAuthenticated() {

    return (
        localStorage.getItem("appAuthStatus") === "authenticated" ||
        localStorage.getItem("pauseUserStatus") === "authorized"
    );

}


/*
   Пока серверной части нет, редакционные публикации находятся здесь.
   Добавлять и менять их может только владелец сайта в этом массиве.
   Авторизованный пользователь может поставить лайк
   и написать комментарий.
*/

const feedPosts = [
    {
        id: "pause-ordinary-life-01",
        source: "pause",
        author: "ПАУЗА.",
        publishedAt: "09.09.2026, 12:52",
        avatar: "../assets/images/pause-avatar.png",
        text: [
            "Большая часть жизни — это не путешествия, праздники и важные события.",
            "",
            "Это обычный вторник.",
            "",
            "Дорога домой. Ужин. Разговор с близким. Вечер за окном.",
            "",
            "Мы часто ждём чего-то особенного, чтобы почувствовать, что жизнь происходит.",
            "",
            "Но, может быть, самое важное — научиться замечать её в самом обычном."
        ].join("\n"),
        likes: 0,
        comments: 0
    },
    {
        id: "pause-day-feelings-01",
        source: "pause",
        author: "ПАУЗА.",
        publishedAt: "08.09.2026, 19:10",
        avatar: "../assets/images/pause-avatar.png",
        text: [
            "Мы привыкли оценивать день по результатам.",
            "",
            "Сделал — хороший день. Не сделал — плохой.",
            "",
            "Но что, если спросить иначе: «Как я себя чувствовал сегодня?»",
            "",
            "Пауза — это про то, как ты прожил день, а не только о том, что успел."
        ].join("\n"),
        likes: 0,
        comments: 0
    },
    {
        id: "pause-thought-cycle-01",
        source: "pause",
        author: "ПАУЗА.",
        publishedAt: "07.09.2026, 16:40",
        avatar: "../assets/images/pause-avatar.png",
        text: [
            "Бывает, одна мысль цепляется за тебя и не отпускает.",
            "",
            "Ты возвращаешься к ней снова и снова.",
            "",
            "К тому, что произошло. К тому, что мог сказать. К тому, что нужно было сделать иначе.",
            "",
            "И постепенно всё внимание оказывается там — в прошлом, в разговорах, в мыслях.",
            "",
            "А жизнь продолжает происходить прямо рядом.",
            "",
            "И ты её не замечаешь.",
            "",
            "Если сегодня поймаешь себя в этом круговороте мыслей — не пытайся их остановить.",
            "",
            "Просто заметь: я сейчас снова живу в своей голове.",
            "",
            "И верни внимание туда, где ты находишься."
        ].join("\n"),
        likes: 0,
        comments: 0
    },
    {
        id: "pause-accept-state-01",
        source: "pause",
        author: "ПАУЗА.",
        publishedAt: "06.09.2026, 21:05",
        avatar: "../assets/images/pause-avatar.png",
        text: [
            "Не нужно убегать от того, что ты чувствуешь.",
            "",
            "Если сегодня внутри напряжение или тревога — не спеши бороться с ним.",
            "",
            "Остановись на пару минут.",
            "",
            "Обрати внимание на себя, на свои ощущения.",
            "",
            "И просто скажи себе: «Да. Сейчас это так.»",
            "",
            "И, возможно, когда ты признаешь это состояние, оно начнёт понемногу отпускать."
        ].join("\n"),
        likes: 0,
        comments: 0
    },
    {
        id: "pause-window-evening-01",
        source: "pause",
        author: "ПАУЗА.",
        publishedAt: "05.09.2026, 20:30",
        avatar: "../assets/images/pause-avatar.png",
        text: [
            "Сегодня вечером просто посиди у окна.",
            "",
            "Без цели. Без телефона.",
            "",
            "Посмотри на небо. Заметь, как меняется свет. Как всё понемногу затихает.",
            "",
            "Никуда не спеши.",
            "",
            "Позволь этому моменту просто быть.",
            "",
            "Пауза."
        ].join("\n"),
        likes: 0,
        comments: 0
    },
    {
        id: "pause-breathing-01",
        source: "pause",
        author: "ПАУЗА.",
        publishedAt: "04.09.2026, 14:25",
        avatar: "../assets/images/pause-avatar.png",
        text: "Уделите себе всего 2 минуты прямо сейчас. Сделайте глубокий вдох, почувствуйте опору под ногами и просто побудьте в этом моменте. Вы делаете достаточно. ✨",
        likes: 24,
        comments: 5
    },
    {
        id: "pause-evening-01",
        source: "pause",
        author: "ПАУЗА.",
        publishedAt: "03.09.2026, 20:15",
        avatar: "../assets/images/pause-avatar.png",
        text: "Иногда лучший способ продолжить день — ненадолго остановиться. Закройте глаза, расслабьте плечи и сделайте три спокойных вдоха.",
        likes: 18,
        comments: 3
    },
    {
        id: "osho-awareness-01",
        source: "mystic",
        author: "Ошо",
        publishedAt: "02.09.2026, 18:40",
        avatar: "../assets/images/osho-avatar.png",
        text: "Что бы вы ни делали, делайте это с полной осознанностью. Если вы двигаетесь, едите, сидите, моетесь или разговариваете — делайте это осознанно.",
        likes: 12,
        comments: 2
    },
    {
        id: "buddha-happiness-01",
        source: "mystic",
        author: "Будда",
        publishedAt: "01.09.2026, 11:30",
        avatar: "../assets/images/budda-avatar.png",
        text: "«Нелепо думать, что кто-то, кроме тебя, сможет сделать тебя счастливым или несчастным.»",
        likes: 31,
        comments: 0
    }
];


/* ==========================================================
   ОБЩИЕ ФУНКЦИИ ДЛЯ ДАННЫХ ПАУЗЫ
   ========================================================== */

function formatPauseDuration(duration) {

    const totalSeconds = Math.max(
        0,
        Math.floor(Number(duration) / 1000)
    );

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


function getSavedPauses() {

    const savedPauses = localStorage.getItem("pauses");

    if (!savedPauses) {
        return [];
    }

    try {

        const parsedPauses = JSON.parse(savedPauses);

        return Array.isArray(parsedPauses)
            ? parsedPauses
            : [];

    } catch (error) {

        return [];

    }

}


function getPauseAnswer(answer) {

    if (typeof answer !== "string" || !answer.trim()) {
        return "Ответ не добавлен.";
    }

    return answer.trim();

}


/* ==========================================================
   ПОСЛЕДНЯЯ ПАУЗА НА HOME.HTML
   ========================================================== */

function displayLatestPauseOnHome() {

    if (
        !latestPauseCard ||
        !latestPauseTime ||
        !latestPauseDuration ||
        !latestPauseContent
    ) {
        return;
    }

    const pauses = getSavedPauses().filter(function (pause) {

        return pause && typeof pause === "object";

    });


    /* Если пауз ещё нет, не показываем демонстрационные данные. */

    if (!pauses.length) {

        latestPauseCard.classList.add("is-empty");

        latestPauseTime.textContent = "--:--";
        latestPauseTime.removeAttribute("datetime");

        latestPauseDuration.textContent = "00:00";

        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("latest-pause-empty-text");
        emptyMessage.textContent =
            "После завершения паузы здесь появится ваша последняя запись.";

        latestPauseContent.innerHTML = "";
        latestPauseContent.append(emptyMessage);

        return;

    }


    /* Выбираем запись с самым поздним временем завершения. */

    const latestPause = pauses.reduce(function (latest, pause) {

        const latestEndTime = Number(latest.endTime);
        const pauseEndTime = Number(pause.endTime);

        if (!Number.isFinite(pauseEndTime)) {
            return latest;
        }

        if (
            !Number.isFinite(latestEndTime) ||
            pauseEndTime > latestEndTime
        ) {
            return pause;
        }

        return latest;

    });

    latestPauseCard.classList.remove("is-empty");


    const endTime = Number(latestPause.endTime);
    const endDate = new Date(endTime);

    if (
        Number.isFinite(endTime) &&
        !Number.isNaN(endDate.getTime())
    ) {

        latestPauseTime.textContent = endDate.toLocaleTimeString(
            "ru-RU",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

        latestPauseTime.dateTime = endDate.toISOString();

    } else {

        latestPauseTime.textContent = "--:--";
        latestPauseTime.removeAttribute("datetime");

    }


    const duration = Number(latestPause.duration);

    latestPauseDuration.textContent = Number.isFinite(duration)
        ? formatPauseDuration(duration)
        : "00:00";


    const answers = [
        ["Чувства: ", latestPause.feelings],
        ["Мысли: ", latestPause.thoughts],
        ["Себе: ", latestPause.needs]
    ];

    const answerRows = latestPauseContent.querySelectorAll("p");

    answerRows.forEach(function (row, index) {

        const answer = answers[index];

        if (!answer) {
            row.hidden = true;
            return;
        }

        const label = row.querySelector("strong");
        const text = row.querySelector("span");

        if (label) {
            label.textContent = answer[0];
        }

        if (text) {
            text.textContent = getPauseAnswer(answer[1]);
        }

        row.hidden = false;

    });

}


displayLatestPauseOnHome();


/* ==========================================================
   НАЧАЛО ПАУЗЫ ДЛЯ АВТОРИЗОВАННОГО ПОЛЬЗОВАТЕЛЯ
   ========================================================== */

if (startPauseButton) {

    startPauseButton.addEventListener("click", function () {

        localStorage.setItem(
            "pauseUserStatus",
            "authorized"
        );

        localStorage.setItem(
            "startTime",
            Date.now()
        );

        window.location.href = "pause.html";

    });

}


/* ==========================================================
   НАЧАЛО ПАУЗЫ ДЛЯ ГОСТЯ
   ========================================================== */

if (guestStartPauseButton) {

    guestStartPauseButton.addEventListener("click", function () {

        localStorage.setItem(
            "pauseUserStatus",
            "guest"
        );

        localStorage.setItem(
            "startTime",
            Date.now()
        );

        window.location.href = "pages/pause.html";

    });

}


/* ==========================================================
   ТАЙМЕР И ЗАВЕРШЕНИЕ ПАУЗЫ
   ========================================================== */

if (completePauseButton) {

    const savedStartTime = localStorage.getItem("startTime");
    const parsedStartTime = Number(savedStartTime);

    /* Запасное значение используется, если pause.html открыли напрямую. */

    const startTimestamp =
        savedStartTime !== null && Number.isFinite(parsedStartTime)
            ? parsedStartTime
            : Date.now();


    function updatePauseTimer() {

        if (!pauseTime) {
            return;
        }

        const elapsedTime = Date.now() - startTimestamp;

        pauseTime.textContent = formatPauseDuration(elapsedTime);

    }


    updatePauseTimer();

    const pauseTimerId = setInterval(
        updatePauseTimer,
        1000
    );


    completePauseButton.addEventListener("click", function () {

        clearInterval(pauseTimerId);


        const feelings = pauseAnswers[0]
            ? pauseAnswers[0].value.trim()
            : "";

        const thoughts = pauseAnswers[1]
            ? pauseAnswers[1].value.trim()
            : "";

        const needs = pauseAnswers[2]
            ? pauseAnswers[2].value.trim()
            : "";

        const endTime = Date.now();
        const duration = endTime - startTimestamp;

        const pauseData = {
            feelings: feelings,
            thoughts: thoughts,
            needs: needs,
            duration: duration,
            endTime: endTime
        };


        /* Эти данные использует completed.html и desktop-модалка. */

        localStorage.setItem(
            "pauseData",
            JSON.stringify(pauseData)
        );

        localStorage.setItem(
            "pauseDuration",
            duration
        );

        localStorage.setItem(
            "pauseEndTime",
            endTime
        );

        localStorage.removeItem("startTime");


        const pauseUserStatus =
            localStorage.getItem("pauseUserStatus");

        const isDesktop = window.matchMedia(
            "(min-width: 1200px)"
        ).matches;


        /* Гостевую паузу сохраняем отдельно до авторизации. */

        if (pauseUserStatus === "guest") {

            localStorage.setItem(
                "pendingPause",
                JSON.stringify(pauseData)
            );

            if (isDesktop) {

                sessionStorage.setItem(
                    "openAuthModal",
                    "register"
                );

                window.location.href = "../index.html";

            } else {

                window.location.href = "registration.html";

            }

            return;

        }


        /* Авторизованную паузу добавляем в общую историю. */

        const pauses = getSavedPauses();

        pauses.push(pauseData);

        localStorage.setItem(
            "pauses",
            JSON.stringify(pauses)
        );


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

        const pauseUserStatus =
            localStorage.getItem("pauseUserStatus");

        if (
            completePauseButton &&
            pauseUserStatus === "guest"
        ) {

            window.location.href = "../index.html";

        } else {

            window.location.href = "home.html";

        }

    });

}


/* ==========================================================
   БЫСТРЫЕ ВАРИАНТЫ ОТВЕТОВ
   ========================================================== */

chips.forEach(function (chip) {

    chip.addEventListener("click", function () {

        const questionCard = chip.closest(".question-card");

        if (!questionCard) {
            return;
        }

        const textarea = questionCard.querySelector("textarea");

        if (!textarea) {
            return;
        }

        const chipText = chip.textContent.trim();

        if (textarea.value.trim()) {

            textarea.value += `, ${chipText}`;

        } else {

            textarea.value = chipText;

        }

        textarea.focus();

    });

});


/* ==========================================================
   ПОЛНЫЙ ПРОСМОТР ПАУЗЫ
   ========================================================== */

function openPauseDetailsModal(pause, pauseCard) {

    if (!pauseDetailsModal) {
        return;
    }

    lastOpenedPauseCard = pauseCard;


    if (pauseDetailsDate) {
        pauseDetailsDate.textContent = formatPauseDate(pause.endTime);
    }

    if (pauseDetailsDuration) {

        pauseDetailsDuration.textContent =
            `Время паузы: ${formatPauseDuration(pause.duration)}`;

    }

    if (pauseDetailsFeelings) {
        pauseDetailsFeelings.textContent = getPauseAnswer(pause.feelings);
    }

    if (pauseDetailsThoughts) {
        pauseDetailsThoughts.textContent = getPauseAnswer(pause.thoughts);
    }

    if (pauseDetailsNeeds) {
        pauseDetailsNeeds.textContent = getPauseAnswer(pause.needs);
    }


    pauseDetailsModal.classList.add(
        "pause-details-modal--open"
    );

    pauseDetailsModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

    if (pauseDetailsClose) {
        pauseDetailsClose.focus();
    }

}


function closePauseDetailsModal() {

    if (!pauseDetailsModal) {
        return;
    }

    pauseDetailsModal.classList.remove(
        "pause-details-modal--open"
    );

    pauseDetailsModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");

    if (lastOpenedPauseCard) {
        lastOpenedPauseCard.focus();
    }

}


if (pauseDetailsClose) {

    pauseDetailsClose.addEventListener(
        "click",
        closePauseDetailsModal
    );

}


if (pauseDetailsOverlay) {

    pauseDetailsOverlay.addEventListener(
        "click",
        closePauseDetailsModal
    );

}


/* ==========================================================
   ИСТОРИЯ ПАУЗ
   ========================================================== */

if (pausesList) {

    const pauses = getSavedPauses();

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


        const date = new Date(Number(pause.endTime));
        const today = new Date();
        const yesterday = new Date();

        yesterday.setDate(today.getDate() - 1);

        let sectionTitle = "";

        if (date.toDateString() === today.toDateString()) {

            sectionTitle = "СЕГОДНЯ";

        } else if (date.toDateString() === yesterday.toDateString()) {

            sectionTitle = "ВЧЕРА";

        } else {

            sectionTitle = date
                .toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long"
                })
                .toUpperCase();

        }


        if (!sections[sectionTitle]) {

            const pauseSection = document.createElement("section");
            const sectionLabel = document.createElement("h2");

            pauseSection.classList.add("pause-section");
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

        timeElement.dateTime = date.toISOString();

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
            const text = document.createElement("span");

            label.textContent = answer[0];
            text.textContent = getPauseAnswer(answer[1]);

            row.append(label);
            row.append(text);
            cardContent.append(row);

        });

        pauseCard.append(cardContent);


        /* Карточка открывается мышью и клавиатурой. */

        pauseCard.tabIndex = 0;

        pauseCard.setAttribute("role", "button");
        pauseCard.setAttribute("aria-haspopup", "dialog");
        pauseCard.setAttribute(
            "aria-label",
            `Открыть запись паузы от ${timeElement.textContent}`
        );

        pauseCard.addEventListener("click", function () {

            openPauseDetailsModal(pause, pauseCard);

        });

        pauseCard.addEventListener("keydown", function (event) {

            const isOpenKey =
                event.key === "Enter" ||
                event.key === " ";

            if (!isOpenKey) {
                return;
            }

            event.preventDefault();

            openPauseDetailsModal(pause, pauseCard);

        });

        sections[sectionTitle].append(pauseCard);

    });

}


/* ==========================================================
   МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ
   ========================================================== */

function setAuthMode(mode) {

    if (
        !authModalCard ||
        !authModalHeading ||
        !authModalSubmit ||
        !authModalSwitchText ||
        !authModeSwitch
    ) {
        return;
    }


    if (mode === "register") {

        authModalCard.dataset.authMode = "register";

        authModalHeading.innerHTML = authModalContext === "feed"
            ? "Чтобы писать комментарии<br>и ставить лайки — создайте аккаунт"
            : "Чтобы сохранить паузу —<br>создайте аккаунт";

        authModalSubmit.textContent = "Зарегистрироваться";
        authModalSwitchText.textContent = "Уже есть аккаунт?";
        authModeSwitch.textContent = "Войти";

    }


    if (mode === "login") {

        authModalCard.dataset.authMode = "login";

        authModalHeading.innerHTML = authModalContext === "feed"
            ? "Чтобы писать комментарии<br>и ставить лайки — войдите в аккаунт"
            : "Чтобы сохранить паузу —<br>войдите в аккаунт";

        authModalSubmit.textContent = "Войти";
        authModalSwitchText.textContent = "Нет аккаунта?";
        authModeSwitch.textContent = "Регистрация";

    }

}


function openAuthModal(mode, context) {

    if (!authModal) {
        return;
    }

    authModalContext = context === "feed"
        ? "feed"
        : "pause";

    setAuthMode(mode);

    authModal.classList.add("auth-modal--open");
    authModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

}


function closeAuthModal() {

    if (!authModal) {
        return;
    }

    authModal.classList.remove("auth-modal--open");
    authModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


/* Автоматически открываем авторизацию после гостевой паузы. */

const requestedAuthMode = sessionStorage.getItem("openAuthModal");

if (
    authModal &&
    (
        requestedAuthMode === "register" ||
        requestedAuthMode === "login"
    )
) {

    sessionStorage.removeItem("openAuthModal");

    openAuthModal(requestedAuthMode);

}


if (desktopRegisterButton) {

    desktopRegisterButton.addEventListener("click", function () {

        openAuthModal("register");

    });

}


if (desktopLoginButton) {

    desktopLoginButton.addEventListener("click", function () {

        const requestedContext =
            desktopLoginButton.dataset.authContext;

        openAuthModal("login", requestedContext);

    });

}


authRequiredButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        openAuthModal("login");

    });

});


if (authModeSwitch) {

    authModeSwitch.addEventListener("click", function () {

        if (!authModalCard) {
            return;
        }

        const currentMode = authModalCard.dataset.authMode;

        if (currentMode === "register") {

            setAuthMode("login");

        } else {

            setAuthMode("register");

        }

    });

}


if (authModalClose) {

    authModalClose.addEventListener(
        "click",
        closeAuthModal
    );

}


if (authModalOverlay) {

    authModalOverlay.addEventListener(
        "click",
        closeAuthModal
    );

}


/* ==========================================================
   ДОСТУП К ДЕЙСТВИЯМ В ЛЕНТЕ
   ========================================================== */

function requestFeedAuthorization() {

    if (isUserAuthenticated()) {
        return true;
    }

    const isDesktop = window.matchMedia(
        "(min-width: 1200px)"
    ).matches;

    if (isDesktop && authModal) {

        openAuthModal("register", "feed");

    } else {

        /*
           На мобильном сохраняем принятую архитектуру:
           регистрация и вход открываются отдельными страницами.
        */

        sessionStorage.setItem("authContext", "feed");
        window.location.href = "registration.html";

    }

    return false;

}


function updateFeedAccessView() {

    if (!feedPage) {
        return;
    }

    const isAuthenticated = isUserAuthenticated();

    if (feedGuestAction) {
        feedGuestAction.hidden = isAuthenticated;
    }

    if (feedUserAction) {
        feedUserAction.hidden = !isAuthenticated;
    }

    feedHomeLinks.forEach(function (link) {

        link.href = isAuthenticated
            ? "home.html"
            : "../index.html";

    });

}


feedProtectedLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        if (isUserAuthenticated()) {
            return;
        }

        event.preventDefault();
        requestFeedAuthorization();

    });

});


updateFeedAccessView();


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

    completedModalClose.addEventListener(
        "click",
        closeCompletedModal
    );

}


if (completedModalOverlay) {

    completedModalOverlay.addEventListener(
        "click",
        closeCompletedModal
    );

}


/* ==========================================================
   ДАННЫЕ ПРОФИЛЯ И АВАТАРКА
   ========================================================== */

const defaultProfileData = {
    name: "Александра",
    email: "alexandra@example.com",
    phone: ""
};


function getSavedProfileData() {

    const savedProfileData = localStorage.getItem("profileData");

    if (!savedProfileData) {
        return { ...defaultProfileData };
    }

    try {

        const parsedProfileData = JSON.parse(savedProfileData);

        return {
            ...defaultProfileData,
            ...parsedProfileData
        };

    } catch (error) {

        return { ...defaultProfileData };

    }

}


let currentProfileData = getSavedProfileData();
let pendingAvatarSource = null;


function displayProfileData(profileData) {

    const displayedName = profileData.name
        ? profileData.name.trim()
        : defaultProfileData.name;


    if (profileName) {
        profileName.textContent = displayedName;
    }


    if (profileEmail) {

        const email = profileData.email
            ? profileData.email.trim()
            : "";

        profileEmail.textContent = email;
        profileEmail.hidden = !email;

    }


    if (profilePhone) {

        const phone = profileData.phone
            ? profileData.phone.trim()
            : "";

        profilePhone.textContent = phone;
        profilePhone.hidden = !phone;

    }


    headerUserNames.forEach(function (nameElement) {

        nameElement.textContent = displayedName;

    });

}


function displayUserAvatar(avatarSource) {

    if (!avatarSource) {
        return;
    }

    userAvatarImages.forEach(function (image) {

        image.src = avatarSource;
        image.hidden = false;

    });

    userAvatarPlaceholders.forEach(function (placeholder) {

        placeholder.hidden = true;

    });

}


function displayProfileEditAvatar(avatarSource) {

    if (!profileEditAvatarImage || !profileEditAvatarPlaceholder) {
        return;
    }

    if (avatarSource) {

        profileEditAvatarImage.src = avatarSource;
        profileEditAvatarImage.hidden = false;

        profileEditAvatarPlaceholder.hidden = true;

    } else {

        profileEditAvatarImage.removeAttribute("src");
        profileEditAvatarImage.hidden = true;

        profileEditAvatarPlaceholder.hidden = false;

    }

}


/* Загружаем сохранённые данные на всех авторизованных страницах. */

displayProfileData(currentProfileData);

const savedUserAvatar = localStorage.getItem("userAvatar");

if (savedUserAvatar) {
    displayUserAvatar(savedUserAvatar);
}


function openProfileEditModal() {

    if (
        !profileEditModal ||
        !profileEditName ||
        !profileEditEmail ||
        !profileEditPhone
    ) {
        return;
    }

    currentProfileData = getSavedProfileData();

    profileEditName.value = currentProfileData.name || "";
    profileEditEmail.value = currentProfileData.email || "";
    profileEditPhone.value = currentProfileData.phone || "";

    pendingAvatarSource = localStorage.getItem("userAvatar");

    displayProfileEditAvatar(pendingAvatarSource);

    profileEditModal.classList.add("profile-edit-modal--open");
    profileEditModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    profileEditName.focus();

}


function closeProfileEditModal() {

    if (!profileEditModal) {
        return;
    }

    profileEditModal.classList.remove("profile-edit-modal--open");
    profileEditModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    pendingAvatarSource = null;

    if (profileEditButton) {
        profileEditButton.focus();
    }

}


if (profileEditButton) {

    profileEditButton.addEventListener(
        "click",
        openProfileEditModal
    );

}


if (profileEditClose) {

    profileEditClose.addEventListener(
        "click",
        closeProfileEditModal
    );

}


if (profileEditOverlay) {

    profileEditOverlay.addEventListener(
        "click",
        closeProfileEditModal
    );

}


profileAvatarSelectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (profileAvatarInput) {
            profileAvatarInput.click();
        }

    });

});


if (profileAvatarInput) {

    profileAvatarInput.addEventListener("change", function () {

        const selectedFile = profileAvatarInput.files[0];

        if (!selectedFile) {
            return;
        }

        if (!selectedFile.type.startsWith("image/")) {

            alert("Пожалуйста, выберите изображение.");

            profileAvatarInput.value = "";

            return;

        }

        const maximumAvatarSize = 2 * 1024 * 1024;

        if (selectedFile.size > maximumAvatarSize) {

            alert("Выберите изображение размером не больше 2 МБ.");

            profileAvatarInput.value = "";

            return;

        }

        const fileReader = new FileReader();

        fileReader.addEventListener("load", function () {

            pendingAvatarSource = fileReader.result;

            displayProfileEditAvatar(pendingAvatarSource);

        });

        fileReader.readAsDataURL(selectedFile);

        profileAvatarInput.value = "";

    });

}


if (profileEditForm) {

    profileEditForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (
            !profileEditName ||
            !profileEditEmail ||
            !profileEditPhone
        ) {
            return;
        }

        const updatedProfileData = {
            name: profileEditName.value.trim(),
            email: profileEditEmail.value.trim(),
            phone: profileEditPhone.value.trim()
        };


        /* Пользователь должен оставить хотя бы один способ связи. */

        if (
            !updatedProfileData.email &&
            !updatedProfileData.phone
        ) {

            alert("Укажите email или номер телефона.");

            return;

        }


        if (pendingAvatarSource) {

            try {

                localStorage.setItem(
                    "userAvatar",
                    pendingAvatarSource
                );

            } catch (error) {

                alert(
                    "Не удалось сохранить фотографию. Выберите файл меньшего размера."
                );

                return;

            }

        }


        localStorage.setItem(
            "profileData",
            JSON.stringify(updatedProfileData)
        );

        currentProfileData = updatedProfileData;

        displayProfileData(currentProfileData);

        if (pendingAvatarSource) {
            displayUserAvatar(pendingAvatarSource);
        }

        closeProfileEditModal();

    });

}


/* ==========================================================
   ФИЛЬТР ЛЕНТЫ
   ========================================================== */

function setFeedFilterOpen(isOpen) {

    if (
        !feedFilterButton ||
        !feedFilterMenu ||
        !feedFilterIconDown ||
        !feedFilterIconUp
    ) {
        return;
    }

    feedFilterButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    feedFilterMenu.hidden = !isOpen;
    feedFilterIconDown.hidden = isOpen;
    feedFilterIconUp.hidden = !isOpen;

}


function applyFeedFilter(filterValue) {

    if (!feedPostsContainer) {
        return;
    }

    const postCards = feedPostsContainer.querySelectorAll(".post-card");

    postCards.forEach(function (postCard) {

        postCard.hidden =
            filterValue === "pause" &&
            postCard.dataset.postSource !== "pause";

    });

}


if (feedFilterButton) {

    feedFilterButton.addEventListener("click", function () {

        const isOpen =
            feedFilterButton.getAttribute("aria-expanded") === "true";

        setFeedFilterOpen(!isOpen);

    });

}


feedFilterOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        const selectedFilter = option.dataset.feedFilter;
        const selectedLabel = option.querySelector("span");

        if (feedFilterLabel && selectedLabel) {
            feedFilterLabel.textContent = selectedLabel.textContent;
        }

        feedFilterOptions.forEach(function (currentOption) {

            const isSelected = currentOption === option;
            const checkIcon = currentOption.querySelector(
                ".feed-filter-check"
            );

            currentOption.classList.toggle("is-active", isSelected);
            currentOption.setAttribute(
                "aria-selected",
                String(isSelected)
            );

            if (checkIcon) {
                checkIcon.hidden = !isSelected;
            }

        });

        applyFeedFilter(selectedFilter);
        setFeedFilterOpen(false);

        if (feedFilterButton) {
            feedFilterButton.focus();
        }

    });

});


if (feedFilter) {

    document.addEventListener("click", function (event) {

        const isOpen =
            feedFilterButton &&
            feedFilterButton.getAttribute("aria-expanded") === "true";

        if (
            isOpen &&
            !feedFilter.contains(event.target)
        ) {
            setFeedFilterOpen(false);
        }

    });

}


/* ==========================================================
   СОСТОЯНИЕ ЛАЙКОВ И КОММЕНТАРИЕВ
   ========================================================== */

function getSavedFeedState() {

    const savedFeedState = localStorage.getItem("feedPostState");

    if (!savedFeedState) {
        return {};
    }

    try {

        const parsedFeedState = JSON.parse(savedFeedState);

        return parsedFeedState && typeof parsedFeedState === "object"
            ? parsedFeedState
            : {};

    } catch (error) {

        return {};

    }

}


let feedPostState = getSavedFeedState();


function saveFeedState() {

    localStorage.setItem(
        "feedPostState",
        JSON.stringify(feedPostState)
    );

}


function getCurrentFeedAuthorName() {

    const savedName = currentProfileData.name
        ? currentProfileData.name.trim()
        : "";

    return savedName || defaultProfileData.name;

}


function createFeedEntryId(type) {

    return `${type}-${Date.now()}-${Math.random()
        .toString(16)
        .slice(2)}`;

}


/*
   Старые комментарии сохранялись простыми строками.
   Эти функции переводят их в новый формат с ответами,
   не удаляя уже написанный пользователем текст.
*/

function normalizeFeedReply(
    reply,
    postId,
    commentIndex,
    replyIndex
) {

    if (typeof reply === "string") {

        return {
            id: `${postId}-reply-${commentIndex}-${replyIndex}`,
            authorName: getCurrentFeedAuthorName(),
            isCurrentUser: true,
            text: reply
        };

    }

    if (!reply || typeof reply !== "object") {
        return null;
    }

    const replyText = typeof reply.text === "string"
        ? reply.text.trim()
        : "";

    if (!replyText) {
        return null;
    }

    return {
        id: reply.id ||
            `${postId}-reply-${commentIndex}-${replyIndex}`,
        authorName: reply.authorName || getCurrentFeedAuthorName(),
        avatar: typeof reply.avatar === "string"
            ? reply.avatar
            : "",
        isCurrentUser: reply.isCurrentUser !== false,
        text: replyText
    };

}


function normalizeFeedComment(comment, postId, commentIndex) {

    if (typeof comment === "string") {

        return {
            id: `${postId}-comment-${commentIndex}`,
            authorName: getCurrentFeedAuthorName(),
            isCurrentUser: true,
            text: comment,
            replies: []
        };

    }

    if (!comment || typeof comment !== "object") {
        return null;
    }

    const commentText = typeof comment.text === "string"
        ? comment.text.trim()
        : "";

    if (!commentText) {
        return null;
    }

    const replies = Array.isArray(comment.replies)
        ? comment.replies
            .map(function (reply, replyIndex) {

                return normalizeFeedReply(
                    reply,
                    postId,
                    commentIndex,
                    replyIndex
                );

            })
            .filter(Boolean)
        : [];

    return {
        id: comment.id || `${postId}-comment-${commentIndex}`,
        authorName: comment.authorName || getCurrentFeedAuthorName(),
        avatar: typeof comment.avatar === "string"
            ? comment.avatar
            : "",
        isCurrentUser: comment.isCurrentUser !== false,
        text: commentText,
        replies: replies
    };

}


function countFeedCommentMessages(comments) {

    return comments.reduce(function (total, comment) {

        return total + 1 + comment.replies.length;

    }, 0);

}


function createPostAvatar(post) {

    const avatar = document.createElement("div");

    avatar.classList.add("post-avatar");
    avatar.setAttribute("aria-hidden", "true");

    if (post.avatarTone === "secondary") {
        avatar.classList.add("post-avatar--secondary");
    }

    if (post.avatar) {

        const image = document.createElement("img");

        image.src = post.avatar;
        image.alt = "";

        avatar.append(image);

    } else {

        avatar.textContent = post.initials || post.author.charAt(0);

    }

    return avatar;

}


function createFeedCommentAvatar(comment) {

    const avatar = document.createElement("span");

    avatar.classList.add("post-comment-avatar");
    avatar.setAttribute("aria-hidden", "true");

    const currentUserAvatar = comment.isCurrentUser
        ? localStorage.getItem("userAvatar")
        : "";

    const avatarSource = comment.avatar || currentUserAvatar;

    if (avatarSource) {

        const avatarImage = document.createElement("img");

        avatarImage.src = avatarSource;
        avatarImage.alt = "";

        avatar.append(avatarImage);

    } else {

        avatar.textContent = comment.authorName
            .charAt(0)
            .toUpperCase();

    }

    return avatar;

}


function createFeedCommentRow(comment, isReply) {

    const commentRow = document.createElement("div");
    const commentBody = document.createElement("div");
    const commentAuthor = document.createElement("strong");
    const commentText = document.createElement("p");

    commentRow.classList.add("post-user-comment");
    commentBody.classList.add("post-user-comment-body");
    commentText.classList.add("post-user-comment-text");

    if (isReply) {
        commentRow.classList.add("post-user-comment--reply");
    }

    commentAuthor.textContent = comment.authorName;
    commentText.textContent = comment.text;

    commentBody.append(commentAuthor);
    commentBody.append(commentText);

    commentRow.append(createFeedCommentAvatar(comment));
    commentRow.append(commentBody);

    return {
        row: commentRow,
        body: commentBody
    };

}


function createFeedCommentDeleteButton(ariaLabel) {

    const deleteButton = document.createElement("button");

    deleteButton.classList.add("post-comment-delete");
    deleteButton.type = "button";
    deleteButton.textContent = "Удалить";
    deleteButton.setAttribute("aria-label", ariaLabel);

    return deleteButton;

}


function renderFeedPosts() {

    if (!feedPostsContainer) {
        return;
    }

    feedPostsContainer.innerHTML = "";


    feedPosts.forEach(function (post) {

        const savedPostState = feedPostState[post.id] || {};

        const savedUserComments = Array.isArray(
            savedPostState.userComments
        )
            ? savedPostState.userComments
            : [];

        const postState = {
            liked: Boolean(savedPostState.liked),
            userComments: savedUserComments
                .map(function (comment, commentIndex) {

                    return normalizeFeedComment(
                        comment,
                        post.id,
                        commentIndex
                    );

                })
                .filter(Boolean)
        };

        feedPostState[post.id] = postState;


        const postCard = document.createElement("article");

        postCard.classList.add("post-card");
        postCard.dataset.postId = post.id;
        postCard.dataset.postSource = post.source;


        /* Автор публикации. */

        const authorHeader = document.createElement("header");
        const authorMeta = document.createElement("div");
        const authorName = document.createElement("h2");
        const publishedAt = document.createElement("p");

        authorHeader.classList.add("post-author-header");
        authorMeta.classList.add("post-author-meta");
        authorName.classList.add("post-author-name");
        publishedAt.classList.add("post-published-at");

        authorName.textContent = post.author;
        publishedAt.textContent = post.publishedAt;

        authorMeta.append(authorName);
        authorMeta.append(publishedAt);

        authorHeader.append(createPostAvatar(post));
        authorHeader.append(authorMeta);

        postCard.append(authorHeader);


        /* Текст публикации. */

        const postText = document.createElement("p");

        postText.classList.add("post-text");
        postText.textContent = post.text;

        postCard.append(postText);


        const divider = document.createElement("div");

        divider.classList.add("post-divider");
        divider.setAttribute("aria-hidden", "true");

        postCard.append(divider);


        /* Действия публикации. */

        const postActions = document.createElement("div");
        const likeButton = document.createElement("button");
        const likeIcon = document.createElement("span");
        const likeCount = document.createElement("span");
        const commentButton = document.createElement("button");
        const commentIcon = document.createElement("span");
        const commentCount = document.createElement("span");

        postActions.classList.add("post-actions");

        likeButton.classList.add(
            "post-action-button",
            "post-like-button"
        );

        commentButton.classList.add(
            "post-action-button",
            "post-comment-button"
        );

        likeIcon.classList.add(
            "post-action-icon",
            "post-like-icon"
        );

        commentIcon.classList.add(
            "post-action-icon",
            "post-comment-icon"
        );

        likeButton.type = "button";
        commentButton.type = "button";

        likeButton.setAttribute("aria-label", "Поставить лайк");
        likeButton.setAttribute(
            "aria-pressed",
            String(postState.liked)
        );

        commentButton.setAttribute("aria-label", "Открыть комментарии");
        commentButton.setAttribute("aria-expanded", "false");

        likeIcon.setAttribute("aria-hidden", "true");
        commentIcon.setAttribute("aria-hidden", "true");

        const initialCommentCount =
            post.comments +
            countFeedCommentMessages(postState.userComments);

        commentIcon.classList.toggle(
            "is-active",
            Boolean(initialCommentCount)
        );

        likeCount.classList.add("post-action-count");
        commentCount.classList.add("post-action-count");

        likeCount.textContent = post.likes + Number(postState.liked);
        commentCount.textContent = initialCommentCount;

        likeButton.append(likeIcon);
        likeButton.append(likeCount);

        commentButton.append(commentIcon);
        commentButton.append(commentCount);

        postActions.append(likeButton);
        postActions.append(commentButton);

        postCard.append(postActions);


        /* Кнопка и форма нового комментария. */

        const commentOpenButton = document.createElement("button");
        const commentPanel = document.createElement("div");
        const userComments = document.createElement("div");
        const commentForm = document.createElement("form");
        const commentInput = document.createElement("input");
        const commentSubmit = document.createElement("button");

        commentOpenButton.classList.add("post-comment-open");
        commentPanel.classList.add("post-comment-panel");
        userComments.classList.add("post-user-comments");
        commentForm.classList.add("post-comment-form");
        commentInput.classList.add("post-comment-input");
        commentSubmit.classList.add("post-comment-submit");

        commentOpenButton.type = "button";
        commentOpenButton.textContent = "Написать комментарий";

        commentPanel.hidden = true;

        commentInput.type = "text";
        commentInput.maxLength = 500;
        commentInput.placeholder = "Напишите комментарий...";
        commentInput.setAttribute(
            "aria-label",
            "Текст комментария"
        );

        commentSubmit.type = "submit";
        commentSubmit.textContent = "Отправить";

        commentForm.append(commentInput);
        commentForm.append(commentSubmit);

        commentPanel.append(userComments);
        commentPanel.append(commentForm);

        postCard.append(commentOpenButton);
        postCard.append(commentPanel);


        function updateCommentSummary() {

            const totalComments =
                post.comments +
                countFeedCommentMessages(postState.userComments);

            commentCount.textContent = totalComments;

            commentIcon.classList.toggle(
                "is-active",
                Boolean(totalComments)
            );

        }


        function renderUserComments() {

            userComments.innerHTML = "";
            userComments.hidden = !postState.userComments.length;

            postState.userComments.forEach(function (
                comment,
                commentIndex
            ) {

                const commentThread = document.createElement("article");
                const commentElements = createFeedCommentRow(
                    comment,
                    false
                );
                const commentActions = document.createElement("div");
                const replyButton = document.createElement("button");
                const replyForm = document.createElement("form");
                const replyInput = document.createElement("input");
                const replySubmit = document.createElement("button");
                const repliesContainer = document.createElement("div");

                commentThread.classList.add("post-comment-thread");
                commentActions.classList.add("post-comment-actions");
                replyButton.classList.add("post-reply-button");
                replyForm.classList.add("post-reply-form");
                replyInput.classList.add(
                    "post-comment-input",
                    "post-reply-input"
                );
                replySubmit.classList.add(
                    "post-comment-submit",
                    "post-reply-submit"
                );
                repliesContainer.classList.add("post-comment-replies");

                replyButton.type = "button";
                replyButton.textContent = "Ответить";
                replyButton.setAttribute("aria-expanded", "false");

                replyForm.hidden = true;

                replyInput.type = "text";
                replyInput.maxLength = 500;
                replyInput.placeholder =
                    `Ответить ${comment.authorName}...`;
                replyInput.setAttribute(
                    "aria-label",
                    `Ответ пользователю ${comment.authorName}`
                );

                replySubmit.type = "submit";
                replySubmit.textContent = "Отправить";

                replyForm.append(replyInput);
                replyForm.append(replySubmit);

                commentActions.append(replyButton);

                if (comment.isCurrentUser) {

                    const deleteCommentButton =
                        createFeedCommentDeleteButton(
                            "Удалить комментарий"
                        );

                    commentActions.append(deleteCommentButton);

                    deleteCommentButton.addEventListener(
                        "click",
                        function () {

                            if (!requestFeedAuthorization()) {
                                return;
                            }

                            const hasReplies =
                                comment.replies.length > 0;

                            const confirmationText = hasReplies
                                ? "Удалить комментарий и все ответы на него?"
                                : "Удалить комментарий?";

                            if (!window.confirm(confirmationText)) {
                                return;
                            }

                            postState.userComments.splice(
                                commentIndex,
                                1
                            );

                            updateCommentSummary();
                            renderUserComments();
                            saveFeedState();

                        }
                    );

                }

                commentElements.body.append(commentActions);
                commentElements.body.append(replyForm);

                comment.replies.forEach(function (
                    reply,
                    replyIndex
                ) {

                    const replyElements = createFeedCommentRow(
                        reply,
                        true
                    );

                    if (reply.isCurrentUser) {

                        const replyActions =
                            document.createElement("div");
                        const deleteReplyButton =
                            createFeedCommentDeleteButton(
                                "Удалить ответ"
                            );

                        replyActions.classList.add(
                            "post-comment-actions"
                        );
                        replyActions.append(deleteReplyButton);
                        replyElements.body.append(replyActions);

                        deleteReplyButton.addEventListener(
                            "click",
                            function () {

                                if (!requestFeedAuthorization()) {
                                    return;
                                }

                                if (!window.confirm("Удалить ответ?")) {
                                    return;
                                }

                                comment.replies.splice(replyIndex, 1);

                                updateCommentSummary();
                                renderUserComments();
                                saveFeedState();

                            }
                        );

                    }

                    repliesContainer.append(replyElements.row);

                });

                commentThread.append(commentElements.row);
                commentThread.append(repliesContainer);

                userComments.append(commentThread);


                replyButton.addEventListener("click", function () {

                    if (!requestFeedAuthorization()) {
                        return;
                    }

                    const shouldOpen = replyForm.hidden;

                    replyForm.hidden = !shouldOpen;
                    replyButton.textContent = shouldOpen
                        ? "Отмена"
                        : "Ответить";
                    replyButton.setAttribute(
                        "aria-expanded",
                        String(shouldOpen)
                    );

                    if (shouldOpen) {
                        replyInput.focus();
                    }

                });


                replyForm.addEventListener("submit", function (event) {

                    event.preventDefault();

                    if (!requestFeedAuthorization()) {
                        return;
                    }

                    const replyText = replyInput.value.trim();

                    if (!replyText) {
                        replyInput.focus();
                        return;
                    }

                    comment.replies.push({
                        id: createFeedEntryId("reply"),
                        authorName: getCurrentFeedAuthorName(),
                        isCurrentUser: true,
                        text: replyText
                    });

                    updateCommentSummary();
                    renderUserComments();
                    saveFeedState();

                });

            });

        }


        function setCommentPanelOpen(isOpen) {

            commentPanel.hidden = !isOpen;

            commentButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            commentOpenButton.textContent = isOpen
                ? "Скрыть комментарии"
                : "Написать комментарий";

            if (isOpen) {
                commentInput.focus();
            }

        }


        likeButton.addEventListener("click", function () {

            if (!requestFeedAuthorization()) {
                return;
            }

            postState.liked = !postState.liked;

            likeCount.textContent =
                post.likes + Number(postState.liked);

            likeButton.setAttribute(
                "aria-pressed",
                String(postState.liked)
            );

            saveFeedState();

        });


        commentButton.addEventListener("click", function () {

            if (!requestFeedAuthorization()) {
                return;
            }

            setCommentPanelOpen(commentPanel.hidden);

        });


        commentOpenButton.addEventListener("click", function () {

            if (!requestFeedAuthorization()) {
                return;
            }

            setCommentPanelOpen(commentPanel.hidden);

        });


        commentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!requestFeedAuthorization()) {
                return;
            }

            const comment = commentInput.value.trim();

            if (!comment) {
                commentInput.focus();
                return;
            }

            postState.userComments.push({
                id: createFeedEntryId("comment"),
                authorName: getCurrentFeedAuthorName(),
                isCurrentUser: true,
                text: comment,
                replies: []
            });

            commentInput.value = "";

            updateCommentSummary();
            renderUserComments();
            saveFeedState();

        });


        renderUserComments();
        feedPostsContainer.append(postCard);

    });


    /* По умолчанию показываем публикации ПАУЗЫ. */

    applyFeedFilter("pause");

}


renderFeedPosts();


/* ==========================================================
   КЛАВИША ESCAPE
   Проверяем все модалки в одном обработчике.
   ========================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") {
        return;
    }


    if (
        feedFilterButton &&
        feedFilterButton.getAttribute("aria-expanded") === "true"
    ) {

        setFeedFilterOpen(false);
        feedFilterButton.focus();

        return;

    }


    if (
        profileEditModal &&
        profileEditModal.classList.contains(
            "profile-edit-modal--open"
        )
    ) {

        closeProfileEditModal();

        return;

    }


    if (
        pauseDetailsModal &&
        pauseDetailsModal.classList.contains(
            "pause-details-modal--open"
        )
    ) {

        closePauseDetailsModal();

        return;

    }


    if (
        completedModal &&
        completedModal.classList.contains(
            "completed-modal--open"
        )
    ) {

        closeCompletedModal();

        return;

    }


    if (
        authModal &&
        authModal.classList.contains("auth-modal--open")
    ) {

        closeAuthModal();

    }

});
