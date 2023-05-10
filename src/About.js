import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portada from './imagenes/portada.jpg';
import Image from 'react-bootstrap/Image';
import Logo from './imagenes/logo.png'
import Loguito from './imagenes/loguito.png'
import Firma from './imagenes/firma.png'

function About() {
  return (
    <Container className='prin' fluid>
      <Row>
        <Col className='artlist text-lg text-sm' style={{ position: 'relative', width: '100%' }}>
          <Image className='alignnone size-full wp-image-7778' src={Portada} fluid />
          <Col className='logo' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Image className='alignnone size-full wp-image-7778' src={Logo} fluid />
          </Col>
          <Col className='texto' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Image style={{ maxHeight: '6rem' }} src={Loguito} fluid />
            <p>El trabajo que presento en este portafolio básicamente habla de mis amores, pasiones y recuerdos.​</p>
            <p>Mientras recorres mi portafolio, encuentras primero una descripción de quien soy y mi viaje a una transformación interna. Después puedes disfrutar de un trabajo acerca de mi gran amor y de su pasión.​</p>
            <p>Luego te invito a disfrutar algunos de mis paseos favoritos y su significado para mí.​</p>
            <p>Te cuento como recuerdo a mi querida Caracas, y finalizó mostrándote mi gran pasión por los árboles.​</p>
            <p>Espero tu mirada se regocije con este trabajo tanto como la mía lo hizo cuando mi cámara capturaba cada momento.</p>
            <Image style={{ maxHeight: '6rem' }} src={Firma} fluid />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
