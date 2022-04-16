import "@fontsource/work-sans";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    @media (max-width: 399px) {
      font-size: 17px;
      line-height: 24px;
    }
    margin: auto;
    font-family: Work Sans, 'sans serif';
    position: relative;
    min-height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
    color: #154726;
    font-size: 20px;
    line-height: 30px;
  }
  h1, h2, h3 {
    font-family: Work Sans, 'sans serif';
    font-weight: 800;
  }
  blockquote {
    border-left: 5px solid #154726;
    padding-left: 20px;
  }
`;