import React, { useState } from 'react'
import { Avatar, Button } from 'flowbite-react';

function ChoiceAvatar() {

    const [avatar, setAvatar] = useState("src/asset/user_Test.svg")

    const handleChooseavatar = (avatarSelected: string) => {
        setAvatar(avatarSelected)
    }

    return (
        <>
            <div className='flex flex-col items-center border-solid border-2 p-5 w-1/2 shadow-xl'>
                <h1 className='text-xl my-2'>Choisissez votre avatar</h1>
                <Avatar
                    alt="avatar choosen"
                    img={avatar}
                    rounded
                />

                <div className="flex flex-wrap gap-2 my-4">
                    <Avatar
                        alt="avatar"
                        img="src/asset/avatars/avatar.svg"
                        rounded
                        onClick={() => handleChooseavatar("src/asset/avatars/avatar.svg")}
                    />
                    <Avatar
                        alt="avatar"
                        img="src/asset/avatars/avatar2.svg"
                        rounded
                        onClick={() => handleChooseavatar("src/asset/avatars/avatar2.svg")}
                    />
                    <Avatar
                        alt="avatar"
                        img="src/asset/avatars/avatar3.svg"
                        rounded
                        onClick={() => handleChooseavatar("src/asset/avatars/avatar3.svg")}
                    />
                    <Avatar
                        alt="avatar"
                        img="src/asset/avatars/avatar4.svg"
                        rounded
                        onClick={() => handleChooseavatar("src/asset/avatars/avatar4.svg")}
                    />
                </div>

                <Button type="submit">
                    Valider
                </Button>
            </div>
        </>
    )
}

export default ChoiceAvatar