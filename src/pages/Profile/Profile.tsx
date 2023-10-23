import { useParams } from "react-router-dom"
import Layout2 from "../../components/Layouts/Layout2"
import AvatarCard from "../../components/AvatarCard/AvatarCard"
import { Button } from "flowbite-react"
import RecievedInformation from "../../components/RecievedInformation/RecievedInformation"
import SharedInformation from "../../components/SharedInformation/SharedInformation"
import { useEffect, useState } from "react"
import { getProfile } from "../../services/api/users"

const Profile = () => {

  const { id } = useParams()
  const [ user, setUser ] = useState({"avatar_id": 0, "nickname": ""})

  useEffect(() => {
    const getUserProfile = async (id: string | undefined) => {
      try {
        const response: any = await getProfile(id)
        setUser(response.data)
      } catch (error) {
        console.log("🐼 ~ file: Login.tsx:24 ~ handleSubmit ~ error:", error)
      }
    }
    getUserProfile(id)
  }, [])



  return (
    <>
      <Layout2>
        <section className="flex justify-center p-8">
          <h3 className="text-2xl">Profil de l'Utilisateur {user.nickname}</h3>
        </section>
        {/* <img src={`/src/asset/avatars/${user.avatar_id}.svg`} alt="avatar" className="ms-auto me-auto" /> */}
        <div className="profile flex flex-col sm:flex-row p-4 sm:align-baseline gap-2">
          <div className="sm:w-1/3 flex flex-col items-center gap-3 rounded-md p-4 shadow-xl">
            <AvatarCard userProfile={user} />
            <Button  color='failure' className='sm:w-2/5'>
              Supprimer ce contact
            </Button>
          </div>

          <div className="profile informationSection flex flex-col sm:flex-row sm:w-2/3">
            <SharedInformation />
            <RecievedInformation />
          </div>
          </div>
      </Layout2>
    </>
  )
}
export default Profile