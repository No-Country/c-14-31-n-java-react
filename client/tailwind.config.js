/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
      },
      colors: {
        "primary-50": "#f4ebeb",
        "primary-100": "#ddbfc2",
        "primary-200": "#cda1a4",
        "primary-300": "#b6767a",
        "primary-400": "#a85b61",
        "primary-500": "#923239",
        "primary-600": "#852e34",
        "primary-700": "#682428",
        "primary-800": "#501c1f",
        "primary-900": "#3d1518",

        "neutral-50": "#f9f9f9",
        "neutral-100": "#ececec",
        "neutral-200": "#e3e3e3",
        "neutral-300": "#d6d6d6",
        "neutral-400": "#cecece",
        "neutral-500": "#c2c2c2",
        "neutral-600": "#b1b1b1",
        "neutral-700": "#8a8a8a",
        "neutral-800": "#6b6b6b",
        "neutral-900": "#515151",

        "secondary-50": "#fbf8f5",
        "secondary-100": "#f4e9e0",
        "secondary-200": "#eeded1",
        "secondary-300": "#e7cfbb",
        "secondary-400": "#e2c6ae",
        "secondary-500": "#dbb89a",
        "secondary-600": "#c7a78c",
        "secondary-700": "#9b836d",
        "secondary-800": "#786555",
        "secondary-900": "#5c4d41",
      },
      plugins: [
        require('flowbite/plugin')
      ],
      theme: {
        extend: {},
      },
      content: [
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ]
    },
  },
  plugins: [],
};
