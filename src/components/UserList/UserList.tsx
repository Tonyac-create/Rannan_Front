import { Button, ListGroup } from "flowbite-react"
import { Link } from "react-router-dom"
import { addMemberGroup, removeMemberGroup } from "../../services/api/groups"

const UserList = (props: any) => {

  const { listFor, list, group_id } = props

// Afficher le nickname ou le nom du groupe dans l'en tete du tableau
  const getHeader = () => {
    if (listFor === "Contacts" || listFor === "ModifyContacts") {
      return (
        <p>Mes contacts enregistrés</p>
      )
    } else if (listFor === "Members" || listFor === "ModifyMembers") {
      return (
        <p>Membres du groupe</p>
      )
    }
  }

  const handleAddMember = async (event: any, user_id: string) => {
    event.preventDefault()
    const response = await addMemberGroup(group_id, {user_id: user_id})
    console.log(response)
  }

  const handleRemoveMember = async (event: any, user_id: string) => {
    event.preventDefault()
    const response = await removeMemberGroup(group_id, {user_id: user_id})
    console.log(response)
  }

  return (
  <>
    <ListGroup className="w-full h-5/6 overflow-auto">
      <ListGroup.Item active href="#">
          {getHeader()}
      </ListGroup.Item>
      {list.map((user: any) => {
        return (
          <ListGroup.Item key={user.id}>
              {listFor === "ModifyMembers" && (
                <div className="flex justify-between items-center w-full h-full text-start">
                  {user.nickname}
                  <Button color="red" size="xs" onClick={(event) => handleRemoveMember(event, user.id)}>Retirer</Button>
                </div>)}
              {listFor === "ModifyContacts" && (
                <div className="flex justify-between items-center w-full h-full text-start">
                  {user.nickname}
                  <Button size="xs" onClick={(event) => handleAddMember(event, user.id)}>Ajouter</Button>
                </div>)}
              {listFor === "Members" && (<Link to={`/profile/${user.id}`} className="w-full h-full text-start">{user.nickname}</Link>)}
              {listFor === "Contacts" && (<Link to={`/profile/${user.id}`} className="w-full h-full text-start">{user.nickname}</Link>)}
            </ListGroup.Item>
          )
        })}
    </ListGroup>
  </>
  )
}
export default UserList