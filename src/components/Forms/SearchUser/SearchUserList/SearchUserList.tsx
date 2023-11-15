import React, { useEffect, useState } from 'react'
import { userSearch } from '../../../../services/api/users';
import { ListGroup } from 'flowbite-react';

export const SearchUserList = ({ inputText, arrayUsers }: any) => {
    // console.log(arrayUsers);

    const [ arrayUser, setArrayUser ] = useState([])

    //RequÊte API GET ALL USERS
    useEffect(() => {
        const user = async () => {

            const getUser: any = await userSearch({ search: inputText })
            setArrayUser(getUser.data.data)
            // console.log("🚀 ~ file: SearchUserList.tsx:14 ~ user ~ arrayUser:", arrayUser)
        }

        user()

    }, [inputText])

    const [ nickname, setNickname ] = useState("")

    const getUserNickname = (id: number, nickname: string) => {
        setNickname(nickname)
        
        arrayUsers.push({id, nickname})
        
        // window.location.reload()
    }


    return (
        <div className='userList'>
            {arrayUser && arrayUser.map((user: any) => (
                <div className="w-full" key={user.id}>
                    <ListGroup className="w-48">
                        <ListGroup.Item onClick={() => getUserNickname(user.id, user.nickname)}>{user.nickname}</ListGroup.Item>
                    </ListGroup>
                </div>
            ))}
        </div>
    )
}