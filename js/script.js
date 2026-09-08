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

        openAuthModal("login");

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
   КЛАВИША ESCAPE
   Проверяем все модалки в одном обработчике.
   ========================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") {
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
