'use client';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, TextInput } from 'flowbite-react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchUserList } from './SearchUserList/SearchUserList';
import { userSearch } from '../../../services/api/users';
import { SearchUserContacts } from './SearchUserContacts/SearchUserContacts';

const SearchUser = ({ arrayUsers, setArrayUsers, setOpenModal }: any) => {
    const [ isContactPage, setIsContactPage ] = useState(false);
    const [ isHomePage, setIsHomePage ] = useState(false);
    const [ inputText, setInputText ] = useState<string>("");
    const [ usersResponse, setUsersResponse ] = useState([]);
    const [ isEmpty, setIsEmpty ] = useState(true);
    const [ reqDone, setReqDone ] = useState(false);


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
    const inputHandler = (event: any) => {
        const lowerCase = event.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const handleSubmit = async(e: any) =>{
        e.preventDefault();
        const response: any = await userSearch({search : inputText})
        if(response.data === "No user found"){
          setReqDone(true);
        }
        else{
          const userList = response.data.data
          setUsersResponse(userList);
          setReqDone(true);
        }
    }

    useEffect(() => {  
      if(usersResponse.length !== 0){
        setIsEmpty(false)
      }
    }, [usersResponse]);

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
            { isEmpty === true ?
            <div>
              { reqDone === false ?
              <div className='hidden'></div>
              :
              <p> Pas d'utilisateurs à afficher.</p>
              }
            </div>
            :
            <div>
              { isContactPage === true || isHomePage === true ?
                <SearchUserContacts usersFound={usersResponse} setOpenModal={setOpenModal}/>
                :
                <SearchUserList usersFound={usersResponse} arrayUsers={arrayUsers} setArrayUsers={setArrayUsers}/>
              }
            </div>
            }
        </div>
    )
}

export default SearchUser