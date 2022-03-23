import React from "react";
import { Slider } from "../../slider/slider.module";
import {
    StyledAbout,
    StyledAboutVideo
} from "./about.styled";

export const AboutPage: React.FC = () => {
    const sliderList = [
        {
            id: "id-1",
            image: "/images/about/1.png",
            text: "Front",
        },
        {
            id: "id-2",
            image: "/images/about/2.png",
            text: "Front-one",
        },
        {
            id: "id-3",
            image: "/images/about/3.png",
            text: "Full-stack",
        },
        {
            id: "id-4",
            image: "/images/about/4.png",
            text: "Back",
        }
    ];

    const descriprionList = [
        {
            id: "id-1",
            text: "Description Item 1",
        },
        {
            id: "id-2",
            text: "Item descr",
        },
        {
            id: "id-3",
            text: "Fonts desc",
        },
        {
            id: "id-4",
            text: "Description Item 4",
        },
    ];

    return (
        <StyledAbout title={<>About <span>Me</span></>}>
            <Slider slider={sliderList} description={descriprionList}/>
            <StyledAboutVideo src="/images/about/smoke-background-optimized.mp4" autoPlay loop muted/>
        </StyledAbout>
    )
}