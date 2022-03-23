import { 
    StyledFooter,
    StyledSocialList,
    StyledCopyText,
    StyledIconLink,
} from "./footer.styled";
import { StyledContainer } from "src/lib/styled-components/standart";

export const Footer = () => {
    const socialList = [
        {
            name: "vk",
            href: "https://vk.com/infinite_goodness",
        },
        {
            name: "facebook",
            href: "https://www.facebook.com/profile.php?id=100011300327852",
        },
        {
            name: "linkedin",
            href: "https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D0%BB%D0%B5%D0%BE%D0%BD%D1%87%D0%B8%D0%BA-9b5913125/",
        }
    ];


    return (
        <StyledFooter>
            <StyledSocialList>
                {
                    socialList.map((index) => (
                        <StyledIconLink icon={index.name} key={index.name} href={index.href}/>
                    ))
                }
            </StyledSocialList>
            <StyledContainer>
                <StyledCopyText>Copyright © 2021 Roman Leonchik</StyledCopyText>
            </StyledContainer>
        </StyledFooter>
    );
};