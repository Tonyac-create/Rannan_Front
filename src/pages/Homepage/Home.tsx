import React from 'react'
import MyInformations from '../../components/MyInformations/MyInformations'
import ContactsList from '../../components/ContactsList/ContactsList'
import Layout2 from '../../components/Layouts/Layout2'

const Home = () => {
  return (
    <Layout2>
      <div className='homepage flex flex-col sm:flex-row  gap-4 p-5 mb-20 sm:mb-0'>
        <MyInformations />
        <ContactsList />
      </div>
    </Layout2>
  )
}

export default Home