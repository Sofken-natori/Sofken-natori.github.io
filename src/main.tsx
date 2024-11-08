import App from './app.tsx';
import './index.scss';
import { Worker } from '@react-pdf-viewer/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Worker workerUrl={pdfWorker}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Worker>
    </StrictMode>
);
