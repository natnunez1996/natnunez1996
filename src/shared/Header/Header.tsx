import './header.scss'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components';


export default function Header(): React.JSX.Element {
    const navigate = useNavigate();



    return (
        <div className='header'>
            <Button onClick={() => { navigate('/') }} >Nathaniel Nunez</Button>
            <ul className=''>
                <li><Button onClick={() => { navigate('/about') }}>About</Button> </li>
                <li><Button onClick={() => { navigate('/projects') }}>Projects</Button></li>
                <li><Button onClick={() => { navigate('/cv') }}>CV</Button></li>
                <li><Button onClick={() => { navigate('/contacts') }}>Contacts</Button></li>
            </ul >

        </div >

    )
}