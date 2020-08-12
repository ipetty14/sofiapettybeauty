import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
  ${reset};

  @font-face {
  font-family: "Lato";
  src: url("../../static/fonts/lato/Lato-Regular.woff");
  } 

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
  }
`;
