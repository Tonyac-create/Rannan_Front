import { Button, ListGroup } from "flowbite-react"
import { Link } from "react-router-dom"

const UserList = (props: any) => {

  const { listFor, list } = props

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
                  <Button color="red" size="xs">Retirer</Button>
                </div>)}
              {listFor === "ModifyContacts" && (
                <div className="flex justify-between items-center w-full h-full text-start">
                  {user.nickname}
                  <Button size="xs">Ajouter</Button>
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