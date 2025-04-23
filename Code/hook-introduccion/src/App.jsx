import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { color } from './components/CambiarColor'
import './App.css'

import UseState from './components/UseState'
import CambiarColor from './components/CambiarColor'

function App() {

  return (
    <>
        <color.Provider value={"color-oscuro"}>
          <UseState/>
          <CambiarColor/>
        </color.Provider>
    </>
  )
}

export default App
