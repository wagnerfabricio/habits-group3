import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    outline: 0;
   
}

:root {
    //Colors Variables

    --color-grey-10: #EAEAEA;
    --color-purple: #541DA8;
    --color-magenta: #A72C8E;
}

body {

}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
