import React, { useState } from 'react'
import { Button, Label, TextInput, Modal } from 'flowbite-react';

function PasswordRecup() {

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <>
            <form className="flex max-w-md flex-col gap-4 ml-3">
                <h1 className='text-xl my-2'>Changer le mot de passe</h1>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Votre email"
                    />
                </div>
                <TextInput
                    id="email1"
                    placeholder="name@gmail.com"
                    required
                    type="email"
                />
                <Button type="submit" onClick={() => props.setOpenModal('default')} className='w-6/12'>
                    Envoyer
                </Button>
                <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header>Email envoyé</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Veuillez vérifier votre boite mail.
                            </p>

                        </div>
                    </Modal.Body>
                </Modal>
            </form>
        </>
    )
}

export default PasswordRecup