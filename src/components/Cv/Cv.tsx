/* eslint-disable @typescript-eslint/unbound-method */
import { Button } from '@/shared';
import { Viewer, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core'
import { getFilePlugin, type RenderDownloadProps } from '@react-pdf-viewer/get-file'
import React from 'react'
import file from '@/assets/file/Nathaniel Nunez Resume.pdf';
import './cv.scss'
import '@react-pdf-viewer/core/lib/styles/index.css';


export default function Cv(): React.JSX.Element {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance

    return (
        <div className='cv'>
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
                <Download>
                    {(props: RenderDownloadProps) => (
                        <Button onClick={props.onClick}>
                            Download CV
                        </Button>
                    )}
                </Download>
                <div className="viewer">

                    <Viewer fileUrl={file} defaultScale={SpecialZoomLevel.PageWidth} plugins={[getFilePluginInstance]} />
                </div>
            </Worker>
        </div>
    )
}