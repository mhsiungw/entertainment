import { css } from '@emotion/react'
import theme from './theme'

const { colors } = theme

export default css`
  html {
    font-family: 'Outfit', sans-serif;
    font-size: 62.5%;
    box-sizing: border-box;
    background: ${colors.black};
  }

  body {
    font-size: 1.6rem;
    color: ${colors.white};
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  ::marker {
    color: ${colors.darkBlue};
  }

  input {
    border: none;
    outline: none;
    font-family: 'Outfit', sans-serif;
  }
`
