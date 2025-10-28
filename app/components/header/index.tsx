import styles from './style.module.css';
import {
    useEffect, useRef, useState
} from 'react';
import { NavLink } from 'react-router';
import { useModal } from '~/components/modal';
import { useWindowSize } from '~/hooks/window-size';
import { ScreenMinWidth } from '~/lib/constants';
import type {
    DetailedHTMLProps,
    HTMLAttributes,
    PropsWithChildren,
    Ref,
    RefObject
} from 'react';
import type { Resources } from '~/lib/resources';

export default function Header() {
    return (
        <header className={styles['header']}>
            <div className={styles['name']}>
                <abbr title="Software Research and Development Group">
                    S.R.D.G.
                </abbr>
                {' '}
                ソフトウェア研究部会
            </div>
            <Navigation />
        </header>
    );
}

function Navigation() {
    const [width] = useWindowSize();
    const isMobile = width < ScreenMinWidth.LG;
    const [rationaleManifest, setRationaleManifest] = useState<Resources>();
    const [isRationaleMenuBtnHovered, setRationaleMenuBtnHovered]
        = useState(false);
    const [isRationaleMenuHovered, setRationaleMenuHovered] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const navBtnRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        fetch('/resources/rationale/resources.json')
            .then(res => res.json())
            .then(res => setRationaleManifest(res));
    }, []);

    function handleRationaleMenuBtnHovered() {
        setRationaleMenuBtnHovered(true);
    }

    function handleRationaleMenuBtnUnHovered() {
        setRationaleMenuBtnHovered(false);
    }

    function handleRationaleMenuHovered() {
        setRationaleMenuHovered(true);
    }

    function handleRationaleMenuUnHovered() {
        setRationaleMenuHovered(false);
    }

    return (
        <>
            <NavBtn ref={navBtnRef} />
            <NavModal
                isMobile={isMobile}
                navBtnRef={navBtnRef}
                ref={isMobile ? navRef : null}
            >
                <nav
                    className={styles['nav']}
                    ref={isMobile ? null : navRef}
                >
                    <div className={styles['nav-item']}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles['current'] : ''}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className={styles['nav-item']}>
                        <NavLink
                            className={({ isActive }) =>
                                `${styles['nav-submenu-btn']} ${isActive ? styles['current'] : ''}`}
                            onMouseEnter={handleRationaleMenuBtnHovered}
                            onMouseLeave={handleRationaleMenuBtnUnHovered}
                            to="/rationale"
                        >
                            Rationale
                        </NavLink>
                        {rationaleManifest && (
                            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                            <div
                                className={`${styles['nav-submenu']} ${isRationaleMenuBtnHovered || isRationaleMenuHovered ? 'flex' : 'hidden'}`}
                                onMouseEnter={handleRationaleMenuHovered}
                                onMouseLeave={handleRationaleMenuUnHovered}
                            >
                                {rationaleManifest.resources.map(
                                    (rationale, i) => {
                                        const filename
                                            = rationale.files[0]!.filename;
                                        const vol = parseInt(
                                            filename!.substring(
                                                3,
                                                filename.length - 4
                                            ) ?? '-1',
                                            10
                                        );
                                        const year = vol - 32 + 2018; // Web版掲載開始: Vol.32, Vol.32発行年: 2018年 これらを基準に変換
                                        return (
                                            <div
                                                className={styles['nav-item']}
                                                key={i}
                                            >
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? styles['current'] : ''}
                                                    to={`/rationale/${vol}`}
                                                >
                                                    Vol.
                                                    {vol}
                                                    {' '}
                                                    (
                                                    {year}
                                                    )
                                                </NavLink>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        )}
                    </div>
                </nav>
            </NavModal>
        </>
    );
}

type NavBtnProps = Pick<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onClick' | 'style'
> & {
    ref: Ref<HTMLDivElement | null>
};

function NavBtn(props: NavBtnProps) {
    return (
        <div className={styles['nav-btn']} {...props}>
            <div />
            <div />
            <div />
        </div>
    );
}

type NavModalProps = PropsWithChildren<{
    isMobile: boolean,
    navBtnRef: RefObject<HTMLDivElement | null>,
    ref: Ref<HTMLDivElement | null>
}>;

function NavModal({
    children, isMobile, navBtnRef, ref
}: NavModalProps) {
    const {
        Modal, doesShow, toggle
    } = useModal();
    useEffect(() => {
        const navBtn = navBtnRef.current;
        navBtn?.addEventListener('click', toggle);
        return () => {
            navBtn?.removeEventListener('click', toggle);
        };
    }, [navBtnRef,
        toggle]);
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
}
