import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { updateUser } from '../../services/api/users';
import { useNavigate } from 'react-router-dom';

function ChoiceAvatar() {
    const navigate = useNavigate()
    const userAvatar = localStorage.getItem("user.avatar")
    const [ choosenAvatar, setChoosenAvatar ] = useState(userAvatar)
    const [ password, setPassword ] = useState("")

    const handleChooseavatar = (avatar_id: number) => {
        setChoosenAvatar(avatar_id.toString())
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (choosenAvatar !== userAvatar) {
            localStorage.setItem("user.avatar", choosenAvatar ? choosenAvatar : "0")
            await updateUser({password, update: {avatar_id: choosenAvatar}})
        }
        navigate("/account")
    }


    return (
        <>
            <div className='flex flex-col items-center h-min p-5 border-4 border-teal-600 rounded-xl'>
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

export default ChoiceAvatar