import React from 'react'
import AddUserCard from '../../../AddUserCard/AddUserCard';

export const UserList = (props) => {
    const users = [
        {
            id: 1,
            nickname: "José",
            iscontact: false,
        },
        {
            id: 2,
            nickname: "Paco",
            iscontact: false,
        },
        {
            id: 3,
            nickname: "Juan",
            iscontact: true,
        },
        {
            id: 4,
            nickname: "Miguel",
            iscontact: false,
        },
    ];

    const filteredData = users.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else{
            return el.nickname.toLowerCase().includes(props.input)
        }
    })

    //RequÊte API GET ALL USERS
  return (
    <div className='userList'>
        {filteredData.map((item) => (
            <AddUserCard id={item.id} nickname={item.nickname} />   
        ))}
    </div>
  )
}
