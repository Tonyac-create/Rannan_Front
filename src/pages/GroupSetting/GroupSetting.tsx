import { Button, Label, TextInput } from "flowbite-react"
import { HiOutlineCalendar, HiSparkles } from 'react-icons/hi';
import { useEffect, useState } from "react"
import Layout2 from "../../components/Layouts/Layout2";
import { useParams } from "react-router-dom";
import UserList from "../../components/UserList/UserList";
import SearchUser from "../../components/Forms/SearchUser/SearchUser";


const GroupSetting = () => {
  const { groupId } = useParams()
  const userId = 5

  const [ group, setGroup ] = useState([]);
  // Récupére les données de db.json (a changer pour l'appel API du BACK)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/db.json');
          const data = await response.json();
          const group = data.apiGroups.filter((group) => group.id === +groupId)
          setGroup(group[0]);
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
          <h2 className="text-3xl font-medium">Paramétres de "{group.name}"</h2>
        </section>


        <section className="flex justify-center">
          <form className="flex flex-col sm:flex-row justify-around items-center gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="groupName"
                  value="Nom du groupe :"
                />
              </div>
              <TextInput
                id="groupName"
                required
                type="text"
                value={group.name}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="limitedDate" value="Date limite :" />
              </div>
              <TextInput id="limitedDate" required type="date"
              />
            </div>
            <Button type="submit">
              Valider
            </Button>
          </form>
        </section>


        <section className="flex flex-col sm:flex-row justify-around gap-4 my-4 pr-2 sm:p-0">
          <div className="w-full sm:w-2/5 p-1">
            <UserList groupId={groupId} userId={userId} listFor="ModifyMembers" />
          </div>
          <div className="flex flex-col w-full sm:w-2/5 gap-4 p-1">
            <section>
            <UserList groupId={groupId} userId={userId} listFor="ModifyContacts" />
            </section>
            <section>
              <SearchUser />
            </section>
          </div>
        </section>
      </Layout2>
    </>
  )



}

export default GroupSetting