import Table from 'react-bootstrap/Table';

const Listado = ({colaboradores, search}) => {

  const filteredColaboradores = colaboradores.filter((colaborador) => {
    const nombre = colaborador.nombre || ''; 
    const correo = colaborador.correo || ''; 
    const searchTerm = search || ''; 
    return (
      nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      correo.toLowerCase().includes(searchTerm.toLowerCase())
  );
});
    return(
        
<>


<div >
    <div className="row">
<Table striped bordered>
      <thead>
        <tr>
          <th>nombre</th>
          <th>correo</th>
          <th>edad</th>
          <th>cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      
      <tbody >
      {filteredColaboradores.map((colaborador) =>
        <tr key={colaborador.id}> 
          <td>{colaborador.nombre}</td>
          <td>{colaborador.correo}</td>
          <td>{colaborador.edad}</td>
          <td>{colaborador.cargo}</td>
          <td>{colaborador.telefono}</td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
</div>
</>

    )

}

export default Listado