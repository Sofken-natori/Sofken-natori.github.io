'use strict';

type Props = {
    description: string,
    path: string,
    title: string,
    type?: string
};

export function DefaultHead({ description, path, title, type = 'article' }: Props): JSX.Element {
    return (
        <>
            <meta charSet="utf-8" />
            <link rel="icon" type="image/vnd.microsoft.icon" sizes="32x32" href="/favicon.ico" />
            <link rel="icon" type="image/svg+xml" href="/icon.svg" />
            <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" type="text/webappmanifest" href="/manifest.webmanifest" />
            <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
            <meta name="description" content={description} />
            <meta property="og:site_name" content="ソフトウェア研究部会" />
            <meta property="og:url" content={`https://sofken-natori.github.io${path}`} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@sofken_natori" />
            <title>{`${title} - ソフトウェア研究部会`}</title>
        </>
    );
}
