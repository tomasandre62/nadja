import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import Lluvia1 from './imagenes/yosoyyo/lluvia1.fw.png'


const handleGoBack = () => {
    window.history.go(-1);
};


function Lluvia() {
    return (
        <Container fluid>
            <Row>
                <Col sm={512}><Image style={{ backgroundColor: '#2D2B27' }} className='alignnone size-full wp-image-7778' src={Lluvia1} fluid /></Col>
            </Row>
            <Link className="btn-flotante" onClick={handleGoBack}>Volver</Link>
        </Container>
    );
}

export default Lluvia;