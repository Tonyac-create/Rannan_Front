import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { updateUser } from '../../services/api/users';
import { useNavigate } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi'

export default function ChoiceAvatar() {

    const navigate = useNavigate()
    const userAvatar = localStorage.getItem("user.avatar")
    const [ choosenAvatar, setChoosenAvatar ] = useState(userAvatar)
    const [ password, setPassword ] = useState("")
    const [ seeModal, setSeeModal ] = useState({status: 0, text: ""})


    const handleChooseavatar = (avatar_id: number) => {
        setChoosenAvatar(avatar_id.toString())
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (choosenAvatar !== userAvatar) {
            const res: any = await updateUser({password, update: {avatar_id: choosenAvatar}})
            if (res.status === 200) {
                localStorage.setItem("user.avatar", choosenAvatar ? choosenAvatar : "0")
                setSeeModal({status: 3, text: "Avatar Enregistré"})
                return navigate("/account")
            }
            return setSeeModal({status: 1, text: "Mauvais mot de passe"})
        }
        setSeeModal({status: 2, text: "Avatar déja utilisé"})
    }


    return (
        <>
            <div className='flex flex-col items-center h-min p-5 w-full lg:w-1/2 2xl:w-auto border-4 border-teal-600 rounded-xl'>
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

                <h1 className='text-center text-2xl font-medium'>Choisissez votre avatar</h1>

                <div className="flex flex-wrap justify-evenly gap-2 w-full my-4">
                    <button className="w-1/3 border-4 border-white rounded-full hover:border-4 hover:border-teal-600 focus:border-teal-600 focus:border-4">
                        <img
                            alt="avatar"
                            src={`src/asset/avatars/${1}.svg`}
                            onClick={() => handleChooseavatar(1)}
                            className="w-full"
                        />
                    </button>
                    <button className="w-1/3 border-4 border-white rounded-full hover:border-4 hover:border-teal-600 focus:border-teal-600 focus:border-4">
                        <img
                            alt="avatar"
                            src={`src/asset/avatars/${2}.svg`}
                            onClick={() => handleChooseavatar(2)}
                            className="w-full"
                        />
                    </button>
                    <button className="w-1/3 border-4 border-white rounded-full hover:border-4 hover:border-teal-600 focus:border-teal-600 focus:border-4">
                        <img
                            alt="avatar"
                            src={`src/asset/avatars/${3}.svg`}
                            onClick={() => handleChooseavatar(3)}
                                className="w-full"
                        />
                    </button>
                    <button className="w-1/3 border-4 border-white rounded-full hover:border-4 hover:border-teal-600 focus:border-teal-600 focus:border-4">
                        <img
                            alt="avatar"
                            src={`src/asset/avatars/${4}.svg`}
                            onClick={() => handleChooseavatar(4)}
                                className="w-full"
                        />
                    </button>
                </div>
                <div className="my-2">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Mot de passe (requis pour valider):"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        required
                        shadow
                        type="password"
                        color="warning"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Button onClick={(event) => handleSubmit(event)} className="mt-8">
                    Valider
                </Button>
            </div>
        </>
    )
}
