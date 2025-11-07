
/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content:['./index.html','./src/**/*.{ts,tsx}'],
  theme:{
    extend:{
      fontFamily:{ sans:['Inter','ui-sans-serif','system-ui','sans-serif'], mono:['JetBrains Mono','ui-monospace','SFMono-Regular','monospace'] },
      colors:{ accent: { 50:'#f0f9ff',400:'#7dd3fc',500:'#3b82f6',600:'#2563eb',700:'#1d4ed8',900:'#1e3a8a' } }
    }
  },
  plugins:[]
}
