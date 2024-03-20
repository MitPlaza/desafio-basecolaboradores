import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const nombresIniciales = [

{ id: '1', name: 'Mitchel Plaza'},
{ id: '2', name: 'Eva Vargas'},
{ id: '3', name: 'Ian Plaza'},
{ id: '4', name: 'Valentina Plaza'},
{ id: '5', name: 'Simona Plaza'}

]

const Ejemplo = () => {

  const [nombres, setNombres] = useState(nombresIniciales)
  const [nombre, setNombre] = useState("")

  const validar = (e) => {
    e.preventDefault()

   

setNombres([...nombres, { id: uuidv4(), name: nombre}])
setNombre('')

  }

  const reset = () => setNombres(nombresIniciales)

return (

<>
<form onSubmit={validar}>
<input type="text" name="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre.name} />
<button type="submit">Agregar</button>
<button type="button" onClick={reset}>Reset</button>
</form>


  <ul>
    {

nombres.map((nombre) => <li key={nombre.id}>{nombre.name}</li>)

    }
  </ul>

  </>

)


}

export default Ejemplo