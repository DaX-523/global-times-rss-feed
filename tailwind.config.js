const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        run: {
          '0%, 100%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' }
        },
        'swing-left': {
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(30deg)' }
        },
        'swing-right': {
          '0%, 100%': { transform: 'rotate(30deg)' },
          '50%': { transform: 'rotate(-30deg)' }
        },
        'run-left': {
          '0%, 100%': { transform: 'rotate(-45deg)' },
          '50%': { transform: 'rotate(45deg)' }
        },
        'run-right': {
          '0%, 100%': { transform: 'rotate(45deg)' },
          '50%': { transform: 'rotate(-45deg)' }
        },
        'paper-fly-1': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(200px, -100px) rotate(360deg)' }
        },
        'paper-fly-2': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(-200px, -150px) rotate(-360deg)' }
        },
        'paper-fly-3': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(150px, -200px) rotate(360deg)' }
        },
        'road-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-512px)' }
        },
        float: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateY(-10px) rotate(-2deg)' },
          '50%': { transform: 'translate(-50%, -50%) translateY(10px) rotate(2deg)' }
        },
        'paper-float-1': {
          '0%, 100%': { transform: 'translateY(-5px) rotate(-15deg)' },
          '50%': { transform: 'translateY(5px) rotate(-9deg)' }
        },
        'paper-float-2': {
          '0%, 100%': { transform: 'translateY(5px) rotate(27deg)' },
          '50%': { transform: 'translateY(-5px) rotate(21deg)' }
        },
        'letter-float': {
          '0%': { transform: 'translateY(0) rotate(45deg)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) rotate(90deg)', opacity: '0.6' },
          '100%': { transform: 'translateY(-40px) rotate(135deg)', opacity: '0' }
        },
        'wind-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'run': 'run 1s infinite',
        'swing-left': 'swing-left 1s infinite',
        'swing-right': 'swing-right 1s infinite',
        'run-left': 'run-left 1s infinite',
        'run-right': 'run-right 1s infinite',
        'paper-fly-1': 'paper-fly-1 2s infinite',
        'paper-fly-2': 'paper-fly-2 2.5s infinite',
        'paper-fly-3': 'paper-fly-3 3s infinite',
        'road-move': 'road-move 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'paper-float-1': 'paper-float-1 4s ease-in-out infinite',
        'paper-float-2': 'paper-float-2 4s ease-in-out infinite',
        'letter-float': 'letter-float 3s ease-out forwards',
        'wind-line': 'wind-line 2s ease-in-out infinite',
        'fade-in-1': 'fade-in 0.6s ease-out forwards',
        'fade-in-2': 'fade-in 0.6s ease-out 0.2s forwards',
        'fade-in-3': 'fade-in 0.6s ease-out 0.4s forwards'
      }
    },
  },
  plugins: [],
});