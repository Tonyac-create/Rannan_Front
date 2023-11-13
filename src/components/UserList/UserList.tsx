import { Checkbox, ListGroup } from "flowbite-react"
import { Link } from "react-router-dom"

const UserList = (props: any) => {

  const { listFor, list } = props
  const userNickname = localStorage.getItem("user.nickname")

// Afficher le nickname ou le nom du groupe dans l'en tete du tableau
  const getHeader = () => {
    if (listFor === "Contacts" || listFor === "ModifyContacts") {
      return (
        <>Contacts de {userNickname}</>
      )
    } else if (listFor === "Members" || listFor === "ModifyMembers") {
      return (
        <>Membres du groupe</>
      )
    }
  }

  return (
  <>
    <ListGroup>
      <ListGroup.Item
        active
        href="#"
        >
        <p>
          {getHeader()}
        </p>
      </ListGroup.Item>
      {list.map((user: any) => {
        return (
          <ListGroup.Item key={user.id}>
              {listFor === "ModifyMembers" && (<span className="w-full h-full text-start"><Checkbox defaultChecked></Checkbox> &ensp; {user.nickname}</span>)}
              {listFor === "ModifyContacts" && (<span className="w-full h-full text-start"><Checkbox></Checkbox> &ensp; {user.nickname}</span>)}
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