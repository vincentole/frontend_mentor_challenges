module.exports = {
    purge: ["./**/*.html"],
    mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    softBlue: "hsl(215, 51%, 70%)",
                    cyan: "hsl(178, 100%, 50%)",
                },
                neutral: {
                    darkBlue: "hsl(217, 54%, 11%)",
                    desatDarkBlue: "hsl(216, 50%, 16%)",
                    dividerBlue: "hsl(215, 32%, 27%)",
                },
            },
            fontFamily: {
                outfit: "'Outfit', sans-serif",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
