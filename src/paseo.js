import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Imagen from './imagen';
import UnaTarde from './imagenes/yosoyyo/unatarde.fw.png'
import PaseoCuadro from './imagenes/yosoyyo/paseocuadro1.fw.png'
import { Link } from "react-router-dom";


const handleGoBack = () => {
    window.history.go(-1);
};


function Paseo() {
    return (
        <Container fluid>
            <Row>
                <Col className="pdere" sm={5}><Image style={{ backgroundColor: '#2D2B27' }} className='alignnone size-full wp-image-7778' src={UnaTarde} fluid /></Col>
                <Col className="pizqui" sm={7}><Imagen className='alignnone size-full wp-image-7778' ruta={PaseoCuadro} fluid /></Col>
            </Row>
            <Link className="btn-flotante" onClick={handleGoBack}>Volver</Link>
        </Container>
    );
}

export default Paseo;