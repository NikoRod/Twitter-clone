import styled, { css } from "styled-components";

export const Container = styled.div `

    flex: 0.65;
    overflow-y: scroll;
    box-sizing: border-box;

    header {
        top: 0;
        position: sticky;
        background-color: #fff;
        height: 40px;
    }

    h2 {
        margin-left: 18px;
        margin-top: 10px;
        font-size: 22px;
        font-weight: 600;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; // Para Internet Explorer
    scrollbar-width: none; // Para FireFox

    @media only screen and (max-width: 1280px) {
        flex: 0.55;
    }

    @media only screen and (max-width: 1004px) {
        flex: 0.95;
    }
    
    @media only screen and (max-width: 500px) {
        flex: 1;
    }

`

export const Header = styled.header``

// TWEETBOX: CONTAINER
export const Tweetbox = styled.div `

    padding: 5px 15px;
    margin-top: 25px;

`

// TWEETBOX: FORM
export const Form = styled.form `

    display: flex;
    flex-direction: column;

`

// TWEETBOX: DIV
export const Div = styled.div `

    display: flex;
    width: 100%;
    justify-content: space-between;

    .columns {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-right: 16px;

        input {
            margin-left: 10px;
            margin-top: 10px;
            width: 100%;
            border: none;
            outline: 0;
            font-size: 19px;
            line-height: 25px;
            color: #0f1419;
        }
    }

    input {
        margin-left: 10px;
        width: 100%;
        flex: 1;
        outline: 0;
        border: none;
        font-size: 19px;
        line-height: 25px;
        color: #0f1419;
    }

    Button {
        background-color: var(--twitterColor) !important;
        border: none !important;
        color: #fff !important;
        font-weight: 900 !important;
        width: 100px !important;
        height: 40px !important;
        margin-top: 20px !important;
        border-radius: 30px !important;
        text-transform: inherit !important;
    }

`

// TWEETBOX: AVATAR
export const Avatar = styled.img `

    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: fill;

`

// TWEETBOX: DIVBOX
export const DivBox = styled.div `

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    margin-left: 50px;

    .MuiSvgIcon-root {
        fill: var(--twitterColor);
        margin-left: 1rem;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

`

// POST: CONTAINER
export const Post = styled.div `

    padding: 10px 15px;
    margin-top: 5px;
    display: flex;
    align-items: flex-start;

    .post_avatar {
        margin-top: 5px;
    }

`

// POST: POST-BODY
export const PostBody = styled.div `

    padding-left: 10px;
    width: 100%;
    overflow: hidden;
    
    div span {
        font-weight: 600;
        font-size: 15px;
        color: #5b7083;
        padding-right: 5px;
    }

    .post_date {
        font-weight: 600;
        font-size: 15px;
        color: #5b7083;
    }

    .post_icon {
        font-size: 14px !important;
        color: var(--twitterColor) !important;
        margin: 0 5px;
    }

    h3 {
        padding: 0;
        margin: 0;
        font-size: 18px;
    }

`

// POST: POST-DESCRIPTION
export const PostDescription = styled.div `

    margin-bottom: 10px;
    margin-top: 5px;

    p {
        margin: 0;
        padding: 0;
        color: #0f1419;
        font-size: 16px;
        line-height: 16.6875px;
    }

`

// POST: POST-FOOTER
export const PostFooter = styled.div `

    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: #5b7093;
    transition: all 100ms ease-in;

    .MuiSvgIcon-root:hover:nth-child(1) {
        fill: #1da1f2;
        cursor: pointer;
    }

    .MuiSvgIcon-root:hover:nth-child(2) {
        fill: #17bf63;
        cursor: pointer;
    }

    .MuiSvgIcon-root:hover:nth-child(3) {
        fill: #e02452;
        cursor: pointer;
    }

    .MuiSvgIcon-root:hover:nth-child(4) {
        fill: #1da1f2;
        cursor: pointer;
    }

`

// POST: IMAGES
export const Images = styled.img `

    border-radius: 20px;
    min-width: 100%;
    width: 100%;
    min-height: 300px;

`