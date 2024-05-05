/** @type {import('tailwindcss').Config} */

const dimensionsScale = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "48px",
  8: "64px",
  9: "96px",
  10: "128px",
  11: "192px",
  12: "256px",
  13: "384px",
  14: "512px",
  15: "640px",
  16: "768px",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray-100": "#E3E3E3",
      "gray-200": "#CACACA",
      "gray-300": "#B0B0B0",
      "gray-400": "#969696",
      "gray-500": "#7C7C7C",
      "gray-600": "#626262",
      "gray-700": "#484848",
      "gray-800": "#2E2E2E",
      "gray-900": "#141414",

      "grape-100": "#D8C9EE",
      "grape-200": "#BEA6E2",
      "grape-300": "#A382D5",
      "grape-400": "#885EC8",
      "grape-500": "#6D3ABB",
      "grape-600": "#592F98",
      "grape-700": "#442475",
      "grape-800": "#301952",
      "grape-900": "#1B0E2F",

      "aqua-100": "#E5FFF8",
      "aqua-200": "#ACFFE8",
      "aqua-300": "#73FFD8",
      "aqua-400": "#3AFFC8",
      "aqua-500": "#00FFB7",
      "aqua-600": "#00CA91",
      "aqua-700": "#00946A",
      "aqua-800": "#005F44",
      "aqua-900": "#00291D",
    },
    fontSize: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
      6: "24px",
      7: "30px",
      8: "36px",
      9: "48px",
      10: "60px",
      11: "72px",
    },
    extend: {
      width: dimensionsScale,
      height: dimensionsScale,
      padding: dimensionsScale,
      margin: dimensionsScale,
      gap: dimensionsScale,
    },
  },
  plugins: [],
};
