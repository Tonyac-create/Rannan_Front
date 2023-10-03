import { useState } from "react"
import Layout2 from "../../components/Layouts/Layout2"
import MyGroupsList from "../../components/MyGroupsList/MyGroupsList"
import GroupDetail from "../../components/GroupDetail/GroupDetail"
import { Button } from "flowbite-react"


const Groups = () => {
  const userId = 5
  const [ seeList, setSeeList ] = useState("member")
  const [ roleReturn, setRoleReturn ] = useState("")
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const handleSeeList = (role: string) => {
    setSeeList(role)
  }

  const handleSelectGroup = (groupId: any) => {
    setSelectedGroupId(groupId);
  };

  return (
    <>
      <Layout2>
        <section className="flex justify-center p-8">
          <h3 className="text-2xl">Mes Groupes</h3>
        </section>
        <section className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex flex-col items-center min-w-1/5 m-5">
            <Button.Group>
              <Button color="info" onClick={() => handleSeeList("member")}>
                Membre
              </Button>
              <Button color="info" onClick={() => handleSeeList("creator")}>
                Créateur
              </Button>
            </Button.Group>
            <div className="w-full">
              {seeList === "member" && (
                <MyGroupsList role="member" userId={userId} onSelectGroup={handleSelectGroup} returnedRole={setRoleReturn} />
              )}
              {seeList === "creator" && (
                <MyGroupsList role="creator" userId={userId} onSelectGroup={handleSelectGroup} returnedRole={setRoleReturn}  />
              )}
            </div>
          </div>
          {selectedGroupId && <GroupDetail groupId={selectedGroupId} userId={userId} role={roleReturn} />}
        </section>
      </Layout2>
    </>
  )
}
export default Groups