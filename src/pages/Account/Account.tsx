import ChoiceAvatar from '../../components/ChoiceAvatar/ChoiceAvatar'
import InAppPasswordModif from '../../components/InAppPasswordModif/InAppPasswordModif'
import Layout2 from '../../components/Layouts/Layout2'
import ModifyAccount from '../../components/ModifyAccount/ModifyAccount'

const Account = () => {
  return (
    <Layout2>
      <section className="flex justify-center p-8">
        <h2 className="text-3xl font-medium">Mon Compte</h2>
      </section>
      <div className='flex flex-col sm:flex-row p-4 gap-7 mb-20 sm:mb-0'>
        <div className='flex flex-col sm:flex-row items-center gap-7 justify-between sm:w-1/2'>
          <ModifyAccount />
          <InAppPasswordModif />
        </div>
        <ChoiceAvatar />
      </div>
    </Layout2>
  )
}

export default Account