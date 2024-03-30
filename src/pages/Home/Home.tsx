import profilePic from '@/assets/images/profilepic.jpg'
import './home.scss'
import { Button } from '@/components'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function Home(): React.JSX.Element {
    const navigate = useNavigate();


    return (
        <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className='home'
            data-testid="home-page"
            initial={{ opacity: 0 }}
        >
            <section className="aboutSection">
                <img src={profilePic} alt="Nathaniel's Picture" />
                <div>
                    <h1>Nathaniel N. Nunez</h1>
                    <p>
                        Hi, I am an aspiring developer and currently working
                        in different projects that will boost my skills.
                        I am currently looking for my first developer job.
                        Feel free to contact me if you have any projects you want
                        to collaborate with me.
                    </p>
                    <Button onClick={() => { navigate('/about') }}>Learn More about me...</Button>
                </div>
            </section>
        </motion.div >
    )
}