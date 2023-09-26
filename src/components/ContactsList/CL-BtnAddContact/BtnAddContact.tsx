import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react'
import AddContact from '../../Forms/AddContact/AddContact';

const BtnAddContact = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <>
            <Button onClick={() => props.setOpenModal('form-elements')}>Ajouter</Button>
            <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <AddContact />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BtnAddContact