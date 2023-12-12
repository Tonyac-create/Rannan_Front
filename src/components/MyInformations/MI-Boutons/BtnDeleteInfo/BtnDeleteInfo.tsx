'use client';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiTrash } from 'react-icons/hi'
import { removeData } from '../../../../services/api/data';
import ModalInfo from '../../ModalInfo';

const BtnDeleteInfo = (props: any) => {
    const [openModal, setOpenModal] = useState<string | undefined>()
    const prop = { openModal, setOpenModal }

    const { id, onClick } = props

    // Modal qui s'ouvre quand on valide la suppression
    const [modalValidDelete, setModalValidDelete] = useState(false)

    //API DELETE data
    const deleteData = async () => {
        const dataDelete = await removeData(id._id)
        
        if (dataDelete) {
            setModalValidDelete(true)
            prop.setOpenModal('hidden')
            onClick()
        }
    }

    return (
        <>
            <ModalInfo 
                modalValidModify={modalValidDelete}
                setModalValidModify={setModalValidDelete}
                textInfo="Information supprimée"
            />
            <Button color='failure' onClick={() => prop.setOpenModal('default')}>
                <span className='sm:hidden'><HiTrash className="h-6 w-6" /></span>
                <span className='hidden sm:block'>Supprimer</span>
            </Button>
            <Modal show={prop.openModal === 'default'} size="md" popup onClose={() => prop.setOpenModal(undefined)}>
                <Modal.Header>Êtes vous sur de vouloir supprimer cette donnée?</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Si vous la supprimez, vous ne pourrez plus la récupérer.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="success" onClick={deleteData}>Supprimer</Button>
                    <Button color="failure" onClick={() => prop.setOpenModal(undefined)}>Annuler</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BtnDeleteInfo