const defaultTheme = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  theme: {
    extend: {
      backgroundColor: {
        'linqueo-primary': `var(--vtmn-semantic-color_background-primary)`,
        'linqueo-secondary': `var(--vtmn-semantic-color_background-secondary)`,
        'linqueo-tertiary': `var(--vtmn-semantic-color_background-tertiary)`,
      },
      colors: {
        'current': `currentColor`,
        'linqueo-primary': `var(--vtmn-semantic-color_content-primary)`,
        'linqueo-primary-hover': `var(--vtmn-semantic-color_hover-primary)`,
        'linqueo-secondary': `var(--vtmn-semantic-color_content-secondary)`,
        'linqueo-decorative-gravel': `var(--vtmn-semantic-color_decorative-gravel)`,
        'linqueo-decorative-cobalt': `var(--vtmn-semantic-color_decorative-cobalt)`,
        'linqueo-decorative-emerald': `var(--vtmn-semantic-color_decorative-emerald)`,
        'linqueo-decorative-saffron': `var(--vtmn-semantic-color_decorative-saffron)`,
        'linqueo-decorative-brick': `var(--vtmn-semantic-color_decorative-brick)`,
      },
      textColor: {
        'gray-500': `var(--vtmn-color_grey)`,
        'red-500': `var(--vtmn-semantic-color_content-negative)`,
        'linqueo-primary': `var(--vtmn-semantic-color_content-primary)`,
        'linqueo-primary-hover': `var(--vtmn-semantic-color_hover-primary)`,
        'linqueo-tertiary': `var(--vtmn-semantic-color_content-tertiary)`,
        'linqueo-action': `var(--vtmn-semantic-color_content-action)`,
        'linqueo-visited': `var(--vtmn-semantic-color_content-visited)`,
      },
      container: {
        center: true,
      },
    },
    fontFamily: {
      sans: [`Roboto`, ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: `class`,
  plugins: [],
};
