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

const chips = document.querySelectorAll(".chip");
const pausesList = document.querySelector(".pauses-list");

const profileDocumentsButton = document.querySelector(
    ".profile-documents-button"
);


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
const pauseDetailsReflection = document.querySelector(
    ".pause-details-reflection"
);
const pauseDetailsControlRow = document.querySelector(
    ".pause-details-control-row"
);
const pauseDetailsControl = document.querySelector(
    ".pause-details-control"
);
const pauseDetailsNextStepRow = document.querySelector(
    ".pause-details-next-step-row"
);
const pauseDetailsNextStep = document.querySelector(
    ".pause-details-next-step"
);

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
const authModeTabs = document.querySelectorAll("[data-auth-tab]");
const authForms = document.querySelectorAll(".auth-modal-form");

const desktopLoginButton = document.querySelector(".desktop-login-button");
const desktopRegisterButton = document.querySelector(".hero-secondary-button");
const authRequiredButtons = document.querySelectorAll(".auth-required-button");
const passwordToggleButtons = document.querySelectorAll(".password-toggle");

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
const feedPage = document.querySelector(
    ".feed-page, [data-feed-access-page]"
);
const feedResultsCount = document.querySelector(".feed-results-count");
const feedMobileFiltersButton = document.querySelector(
    ".feed-mobile-filters-button"
);
const feedSidebar = document.querySelector(".feed-sidebar");
const feedSortButtons = document.querySelectorAll("[data-feed-sort]");

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
   Данные Ленты подключаются отдельным файлом feed-data.js.
   На страницах без Ленты файл можно не подключать — тогда
   используются пустые массивы и остальная логика сайта работает как обычно.
*/

const feedData = window.PAUSE_FEED_DATA || {
    authors: [],
    categories: [],
    posts: []
};

const feedAuthors = Array.isArray(feedData.authors)
    ? feedData.authors
    : [];

const feedCategories = Array.isArray(feedData.categories)
    ? feedData.categories
    : [];

const feedPosts = Array.isArray(feedData.posts)
    ? feedData.posts
    : [];


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


/*
   Возвращает карточку вопроса по её постоянному ключу.
   Ключи не зависят от порядка элементов на странице, поэтому
   в форму можно безопасно добавлять новые вопросы.
*/

function getPauseQuestionCard(questionKey) {

    return document.querySelector(
        `[data-question-key="${questionKey}"]`
    );

}


function getPauseQuestionText(questionKey) {

    const questionCard = getPauseQuestionCard(questionKey);

    if (!questionCard) {
        return "";
    }

    const textarea = questionCard.querySelector("textarea");

    return textarea
        ? textarea.value.trim()
        : "";

}


function getPauseQuestionTags(questionKey) {

    const questionCard = getPauseQuestionCard(questionKey);

    if (!questionCard) {
        return [];
    }

    return Array.from(
        questionCard.querySelectorAll(
            '.chip[aria-pressed="true"]'
        )
    ).map(function (chip) {

        return (
            chip.dataset.value ||
            chip.textContent
        ).trim();

    });

}


/*
   Старые страницы читают поля feelings, thoughts и needs.
   Собираем для них понятную строку из выбранных вариантов
   и свободного ответа, одновременно сохраняя исходные части
   отдельно в pauseData.answers.
*/

function createLegacyPauseAnswer(tags, text) {

    const tagsText = tags.join(", ");

    if (tagsText && text) {
        return `${tagsText}. ${text}`;
    }

    return tagsText || text;

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

        window.location.href = "/pages/pause.html";

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

        window.location.href = "/pages/pause.html";

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


        const feelingsText = getPauseQuestionText("feelings");
        const thoughtsText = getPauseQuestionText("thoughts");
        const supportText = getPauseQuestionText("support");

        const feelingsTags = getPauseQuestionTags("feelings");
        const thoughtsTags = getPauseQuestionTags("thoughts");
        const supportTags = getPauseQuestionTags("support");

        const controlText = getPauseQuestionText("control");
        const nextStepText = getPauseQuestionText("nextStep");

        const feelings = createLegacyPauseAnswer(
            feelingsTags,
            feelingsText
        );

        const thoughts = createLegacyPauseAnswer(
            thoughtsTags,
            thoughtsText
        );

        const needs = createLegacyPauseAnswer(
            supportTags,
            supportText
        );

        const endTime = Date.now();
        const duration = endTime - startTimestamp;

        const pauseData = {
            schemaVersion: 2,
            feelings: feelings,
            thoughts: thoughts,
            needs: needs,
            answers: {
                feelings: {
                    tags: feelingsTags,
                    text: feelingsText
                },
                thoughts: {
                    tags: thoughtsTags,
                    text: thoughtsText
                },
                support: {
                    tags: supportTags,
                    text: supportText
                },
                reflection: {
                    control: controlText,
                    nextStep: nextStepText
                }
            },
            duration: duration,
            endTime: endTime,
            createdAt: new Date(endTime).toISOString()
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

                window.location.href = "/index.html";

            } else {

                window.location.href = "/pages/auth.html";

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

            window.location.href = "/pages/completed.html";

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

            window.location.href = "/index.html";

        } else {

            window.location.href = "/pages/home.html";

        }

    });

}


/* ==========================================================
   БЫСТРЫЕ ВАРИАНТЫ ОТВЕТОВ
   ========================================================== */

chips.forEach(function (chip) {

    chip.addEventListener("click", function () {

        const isSelected =
            chip.getAttribute("aria-pressed") === "true";

        chip.setAttribute(
            "aria-pressed",
            String(!isSelected)
        );

        chip.classList.toggle(
            "is-selected",
            !isSelected
        );

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


    /* Дополнительные ответы есть только у записей новой версии. */

    const reflection =
        pause.answers &&
            pause.answers.reflection &&
            typeof pause.answers.reflection === "object"
            ? pause.answers.reflection
            : {};

    const controlText =
        typeof reflection.control === "string"
            ? reflection.control.trim()
            : "";

    const nextStepText =
        typeof reflection.nextStep === "string"
            ? reflection.nextStep.trim()
            : "";

    if (pauseDetailsControlRow) {
        pauseDetailsControlRow.hidden = !controlText;
    }

    if (pauseDetailsControl) {
        pauseDetailsControl.textContent = controlText;
    }

    if (pauseDetailsNextStepRow) {
        pauseDetailsNextStepRow.hidden = !nextStepText;
    }

    if (pauseDetailsNextStep) {
        pauseDetailsNextStep.textContent = nextStepText;
    }

    if (pauseDetailsReflection) {
        pauseDetailsReflection.hidden =
            !controlText && !nextStepText;
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

/*
   Показывает ошибку конкретного поля.
   Эту же функцию позже можно вызвать после ответа сервера,
   например при неверном пароле или уже занятом email.
*/

function setAuthFieldError(input, message) {

    if (!input) {
        return;
    }

    const formField = input.closest(".form-field");

    if (!formField) {
        return;
    }

    const errorMessage = formField.querySelector(
        ".form-field-error"
    );

    formField.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");

    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.hidden = false;
    }

}


function clearAuthFieldError(input) {

    if (!input) {
        return;
    }

    const formField = input.closest(".form-field");

    if (!formField) {
        return;
    }

    const errorMessage = formField.querySelector(
        ".form-field-error"
    );

    formField.classList.remove("has-error");
    input.removeAttribute("aria-invalid");

    if (errorMessage) {
        errorMessage.textContent = "";
        errorMessage.hidden = true;
    }

}


function clearAuthFormErrors(container) {

    if (!container) {
        return;
    }

    container.querySelectorAll("input").forEach(function (input) {
        clearAuthFieldError(input);
    });

}


/*
   Добавляет всем формам одинаковые подписи ошибок
   и ссылку восстановления пароля.
*/

function setupAuthFormEnhancements() {

    authForms.forEach(function (form, formIndex) {

        form.noValidate = true;

        if (!form.id) {
            form.id = `auth-form-${formIndex + 1}`;
        }

        form.querySelectorAll(".form-field input").forEach(function (
            input,
            inputIndex
        ) {

            const formField = input.closest(".form-field");

            if (!formField) {
                return;
            }

            if (!input.id) {
                input.id = `auth-field-${formIndex + 1}-${inputIndex + 1}`;
            }

            let errorMessage = formField.querySelector(
                ".form-field-error"
            );

            if (!errorMessage) {

                errorMessage = document.createElement("p");
                errorMessage.classList.add("form-field-error");
                errorMessage.id = `${input.id}-error`;
                errorMessage.hidden = true;
                errorMessage.setAttribute("aria-live", "polite");

                formField.append(errorMessage);

            }

            const describedBy = input
                .getAttribute("aria-describedby")
                ?.split(/\s+/)
                .filter(Boolean) || [];

            if (!describedBy.includes(errorMessage.id)) {
                describedBy.push(errorMessage.id);
            }

            input.setAttribute(
                "aria-describedby",
                describedBy.join(" ")
            );

            input.addEventListener("input", function () {
                clearAuthFieldError(input);
            });

        });


        const passwordInput = form.querySelector(".password-input");
        const passwordField = passwordInput
            ? passwordInput.closest(".form-field")
            : null;

        if (
            passwordField &&
            !passwordField.querySelector(".auth-forgot-password")
        ) {

            const forgotPasswordLink = document.createElement("a");

            forgotPasswordLink.classList.add(
                "auth-forgot-password",
                "auth-login-only"
            );

            forgotPasswordLink.href = "#";
            forgotPasswordLink.dataset.passwordRecovery = "";
            forgotPasswordLink.textContent = "Забыли пароль?";

            passwordField.append(forgotPasswordLink);

        }

    });


    /*
       Кнопка расположена после формы в HTML.
       Связываем её с формой, чтобы работали и клик, и Enter.
    */

    if (authModalSubmit && authForms.length === 1) {

        authModalSubmit.type = "submit";
        authModalSubmit.setAttribute(
            "form",
            authForms[0].id
        );

    }

}


function validateAuthForm(form) {

    const card = form.closest(".auth-modal-card");
    const mode = card?.dataset.authMode === "login"
        ? "login"
        : "register";

    const nameInput = form.querySelector(
        'input[name="name"], input[id*="name"]'
    );

    const emailInput = form.querySelector(
        'input[type="email"]'
    );

    const passwordInput = form.querySelector(
        ".password-input"
    );

    clearAuthFormErrors(form);

    let isValid = true;
    let firstInvalidInput = null;


    function addError(input, message) {

        setAuthFieldError(input, message);

        if (!firstInvalidInput) {
            firstInvalidInput = input;
        }

        isValid = false;

    }


    if (
        mode === "register" &&
        nameInput &&
        !nameInput.value.trim()
    ) {
        addError(nameInput, "Введите имя.");
    }


    if (emailInput) {

        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {

            addError(emailInput, "Введите email.");

        } else if (!emailPattern.test(email)) {

            addError(
                emailInput,
                "Проверьте формат email."
            );

        }

    }


    if (passwordInput) {

        const password = passwordInput.value;

        if (!password) {

            addError(passwordInput, "Введите пароль.");

        } else if (
            mode === "register" &&
            password.length < 8
        ) {

            addError(
                passwordInput,
                "Пароль должен содержать не менее 8 символов."
            );

        }

    }


    if (firstInvalidInput) {
        firstInvalidInput.focus();
    }

    return isValid;

}


setupAuthFormEnhancements();


authForms.forEach(function (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!validateAuthForm(form)) {
            return;
        }

        const card = form.closest(".auth-modal-card");
        const mode = card?.dataset.authMode === "login"
            ? "login"
            : "register";

        /*
           Здесь позже подключается запрос к сервису авторизации.
           Событие уже содержит проверенные значения формы.
        */

        form.dispatchEvent(
            new CustomEvent("auth-form-ready", {
                bubbles: true,
                detail: {
                    mode: mode,
                    name: form.querySelector(
                        'input[name="name"], input[id*="name"]'
                    )?.value.trim() || "",
                    email: form.querySelector(
                        'input[type="email"]'
                    )?.value.trim() || "",
                    password: form.querySelector(
                        ".password-input"
                    )?.value || ""
                }
            })
        );

    });

});


document.querySelectorAll("[data-password-recovery]").forEach(function (
    recoveryLink
) {

    recoveryLink.addEventListener("click", function (event) {

        const recoveryHref = recoveryLink.getAttribute("href");

        /* Когда появится настоящий адрес, ссылка начнёт работать сама. */

        if (recoveryHref && recoveryHref !== "#") {
            return;
        }

        event.preventDefault();

        const form = recoveryLink.closest(".auth-modal-form");
        const email = form
            ?.querySelector('input[type="email"]')
            ?.value.trim() || "";

        if (email) {
            sessionStorage.setItem("passwordRecoveryEmail", email);
        }

        recoveryLink.dispatchEvent(
            new CustomEvent("password-recovery-requested", {
                bubbles: true,
                detail: {
                    email: email
                }
            })
        );

    });

});


function setPasswordVisibility(toggleButton, isVisible) {

    const inputContainer = toggleButton.closest(".input-container");

    if (!inputContainer) {
        return;
    }

    const passwordInput = inputContainer.querySelector(".password-input");
    const showIcon = toggleButton.querySelector(
        ".password-toggle-icon--show"
    );
    const hideIcon = toggleButton.querySelector(
        ".password-toggle-icon--hide"
    );

    if (!passwordInput || !showIcon || !hideIcon) {
        return;
    }

    passwordInput.type = isVisible
        ? "text"
        : "password";

    showIcon.hidden = isVisible;
    hideIcon.hidden = !isVisible;

    toggleButton.setAttribute(
        "aria-pressed",
        String(isVisible)
    );

    toggleButton.setAttribute(
        "aria-label",
        isVisible
            ? "Скрыть пароль"
            : "Показать пароль"
    );

}


function resetPasswordVisibility() {

    passwordToggleButtons.forEach(function (toggleButton) {

        setPasswordVisibility(toggleButton, false);

    });

}


passwordToggleButtons.forEach(function (toggleButton) {

    toggleButton.addEventListener("click", function () {

        const inputContainer = toggleButton.closest(".input-container");
        const passwordInput = inputContainer
            ? inputContainer.querySelector(".password-input")
            : null;

        if (!passwordInput) {
            return;
        }

        const shouldShowPassword =
            passwordInput.type === "password";

        setPasswordVisibility(
            toggleButton,
            shouldShowPassword
        );

    });

});

function setAuthMode(mode) {

    if (
        !authModalCard ||
        !authModalHeading ||
        !authModalSubmit
    ) {
        return;
    }

    resetPasswordVisibility();
    clearAuthFormErrors(authModalCard);

    authModalCard.dataset.authMode = mode;

    const authPasswordInput = authModalCard.querySelector(
        ".password-input"
    );

    if (authPasswordInput) {
        authPasswordInput.autocomplete = mode === "login"
            ? "current-password"
            : "new-password";
    }


    /* Обновляем активную вкладку. */

    authModeTabs.forEach(function (tab) {

        const isActive =
            tab.dataset.authTab === mode;

        tab.classList.toggle(
            "tab-active",
            isActive
        );

        tab.classList.toggle(
            "tab-inactive",
            !isActive
        );

        tab.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });


    /* Регистрация. */

    if (mode === "register") {

        if (authModalContext === "feed") {

            authModalHeading.innerHTML =
                "Чтобы писать комментарии<br>и ставить лайки — создайте аккаунт";

        } else if (authModalContext === "account") {

            authModalHeading.textContent =
                "Создайте аккаунт";

        } else {

            authModalHeading.innerHTML =
                "Чтобы сохранить паузу —<br>создайте аккаунт";

        }

        authModalSubmit.textContent =
            "Зарегистрироваться";

    }


    /* Вход. */

    if (mode === "login") {

        if (authModalContext === "feed") {

            authModalHeading.innerHTML =
                "Чтобы писать комментарии<br>и ставить лайки — войдите в аккаунт";

        } else if (authModalContext === "account") {

            authModalHeading.textContent =
                "Войдите в аккаунт";

        } else {

            authModalHeading.innerHTML =
                "Чтобы сохранить паузу —<br>войдите в аккаунт";

        }

        authModalSubmit.textContent =
            "Войти";

    }

}


function openAuthModal(mode, context) {

    if (!authModal) {
        return;
    }

    authModalContext = context === "feed" || context === "account"
        ? context
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

    resetPasswordVisibility();
    clearAuthFormErrors(authModalCard);

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


/* Переключение вкладок «Регистрация / Вход». */

authModeTabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

        const selectedMode =
            tab.dataset.authTab;

        if (
            selectedMode !== "register" &&
            selectedMode !== "login"
        ) {
            return;
        }

        setAuthMode(selectedMode);

    });

});


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

function requestFeedAuthorization(context) {

    if (isUserAuthenticated()) {
        return true;
    }

    const requestedContext = context === "account"
        ? "account"
        : "feed";

    const isDesktop = window.matchMedia(
        "(min-width: 1200px)"
    ).matches;

    if (isDesktop && authModal) {

        openAuthModal("register", requestedContext);

    } else {

        /*
           На мобильном сохраняем принятую архитектуру:
           регистрация и вход открываются отдельными страницами.
        */

        sessionStorage.setItem("authContext", requestedContext);
        window.location.href = "/pages/auth.html";

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
            ? "/pages/home.html"
            : "/index.html";

    });

}


feedProtectedLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        if (isUserAuthenticated()) {
            return;
        }

        event.preventDefault();
        requestFeedAuthorization(link.dataset.authContext);

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

    window.location.href = "/pages/home.html";

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


/* Переход из настроек профиля в общий раздел документов. */

if (profileDocumentsButton) {

    profileDocumentsButton.addEventListener("click", function () {

        window.location.href = "/legal/";

    });

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
   ФИЛЬТРЫ И СОРТИРОВКА ЛЕНТЫ
   ========================================================== */

const activeFeedAuthor = feedPage
    ? feedPage.dataset.feedAuthor || "pause"
    : "pause";

const activeFeedCategory = feedPage
    ? feedPage.dataset.feedCategory || ""
    : "";

let activeFeedSort = "newest";


function getFeedTimestamp(post) {

    const timestamp = Date.parse(post.publishedAtISO || "");

    return Number.isNaN(timestamp)
        ? 0
        : timestamp;

}


function getVisibleFeedPosts() {

    const visiblePosts = feedPosts.filter(function (post) {

        const matchesAuthor =
            activeFeedAuthor === "all" ||
            post.authorId === activeFeedAuthor;

        const postCategories = Array.isArray(post.categoryIds)
            ? post.categoryIds
            : [];

        const matchesCategory =
            !activeFeedCategory ||
            postCategories.includes(activeFeedCategory);

        return matchesAuthor && matchesCategory;

    });

    return visiblePosts.sort(function (firstPost, secondPost) {

        const direction = activeFeedSort === "oldest"
            ? 1
            : -1;

        return (
            getFeedTimestamp(firstPost) -
            getFeedTimestamp(secondPost)
        ) * direction;

    });

}


function updateFeedSortButtons() {

    feedSortButtons.forEach(function (button) {

        const isActive = button.dataset.feedSort === activeFeedSort;

        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));

    });

}


feedSortButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        activeFeedSort = button.dataset.feedSort || "newest";

        updateFeedSortButtons();
        renderFeedPosts();

    });

});


if (feedMobileFiltersButton && feedSidebar) {

    feedMobileFiltersButton.addEventListener("click", function () {

        const isOpen = feedSidebar.classList.toggle("is-open");

        feedMobileFiltersButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        feedMobileFiltersButton.textContent = isOpen
            ? "Скрыть фильтры"
            : "Фильтры";

    });

}


updateFeedSortButtons();


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

    const visiblePosts = getVisibleFeedPosts();

    if (feedResultsCount) {
        feedResultsCount.textContent = String(visiblePosts.length);
    }

    if (!visiblePosts.length) {

        const emptyState = document.createElement("p");

        emptyState.classList.add("feed-empty-state");
        emptyState.textContent =
            "Публикаций по выбранному фильтру пока нет.";

        feedPostsContainer.append(emptyState);

        return;

    }


    visiblePosts.forEach(function (post) {

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
        postCard.dataset.postAuthor = post.authorId;
        postCard.dataset.postCategories = Array.isArray(post.categoryIds)
            ? post.categoryIds.join(" ")
            : "";


        /* Автор публикации. */

        const authorHeader = document.createElement("header");
        const authorMeta = document.createElement("div");
        const authorName = document.createElement("a");
        const publishedAt = document.createElement("time");

        authorHeader.classList.add("post-author-header");
        authorMeta.classList.add("post-author-meta");
        authorName.classList.add("post-author-name");
        publishedAt.classList.add("post-published-at");

        authorName.href = post.authorUrl || "/lenta/all/";
        authorName.textContent = post.author;

        publishedAt.dateTime = post.publishedAtISO || "";
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


        if (
            post.citation &&
            post.citation.url
        ) {

            const sourceLine = document.createElement("p");
            const sourceLink = document.createElement("a");

            sourceLine.classList.add("post-source");
            sourceLink.classList.add("post-source-link");

            sourceLink.href = post.citation.url;
            sourceLink.target = "_blank";
            sourceLink.rel = "noopener noreferrer";
            sourceLink.textContent = `Источник: ${post.citation.title}`;

            sourceLine.append(sourceLink);

            if (post.citation.note) {

                const sourceNote = document.createElement("span");

                sourceNote.classList.add("post-source-note");
                sourceNote.textContent = post.citation.note;

                sourceLine.append(sourceNote);

            }

            postCard.append(sourceLine);

        }


        /* Категории публикации: одновременно подписи и ссылки на фильтры. */

        const postCategoryIds = Array.isArray(post.categoryIds)
            ? post.categoryIds
            : [];

        const postCategories = postCategoryIds
            .map(function (categoryId) {

                return feedCategories.find(function (category) {
                    return category.id === categoryId;
                });

            })
            .filter(Boolean);

        if (postCategories.length) {

            const postTags = document.createElement("nav");

            postTags.classList.add("post-tags");
            postTags.setAttribute(
                "aria-label",
                "Категории публикации"
            );

            postCategories.forEach(function (category) {

                const tagLink = document.createElement("a");

                tagLink.classList.add("post-tag");
                tagLink.href = category.url;
                tagLink.textContent = category.name;

                postTags.append(tagLink);

            });

            postCard.append(postTags);

        }


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
        feedSidebar &&
        feedSidebar.classList.contains("is-open")
    ) {

        feedSidebar.classList.remove("is-open");

        if (feedMobileFiltersButton) {
            feedMobileFiltersButton.setAttribute("aria-expanded", "false");
            feedMobileFiltersButton.textContent = "Фильтры";
            feedMobileFiltersButton.focus();
        }

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
