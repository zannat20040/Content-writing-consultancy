const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '12141D': '#12141D', 
        'FAFAFA': '#FAFAFA', 
        'B7B8BB': '#B7B8BB', 
      },
    },
  },
  plugins: [],
});
