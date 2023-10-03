import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

const InAppPasswordModif = () => {
  return (
    <div className="flex flex-col gap-4 w-1/2 shadow-xl rounded-md p-4">
        <h2 className='text-xl my-2'>Modifier mon mot de passe</h2>
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="currentPassword"
                        value="Mot de passe actuel:"
                    />
                </div>
                <TextInput
                    id="currentPassword"
                    required
                    shadow
                    type="password"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password"
                        value="Nouveau mot de passe_"
                    />
                </div>
                <TextInput
                    id="password"
                    required
                    shadow
                    type="password"
                    color="warning"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Confirmez mot de passe:"
                    />
                </div>
                <TextInput
                    id="password2"
                    required
                    shadow
                    type="password"
                    color="warning"
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