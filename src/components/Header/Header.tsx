import React, { useContext } from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom'
import { FadeContext } from '@/App';
import fadeAnimation from '@/utils';


export default function Header(): React.JSX.Element {
    const navigate = useNavigate();
    const [, setFade]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useContext(FadeContext)



    return (
        <div className='header'>
            <a onClick={() => { fadeAnimation(setFade, navigate, '/') }} className='profile'>Nathaniel Nunez</a>
            <ul className=''>
                <li><a onClick={() => { fadeAnimation(setFade, navigate, 'about') }}>About</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="hobbies">Hobbies</a></li>
                <li><a onClick={() => { fadeAnimation(setFade, navigate, 'cv') }}>CV</a></li>
                <li><a href="contacts">Contacts</a></li>
            </ul>

        </div >

    )
}