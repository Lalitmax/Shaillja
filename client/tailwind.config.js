// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))', // Define the background color
        foreground: 'hsl(var(--foreground))', // Define the foreground color
        border: 'hsl(var(--border))', // Define the border color
      },
    },
  },
  plugins: [],
};