import { createContext, useCallback, useContext, useState } from "react";
import { PopupWork, IWorkContent } from "src/components/modules/popup/work/popup-work.module";

export interface IModalsContext {
    openWorkModal: (
        letter: string,
        image: string,
        title: string | JSX.Element,
        content: string | JSX.Element,
    ) => void;
    closeWorkModal: () => void;
}

const noop = () => {
    return undefined;
};

const defaultModalsContext: IModalsContext = {
    openWorkModal: noop,
    closeWorkModal: noop,
};

interface IWorkModalState extends IWorkContent {
    animation: boolean;
}

const ModalsContext = createContext<IModalsContext>(defaultModalsContext);

export const useModals = () => {
    return useContext(ModalsContext);
};

export const ModalsProvider: React.FC = ({ children }) => {
    const bodyFixed = () => {
        const scrolPosition = document.documentElement.scrollTop
        document.body.style.top = "-"+scrolPosition+"px";
        document.body.classList.add('scroll-hide');
    }

    const bodyScroll = () => {
        const scroll = Number(document.body.style.top.match(/[0-9]/g)?.join(""));
        document.body.classList.remove('scroll-hide');
        window.scrollTo(0, scroll);
        document.body.style.top = "0px";
    }

    // WORK MODAL
    const [ isWorkModalVis,  setWorkModalVis] = useState(false);
    const [
            isWorkModalState,
            setWorkModalState
        ] = useState<IWorkModalState>({
            animation: false,
            letter: "",
            title: "",
            content: "",
            image: "",
        });

    const openWorkModal = useCallback(
        (   letter: string,
            image: string,
            title: string | JSX.Element,
            content: string | JSX.Element,
        ) => {
            setWorkModalState({
                animation: true,
                letter,
                title,
                content,
                image,
            });
            setWorkModalVis(true);
            bodyFixed();
    }, []);

    const closeWorkModal = () => {
        setWorkModalState((prev) => ({
            ...prev,
            animation: false,
        }));
        bodyScroll();
        setTimeout(() => {
            setWorkModalVis(false);
        }, 3000)
    };

    const context = {
        openWorkModal,
        closeWorkModal,
    };

    return (
        <ModalsContext.Provider value={context}>
            {children}
            {isWorkModalVis && (
                <PopupWork
                    letter={isWorkModalState.letter}
                    image={isWorkModalState.image}
                    title={isWorkModalState.title}
                    content={isWorkModalState.content}
                    animation={isWorkModalState.animation}
                    closeModal={closeWorkModal}
                />
            )}
        </ModalsContext.Provider>
    );
};
