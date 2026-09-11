"use strict";


/* ==========================================================
   ЕДИНЫЕ ДАННЫЕ ЛЕНТЫ

   Чтобы добавить или изменить публикацию, редактируйте только
   массив posts в этом файле. Страницы авторов и категорий
   используют эти же данные. После изменений выполните:

   node tools/rebuild-feed-pages.js
   ========================================================== */

window.PAUSE_FEED_DATA = {
    "authors": [
        {
            "id": "pause",
            "name": "ПАУЗА.",
            "shortName": "Пауза",
            "url": "/lenta/",
            "avatar": "/assets/images/pause-avatar.png",
            "description": "Редакционные материалы ПАУЗЫ о внимании к себе, повседневной жизни и осознанности."
        },
        {
            "id": "osho",
            "name": "Ошо",
            "shortName": "Ошо",
            "url": "/lenta/osho/",
            "avatar": "/assets/images/osho-avatar.png",
            "description": "Цитаты Ошо об осознанности, внимании и внутреннем наблюдении."
        },
        {
            "id": "buddha",
            "name": "Будда",
            "shortName": "Будда",
            "url": "/lenta/buddha/",
            "avatar": "/assets/images/budda-avatar.png",
            "description": "Высказывания Будды о внимании, спокойствии и отношении человека к собственному опыту."
        },
        {
            "id": "lao-tzu",
            "name": "Лао-цзы",
            "shortName": "Лао-цзы",
            "url": "/lenta/lao-tzu/",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "description": "Цитаты Лао-цзы о простоте, тишине, внимании и внутреннем равновесии."
        },
        {
            "id": "leo-tolstoy",
            "name": "Лев Толстой",
            "shortName": "Лев Толстой",
            "url": "/lenta/leo-tolstoy/",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "description": "Мысли Льва Толстого о настоящем моменте, внимании и отношении к жизни."
        },
        {
            "id": "eckhart-tolle",
            "name": "Экхарт Толле",
            "shortName": "Экхарт Толле",
            "url": "/lenta/eckhart-tolle/",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "description": "Короткие высказывания Экхарта Толле о присутствии, внимании и наблюдении за мыслями."
        },
        {
            "id": "omar-khayyam",
            "name": "Омар Хайям",
            "shortName": "Омар Хайям",
            "url": "/lenta/omar-khayyam/",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "description": "Рубаи Омара Хайяма о времени, быстротечности жизни и ценности настоящего."
        },
        {
            "id": "dalai-lama",
            "name": "Далай-лама",
            "shortName": "Далай-лама",
            "url": "/lenta/dalai-lama/",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "description": "Высказывания Далай-ламы о внимании, сострадании и спокойствии ума."
        },
        {
            "id": "gurdjieff",
            "name": "Георгий Гурджиев",
            "shortName": "Георгий Гурджиев",
            "url": "/lenta/gurdjieff/",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "description": "Высказывания Георгия Гурджиева о внимании, самонаблюдении и памятовании себя."
        }
    ],
    "categories": [
        {
            "id": "awareness",
            "name": "Осознанность",
            "url": "/lenta/category/awareness/"
        },
        {
            "id": "emotions",
            "name": "Эмоции и состояния",
            "url": "/lenta/category/emotions/"
        },
        {
            "id": "everyday-life",
            "name": "Повседневная жизнь",
            "url": "/lenta/category/everyday-life/"
        },
        {
            "id": "meditation",
            "name": "Медитация и практики",
            "url": "/lenta/category/meditation/"
        },
        {
            "id": "self-knowledge",
            "name": "Самопознание",
            "url": "/lenta/category/self-knowledge/"
        },
        {
            "id": "compassion",
            "name": "Отношения и сострадание",
            "url": "/lenta/category/compassion/"
        },
        {
            "id": "time-and-change",
            "name": "Время и перемены",
            "url": "/lenta/category/time-and-change/"
        }
    ],
    "posts": [
        {
            "id": "pause-daily-moment-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "11.09.2026, 09:30",
            "publishedAtISO": "2026-09-11T09:30:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "meditation"
            ],
            "text": "Есть вещи, которые ты делаешь каждый день.\n\nЧистишь зубы. Завариваешь чай. Смотришь в окно.\n\nЧто, если один из этих моментов сделать осознанным?\n\nНе торопясь. Просто замечая.\n\nПауза не требует времени. Она требует внимания.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-before-reaction-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "10.09.2026, 18:45",
            "publishedAtISO": "2026-09-10T18:45:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "emotions",
                "awareness",
                "meditation",
                "compassion"
            ],
            "text": "Когда что-то идёт не так, не спеши реагировать.\n\nСделай вдох.\n\nПобудь с этим моментом несколько секунд… или минут.\n\nПорой паузы достаточно, чтобы увидеть ситуацию с другой стороны.\n\nВажно помнить: мы не можем контролировать то, что с нами происходит.\n\nНо можем выбирать, как на это реагировать.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-fear-of-stopping-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "10.09.2026, 08:20",
            "publishedAtISO": "2026-09-10T08:20:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "time-and-change"
            ],
            "text": "Мы боимся остановиться.\n\nПотому что кажется: если остановлюсь — отстану.\n\nНо жизнь — не только про движение.\n\nЗдесь не нужно постоянно кого-то обгонять.\n\nЧтобы почувствовать жизнь, иногда нужно остановиться.\n\nПауза — просто напоминает об этом.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-ordinary-life-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "09.09.2026, 12:52",
            "publishedAtISO": "2026-09-09T12:52:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "time-and-change"
            ],
            "text": "Большая часть жизни — это не путешествия, праздники и важные события.\n\nЭто обычный вторник.\n\nДорога домой. Ужин. Разговор с близким. Вечер за окном.\n\nМы часто ждём чего-то особенного, чтобы почувствовать, что жизнь происходит.\n\nНо, может быть, самое важное — научиться замечать её в самом обычном.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-day-feelings-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "08.09.2026, 19:10",
            "publishedAtISO": "2026-09-08T19:10:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "emotions",
                "awareness"
            ],
            "text": "Мы привыкли оценивать день по результатам.\n\nСделал — хороший день. Не сделал — плохой.\n\nНо что, если спросить иначе: «Как я себя чувствовал сегодня?»\n\nПауза — это про то, как ты прожил день, а не только о том, что успел.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-thought-cycle-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "07.09.2026, 16:40",
            "publishedAtISO": "2026-09-07T16:40:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Бывает, одна мысль цепляется за тебя и не отпускает.\n\nТы возвращаешься к ней снова и снова.\n\nК тому, что произошло. К тому, что мог сказать. К тому, что нужно было сделать иначе.\n\nИ постепенно всё внимание оказывается там — в прошлом, в разговорах, в мыслях.\n\nА жизнь продолжает происходить прямо рядом.\n\nИ ты её не замечаешь.\n\nЕсли сегодня поймаешь себя в этом круговороте мыслей — не пытайся их остановить.\n\nПросто заметь: я сейчас снова живу в своей голове.\n\nИ верни внимание туда, где ты находишься.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-accept-state-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "06.09.2026, 21:05",
            "publishedAtISO": "2026-09-06T21:05:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "emotions",
                "awareness",
                "self-knowledge"
            ],
            "text": "Не нужно убегать от того, что ты чувствуешь.\n\nЕсли сегодня внутри напряжение или тревога — не спеши бороться с ним.\n\nОстановись на пару минут.\n\nОбрати внимание на себя, на свои ощущения.\n\nИ просто скажи себе: «Да. Сейчас это так.»\n\nИ, возможно, когда ты признаешь это состояние, оно начнёт понемногу отпускать.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-window-evening-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "05.09.2026, 20:30",
            "publishedAtISO": "2026-09-05T20:30:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "meditation"
            ],
            "text": "Сегодня вечером просто посиди у окна.\n\nБез цели. Без телефона.\n\nПосмотри на небо. Заметь, как меняется свет. Как всё понемногу затихает.\n\nНикуда не спеши.\n\nПозволь этому моменту просто быть.\n\nПауза.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-breathing-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "04.09.2026, 14:25",
            "publishedAtISO": "2026-09-04T14:25:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "awareness",
                "meditation"
            ],
            "text": "Уделите себе всего 2 минуты прямо сейчас. Сделайте глубокий вдох, почувствуйте опору под ногами и просто побудьте в этом моменте. Вы делаете достаточно. ✨",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "pause-evening-01",
            "source": "pause",
            "authorId": "pause",
            "author": "ПАУЗА.",
            "authorUrl": "/lenta/",
            "publishedAt": "03.09.2026, 20:15",
            "publishedAtISO": "2026-09-03T20:15:00+03:00",
            "avatar": "/assets/images/pause-avatar.png",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "meditation"
            ],
            "text": "Иногда лучший способ продолжить день — ненадолго остановиться. Закройте глаза, расслабьте плечи и сделайте три спокойных вдоха.",
            "citation": null,
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-silence-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "31.08.2026, 18:10",
            "publishedAtISO": "2026-08-31T18:10:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "awareness"
            ],
            "text": "Кто много говорит, тот часто терпит неудачу; потому лучше всего соблюдать средину.",
            "citation": {
                "title": "Тао-Те-Кинг, глава V",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-water-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "30.08.2026, 12:45",
            "publishedAtISO": "2026-08-30T12:45:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "time-and-change"
            ],
            "text": "Высшая добродетель похожа на воду. Вода, давая всем существам обильную пользу, не сопротивляется ничему.",
            "citation": {
                "title": "Тао-Те-Кинг, глава VIII",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-senses-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "29.08.2026, 17:20",
            "publishedAtISO": "2026-08-29T17:20:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "awareness"
            ],
            "text": "Пять цветов ослепляют человека. Пять звуков оглушают его. Пять вкусов пресыщают его.",
            "citation": {
                "title": "Тао-Те-Кинг, глава XII",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-stillness-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "28.08.2026, 09:15",
            "publishedAtISO": "2026-08-28T09:15:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "emotions",
                "time-and-change"
            ],
            "text": "Когда пустота будет доведена до последнего предела, то будет глубочайший покой.",
            "citation": {
                "title": "Тао-Те-Кинг, глава XVI",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-attention-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "27.08.2026, 20:05",
            "publishedAtISO": "2026-08-27T20:05:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "everyday-life"
            ],
            "text": "Тишина господствует над движением. Хотя мудрец бывает занят целый день, но относится к своим делам внимательно и с большей осторожностью.",
            "citation": {
                "title": "Тао-Те-Кинг, глава XXVI",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-present-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "26.08.2026, 19:25",
            "publishedAtISO": "2026-08-26T19:25:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "time-and-change"
            ],
            "text": "Мы только оттого мучаемся прошедшим и портим себе будущее, что мало заняты настоящим. Прошедшее было, будущего нет, есть только одно настоящее.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/"
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-minute-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "25.08.2026, 13:05",
            "publishedAtISO": "2026-08-25T13:05:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "time-and-change"
            ],
            "text": "Всё неважно, кроме того, что мы делаем в настоящую минуту.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/"
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-past-future-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "24.08.2026, 18:30",
            "publishedAtISO": "2026-08-24T18:30:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "emotions",
                "time-and-change"
            ],
            "text": "Как только ушел в прошедшее и будущее, так ушел от настоящей жизни, и от этого тотчас же сиротливо, несвободно, одиноко.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/"
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-most-important-time-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "23.08.2026, 10:40",
            "publishedAtISO": "2026-08-23T10:40:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "time-and-change"
            ],
            "text": "Время же самое важное — одно настоящее, потому что в нем одном ты властен над собою.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/"
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-love-now-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "22.08.2026, 21:10",
            "publishedAtISO": "2026-08-22T21:10:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "everyday-life",
                "emotions",
                "compassion",
                "time-and-change"
            ],
            "text": "Главное дело в жизни — любовь. А любить нельзя ни в прошедшем, ни в будущем. Любить можно только в настоящем, сейчас, сию минуту.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/"
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-nature-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "21.08.2026, 16:20",
            "publishedAtISO": "2026-08-21T16:20:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "meditation"
            ],
            "text": "Чтобы по-настоящему соединиться с природой, нужно присутствовать в ней полностью.",
            "citation": {
                "title": "Doorways into Presence",
                "url": "https://teachings.eckharttolle.com/doorways-into-presence-v3/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-future-foundation-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "20.08.2026, 11:55",
            "publishedAtISO": "2026-08-20T11:55:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "time-and-change"
            ],
            "text": "Основа так называемого будущего всегда находится в настоящем моменте.",
            "citation": {
                "title": "Doorways into Presence",
                "url": "https://teachings.eckharttolle.com/doorways-into-presence-v3/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-meditation-state-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "19.08.2026, 18:05",
            "publishedAtISO": "2026-08-19T18:05:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "meditation"
            ],
            "text": "Цель медитации — чтобы со временем она стала вашим обычным состоянием сознания.",
            "citation": {
                "title": "Essential Meditations with Eckhart Tolle",
                "url": "https://shop.eckharttolle.com/products/essential-meditations-with-eckhart-tolle",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-awareness-key-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "18.08.2026, 09:35",
            "publishedAtISO": "2026-08-18T09:35:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Ключ — в вашей осознанности.",
            "citation": {
                "title": "Eckhart on Low Self-Esteem and Anxiety",
                "url": "https://eckharttolle.com/eckhart-on-low-self-esteem-and-anxiety/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-this-moment-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "17.08.2026, 20:45",
            "publishedAtISO": "2026-08-17T20:45:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "time-and-change"
            ],
            "text": "Этот момент — вот что имеет значение.",
            "citation": {
                "title": "Eckhart on Low Self-Esteem and Anxiety",
                "url": "https://eckharttolle.com/eckhart-on-low-self-esteem-and-anxiety/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-days-nights-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "16.08.2026, 17:50",
            "publishedAtISO": "2026-08-16T17:50:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "time-and-change"
            ],
            "text": "И ночи сменялися днями до нас, о мой друг дорогой. И звезды свершали всё так же свой круг, предрешенный судьбой.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-world-continues-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "15.08.2026, 12:20",
            "publishedAtISO": "2026-08-15T12:20:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "everyday-life",
                "time-and-change"
            ],
            "text": "Мы умрем, а мир наш будет в небе странствовать всегда. Мы не жили во Вселенной — мир вращался и тогда.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-one-moment-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "14.08.2026, 19:40",
            "publishedAtISO": "2026-08-14T19:40:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "awareness",
                "time-and-change"
            ],
            "text": "Познавай же сладость, краткой жизни радость, в мимолетный час. Жизни всей значенье — только дуновенье, только миг для нас.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-two-days-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "13.08.2026, 10:10",
            "publishedAtISO": "2026-08-13T10:10:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "time-and-change"
            ],
            "text": "Есть в жизни два ничтожных дня: день, ставший мне воспоминаньем, и — не наставший для меня.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-drop-sea-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "12.08.2026, 21:15",
            "publishedAtISO": "2026-08-12T21:15:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "emotions",
                "everyday-life",
                "time-and-change"
            ],
            "text": "Не плачь! Я везде во Вселенной питаю озера и реки; ты после разлуки мгновенной вновь будешь со мною навеки.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод, опубликованный в открытом источнике и перешедший в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-happiness-mind-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "11.08.2026, 18:35",
            "publishedAtISO": "2026-08-11T18:35:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "emotions",
                "awareness",
                "compassion"
            ],
            "text": "Именно ум определяет, счастливы ли мы на самом деле.",
            "citation": {
                "title": "Teaching the Eight Verses for Training the Mind in Prague",
                "url": "https://www.dalailama.com/news/2013/teaching-the-eight-verses-for-training-the-mind-in-prague",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-relaxed-mind-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "10.08.2026, 12:05",
            "publishedAtISO": "2026-08-10T12:05:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "compassion"
            ],
            "text": "Подлинная бодхичитта приносит чувство свободы и глубокого расслабления — с этого начинается преобразование ума.",
            "citation": {
                "title": "Eight Verses for Training the Mind",
                "url": "https://www.dalailama.com/news/2014/eight-verses-for-training-the-mind",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-peace-of-mind-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "09.08.2026, 17:45",
            "publishedAtISO": "2026-08-09T17:45:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "emotions",
                "compassion"
            ],
            "text": "Мир возможен только тогда, когда отдельные люди обретают душевное спокойствие.",
            "citation": {
                "title": "Eight Verses for Training the Mind",
                "url": "https://www.dalailama.com/news/2018/eight-verses-for-training-the-mind",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-train-mind-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "08.08.2026, 09:50",
            "publishedAtISO": "2026-08-08T09:50:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "awareness"
            ],
            "text": "Тренировка ума действительно меняет многое.",
            "citation": {
                "title": "Eight Verses for Training the Mind",
                "url": "https://www.dalailama.com/news/2018/eight-verses-for-training-the-mind",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-attend-mind-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "07.08.2026, 20:20",
            "publishedAtISO": "2026-08-07T20:20:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "awareness",
                "compassion"
            ],
            "text": "Меньше следуйте за увиденным и услышанным; больше внимания уделяйте своему уму.",
            "citation": {
                "title": "A Message of Hope from the Dalai Lama",
                "url": "https://www.dalailama.com/messages/transcripts-and-interviews/a-message-of-hope-from-the-dalai-lama",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-awareness-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "02.09.2026, 18:40",
            "publishedAtISO": "2026-09-02T18:40:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "meditation"
            ],
            "text": "Бессознательное можно преобразить только осознанностью.",
            "citation": {
                "title": "Awareness Is Mindfulness",
                "url": "https://shop.osho.com/en/awareness-is-mindfulness",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-everyday-meditation-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "06.08.2026, 18:30",
            "publishedAtISO": "2026-08-06T18:30:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "meditation"
            ],
            "text": "Если сохранять бдительность, любое действие становится медитацией.",
            "citation": {
                "title": "Healing through Meditation",
                "url": "https://booking.osho.com/meditation-sessions/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-witnessing-beginning-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "05.08.2026, 12:10",
            "publishedAtISO": "2026-08-05T12:10:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "meditation",
                "self-knowledge"
            ],
            "text": "Свидетельствование — начало медитации; безмыслие — её завершение.",
            "citation": {
                "title": "The Mind",
                "url": "https://oshomedia.blog.osho.com/2012/03/osho-the-mind/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-pure-witnessing-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "04.08.2026, 20:05",
            "publishedAtISO": "2026-08-04T20:05:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "meditation",
                "self-knowledge"
            ],
            "text": "Чистое свидетельствование не превращает переживание в оценку или мысль.",
            "citation": {
                "title": "Witnessing Is the Very Essence of Zen",
                "url": "https://shop.osho.com/en/witnessing-is-the-very-essence-of-zen",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-thoughts-clouds-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "03.08.2026, 15:45",
            "publishedAtISO": "2026-08-03T15:45:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "meditation"
            ],
            "text": "Позвольте мыслям двигаться, словно облака, и просто наблюдайте.",
            "citation": {
                "title": "Witnessing",
                "url": "https://shop.osho.com/it/witnessing",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-double-awareness-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "02.08.2026, 10:20",
            "publishedAtISO": "2026-08-02T10:20:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "meditation",
                "self-knowledge"
            ],
            "text": "Видеть дерево и одновременно осознавать видящего — значит свидетельствовать.",
            "citation": {
                "title": "Yoga: The Supreme Science",
                "url": "https://shop.osho.com/ko/yoga-the-supreme-science",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-awareness-freedom-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "01.08.2026, 19:25",
            "publishedAtISO": "2026-08-01T19:25:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Осознанность помогает быть собранным, самостоятельным и свободным.",
            "citation": {
                "title": "Awareness",
                "url": "https://shop.osho.com/en/international-osho-books/awareness-the-key-to-living-in-balance",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-clear-awareness-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "31.07.2026, 13:15",
            "publishedAtISO": "2026-07-31T13:15:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "meditation"
            ],
            "text": "Когда мысли стихают, остаётся ясная осознанность.",
            "citation": {
                "title": "Mindfulness in the Modern World",
                "url": "https://shop.osho.com/en/osho-ebooks/meditation-mindfulness",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-right-now-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "30.07.2026, 21:10",
            "publishedAtISO": "2026-07-30T21:10:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "meditation"
            ],
            "text": "Имеет значение одно: прямо сейчас вы есть.",
            "citation": {
                "title": "Meditation: The First and Last Freedom",
                "url": "https://shop.osho.com/en/meditation-the-first-and-last-freedom",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "osho-mind-meditation-01",
            "source": "author",
            "authorId": "osho",
            "author": "Ошо",
            "authorUrl": "/lenta/osho/",
            "publishedAt": "29.07.2026, 09:40",
            "publishedAtISO": "2026-07-29T09:40:00+03:00",
            "avatar": "/assets/images/osho-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "meditation"
            ],
            "text": "Ум разделяет, медитация соединяет.",
            "citation": {
                "title": "Meditation",
                "url": "https://booking.osho.com/topic/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-mind-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "01.09.2026, 11:30",
            "publishedAtISO": "2026-09-01T11:30:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Мысли предшествуют словам и поступкам; ими формируется наш опыт.",
            "citation": {
                "title": "Дхаммапада, строфы 1–2",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-heedfulness-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "28.07.2026, 18:20",
            "publishedAtISO": "2026-07-28T18:20:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "awareness",
                "meditation"
            ],
            "text": "Внимательность — путь к бессмертному; беспечность — путь к смерти.",
            "citation": {
                "title": "Дхаммапада, строфа 21",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-straighten-mind-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "27.07.2026, 12:35",
            "publishedAtISO": "2026-07-27T12:35:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "meditation",
                "self-knowledge"
            ],
            "text": "Мудрый выпрямляет беспокойный ум, как мастер выпрямляет стрелу.",
            "citation": {
                "title": "Дхаммапада, строфа 33",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-own-actions-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "26.07.2026, 20:15",
            "publishedAtISO": "2026-07-26T20:15:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "self-knowledge"
            ],
            "text": "Не ищи ошибок других; смотри на собственные дела — сделанные и несделанные.",
            "citation": {
                "title": "Дхаммапада, строфа 50",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-guide-yourself-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "25.07.2026, 10:50",
            "publishedAtISO": "2026-07-25T10:50:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "awareness",
                "meditation"
            ],
            "text": "Как орошатели направляют воду, так мудрые направляют самих себя.",
            "citation": {
                "title": "Дхаммапада, строфа 80",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-conquer-self-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "24.07.2026, 17:05",
            "publishedAtISO": "2026-07-24T17:05:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Победивший самого себя сильнее победившего тысячу воинов.",
            "citation": {
                "title": "Дхаммапада, строфа 103",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-nonviolence-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "23.07.2026, 09:25",
            "publishedAtISO": "2026-07-23T09:25:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "emotions",
                "everyday-life",
                "compassion"
            ],
            "text": "Все боятся насилия и смерти; видя в другом себя, не причиняй вреда.",
            "citation": {
                "title": "Дхаммапада, строфы 129–130",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-own-refuge-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "22.07.2026, 19:55",
            "publishedAtISO": "2026-07-22T19:55:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Сам человек — своё убежище. Кто ещё может быть ему убежищем?",
            "citation": {
                "title": "Дхаммапада, строфа 160",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-purify-mind-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "21.07.2026, 14:10",
            "publishedAtISO": "2026-07-21T14:10:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "meditation"
            ],
            "text": "Не делать зла, взращивать добро и очищать ум — учение пробуждённых.",
            "citation": {
                "title": "Дхаммапада, строфа 183",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "buddha-health-contentment-01",
            "source": "author",
            "authorId": "buddha",
            "author": "Будда",
            "authorUrl": "/lenta/buddha/",
            "publishedAt": "20.07.2026, 08:45",
            "publishedAtISO": "2026-07-20T08:45:00+03:00",
            "avatar": "/assets/images/budda-avatar.png",
            "categoryIds": [
                "everyday-life",
                "emotions",
                "compassion"
            ],
            "text": "Здоровье — величайший дар, довольство — величайшее богатство.",
            "citation": {
                "title": "Дхаммапада, строфа 204",
                "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html",
                "note": "Редакционный перевод с английского перевода Ф. Макса Мюллера."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-know-yourself-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "19.07.2026, 18:10",
            "publishedAtISO": "2026-07-19T18:10:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "self-knowledge"
            ],
            "text": "Знающий людей разумен; знающий себя просветлён.",
            "citation": {
                "title": "Тао-Те-Кинг, глава XXXIII",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод А. Конисси, опубликованный в открытом источнике."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-conquer-yourself-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "18.07.2026, 12:40",
            "publishedAtISO": "2026-07-18T12:40:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Побеждающий других силён; побеждающий себя могуществен.",
            "citation": {
                "title": "Тао-Те-Кинг, глава XXXIII",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод А. Конисси, опубликованный в открытом источнике."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-contentment-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "17.07.2026, 20:20",
            "publishedAtISO": "2026-07-17T20:20:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "everyday-life",
                "emotions",
                "time-and-change"
            ],
            "text": "Кто умеет довольствоваться, тот богат.",
            "citation": {
                "title": "Тао-Те-Кинг, глава XXXIII",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод А. Конисси, опубликованный в открытом источнике."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-without-leaving-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "16.07.2026, 09:35",
            "publishedAtISO": "2026-07-16T09:35:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "everyday-life"
            ],
            "text": "Не выходя со двора, можно познать мир; не выглядывая из окна, увидеть путь неба.",
            "citation": {
                "title": "Тао-Те-Кинг, глава XLVII",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод А. Конисси, опубликованный в открытом источнике."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "lao-tzu-knowing-silence-01",
            "source": "author",
            "authorId": "lao-tzu",
            "author": "Лао-цзы",
            "authorUrl": "/lenta/lao-tzu/",
            "publishedAt": "15.07.2026, 17:15",
            "publishedAtISO": "2026-07-15T17:15:00+03:00",
            "avatar": "/assets/images/laozi-avatar.jpeg",
            "categoryIds": [
                "awareness"
            ],
            "text": "Кто знает — не говорит; кто говорит — не знает.",
            "citation": {
                "title": "Тао-Те-Кинг, глава LVI",
                "url": "https://ru.wikisource.org/wiki/Тао-Те-Кинг_(Лао-цзы;_Конисси)/Тао-Те-Кинг",
                "note": "Перевод А. Конисси, опубликованный в открытом источнике."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-remember-present-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "14.07.2026, 19:30",
            "publishedAtISO": "2026-07-14T19:30:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "time-and-change"
            ],
            "text": "Много зла избегнет человек, если будет помнить: важно в жизни только настоящее.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/",
                "note": "Текст опубликован в полном собрании сочинений на портале tolstoy.ru."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-time-does-not-move-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "13.07.2026, 11:50",
            "publishedAtISO": "2026-07-13T11:50:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "time-and-change"
            ],
            "text": "Мы говорим, что идёт время. Это неверно. Идём мы, а не время.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/",
                "note": "Текст опубликован в полном собрании сочинений на портале tolstoy.ru."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-time-around-us-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "12.07.2026, 18:05",
            "publishedAtISO": "2026-07-12T18:05:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "awareness",
                "emotions",
                "time-and-change"
            ],
            "text": "Время за нами, время перед нами, при нас его нет.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/",
                "note": "Текст опубликован в полном собрании сочинений на портале tolstoy.ru."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-best-this-minute-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "11.07.2026, 10:25",
            "publishedAtISO": "2026-07-11T10:25:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "time-and-change"
            ],
            "text": "Во всякую минуту жизни ты можешь сделать самое лучшее, что только можешь.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/",
                "note": "Текст опубликован в полном собрании сочинений на портале tolstoy.ru."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolstoy-work-on-thoughts-01",
            "source": "author",
            "authorId": "leo-tolstoy",
            "author": "Лев Толстой",
            "authorUrl": "/lenta/leo-tolstoy/",
            "publishedAt": "10.07.2026, 20:40",
            "publishedAtISO": "2026-07-10T20:40:00+03:00",
            "avatar": "/assets/images/tolstoy-avatar.jpeg",
            "categoryIds": [
                "emotions",
                "awareness",
                "self-knowledge"
            ],
            "text": "Наша жизнь бывает хороша или дурна от того, каковы наши мысли. А мыслями можно управлять.",
            "citation": {
                "title": "Л. Н. Толстой, «Путь жизни»",
                "url": "https://tolstoy.ru/online/90/45/",
                "note": "Текст опубликован в полном собрании сочинений на портале tolstoy.ru."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-friend-present-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "09.07.2026, 18:55",
            "publishedAtISO": "2026-07-09T18:55:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "time-and-change"
            ],
            "text": "Сделайте настоящий момент своим другом, уважая его вместо отрицания.",
            "citation": {
                "title": "The Power of Presence",
                "url": "https://teachings.eckharttolle.com/the-power-of-presence/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-portals-stillness-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "08.07.2026, 12:20",
            "publishedAtISO": "2026-07-08T12:20:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "meditation"
            ],
            "text": "Восприятие, дыхание и ощущение внутреннего тела могут стать входами в тишину.",
            "citation": {
                "title": "Bringing Stillness into Everyday Life",
                "url": "https://teachings.eckharttolle.com/entering-the-now-free-gift/",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-power-awareness-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "07.07.2026, 20:10",
            "publishedAtISO": "2026-07-07T20:10:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "self-knowledge"
            ],
            "text": "Осознанность — сила, скрытая в настоящем моменте.",
            "citation": {
                "title": "School of Awakening Workbook",
                "url": "https://members.eckharttolle.com/wp-content/uploads/2025/12/SOA_Workbook_25-26-digital.pdf",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-return-now-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "06.07.2026, 09:45",
            "publishedAtISO": "2026-07-06T09:45:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "meditation",
                "time-and-change"
            ],
            "text": "Не теряйте себя в прошлом и будущем; возвращайтесь в настоящий момент.",
            "citation": {
                "title": "The Spiritual Guide to Conscious Manifestation",
                "url": "https://members.eckharttolle.com/wp-content/uploads/2024/07/WC07063Y_OPEN-02_Tolle_Eng.pdf",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "tolle-only-present-01",
            "source": "author",
            "authorId": "eckhart-tolle",
            "author": "Экхарт Толле",
            "authorUrl": "/lenta/eckhart-tolle/",
            "publishedAt": "05.07.2026, 17:35",
            "publishedAtISO": "2026-07-05T17:35:00+03:00",
            "avatar": "/assets/images/tolle-avatar.jpg",
            "categoryIds": [
                "awareness",
                "self-knowledge",
                "time-and-change"
            ],
            "text": "Всё, что у нас по-настоящему есть, — настоящий момент.",
            "citation": {
                "title": "In the Presence of a Great Mystery",
                "url": "https://shop.eckharttolle.com/products/in-the-presence-of-a-great-mystery",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-life-instant-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "04.07.2026, 19:05",
            "publishedAtISO": "2026-07-04T19:05:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "emotions",
                "everyday-life",
                "time-and-change"
            ],
            "text": "Я мучился жизнью мгновенной, но благ не познал никаких.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод опубликован в Викитеке и перешёл в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-heaven-chariot-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "03.07.2026, 11:15",
            "publishedAtISO": "2026-07-03T11:15:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "emotions",
                "time-and-change"
            ],
            "text": "К тебе, о Неба Колесница, несётся плач и горький стон.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод опубликован в Викитеке и перешёл в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-world-is-small-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "02.07.2026, 20:25",
            "publishedAtISO": "2026-07-02T20:25:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "emotions",
                "awareness",
                "time-and-change"
            ],
            "text": "Ничтожен мир, и всё ничтожно, что в жалком мире ты познал.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод опубликован в Викитеке и перешёл в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-carefree-days-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "01.07.2026, 09:30",
            "publishedAtISO": "2026-07-01T09:30:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "time-and-change"
            ],
            "text": "Промчались жизни беззаботной дни, роком данные в удел.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод опубликован в Викитеке и перешёл в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "khayyam-step-softly-01",
            "source": "author",
            "authorId": "omar-khayyam",
            "author": "Омар Хайям",
            "authorUrl": "/lenta/omar-khayyam/",
            "publishedAt": "30.06.2026, 18:45",
            "publishedAtISO": "2026-06-30T18:45:00+03:00",
            "avatar": "/assets/images/khayyam-avatar.jpg",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "time-and-change"
            ],
            "text": "Ах, тише! Ступай осторожней на пыль под ногою твоей.",
            "citation": {
                "title": "Омар Хайям, «Рубаи», перевод А. Умова",
                "url": "https://ru.wikisource.org/wiki/Рубаи_(Хайям;_Умов)",
                "note": "Перевод опубликован в Викитеке и перешёл в общественное достояние."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-inner-tranquility-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "29.06.2026, 12:05",
            "publishedAtISO": "2026-06-29T12:05:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "emotions",
                "awareness",
                "compassion"
            ],
            "text": "Глубочайшее внутреннее спокойствие рождается из любви и сострадания.",
            "citation": {
                "title": "Compassion",
                "url": "https://www.dalailama.com/messages/compassion-and-human-values/compassion",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-care-for-others-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "28.06.2026, 19:20",
            "publishedAtISO": "2026-06-28T19:20:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "emotions",
                "everyday-life",
                "compassion"
            ],
            "text": "Забота о счастье других естественно успокаивает наш ум.",
            "citation": {
                "title": "Compassion",
                "url": "https://www.dalailama.com/messages/compassion-and-human-values/compassion",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-inner-strength-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "27.06.2026, 10:40",
            "publishedAtISO": "2026-06-27T10:40:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "emotions",
                "compassion"
            ],
            "text": "Сострадание даёт внутреннюю силу, уменьшает страх и сохраняет спокойствие ума.",
            "citation": {
                "title": "Compassion as the Source of Happiness",
                "url": "https://www.dalailama.com/messages/compassion-and-human-values/compassion-as-the-source-of-happiness",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-happy-life-within-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "26.06.2026, 17:50",
            "publishedAtISO": "2026-06-26T17:50:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "compassion"
            ],
            "text": "Источник счастливой жизни находится внутри нас.",
            "citation": {
                "title": "Why Leaders Should Be Mindful, Selfless and Compassionate",
                "url": "https://www.dalailama.com/messages/compassion-and-human-values/why-leaders-should-be-mindful-selfless-and-compassionate",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "dalai-transform-mind-01",
            "source": "author",
            "authorId": "dalai-lama",
            "author": "Далай-лама",
            "authorUrl": "/lenta/dalai-lama/",
            "publishedAt": "25.06.2026, 09:15",
            "publishedAtISO": "2026-06-25T09:15:00+03:00",
            "avatar": "/assets/images/dalai-lama-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "compassion"
            ],
            "text": "Одно из удивительных свойств ума — его можно преобразить.",
            "citation": {
                "title": "Countering Stress and Depression",
                "url": "https://www.dalailama.com/messages/compassion-and-human-values/countering-stress-and-depression",
                "note": "Перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-remember-yourself-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "24.06.2026, 18:30",
            "publishedAtISO": "2026-06-24T18:30:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "self-knowledge"
            ],
            "text": "Всегда и везде помни себя.",
            "citation": {
                "title": "Gurdjieff’s Aphorisms",
                "url": "https://www.gurdjieff.org/aphorisms.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-ability-to-do-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "23.06.2026, 12:15",
            "publishedAtISO": "2026-06-23T12:15:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "self-knowledge"
            ],
            "text": "Высшее, чего может достичь человек, — способность делать.",
            "citation": {
                "title": "Gurdjieff’s Aphorisms",
                "url": "https://www.gurdjieff.org/aphorisms.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-struggle-yourself-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "22.06.2026, 20:05",
            "publishedAtISO": "2026-06-22T20:05:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Помни о необходимости бороться прежде всего с самим собой.",
            "citation": {
                "title": "Gurdjieff’s Aphorisms",
                "url": "https://www.gurdjieff.org/aphorisms.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-conditions-work-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "21.06.2026, 09:35",
            "publishedAtISO": "2026-06-21T09:35:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "everyday-life",
                "awareness",
                "self-knowledge"
            ],
            "text": "Чем труднее условия жизни, тем плодотворнее может стать работа — если помнить о ней.",
            "citation": {
                "title": "Gurdjieff’s Aphorisms",
                "url": "https://www.gurdjieff.org/aphorisms.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-no-attention-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "20.06.2026, 17:20",
            "publishedAtISO": "2026-06-20T17:20:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "self-knowledge"
            ],
            "text": "В людях нет устойчивого внимания.",
            "citation": {
                "title": "A Three Centered Attention",
                "url": "https://www.gurdjieff.org/gurdjieff7.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-whole-self-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "19.06.2026, 11:10",
            "publishedAtISO": "2026-06-19T11:10:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Помнить себя — значит включать чувства, тело и ощущения, а не одну мысль.",
            "citation": {
                "title": "A Three Centered Attention",
                "url": "https://www.gurdjieff.org/gurdjieff7.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-direction-attention-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "18.06.2026, 19:45",
            "publishedAtISO": "2026-06-18T19:45:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "self-knowledge"
            ],
            "text": "Вся внутренняя борьба сосредоточена в одном: в направлении внимания.",
            "citation": {
                "title": "Attention: Pupils",
                "url": "https://www.gurdjieff.org/attention-pupils.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-controlled-rest-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "17.06.2026, 10:25",
            "publishedAtISO": "2026-06-17T10:25:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "everyday-life",
                "self-knowledge"
            ],
            "text": "Желательно удерживать внимание столько, сколько можешь; даже отдых должен быть сознательным.",
            "citation": {
                "title": "Attention: Pupils",
                "url": "https://www.gurdjieff.org/attention-pupils.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-attention-indispensable-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "16.06.2026, 18:05",
            "publishedAtISO": "2026-06-16T18:05:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "self-knowledge"
            ],
            "text": "Внимание совершенно необходимо для любой внутренней работы.",
            "citation": {
                "title": "Attention Is Absolutely Indispensable",
                "url": "https://www.gurdjieff.org/daly3.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        },
        {
            "id": "gurdjieff-observe-associations-01",
            "source": "author",
            "authorId": "gurdjieff",
            "author": "Георгий Гурджиев",
            "authorUrl": "/lenta/gurdjieff/",
            "publishedAt": "15.06.2026, 09:50",
            "publishedAtISO": "2026-06-15T09:50:00+03:00",
            "avatar": "/assets/images/gurdjieff-avatar.jpg",
            "categoryIds": [
                "awareness",
                "emotions",
                "self-knowledge"
            ],
            "text": "Работа внимания прерывает поток неконтролируемых ассоциаций, которые растрачивают жизненную энергию.",
            "citation": {
                "title": "Attention Is Absolutely Indispensable",
                "url": "https://www.gurdjieff.org/daly3.htm",
                "note": "Смысловой перевод редакции ПАУЗА с английского."
            },
            "likes": 0,
            "comments": 0
        }
    ]
};
