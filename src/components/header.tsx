'use strict';

import styles from './header.module.scss';
import { useModal } from '@/src/components/modal';
import { ScreenMinWidth } from '@/src/constants';
import type { Resources } from '@/src/resources';
import { useWindowSize } from '@/src/window-size';
import {
    DetailedHTMLProps,
    HTMLProps,
    PropsWithChildren,
    RefObject,
    forwardRef,
    useEffect,
    useRef,
    useState
} from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className={styles['header']}>
            <div className={styles['name']}>
                <abbr title="Software Research and Development Group">S.R.D.G.</abbr> ソフトウェア研究部会
            </div>
            <Navigation />
        </header>
    );
}

function Navigation() {
    const [width] = useWindowSize();
    const isMobile = width < ScreenMinWidth.LG;
    const [rationalManifest, setRationalManifest] = useState<Resources>();
    const [isRationalMenuButtonHovered, setIsRationalMenuButtonHovered] = useState(false);
    const [isRationalMenuHovered, setIsRationalMenuHovered] = useState(false);
    const navigationRef = useRef<HTMLDivElement>(null);
    const navigationButtonRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        (async() => {
            const res = await fetch('/resources/rational/resources.json');
            const data: Resources = await res.json();
            setRationalManifest(data);
        })();
    }, []);

    function handleRationalMenuButtonHovered() {
        setIsRationalMenuButtonHovered(true);
    }

    function handleRationalMenuButtonUnHovered() {
        setIsRationalMenuButtonHovered(false);
    }

    function handleRationalMenuHovered() {
        setIsRationalMenuHovered(true);
    }

    function handleRationalMenuUnHovered() {
        setIsRationalMenuHovered(false);
    }

    return (
        <>
            <NavigationButton ref={navigationButtonRef} />
            <NavigationModal
                isMobile={isMobile}
                navigationButtonRef={navigationButtonRef}
                ref={isMobile ? navigationRef : undefined}
            >
                <nav
                    className={styles['navigation']}
                    ref={isMobile ? undefined : navigationRef}
                >
                    <div className={styles['navigation-item']}>
                        <NavLink
                            className={({ isActive }) => isActive ? styles['current'] : ''}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className={styles['navigation-item']}>
                        <NavLink
                            className={({ isActive }) => `${styles['navigation-submenu-button']} ${isActive ? styles['current'] : ''}`}
                            onMouseEnter={handleRationalMenuButtonHovered}
                            onMouseLeave={handleRationalMenuButtonUnHovered}
                            to="/rational"
                        >
                            Rational
                        </NavLink>
                        {rationalManifest && (
                            <div
                                className={styles['navigation-submenu']}
                                onMouseEnter={handleRationalMenuHovered}
                                onMouseLeave={handleRationalMenuUnHovered}
                                style={{
                                    display: isRationalMenuButtonHovered || isRationalMenuHovered ? 'flex' : 'none'
                                }}
                            >
                                {rationalManifest.resources.map((rational, i) => {
                                    const filename = rational.files[0].filename;
                                    const vol = parseInt(filename.substring(3, filename.length - 4), 10);
                                    const year = vol - 32 + 2018; // Web版掲載開始: Vol.32, Vol.32発行年: 2018年 これらを基準に変換
                                    return (
                                        <div
                                            className={styles['navigation-item']}
                                            key={i}
                                        >
                                            <NavLink
                                                className={({ isActive }) => isActive ? styles['current'] : ''}
                                                to={`/rational/${vol}`}
                                            >
                                                Vol.{vol} ({year})
                                            </NavLink>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </nav>
            </NavigationModal>
        </>
    );
}

type NavigationButtonProps = {
    onClick?: DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement>['onClick']
    style?: DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement>['style']
};

const NavigationButton = forwardRef<HTMLDivElement, NavigationButtonProps>(function NavigationButton({
    onClick,
    style
}, ref) {
    return (
        <div
            className={styles['navigation-button']}
            onClick={onClick}
            ref={ref}
            style={style}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
});

type NavigationModalProps = PropsWithChildren<{
    isMobile: boolean,
    navigationButtonRef: RefObject<HTMLDivElement>
}>;

const NavigationModal = forwardRef<HTMLDivElement, NavigationModalProps>(function NavigationModal({
    children,
    isMobile,
    navigationButtonRef
}, ref) {
    const {
        Modal,
        doesShow,
        toggleModal
    } = useModal();
    useEffect(() => {
        const navigationButton = navigationButtonRef.current;
        navigationButton?.addEventListener('click', toggleModal);
        return () => {
            navigationButton?.removeEventListener('click', toggleModal);
        };
    }, [navigationButtonRef, toggleModal]);
    return (
        <>
            {isMobile ? (
                <Modal
                    doesShow={doesShow}
                    ref={ref}
                >
                    {children}
                </Modal>
            ) : children}
        </>
    );
});
