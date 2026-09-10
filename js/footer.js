"use strict";


/* ==========================================================
   ЕДИНЫЙ FOOTER ДЛЯ ВСЕХ СТРАНИЦ

   Чтобы изменить содержимое футера на всём сайте,
   достаточно отредактировать только этот файл.
   ========================================================== */

const footerSocialLinks = {
    telegram: "https://t.me/justpauseit",
    max: "https://max.ru/justpauseit",
    vk: "https://vk.ru/justpauseit",
    youtube: "https://www.youtube.com/@justpauseitru"
};


class SiteFooter extends HTMLElement {

    connectedCallback() {

        if (this.dataset.rendered === "true") {
            return;
        }

        const rootPath = this.dataset.root || ".";
        const homeHref = this.dataset.home || `${rootPath}/index.html`;
        const isFeedPage = this.hasAttribute("data-feed-page");

        const homeClass = isFeedPage
            ? " feed-home-link"
            : "";

        const fromRoot = function (path) {
            return `${rootPath}/${path}`;
        };

        const currentYear = new Date().getFullYear();

        this.dataset.rendered = "true";

        this.innerHTML = `
            <footer class="site-footer site-footer--with-mobile-nav">

                <div class="site-footer-container">

                    <div class="footer-grid">

                        <div class="footer-brand">

                            <a class="footer-brand-link${homeClass}" href="${homeHref}"
                                aria-label="ПАУЗА — главная">
                                <span class="footer-brand-mark" aria-hidden="true">П</span>
                                <span class="footer-brand-name">ПАУЗА</span>
                            </a>

                            <p class="footer-description">
                                Пространство для коротких пауз, внимания к себе
                                и осознанных практик.
                            </p>

                        </div>


                        <nav class="footer-column" aria-label="Разделы сайта">

                            <h2 class="footer-column-title">РАЗДЕЛЫ</h2>

                            <ul class="footer-links">
                                <li>
                                    <a class="footer-link${homeClass}" href="${homeHref}">
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a class="footer-link" href="${fromRoot("pages/lenta.html")}">
                                        Лента
                                    </a>
                                </li>
                                <li><a class="footer-link" href="${fromRoot("pause-plus/")}">Пауза+</a></li>
                                <li><a class="footer-link" href="${fromRoot("pause-plus/practicums/")}">Практикумы</a></li>
                                <li><a class="footer-link" href="${fromRoot("pause-plus/consultations/")}">Консультации</a></li>
                            </ul>

                        </nav>


                        <nav class="footer-column" aria-label="Юридические документы">

                            <h2 class="footer-column-title">ДОКУМЕНТЫ</h2>

                            <ul class="footer-links">
                                <li><a class="footer-link" href="${fromRoot("legal/offer/")}">Публичная оферта</a></li>
                                <li><a class="footer-link" href="${fromRoot("legal/privacy/")}">Политика обработки персональных данных</a></li>
                                <li><a class="footer-link" href="${fromRoot("legal/consent/")}">Согласие на обработку персональных данных</a></li>
                                <li><a class="footer-link" href="${fromRoot("legal/terms/")}">Пользовательское соглашение</a></li>
                                <li><a class="footer-link" href="${fromRoot("legal/refunds/")}">Правила возврата</a></li>
                            </ul>

                        </nav>


                        <nav class="footer-column" aria-label="Контактная информация">

                            <h2 class="footer-column-title">СВЯЗЬ</h2>

                            <ul class="footer-links">
                                <li>
                                    <a class="footer-link" href="${fromRoot("legal/offer/#contacts")}">
                                        Реквизиты и контакты
                                    </a>
                                </li>
                            </ul>


                            <div class="footer-socials" aria-label="Социальные сети">

                                <a class="footer-social-link" href="${footerSocialLinks.telegram}"
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label="ПАУЗА в Telegram" title="Telegram">
                                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.3-.07-.45-.52-.18L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.98-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.8c-.19.91-.74 1.13-1.5.7l-4.14-3.06-2 1.93c-.23.22-.41.4-.83.44z" />
                                    </svg>
                                </a>

                                <a class="footer-social-link" href="${footerSocialLinks.max}"
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label="ПАУЗА в MAX" title="MAX">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M5 17V7l7 7 7-7v10" stroke="currentColor" stroke-width="2.2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>

                                <a class="footer-social-link" href="${footerSocialLinks.vk}"
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label="ПАУЗА во ВКонтакте" title="ВКонтакте">
                                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12.04 17.3c-5.46 0-8.58-3.75-8.71-10h2.74c.09 4.59 2.11 6.53 3.71 6.93V7.3h2.58v3.96c1.58-.17 3.24-1.98 3.8-3.96h2.58c-.43 2.44-2.23 4.25-3.51 5 1.28.61 3.33 2.19 4.11 5H16.5c-.61-1.9-2.13-3.37-4.03-3.57v3.57z" />
                                    </svg>
                                </a>

                                <a class="footer-social-link" href="${footerSocialLinks.youtube}"
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label="ПАУЗА на YouTube" title="YouTube">
                                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M10 15.5v-7l6 3.5-6 3.5m11.58-8.69c-.23-.86-.91-1.54-1.77-1.77C18.25 4.62 12 4.62 12 4.62s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.37 2 12 2 12s0 3.63.42 5.19c.23.86.91 1.54 1.77 1.77 1.56.42 7.81.42 7.81.42s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.63 22 12 22 12s0-3.63-.42-5.19z" />
                                    </svg>
                                </a>

                            </div>

                        </nav>

                    </div>


                    <div class="footer-bottom">
                        <p class="footer-copyright">
                            © ${currentYear} ПАУЗА. Все права защищены.
                        </p>
                    </div>

                </div>

            </footer>
        `;

    }

}


if (!customElements.get("site-footer")) {
    customElements.define("site-footer", SiteFooter);
}
