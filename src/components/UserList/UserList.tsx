import { ListGroup } from "flowbite-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const UserList = (props: any) => {

  const { groupId, userId, listFor } = props
  const [ userName, setUserName ] = useState("")
  const [ userList, setUserList ] = useState([]);
  const [ apiUsers, setApiUsers ] = useState([]);
  const [ apiUserInGroups, setApiUserInGroups ] = useState([]);
  const [ apiGroups, setApiGroups ] = useState([]);
  const [ apiUsersContacts, setApiUsersContacts ] = useState([]);

// Récupére les données de db.json (a changer pour l'appel API du BACK)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();

        setApiUserInGroups(data.apiUserInGroups);
        setApiUsers(data.apiUsers);
        setApiGroups(data.apiGroups);
        setApiUsersContacts(data.apiUsersContacts);

      } catch (error) {
        console.log("Error :", error)
      }
    }
    fetchData()
  }, [])


// Récupére le Nickname du User qui utilise l'app
  useEffect(() => {
    apiUsers.map((el) => {
      if (el.id === +userId) {
        setUserName(el.nickname)
      }
    })
  }, [])

// Récupérer la liste de contacts du User qui visite la page
  useEffect(() => {
    const getMemberList = () => {
      const newList = []
      // Récupére la liste des contacts du user qui visite la page
      if (listFor === "Contacts") {
        apiUsersContacts.map((user) => {
          if (user.userId_1 === +userId) {
            apiUsers.map((el) => {
              if (user.userId_2 === el.id) {
                newList.push(el)
            }
            })
          } else if (user.userId_2 === +userId) {
            apiUsers.map((el) => {
              if (user.userId_1 === el.id) {
                newList.push(el)
            }
            })
          }
        })
      // Récupére la liste des membres d'un groupe
      } else if (listFor === "Members") {
        apiUserInGroups.map((el) => {
          if (el.groupId === +groupId) {
            apiUsers.map((user) => {
              if (user.id === el.userId) {
                newList.push(user)
            }
            })
          }
        })
      // Récupére le creator et l'ajoute en membre du groupe
        apiGroups.map((el) => {
          if (el.id === +groupId) {
            apiUsers.map((user) => {
              if (user.id === el.creatorId) {
                newList.push(user)
              }
            })
          }
        })
      }
      setUserList(newList)
    }
    getMemberList()
  }, [apiUsers])

// Afficher le nickname ou le nom du groupe dans l'en tete du tableau
  const getHeader = () => {
    let groupName = ""
    if (listFor === "Contacts") {
      return (
        <>Contacts of {userName}</>
      )
    } else if (listFor === "Members") {
      apiGroups.map((group) => {
        if (group.id === +groupId) {
          groupName = group.name
        }
      })
      return (
        <>{groupName} members</>
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
      {userList.map((user) => {
        return (
          <ListGroup.Item key={user.id}>
              <Link to={`/profile/${user.id}`}>{user.nickname}</Link>
            </ListGroup.Item>
          )
        })}
    </ListGroup>
  </>
  )
}
export default UserList