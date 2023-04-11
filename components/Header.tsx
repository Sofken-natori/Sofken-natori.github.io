'use strict';

export default function Header(): JSX.Element {
    return (
        <>
            <header className="header">
                <p><abbr title="Software Research and Development Group">S.R.D.G.</abbr> ソフトウェア研究部会</p>
            </header>
            <style jsx>{`
                .header {
                    height: 100px;
                    width: inherit;
                    background-color: var(--header-bg-color);

                    p {
                        width: inherit;
                        font-size: 2rem;
                        text-align: center;
                        vertical-align: middle;
                        line-height: 6rem;
                        @media (768px <= width) {
                            font-size: 4rem;
                        }
                    }
                }
            `}</style>
        </>
    );
}
