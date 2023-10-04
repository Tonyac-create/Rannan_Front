import { useState } from 'react'
import { Button, Label, TextInput, Modal } from 'flowbite-react';

function PasswordRecup() {

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <>
            <section className="flex justify-center p-8">
                <h2 className="text-3xl font-medium">Mot de passe oublié?</h2>
            </section>
            <form className="flex flex-col gap-4 w-full mb-5">
                <div>
                    <Label
                        htmlFor="email1"
                        value="Veuillez renseigner votre email pour recevoir le lien de changement de mot de passe :"
                    />
                </div>
                <TextInput
                    id="email1"
                    placeholder="name@gmail.com"
                    required
                    type="email"
                />
                <Button type="submit" onClick={() => props.setOpenModal('default')} className='w-6/12'>
                    Envoyer ma demande
                </Button>
                <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header>Email envoyé</Modal.Header>
                    <Modal.Body className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Veuillez vérifier votre boite mail.
                        </p>
                        <Button href={"/login"}>retour a l'accueil</Button>
                    </Modal.Body>
                </Modal>
            </form>
        </>
    )
}

export default PasswordRecup