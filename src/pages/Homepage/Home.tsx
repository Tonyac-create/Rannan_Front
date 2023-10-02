import React from 'react'
import MyInformations from '../../components/MyInformations/MyInformations'
import ContactsList from '../../components/ContactsList/ContactsList'

const Home = () => {
  return (
    <div className='homepage flex flex-row'>
      <MyInformations/>
      <ContactsList />
    </div>
  )
}

export default Home