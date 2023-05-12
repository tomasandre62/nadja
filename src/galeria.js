import { Col, Container, Row } from "react-bootstrap";
import soyyo from './imagenes/yosoyyo.jpg'
import sebastian from './imagenes/sebastian.jpg'
import ventana from './imagenes/desdemiventana.jpg'
import arboles from './imagenes/arboles.jpg'
import paseo from './imagenes/unatardedepaseo.jpg'
import ilusion from './imagenes/ilusion.jpg'
import lluvia from './imagenes/lluvia.jpg'
import olas from './imagenes/lasolas.jpg'
import insomnio from './imagenes/insomnio.jpg'
import monalisa from './imagenes/mimonalisa.jpg'
import caliz from './imagenes/calizcorola.jpg'
import Imagen from './imagen';


function Galeria() {
  return (
    <Container fluid>
      <Row>
        <Col style={{paddingRight:'0'}} className="col-8"><Imagen  ruta={soyyo} fluid /></Col>
        <Col style={{paddingLeft:'0'}} className="col-4"><Imagen  ruta={sebastian} fluid /></Col>
      </Row>
      <Row>
        <Col style={{paddingRight:'0'}} className="col-4"><Imagen  ruta={paseo} fluid /></Col>
        <Col style={{padding:'0'}} className="col-4"><Imagen  ruta={ventana} fluid /></Col>
        <Col style={{paddingLeft:'0'}} className="col-4"><Imagen  ruta={arboles} fluid /></Col>
      </Row>
      <Row>
        <Col style={{paddingRight:'0'}} className="col-4"><Imagen  ruta={ilusion} fluid /></Col>
        <Col style={{paddingLeft:'0'}} className="col-8"><Imagen  ruta={lluvia} fluid /></Col>
      </Row>
      <Row>
        <Col style={{paddingRight:'0'}} className="col-3"><Imagen  ruta={olas} fluid /></Col>
        <Col style={{padding:'0'}} className="col-3"><Imagen  ruta={insomnio} fluid /></Col>
        <Col style={{padding:'0'}} className="col-3"><Imagen  ruta={monalisa} fluid /></Col>
        <Col style={{paddingLeft:'0'}} className="col-3"><Imagen  ruta={caliz} fluid /></Col>
      </Row>
    </Container>
  );
}

export default Galeria;
