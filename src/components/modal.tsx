'use strict';

import styles from './modal.module.scss';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
    ForwardRefExoticComponent,
    PropsWithChildren,
    RefAttributes,
    forwardRef,
    useEffect,
    useRef,
    useState
} from 'react';
import { createPortal } from 'react-dom';

export type ModalProps = PropsWithChildren<{
    doesShow: boolean
}>;

export type UseModalResult = {
    Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>,
    closeModal: () => void,
    doesShow: ModalProps['doesShow'],
    openModal: () => void,
    toggleModal: () => void
};

export function useModal(): UseModalResult {
    const [doesShow, setDoesShow] = useState(false);

    function openModal() {
        setDoesShow(true);
    }

    function closeModal() {
        setDoesShow(false);
    }

    function toggleModal() {
        setDoesShow(doesShow => !doesShow);
    }

    const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal({ children, doesShow }, ref) {
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
            return createPortal((
                <div
                    className={styles['modal-container']}
                    ref={ref}
                >
                    <div className={styles['modal-backdrop']}></div>
                    <div
                        className={styles['modal-root']}
                        ref={rootRef}
                    >
                        {children}
                    </div>
                </div>
            ), document.getElementById('root')!);
        }
    });

    return {
        Modal,
        closeModal,
        doesShow,
        openModal,
        toggleModal
    };
}
