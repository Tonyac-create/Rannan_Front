import UserList from "../UserList/UserList"
import { Button, ListGroup } from "flowbite-react"
import { useEffect, useState } from "react"


const GroupDetail = (props: any) => {
  const { userId, role, groupId } = props
  const [ groupName, setGroupName ] = useState([]);
// Récupére les données de db.json (a changer pour l'appel API du BACK)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();
        const group = data.apiGroups.filter((group) => group.id === +groupId)
        setGroupName(group[0].name);
      } catch (error) {
        console.log("Error :", error)
      }
    }
    fetchData()
  }, [groupId])


  return (
    <>
      <section className="m-4 p-2 border-4 border-teal-600 rounded-xl">
        <section className="flex justify-center p-2">
          <h3 className="text-2xl">Détails de "{groupName}"</h3>
        </section>
        <div className="flex flex-col items-center text-center p-4">
          {role === "creator" && (
            <div className="flex flex-col md:flex-row justify-around w-full md:w-1/2 gap-1 space-x-1 my-2">
              <Button size="xs" className="whitespace-pre">Supprimer le groupe</Button>
              <Button size="xs" className="whitespace-pre" href={`/group/${groupId}/modify`}>Modifier le groupe</Button>
              <Button size="xs" className="whitespace-pre" href="/shares">Modifier les partages</Button>
            </div>
          )}
          <section className="flex flex-col lg:flex-row justify-around gap-4 mt-8">
            <UserList listFor="Members" userId={userId} groupId={groupId} />

            <ListGroup>
              <ListGroup.Item
                active
                href="/list-group"
              >
                <p>
                  Informations Partagés
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                Téléphone : 07.45.68.95.43
              </ListGroup.Item>
              <ListGroup.Item>
                Mail : moi@toi.net
              </ListGroup.Item>
              <ListGroup.Item>
                Social : www.instagram.com/mmouwaaa
              </ListGroup.Item>
            </ListGroup>
          </section>
        </div>
      </section>
    </>
  )
}
export default GroupDetail