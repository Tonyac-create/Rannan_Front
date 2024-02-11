import { useParams } from "react-router-dom"
import Layout2 from "../../components/Layouts/Layout2"
import AvatarCard from "../../components/AvatarCard/AvatarCard"
import RecievedInformation from "../../components/RecievedInformation/RecievedInformation"
import { useEffect, useState } from "react"
import { getProfile } from "../../services/api/users"
import { getShares, getSharesBetweenUsers } from "../../services/api/data"
import SharedInformation from "../../components/SharedInformation/SharedInformation"
import ProfileRelation from "../../components/ProfileRelation/ProfileRelation"

const Profile = () => {

  const { id } = useParams()
  const [user, setUser] = useState({ "avatar_id": 0, "nickname": "" })

  useEffect(() => {
    const getUserProfile = async (id: string | undefined) => {
      try {
        const response: any = await getProfile(id)
        setUser(response.data)
      } catch (error) {
        console.log("Error :", error)
      }
    }
    getUserProfile(id)
  }, [])

  const [informationsShare, setInformationsShare] = useState([] as any)
  const [informationsReceived, setInformationsReceived] = useState([] as any)

  useEffect(() => {
    // Appel API pour les infos partagées appartenant au user connecté
    const idProfile = Number(id)
    const displayDatas = async () => {
      const datas: any = await getShares(idProfile, "user")
      const arrayDatas = datas.data
      setInformationsShare(arrayDatas)
    }

    // Appel API pour infos partagées appartenant au userProfil
    const displayDatasReceived = async () => {
      const datas: any = await getSharesBetweenUsers(idProfile)
      const arrayDatas = datas.data
      setInformationsReceived(arrayDatas)
    }

    displayDatas()
    displayDatasReceived()
  }, [])

  return (
    <>
      <Layout2>
        <section className="flex justify-center p-8">
          <h3 className="text-2xl">Profil de l'Utilisateur {user.nickname}</h3>
        </section>
        <div className="profile flex flex-col sm:flex-row p-4 sm:align-baseline gap-2">
          <div className="sm:w-1/3 flex flex-col items-center gap-3 rounded-md p-4 shadow-xl">
            <AvatarCard cardFor={"profile"} userProfile={user} />
            <ProfileRelation userName={user.nickname} />
          </div>

          <div className="profile informationSection flex flex-col sm:flex-row sm:w-2/3">
            <SharedInformation informationsShare={informationsShare} setInformationsShare={setInformationsShare} />
            <RecievedInformation informationsReceived={informationsReceived} />
          </div>
        </div>
      </Layout2>
    </>
  )
}
export default Profile