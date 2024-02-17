/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: 'hsl(0, 0%, 7%)',
					secondary: 'hsl(0,0%,100%)',
					accent: 'hsl(47, 88%, 63%)',
					neutral: 'hsl(0, 0%, 50%)',
					'base-100': 'hsl(47, 88%, 63%)',
					white: 'hsl(0, 0%, 100%)',
					black: 'hsl(0, 0%, 7%)',
				},
			},
			'fantasy',
			'halloween',
		],
	},
};
