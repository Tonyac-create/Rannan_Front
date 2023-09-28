'use client';
import React from 'react';
import { Button, TextInput } from 'flowbite-react';
import { HiOutlineSearch } from 'react-icons/hi';

const SearchUser = () => {
  return (
    <form className="max-w-md flex flex-row">
      <TextInput
        id="nickname"
        required
        type="text"
        placeholder='Recherche'
      />
      <Button type="submit">
        <HiOutlineSearch/>
      </Button>
    </form>
  )
}

export default SearchUser