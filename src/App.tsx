import React, { createContext } from 'react'
import './app.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '@/shared';


export const FadeContext = createContext<any>(null)

function App(): React.JSX.Element {
  const [fade, setFade] = React.useState<boolean>(false);

  return (
    <FadeContext.Provider value={[fade, setFade]}>
      <Header />
      <Outlet />
    </FadeContext.Provider>
  )
}

export default App
