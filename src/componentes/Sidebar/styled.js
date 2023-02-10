import styled, { css } from "styled-components";

export const Contenedor = styled.div `

    flex: 0.2;
    min-width: 255px;

    .twitter-logo {
        margin: 10px 0 10px 10px;
        width: 35px;
        height: 35px;
        fill: var(--twitterColor) !important;
    }

    Button {
        background-color: var(--twitterColor) !important;
        border: none !important;
        color: #fff !important;
        font-weight: 700 !important;
        text-transform: inherit !important;
        height: 46px !important;
        padding: 25px 0 !important;
        border-radius: 9999px !important;
        font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
        font-size: 17px;
    }

    Button:hover {
        background-color: #1a8cd8;
    }

    @media only screen and (max-width: 1280px) {
        flex: 0.05;
        min-width: 50px;

        Button {
            display: none;
        }
    }

    @media only screen and (max-width: 1004px) {
        width: 40px;
    }

    @media only screen and (max-width: 500px) {
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 999;
        height: 50px;
        background-color: #fff;
        width: 100%;
        padding: 0;

        .twitter-logo {
            display: none;
        }
    }

`

export const SidebarIcon = styled.div `

    display: flex;
    align-items: center;
    padding: 10px 10px;
    user-select: none;
    border-radius: 9999px;

    h2 {
        font-size: 20px;
        margin: 0 15px 0 20px;
        font-weight: normal;
        font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        color: #0f1419;
        cursor: pointer;
    }

    .MuiSvgIcon-root {
        width: 30px;
        height: 30px;
        color: #0f1419;
    }

    &:hover {
        background-color: rgba(15, 20, 25, .1);  
        transition: .2s ease-out;
    }


    ${props => props.active && css`
    
        color: #000;
        font-weight: bold;

    `
    }

    @media only screen and (max-width: 1280px) {
        border-radius: 50%;

        h2 {
            display: none;
        }
    }

    @media only screen and (max-width: 500px) {
        color: #b8b8b8;
        display: ${props => props.primary ? "none" : ""};
        color: ${props => props.active ? "var(--twitterColor)" : ""};
    }

`