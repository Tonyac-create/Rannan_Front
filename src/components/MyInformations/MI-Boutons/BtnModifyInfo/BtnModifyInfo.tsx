import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import MyInformationData from '../../../Forms/MyInformationData/MyInformationData'
import { HiPencil } from 'react-icons/hi'
import { updateData } from '../../../../services/api/data'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import ModalInfo from '../../ModalInfo'


const BtnModifyInfo = (props: any) => {
    // Modal qui s'ouvre quand on clique sur Modifier
    const [openModal, setOpenModal] = useState<string | undefined>();
    const pro = { openModal, setOpenModal }

    // Modal qui s'ouvre quand on valide la modification
    const [modalValidModify, setModalValidModify] = useState(false)

    const { id, name, value } = props
    const action = "Modifier"

    //Formulaire requete PUT
    const updateInformation = async (newData: any) => {
        //Requete PUT depuis service
        const updatingData = await updateData(id.id, newData)
        if (updatingData) {
            setModalValidModify(true)
            pro.setOpenModal('hidden')
        }
        // window.location.reload()
    }

    return (
        <div className='modifyModal' key={id}>
            <ModalInfo 
                modalValidModify={modalValidModify}
                setModalValidModify={setModalValidModify}
                textInfo="Information modifiée"
            />

            <Button onClick={() => pro.setOpenModal('form-elements')} >
                <span className='sm:hidden'><HiPencil className="h-6 w-6" /></span>
                <span className='hidden sm:block'>{action}</span>
            </Button>
            <Modal show={pro.openModal === 'form-elements'} size="md" popup onClose={() => pro.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <MyInformationData title="Formulaire de modification d'une donnée" action={action} actionData={updateInformation} name={name} value={value} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BtnModifyInfo