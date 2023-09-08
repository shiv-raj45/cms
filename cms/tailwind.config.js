/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      colors: {
        muted: "gray-600"
      },

      fontSize: {



        header: "1.4rem"
      },
      fontWeight: {
        header: "bold"
      }
      ,
      boxShadow: {
        card: `  1px 1px 10px #dcdcdc,
             -1px -1px 10px #e4e4e4;`
      }

    },
  },
  plugins: [],
}