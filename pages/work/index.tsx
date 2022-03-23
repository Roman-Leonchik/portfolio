import type { NextPage, GetStaticProps } from "next";
import { DefaultLayout } from "src/components/layouts/default/default.layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { WorkPage } from "src/components/modules/page/work/work.module";

interface IProps {
    loader: boolean;
    hideLoader: boolean;
}

const Work: NextPage<IProps> = ({loader, hideLoader}) => {
    return (
        <DefaultLayout
            isPreloader={loader}
            isPreloaderHide={hideLoader}
        >
            <WorkPage />
        </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale as string, ["common"]),
    },
})

export default Work
