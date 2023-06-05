import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Imagen from './imagen';
import HeadVentana from './imagenes/yosoyyo/headVentana.fw.png'
import Cuadros5 from './imagenes/yosoyyo/Cuadros5.fw.png'
import Cuadros6 from './imagenes/yosoyyo/Cuadros6.fw.png'





function Ventana() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} ><Image style={{ backgroundColor: '#2D2B27' }} className='alignnone size-full wp-image-7778' src={HeadVentana} fluid /></Col>
            </Row>
            <Row>
                <Col className="pdere" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={Cuadros6} fluid /></Col>
                <Col className="pizqui" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={Cuadros5} fluid /></Col>
            </Row>
            <a href="#" class="btn-flotante">Volver</a>
        </Container>
    );
}

export default Ventana;