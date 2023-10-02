import Layout2 from "../../components/Layouts/Layout2"
import MyGroupsList from "../../components/MyGroupsList/MyGroupsList"


const Groups = () => {
  const userId = 5
  return (
    <>
      <Layout2>
        <div className="flex justify-around p-4">
          <MyGroupsList role="member" userId={userId} />
          <MyGroupsList role="creator" userId={userId} />
        </div>
      </Layout2>
    </>
  )
}
export default Groups