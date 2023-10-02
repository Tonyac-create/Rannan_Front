import { useParams } from "react-router-dom"
import UserList from "../UserList/UserList"
import { Button } from "flowbite-react"
import Layout2 from "../Layouts/Layout2"


const GroupDetail = () => {
  const { userId, role, groupId } = useParams()


  return (
    <>
      <Layout2>
        <div className="text-center p-4">
          {role === "creator" && (
            <div className="flex space-x-1 my-2">
              <Button>Supprimer le groupe</Button>
              <Button>Modifier le groupe</Button>
              <Button>Modifier les partages</Button>
            </div>
          )}
          <UserList listFor="Members" userId={userId} groupId={groupId} />
        </div>
      </Layout2>
    </>
  )
}
export default GroupDetail