'use client';
import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchUserList } from './SearchUserList/SearchUserList';
import { useLocation } from 'react-router-dom';

const SearchUser = ({ arrayUsers }: any) => {

    const [ isSharesPage, setIsSharestPage ] = useState(false)


    const location = useLocation();
    useEffect(() => {
      if(location.pathname ==='/shares'){
        setIsSharestPage(true)
      };
    }, [])

    const [inputText, setInputText] = useState("");

    const inputHandler = (event: any) => {
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
            { isSharesPage && (
                <SearchUserList
                inputText={inputText}
                arrayUsers={arrayUsers}
            />
            )}
        </div>
    )
}

export default SearchUser