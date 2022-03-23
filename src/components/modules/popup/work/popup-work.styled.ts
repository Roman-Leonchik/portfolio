import styled, { keyframes, css } from "styled-components";
import { media } from "src/lib/styled-components/variables";
import { StyledContainer } from "src/lib/styled-components/standart";

interface IProps {
    image: string;
}

interface IAnimation {
    animation: boolean | undefined;
}

const popupVisibility = keyframes`
    0%,
    30% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

const letterVisibility = keyframes`
    0%,
    30% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const popupHide = keyframes`
    0%,
    20% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(100%);
        opacity: 0;
    }
`;

const letterHide = keyframes`
    0%,
    20% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(-100%);
        opacity: 0;
    }
`;

const popupBgVisibility = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const popupBgHide = keyframes`
    0% {
        opacity: 1;
    }

    50%,
    100% {
        opacity: 0;
    }
`;

export const StyledWorkWrapp = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    height: 100vh;
    overflow: hidden;
    animation: ${popupHide} 1.5s ease-out forwards;
    opacity: 0;
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.white};
        border-radius: 9em;
        box-shadow: inset 1px 1px 10px #f3faf7;
    }
    ::-webkit-scrollbar {
        width: 10px;
        height: 4px;
        background-color: ${({ theme }) => theme.darkBlue};
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #253861;
    }
`;

export const StyledWorkBg = styled.div<IProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background-image: url(${({ image }) => (image && image)});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: ${popupBgHide} 1s ease-out forwards;
    animation-delay: 1.5s;
`;

export const StyledWorkClose = styled.button`
    position: fixed;
    top: 40px;
    right: 30px;
    width: 60px;
    height: 60px;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background-color: #f5df4e;
        transition: 0.2s ease-in;
    }
    &:before {
        transform: translateY(-50%) rotate(-45deg);
    }
    &:after {
        transform: translateY(-50%) rotate(45deg);
    }
    &:hover {
        &:before {
            top: 44%;
            transition: 0.2s ease-out;
        }
        &:after {
            top: 57%;
            transition: 0.2s ease-out;
        }
    }
    ${media.tablet`
        top: 30px;
        right: 20px;
        width: 40px;
        height: 40px;
    `}
`;

export const StyledWorkFirstScreen = styled.div`
    background: #000000;
    width: 50%;
    height: 100vh;
    margin-left: auto;
    padding: 40px 100px 40px 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${media.desktop`
        padding-right: 80px;
        width: 60%;
    `}
    ${media.tablet`
        width: 100%;
        height: 70vh;
        margin-top: 30vh;
        padding: 20px 60px 20px 20px;
    `}
`;

export const StyledWorkTitle = styled.h3`
    text-transform: uppercase;
    font-size: 80px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.orange};
    span {
        display: block;
        font-weight: normal;
        color: ${({ theme }) => theme.white};
    }
    ${media.desktop`
        font-size: 60px;
    `}
    ${media.tablet`
        font-size: 40px;
    `}
    ${media.mobile`
        font-size: 32px;
    `}
`;

export const StyledLetterScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    color: ${({ theme }) => theme.white};
    mix-blend-mode: darken;
    font-size: 100vh;
    line-height: 1;
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    animation: ${letterHide} 1.5s ease-out forwards;
    opacity: 0;
    ${media.desktop`
        font-size: 500px;
    `}
    ${media.tablet`
        width: 100%;
        height: 30vh;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 35vh;
    `}
`;

export const StyledWorkContainer = styled(StyledContainer)`
    max-width: 800px;
    padding: 0;
`;

export const StyledWorkOtherContent = styled.div`
    background: ${({ theme }) => theme.dark};
    width: 100%;
    min-height: 100vh;
    padding: 40px 100px 40px 40px;
    text-align: center;
    h4 {
        font-size: 50px;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.orange};
        margin: 0 0 20px;
    }
    p {
        font-size: 20px;
        margin: 0 0 20px; 
    }
    img {
        display: block;
        max-width: 100%;
        margin: 0 auto 20px;
    }
    ${media.tablet`
        padding: 20px 60px 20px 20px;
        min-height: auto;
        h4 {
            font-size: 30px;
        }
        p {
            font-size: 16px;
        }
    `}
`;

export const StyledWorkBlock = styled.div<IAnimation>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 102;
    ${({ animation }) => animation && css`
        ${StyledWorkWrapp} {
            animation: ${popupVisibility} 1.5s ease-in forwards;
            animation-delay: 0.5s;
            overflow-y: scroll;
        }
        ${StyledWorkBg} {
            animation-delay: 0s;
            animation: ${popupBgVisibility} 0.5s ease-in;
        }
        ${StyledLetterScreen} {
            animation: ${letterVisibility} 1.5s ease-in forwards;
            animation-delay: 0.5s;
        }
    `}
`;