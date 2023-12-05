import { useState } from "react"
import { Button, Label, Modal, TextInput } from "flowbite-react"
import { validationMail } from "../../services/api/auth"
import { useNavigate } from "react-router-dom"

function ValidationMail() {

  const navigate = useNavigate()
  const [ email, setEmail ] = useState<string>("")
  const [ seeModal, setSeeModal ] = useState<{status: boolean, text: string}>({status: false, text: ""})

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const validationSend = await validationMail({email: email})
    if ( validationSend.status === false ) {
      setSeeModal({status: true, text: "error"})
    }
    setSeeModal({status: true, text: "success"})
  }

  const handleClickEnd = (event: any) => {
    event.preventDefault()
    setSeeModal({status: false, text: "success"})
  }

  return (
    <>
      <Modal show={seeModal.status === true} size="md" popup onClose={() => setSeeModal({status: false, text: ""})}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          {seeModal.text === "error" &&
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Erreur lors du traitement de votre demande. Veuillez recharger la page ou contacter le support de rannan.
              </h3>
              <Button onClick={() => navigate("/login")}>
                Retour a l'accueil
              </Button>
            </div>
          }
          {seeModal.text === "success" &&
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Email envoyé. Veuillez vérifier votre email pour pouvoir valider vos données et vous connecter.
              </h3>
              <Button onClick={(event) => handleClickEnd(event)}>
                Retour a l'accueil
              </Button>
            </div>
          }
        </Modal.Body>
      </Modal>

    <div className="flex flex-col items-center max-w-md mx-auto mt-10">
      <p className="text-center mb-4">Veuillez entrer votre adresse mail pour recevoir a nouveau un mail de validation.</p>
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
  </>
  )
}

export default ValidationMail