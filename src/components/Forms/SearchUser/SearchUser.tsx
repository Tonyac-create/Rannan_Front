'use client';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, TextInput } from 'flowbite-react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchUserList } from './SearchUserList/SearchUserList';
import { userSearch } from '../../../services/api/users';
import { SearchUserContacts } from './SearchUserContacts/SearchUserContacts';

const SearchUser = () => {
    const [ isContactPage, setIsContactPage ] = useState(false);
    const [ isHomePage, setIsHomePage ] = useState(false);
    const [ inputText, setInputText ] = useState<string>("");
    const [ usersResponse, setUsersResponse ] = useState([]);

    //Gerer la liste et action affichée en fonction de localisation
    const location = useLocation();
    useEffect(() => {
      if(location.pathname ==='/contacts'){
          setIsContactPage(true)
      }
    }, []);

    useEffect(() => {
      if(location.pathname ==='/home'){
        setIsHomePage(true)
      }
    }, []);

    //Gérer la recherche
    const inputHandler = (event: Event) => {
        const lowerCase = event.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const handleSubmit = async(e: Event) =>{
        e.preventDefault();
        const response = await userSearch({search : inputText});
        const userList = response.data.data
        setUsersResponse(userList);
    }

    return (
        <div className='searchUser'>
            <form onSubmit={handleSubmit}>
                <TextInput
                    id="nickname"
                    required
                    type="text"
                    placeholder='Recherche'
                    rightIcon={HiOutlineSearch}
                    onChange={inputHandler}
                />
                <div className='flex justify-center py-2'>
                  <Button type="submit">Recherche</Button>
                </div>
            </form>
            <div>
              { isContactPage === true || isHomePage === true ?
                <SearchUserContacts usersFound={usersResponse} />
                :
                 <SearchUserList usersFound={usersResponse} />
              }
            </div>
        </div>
    )
}

export default SearchUser