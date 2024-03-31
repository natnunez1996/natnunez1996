import profilePic from '@/assets/images/profilepic.jpg'
import './about.scss'
import { Card } from '@/components'
import { AnimatePresence, motion } from 'framer-motion'
import { stack } from '@/assets/data/techstack'
import { useState } from 'react'

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        };
    }
};


export default function About(): JSX.Element {

    const [page, setPage] = useState<number>(0);


    const paginate = (newPage: number): void => {
        let finalNewPage = newPage + page;
        if (finalNewPage === stack.length) {
            finalNewPage = 0
        } else if (finalNewPage === -1) {
            finalNewPage = stack.length - 1
        }

        setPage(finalNewPage)
    }

    return (
        <motion.article
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className='about'
            initial={{ opacity: 0 }}
        >
            <section className='aboutMe'>
                <div className="personalInfo">
                    <h2>Nathaniel Nunez</h2>
                    <p>Hi, I am Nathaniel Nunez. I am in the middle of searching my first ever professional job in tech industry.

                    </p>
                </div>
                <div className="education">
                    <h2>Education</h2>
                    <h3><a href='https://www.mohawkcollege.ca/'>Mohawk College</a></h3>
                    <h3>C.S. Technician - Software Support</h3>
                    <p><em>GPA:</em> 83.3</p>
                </div>
                <div className="techStack">
                    <div className="techStack-header">
                        <div className="prev" onClick={() => { paginate(-1) }}>
                            {"‣"}
                        </div>
                        <h1>Tech Stack:</h1>
                        <div className="next" onClick={() => { paginate(1) }}>
                            {"‣"}
                        </div>
                    </div>
                    <div className="slideshow">
                        <AnimatePresence mode="wait" custom={page} initial={false}>
                            <motion.div
                                key={page}
                                variants={variants}
                                custom={page}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'just', stiffness: 300, damping: 30 },
                                    opacity: { duration: .2 }
                                }}
                            >
                                <Card
                                    title={stack[page].title}
                                    description={stack[page].description}
                                    imgSource={stack[page].imgSrc}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </section>
            <figure>
                <img src={profilePic} alt="Nathaniel's Picture" />
            </figure>
        </motion.article>
    )
}