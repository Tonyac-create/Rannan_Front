import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import MyInformationData from '../../../Forms/MyInformationData/MyInformationData'
import { HiPencil } from 'react-icons/hi'
import { updateData } from '../../../../services/api/data'
import ModalInfo from '../../ModalInfo'


const BtnModifyInfo = (props: any) => {
    // Modal qui s'ouvre quand on clique sur Modifier
    const [openModal, setOpenModal] = useState<string | undefined>();

    // Modal qui s'ouvre quand on valide la modification
    const [modalValidModify, setModalValidModify] = useState(false)

    const { id, type, name, value, onClick } = props
    
    const action = "Modifier"

    //Formulaire requete PUT
    const updateInformation = async (newData: any) => {
           
        const updatingData = await updateData(id._id, newData)
        if (updatingData) {
            setModalValidModify(true)
            setOpenModal('hidden')
            onClick()
        }
    }

    return (
        <div className='modifyModal' key={id}>
            <ModalInfo
                modalValidModify={modalValidModify}
                setModalValidModify={setModalValidModify}
                textInfo="Information modifiée"
            />

            <Button onClick={() => setOpenModal('form-elements')} >
                <span className='sm:hidden'><HiPencil className="h-6 w-6" /></span>
                <span className='hidden sm:block'>{action}</span>
            </Button>
            <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <MyInformationData
                        title="Formulaire de modification d'une donnée"
                        action={action}
                        actionData={updateInformation}
                        id={id}
                        type={type}
                        name={name}
                        value={value} 
                        setOpenModal={setOpenModal} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BtnModifyInfo