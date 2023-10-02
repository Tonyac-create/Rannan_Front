import { useParams } from "react-router-dom"
import Layout2 from "../../components/Layouts/Layout2"


const Profile = () => {
  const { id } = useParams()
  return (
    <>
      <Layout2>
        <h1>Profile du user {id}</h1>
      </Layout2>
    </>
  )
}
export default Profile