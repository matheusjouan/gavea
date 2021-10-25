import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    body,
    input,
    button {
      font-size: 16px;
      font-family: ${theme.font.family.inter};
      font-weight: ${theme.font.regular};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.semibold};
    }
  `}

  button {
    cursor: pointer;
    outline: 0;

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  a {
    color: inherit;
    text-decoration: none
  }

`;

export default GlobalStyles;
