import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react';

function ModifyAccount() {
    
    return (
        <div className="flex w-1/2 flex-col gap-4 shadow-xl rounded-md p-4">
            <h2 className='text-xl my-2'>Modifier mes informations</h2>
            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Nickname:"
                        />
                    </div>
                    <TextInput
                        shadow
                        type="text"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Email:"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        placeholder="name@gmail.com"
                        shadow
                        type="email"
                    />
                </div>
                <div>
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
