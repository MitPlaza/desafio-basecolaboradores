import { useState } from "react"

const nombresIniciales = [

'Mitchel Plaza',
  'Eva Vargas',
  'Ian Plaza',
  'Valentina Plaza',
  'Simona Plaza'

]

const Nombres = () => {

  const [nombres, setNombres] = useState(nombresIniciales)
  const [nombre, setNombre] = useState("")

  const validar = (e) => {
    e.preventDefault()

   

setNombres([...nombres, nombre])
setNombre('')

  }

  const reset = () => setNombres(nombresIniciales)

return (

<>
<form onSubmit={validar}>
<input type="text" name="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
<button type="submit">Agregar</button>
<button type="button" onClick={reset}>Agregar</button>
</form>
<ul>
{
nombres.map((nombre) => <li key={nombre}>{nombre}</li>)
}
</ul>
  </>

)


}

export default Nombres