import { useState } from 'react'
import { Button, Label, TextInput, Modal } from 'flowbite-react';
import { resetPassword } from '../../services/api/users';

function PasswordRecup() {

    const [openModal, setOpenModal] = useState<string | undefined>();
    const [ email, setEmail ] = useState("")

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        
        const response = await resetPassword(email)
        if (!response.status) {
            return setOpenModal("notFound")
        }
        localStorage.setItem("resetToken", response.data)
        return setOpenModal("default")
    }

    return (
        <>
            <section className="flex justify-center p-8">
                <h2 className="text-3xl font-medium">Mot de passe oublié?</h2>
            </section>
            <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col gap-4 w-full mb-5">
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
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Button type="submit" className='w-6/12'>
                    Envoyer ma demande
                </Button>
            </form>
            <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
                <Modal.Header>Email envoyé</Modal.Header>
                <Modal.Body className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Veuillez vérifier votre boite mail.
                    </p>
                    <Button href={"/login"}>retour a l'accueil</Button>
                </Modal.Body>
            </Modal>
            <Modal show={openModal === 'notFound'} onClose={() => setOpenModal(undefined)}>
                <Modal.Header>Erreur email</Modal.Header>
                <Modal.Body className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        L'email renseigné n'est pas lié a un compte.
                    </p>
                    <div className='flex gap-4'>
                        <Button href={"#"} onClick={() => setOpenModal(undefined)}>fermer</Button>
                        <Button href={"/login"}>retour a l'accueil</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PasswordRecup