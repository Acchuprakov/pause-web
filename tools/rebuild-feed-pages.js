"use strict";


/* ==========================================================
   ОБНОВЛЕНИЕ SEO-КОПИЙ ПУБЛИКАЦИЙ В HTML

   После изменения js/feed-data.js выполните из корня проекта:

   node tools/rebuild-feed-pages.js

   Скрипт обновит карточки внутри всех страниц /lenta/.
   В браузере публикации всё равно создаёт основной script.js,
   а HTML-копии нужны поисковым системам и режиму без JavaScript.
   ========================================================== */

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");


const projectRoot = path.resolve(__dirname, "..");
const feedDataPath = path.join(projectRoot, "js", "feed-data.js");
const feedRoot = path.join(projectRoot, "lenta");


function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function loadFeedData() {

    const source = fs.readFileSync(feedDataPath, "utf8");
    const context = {
        window: {}
    };

    vm.runInNewContext(source, context, {
        filename: feedDataPath
    });

    return context.window.PAUSE_FEED_DATA;

}


function collectIndexPages(directory) {

    const result = [];

    fs.readdirSync(directory, { withFileTypes: true })
        .forEach(function (entry) {

            const entryPath = path.join(directory, entry.name);

            if (entry.isDirectory()) {
                result.push(...collectIndexPages(entryPath));
            }

            if (entry.isFile() && entry.name === "index.html") {
                result.push(entryPath);
            }

        });

    return result;

}


function getVisiblePosts(posts, authorId, categoryId) {

    return posts
        .filter(function (post) {

            const matchesAuthor =
                authorId === "all" ||
                post.authorId === authorId;

            const categories = Array.isArray(post.categoryIds)
                ? post.categoryIds
                : [];

            const matchesCategory =
                !categoryId ||
                categories.includes(categoryId);

            return matchesAuthor && matchesCategory;

        })
        .sort(function (firstPost, secondPost) {

            return Date.parse(secondPost.publishedAtISO) -
                Date.parse(firstPost.publishedAtISO);

        });

}


function createSourceMarkup(citation) {

    if (!citation || !citation.url) {
        return "";
    }

    const note = citation.note
        ? `\n                                <span class="post-source-note">${escapeHtml(citation.note)}</span>`
        : "";

    return `
                            <p class="post-source">
                                <a class="post-source-link" href="${escapeHtml(citation.url)}" target="_blank" rel="noopener noreferrer">Источник: ${escapeHtml(citation.title)}</a>${note}
                            </p>`;

}


function createCategoryTagsMarkup(post, categories) {

    const postCategoryIds = Array.isArray(post.categoryIds)
        ? post.categoryIds
        : [];

    const tags = postCategoryIds
        .map(function (categoryId) {

            const category = categories.find(function (item) {
                return item.id === categoryId;
            });

            if (!category) {
                return "";
            }

            return `<a class="post-tag" href="${escapeHtml(category.url)}">${escapeHtml(category.name)}</a>`;

        })
        .filter(Boolean)
        .join("\n                                ");

    if (!tags) {
        return "";
    }

    return `
                            <nav class="post-tags" aria-label="Категории публикации">
                                ${tags}
                            </nav>`;

}


function createPostMarkup(post, categories) {

    return `<article class="post-card" data-post-id="${escapeHtml(post.id)}">
                        <header class="post-author-header">
                            <span class="post-avatar" aria-hidden="true">
                                <img src="${escapeHtml(post.avatar)}" alt="">
                            </span>

                            <div class="post-author-meta">
                                <a class="post-author-name" href="${escapeHtml(post.authorUrl)}">${escapeHtml(post.author)}</a>
                                <time class="post-published-at" datetime="${escapeHtml(post.publishedAtISO)}">${escapeHtml(post.publishedAt)}</time>
                            </div>
                        </header>

                        <p class="post-text">${escapeHtml(post.text)}</p>${createSourceMarkup(post.citation)}${createCategoryTagsMarkup(post, categories)}
                    </article>`;

}


function createAuthorChipsMarkup(authors, activeAuthorId) {

    const links = [];

    authors.forEach(function (author, index) {

        const isActive = author.id === activeAuthorId;
        const activeAttributes = isActive
            ? " is-active\" aria-current=\"page"
            : "";

        links.push(
            `<a class="feed-author-chip${activeAttributes}" href="${escapeHtml(author.url)}">${escapeHtml(author.shortName)}</a>`
        );

        if (index === 0) {

            const isAllActive = activeAuthorId === "all";
            const allActiveAttributes = isAllActive
                ? " is-active\" aria-current=\"page"
                : "";

            links.push(
                `<a class="feed-author-chip${allActiveAttributes}" href="/lenta/all/">Все посты</a>`
            );

        }

    });

    return links.join("\n                    ");

}


function createCategoryOptionsMarkup(categories, activeCategoryId) {

    const allClass = activeCategoryId
        ? "feed-sidebar-option"
        : "feed-sidebar-option is-active";

    const links = [
        `<li><a class="${allClass}" href="/lenta/all/">Все категории</a></li>`
    ];

    categories.forEach(function (category) {

        const optionClass = category.id === activeCategoryId
            ? "feed-sidebar-option is-active"
            : "feed-sidebar-option";

        links.push(
            `<li><a class="${optionClass}" href="${escapeHtml(category.url)}">${escapeHtml(category.name)}</a></li>`
        );

    });

    return links.join("\n                            ");

}


function updatePage(pagePath, feedData) {

    let html = fs.readFileSync(pagePath, "utf8");

    const mainMatch = html.match(
        /<main class="feed-page" data-feed-author="([^"]+)" data-feed-category="([^"]*)">/
    );

    if (!mainMatch) {
        throw new Error(`Не найдены настройки Ленты: ${pagePath}`);
    }

    const visiblePosts = getVisiblePosts(
        feedData.posts,
        mainMatch[1],
        mainMatch[2]
    );

    const cards = visiblePosts
        .map(function (post) {
            return createPostMarkup(post, feedData.categories);
        })
        .join("\n\n                    ");

    const section = `<section class="feed-posts" aria-label="Публикации">
                        ${cards}
                    </section>`;

    html = html.replace(
        /<section class="feed-posts" aria-label="Публикации">[\s\S]*?<\/section>/,
        section
    );

    html = html.replace(
        /(<span class="feed-results-count">)\d+(<\/span>)/,
        `$1${visiblePosts.length}$2`
    );

    html = html.replace(
        /(<div class="feed-author-chips">)[\s\S]*?(<\/div>)/,
        `$1\n                    ${createAuthorChipsMarkup(feedData.authors, mainMatch[1])}\n                $2`
    );

    html = html.replace(
        /(<ul class="feed-sidebar-options">)[\s\S]*?(<\/ul>)/,
        `$1\n                            ${createCategoryOptionsMarkup(feedData.categories, mainMatch[2])}\n                        $2`
    );

    fs.writeFileSync(pagePath, html);

    return visiblePosts.length;

}


const feedData = loadFeedData();
const pages = collectIndexPages(feedRoot);

pages.forEach(function (pagePath) {

    const count = updatePage(pagePath, feedData);
    const relativePath = path.relative(projectRoot, pagePath);

    console.log(`${relativePath}: ${count}`);

});

console.log(`Обновлено страниц: ${pages.length}`);
