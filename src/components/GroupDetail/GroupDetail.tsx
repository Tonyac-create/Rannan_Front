import { useParams } from "react-router-dom"
import UserList from "../UserList/UserList"
import { Button } from "flowbite-react"


const GroupDetail = () => {
  const { userId, role, groupId } = useParams()


  return (
    <>

      <div className="text-center p-4">


{/* Partie a supprimer, juste la pour afficher des informations récupérer sur la page */}
        <div className="flex space-x-8">
          <p className="border-4 border-red-300 rounded-xl p-2 my-2">Role : {role}</p>
          <p className="border-4 border-red-300 rounded-xl p-2 my-2">Id du groupe : {groupId}</p>
          <p className="border-4 border-red-300 rounded-xl p-2 my-2">Id du user : {userId}</p>
        </div>


{/* Si le role du User === Creator, alors affiche les bouttons de gestion */}
        {role === "creator" && (
          <div className="flex space-x-1 my-2">
            <Button>Supprimer le groupe</Button>
            <Button>Modifier le groupe</Button>
            <Button>Modifier les partages</Button>
          </div>
        )}

{/* Affiche la liste des membres */}
        <UserList listFor="Members" userId={userId} groupId={groupId} />


      </div>
    </>
  )
}
export default GroupDetail