import React, { useEffect, useState } from 'react'
import { ListGroup } from 'flowbite-react';

export const SearchUserList = ({ usersFound, arrayUsers, setArrayUsers }: any) => {
    let newUserId: any
    const [_nickname, setNickname] = useState("")

    // Récupération de l'id du user connecté
    const userId = localStorage.getItem('user.id')
    const userIdNumber = Number(userId)

    const getUserNickname = (id: number, name: string) => {
        // Non affichage du nom du user connecté
        if (userIdNumber !== id) {
            setNickname(name)

            // MAJ de la liste utilisateurs et récupère son id
            const updatedArrayUsers = [...arrayUsers, { id, name }]
            if (updatedArrayUsers) {
                setArrayUsers(updatedArrayUsers)
                newUserId = updatedArrayUsers[updatedArrayUsers.length - 1].id
            }
        }
    }

    return (
        <div className='userList'>
            {
                usersFound.map((user: any) => {
                    if (userIdNumber !== user.id) {
                        return (
                            <div className="w-full" key={user.id}>
                                <ListGroup className="w-48">
                                    <ListGroup.Item onClick={() => getUserNickname(user.id, user.nickname)}>
                                        {user.nickname}
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}





{/* {usersFound ? (
                usersFound.length > 0 ? (
                    usersFound.map((user: any) => (
                        userIdNumber !== user.id ? (
                            <div className="w-full" key={user.id}>
                                <ListGroup className="w-48">
                                    <ListGroup.Item onClick={() => getUserNickname(user.id, user.nickname)}>
                                        {user.nickname}
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        ) : null
                    ))
                )
                 : (
                    <p>En attente d'une recherche...</p>
                )
            ) 
            : (
                <p>Pas d'utilisateur avec ce nom</p>
            )} */}