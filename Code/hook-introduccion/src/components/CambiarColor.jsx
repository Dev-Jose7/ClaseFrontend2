import { useState, createContext } from 'react'
export let color = createContext();

export default function CambiarColor() {
    let [colorFondo, setColorFondo] = useState(false)
    color = colorFondo;
  return (
    <div>
        <button className='btn-color' onClick={() => setColorFondo(colorFondo)}>Cambiar Color</button>

    </div>
  )
}


