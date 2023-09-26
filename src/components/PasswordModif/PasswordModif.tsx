import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function PasswordModif() {
    return (
        <>
            <form className="flex max-w-md flex-col gap-4 ml-3">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Currrent password"
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
                            htmlFor="password2"
                            value="Your new password"
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
                    Register new password
                </Button>
            </form>
        </>
    )
}

export default PasswordModif