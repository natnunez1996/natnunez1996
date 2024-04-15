import './header.scss'
import github from '@/assets/icons/github-light.svg'
import gmail from '@/assets/icons/gmail.svg'
import linkedIn from '@/assets/icons/linkedin-light.svg'
import { useNavigate } from 'react-router-dom'
import { Button, IconContainer } from '@/components';


export default function Header(): React.JSX.Element {
    const navigate = useNavigate();



    return (
        <div className='header'>
            <Button onClick={() => { navigate('/') }} >Nathaniel Nunez</Button>
            <ul className='socialMedia'>
                <li><IconContainer iconSize='30px' imgSrc={github} link='https://github.com/natnunez1996' /></li>
                <li><IconContainer iconSize='30px' imgSrc={linkedIn} link='https://www.linkedin.com/in/nathaniel-nunez-1a89a5210' /></li>
                <li><IconContainer iconSize='30px' imgSrc={gmail} link='mailto:nathan.ash.1779@gmail.com' /></li>
            </ul>
            <ul className='navButtons'>
                <li><Button onClick={() => { navigate('/about') }}>About</Button> </li>
                <li><Button onClick={() => { navigate('/projects') }}>Projects</Button></li>
                <li><Button onClick={() => { navigate('/cv') }}>CV</Button></li>
            </ul >

        </div >

    )
}