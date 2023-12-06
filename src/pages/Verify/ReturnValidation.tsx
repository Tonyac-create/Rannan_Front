import { Button, Label, Modal, TextInput } from "flowbite-react"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Layout from "../../components/Layouts/Layout";
import { returnValidation } from "../../services/api/auth";


const ReturnValidation = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  const verifyToken = localStorage.getItem('validationToken')
  const [ verify, setVerify ] = useState<boolean>(false)
  const [ email, setEmail ] = useState<string>("")
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
    const sendStatus = await returnValidation({email})
    if ( sendStatus.status === 201 ) {
      localStorage.removeItem("validationToken")
      return navigate("/login")
    }
    setSeeModal({status: true, text: "error"})
  }

  return (
    <>
      {verify ? (
        <Layout>
          <div className="flex flex-col items-center max-w-md mx-auto mt-10">
            <p className="text-center">Veuillez entrer votre mail pour l'enregistrer et pouvoir vous connecté.</p>
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
        )
      }

      <Modal show={seeModal.status === true} size="md" popup onClose={() => setSeeModal({status: false, text: ""})}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          {seeModal.text === "error" &&
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Erreur lors du traitement de votre demande. Veuillez vérifier votre adresse mail, recharger la page ou contacter le support de rannan.
              </h3>
              <div className="flex gap-4">
                <Button onClick={() => setSeeModal({status: false, text: ""})}>
                  Entrer a nouveau mon mail
                </Button>
                <Button onClick={() => navigate("/login")}>
                  Retour a l'accueil
                </Button>
              </div>
            </div>
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ReturnValidation