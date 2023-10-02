import Avatar from "../../components/Avatar/Avatar"
import Layout2 from "../../components/Layouts/Layout2"
import ModifyAccount from "../../components/ModifyAccount/ModifyAccount"


const Profile = () => {

  return (
    <>
      <Layout2>
        <div>
          <h1 className="ml-64"> Mon profil</h1>
          <ModifyAccount />
          <Avatar />
        </div>
      </Layout2>
    </>
  )
}
export default Profile