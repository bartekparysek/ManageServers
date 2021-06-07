import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap');
   *{
      box-sizing: border-box;
   }
   body{
      margin:0;
   }
   p{
      margin:0;
   }

`;

export default GlobalStyle;