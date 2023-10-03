import { useParams } from "react-router-dom"
import Layout2 from "../../components/Layouts/Layout2"
// import AvatarCard from "../../components/AvatarCard/AvatarCard"
import { Button, Checkbox, Label } from "flowbite-react"


const Profile = () => {
  const { id } = useParams()
  return (
    <>
      <Layout2>
        <h1>Profile du user {id}</h1>

        <div className="flex flex-row m-4">

          <div className="flex flex-col items-center h-40">
            <img
              alt=".."
              className="rounded-full shadow-lg h-full"
              src="/src/asset/avatars/avatar.svg"
            />
            <h5 className="mt-4 text-lg font-base text-gray-900 dark:text-white whitespace-pre">
              Amine
            </h5>
            <Button type="submit" className='mt-3 w-6/12'>
              Supprimer ce contact
            </Button>
          </div>

          <div className="flex max-w-md flex-col gap-4 ml-14 w-6/12">
            <h1 className='text-xl my-2'>Informations partagées</h1>
            <div
              className="flex max-w-md flex-col gap-4"
              id="checkbox"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  // defaultChecked
                  id="accept"
                />
                <Label
                  className="flex"
                  htmlFor="agree"
                >
                  <p>
                    Adresse maison
                  </p>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  // defaultChecked
                  id="accept"
                />
                <Label
                  className="flex"
                  htmlFor="agree"
                >
                  <p>
                    0606060606
                  </p>
                </Label>
              </div>
            </div>
            <Button type="submit" className='mt-3 w-3/12'>
              Modifier
            </Button>
          </div>
        </div>
      </Layout2>
    </>
  )
}
export default Profile