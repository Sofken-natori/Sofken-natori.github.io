import { useEffect } from 'react';

export function useScrollLock(isModalShow: boolean) {
    useEffect(() => {
        document.body.style.overflow = isModalShow ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalShow]);
}
