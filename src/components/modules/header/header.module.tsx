import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
    StyledHeader,
    StyledHeaderWrapp,
} from "./header.styled";
import { Logo } from "src/components/elements/logo/logo.element";
import { Menu } from "src/components/elements/menu/menu.element";
import { CustomLink } from "src/components/elements/custom-link/custom-link.element";

interface IProps {
    isPreloaderHide: boolean;
}

export const Header: React.FC<IProps> = ({ isPreloaderHide }) => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const { t } = useTranslation("common");
    const router = useRouter();

    const menuList = [
        {
            link: "/",
            key: "home",
            text: t("header.home")
        },
        {
            link: "/about",
            key: "about",
            text: t("header.about")
        },
        {
            link: "/skills",
            key: "skills",
            text: t("header.skills")
        },
        {
            link: "/work",
            key: "work",
            text: t("header.work")
        },
        {
            link: "/contact",
            key: "contact",
            text: t("header.contact")
        },
    ];

    const onButtonBurger = (e: any) => {
        e.preventDefault();
        setOpenMenu(!isOpenMenu);
    };

    return (
        <StyledHeader>
            <StyledHeaderWrapp>
                <CustomLink href="/about" passHref>
                    <Logo isPreloaderHide={isPreloaderHide}/>
                </CustomLink>
                <Menu
                    data={menuList}
                    onClick={onButtonBurger}
                    lang={router.locale}
                    path={router.pathname}
                    isOpenMenu={isOpenMenu}
                />
            </StyledHeaderWrapp>
        </StyledHeader>
    );
};
