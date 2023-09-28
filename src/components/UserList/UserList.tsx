import { ListGroup } from "flowbite-react"
import { useEffect, useState } from "react"


const UserList = (props: any) => {
// Liste des liens entre Users et Groups
const apiUserInGroups = [
  {
    userId: 1,
    groupId: 1
  },
  {
    userId: 1,
    groupId: 2
  },
  {
    userId: 3,
    groupId: 1
  },
  {
    userId: 5,
    groupId: 2
  },
  {
    userId: 2,
    groupId: 3
  },
  {
    userId: 4,
    groupId: 3
  },
  {
    userId: 4,
    groupId: 1
  },
  {
    userId: 5,
    groupId: 1
  }
]

// Liste des Users
const apiUsers = [
  {
    id: 1,
    nickname: "Thomas"
  },
  {
    id: 2,
    nickname: "Caye"
  },
  {
    id: 3,
    nickname: "Angélique"
  },
  {
    id: 4,
    nickname: "Amine"
  },
  {
    id: 5,
    nickname: "Florian"
  }
]

// Liste des groupes
const apiGroups = [
  {
    id: 1,
    name: "Group1",
    creatorId: 2
  },
  {
    id: 2,
    name: "Group2",
    creatorId: 3
  },
  {
    id: 3,
    name: "Group3",
    creatorId: 5
  }
]

// Liste des contacts entre Users
  const apiUsersContacts = [
    {
      id: 1,
      userId_1: 1,
      userId_2: 2
    },
    {
      id: 2,
      userId_1: 2,
      userId_2: 3
    },
    {
      id: 3,
      userId_1: 1,
      userId_2: 3
    },
    {
      id: 4,
      userId_1: 4,
      userId_2: 5
    },
    {
      id: 5,
      userId_1: 1,
      userId_2: 5
    },
    {
      id: 6,
      userId_1: 1,
      userId_2: 4
    },
    {
      id: 7,
      userId_1: 3,
      userId_2: 4
    }
  ]


  const { groupId, userId, listFor } = props
  const [ userName, setUserName ] = useState("")
  const [ memberList, setMemberList ] = useState([]);



// Récupére le Nickname du User qui utilise l'app
  useEffect(() => {
    apiUsers.map((el) => {
      if (el.id === +userId) {
        setUserName(el.nickname)
      }
    })
    
  })

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
      setMemberList(newList)
    }
    getMemberList()
  }, [])

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
      {memberList.map((member) => {
        return (
          <ListGroup.Item key={member.id}>
              <p>{member.nickname}</p>
            </ListGroup.Item>
          )
        })}
    </ListGroup>
  </>
  )
}
export default UserList