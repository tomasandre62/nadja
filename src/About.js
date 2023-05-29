import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portada from './imagenes/portada.jpg';
import Image from 'react-bootstrap/Image';
import Logo from './imagenes/logo.png'
import Loguito from './imagenes/About.png'

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
            <Image src={Loguito} fluid />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
