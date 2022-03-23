import styled, { css, keyframes } from "styled-components";
import { media } from "src/lib/styled-components/variables";

const leftSide = keyframes`
    0% {
		transform: rotateY(-1deg) scaleX(.92);
	}
	100% {
		transform: rotateY(0deg) scaleX(1);
	}
`;

const rightSide = keyframes`
    0% {
		transform: rotateY(0deg) scaleX(1);
	}
	100% {
		transform: rotateY(1deg) scaleX(.92);
	}
`;

const leftBlockCss = css`
    perspective-origin: left center;
	clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
`;

const rightBlockCss = css`
    perspective-origin: right center;
	clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
	margin-left: -.55px;
`;

export const StyledSliderWrapp = styled.div`
    position: relative;
    margin-top: 100px;
    z-index: 3;
    transition: cubic-bezier(.4, 0, 0, 1);
`;

export const StyledSliderItem = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.25;
    transform: scale(.75);
    transition: opacity 1.8s cubic-bezier(.4, 0, 0, 1), transform 1.8s cubic-bezier(.4, 0, 0, 1);
    .swiper-slide-active & {
        transform: scale(1);
        opacity: 0.8;
    }
`;

export const StyledSliderImageWrapp = styled.div`
    height: 500px;
    width: 100%;
    position: relative;
    ${media.tabletM`
        height: 350px;
    `}
    ${media.tablet`
        height: 270px;
    `}
`;

export const StyledSliderImageBlock = styled.div<{right?: boolean}>`
    position: absolute;
	width: 100%;
	height: 100%;
	perspective: 150px;
	transform-style: preserve-3d;
    ${props => (props.right ? rightBlockCss : leftBlockCss)};
`;

export const StyledSliderImage = styled.img<{right?: boolean}>`
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    animation:  ${props => (props.right ? rightSide : leftSide)} 2s ease-in-out infinite;
    animation-direction: alternate;
`;

export const StyledSliderButton = styled.button`
    position: absolute;
    width: 50%;
    top: 0;
    bottom: 0;
    cursor: pointer;
    outline: none;
    z-index: 2;
    background: none;
    border: none;
    padding: 0;
    color: ${({theme}) => theme.white};
    &.swiper-button-disabled {
        opacity: 0;
    }
    &:before {
        content: "?";
        opacity: 0;
        font-family: "assassin-st", sans-serif;
        transition: opacity .75s ease-out;
        transform: rotate(90deg);
        position: absolute;
        top: 50%;
        font-size: 50px;
    }
    &:hover {
        &:before {
            opacity: 1;
        }
    }
    ${media.tablet`
        &:before {
            opacity: 0.5;
        }
    `}
`;

export const StyledSliderButtonNext = styled(StyledSliderButton)`
    right: 0;
    &:before { 
        right: 10px;
        transform: rotate(90deg) translateX(-50%);
    }
`;

export const StyledSliderButtonPrev = styled(StyledSliderButton)`
    left: 0;
    &:before { 
        left: 10px;
        transform: rotate(-90deg) translateX(50%);
    }
`;

export const StyledSliderText = styled.p`
    font-family: "assassin-st", sans-serif;
    font-size: 32px;
    letter-spacing: 2.5px;
    ${media.tablet`
        font-size: 24px;
        letter-spacing: 1.5px;
    `}
`;

export const StyledDescription = styled.div`
    max-width: 800px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
`;

export const StyledDescriptionItem = styled.p<{active?: boolean}>`
    margin: 0;
    font-size: 20px;
    text-align: center;
    color: ${({ theme }) => theme.white };
    transition: opacity 1.8s cubic-bezier(.4, 0, 0, 1);
    opacity: ${props => (props.active ? 1 : 0)};
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
`;