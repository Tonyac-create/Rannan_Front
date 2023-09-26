'use client';
import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import MyInformationData from '../../../Forms/MyInformationData/MyInformationData';

const BtnCreateInfo = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const action = "Créer"

    //Fonction API POST data
    const createNewData = (data) => {
        //requête POST
        console.log("Donnée crée")
    }

  return (
    <>
        <Button onClick={() => props.setOpenModal('form-elements')}>{action}</Button>
            <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <MyInformationData  title="Formulaire de création de données" action={action} actionData={createNewData} />
                </Modal.Body>
            </Modal>
    </>
  )
}

export default BtnCreateInfo