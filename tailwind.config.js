/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './index.html'
  ],
  theme: {
    extend: {
      colors:
      {
        navtext:'#000000',
        underlinehead:'#4A4A4A',
        endbodyclr:'#04016C',
        bodyclr:'#4A16BD',
        iconstart:'#2E08C7',
        iconend:'#7E08C7',
        scourse:"#D9ECFF",
        ecourse:"#F0F3FF",
        test:'#7E7EAA'

      },
    fontFamily:{
      righteous:['Righteous'],
      saira:['Saira']
    }
   
      
    },
  },
  plugins: [],
}
