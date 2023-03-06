/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      "primary" : "var(--color-primary)",
      "secondary" : "var(--color-secondary)",
  
    },
    backgroundColor: {
      "primary" : "var(--color-primary)",
      "secondary" : "var(--color-secondary)",  
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
