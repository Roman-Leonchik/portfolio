import { createGlobalStyle, css } from "styled-components";
import styledNormalize from "styled-normalize";

const globalStylesCss = css`
    ${styledNormalize};
    * {
        box-sizing: border-box;
    }

    html,
    body {
        scrollbar-color: ${({theme}) => theme.white} ${({theme}) => theme.darkBlue};
        scrollbar-width: auto | thin | none;
        overflow-x: hidden;
    }

    body {
        font-family: "Roboto", sans-serif;
        color: ${({theme}) => theme.white};
        font-size: 16px;
        background-color: ${({theme}) => theme.bgColor}};
        ::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.white};
            border-radius: 9px;
            box-shadow: inset 1px 1px 10px #f3faf7;
        }
        ::-webkit-scrollbar {
            width: 10px;
            height: 4px;
            background-color: ${({theme}) => theme.darkBlue};
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #253861;
        }
        &.scroll-hide {
            height: 100%;
            overflow: hidden;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }
    }

    a {
        color: ${({theme}) => theme.orange};
        text-decoration: none;
    }

    a:not([href]) {
        cursor: pointer;
    }
`;

export const StyledGlobal = createGlobalStyle`${globalStylesCss};` as any;
