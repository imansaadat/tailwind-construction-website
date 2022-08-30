/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],

  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'yellow': '#f5bf23',
        'black': '#111',
        'white': '#fff',
        'grey': '#666',
        'lightGrey': '#eee',
        'dark':'#0000001a'
      },
      animation: {
        fadeIn : 'fadeIn 0.5s linear',
        fadeRight : 'fadeRight 0.5s linear'
      },
      keyframes:{
        fadeIn:{
          '0%':{
            opacity: '0',
            transform:' scale(0)',
          },
        },
        fadeRight:{
          '0%':{
            right : '-350px'
          },
        }
      },
      backgroundImage: {
        homeSlideOne: "url('/src/images/home-slide-1.jpg')",
        homeSlideTwo: "url('/src/images/home-slide-2.jpg')",
        homeSlideThree: "url('/src/images/home-slide-3.jpg')"
      },
    },
  },
  plugins: [],
}


