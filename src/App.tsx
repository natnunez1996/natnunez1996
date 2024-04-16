import './app.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '@/shared';



export function App(): React.JSX.Element {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

