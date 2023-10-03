import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react';

function Signup() {
    
    return (
        <>
            <form className="flex max-w-md flex-col gap-4 ml-3">
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
                    />
                </div>
                
                <Button type="submit">
                    Enregistrer
                </Button>
            </form>
        </>
    )
}

export default Signup