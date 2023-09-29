import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import MyInformationData from '../../../Forms/MyInformationData/MyInformationData'
import {HiPencil} from 'react-icons/hi'

const BtnModifyInfo = (props) => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const pro = { openModal, setOpenModal };

    const { id, name, value } = props;
    const action = "Modifier";

    //Formulaire requete PUT
    const updateInformation = () => {
        //Requete PUT depuis service
        //setInformation(body requete)
        console.log("Vous avez modifié cette donnée")
    }

    return (
        <div className='modifyModal' key={id}>
            <Button  color="purple" pill  onClick={() => pro.setOpenModal('form-elements')}>
            <span className='sm:hidden'><HiPencil className="h-6 w-6"/></span>
            <span className='hidden sm:block'>{action}</span>
            </Button>
            <Modal show={pro.openModal === 'form-elements'} size="md" popup onClose={() => pro.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <MyInformationData  title="Formulaire de modification d'une donnée" action={action} actionData={updateInformation} name={name} value={value} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BtnModifyInfo