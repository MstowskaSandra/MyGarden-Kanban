import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.5;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%; 
    width: 100%;
    
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  button {
    border-radius: ${({ theme }) => theme.radius.md};
    border: 3px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s, transform 0.1s;
  }

  button:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  button:focus,
  button:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 2px;
  }

  h1, h2, h3, h4 {
    margin: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  span {
    font-size: 0.85rem;
  }
`;
