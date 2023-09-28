import { ListGroup } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function MyGroupsList (props: any) {

  const { role, userId } = props
  const [ userName, setUserName ] = useState("")
  const [ groups, setGroups ] = useState([]);
  
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
          const filterGroups = []
          apiUserInGroups.map((group) => {
            if (group.userId === userId) {
              apiGroups.map((el) => {
                if (el.id === group.groupId) {
                  filterGroups.push(el)
                }
              })
            }
          })
          filterGroups.filter((el) => el.creatorId != userId)
          return setGroups(filterGroups)
        }
        if (role === "creator") {
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
    <>
      <ListGroup>
        <ListGroup.Item
          active
          >
          <p>
            Group List how {userName} as {role}
          </p>
        </ListGroup.Item>
        {groups.map((group) => {
          return (
            <ListGroup.Item key={group.id} href={`user/${userId}/group/detail/${role}/${group.id}`}>
                <p>{group.name}</p>
              </ListGroup.Item>
            )
          })}
      </ListGroup>
    </>
  )
}