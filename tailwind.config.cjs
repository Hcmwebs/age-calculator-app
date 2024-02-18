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
					primary: 'hsl(259, 100%, 65%)',
					secondary: 'hsl(0, 100%, 67%)',
					accent: 'hsl(0, 100%, 67%)',
					neutral: 'hsl(0, 0%, 94%)',
					'base-100': 'hsl(0, 0%, 86%)',
					'base-200': 'hsl(0, 1%, 44%)',
					white: 'hsl(0, 0%, 100%)',
					black: 'hsl(0, 0%, 8%)',
				},
			},
			'fantasy',
			'halloween',
		],
	},
};
