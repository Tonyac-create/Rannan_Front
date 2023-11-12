import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { getShareById } from '../../services/api/data'

function BtnDeleteShare(props: any) {
    const [openModalDeleteShare, setOpenModalDeleteShare] = useState(false)

    const { id } = props

    let idShare: number
    const getIdshare = async () => {
        const idShareToRemove: any = await getShareById(id)
        console.log("🚀 ~ file: Shares.tsx:61 ~ deleteShare ~ idShareToRemove:", idShareToRemove.data.data)
        
    }

    return (
        <>
            <Button onClick={() => {
                setOpenModalDeleteShare(true)
                getIdshare()
                }}>Retirer</Button>
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
                            <Button color="success" >Supprimer</Button>
                            {/* onClick={() => deleteShare()} */}
                            <Button color="failure" onClick={() => setOpenModalDeleteShare(false)}>Annuler</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )} 
        </>
    )
}

export default BtnDeleteShare