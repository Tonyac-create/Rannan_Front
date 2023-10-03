import ChoiceAvatar from '../../components/ChoiceAvatar/ChoiceAvatar'
import InAppPasswordModif from '../../components/InAppPasswordModif/InAppPasswordModif'
import Layout2 from '../../components/Layouts/Layout2'
import ModifyAccount from '../../components/ModifyAccount/ModifyAccount'

const Account = () => {
  return (
    <Layout2>
      <div className='flex flex-row p-4 gap-7'>
        <div className='flex flex-row items-center gap-7 justify-between w-1/2'>
          <ModifyAccount />
          <InAppPasswordModif />
        </div>
        <ChoiceAvatar />
      </div>
    </Layout2>
  )
}

export default Account