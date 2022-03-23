import React from "react";
import { PageWrapper } from "src/components/modules/page-wrapper/page-wrapper.module";
import { CardWork } from "../../card-work/card-work.module";

export const WorkPage: React.FC = () => {

    const modalFujifilm = {
        letter: "F",
        title: <>Fujifilm <span>website</span></>,
        content: "Content",
        image: "/images/card-work/fujifilm.png"
    }

    return (
        <PageWrapper title={<><span>My</span> Works</>}>
            <CardWork
                image="/images/card-work/fujifilm.png"
                title="Сamera promotion"
                modal={modalFujifilm}
            >
                Description for website Fujifilm
            </CardWork>
        </PageWrapper>
    )
}