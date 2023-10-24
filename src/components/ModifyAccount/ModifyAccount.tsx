import { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react';
import { updateUser } from '../../services/api/users';
import { useNavigate } from 'react-router-dom';

function ModifyAccount(props: any) {
    const navigate = useNavigate()
    const { email } = props
    const [ nickname, setNickname ] = useState(localStorage.getItem("user.nickname"))
    const [ newEmail, setNewEmail ] = useState(email)
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (nickname !== localStorage.getItem("user.nickname")) {
            localStorage.setItem("user.nickname", nickname)
        }
        await updateUser({password, update:{nickname: nickname,email: newEmail ? newEmail : email}})
        navigate("/account")
    }

    return (
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/2 p-4 border-4 border-teal-600 rounded-xl">
            <h2 className='text-center text-xl font-medium my-2'>Modifier mes informations</h2>
            <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col gap-4 w-full md:w-10/12">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Nickname :"
                        />
                    </div>
                    <TextInput
                        shadow
                        type="text"
                        defaultValue={nickname}
                        onChange={(event) => setNickname(event.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Email :"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        placeholder="name@gmail.com"
                        shadow
                        type="email"
                        defaultValue={email}
                        onChange={(event) => setNewEmail(event.target.value)}
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
                        id="password2"
                        required
                        shadow
                        type="password"
                        color="warning"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Button type="submit">
                    Valider
                </Button>
        </form>
    </div>
    )
}

export default ModifyAccount
