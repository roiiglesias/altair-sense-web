/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'as-black': '#10150F',   // verde negro
        'as-lime': '#B4E33D',    // lima
        'as-moss': '#4C7A3E',    // musgo
        'as-cream': '#F2F1E8',   // cal
        'as-moss-2': '#55604C',
        'as-sage': '#8E8F7C',
        'as-stone': '#D7D6C8'
      },
      fontFamily: {
        display: ['"Nunito Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
