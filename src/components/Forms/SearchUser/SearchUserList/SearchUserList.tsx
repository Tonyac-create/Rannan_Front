import React from 'react'
import AddUserCard from '../../../AddUserCard/AddUserCard';

export const SearchUserList = (props) => {
    const users = [
        {
            id: 1,
            nickname: "José",
            status: 1 //Non contact
        },
        {
            id: 2,
            nickname: "Paco",
            status: 2 // Est Contact
        },
        {
            id: 3,
            nickname: "Juan",
            status: 3 // A envoyé demande
        },
        {
            id: 4,
            nickname: "Miguel",
            status: 4 // Vous avez envoyé demande
        },
    ];

    const filteredData = users.filter((el) => {
        if (props.input === '') {
            return null;
        }
        else{
            return el.nickname.toLowerCase().includes(props.input)
        }
    })

    //RequÊte API GET ALL USERS

    const addContactAction = () => {
        //API POST create authorisation(demande ajout contact) récupère le id du token et le id de la key pour l'autre user
        console.log("Demande envoyée")
      }

  return (
    <div className='userList'>
        {filteredData.map((item) => (
            <AddUserCard id={item.id} nickname={item.nickname} status={item.status} addContactAction={addContactAction} />   
        ))}
    </div>
  )
}