'use strict';

import { useLayoutEffect, useState } from 'react';

/**
 * ウィンドウサイズの取得
 * @return [幅, 高さ]
 */
export function useWindowSize(): [number, number] {
    const [size, setSize] = useState<[number, number]>([0, 0]);
    useLayoutEffect(() => {
        function updateSize(): void {
            setSize([Math.max(document.documentElement.clientWidth, window.innerWidth), Math.max(document.documentElement.clientHeight, window.innerHeight)]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);
    return size;
}
