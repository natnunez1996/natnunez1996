import { motion } from 'framer-motion'
import './projects.scss'
import cardTrackerDark from '@/assets/images/cardTracker1.png'
import cardTrackerLight from '@/assets/images/cardTracker1Light.png'
import link from '@/assets/icons/arrow-up-right-from-square-solid.svg'
import { Button } from '@/components'
import { useState } from 'react'

function Projects(): JSX.Element {

    const [dark, setDark] = useState(false);

    return (
        <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className='projects'
            initial={{ opacity: 0 }}
        >
            <div className="cardTracker">
                <div className="leftSide">
                    <h2>
                        Card Tracker
                        <a href='https://card-tracker-seven.vercel.app/' target='_blank' rel='noopener noreferrer' >
                            <img src={link} />
                        </a>
                    </h2>
                    <p>A MERN stack that is responsible for tracking credit cards, debit cards, and gift
                        cards.
                    </p>
                    <ul>
                        <li>
                            MongoDB (Database) - NoSQL Database is one of the best options for the project as it is
                            only a small project and not much relation is needed to properly distribute the files and
                            Mongoose which I used in the backend too.
                        </li>
                        <li>
                            ExpressJS (Backend) - since I am more comfortable with Javascript, I used ExpressJS to
                            handle my RESTFUL API.
                        </li>
                        <li>
                            React TypeScript + Vite (Frontend) - React is the library that I am exposed to, and I
                            chose Typescript to easily find any bugs / prevent them while doing the project.
                        </li>
                        <li>
                            Style + Components Library: Material UI - I used Material UI because of its built-in
                            capabilities and ability to easily replicate the code from its documentation. It also allows
                            an inline styling using Vanilla CSS which makes it more flexible.
                        </li>
                        <li>
                            React Form - a built-in library for managing forms with React. I used this to avoid
                            making too many callback functions and event handling. It also has good documentation
                            that is useful like: The controller which is responsible for controlling all my custom
                            inputs that are built with MUI Components.
                        </li>
                        <li>
                            Redux, Redux Toolkit - Store manager for data coming from RESTful API calls
                        </li>
                    </ul>
                </div>
                <div className="rightSide">

                    <Button onClick={() => { setDark(prev => !prev) }}>{!dark ? "Dark Mode" : "Light Mode"}</Button>
                    <figure>
                        {
                            dark ?
                                <img src={cardTrackerDark} alt="Card Tracker Sample" /> :
                                <img src={cardTrackerLight} alt="Card Tracker Sample" />
                        }
                    </figure>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects