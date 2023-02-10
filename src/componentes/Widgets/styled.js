import styled from "styled-components";

// WIDGET: CONTAINER
export const Widget = styled.div `

    flex: 0.3;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 0 30px 10px 20px;

    h2 {
        margin-left: 15px;
        margin-top: 15px;
        font-size: 22px;
    }
    

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; // PARA INTERNET EXPLORER
    scrollbar-width: none; // PARA FIREFOX

    @media only screen and (max-width: 1280px) {
        flex: 0.4;
    }

    @media only screen and (max-width: 1004px) {
        display: none;
    }

`

// WIDGET: HEADER
export const Header = styled.div `

    background-color: #fff;
    height: 50px;
    position: sticky;
    top: 0;
    padding-top: 10px;

`

// WIDGET: DIV-ICON
export const DivIcon = styled.div `

    display: flex;
    align-items: center;
    background-color: #eee;
    padding: 10px;
    border-radius: 20px;

    .searchIcon {
        color: #5b7083;
    }

    input {
        border: none;
        outline: 0;
        padding-left: 10px;
        background-color: #eee;
        font-size: 16px;
    }

`

// WIDGET: DIV-CONTENT
export const DivContent = styled.div `


`