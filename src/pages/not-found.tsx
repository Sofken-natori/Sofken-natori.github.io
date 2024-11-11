'use strict';

import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <h1>ページが見つかりませんでした</h1>
            <p>
                <Link to="/">トップに戻る</Link>か
                <a
                    href="#"
                    onClick={() => window.location.reload()}
                >
                    再読み込み
                </a>
                をお試し下さい。
            </p>
        </>
    );
}
