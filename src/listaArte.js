import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
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

function ArtList() {
    return (
        <Container fluid>
            <Row>
                <Col className='artlist text-lg text-sm' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={soyyo} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">YO SOY YO</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={sebastian} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">SEBASTIAN</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={ventana} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">DESDE MI VENTANA</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={arboles} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">LOS ÁRBOLES</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={paseo} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">UNA TARDE DE PASEO</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={ilusion} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">ILUSIÓN</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={lluvia} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">LLUVIA</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={olas} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">LAS OLAS</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={insomnio} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">INSOMNIO</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={monalisa} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">MI MONALISA</h1>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className='artlist' style={{ position: 'relative', width: '100%' }}>
                    <Image className='alignnone grayscale size-full wp-image-7778' src={caliz} fluid />
                    <Col style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 class="display-6">CÁLIZ, COROLA, ESTAMBRES Y PISTILOS</h1>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default ArtList;