
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Buscador = ({search, setSearch}) => {

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };
  
return(
<>

<Col >
    <Form.Control
    type="search"
    placeholder="Buscar"
    className="mr-sm-2"
    role="search"
    value={search}
    onChange={handleInputChange}
    />
</Col>

</>

)

}

export default Buscador