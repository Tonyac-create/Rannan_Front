import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { signIn } from '../../services/api/auth';
import { HiOutlineExclamationCircle } from 'react-icons/hi'

function Signup() {
    const [ nickname, setNickname ] = useState<string>("")
    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ checkPassword, setCheckPassword ] = useState<string>("")

    const [ openModal, setOpenModal ] = useState<string | undefined>();
    const [ modalText, setModalText ] = useState<string>("")
    const [ modalBtn, setModalBtn ] = useState<string>("")
    const props = { openModal, setOpenModal };

    const handleSubmit = async (e: any) => {
            e.preventDefault()

        // Vérification des mots de passes renseignés
            if ( password !== checkPassword ) {
                setModalText("Password are differents !")
                setModalBtn("login")
                return props.setOpenModal('pop-up')
            }

        // Récupération des datas de l'api
            const response: any = await signIn({nickname, email, password})
            if (response.status === false) {
                setModalText(response.data.response.data.error)
                setModalBtn("login")
                return props.setOpenModal('pop-up')
            }
            if (response.status === true) {
                setModalText("Account Created !")
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
                        I understand
                    </Button>
                    <Button color="gray" onClick={(event) => {event.preventDefault(); props.setOpenModal(undefined); window.location.href = `/${modalBtn}`}}>
                        {modalBtn === "login" ? "Return to login" : "Go to App"}
                    </Button>
                    </div>
                </div>
                </Modal.Body>
            </Modal>

            <form className="flex flex-col gap-4 w-full mb-5">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Votre pseudonyme"
                        />
                    </div>
                    <TextInput
                        required
                        shadow
                        type="text"
                        onChange={(event) => setNickname(event.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Votre email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        placeholder="name@gmail.com"
                        required
                        shadow
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Votre mot de passe"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        required
                        shadow
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Répétez le mot de passe"
                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        required
                        shadow
                        type="password"
                        onChange={(event) => setCheckPassword(event.target.value)}
                    />
                </div>

                <Button onClick={handleSubmit} >
                    Enregistrer
                </Button>
            </form>
        </>
    )
}

export default Signup