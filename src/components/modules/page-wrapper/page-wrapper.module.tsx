import React from "react";
import { useState, useEffect } from "react";
import { TitlePage } from "src/components/elements/title-page/title-page.element";
import { LoaderContent } from "src/components/elements/loader-content/loader-content.element";
import {
    StyledSection,
    StyledContainer,
} from "src/lib/styled-components/standart";
import { StyledContent } from "./page-wrapper.styled";

interface IProps {
    title: string | JSX.Element;
    className?: string;
}

export const PageWrapper: React.FC<IProps> = ({ children, title, className }) => {
    const [isLoader, setLoader] = useState(true);
    const [isLoaderVis, setLoaderVis] = useState(true);

    useEffect(() => {
        setLoaderVis(false);
        setTimeout(() =>  {
            setLoader(false);
        }, 500);
    }, []);

    return (
        <StyledSection className={className}>
            <StyledContainer>
                <TitlePage>{title}</TitlePage>
                {isLoader && <LoaderContent isVisivility={isLoaderVis}/>}
                <StyledContent isVisivility={isLoader}>{children}</StyledContent>
            </StyledContainer>
        </StyledSection>
    )
}