import styled, { keyframes } from "styled-components";
import { media } from "src/lib/styled-components/variables";
import { StyledSection } from "src/lib/styled-components/standart";
import { CustomLink } from "src/components/elements/custom-link/custom-link.element";

const catAnimation = keyframes`
    0% {
        transform: rotate(0); 
    }
    25% {
        transform: rotate(-10deg);
    }
    50% {
        transform: rotate(0deg); 
    }
    75% {
        transform: rotate(10deg); 
    }
    100% {
        transform: rotate(0); 
    }
`;

export const StyledMissingSection = styled(StyledSection)`
    min-height: calc(100vh - 120px);
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const StyledMissingLink = styled(CustomLink)`
    font-size: inherit;
    text-decoration: none;
    font-weight: normal;
`;

export const StyledMissingText = styled.p`
    max-width: 550px;
    margin: 0 auto;
    line-height: 1.4;
    font-size: 28px;
    letter-spacing: 0.3px;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    ${media.tabletM`
        font-size: 24px;
    `}
    ${media.tablet`
        font-size: 20px;
    `}
`;

export const StyledMissingImage = styled.svg`
    max-width: 450px;
    width: 100%;
    margin-bottom: 20px;
    path {
        fill: ${({theme}) => theme.orange};
    }
`;

export const StyledMissingCat = styled.path`
    transform-origin: center;
    animation: ${catAnimation} 5s infinite ease forwards; 
`;