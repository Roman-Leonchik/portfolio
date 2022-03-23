import styled, { keyframes, css } from "styled-components";

interface IProps {
    isActiveAnimation: boolean;
}

const animLine = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const animHead = keyframes`
    0% {
        fill: rgb(255, 255, 255);
    }
    50% {
        fill: rgb(255, 255, 255);
    }
    100% {
        fill: fill: rgb(245, 223, 78);;
        stroke-dashoffset: 0;
    }
`;

export const StyledLogoHead_1 = styled.path`
    stroke-dasharray: 253px;
    stroke-dashoffset: 253px;
    animation-delay: 1.8s;
`;

export const StyledLogoHead_2 = styled.path`
    stroke-dasharray: 108px;
    stroke-dashoffset: 108px; 
`;

export const StyledLogoHead_3 = styled.path`
    stroke-dasharray: 123px;
    stroke-dashoffset: 123px;
    animation-delay: 1.8s;
`;

export const StyledLogoHead_4 = styled.path`
    stroke-dasharray: 87px;
    stroke-dashoffset: 87px; 
`;

export const StyledLogoHead_5 = styled.path`
    stroke-dasharray: 1349px;
    stroke-dashoffset: 1349px;  
`;

export const StyledLogoHead_6 = styled.path`
    stroke-dasharray: 116px;
    stroke-dashoffset: 116px;
    animation-delay: 1.8s;
`;

export const StyledLogoLetter_L = styled.path`
    stroke-dasharray: 862px;
    stroke-dashoffset: 862px; 
`;

export const StyledLogoLetter_E_One = styled(StyledLogoLetter_L)`
    stroke-dasharray: 495px;
    stroke-dashoffset: 495px;
    animation-delay: 0.2s;
`;

export const StyledLogoLetter_E_Two = styled(StyledLogoLetter_L)`
    stroke-dasharray: 131px;
    stroke-dashoffset: 131px;
    animation-delay: 0.4s;
`;

export const StyledLogoLetter_O_Two = styled(StyledLogoLetter_L)`
    stroke-dasharray: 221px;
    stroke-dashoffset: 221px;
    animation-delay: 0.6s;
`;

export const StyledLogoLetter_O_One = styled(StyledLogoLetter_L)`
    stroke-dasharray: 376px;
    stroke-dashoffset: 376px;
    animation-delay: 0.8s;
`;

export const StyledLogoLetter_N = styled(StyledLogoLetter_L)`
    stroke-dasharray: 746px;
    stroke-dashoffset: 746px;
    animation-delay: 1s;
`;

export const StyledLogoLetter_Dots = styled(StyledLogoLetter_L)`
    stroke-dasharray: 120px;
    stroke-dashoffset: 120px;
    animation-delay: 1.2s;
`;

export const StyledLogoLetter_R_One = styled(StyledLogoLetter_L)`
    stroke-dasharray: 1048px;
    stroke-dashoffset: 1048px;
    animation-delay: 1.4s;
`;

export const StyledLogoLetter_R_Two = styled(StyledLogoLetter_L)`
    stroke-dasharray: 177px;
    stroke-dashoffset: 177px;
    animation-delay: 1.6s;
`;

export const StyledLogoSvg = styled.svg<IProps>`
    height: 40px;
    ${({isActiveAnimation}) => (!isActiveAnimation && css`
        ${StyledLogoHead_2},
        ${StyledLogoHead_4},
        ${StyledLogoHead_5} {
            animation: ${animHead} 3s ease forwards;
        }
        ${StyledLogoHead_1},
        ${StyledLogoHead_3},
        ${StyledLogoHead_6},
        ${StyledLogoLetter_L},
        ${StyledLogoLetter_E_One},
        ${StyledLogoLetter_E_Two},
        ${StyledLogoLetter_O_Two},
        ${StyledLogoLetter_O_One},
        ${StyledLogoLetter_N},
        ${StyledLogoLetter_Dots},
        ${StyledLogoLetter_R_One},
        ${StyledLogoLetter_R_Two} {
            animation: ${animLine} 2s ease forwards; 
        }
    `)};
`;