import React from 'react';
import { Modal } from 'flowbite-react';

const InfoModal = () => {
  return (
    <div>
        <Modal.Header>
            <h4>Nom Information</h4>
        </Modal.Header>
        <Modal.Body>
            <p>Contenu de l'information</p>
        </Modal.Body>
    </div>
  )
}

export default InfoModal