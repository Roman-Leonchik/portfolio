import styled, { css } from "styled-components";
import { media } from "src/lib/styled-components/variables";
import { CustomLink } from "../custom-link/custom-link.element";

interface IProps {
    activeLink: boolean;
}

interface IMobile {
    openMenu: boolean;
}

const burgerActive = css`
    &:before,
    &:after {
        transition: .3s ease-out;
    }
    &:before {
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
    }
    &:after {
        bottom: 50%;
        transform: translateY(50%) rotate(45deg);
    }
`;

const activeLinkCss = css`
    box-shadow:
        0 1px ${({theme}) => theme.orange},
        0 2px ${({theme}) => theme.orange},
        0 3px ${({theme}) => theme.orange},
        0 4px ${({theme}) => theme.orange}; 
    opacity: 1;
    &:hover {

    }
`;

const linkHoverCss = css`
    &:hover { 
        box-shadow:
            1px 1px ${({theme}) => theme.orange},
            2px 2px ${({theme}) => theme.orange},
            3px 3px ${({theme}) => theme.orange},
            4px 4px ${({theme}) => theme.orange};
        transform: translateX(-4px);
        transition-timing-function: ease-out;
        opacity: 1;
    }
`;

export const StyledMenu = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const StyledButtonMobile = styled.button<IMobile>`
    display: none;
    width: 30px;
    height: 30px;
    background-color: inherit;
    border: none;
    padding: 0;
    position: relative;
    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background-color: ${({theme}) => theme.orange};
        transition: .3s ease-in;
        transform: translateY(0) rotate(0);
    }
    &:before {
        top: 5px;
    }
    &:after {
        bottom: 5px;
    }
    ${({ openMenu }) => (openMenu && burgerActive)};
    ${media.tablet`
        display: block;
    `}
`;

export const StyledMenuLink = styled(CustomLink)<IProps>`
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s ease-in;
    opacity: 0.8;
    padding: 2px;
    ${({ activeLink }) => (activeLink ? activeLinkCss : linkHoverCss)};
`;

export const StyledMenuItem = styled.li`
    display: flex;
    align-items: center;
    &:not(:last-child) {
        padding-right: 10px;
        &:after {
            content: '/';
            padding-left: 10px;
            opacity: 0.8;
        }
    }
`;

export const StyledMenuList = styled.ul<IMobile>`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    @media (max-width: 768px){
        opacity: 0;
        pointer-events: none;
        position: absolute;
        right: -15px;
        top: 42px;
        z-index: 10;
        transition: .3s ease-in;
        flex-direction: column;
        padding: 20px;
        background-color: ${({theme}) => theme.dark};
        transform: translate(40px, -40px) scale(0.7);
        box-shadow: 0 2px 20px ${({theme}) => theme.dark};
        ${StyledMenuItem} {
            padding-right: 0;
            &:after {
                display: none;
            }
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        ${({ openMenu }) => (openMenu && css`
            opacity: 1;
            pointer-events: auto;
            transition: .3s ease-out;
            transform: translate(0, 0) scale(1);
        `)};
    }
`;

export const StyledMenuLanguage= styled(CustomLink)`
    text-decoration: none;
    padding: 5px;
    border: 1px solid ${({theme}) => theme.orange};
    border-radius: 10px;
`;