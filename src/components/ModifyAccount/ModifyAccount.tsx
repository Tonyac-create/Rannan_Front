import { useState } from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { updateUser } from '../../services/api/users';
import { useNavigate } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi'

function ModifyAccount() {
    const navigate = useNavigate()
    const [ nickname, setNickname ] = useState(localStorage.getItem("user.nickname") || "")
    const [ newEmail, setNewEmail ] = useState(localStorage.getItem("user.email") || "")
    const [ password, setPassword ] = useState("")
    const [ seeModal, setSeeModal ] = useState({status: 0, text: ""})

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (nickname !== localStorage.getItem("user.nickname")) {
            localStorage.setItem("user.nickname", nickname)
        }
        const res: any = await updateUser({password, update:{nickname: nickname,email: newEmail}})
        if (res.status === 200) {
            setSeeModal({status: 3, text: "Modifications enregistrés"})
            return navigate("/account")
        }
        setSeeModal({status: 1, text: "Mauvais mot de passe"})
    }

    return (
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/2 p-4 border-4 border-teal-600 rounded-xl">
            <Modal show={seeModal.status !== 0} size="md" popup onClose={() => setSeeModal({status: 0, text: ""})}>
                <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    {seeModal.text}
                    </h3>
                    <div className="flex justify-center gap-4">
                    {(seeModal.status === 3) &&
                        <Button onClick={() => setSeeModal({status: 0, text: ""})}>
                            Retour
                        </Button>
                    }
                    </div>
                </div>
                </Modal.Body>
            </Modal>

            <h2 className='text-center text-xl font-medium my-2'>Modifier mes informations</h2>
            <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col gap-4 w-full md:w-10/12">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Nickname"
                            value="Nickname :"
                        />
                    </div>
                    <TextInput
                        type="text"
                        defaultValue={nickname}
                        onChange={(event) => setNickname(event.target.value)}
                        shadow
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Email :"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        defaultValue={newEmail}
                        onChange={(event) => setNewEmail(event.target.value)}
                        placeholder="name@gmail.com"
                        shadow
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Mot de passe actuel (requis pour valider) :"
                        />
                    </div>
                    <TextInput
                        required
                        id="password2"
                        type="password"
                        color="warning"
                        onChange={(event) => setPassword(event.target.value)}
                        shadow
                    />
                </div>
                <Button type="submit">
                    Enregistrer
                </Button>
        </form>
    </div>
    )
}

export default ModifyAccount
