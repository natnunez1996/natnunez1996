import React, { useContext } from 'react'
import profilePic from '@/assets/images/profilepic.jpg'
import './home.scss'
import { Button } from '@/shared'
import { useNavigate } from 'react-router-dom'
import { FadeContext } from '@/App'
import fadeAnimation from '@/utils'

export default function Home(): React.JSX.Element {
    const navigate = useNavigate();
    // const [fade, setFade] = useState<boolean>(false);
    const [fade, setFade]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useContext(FadeContext)

    const handleClick = (location: string): void => {
        fadeAnimation(setFade, navigate, location)
    }


    return (
        <div className='home'>
            <section className={fade ? "aboutSectionfade" : "aboutSection"}>
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
                    <Button onClick={() => { handleClick('about') }}>Learn More about me...</Button>
                </div>
            </section>
        </div >
    )
}