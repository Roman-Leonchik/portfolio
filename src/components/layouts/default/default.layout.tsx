import React from "react";
import { useRouter } from "next/router";
import { Header } from "src/components/modules/header/header.module";
import { Footer } from "src/components/modules/footer/footer.module";
import { SEO } from "src/components/modules/seo/seo.modules";
import { StyledDefaultLayout } from "./default.styled";
import { PreloaderWebsite } from "src/components/elements/preloader-site/preloader-site.element";

interface IProps {
    isPreloader: boolean;
    isPreloaderHide: boolean;
}

export const DefaultLayout: React.FC<IProps> = ({ children, isPreloader, isPreloaderHide }) => {
    const { pathname } = useRouter();

    return (
        <StyledDefaultLayout>
            <SEO pathname={pathname}/>
            {isPreloaderHide
                ?
                    <PreloaderWebsite loader={isPreloader}/>
                :
                <>
                    <Header isPreloaderHide={isPreloaderHide}/>
                    {children}
                    <Footer />
                </>
            }
        </StyledDefaultLayout>
    );
};