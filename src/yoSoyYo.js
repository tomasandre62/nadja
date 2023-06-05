import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Mosaico from './imagenes/yosoyyo/mosaico.png'
import YoEscrito from './imagenes/yosoyyo/yoEscrito.fw.png'
import Imagen from './imagen';
import Black from './imagenes/yosoyyo/black.fw.png'
import Yellow from './imagenes/yosoyyo/yellow.fw.png'
import White from './imagenes/yosoyyo/White.fw.png'
import Tres from './imagenes/yosoyyo/tres.fw.png'
import Reflejo from './imagenes/yosoyyo/Imagen17.jpg'



function SoyYo() {
  return (
    <Container fluid>
      <Row>
        <Col className="pdere" sm={5}><Image style={{backgroundColor:'#2D2B27'}} className='alignnone size-full wp-image-7778' src={YoEscrito} fluid /></Col>
        <Col className="pizqui" sm={7}><Imagen  className='alignnone size-full wp-image-7778' ruta={Mosaico} fluid /></Col>
      </Row>
      <Row>
        <Col className="pdere" sm={4} ><Imagen  className='alignnone size-full wp-image-7778' ruta={Black} fluid /></Col>
        <Col className="pcentro" sm={4} ><Imagen  className='alignnone size-full wp-image-7778' ruta={Yellow} fluid /></Col>
        <Col className="pizqui" sm={4} ><Imagen  className='alignnone size-full wp-image-7778' ruta={White} fluid /></Col>
      </Row>
      <Row>
        <Col className="pdere" sm={6} ><Imagen  className='alignnone size-full wp-image-7778' ruta={Tres} fluid /></Col>
        <Col className="pizqui" sm={6} ><Imagen className='alignnone size-full wp-image-7778' ruta={Reflejo} fluid /></Col>
      </Row>
      <a href="#" class="btn-flotante">Volver</a>
      </Container>
  );
}

export default SoyYo;