import App from './app.tsx';
import './index.scss';
import { dependencies } from '@/package.json';
import { Worker } from '@react-pdf-viewer/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${dependencies['pdfjs-dist']}/build/pdf.worker.min.js`}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Worker>
    </StrictMode>
);
