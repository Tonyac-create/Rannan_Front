import { useState } from 'react'
import { ListGroup } from 'flowbite-react';

export const SearchUserList = ({ usersFound, arrayUsers, setArrayUsers }: any) => {
    
    let newUserId: any //? non utilisé?
    const [nickname, setNickname] = useState("") //? "nickname" même nom qu'une clé de "getUserNickname" & non utilisé?
    
    // Récupération de l'id du user connecté
    const userId = localStorage.getItem('user.id')
    const userIdNumber = Number(userId)
    
    const getUserNickname = (id: number, nickname: string) => {
        // Non affichage du nom du user connecté
        if (userIdNumber !== id) {
            setNickname(nickname)
            
            // MAJ de la liste utilisateurs er récupère son id
            const updatedArrayUsers = [...arrayUsers, { id, nickname }]
            if (updatedArrayUsers) {
                setArrayUsers(updatedArrayUsers)
                newUserId = updatedArrayUsers[updatedArrayUsers.length - 1].id
            }
        }
    }

    return (
        <div className='userList'>
            {usersFound ? (
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
                ) : (
                    <p>En attente d'une recherche...</p>
                )
            ) : (
                <p>Pas d'utilisateur avec ce nom</p>
            )}
        </div>
    )
}