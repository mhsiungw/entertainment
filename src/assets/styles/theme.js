export default {
  colors: {
    red: '#FC4747',
    black: '#10141E',
    blue: '#5A698F',
    darkBlue: '#161D2F',
    white: '#FFF',
  },
  useMedia: () => {
    return [375, 768, 1440].map((bp) => `@media (min-width: ${bp}px)`)
  },
}
