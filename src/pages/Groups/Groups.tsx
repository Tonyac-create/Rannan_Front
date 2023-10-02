import Layout2 from "../../components/Layouts/Layout2"
import MyGroupsList from "../../components/MyGroupsList/MyGroupsList"


const Groups = () => {
  const userId = 5
  return (
    <>
      <Layout2>
        <section className="flex justify-center p-8">
          <h3 className="text-2xl">Mes Groupes</h3>
        </section>
        <section className="flex flex-col sm:flex-row justify-around gap-1 p-4">
          <MyGroupsList role="member" userId={userId} />
          <MyGroupsList role="creator" userId={userId} />
        </section>
      </Layout2>
    </>
  )
}
export default Groups