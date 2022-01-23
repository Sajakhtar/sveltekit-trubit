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
    themes: [
      {
        'light': {
          'primary': '#43b6ff',
          'primary-focus': '#1083cc',
          'primary-content': '#ffffff',
          'secondary': '#ff4895',
          'secondary-focus': '#cc1562',
          'secondary-content': '#ffffff',
          'accent': '#2d42ff',
          'accent-focus': '#000fcc',
          'accent-content': '#ffffff',
          'neutral': '#88849c',
          'neutral-focus': '#302c3f',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
        'dark': {
          'primary': '#43b6ff',
          'primary-focus': '#1083cc',
          'primary-content': '#ffffff',
          'secondary': '#ff4895',
          'secondary-focus': '#cc1562',
          'secondary-content': '#ffffff',
          'accent': '#2d42ff',
          'accent-focus': '#000fcc',
          'accent-content': '#ffffff',
          'neutral': '#88849c',
          'neutral-focus': '#302c3f',
          'neutral-content': '#ffffff',
          'base-100': '#504d5a',
          'base-200': '#373441',
          'base-300': '#1d1a27',
          'base-content': '#eeeaff',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  }
};

module.exports = config;
