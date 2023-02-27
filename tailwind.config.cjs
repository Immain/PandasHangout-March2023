/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxxs': '280px',
        'xxs': '320px',
        'xs': '480px',
        'sm': '640px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '1xl': '1400px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
      backgroundImage: {
        'hero': "url('https://64.media.tumblr.com/d21a6d2309d9270b833bebeb1afaec21/tumblr_o0y9vuCxn11rldv4go1_1280.gifv')",
        '404': "url('https://cdn.wallpapersafari.com/10/63/9enofj.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}