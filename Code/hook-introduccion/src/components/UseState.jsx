import React, { useContext } from 'react'
import { useState, useEffect } from 'react' // Se usa para modificar el estado de las variables de un component
import { color } from './CambiarColor';

export default function UseState() {
    let [contador, setContador] = useState(0); 
    let [mostrar, setMostrar] = useState(false);
    let colorFondo = useContext(color)

    console.log(useContext(color))

    useEffect(() => {
        document.title = `Contador ${contador}`
    }, [contador]);

    return (
        <>
            { mostrar == true ?
                <div style={{"backgroundColor": colorFondo == "color-oscuro" ? "gray" : "white"}}>
                    <p>Contar: {contador} </p>
                    <button onClick={() => setContador(contador+1)}>Click aqui</button>
                </div> : ""}

            <button onClick={() => setMostrar(!mostrar)}>Mostrar/Ocultar</button>
        </>
    )
}
