import FormularioLogIn from "./FormularioLogIn"
import Titulo from "./Titulo"

import "./SeccionCentral.css"

const SeccionCentral = ()=>{
    return <div >
    <Titulo />
    <div className="centrar">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" />
    </div>
        
        <FormularioLogIn/>
    </div>

    
}
export default SeccionCentral