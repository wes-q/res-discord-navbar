/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                tailwind: "url('./img/tailwind-whole.svg')",
                clock: "url('./img/clock.svg')",
            },
            transitionProperty: {
                spacing: "margin, padding",
            },
            colors: {
                primary: "#b6b6b6",
                secondary: "ececec",
                stella: "#1175ab",
            },
            fontFamily: {
                body: ["Nunito"],
                lugs: ["Lugrasimo"],
            },
            height: {
                3200: "3200px",
            },
        },
    },
    plugins: [],
};

//      --text-primary: #b6b6b6;
//      --text-secondary: #ececec;
//      --bg-primary: #23232e;
//      --bg-secondary: #141418;
//      --transition-speed: 600ms;
