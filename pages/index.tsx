import type { NextPage } from "next";
import { HomeTemplate } from "src/components/templates/home/home.template";
import { DefaultLayout } from "src/components/layouts/default/default.layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

interface IProps{
    loader: boolean;
    hideLoader: boolean;
}

const Home: NextPage<IProps> = ({loader, hideLoader }) => {
    return (
    <DefaultLayout
        isPreloader={loader}
        isPreloaderHide={hideLoader}
    >
        <HomeTemplate />
    </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
    ...await serverSideTranslations(locale as string, ["common"]),
    },
})

export default Home
