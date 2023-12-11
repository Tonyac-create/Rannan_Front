import { Button, Modal } from 'flowbite-react';
import { useState } from 'react'
import AddContact from '../../Forms/AddContact/AddContact';

const ModalAddContact = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <>
            <Button onClick={() => props.setOpenModal('form-elements')}>Ajouter</Button>
            <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <div className='modalAddContact flex flex-col gap-3'>
                        <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Ajouter un contact:</h3>
                        <AddContact />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalAddContact