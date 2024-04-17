import './header.scss'
import github from '@/assets/icons/github-light.svg'
import gmail from '@/assets/icons/gmail.svg'
import linkedIn from '@/assets/icons/linkedin-light.svg'
import menu from '@/assets/icons/menu.svg'
import { useNavigate } from 'react-router-dom'
import { Button, IconContainer } from '@/components';
import { useState } from 'react'
import { motion } from 'framer-motion'


export default function Header(): React.JSX.Element {
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = (path: string): void => {
        navigate(path)
        setOpenMenu(false)
    }

    return (
        <div className='header'>
            <Button onClick={() => { handleClick('/') }} >Nathaniel Nunez</Button>

            <div className="menuBar">
                <a onClick={() => { setOpenMenu(prev => !prev) }} target='_blank' rel='noopener noreferrer' >
                    <motion.img whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }} src={menu} style={{ width: "30px", height: "30px" }} />
                </a>
            </div>

            <div className={openMenu ? "menu open" : "menu close"}>
                <ul>
                    <li><IconContainer iconSize='30px' imgSrc={github} link='https://github.com/natnunez1996' /></li>
                    <li><IconContainer iconSize='30px' imgSrc={linkedIn} link='https://www.linkedin.com/in/nathaniel-nunez-1a89a5210' /></li>
                    <li><IconContainer iconSize='30px' imgSrc={gmail} link='mailto:nathan.ash.1779@gmail.com' /></li>
                </ul>
                <ul>
                    <li><Button onClick={() => { handleClick('/about') }}>About</Button> </li>
                    <li><Button onClick={() => { handleClick('/projects') }}>Projects</Button></li>
                    <li><Button onClick={() => { handleClick('/cv') }}>CV</Button></li>
                </ul>
            </div>
        </div>


    )
}