import { useState } from "react"

const Titulo = (props: TituloProps) =>{
const [ tamanoFuente, setTamanoFuente]= useState<number>(5)
//tamanoFuentes es una variable interna o de estado
//no es un PROPS, porque esta definida dentro del sistema

const h1OnClick = () => {
    console.log("Hizo Click")
    setTamanoFuente(tamanoFuente+0.5)
}
    return <h1 style={ 
        {
            textAlign:"center",
            backgroundColor: props.color !=undefined ? props.color : "",
            fontSize: `${tamanoFuente}em`
        }}

        onClick={h1OnClick}
    >
        {
            props.texto
        }
    </h1>
    }
interface TituloProps{
    texto : string
    color?:string
}

export default Titulo