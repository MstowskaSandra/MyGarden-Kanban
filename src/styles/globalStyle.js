import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
    background-color: #F4F8EF;
    color: #283B0A;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  a {
    font-weight: 500;
    color: #5F5AA5;
    text-decoration: none;
  }

  a:hover {
    color: #4A4678;
  }

  button {
    border-radius: 8px;
    border: 3px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;
    background-color: #BAACEB;
    color: #283B0A;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s, transform 0.1s;
  }

  button:hover {
    border-color: #4A4678;
    transform: translateY(-2px);
  }

  button:focus,
  button:focus-visible {
    outline: 3px solid rgb(184, 208, 98);
    outline-offset: 2px;
  }

  h1, h2, h3, h4 {
    margin: 0;
    font-weight: 600;
    color: #283B0A;
  }

  span {
    font-size: 0.85rem;
  }
`;
