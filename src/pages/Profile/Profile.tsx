import { useParams } from "react-router-dom"
import Layout2 from "../../components/Layouts/Layout2"
import AvatarCard from "../../components/AvatarCard/AvatarCard"
import { Button } from "flowbite-react"
import RecievedInformation from "../../components/RecievedInformation/RecievedInformation"
import SharedInformation from "../../components/SharedInformation/SharedInformation"

const Profile = () => {
  const { id } = useParams()
  return (
    <>
      <Layout2>
        <h2>Profile du user {id}</h2>
        <div className="profile flex flex-row p-4 align-baseline gap-2">
          <div className="w-1/3 flex flex-col items-center gap-3 rounded-md p-4 shadow-xl">
            <AvatarCard />
            <Button  color='failure' className='w-2/5'>
              Supprimer ce contact
            </Button>
          </div>

          <div className="profile informationSection flex flex-row w-2/3">
            <SharedInformation />
            <RecievedInformation />
          </div>
          </div>
      </Layout2>
    </>
  )
}
export default Profile