import { Label, TextInput, Button, Modal } from "flowbite-react"
import Layout from "../../components/Layouts/Layout"
import { useEffect, useState } from "react"
import PasswordRecup from "../../components/PasswordRecup/PasswordRecup"
import Signup from "../../components/Signup/Signup"
import { logIn } from "../../services/api/auth"
import { useNavigate } from "react-router-dom"
import { userConnected } from "../../services/api/users"
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import ValidationMail from "../../components/ValidationMail/ValidationMail"


const Login = () => {

  const navigate = useNavigate()
  const [login, setLogin] = useState(true)
  const [components, setComponents] = useState(true)
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ seeError, setSeeError ] =  useState(false)
  const [ seeModal, setSeeModal ] =  useState<{status: boolean, text: string}>({status: false, text: ""})
  const [ invalid, setInvalid ] = useState<boolean>(false)

  useEffect(() => {
    const logCheck = async () => {
      const token = localStorage.getItem("authToken")
      const validationCheck = localStorage.getItem("validationToken")
      if ( validationCheck ) {
        setInvalid(true)
        return setSeeModal({status: true, text: "invalid"})
      }
      if ( token ) {
        const logStatus = await userConnected()
        console.log("logStatus", logStatus.status);
        
        if ( logStatus.status !== 200 ) {
          return setSeeModal({status: true, text: "back"})
        }
        if ( logStatus.data.validation === 0 ) {
          setSeeModal({status: true, text: "invalid"})
          return setInvalid(true)
        }
        return navigate("/home")
      }
    }
    logCheck()
  }, [])

  const handleSubmit = async (event: any) => {
      event.preventDefault()
      const response: any = await logIn({email, password})
      if (response.status === true) {
        navigate("/home")
      }
      setSeeError(true)
  }

  const switchComponent = () => {
    setLogin(false)
  }

  const switchComponentTest = () => {
    setLogin(false)
    setComponents(false)
  }

  return (
    <>

      <Modal show={seeModal.status === true} size="md" popup onClose={() => setSeeModal({status: false, text: ""})}>
        <Modal.Header>Rannan Support</Modal.Header>
        <Modal.Body>
          {seeModal.text === "back" &&
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Une erreur est survenu lors du traitement de votre demande, veuillez vous reconnectez.
              </h3>
            </div>
          }
          {seeModal.text === "invalid" &&
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Veuillez valider votre email pour pouvoir vous connecté. Souhaitez vous que nous vous renvoyons un mail?
              </h3>
              <div className="flex gap-4">
                <Button onClick={() => setSeeModal({status: true, text: "validationMail"})}>Oui</Button>
                <Button onClick={() => setSeeModal({status: false, text: ""})}>Non</Button>
              </div>
            </div>
          }
          {seeModal.text === "validationMail" &&
            <ValidationMail />
          }
        </Modal.Body>
      </Modal>

      {
        login && invalid === false ? (

          <Layout>
            <div className="flex flex-col items-center max-w-md mx-auto">
              <form className="flex flex-col gap-4 w-full mb-5">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email1"
                      value="Votre email"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    placeholder="name@gmail.com"
                    required
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password1"
                      value="Votre mot de passe"
                    />
                  </div>
                  <TextInput
                    id="password1"
                    required
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <a onClick={switchComponent} href="#" className="text-gray-400 hover:text-cyan-600">Mot de passe oublié</a>
                </div>
                {seeError === true &&
                  <div className="flex items-center gap-2">
                    <span className="text-red-700">Informations incorrects</span>
                  </div>
                }
                  <Button
                  onClick={(event) => handleSubmit(event)}
                  className="w-6/12">
                    Connexion
                  </Button>
              </form>
              <section>
                <span className="ml-3">Première fois?&ensp;Inscrivez-vous</span>
                <a onClick={switchComponentTest} href="#" className="text-cyan-600 hover:text-gray-400 cursor-pointer">
                  &ensp;ICI&ensp;
                </a>
              </section>
            </div>
          </Layout>
        ) : (
          components && invalid === false ? (
            <Layout>
              <div className="flex flex-col items-center max-w-md mx-auto">
                <PasswordRecup />
              </div>
            </Layout>
          ) : (
            <Layout>
              <div className="flex flex-col items-center max-w-md mx-auto">
                <Signup />
              </div>
            </Layout>
          )
        )
      }
    </>
  )
}
export default Login