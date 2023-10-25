import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { updatePassword } from '../../services/api/users'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const InAppPasswordModif = () => {

    const [ password, setPassword ] = useState("")
    const [ newPassword, setNewPassword ] = useState("")
    const [ checkPassword, setCheckPassword ] = useState("")
    const [ seeModal, setSeeModal ] = useState({status: 0, text: ""})

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (newPassword !== checkPassword) {
            return setSeeModal({status: 1, text: "Nouveaux mots de passes non identiques"})
        }
        if (password === newPassword) {
            return setSeeModal({status: 2, text: "Veuillez entrer un mot de passe différent"})
        }
        const res = await updatePassword({password, update:{newpassword: newPassword}})
        if (res.status === 200) {
            return setSeeModal({status: 3, text: "Nouveau mot de passe enregistré"})
        }
        return setSeeModal({status: 4, text: "Mot de passe actuel incorrect"})
    }

    return (
    <div className="flex flex-col items-center gap-4 w-full lg:w-1/2 p-4 border-4 border-teal-600 rounded-xl">
        <Modal show={seeModal.status !== 0} size="md" popup onClose={() => setSeeModal({status: 0, text: ""})}>
            <Modal.Header />
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

        <h2 className='text-center text-xl font-medium my-2'>Modifier mon mot de passe</h2>
        <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col gap-4 w-full md:w-10/12">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="currentPassword"
                        value="Mot de passe actuel :"
                    />
                </div>
                <TextInput
                    required
                    id="currentPassword"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    shadow
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password"
                        value="Nouveau mot de passe :"
                    />
                </div>
                <TextInput
                    required
                    id="password"
                    type="password"
                    onChange={(event) => setNewPassword(event.target.value)}
                    shadow
                    color="warning"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Confirmez le nouveau mot de passe :"
                    />
                </div>
                <TextInput
                    required
                    id="password2"
                    type="password"
                    onChange={(event) => setCheckPassword(event.target.value)}
                    color="warning"
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

export default InAppPasswordModif