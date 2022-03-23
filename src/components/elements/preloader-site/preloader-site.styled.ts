import styled, { keyframes, css } from "styled-components";
import { media } from "src/lib/styled-components/variables";

interface IProps {
    loader: boolean;
}

const lineMoveRightAnimation = keyframes`
    0% {
        transform: translateX(-100%);
    }

    50% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
`;

const contentHideAnimation = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

const afterHideAnimation = keyframes`
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(100%);
    }
`;

const beforeHideAnimation = keyframes`
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
`;

export const StyledPreloaderWrapp = styled.div<IProps>`
    position: fixed;
    z-index: 110;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &:after{
        bottom: 0;
        ${({ loader }) => (!loader && css`
            animation:  ${afterHideAnimation} 1s linear forwards;
            animation-delay: 1.5s;
        `)};
    }
    &:before{
        top: 0;
        ${({ loader }) => (!loader && css`
            animation:  ${beforeHideAnimation} 1s linear forwards;
            animation-delay: 1.5s;
        `)};
    }
    &:after,
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        left: 0;
        background-color: ${({theme}) => theme.dark};
        z-index: 1;
    }
`;

export const StyledPreloaderContent = styled.div<IProps>`
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 50px;
    letter-spacing: 3px;
    position: relative;
    z-index: 2;
    background: linear-gradient(45deg, ${({theme}) => theme.white} 33%, ${({theme}) => theme.orange} 66%, #8AA9D6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${({ loader }) => (!loader && css`
        animation:  ${contentHideAnimation} 1s linear forwards;
        animation-delay: 0.5s;
    `)};
    ${media.tablet`
        font-size: 36px;
    `}
`;

export const StyledPreloaderLine = styled.div`
    width: 100%;
    height: 5px;
    margin: 10px 0;
    background-color: ${({theme}) => theme.orange};
    position: relative;
    overflow: hidden;
    &:after {
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        background-color: ${({theme}) => theme.white};
        position: absolute;
        animation:  ${lineMoveRightAnimation} 3s infinite linear forwards;
    }
`;