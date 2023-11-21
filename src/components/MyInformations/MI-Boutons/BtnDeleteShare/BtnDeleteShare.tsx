import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { removeShare } from '../../../../services/api/data'
import ModalInfo from '../../ModalInfo'

function BtnDeleteShare({ shareId, disabled }: any) {
    const [openModalDeleteShare, setOpenModalDeleteShare] = useState(false)

    // Modal qui s'ouvre quand on valide la création
    const [modalValidDelete, setModalValidDelete] = useState(false)

    const deleteShare = async () => {
        const shareToRemove: any = await removeShare(shareId)
        if (shareToRemove)
        setModalValidDelete(true)
    }

    return (
        <>
            <ModalInfo
                modalValidModify={modalValidDelete}
                setModalValidModify={setModalValidDelete}
                textInfo="Partage supprimée avec succès"
            />
            <Button
                disabled={disabled}
                onClick={() => { setOpenModalDeleteShare(true) }}
            >Retirer</Button>

            {openModalDeleteShare && (
                <div>
                    <Modal show={openModalDeleteShare} onClose={() => setOpenModalDeleteShare(false)}>
                        <Modal.Header>Êtes vous sur de vouloir supprimer ce partage?</Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Vous pourrez repartager plus tard si vous voulez.
                                </p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button color="success" onClick={() => deleteShare()}>Supprimer</Button>
                            <Button color="failure" onClick={() => setOpenModalDeleteShare(false)}>Annuler</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </>
    )
}

export default BtnDeleteShare