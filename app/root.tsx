import './app.css';
import styles from './root.module.css';
import { Suspense } from 'react';
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from 'react-router';
import Footer from '~/components/footer';
import Header from '~/components/header';
import type { Route } from './+types/root';

export const links: Route.LinksFunction = () => [
    {
        href: '/apple-touch-icon.png',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/png'
    },
    {
        href: '/favicon.ico',
        rel: 'icon',
        sizes: '16x16 32x32',
        type: 'image/vnd.microsoft.icon'
    },
    {
        href: '/icon.svg',
        rel: 'icon',
        sizes: 'any',
        type: 'image/svg+xml'
    },
    {
        href: '/manifest.webmanifest',
        rel: 'manifest',
        type: 'text/webappmanifest'
    }
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <head>
                <meta charSet="utf-8" />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <meta content="summary" name="twitter:card" />
                <meta content="@sofken_natori" name="twitter:site" />
                <Meta />
                <Links />
            </head>
            <body>
                <div className={styles['app-container']}>
                    <Suspense>
                        <Header />
                    </Suspense>
                    <main className={styles['contents-container']}>
                        <Suspense>{children}</Suspense>
                    </main>
                    <Suspense>
                        <Footer />
                    </Suspense>
                </div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
