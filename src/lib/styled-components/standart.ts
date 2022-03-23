import styled, { keyframes } from "styled-components";
import { media } from "./variables";

export const StyledContainer = styled.div`
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 1200px;
    width: 100%;
    ${media.mobile`
        padding-left: 10px;
        padding-right: 10px;
    `}
`;

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 80px;
    padding-bottom: 80px;
    ${media.mobile`
        padding-bottom: 40px;
    `}
`;

export const StyledTitle = styled.h2`
    font-size: 32px;
    margin: 0;
    margin-bottom: 40px;
    padding: 0;
    text-align: center;
    ${media.mobile`
        font-size: 24px;
    `}
`;

const contentVisibility = keyframes`
    0% {
        transform: translate(5%, -5%) scale(0.95);
        opacity: 0;
    }

    100% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
`;

const contentVisibilityMobile = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const StyledLoaderContent = styled.div`
    animation: ${contentVisibility} 0.5s linear forwards;
    ${media.tablet`
        animation: ${contentVisibilityMobile} 0.5s linear forwards;
    `}
`;