import { ListGroup } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function MyGroupsList (props: any) {

// Liste des contacts entre Users
  const userId = 2
  const [ userName, setUserName ] = useState("")
  const { role } = props
  const [groups, setGroups] = useState([]);

  const apiUserInGroups = [
    {
      id: 1,
      userId: 1,
      groupId: 1
    },
    {
      id: 2,
      userId: 1,
      groupId: 2
    },
    {
      id: 3,
      userId: 3,
      groupId: 1
    },
    {
      id: 4,
      userId: 2,
      groupId: 2
    },
    {
      id: 5,
      userId: 2,
      groupId: 3
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
    creatorId: 2
  },
  {
    id: 3,
    name: "Group3",
    creatorId: 1
  }
]

// Récupére le Nickname du User qui utilise l'app
useEffect(() => {
  apiUsers.map((el) => {
    if (el.id === userId) {
      setUserName(el.nickname)
    }
  })
})

// Récupérer la liste des groupes suivant le role
  useEffect(() => {
    const getGroups = () => {
      try {
        if (role === "member") {
          const memberGroups = apiUserInGroups.filter((el) => el.userId === userId)
          let filterGroups
          memberGroups.map((group) => {
            filterGroups = apiGroups.filter((el) => el.id === group.groupId)
          })
          return setGroups(filterGroups)
        }
        if (role === "admin") {
          const filterGroups = apiGroups.filter((el) => el.creatorId === userId)
          return setGroups(filterGroups)
        }
      } catch (error) {
      console.log("🐼 ~ file: MyGroups.tsx:73 ~ getGroups ~ error:", error)
      }
    }
    getGroups()
  }, [])


  return (
    <ListGroup>
      <ListGroup.Item
        active
        href="#"
      >
        <p>
          Group List how {userName} as {role}
        </p>
      </ListGroup.Item>
      {groups.map((group) => {
          return (
            <ListGroup.Item key={group.id}>
              <p>{group.name}</p>
            </ListGroup.Item>
          )
        })}
    </ListGroup>
  )
}