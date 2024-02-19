import React, { createContext, useState } from 'react'
import './app.scss'
import { Header } from '@/components'
import { Outlet } from 'react-router-dom'


export const FadeContext = createContext<any>(null)

function App(): React.JSX.Element {
  const [fade, setFade] = useState<boolean>(false);

  return (
    <FadeContext.Provider value={[fade, setFade]}>
      <Header />
      <Outlet />
    </FadeContext.Provider>
  )
}

export default App
