import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html body {
    background-color: white;
    color: black;
    font-size: 1rem;
    line-height: 1.3;
    font-family: 'Lato', sans-serif;;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  
    width: 100%;
    height: 100%;

    @media (min-width: 62em) { 
      font-size: 1.125rem;
    }
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border-style: none;
    display: block;
    border: 0;
  }
  

`;
