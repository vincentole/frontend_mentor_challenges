module.exports = {
	purge: ["./**/*.html"],
	darkMode: false, // or 'media' or 'class'
	mode: "jit",
	theme: {
		extend: {
			screens: {
				sm: "600px",
			},
			colors: {
				primary: {
					darkBlue: "hsl(233, 47%, 7%)",
					desatBlue: "hsl(244, 38%, 16%)",
					softViolet: "hsl(277, 64%, 61%)",
					softVioletA60: "hsla(277, 74%, 35%, 0.6)",
				},
				neutral: {
					white: "hsl(0, 0%, 100%)",
					whiteA75: "hsla(0, 0%, 100%, 0.75)",
					whiteA60: "hsla(0, 0%, 100%, 0.6)",
				},
			},
      fontFamily: {
        inter: "'Inter', sans-serif",
        lexend: "'Lexend Deca', sans-serif",
      },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
