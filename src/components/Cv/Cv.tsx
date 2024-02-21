/* eslint-disable @typescript-eslint/unbound-method */
import { Button } from '@/shared';
import { FadeContext } from '@/App';
import { Viewer, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core'
import { getFilePlugin, type RenderDownloadProps } from '@react-pdf-viewer/get-file'
import React, { useContext } from 'react'
import file from '@/assets/file/Nathaniel Nunez Resume.pdf';
import './cv.scss'
import '@react-pdf-viewer/core/lib/styles/index.css';


export default function Cv(): React.JSX.Element {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;

    const [fade,]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useContext(FadeContext)


    return (
        <div className={fade ? 'cv--fade' : 'cv'}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
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