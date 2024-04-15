import './projects.scss'
import cardTrackerDark from '@/assets/images/cardTracker1.png'
import cardTrackerLight from '@/assets/images/cardTracker1Light.png'
import github from '@/assets/icons/github.svg'
import link from '@/assets/icons/arrow-up-right-from-square-solid.svg'
import ImageViewer from 'react-simple-image-viewer';
import { Button, Container, IconContainer, ImageContainer } from '@/components'
import { stack as cardTrackerStack } from '@/assets/data/cardTrackerStack'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { openImage, closeImageViewer } from '@/utils/imageViewerUtils'

function Projects(): JSX.Element {

    const images: string[] = [
        cardTrackerDark,
        cardTrackerLight
    ]
    const [dark, setDark] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [imageViewerOpen, setImageViewerOpen] = useState(false);

    return (
        <Container className='projects'>
            <div className="cardTracker">
                <section className="leftSide">
                    <h1>
                        Card Tracker
                    </h1>
                    <h2>
                        <IconContainer imgSrc={link} link="https://card-tracker-seven.vercel.app/" />
                        <IconContainer imgSrc={github} link="https://github.com/natnunez1996/CardTracker-Frontend" />
                    </h2>
                    <p>A MERN stack that is responsible for tracking credit cards, debit cards, and gift
                        cards.
                    </p>
                    <ul>
                        {cardTrackerStack.map(stack => {
                            return (
                                <motion.li
                                    key={stack.title}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ImageContainer
                                        imgSrc={stack.imgSrc}
                                        link={stack.link}
                                        title={stack.title}
                                    />
                                </motion.li>
                            )
                        })}
                    </ul>

                </section>
                <div className="rightSide">

                    <Button onClick={() => { setDark(prev => !prev) }}>{!dark ? "Dark Mode" : "Light Mode"}</Button>
                    <figure>
                        {
                            dark ?
                                <img src={images[0]} onClick={() => { openImage(0, setCurrentImage, setImageViewerOpen) }} alt="Card Tracker Sample" /> :
                                <img src={images[1]} onClick={() => { openImage(1, setCurrentImage, setImageViewerOpen) }} alt="Card Tracker Sample" />
                        }
                    </figure>
                </div>
            </div>

            {
                imageViewerOpen &&
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    onClose={() => { closeImageViewer(setImageViewerOpen) }}
                />
            }
        </Container>
    )
}

export default Projects