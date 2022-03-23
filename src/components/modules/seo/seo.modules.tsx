import React from "react";
import Head from "next/head";

interface IProps {
    pathname: string;
}

interface ISeoProps {
    description?: string;
    title?: string;
    siteTitle?: string;
}

export const SEO: React.FC<IProps> = ({ pathname }) => {

    const map = new Map<string, ISeoProps>([
        [
            "default",
            {
                title: "Main page Title",
                siteTitle: "siteTitle",
                description: "Main page Description",
            },
        ],
        [
            "/about",
            {
                title: "About",
                siteTitle: "siteTitle",
                description: "Main page About",
            },
        ],
        [
            "/skills",
            {
                title: "Skills",
                siteTitle: "siteTitle",
                description: "Main page Skills",
            },
        ],
        [
            "/work",
            {
                title: "Work",
                siteTitle: "siteTitle",
                description: "Main page Work",
            },
        ],
        [
            "/contact",
            {
                title: "Contact",
                siteTitle: "siteTitle",
                description: "Main page Contact",
            },
        ],
    ]);

    const currentPath = map.has(pathname) ? pathname : "default";

    return (
        <Head>
            <title>
                {map.get(currentPath)?.title || map.get(currentPath)?.siteTitle}
            </title>
            <meta
                name="description"
                content={map.get(currentPath)?.description}
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={map.get(currentPath)?.title} />
            <meta
                property="og:description"
                content={map.get(currentPath)?.description}
            />
            <meta
                property="og:site_name"
                content={map.get(currentPath)?.siteTitle}
            />
            <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
    );
};
