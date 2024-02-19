import React, { useContext } from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom'
import { FadeContext } from '@/App';


export default function Header(): React.JSX.Element {
    const navigate = useNavigate();
    const [, setFade]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useContext(FadeContext)


    const handleClick = (): void => {
        setFade(true)
        setTimeout(() => {
            navigate('about')
        }, 1200)

    }

    return (
        <div className='header'>
            <a href='/' className='profile'>Nathaniel Nunez</a>
            <ul className=''>
                <li><a onClick={handleClick}>About</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="hobbies">Hobbies</a></li>
                <li><a href="cv">CV</a></li>
                <li><a href="contacts">Contacts</a></li>
            </ul>

        </div >

    )
}