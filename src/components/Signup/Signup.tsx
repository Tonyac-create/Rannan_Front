import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { signIn } from '../../services/api/auth';
import { HiOutlineExclamationCircle } from 'react-icons/hi'

function Signup() {
    const [ nickname, setNickname ] = useState<string>("")
    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ checkPassword, setCheckPassword ] = useState<string>("")

    const [ openModal, setOpenModal ] = useState<string | undefined>()
    const [ modalText, setModalText ] = useState<string>("")
    const [ modalBtn, setModalBtn ] = useState<string>("")
    const props = { openModal, setOpenModal }

    const handleSubmit = async (e: any) => {
            e.preventDefault()

        // Vérification des mots de passes renseignés
            if ( password !== checkPassword ) {
                setModalText("Les mots de passes renseignés ne sont pas identiques !")
                setModalBtn("login")
                return props.setOpenModal('pop-up')
            }

        // Envoi des datas à l'api
            const response: any = await signIn({nickname, email, password})
            if (response.status === false) {
                setModalText(response.data.response.data.error)
                setModalBtn("login")
                return props.setOpenModal('pop-up')
            }
            if (response.status === true) {
                setModalText(response.data.message)
                setModalBtn("home")
                return props.setOpenModal('pop-up')
            }
    }

    return (
        <>
            <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    {modalText}
                    </h3>
                    <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
                        J'ai compris
                    </Button>
                    <Button color="gray" onClick={(event) => {event.preventDefault(); props.setOpenModal(undefined); window.location.href = `/${modalBtn}`}}>
                        {modalBtn === "login" ? "Retour a l'accueil" : "Me connecter"}
                    </Button>
                    </div>
                </div>
                </Modal.Body>
            </Modal>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mb-5">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="nickname"
                            value="Votre pseudonyme :"
                        />
                    </div>
                    <TextInput
                        required
                        id="nickname"
                        type="text"
                        maxLength={45}
                        onChange={(event) => setNickname(event.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Votre adresse mail :"
                        />
                    </div>
                    <TextInput
                        required
                        id="email"
                        type="email"
                        maxLength={45}
                        placeholder="name@mail.com"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Votre mot de passe :"
                        />
                    </div>
                    <TextInput
                        required
                        id="password"
                        type="password"
                        maxLength={70}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Confirmez votre mot de passe :"
                        />
                    </div>
                    <TextInput
                        required
                        id="repeat-password"
                        type="password"
                        maxLength={70}
                        onChange={(event) => setCheckPassword(event.target.value)}
                    />
                </div>

                <Button type="submit" >
                    S'inscrire
                </Button>
            </form>
        </>
    )
}

export default Signup