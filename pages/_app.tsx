import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import CompositeProvider from "src/providers/composite/composite.provider";
import { appWithTranslation } from "next-i18next";
import "public/fonts/assassin/style.css";
import "public/fonts/roboto/style.css";

const App = (props: AppProps) => {
    const [isPreloader, setPreloader] = useState(true);
    const [isPreloaderHide, setPreloaderHide] = useState(true);

    useEffect(() => {
        setPreloader(false);
        setTimeout(() =>  {
            setPreloaderHide(false);
        }, 2500);
    }, []);

    return (
        <div>
            <CompositeProvider {...props}>
                <props.Component
                    {...props.pageProps}
                    loader={isPreloader}
                    hideLoader={isPreloaderHide}
                />
            </CompositeProvider>
        </div>
    );
};

export default appWithTranslation(App);
