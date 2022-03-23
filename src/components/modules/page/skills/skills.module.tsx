import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { PageWrapper } from "src/components/modules/page-wrapper/page-wrapper.module";
import { BlockInfo } from "src/components/elements/block-info/block-info.element";
import {
    StyledContent,
    StyledSkillsWrapp,
    StyledSkillsTitle,
    StyledSkillsItem,
} from "./skills.styled";

export const SkillPage: React.FC = () => {
    const { t } = useTranslation("common");

    const infoArray = [
        {
            id: "SoftCorp",
            date: "2021 - 2022",
            title: "LLC SoftCorp",
            text: "Description and text theme. Description and text theme. Description and text theme."
        },
        {
            id: "Manao",
            date: "2018 - 2021",
            title: "LLC Manao",
            text: "Description and text theme. Description and text theme."
        },
        {
            id: "consulting",
            date: "2016 - 2018",
            title: "Consulting company Center for Development and Growth Alliance",
            text: "Description and text theme. Description and text theme."
        },
        {
            id: "JSC",
            date: "2015 - 2016",
            title: "JSC Minsk Research Institute of Radio Materials",
            text: "Description and text theme."
        }
    ];

    const skillsArray = [
        {
            id: "languages",
            title: "Languages",
            array: [
                {
                    image: "/svg/skills/html.svg",
                    text: "HTML5",
                    id: "html",
                },
                {
                    image: "/svg/skills/css.svg",
                    text: "CSS3",
                    id: "css",
                },
                {
                    image: "/svg/skills/javascript.svg",
                    text: "JavaScript",
                    id: "js",
                },
            ],
        },
        {
            id: "dev-tools",
            title: "Dev Tools",
            array: [
                {
                    image: "/svg/skills/git.svg",
                    text: "Git",
                    id: "git",
                },
                {
                    image: "/svg/skills/jquery.svg",
                    text: "JQuery",
                    id: "jquery",
                },
            ],
        },
        {
            id: "design-tools",
            title: "Design Tools",
            array: [
                {
                    image: "/svg/skills/photoshop.svg",
                    text: "Photoshop",
                    id: "photoshop",
                },
                {
                    image: "/svg/skills/figma.svg",
                    text: "Figma",
                    id: "figma",
                },
            ],
        }
    ]

    return (
        <PageWrapper title={<><span>{t("skills.titleOrange")}</span> {t("skills.title")}</>}>
            <StyledContent>
                <div>
                    <BlockInfo infoArray={infoArray}/>
                </div>
                <div>
                    {
                        skillsArray.map((item) => (
                            <StyledSkillsWrapp key={item.id}>
                                <StyledSkillsTitle>{item.title}</StyledSkillsTitle>
                                {
                                    item.array.map((name) => (
                                        <StyledSkillsItem key={name.id}>
                                            <Image src={name.image} width={26} height={26} alt=""/>
                                            {name.text}
                                        </StyledSkillsItem>
                                    ))
                                }
                            </StyledSkillsWrapp> 
                        ))
                    }
                </div>
            </StyledContent>
        </PageWrapper>
    )
}