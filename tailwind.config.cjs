const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      minHeight: {
        '1/2': '50%',
        '3/4': '75%',
      }
    },

	},

	plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  daisyui: {

  }
};

module.exports = config;
