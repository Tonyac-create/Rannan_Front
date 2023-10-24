import { Button, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { updatePassword } from '../../services/api/users'
import { useNavigate } from 'react-router-dom'

const InAppPasswordModif = () => {
    const navigate = useNavigate()
    
    const [ password, setPassword ] = useState("")
    const [ newPassword, setNewPassword ] = useState("")
    const [ checkPassword, setCheckPassword ] = useState("")

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (newPassword !== checkPassword) {
            console.log("Nouveaus mots de passes non identiques")
        }
        if (password === newPassword) {
            console.log("Veuillez entrer un mot de passe différent")
        }
        await updatePassword({password, update:{newpassword: newPassword}})
        navigate("/account")
    }

    return (
    <div className="flex flex-col items-center gap-4 w-full lg:w-1/2 p-4 border-4 border-teal-600 rounded-xl">
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
                    id="currentPassword"
                    required
                    shadow
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
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
                    id="password"
                    required
                    shadow
                    type="password"
                    color="warning"
                    onChange={(event) => setNewPassword(event.target.value)}
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
                    id="password2"
                    required
                    shadow
                    type="password"
                    color="warning"
                    onChange={(event) => setCheckPassword(event.target.value)}
                />
            </div>
            <Button type="submit">
                Valider
            </Button>
        </form>
    </div>
  )
}

export default InAppPasswordModif