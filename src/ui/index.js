import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;700&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html,
    body{
        font-family: 'Rubik', sans-serif;
        font-weight:normal;
        color:#000;
        display:flex;
        height:100vh;
        width:100vw;
        align-items:center;
        justify-content:center;
        margin:auto;
    }

    a{
        text-decoration:none;
    }

    ul{
        list-style-type:none;
    }

    button{
        border:none;
        outline:none;
        background:none;
    }
`;
