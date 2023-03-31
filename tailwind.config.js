/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				gray01: '#DBDBDB',
				gray02: '#8E8E8E',
				gray03: '#C7C7C7',
				blue01: '#0095F6',
				black01: '#262626',
			},
			fontFamily: {
				segeo: ['Segeo UI', 'sans-serif'],
				// milli: ['Millimetre', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
