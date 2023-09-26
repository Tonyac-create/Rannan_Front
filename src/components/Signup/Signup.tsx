import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react';

function Signup() {
    
    return (
        <>
            <form className="flex max-w-md flex-col gap-4 ml-3">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Your nickname"
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
                            value="Your email"
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
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
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
                    Register new account
                </Button>
            </form>
        </>
    )
}

export default Signup