import { ListGroup } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function MyGroupsList (props: any) {

  const { role, userId } = props
  const [ userName, setUserName ] = useState("")
  const [ groups, setGroups ] = useState([]);
  const [ apiUsers, setApiUsers ] = useState([]);
  const [ apiUserInGroups, setApiUserInGroups ] = useState([]);
  const [ apiGroups, setApiGroups ] = useState([]);

// Récupére les données de db.json (a changer pour l'appel API du BACK)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();

        setApiUserInGroups(data.apiUserInGroups);
        setApiUsers(data.apiUsers);
        setApiGroups(data.apiGroups);

      } catch (error) {
        console.log("Error :", error)
      }
    }
    fetchData()
  }, [])


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
  }, [apiGroups])


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
              <p>{group.name} &ensp;</p>
              <span>{role === "member" && (apiUsers.map((user) => user.id === group.creatorId && (<div key={user.id}>( admin : {user.nickname} )</div>)))}</span>
            </ListGroup.Item>
            )
          })}
      </ListGroup>
    </>
  )
}