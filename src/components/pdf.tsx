'use strict';

import styles from './pdf.module.scss';
import jaJP from '@/src/assets/react-pdf-viewer/ja_JP.json';
import { ProgressBar, Viewer, ViewerProps } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { GetFilePluginProps } from '@react-pdf-viewer/get-file';
import { MoreActionsPopover } from '@react-pdf-viewer/toolbar';

export type PdfViewerProps = {
    fileNameGenerator?: GetFilePluginProps['fileNameGenerator'],
    url: ViewerProps['fileUrl']
};

export function PdfViewer({ fileNameGenerator, url }: PdfViewerProps) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar: Toolbar => (
            <Toolbar
                children={slot => (
                    <div className="rpv-toolbar">
                        <div className="rpv-toolbar__left">
                            <div className="rpv-toolbar__item">
                                {slot.ShowSearchPopover({})}
                            </div>
                            <div className="rpv-core__display--hidden rpv-core__display--block-small">
                                <div className="rpv-toolbar__item">
                                    {slot.GoToPreviousPage({})}
                                </div>
                            </div>
                            <div className="rpv-toolbar__item">
                                {slot.CurrentPageInput()}
                                {slot.NumberOfPages({
                                    children: ({ numberOfPages }) => (
                                        <span className="rpv-toolbar__label">
                                            / {numberOfPages}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="rpv-core__display--hidden rpv-core__display--block-small">
                                <div className="rpv-toolbar__item">
                                    {slot.GoToNextPage({})}
                                </div>
                            </div>
                        </div>
                        <div className="rpv-toolbar__center">
                            <div className="rpv-toolbar__item">
                                {slot.ZoomOut({})}
                            </div>
                            <div className="rpv-core__display--hidden rpv-core__display--block-small">
                                <div className="rpv-toolbar__item">
                                    {slot.Zoom({})}
                                </div>
                            </div>
                            <div className="rpv-toolbar__item">
                                {slot.ZoomIn({})}
                            </div>
                        </div>
                        <div className="rpv-toolbar__right">
                            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                                <div className="rpv-toolbar__item">
                                    {slot.SwitchTheme({})}
                                </div>
                            </div>
                            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                                <div className="rpv-toolbar__item">
                                    {slot.EnterFullScreen({})}
                                </div>
                            </div>
                            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                                <div className="rpv-toolbar__item">
                                    {slot.Download({})}
                                </div>
                            </div>
                            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                                <div className="rpv-toolbar__item">
                                    {slot.Print({})}
                                </div>
                            </div>
                            <div className="rpv-toolbar__item">
                                <MoreActionsPopover toolbarSlot={slot} />
                            </div>
                        </div>
                    </div>
                )}
            />
        ),
        sidebarTabs: () => [],
        toolbarPlugin: {
            getFilePlugin: {
                fileNameGenerator
            }
        }
    });
    return (
        <div className={styles['container']}>
            <Viewer
                fileUrl={url}
                localization={jaJP}
                plugins={[
                    defaultLayoutPluginInstance
                ]}
                renderLoader={p => (
                    <div className={styles['progress']}>
                        <ProgressBar progress={Math.round(p)} />
                    </div>
                )}
                theme="auto"
            />
        </div>
    );
}
