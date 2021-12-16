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

    --color-white: #f3f3f3;
    --color-grey-description: grey;
    --color-grey-10: #EAEAEA;
    --color-grey-50: #4f4f4f;
    --color-grey-100: #333333;
    --color-green: #49967A;
    --color-orange-50: #9B6E46;
    --color-red: tomato;
    --color-blue: #698896;

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
background: linear-gradient(0deg, #4f4f4f 35%, rgba(81,30,165,1) 100%); */
`;

export default GlobalStyle;
