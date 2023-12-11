import { ListGroup } from "flowbite-react"
import { Link } from "react-router-dom"
import { addMemberGroup, removeMemberGroup } from "../../services/api/groups"

const UserList = (props: any) => {

  const { refresh, setRefresh, listFor, list, group_id } = props

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
    addMemberGroup(group_id, {user_id: user_id})
    setRefresh(!refresh)
  }

  const handleRemoveMember = async (event: any, user_id: string) => {
    event.preventDefault()
    await removeMemberGroup(group_id, {user_id: user_id})
    setRefresh(!refresh)
  }

  return (
  <>
    <ListGroup className="w-full h-5/6 overflow-auto">
      <ListGroup.Item active href="#">
          {getHeader()}
      </ListGroup.Item>
      {list ? (list.map((user: any) => {
        return (
          <ListGroup.Item key={user.id}>
              {listFor === "ModifyMembers" && (
                <div className="flex justify-between items-center w-full h-full text-start">
                  {user.nickname}
                  <span className="py-1 px-2 text-red-700 border-2 rounded-lg border-red-300" onClick={(event) => handleRemoveMember(event, user.id)}>Retirer</span>
                </div>)}
              {listFor === "ModifyContacts" && (
                <div className="flex justify-between items-center w-full h-full text-start">
                  {user.nickname}
                  <span className="py-1 px-2 text-cyan-800 border-2 rounded-lg border-cyan-800" onClick={(event) => handleAddMember(event, user.id)}>Ajouter</span>
                </div>)}
              {listFor === "Members" && (<Link to={`/profile/${user.id}`} className="w-full h-full text-start">{user.nickname}</Link>)}
              {listFor === "Contacts" && (<Link to={`/profile/${user.id}`} className="w-full h-full text-start">{user.nickname}</Link>)}
            </ListGroup.Item>
          )
        })
        ) : (((listFor === "Members" || listFor === "ModifyMembers") ? (<ListGroup.Item><p>Aucun membre</p></ListGroup.Item>) : (<ListGroup.Item><p>Aucun contact</p></ListGroup.Item>)))
      }
    </ListGroup>
  </>
  )
}
export default UserList