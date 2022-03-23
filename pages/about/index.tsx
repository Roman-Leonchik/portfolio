import type { NextPage, GetStaticProps } from "next";
import { AboutPage } from "src/components/modules/page/about/about.module";
import { DefaultLayout } from "src/components/layouts/default/default.layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IProps {
    loader: boolean;
    hideLoader: boolean;
}

const About: NextPage<IProps> = ({loader, hideLoader}) => {
    return (
        <DefaultLayout
            isPreloader={loader}
            isPreloaderHide={hideLoader}
        >
            <AboutPage />
        </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale as string, ["common"]),
    },
})

export default About
