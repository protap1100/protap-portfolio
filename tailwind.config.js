/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-purple' : '#7B2CBF',
        'light-purple' : '#E0AAFF',
        'bold-purple' : '#E0AAFF',
        'btn' : '#0077b6',
        'btn-hover':'#52796f',
        'nav':'#cad2c5'
      },
    },
  },
  plugins: [require("daisyui")],
};
