import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
  }

  // ... Diğer global stiller buraya eklenecek
`; 