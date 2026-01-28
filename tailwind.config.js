// tailwind.config.js
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        beige: 'var(--beige)',
        muted: 'var(--muted)',
        panel: 'var(--panel)',
        text: 'var(--text)',
        'muted-text': 'var(--muted-text)',
        border: 'var(--border)',
      },
      boxShadow: {
        panel: 'var(--shadow)',
      },
    },
  },
  plugins: [],
}
