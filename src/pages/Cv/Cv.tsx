/* eslint-disable @typescript-eslint/unbound-method */
import { Button, Container } from '@/components';
import { Viewer, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core'
import { getFilePlugin, type RenderDownloadProps } from '@react-pdf-viewer/get-file'
import file from '@/assets/file/Nathaniel Nunez Resume.pdf';
import './cv.scss'
import '@react-pdf-viewer/core/lib/styles/index.css';


export function Cv(): React.JSX.Element {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;

    return (
        <Container
            className='cv'
            data-testid="cv-page"
        >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="downloadButton">
                    <Download>
                        {(props: RenderDownloadProps) => (
                            <Button onClick={props.onClick}>
                                Download CV
                            </Button>
                        )}
                    </Download>
                </div>
                <div className="viewer">
                    <Viewer fileUrl={file} defaultScale={SpecialZoomLevel.PageWidth} plugins={[getFilePluginInstance]} />
                </div>
            </Worker>
        </Container>
    )
}