import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteFuncional, { ComponenteClase, ComponenteFlecha } from './tiposComponentes';

function App() {
  // const [count, setCount] = useState(0)
  let numero = 1;
  let datos = {
    "nombre": "José Navarro",
    "profesion": "Backend",
    "salario": 200000000
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      
      <h1>Hola {nombre()} {numero + 1}</h1>
      <ComponenteFlecha info = {datos} saludo = "Hola"/>
      <ComponenteClase info = {datos}/>
      <ComponenteFuncional info = {datos}/>
    </>
  )
}

function nombre(){
  return "José Navarro"
}

export default App
