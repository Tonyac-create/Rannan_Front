import React, { useState } from 'react';
import { ListGroup, Modal } from 'flowbite-react';
import InfoModal from './RI-InfoModal/InfoModal';

const RecievedInformation = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    return (
        <div className='recievedInfoList contactList__box rounded-md p-2 shadow-xl flex flex-col gap-4 w-1/2'>
            <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">Informations reçues</h3>
            <ListGroup>
                <ListGroup.Item >
                    <h4 onClick={() => props.setOpenModal('dismissible')}>Adresse Maison</h4>
                    <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                        <InfoModal />
                    </Modal>
                </ListGroup.Item>
                <ListGroup.Item>
                    Téléphone Perso
                </ListGroup.Item>
            </ListGroup>
        </div>
  )
}

export default RecievedInformation