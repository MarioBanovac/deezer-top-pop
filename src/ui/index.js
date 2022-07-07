import styled, { createGlobalStyle } from "styled-components";
import { List } from "components";

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

    select {
        /* Reset Select */
        appearance: none;
        outline: 0;
        border: 0;
        box-shadow: none;
        flex: 1;
        padding: 0 1em;
        color: #fff;
        background-color: #2c3e50;
        background-image: none;
        cursor:pointer;
`;

export const StyledList = styled(List)`
  & div {
    width: 500px;
    text-align: center;
    display:flex;
    flex-direction:column;
  }

  & div h2 {
    background: #03a9f4;
    padding: 1rem 2rem;
    font-size: 1.8rem;
    text-align: center;
    color: #fff;
  }

  & div div {
    position: relative;
    display: flex;
    width: 50%;
    margin:0 auto;
    height: 3em;
    border-radius: 0.25em;
    overflow: hidden;
    margin-bottom:20px;
  }

  & div div::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: #03a9f4;
    transition: 0.25s all ease;
    pointer-events: none;
  }

  li {
    padding: 1rem 2rem;
    background: #fff;
    width: 100%;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.5s;
  }

  li:hover {
    transform: scale(1.1);
    z-index: 100;
    background: #25bcff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
`;
