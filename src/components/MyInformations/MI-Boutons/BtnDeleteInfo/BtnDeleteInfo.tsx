'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiTrash } from 'react-icons/hi'

const BtnDeleteInfo = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    //API DELETE data

    return (
        <>
        <Button pill color='failure' onClick={() => props.setOpenModal('default')}>
            <span className='sm:hidden'><HiTrash className="h-6 w-6"/></span>
            <span className='hidden sm:block'>Supprimer</span>
        </Button>
        <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
            <Modal.Header>Êtes vous sur de vouloir supprimer cette donnée?</Modal.Header>
            <Modal.Body>
            <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Si vous la supprimez, vous ne pourrez plus la récupérer.
                </p>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button color="success" onClick={() => props.setOpenModal(undefined)}>Supprimer</Button>
            <Button color="failure" onClick={() => props.setOpenModal(undefined)}>Annuler</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default BtnDeleteInfo