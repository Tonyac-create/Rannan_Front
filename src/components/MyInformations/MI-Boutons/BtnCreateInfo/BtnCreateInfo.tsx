'use client';
import { Button, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import MyInformationData from '../../../Forms/MyInformationData/MyInformationData';
import { createData } from '../../../../services/api/data';
import { useNavigate } from 'react-router-dom';

const BtnCreateInfo = () => {
  
    const [openModal, setOpenModal] = useState<string | undefined>()
    const props = { openModal, setOpenModal }
    const action = "Créer"
    const navigate = useNavigate()
    
    //Fonction API POST data
    
    const createNewData = async(newData: any) => {        
        //requête POST
        const dataCreated = await createData(newData)
        props.setOpenModal('hidden')
    }


  return (
    <>
        {/* Bouton créer dans la modal ouvrante */}
        <Button onClick={() => props.setOpenModal('form-elements')} >{action}</Button>  

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