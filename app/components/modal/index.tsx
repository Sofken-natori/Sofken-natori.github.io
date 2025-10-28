import styles from './style.module.css';
import {
    clearAllBodyScrollLocks,
    disableBodyScroll,
    enableBodyScroll
} from 'body-scroll-lock';
import {
    useEffect, useRef, useState
} from 'react';
import { createPortal } from 'react-dom';
import { useScrollLock } from '~/hooks/scroll-lock';
import type {
    FC,
    PropsWithChildren,
    Ref
} from 'react';

export type UseModalResult = {
    Modal: FC<ModalProps>,
    close: () => void,
    doesShow: ModalProps['doesShow'],
    open: () => void,
    toggle: () => void
};

export function useModal(): UseModalResult {
    const [doesShow, setShow] = useState(false);
    useScrollLock(doesShow);

    function open() {
        setShow(true);
    }

    function close() {
        setShow(false);
    }

    function toggle() {
        setShow(doesShow => !doesShow);
    }

    return {
        Modal,
        close,
        doesShow,
        open,
        toggle
    };
}

export type ModalProps = PropsWithChildren<{
    doesShow: boolean,
    ref: Ref<HTMLDivElement | null>
}>;

function Modal({
    children, doesShow, ref
}: ModalProps) {
    const rootRef = useRef(null);
    useEffect(() => {
        if(rootRef.current) {
            if(doesShow) {
                disableBodyScroll(rootRef.current, {
                    reserveScrollBarGap: true
                });
            } else {
                enableBodyScroll(rootRef.current);
            }
        }
        return () => {
            clearAllBodyScrollLocks();
        };
    }, [doesShow]);
    if(doesShow) {
        return createPortal(
            <div className={styles['container']} ref={ref}>
                <div className={styles['backdrop']} />
                <div className={styles['root']} ref={rootRef}>
                    {children}
                </div>
            </div>,
            document.body
        );
    }
    return <></>;
}
