import { useEffect, useState } from 'react'
import ChoiceAvatar from '../../components/ChoiceAvatar/ChoiceAvatar'
import InAppPasswordModif from '../../components/InAppPasswordModif/InAppPasswordModif'
import Layout2 from '../../components/Layouts/Layout2'
import ModifyAccount from '../../components/ModifyAccount/ModifyAccount'

const Account = () => {

  return (
    <Layout2>
      <section className="flex justify-center p-8 ">
        <h2 className="text-3xl font-medium">Mon Compte</h2>
      </section>
      <section className='flex flex-col 2xl:flex-row items-center w-full p-4 gap-7 mb-20 2xl:mb-0 '>
        <div className='flex flex-col lg:flex-row items-center gap-7 md:gap-2 justify-between w-full 2xl:w-1/2'>
          <ModifyAccount />
          <InAppPasswordModif />
        </div>
        <ChoiceAvatar />
      </section>
    </Layout2>
  )
}

export default Account