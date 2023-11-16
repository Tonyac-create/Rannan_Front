import React, { useEffect, useState } from 'react'
import { userSearch } from '../../../../services/api/users';
import { ListGroup } from 'flowbite-react';

export const SearchUserList = ({ usersFound, arrayUsers }: any) => {
    // console.log(arrayUsers);

    const [ nickname, setNickname ] = useState("")

    const getUserNickname = (id: number, nickname: string) => {
        setNickname(nickname)
        
        arrayUsers.push({id, nickname})
        
        // window.location.reload()
    }


    return (
        <div className='userList'>
            {usersFound && usersFound.map((user: any) => (
                <div className="w-full" key={user.id}>
                    <ListGroup className="w-48">
                        <ListGroup.Item onClick={() => getUserNickname(user.id, user.nickname)}>{user.nickname}</ListGroup.Item>
                    </ListGroup>
                </div>
            ))}
        </div>
    )
}