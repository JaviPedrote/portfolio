/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      margin: {
        'custom': 'calc(100px + 45%)',
      },
      colors:{
        'Lime': 'hsl(61, 70%, 52%)',
        'Red': 'hsl(4, 69%, 50%)',
        'Celeste':'hsl(201, 87%, 94%)',
        'VerdeResultado':'hsl(201, 54%, 16%)',
        'VerdeTarjeta':'hsl(204, 38%, 15%)'
      },
      backgroundImage: {
        'custom-image': "url('./images/image-product-1-thumbnail.jpg')", // Asegúrate de reemplazar con tu ruta
      },
      variants: {
        backgroundColor: ('responsive', 'hover', 'focus', 'checked'),
      },
      fontFamily: {
        kumbh: ['Kumbh', 'sans-serif'],
      },
      fontWeight:{
        'exbold': '770',
      }
    },
  },
  plugins: [],
}
