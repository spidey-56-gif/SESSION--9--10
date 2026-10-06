/**
 * =========================================================
 * THEME SWITCHER
 * =========================================================
 */

(function () {

    "use strict";

    const STORAGE_KEY = "user-theme-preference";

    const root = document.documentElement;


    /* -----------------------------------------------------
       GET SAVED / SYSTEM THEME
    ----------------------------------------------------- */

    function getTheme() {

        const savedTheme =
            localStorage.getItem(STORAGE_KEY);


        // Only accept valid values
        if (
            savedTheme === "light" ||
            savedTheme === "dark"
        ) {
            return savedTheme;
        }


        // Otherwise use system preference
        return window
            .matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";
    }


    /* -----------------------------------------------------
       UPDATE ICON
    ----------------------------------------------------- */

    function updateIcon(theme) {

        const icon =
            document.getElementById("themeIcon");

        const button =
            document.getElementById("themeToggle");


        if (!icon || !button) {
            return;
        }


        if (theme === "dark") {

            // Dark is active → show sun
            icon.className =
                "fa-solid fa-sun";

            button.setAttribute(
                "aria-label",
                "Switch to light theme"
            );

            button.setAttribute(
                "title",
                "Switch to light theme"
            );

        } else {

            // Light is active → show moon
            icon.className =
                "fa-solid fa-moon";

            button.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );

            button.setAttribute(
                "title",
                "Switch to dark theme"
            );
        }

    }


    /* -----------------------------------------------------
       APPLY THEME
    ----------------------------------------------------- */

    function applyTheme(theme) {

        if (
            theme !== "light" &&
            theme !== "dark"
        ) {
            theme = "dark";
        }


        root.setAttribute(
            "data-theme",
            theme
        );


        localStorage.setItem(
            STORAGE_KEY,
            theme
        );


        updateIcon(theme);
    }


    /* -----------------------------------------------------
       TOGGLE THEME
    ----------------------------------------------------- */

    function toggleTheme() {

        const currentTheme =
            root.getAttribute("data-theme");


        const nextTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";


        applyTheme(nextTheme);


        console.log(
            "Theme switched to:",
            nextTheme
        );
    }


    /* -----------------------------------------------------
       INITIALIZE
    ----------------------------------------------------- */

    function initTheme() {

        const button =
            document.getElementById("themeToggle");


        // Apply initial theme
        applyTheme(getTheme());


        if (!button) {

            console.error(
                "Theme toggle button #themeToggle was not found."
            );

            return;
        }


        // Prevent duplicate handlers
        button.addEventListener(
            "click",
            toggleTheme
        );

    }


    /* -----------------------------------------------------
       DOM READY
    ----------------------------------------------------- */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initTheme,
            { once: true }
        );

    } else {

        initTheme();

    }

})();
