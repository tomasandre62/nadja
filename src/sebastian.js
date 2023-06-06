import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Imagen from './imagen';
import MosaicoSebastian from './imagenes/yosoyyo/mosaicoseba.fw.png'
import SebaEscrito from './imagenes/yosoyyo/sebaEscrito.fw.png'
import Sebamo1 from './imagenes/yosoyyo/sebamo1.fw.png'
import Sebamo2 from './imagenes/yosoyyo/sebamo2.fw.png'
import Cuadros1 from './imagenes/yosoyyo/cuadros1.fw.png'
import Cuadros2 from './imagenes/yosoyyo/cuadros2.fw.png'
import { Link } from "react-router-dom";

const handleGoBack = () => {
    window.history.go(-1);
};


function Sebastian() {
    return (
        <Container fluid>
            <Row>
                <Col className="pdere" sm={5}><Image style={{ backgroundColor: '#2D2B27' }} className='alignnone size-full wp-image-7778' src={SebaEscrito} fluid /></Col>
                <Col className="pizqui" sm={7}><Imagen className='alignnone size-full wp-image-7778' ruta={MosaicoSebastian} fluid /></Col>
            </Row>
            <Row>
                <hr></hr>
                <Col className="pdere" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={Sebamo1} fluid /></Col>
                <Col className="pizqui" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={Sebamo2} fluid /></Col>
            </Row>
            <Row>
                <Col className="pdere" sm={6}  ><Imagen className='alignnone size-full wp-image-7778' ruta={Cuadros1} fluid /></Col>
                <Col className="pizqui Bg" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={Cuadros2} fluid /></Col>
            </Row>
            <Link className="btn-flotante" onClick={handleGoBack}>Volver</Link>
        </Container>
    );
}

export default Sebastian;