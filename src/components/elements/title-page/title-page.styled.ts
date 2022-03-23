import styled, { keyframes } from "styled-components";
import { media } from "src/lib/styled-components/variables";

const lineMoveRight = keyframes`
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
`;

const lineMoveLeft = keyframes`
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
`;

const titleOpacity = keyframes`
    0% {
        opacity: 0.4;
    }

    50% {
        opacity: 0.6;
    }

    100% {
        opacity: 1;
    }
`;

export const StyledTitleLine = styled.div<{left?: boolean}>`
    width: 40px;
    height: 3px;
    background: rgba(255,255,255, 0.5);
    margin: 0 10px;
    position: relative;
    overflow: hidden;
    &:after {
        content: '';
        display: block;
        height: 3px;
        background: ${({ theme }) => theme.white};
        transform: translateX(${props => (props.left ? "100%" : "-100%")});
        animation:  ${props => (props.left ? lineMoveLeft : lineMoveRight)} 0.5s linear forwards;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 36px;
    padding: 0;
    margin: 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.white};
    text-align: center;
    opacity: 1;
    animation: ${titleOpacity} 1s linear forwards;
    span {
        color: ${({ theme }) => theme.orange};
    }
    ${media.tablet`
        font-size: 24px;
    `}
`;

export const StyledTitleWrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    z-index: 1;
    position: relative;
    font-family: "assassin-st", sans-serif;
    ${media.tablet`
        margin-bottom: 20px;
    `}
`;