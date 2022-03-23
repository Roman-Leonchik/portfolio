import styled, { css, keyframes } from "styled-components";
import { PageWrapper } from "../../page-wrapper/page-wrapper.module";

const kGlow = keyframes`
    0% {
		opacity: .6;
	}
	50% {
		opacity: .8;
	}
	100% {
		opacity: .6;
	}
`

const kLight = keyframes`
    0% {
		opacity: .2;
	}
	50% {
		opacity: .3;
	}
	100% {
		opacity: .2;
	}
`

const backgroundCSS = css`
    content: '';
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const StyledAbout = styled(PageWrapper)`
    min-height: calc(100vh - 120px);
    position: relative;
    box-shadow: inset 0 0 500px ${({theme}) => theme.dark};
    &:after {
        ${backgroundCSS}
        background-image: url("/images/about/glow.png");
        animation: ${kGlow} 1.6s ease-in-out infinite;
    }
    &:before {
        ${backgroundCSS}
        background-image: url("/images/about/light.png");
        background-position: center -65px;
        animation: ${kLight} 3s ease-in-out infinite;
    }
`;

export const StyledAboutVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .6;
`;