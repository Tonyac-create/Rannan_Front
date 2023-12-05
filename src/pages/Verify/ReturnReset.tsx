import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { returnResetPassword } from "../../services/api/users"
import { Button, Label, Modal, TextInput } from "flowbite-react"
import { useNavigate } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import Layout from "../../components/Layouts/Layout";


const ReturnReset = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  const verifyToken = localStorage.getItem('resetToken')
  const [ newPassword, setNewPassword ] = useState<string>("")
  const [ email, setEmail ] = useState<string>("")
  const [ checkPassword, setCheckPassword ] = useState<string>("")
  const [ verify, setVerify ] = useState<boolean>(false)
  const [ seeModal, setSeeModal ] = useState<{status: boolean, text: string}>({status: false, text: ""})

  useEffect(() => {
    if (verifyToken) {
      if (token === verifyToken) {
        return setVerify(true)
      }
    }
  }, [token])

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (newPassword !== checkPassword) {
        return setSeeModal({status: true, text: "newPasswordError"})
    }
    const res = await returnResetPassword({email, newPassword})
    if (res.status === 200) {
        localStorage.removeItem("resetToken")
        return setSeeModal({status: true, text: "success"})
    }
    return setSeeModal({status: true, text: "error"})
}


  return (
    <>
    {verify ? (
      <Layout>
        <div className="flex flex-col items-center max-w-md mx-auto mt-10">
          <h2 className='text-center text-xl font-medium my-2'>Modifier mon mot de passe</h2>
          <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col gap-4 w-full md:w-10/12">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email"
                        value="Votre Email :"
                    />
                </div>
                <TextInput
                    required
                    id="email"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    shadow
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password"
                        value="Nouveau mot de passe :"
                    />
                </div>
                <TextInput
                    required
                    id="password"
                    type="password"
                    onChange={(event) => setNewPassword(event.target.value)}
                    shadow
                    color="warning"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Confirmez le nouveau mot de passe :"
                    />
                </div>
                <TextInput
                    required
                    id="password2"
                    type="password"
                    onChange={(event) => setCheckPassword(event.target.value)}
                    color="warning"
                    shadow
                />
            </div>
            <Button type="submit">
                Enregistrer
            </Button>
          </form>
        </div>
      </Layout>
    ) : (
      <Layout>
        <div className="flex flex-col items-center max-w-md mx-auto mt-10 text-center">
          <p>Lien non valide, veuillez redemander un mail de re initialisation de mot de passe ou contacter notre support.</p>
          <Button color="red" onClick={() => navigate("/login")}>Retour a l'accueil</Button>
        </div>
      </Layout>
    )}

      <Modal show={seeModal.status === true} size="md" popup onClose={() => setSeeModal({status: false, text: ""})}>
        <Modal.Header>Rannan Support</Modal.Header>
        <Modal.Body>
          {seeModal.text === "success" &&
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Votre nouveau mot de passe est enregistré.
              </h3>
              <Button onClick={() => navigate("/login")}>
                Me connecter
              </Button>
            </div>
          }
          {seeModal.text === "error" &&
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Erreur lors du traitement de votre demande. Veuillez redemander un mail de re initialisation de mot de passe ou contacter notre support.
              </h3>
              <Button onClick={() => navigate("/login")}>
                Retour a l'accueil
              </Button>
            </div>
          }
          {seeModal.text === "newPasswordError" &&
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Veuillez entrer deux fois votre nouveau mot de passe.
              </h3>
            </div>
          }
        </Modal.Body>
    </Modal>

    </>
  )
}

export default ReturnReset