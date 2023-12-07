'use client';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import MyInformationData from '../../../Forms/MyInformationData/MyInformationData';
import { createData } from '../../../../services/api/data';
import ModalInfo from '../../ModalInfo';

const BtnCreateInfo = ({ refreshData }: any) => {

    const [openModal, setOpenModal] = useState<string | undefined>()
    const props = { openModal, setOpenModal }
    const action = "Créer"

    // Modal qui s'ouvre quand on valide la création
    const [modalValidModify, setModalValidModify] = useState(false)

    //Fonction API POST data

    const createNewData = async (newData: any) => {
        //requête POST
        const dataCreated = await createData(newData)
        console.log("🚀 ~ file: BtnCreateInfo.tsx:22 ~ createNewData ~ dataCreated:", dataCreated)
        if (dataCreated) {
            setModalValidModify(true)
            props.setOpenModal('hidden')
            refreshData()
        }
    }


    return (
        <>
            <ModalInfo
                modalValidModify={modalValidModify}
                setModalValidModify={setModalValidModify}
                textInfo="Information créée avec succès"
            />
            {/* Bouton créer dans la modal ouvrante */}
            <Button onClick={() => props.setOpenModal('form-elements')} >{action}</Button>

            <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <MyInformationData title="Formulaire de création de données" action={action} actionData={createNewData} />

                </Modal.Body>
            </Modal>
        </>
    )
}

export default BtnCreateInfo