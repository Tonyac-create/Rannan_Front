import { useEffect, useState } from 'react'
import ChoiceAvatar from '../../components/ChoiceAvatar/ChoiceAvatar'
import InAppPasswordModif from '../../components/InAppPasswordModif/InAppPasswordModif'
import Layout2 from '../../components/Layouts/Layout2'
import ModifyAccount from '../../components/ModifyAccount/ModifyAccount'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { checkPassword, removeUser } from '../../services/api/users'
import { logOut } from '../../services/api/auth'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const navigate = useNavigate()
  const [ seeNeedPassword, setSeeNeedPassword ] = useState(false)
  const [ seeDelete, setSeeDelete ] = useState(false)
  const [ seeDeleteCheck, setSeeDeleteCheck ] = useState(false)
  const [ seeValidation, setSeeValidation ] = useState(false)
  const [ seeError, setSeeError ] = useState(false)
  const [ password, setPassword ] = useState<string>("")

  const handleCheckPassword  = async (event: any) => {
    event.preventDefault()
    if ( password === "" ) {
      return setSeeNeedPassword(true)
    }
    const check = await checkPassword({password: password})
    if ( check.status === 500 ) {
      return setSeeNeedPassword(true)
    }
    setSeeDelete(false)
    setSeeDeleteCheck(true)
  }

  const handleDeleteAccount = async (event: any) => {
    event.preventDefault()
    const remove = await removeUser()
    if ( remove.status === 500) {
      return setSeeError(true)
    }
    setSeeValidation(true)
  }

  const handleOut = async (event: any) => {
    event.preventDefault()
    setSeeValidation(false)
    localStorage.removeItem("authToken")
    localStorage.removeItem("authRefreshToken")
    localStorage.removeItem("user.nickname")
    localStorage.removeItem("user.avatar")
    localStorage.removeItem("user.id")
    localStorage.removeItem("user.email")
    navigate("/login")
  }

  return (
    <Layout2>
      <section className="flex justify-center p-8 ">
        <h2 className="text-3xl font-medium">Mon Compte</h2>
      </section>
      <section className='flex flex-col 2xl:flex-row items-center w-full p-4 gap-7 mb-10 2xl:mb-0 '>
        <div className='flex flex-col lg:flex-row items-center gap-7 md:gap-2 justify-between w-full 2xl:w-1/2'>
          <ModifyAccount />
          <InAppPasswordModif />
        </div>
        <ChoiceAvatar />
      </section>
      <section className='flex justify-center items-center w-full mb-20'>
        <Button color='red' onClick={() => setSeeDelete(true)}>Supprimer le compte</Button>
      </section>

      <Modal show={seeDelete} onClose={() => setSeeDelete(false)}>
          <Modal.Header>Supprimer le compte</Modal.Header>
          <Modal.Body>
            <form action="">
              <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password"
                        value="Veuillez entrer votre mot de passe pour valider la suppression :"
                    />
                </div>
                <TextInput
                    required
                    id="password"
                    type="password"
                    maxLength={70}
                    onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className='flex gap-3 my-3'>
                <Button color='red' onClick={(event) => handleCheckPassword(event)}>Valider</Button>
                <Button onClick={() => setSeeDelete(false)}>Annuler</Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        <Modal show={seeDeleteCheck} onClose={() => setSeeDeleteCheck(false)}>
          <Modal.Header>Supprimer le compte</Modal.Header>
          <Modal.Body>
            <span>Supprimer sont compte supprime également toutes données associés et est irreverssible. Confirmer?</span>
            <div className='flex gap-3 my-3'>
              <Button color='red' onClick={(event) => handleDeleteAccount(event)}>OUI</Button>
              <Button onClick={() => setSeeDeleteCheck(false)}>NON</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={seeNeedPassword} onClose={() => setSeeNeedPassword(false)}>
          <Modal.Header>Supprimer le compte</Modal.Header>
          <Modal.Body>
            <span>Veuillez entrer votre mot de passe pour valider la suppression.</span>
            <div className='flex gap-3 my-3'>
              <Button color='red' onClick={() => setSeeNeedPassword(false)}>Compris</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={seeError}>
          <Modal.Header>Erreur Interne</Modal.Header>
          <Modal.Body>
            <span>Une erreur rend l'action demandé impossible. Veuillez re essayer plus tard.</span>
            <div className='flex gap-3 my-3'>
              <Button color='red' onClick={() => navigate('/home')}>OK</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={seeValidation}>
          <Modal.Header>Compte supprimé</Modal.Header>
          <Modal.Body>
            <span>Votre compte a été supprimé. Merci pour votre temps sur notre platform, a trés bientot!</span>
            <div className='flex gap-3 my-3'>
              <Button color='red' onClick={(event) => handleOut(event)}>Au revoir</Button>
            </div>
          </Modal.Body>
        </Modal>
    </Layout2>
  )
}

export default Account