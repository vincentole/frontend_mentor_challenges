module.exports = {
    purge: {
        content: ["./**/*.html"],
        safelist: ["opacity-0", "h-[64px]", "md:h-[52px]", "md:overflow-visible"],
    },
    mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                manrope: "'Manrope', sans-serif",
            },
            colors: {
                primary: {
                    veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
                    desaturatedDarkBlue: "hsl(214, 17%, 51%)",
                    grayishBlue: "hsl(212, 23%, 69%)",
                    lighGrayishBlue: "hsl(210, 46%, 95%)",
                },
            },
            gridTemplateRows: {
                "aut-auto": "auto auto",
            },
            gridTemplateColumns: {
                "auto-auto": "285px 1fr",
            },
            transitionProperty: {
                height: "height",
                fill: "fill",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-5deg)" },
                    "50%": { transform: "rotate(5deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
