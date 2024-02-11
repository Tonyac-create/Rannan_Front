import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import { removeDataInShare } from '../../../../services/api/data'
import ModalInfo from '../../ModalInfo'

function BtnDeleteShare({ idToShare, disabled, dataId }: any) {
    const [openModalDeleteShare, setOpenModalDeleteShare] = useState(false)

    // Modal qui s'ouvre quand on valide la création
    const [modalValidDelete, setModalValidDelete] = useState(false)
    const [modalErrorDelete, setModalErrorDelete] = useState(false)

    const deleteShare = async () => {
        setOpenModalDeleteShare(false)
        await removeDataInShare(idToShare, dataId)

        // if (shareToRemove.data.status === 404 && shareToRemove.status === 200) {
        //     setModalErrorDelete(true)
        // } else if (shareToRemove) {
        //     setModalValidModify(true)
        // }
    }

    return (
        <>
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
                            <Button color="success" onClick={() => setOpenModalDeleteShare(false)}>Annuler</Button>
                            <Button color="failure" onClick={() => {
                                deleteShare()
                            }
                            }>Supprimer</Button>
                        </Modal.Footer>
                    </Modal>

                    <ModalInfo
                        setModalValidDelete={setModalValidDelete}
                        textInfo="Partage supprimée avec succès"
                    />
                    <ModalInfo
                        modalValidModify={modalErrorDelete}
                        setModalValidModify={setModalErrorDelete}
                        textInfo="Erreur, veuillez sélectionner l'utilisateur puis choisir le partage à supprimer"
                    />
                </div>
            )}

        </>
    )
}

export default BtnDeleteShare