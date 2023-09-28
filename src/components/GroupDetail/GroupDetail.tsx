import { useParams } from "react-router-dom"
import UserList from "../UserList/UserList"


const GroupDetail = () => {
  const { userId, role, groupId } = useParams()
  return (
    <>
      <div className="text-center p-4">
        <p>Role : {role}</p>
        <p>Id du groupe : {groupId}</p>
        <p>Id du user : {userId}</p>
        <UserList listFor="Members" userId={userId} groupId={groupId} />
      </div>
    </>
  )
}
export default GroupDetail