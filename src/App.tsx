import './app.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '@/shared';
import { useEffect } from 'react';



function App(): React.JSX.Element {
  useEffect(() => {
    alert("Hello! The site is still not complete. There are still a lot of functions and pages that are missing.")
  }, [])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
