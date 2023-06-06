import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Imagen from './imagen';
import IlusionTitulo from './imagenes/yosoyyo/Ilusioncuadro2.fw.png'
import IlusionCuadro from './imagenes/yosoyyo/Ilusioncuadro1.fw.png'
import Ilusion3 from './imagenes/yosoyyo/ilusion3.fw.png'
import Ilusion4 from './imagenes/yosoyyo/ilusion4.fw.png'
import Ilusion5 from './imagenes/yosoyyo/ilusion5.fw.png'
import { Link } from "react-router-dom";

const handleGoBack = () => {
    window.history.go(-1);
};

function Ilusion() {
    return (
        <Container fluid>
            <Row>
                <Col className="pdere" sm={4}><Image style={{ backgroundColor: '#2D2B27' }} className='alignnone size-full wp-image-7778' src={IlusionTitulo} fluid /></Col>
                <Col className="pizqui" sm={8}><Imagen className='alignnone size-full wp-image-7778' ruta={IlusionCuadro} fluid /></Col>
            </Row>
            <Row>
                <Col className="pdere" sm={6}  ><Imagen className='alignnone size-full wp-image-7778' ruta={Ilusion4} fluid /></Col>
                <Col className="pizqui Bg" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={Ilusion3} fluid /></Col>
            </Row>
            <Row>
                <Col style={{ maxHeight: '600px' }} sm={12} ><Imagen className='alignnone size-full wp-image-7778' ruta={Ilusion5} fluid /></Col>
            </Row>
            <Link className="btn-flotante" onClick={handleGoBack}>Volver</Link>
        </Container>
    );
}

export default Ilusion;