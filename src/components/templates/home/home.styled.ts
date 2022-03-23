import styled, { keyframes } from "styled-components";
import { media } from "src/lib/styled-components/variables";
import {
    StyledSection,
    StyledContainer,
} from "src/lib/styled-components/standart";

const chicaum = keyframes`
    from {
        transform: translate(0px);
    }

    to {
        transform: translate(-886px);
    }
`;

const chicadois = keyframes`
    from {
        transform: translate(0px);
    }

    to {
        transform: translate(-841px);
    }
`;

const titleVisibility = keyframes`
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const mouseTraffic = keyframes`
    0 {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
`;

export const StyledHomeSection = styled(StyledSection)`
    padding-top: 70px;
    padding-bottom: 70px;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${({theme}) => theme.white};
    position: relative;
    box-shadow: 0 2px 20px ${({theme}) => theme.dark};
`;

export const StyledHomeContainer = styled(StyledContainer)`
    position: relative;
    z-index: 2;
`;

export const StyledHomeTitle = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 50px;
    text-transform: uppercase;
    margin-bottom: 20px;
    opacity: 1;
    text-align: center;
    opacity: 0;
    transform: translate(0px, 50px) scale(0.8);
    animation: ${titleVisibility} 0.4s linear forwards;
    ${media.tablet`
        font-size: 40px;
    `}
    ${media.mobile`
        font-size: 30px;
    `}
`;

export const StyledHomeText = styled.p`
    font-size: 40px;
    text-align: center;
    opacity: 0;
    transform: translate(0px, 50px) scale(0.8);
    margin: 0 auto 20px;
    animation: ${titleVisibility} 0.6s linear forwards;
    ${media.tablet`
        font-size: 30px;
    `}
    ${media.mobile`
        font-size: 20px;
    `}
`;

export const StyledHomeCity = styled.div`
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 50px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 4px 10px ${({theme}) => theme.dark};
    transition: all .4s cubic-bezier(.17,.67,.64,1.55);
    opacity: 0;
    transform: translate(0px, 50px) scale(0.8);
    border-radius: 10px;
    padding: 5px;
    animation: ${titleVisibility} 0.8s linear forwards;
    &:after,
    &:before {
        content: '';
        position: absolute;
        left: 0;
        display: block;
        height: 150px;
        background-size: contain;
        transition: all .4s cubic-bezier(.17,.67,.64,1.55);
        opacity: 0;
        top: 50px;
    }
    &:before {
        background-image: url("/images/home/city-before.png");
        width: 1772px;
        z-index: -1;
        animation: ${chicaum} 60s infinite linear;
    }
    &:after {
        background-image: url("/images/home/city-after.png");
        width: 1682px;
        z-index: 1;
        animation: ${chicadois} 30s infinite linear;
    }
    &:hover{
        &:before,
        &:after{
            opacity: 1;
            top: -10px;
        }
        &:before{
            top: -20px;
            transition-delay: .2s;
        }
    }
    ${media.tablet`
        font-size: 40px;
    `}
    ${media.mobile`
        font-size: 30px;
    `}
`;

export const StyledHomeMouse = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 2;
    bottom: 10px;
    cursor: pointer;
    border: none;
    background-color: inherit;
    padding: 0;
    margin: 0 auto;
    animation: ${mouseTraffic} 1.5s infinite linear;
`;

export const StyledHomeImage = styled.div`
    background-image: url("/images/home/test-2.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({theme}) => theme.dark};
        opacity: 0.7;
    }
`;

export const StyledAboutText = styled.p`
    max-width: 800px;
    margin: 0px auto;
    line-height: 1.5;
    text-align: center;
`;

export const StyledWorkWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    padding: 50px 0;
`;