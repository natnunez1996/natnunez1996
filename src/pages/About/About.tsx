import './about.scss'
import github from '@/assets/icons/github.svg'
import linkedIn from '@/assets/icons/linkedin.svg'
import mohawkCollege from '@/assets/images/mohawkcollege.jpg'
import profilePic from '@/assets/images/profilepic.jpg'
import ImageViewer from 'react-simple-image-viewer';
import { Button, Container, IconContainer, Slideshow } from '@/components'
import { stack } from '@/assets/data/techstack'
import { useState } from 'react'
import { closeImageViewer, openImage } from '@/utils/imageViewerUtils'



export function About(): JSX.Element {
    const images: string[] = [
        profilePic,
        mohawkCollege
    ]

    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
    const [currentImage, setCurrentImage] = useState(0);
    const [imageViewerOpen, setImageViewerOpen] = useState(false);

    const paginate = (newPage: number): void => {
        let finalNewPage = newPage + page;
        if (finalNewPage === stack.length) {
            finalNewPage = 0
        } else if (finalNewPage === -1) {
            finalNewPage = stack.length - 1
        }

        setPage([finalNewPage, newPage])
    }

    return (
        <Container className='about'
        >

            <div className="personalInfo">
                <h1>Nathaniel Nunez</h1>
                <div className="aboutBody">
                    <article>
                        <div className="socialMedia">
                            <ul>
                                <li><IconContainer iconSize='40px' imgSrc={github} link='https://github.com/natnunez1996' /></li>
                                <li><IconContainer iconSize='40px' imgSrc={linkedIn} link='https://www.linkedin.com/in/nathaniel-nunez-1a89a5210' /></li>
                            </ul>
                        </div>
                        <p>Hi! I am Nathaniel Nunez. Born and grew up in the Philippines.
                            I am currently in the middle of finding my first job in the Tech Industry!
                        </p>
                    </article>
                    <figure>
                        <img src={images[0]} loading='lazy' onClick={() => { openImage(0, setCurrentImage, setImageViewerOpen) }} alt="Nathaniel's Picture" />
                    </figure>
                </div>
            </div>


            <div className="education">
                <h1>Education</h1>
                <div className="aboutBody">
                    <figure>
                        <img src={images[1]} loading='lazy' onClick={() => { openImage(1, setCurrentImage, setImageViewerOpen) }} alt='Mohawk College Photo' />
                    </figure>
                    <article>
                        <h2><a href='https://www.mohawkcollege.ca/' target="_blank" rel="noopener noreferrer">Mohawk College(2020 - 2021)</a></h2>
                        <h3>C.S. Technician - Software Support</h3>
                        <p><em>GPA:</em> 83.3</p>
                        <ul>
                            <li>Data Structures & Algorithm</li>
                            <li>HTML5, CSS3, Javascript, Java, Python, PHP, C#</li>
                            <li>React Library, React Native, Wordpress</li>
                        </ul>
                    </article>
                </div>
            </div>
            <div className="techStack">
                <h1>Tech Stack</h1>

                <div className="techStack-body">
                    <div className="prev">
                        <Button onClick={() => { paginate(-1) }}>
                            {" ‣ "}
                        </Button>
                    </div>
                    <Slideshow data={stack} direction={direction} page={page} />
                    <Button onClick={() => { paginate(1) }}>
                        {" ‣ "}
                    </Button>
                </div>
            </div>

            {
                imageViewerOpen &&
                <ImageViewer
                    src={images}
                    closeOnClickOutside={true}
                    disableScroll={true}
                    currentIndex={currentImage}
                    onClose={() => { closeImageViewer(setImageViewerOpen) }}
                />
            }
        </Container>
    )
}