import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './imagenes/logo.png';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <Container fluid style={{ height: '100vh', backgroundColor: '#EFEADE' }}>
      <Row>
        <Col style={{ textAlign: 'center' }}><Image style={{ maxWidth: '70%' }} src={Logo} fluid /></Col>
      </Row>
    </Container>
  );
}

export default About;
