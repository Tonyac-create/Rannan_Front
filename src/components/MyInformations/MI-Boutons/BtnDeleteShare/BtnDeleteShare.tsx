import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import { removeDataInShare } from '../../../../services/api/data'
import ModalInfo from '../../ModalInfo'

function BtnDeleteShare({ shareId, disabled, dataId, users }: any) {
    const [openModalDeleteShare, setOpenModalDeleteShare] = useState(false)
    
    // Modal qui s'ouvre quand on valide la création
    const [modalValidDelete, setModalValidDelete] = useState(false)
    const [modalErrorDelete, setModalErrorDelete] = useState(false)
    // console.log("id data:", dataId);
    // console.log("id user :", localStorage.getItem("user.id"));
    // console.log("arrayUsers :", users);
    
    
    const deleteShare = async () => {
        
        const shareToRemove: any = await removeDataInShare(shareId)
        console.log("🚀 ~ file: BtnDeleteShare.tsx:16 ~ deleteShare ~ shareToRemove:", shareToRemove.data.status)
        if (shareToRemove.data.status === 404 && shareToRemove.status === 200) {
            console.log("🚀 ~ file: BtnDeleteShare.tsx:18 ~ deleteShare ~ shareToRemove.status:", shareToRemove.status)
            setModalErrorDelete(true)
        } else if (shareToRemove) {
            setModalValidDelete(true)
        }
    }

    return (
        <>
            <ModalInfo
                modalValidModify={modalValidDelete}
                setModalValidModify={setModalValidDelete}
                textInfo="Partage supprimée avec succès"
            />
            <ModalInfo
                modalValidModify={modalErrorDelete}
                setModalValidModify={setModalErrorDelete}
                textInfo="Erreur, veuillez sélectionner l'utilisateur puis choisir le partage à supprimer"
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