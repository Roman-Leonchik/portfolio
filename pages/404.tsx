import type { NextPage } from "next";
import { DefaultLayout } from "src/components/layouts/default/default.layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { MissingTemplate } from "src/components/templates/missing/missing.template";

interface IProps {
    loader: boolean;
    hideLoader: boolean;
}

const Custom404: NextPage<IProps> = ({loader, hideLoader}) => {
    return (
        <DefaultLayout
            isPreloader={loader}
            isPreloaderHide={hideLoader}
        >
            <MissingTemplate />
        </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale as string, ["common"]),
    },
})

export default Custom404
