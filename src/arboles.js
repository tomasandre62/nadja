import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Imagen from './imagen';
import HeadArboles from './imagenes/yosoyyo/headArboles.fw.png'
import ArbolCuadro1 from './imagenes/yosoyyo/arbolescuadros1.fw.png'
import ArbolCuadro2 from './imagenes/yosoyyo/arbolescuadros2.fw.png'







function Arboles() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} ><Image style={{ backgroundColor: '#2D2B27' }} className='alignnone size-full wp-image-7778' src={HeadArboles} fluid /></Col>
            </Row>
            <Row>
                <Col className="pdere" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={ArbolCuadro1} fluid /></Col>
                <Col className="pizqui" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={ArbolCuadro2} fluid /></Col>
            </Row>
            <a href="#" class="btn-flotante">Volver</a>
        </Container>
    );
}

export default Arboles;