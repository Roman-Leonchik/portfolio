import { 
    StyledMenu,
    StyledButtonMobile,
    StyledMenuList,
    StyledMenuLink,
    StyledMenuItem,
    StyledMenuLanguage,
} from "./menu.styled";

interface IMenuProps {
    link: string;
    key: string;
    text: string;
}

interface IProps {
    data: IMenuProps[];
    onClick: (e: any) => void;
    lang: string | undefined;
    path: string;
    isOpenMenu: boolean;
}

export const Menu: React.FC<IProps> = ({ data, onClick, lang, path, isOpenMenu }) => {
    return (
        <StyledMenu data-testid="menu">
            <StyledButtonMobile onClick={onClick} openMenu={isOpenMenu} data-testid="button-mob"/>
            <StyledMenuList openMenu={isOpenMenu}>
                {
                    data.map((index) => (
                        <StyledMenuItem key={index.key}>
                            <StyledMenuLink
                                href={index.link}
                                activeLink={index.link === path}
                            >
                                {index.text}
                            </StyledMenuLink>
                        </StyledMenuItem>
                    ))
                }
            </StyledMenuList>
            <StyledMenuLanguage
                href={path}
                locale={lang === undefined ? "ru" : (lang === "ru" ? "en" : "ru")}
            >
                {lang === undefined ? "ru" : lang}
            </StyledMenuLanguage>
        </StyledMenu>
    );
};