import styled from "styled-components";
import { CustomLink } from "../custom-link/custom-link.element";

export const StyledIconLink = styled(CustomLink)`
    display: block;
    width: 50px;
    height: 50px;
    text-decoration: none;
    position: relative;
    &:after {
        content: '';
        top: -4px;
        left: -4px;
        padding: 4px;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing: content-box;
        box-shadow: 2px 2px ${({theme}) => theme.orange};
        pointer-events: none;
        opacity: 0;
        transform: rotate(-90deg);
        transition: opacity 0.3s, transform 0.3s;
    }
    &:hover {
        &:after {
            opacity: 1;
            transform: rotate(0deg);
        }
    }
`;

export const StyledIcon = styled.svg`
    stroke: ${({theme}) => theme.white};
`;