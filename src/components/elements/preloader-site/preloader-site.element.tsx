import React from "react";
import { useTranslation } from "next-i18next";
import {
    StyledPreloaderWrapp,
    StyledPreloaderContent,
    StyledPreloaderLine,
} from "./preloader-site.styled";

interface IProps {
    loader: boolean;
}

export const PreloaderWebsite: React.FC<IProps> = ({ loader }) => {
    const { t } = useTranslation("common"); 

    return (
        <StyledPreloaderWrapp loader={loader}>
            <StyledPreloaderContent loader={loader}>
                {t("preloader.name")}
                <StyledPreloaderLine />
                {t("preloader.lastname")}
            </StyledPreloaderContent>
        </StyledPreloaderWrapp>
    );
};