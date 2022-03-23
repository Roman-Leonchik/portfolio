import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import {
    StyledSection,
    StyledContainer,
    StyledTitle,
} from "src/lib/styled-components/standart";
import { CardWork } from "src/components/modules/card-work/card-work.module";
import {
    StyledHomeSection,
    StyledHomeContainer,
    StyledHomeTitle,
    StyledHomeText,
    StyledHomeCity,
    StyledHomeMouse,
    StyledHomeImage,
    StyledAboutText,
    StyledWorkWrapper,
} from "./home.styled";

export const HomeTemplate: React.FC = () => {
    const { t } = useTranslation("common");

    const workList = [
        {
            id: "fujifilm",
            image: "/images/card-work/fujifilm.png",
            title: "Сamera promotion",
            description: "Description for website Fujifilm",
            modal: {
                letter: "F",
                title: <>Fujifilm <span>website</span></>,
                content: "Content",
                image: "/images/card-work/fujifilm.png"
            }
        },
        {
            id: "pediatrician",
            image: "https://www.prizyv.ru/wp-content/uploads/2020/11/Lyubimyj-vrach.-Detskij-risunok.jpg",
            title: "Pediatrician",
            description: "Description",
            modal: {
                letter: "P",
                title: <>Pediatrician <span>website</span></>,
                content: "Content",
                image: "https://www.prizyv.ru/wp-content/uploads/2020/11/Lyubimyj-vrach.-Detskij-risunok.jpg"
            }
        },
    ]

    return (
        <>
            <StyledHomeSection>
                <StyledHomeImage />
                <StyledHomeContainer>
                    <StyledHomeTitle>{t("index.title")}</StyledHomeTitle>
                    <StyledHomeText>{t("index.text")}</StyledHomeText>
                    <StyledHomeCity>{t("index.city")}</StyledHomeCity>
                </StyledHomeContainer>
                <StyledHomeMouse>
                    <Image src="/svg/mouse.svg" alt="" width={50} height={50} />
                </StyledHomeMouse>
            </StyledHomeSection>
            <StyledSection>
                <StyledContainer>
                    <StyledTitle>{t("index.aboutTitle")}</StyledTitle>
                    <StyledAboutText>{t("index.aboutText")}</StyledAboutText>
                </StyledContainer>
            </StyledSection>
            <StyledSection>
                <StyledContainer>
                    <StyledTitle>{t("index.workTitle")}</StyledTitle>
                    <StyledWorkWrapper>
                        {
                            workList.map((item) => (
                                <CardWork
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    modal={item.modal}
                                >
                                    {item.description}
                                </CardWork>
                            ))
                        }
                    </StyledWorkWrapper>
                </StyledContainer>
            </StyledSection>
        </>
    );
};
