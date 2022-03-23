import type { NextPage, GetStaticProps } from "next";
import { DefaultLayout } from "src/components/layouts/default/default.layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SkillPage } from "src/components/modules/page/skills/skills.module";

interface IProps {
    loader: boolean;
    hideLoader: boolean;
}

const Skills: NextPage<IProps> = ({loader, hideLoader}) => {
    return (
        <DefaultLayout
            isPreloader={loader}
            isPreloaderHide={hideLoader}
        >
            <SkillPage />
        </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale as string, ["common"]),
    },
})

export default Skills
