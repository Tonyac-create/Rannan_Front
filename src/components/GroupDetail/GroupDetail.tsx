import { useParams } from "react-router-dom"
import UserList from "../UserList/UserList"
import { Button, ListGroup } from "flowbite-react"
import Layout2 from "../Layouts/Layout2"
import { useEffect, useState } from "react"


const GroupDetail = () => {
  const { userId, role, groupId } = useParams()
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
  }, [])


  return (
    <>
      <Layout2>
        <section className="flex justify-center p-8">
          <h3 className="text-2xl">Détails de "{groupName}"</h3>
        </section>
        <div className="text-center p-4">
          {role === "creator" && (
            <div className="flex flex-col sm:flex-row justify-around gap-1 space-x-1 my-2">
              <Button>Supprimer le groupe</Button>
              <Button>Modifier le groupe</Button>
              <Button>Modifier les partages</Button>
            </div>
          )}
          <section className="flex flex-col sm:flex-row justify-around gap-4 mt-8">
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
              <ListGroup.Item href="/list-group">
                Téléphone : 07.45.68.95.43
              </ListGroup.Item>
              <ListGroup.Item href="/list-group">
                Mail : moi@toi.net
              </ListGroup.Item>
              <ListGroup.Item href="/list-group">
                Social : www.instagram.com/mmouwaaa
              </ListGroup.Item>
            </ListGroup>
          </section>
        </div>
      </Layout2>
    </>
  )
}
export default GroupDetail