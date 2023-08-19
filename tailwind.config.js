/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // darkMode: false
    // screens: { 'sm': '640px', }
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'design': 'url("/tab design.png")',
        'gradient': 'url("/bg.png")',
      },
      backgroundColor: {
        'white': {
          100: 'rgba(255, 255, 255, 1)',
          20: 'var(--dark-bg)',
          21: 'var(--nav-bg)',
        }
      },
      colors: {
        'blue': 'var(--blue)',
        'gold': 'var(--gold)',
        'pink': 'var(--pink)',
        'pur': 'var(--pur)',
      },
      height: {
        'cover': '96%',
      },
      fontFamily: {
        'special': 'Whyte Inktrap',
        'regular': 'Poppins',
        'code': 'Cascadia Code',
      },
      fontSize: {
        '2xl': '108px',
        'xl': '96px',//72
        'lg': '48px',
        'md': '24px',
        'sm': '12px',
      },
    },
  },
  plugins: [],
}
