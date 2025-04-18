import styles from "./app.module.scss";
import { Worker } from "@react-pdf-viewer/core";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pdfWorker from "pdfjs-dist/build/pdf.worker.min";
import { StrictMode, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    const Header = lazy(() => import("./components/header.tsx"));
    const Footer = lazy(() => import("./components/footer.tsx"));
    const Home = lazy(() => import("./pages/home.tsx"));
    const NotFound = lazy(() => import("./pages/not-found.tsx"));
    const Rationale = lazy(() => import("./pages/rationale.tsx"));
    const RationaleIndex = lazy(() => import("./pages/rationale-index.tsx"));
    return (
        <StrictMode>
            <Worker workerUrl={pdfWorker}>
                <BrowserRouter>
                    <div className={styles["app-container"]}>
                        <Suspense>
                            <Header />
                        </Suspense>
                        <main className={styles["contents-container"]}>
                            <Suspense>
                                <Routes>
                                    <Route element={<Home />} path="/" />
                                    <Route path="/rationale">
                                        <Route element={<RationaleIndex />} path="/rationale" />
                                        <Route element={<Rationale />} path="/rationale/:vol" />
                                    </Route>
                                    <Route element={<NotFound />} path="*" />
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
