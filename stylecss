/* =========================
   DEFAULT LIGHT THEME
   ========================= */

:root {
    --background: #f4f7fb;
    --card: #ffffff;
    --text: #222222;
    --secondary-text: #666666;
    --primary: #4f46e5;
    --hero: #4f46e5;
    --button-text: #ffffff;
}


/* =========================
   DARK THEME
   ========================= */

.dark-theme {
    --background: #121212;
    --card: #1e1e1e;
    --text: #ffffff;
    --secondary-text: #bbbbbb;
    --primary: #8b5cf6;
    --hero: #18181b;
    --button-text: #ffffff;
}


/* =========================
   GENERAL
   ========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;

    background: var(--background);
    color: var(--text);

    transition: background 0.4s ease,
                color 0.4s ease;
}


/* =========================
   HERO
   ========================= */

.hero {
    background: var(--hero);
    color: white;

    padding: 80px 20px;
    text-align: center;

    transition: background 0.4s ease;
}

.tagline {
    font-size: 14px;
    letter-spacing: 3px;
    margin-bottom: 15px;
}

.hero h1 {
    font-size: 50px;
    margin-bottom: 15px;
}

.subtitle {
    font-size: 18px;
}


/* =========================
   THEME BUTTON
   ========================= */

#themeButton {
    margin-top: 25px;

    padding: 12px 22px;

    border: none;
    border-radius: 25px;

    background: white;
    color: var(--primary);

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.3s;
}

#themeButton:hover {
    transform: scale(1.05);
}


/* =========================
   MAIN
   ========================= */

main {
    max-width: 900px;

    margin: 40px auto;
    padding: 0 20px;
}


/* =========================
   CARDS
   ========================= */

.card {
    background: var(--card);

    padding: 30px;
    margin-bottom: 25px;

    border-radius: 15px;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

    transition:
        background 0.4s ease,
        color 0.4s ease;
}

.card h2 {
    color: var(--primary);
    margin-bottom: 20px;
}

.card p {
    color: var(--secondary-text);
    line-height: 1.7;
    margin-bottom: 15px;
}


/* =========================
   SKILLS
   ========================= */

.skills-list {
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.skills-list li {
    background: var(--primary);
    color: white;

    padding: 10px 18px;

    border-radius: 20px;
}


/* =========================
   PROJECTS
   ========================= */

.project-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.project-link {
    text-decoration: none;

    color: var(--text);

    padding: 18px;

    border: 1px solid #ddd;
    border-radius: 10px;

    display: flex;
    gap: 20px;

    transition: 0.3s;
}

.project-link:hover {
    background: var(--primary);
    color: white;

    transform: translateX(5px);
}


/* =========================
   FOOTER
   ========================= */

footer {
    text-align: center;

    padding: 30px;

    background: var(--hero);
    color: white;
}

footer p {
    margin: 5px;
}


/* =========================
   MOBILE
   ========================= */

@media (max-width: 600px) {

    .hero h1 {
        font-size: 36px;
    }

    .subtitle {
        font-size: 15px;
    }

    .card {
        padding: 22px;
    }
}
