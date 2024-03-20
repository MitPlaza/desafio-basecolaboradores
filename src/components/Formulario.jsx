import { useState } from "react"
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';



const Formulario = ({colaboradores, setColaboradores, setAlert}) => {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: ""
});
    

   const cambioEnvioFormulario = (e) => {
    e.preventDefault();

    
    if(nuevoColaborador.nombre === '' || nuevoColaborador.correo === '' || nuevoColaborador.edad === '' || nuevoColaborador.cargo === '' || nuevoColaborador.telefono === ''){
        setAlert({msg: "Los campos no pueden estar vacíos", color: 'danger'})
    }else{
        const colaborador_id = {...nuevoColaborador, id: uuidv4() }
        setColaboradores([...colaboradores, colaborador_id])
        setAlert({msg: "Usuario agregado con éxito", color: 'success'})
        setNuevoColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: ""

        })
       
    }

   }

   const cambioNuevoColaborador = (e) => {

    setNuevoColaborador({...nuevoColaborador,[e.target.name]: e.target.value});
    

}
    
    

    return(
        <>
        <Form onSubmit={cambioEnvioFormulario}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
          <Form.Control type="text" name="nombre" placeholder="Nombre del colaborador" onChange={cambioNuevoColaborador} value={nuevoColaborador.nombre}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
          
          <Form.Control type="text" name="correo" placeholder="Correo del colaborador" onChange={cambioNuevoColaborador} value={nuevoColaborador.correo} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
          <Form.Control type="text" name="edad" placeholder="Edad del colaborador" onChange={cambioNuevoColaborador} value={nuevoColaborador.edad}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
          <Form.Control type="text" name="cargo" placeholder="Cargo del colaborador" onChange={cambioNuevoColaborador} value={nuevoColaborador.cargo}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
          <Form.Control type="text" name="telefono" placeholder="Teléfono del colaborador" onChange={cambioNuevoColaborador} value={nuevoColaborador.telefono}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <button type="submit">Registrar</button>
        </Form.Group>

        
       
      </Form>

      </>
    )


}

export default Formulario