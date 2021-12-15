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
    margin: 0;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}


/* gradiente background: rgb(149,51,191);
background: linear-gradient(0deg, rgba(149,51,191,1) 35%, rgba(81,30,165,1) 100%); */
`;

export default GlobalStyle;
