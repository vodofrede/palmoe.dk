const LANGUAGES = ["en-gb", "da-dk"];

const selected = select => select.options[select.selectedIndex];
const getCookie = key => (document.cookie.split("; ").findLast(c => c.startsWith(key)) ?? "=").split("=").reverse()[0];
const setCookie = (key, value) => (document.cookie = `${key}=${value}; path=/; SameSite=Strict;`);

function localize() {
    let currentLang = getCookie("lang");
    if (!currentLang) {
        setCookie("lang", LANGUAGES[0]);
        currentLang = LANGUAGES[0];
    }
    let langIndex = LANGUAGES.indexOf(currentLang) ?? 0;
    document.getElementById("lang").selectedIndex = langIndex;
    [...document.querySelectorAll("[lang]")].forEach(
        elem => (elem.hidden = elem.lang != currentLang && !elem.classList.contains("no-localize")),
    );
}

function setLocale(language) {
    setCookie("lang", language);
    localize();
}
