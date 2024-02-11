'use client';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import MyInformationData from '../../../Forms/MyInformationData/MyInformationData';
import { createData } from '../../../../services/api/data';
import ModalInfo from '../../ModalInfo';

const BtnCreateInfo = ({ refreshData }: any) => {

    const [openModal, setOpenModal] = useState<string | undefined>()
    const action = "Créer"

    // Modal qui s'ouvre quand on valide la création
    const [modalValidModify, setModalValidModify] = useState(false)

    // Appel API pour la création d'une data
    const createNewData = async (newData: any) => {
        const dataCreated = await createData(newData)
        if (dataCreated) {
            setModalValidModify(true)
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
            <Button onClick={() => setOpenModal('form-elements')} >{action}</Button>

            <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <MyInformationData
                        title="Formulaire de création de données"
                        action={action}
                        actionData={createNewData}
                        setOpenModal={setOpenModal} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BtnCreateInfo