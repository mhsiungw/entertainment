import { css } from '@emotion/react'
import theme from './theme'

const { colors } = theme

export default css`
  html {
    font-family: 'Outfit', sans-serif;
    font-size: 62.5%;
    font-weight: 300;
    box-sizing: border-box;
    background: ${colors.black};
  }

  body {
    font-size: 1.3rem;
    color: ${colors.white};
  }

  h1 {
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3.2rem;
    }
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

  .swiper-wrapper {
    gap: 2rem;
  }

  .swiper-slide {
  }

  @media screen and (min-width: 768px) {
    #root {
      display: flex;
      justify-content: center;
    }
  }
`
