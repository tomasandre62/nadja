import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function Imagen({ ruta }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <>
      <img style={{backgroundColor:'#2D2B27'}} src={ruta} alt="Imagen" className="sobre gale" onClick={abrirModal} />

      <Modal show={mostrarModal} onHide={cerrarModal} size='lg'>
        <Col>
          <img style={{backgroundColor:'#2D2B27'}} src={ruta} alt="Imagen en grande" className="img-fluid" />
        </Col>
      </Modal>
    </>
  );
}

export default Imagen;
