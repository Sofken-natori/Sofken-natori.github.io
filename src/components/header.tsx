"use strict";

import styles from "./header.module.scss";
import { useModal } from "@/src/components/modal";
import { ScreenMinWidth } from "@/src/constants";
import type { Resources } from "@/src/resources";
import { useWindowSize } from "@/src/window-size";
import {
    DetailedHTMLProps,
    HTMLProps,
    PropsWithChildren,
    RefObject,
    forwardRef,
    useEffect,
    useRef,
    useState,
} from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["name"]}>
                <abbr title="Software Research and Development Group">S.R.D.G.</abbr> ソフトウェア研究部会
            </div>
            <Navigation />
        </header>
    );
}

function Navigation() {
    const [width] = useWindowSize();
    const isMobile = width < ScreenMinWidth.LG;
    const [rationaleManifest, setRationaleManifest] = useState<Resources>();
    const [isRationaleMenuButtonHovered, setIsRationaleMenuButtonHovered] = useState(false);
    const [isRationaleMenuHovered, setIsRationaleMenuHovered] = useState(false);
    const navigationRef = useRef<HTMLDivElement>(null);
    const navigationButtonRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        (async () => {
            const res = await fetch("/resources/rationale/resources.json");
            const data: Resources = await res.json();
            setRationaleManifest(data);
        })();
    }, []);

    function handleRationaleMenuButtonHovered() {
        setIsRationaleMenuButtonHovered(true);
    }

    function handleRationaleMenuButtonUnHovered() {
        setIsRationaleMenuButtonHovered(false);
    }

    function handleRationaleMenuHovered() {
        setIsRationaleMenuHovered(true);
    }

    function handleRationaleMenuUnHovered() {
        setIsRationaleMenuHovered(false);
    }

    return (
        <>
            <NavigationButton ref={navigationButtonRef} />
            <NavigationModal
                isMobile={isMobile}
                navigationButtonRef={navigationButtonRef}
                ref={isMobile ? navigationRef : undefined}
            >
                <nav className={styles["navigation"]} ref={isMobile ? undefined : navigationRef}>
                    <div className={styles["navigation-item"]}>
                        <NavLink className={({ isActive }) => (isActive ? styles["current"] : "")} to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className={styles["navigation-item"]}>
                        <NavLink
                            className={({ isActive }) =>
                                `${styles["navigation-submenu-button"]} ${isActive ? styles["current"] : ""}`
                            }
                            onMouseEnter={handleRationaleMenuButtonHovered}
                            onMouseLeave={handleRationaleMenuButtonUnHovered}
                            to="/rationale"
                        >
                            Rationale
                        </NavLink>
                        {rationaleManifest && (
                            <div
                                className={styles["navigation-submenu"]}
                                onMouseEnter={handleRationaleMenuHovered}
                                onMouseLeave={handleRationaleMenuUnHovered}
                                style={{
                                    display: isRationaleMenuButtonHovered || isRationaleMenuHovered ? "flex" : "none",
                                }}
                            >
                                {rationaleManifest.resources.map((rationale, i) => {
                                    const filename = rationale.files[0].filename;
                                    const vol = parseInt(filename.substring(3, filename.length - 4), 10);
                                    const year = vol - 32 + 2018; // Web版掲載開始: Vol.32, Vol.32発行年: 2018年 これらを基準に変換
                                    return (
                                        <div className={styles["navigation-item"]} key={i}>
                                            <NavLink
                                                className={({ isActive }) => (isActive ? styles["current"] : "")}
                                                to={`/rationale/${vol}`}
                                            >
                                                <NavLink
                                                    className={({
                                                        isActive,
                                                    }) =>
                                                        isActive
                                                            ? styles["current"]
                                                            : ""
                                                    }
                                                    to={`/rationale/${vol}`}
                                                >
                                                    Vol.{vol} ({year})
                                                </NavLink>
                                            </div>
                                        );
                                    },
                                )}
                            </div>
                        )}
                    </div>
                </nav>
            </NavigationModal>
        </>
    );
}

type NavigationButtonProps = {
    onClick?: DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement>["onClick"];
    style?: DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement>["style"];
};

const NavigationButton = forwardRef<HTMLDivElement, NavigationButtonProps>(function NavigationButton(
    { onClick, style },
    ref,
) {
    return (
        <div className={styles["navigation-button"]} onClick={onClick} ref={ref} style={style}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
});

type NavigationModalProps = PropsWithChildren<{
    isMobile: boolean;
    navigationButtonRef: RefObject<HTMLDivElement>;
}>;

const NavigationModal = forwardRef<HTMLDivElement, NavigationModalProps>(function NavigationModal(
    { children, isMobile, navigationButtonRef },
    ref,
) {
    const { Modal, doesShow, toggleModal } = useModal();
    useEffect(() => {
        const navigationButton = navigationButtonRef.current;
        navigationButton?.addEventListener("click", toggleModal);
        return () => {
            navigationButton?.removeEventListener("click", toggleModal);
        };
    }, [navigationButtonRef, toggleModal]);
    return (
        <>
            {isMobile ? (
                <Modal doesShow={doesShow} ref={ref}>
                    {children}
                </Modal>
            ) : (
                children
            )}
        </>
    );
});
