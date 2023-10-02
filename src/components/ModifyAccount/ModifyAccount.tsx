import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react';

function ModifyAccount() {
    
    return (
        <>

            <form className="flex max-w-md flex-col gap-4 ml-64">
                <h1 className='text-xl my-2'>Modifier mes informations</h1>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Nickname"
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
                            value="Email"
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
                            value="Your password"
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
                    Confirm
                </Button>
            </form>
        </>
    )
}

export default ModifyAccount
