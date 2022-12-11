/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        darkBlue:"rgba(3,37,65, 1)"
      },
      backgroundImage:{
        banner: "linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url('http://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg');" ,
        buttonGradient: "linear-gradient(to right, rgba(30,213,169, 1) 0%, rgba(1,180,228, 1) 100%)",
        coverImage:"linear-gradient(to right, rgba(3,37,65,0.75) 0%, rgba(3,37,65, 0.75) 100%)",
        lightTabs:"linear-gradient(to right, rgba(192,254,207, 1) 0%, rgba(30,213,169, 1) 100%);",
        playIcon:"url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg') "
      },
      borderRadius:{
        "4xl": "30px",
        "5xl": "36px"
      },
      borderColor:{
        darkBlue: "rgba(3,37,65, 1)",
        lightTabs:"rgba( 30,216,169, 1)"
      },
      colors:{
        darkBlue: "rgba(3,37,65, 1)"
      }
    },
  },
  plugins: [],
}
