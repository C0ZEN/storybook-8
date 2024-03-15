const tailwindPreset = require(`../../tailwind.preset`);
const { createGlobPatternsForDependencies } = require(`@nx/react/tailwind`);
const path = require(`path`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindPreset],
  content: [
    path.join(__dirname, `{src,pages,components}/**/*!(*.stories|*.test).{ts,tsx,html}`),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
