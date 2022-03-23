import styled from "styled-components";
import { SocialIcon } from "src/components/elements/social-icon/social-icon.element";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.dark};
    color: ${({theme}) => theme.orange};
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    box-shadow: 0 -2px 20px ${({theme}) => theme.dark};
    margin-top: auto;
`;

export const StyledIconLink = styled(SocialIcon)``;

export const StyledSocialList = styled.div`
    display: inline-flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    &:hover {
        ${StyledIconLink} {
            opacity: 0.5;
        }
    }
    ${StyledIconLink} {
        transition: 0.3s;
        &:hover {
            opacity: 1;
        }
    }
`;

export const StyledCopyText = styled.div`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;