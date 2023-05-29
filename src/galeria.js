import { Col, Container, Row } from "react-bootstrap";
import soyyo from './imagenes/yosoyyo/1.jpg'
import sebastian from './imagenes/yosoyyo/Imagen2.jpg'
import ventana from './imagenes/yosoyyo/Imagen3.jpg'
import arboles from './imagenes/yosoyyo/Imagen4.jpg'
import paseo from './imagenes/yosoyyo/Imagen5.jpg'
import ilusion from './imagenes/yosoyyo/Imagen6.jpg'
import lluvia from './imagenes/yosoyyo/Imagen17.jpg'
import olas from './imagenes/yosoyyo/Imagen16.jpg'
import insomnio from './imagenes/yosoyyo/Imagen7.jpg'
import monalisa from './imagenes/yosoyyo/Imagen14.jpg'
import caliz from './imagenes/yosoyyo/Imagen15.jpg'
import Imagen from './imagen';


function Galeria() {
  return (
    <Container fluid>
      <Row>
        <Col style={{paddingRight:'0'}} className="col-8 dere"><Imagen ruta={ventana} fluid /></Col>
        <Col style={{paddingLeft:'0'}} className="col-4 dere"><Imagen  ruta={sebastian} fluid /></Col>
      </Row>
      <Row>
        <Col style={{paddingRight:'0'}} className="col-4 dere"><Imagen  ruta={paseo} fluid /></Col>
        <Col style={{padding:'0'}} className="col-4 dere"><Imagen  ruta={soyyo} fluid /></Col>
        <Col style={{paddingLeft:'0'}} className="col-4 dere"><Imagen  ruta={arboles} fluid /></Col>
      </Row>
      <Row>
        <Col style={{paddingRight:'0'}} className="col-4 dere"><Imagen  ruta={ilusion} fluid /></Col>
        <Col style={{paddingLeft:'0'}} className="col-8 dere"><Imagen  ruta={monalisa} fluid /></Col>
      </Row>
      <Row>
        <Col style={{paddingRight:'0'}} className="col-3 dere"><Imagen  ruta={olas} fluid /></Col>
        <Col style={{padding:'0'}} className="col-3 dere"><Imagen  ruta={insomnio} fluid /></Col>
        <Col style={{padding:'0'}} className="col-3 dere"><Imagen  ruta={lluvia} fluid /></Col>
        <Col style={{paddingLeft:'0'}} className="col-3 dere"><Imagen  ruta={caliz} fluid /></Col>
      </Row>
    </Container>
  );
}

export default Galeria;
