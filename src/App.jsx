import { useState } from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BaseColaboradores } from "./assets/BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";



const App = () => {

    const [colaboradores, setColaboradores] = useState(BaseColaboradores)
    const [alert, setAlert] = useState({msg:"",color:""})
    const [search, setSearch] = useState("")
 
return (

<>
<Container>

  <Row> 
    <Col className="base">
    <h2>Nuestros Colaboradores</h2>
    <Row>
<Buscador search={search} setSearch={setSearch}/>
</Row>
<hr></hr>
<Listado colaboradores={colaboradores} search={search}/>
</Col>
<Col className="formulario">
<h3>Agregar Colaborador</h3>
<Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} setAlert={setAlert} />
{alert.msg !== "" && <Alert msg={alert.msg} color={alert.color}/>}
</Col>
</Row>

</Container>

  </>

)

}

export default App