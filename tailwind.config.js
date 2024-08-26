/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'Lime': 'hsl(61, 70%, 52%)',
        'Red': 'hsl(4, 69%, 50%)',
        'Celeste':'hsl(201, 87%, 94%)',
        'VerdeResultado':'hsl(201, 54%, 16%)',
        'VerdeTarjeta':'hsl(204, 38%, 15%)'
      },
      variants: {
        backgroundColor: ('responsive', 'hover', 'focus', 'checked'),
      },
    },
  },
  plugins: [],
}
