import React from "react";

// Primer letra en mayúscula para que sea un componente

// Componente funcional
function ComponenteFuncional(props){
    console.log(props)

    let { informacion } = props;
    let { nombre, profesion, salario} = informacion;

    return (
        <>
            <p>Nombre: {nombre}</p>
            <p>Profesion: {profesion}</p>
            <p>Salario: {salario}</p>
        </>
    )
}

export default ComponenteFuncional;

// Componentes flecha
export let ComponenteFlecha = (props) =>{
    console.log(props)

    return (
        <>
            <p>Nombre: {props.info.nombre}</p>
            <p>Profesion: {props.info.profesion}</p>
            <p>Salario: {props.info.salario}</p>
        </>
    )
}

// Componente de clase

export class ComponenteClase extends React.Component{
    render(){
        console.log(this.props)
        return(
            <>
                <p>Nombre: {this.props.info.nombre}</p>
                <p>Profesion: {this.props.info.profesion}</p>
                <p>Salario: {this.props.info.salario}</p>
            </>
        )
    }
}
