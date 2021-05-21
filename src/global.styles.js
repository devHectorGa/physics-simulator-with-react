import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  :root {
    /* COLORS */
    --primary: hsla(248, 96%, 12%, 1);
    --secondary: hsla(248, 89%, 52%, 1);
    --secondary2: hsla(248, 94%, 7%, 1);
    --accent: hsla(315, 87%, 58%, 1);
    --accent2: hsla(270, 85%, 64%, 1);
    /* Gray Scale */
    --black: rgba(0,0,0,.8);
    --gray1: rgba(51,51,51,1);
    --gray2: rgba(105,105,105,1);
    --gray3: rgba(153,153,153,1);
    --gray4: rgba(204,204,204,1);
    --white: rgba(255,255,255, .8);
    /* FONTS */
    --font-family: 'Roboto', sans-serif;
    --font-size-desktop: calc(1vmin + 1vmax);
    --font-size-mobile: calc(3vmin + 1vmax);
    --font-size1: 1rem;
    --font-size2: 1.25rem;
    --font-size3: 1.563rem;
    --font-size4: 1.953rem;
    --font-size5: 2.441rem;
    /* SIZES */
    --header-footer-size: 75px;
  }

  body {
    background-color: var(--secondary2);
    font-family: var(--font-family);
    font-size: var(--font-size-mobile);
    margin: 0;
    color: var(--white);
    @media screen and (min-width: 768px) {
      font-size: var(--font-size-desktop);
    }
  }
`;
