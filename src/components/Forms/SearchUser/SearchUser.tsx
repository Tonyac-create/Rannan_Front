'use client';
import React, { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import { HiOutlineSearch } from 'react-icons/hi';
import { UserList } from './UsersList/UserList';

const SearchUser = () => {
    const [ inputText, setInputText ] = useState("");
    const inputHandler = (event) => {
        const lowerCase = event.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className='searchUser'>
            <TextInput
                id="nickname"
                required
                type="text"
                placeholder='Recherche'
                rightIcon={HiOutlineSearch}
                onChange={inputHandler}
            />
            <UserList input={inputText} />
        </div>
  )
}

export default SearchUser