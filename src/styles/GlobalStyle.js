import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: normal;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif

  }
  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  body: {
    height: 100%;
    height: 100%;
    overscroll-behavior-y: none;
  }
  #root {
    height: 100%;
    width: 100%;
  }
  button: hover {
    cursor: pointer;
  }
  li {
    list-style: none;
  }
`
