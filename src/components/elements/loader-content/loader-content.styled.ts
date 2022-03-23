import styled, { keyframes, css } from "styled-components";
import { media } from "src/lib/styled-components/variables";

interface IProps {
    isVisivility: boolean;
}

const spin = keyframes`
    0%,
	100% {
		box-shadow: 10px 0px 0 0px inset;
	}
	12% {
		box-shadow: 10px 10px 0 0 inset;
	}
	25% {
		box-shadow: 0 10px 0 0px inset;
	}
	37% {
		box-shadow: -10px 10px 0 0 inset;
	}
	50% {
		box-shadow: -10px 0 0 0 inset;
	}
	62% {
		box-shadow: -10px -10px 0 0 inset;
	}
	75% {
		box-shadow: 0px -10px 0 0 inset;
	}
	87% {
		box-shadow: 10px -10px 0 0 inset;
	}
`;

const hideLoader = keyframes`
    0%,
    50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

export const StyledLoaderWrapp = styled.div<IProps>`
    position: absolute;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    top: 200px;
    left: 0;
    right: 0;
    ${({isVisivility}) => (!isVisivility && css`animation: 0.5s ${hideLoader} linear forwards;`)}
    ${media.tablet`
        width: 150px;
        height: 150px;
        margin-top: 50px;
        margin-bottom: 50px;
    `}
`;

export const StyledLoaderBlock = styled.div`
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        color: ${({theme}) => theme.orange};
        animation: 0.5s ${spin} linear infinite;
    }
    &:before {
        transform: rotateX(70deg);
    }
    &:after {
        transform: rotateY(100deg);
    }
`;