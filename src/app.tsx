import styles from './app.module.scss';
import { Worker } from '@react-pdf-viewer/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min';
import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
    const Header = lazy(() => import('./components/header.tsx'));
    const Footer = lazy(() => import('./components/footer.tsx'));
    const Home = lazy(() => import('./pages/home.tsx'));
    const NotFound = lazy(() => import('./pages/not-found.tsx'));
    const Rational = lazy(() => import('./pages/rational.tsx'));
    const RationalIndex = lazy(() => import('./pages/rational-index.tsx'));
    return (
        <StrictMode>
            <Worker workerUrl={pdfWorker}>
                <BrowserRouter>
                    <div className={styles['app-container']}>
                        <Suspense>
                            <Header />
                        </Suspense>
                        <main className={styles['contents-container']}>
                            <Suspense>
                                <Routes>
                                    <Route
                                        element={<Home />}
                                        path="/"
                                    />
                                    <Route path="/rational">
                                        <Route
                                            element={<RationalIndex />}
                                            path="/rational" />
                                        <Route
                                            element={<Rational />}
                                            path="/rational/:vol"
                                        />
                                    </Route>
                                    <Route
                                        element={<NotFound />}
                                        path="*"
                                    />
                                </Routes>
                            </Suspense>
                        </main>
                        <Suspense>
                            <Footer />
                        </Suspense>
                    </div>
                </BrowserRouter>
            </Worker>
        </StrictMode>
    );
}
