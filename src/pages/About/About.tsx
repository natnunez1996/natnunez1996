import profilePic from '@/assets/images/profilepic.jpg'
import './about.scss'
import { Button, Slideshow } from '@/components'
import { motion } from 'framer-motion'
import { stack } from '@/assets/data/techstack'
import { useState } from 'react'



export default function About(): JSX.Element {

    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);


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
                    <h2>Tech Stack:</h2>

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
            </section>
            <figure>
                <img src={profilePic} alt="Nathaniel's Picture" />
            </figure>
        </motion.article>
    )
}