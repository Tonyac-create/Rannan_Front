import { useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { getUserRelation } from '../../services/api/users';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineExclamationCircle, HiCheckCircle, HiCheck, HiX } from 'react-icons/hi';
import { createValidation, deleteContact } from '../../services/api/contacts';
import { removeShareByUsers } from '../../services/api/data';

const ProfileRelation = (props: any) => {
    const { userName } = props;
    //Gestion de l'affichage
    const [ isContact, setIsContact ] = useState(false);
    const [ isValidation, setIsValidation ] = useState(false);
    const [ isNoRelation, setIsNoRelation ] = useState(false);
    const [ target, setTarget ] = useState<string>("");
    const { id } = useParams()

    useEffect(() => {
        const getBtn = async() => {
            const response = await getUserRelation(id);
            if(response.status === 500){
                setIsNoRelation(true)
            }
            else{
              if(response.data.relation_type === "contact"){
                  setIsContact(true);
                  setTarget(response.data.relation_id)
              }
              if(response.data.relation_type === "validation"){
                  setIsValidation(true);
                  setTarget(response.data.relation_id);
              }
            }
        }
        getBtn();
    }, [])

    //Modale deleteUser
    const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

    const openUserDltModal = (e: Event) => {
        e.preventDefault();
        setOpenDeleteModal(true)
    }

    //Modale DeletionType
    const [errorMsg, setErrorMsg ] = useState<string>("");  //reutilisé + tard
    const [succesMsg, setSuccessMsg ] = useState<string>("");
    const [ openDltTypeModal, setOpenDltTypeModal ] = useState(false);

    const dltTypeModal = (e: Event) => {
        e.preventDefault();
        setOpenDltTypeModal(true)
        setOpenDeleteModal(false)
    }

    //Modale success et Modale erreur
    const [ openSuccessModal, setOpenSuccessModal ] = useState(false);
    const [ openErrorModal, setOpenErrorModal ] = useState(false);
    //Delete contact
    const contactDelete = async() => {
      const response: any = await deleteContact(+target);
      const error = response.response;
      if(response.status === 200){
        setSuccessMsg("Utilisateur supprimé de la liste des contacts avec succès.");
        setOpenSuccessModal(true)
      }
      if(error.status === 500){
        const errorType = error.data.error;
        if(errorType === "Unauthorized"){
          setErrorMsg("Vous n'êtes pas authorisé.");
          setOpenErrorModal(true)
        }
        if(errorType === "contact not found"){
          setErrorMsg("Utilisateur non trouvé.");
          setOpenErrorModal(true)
        }
        else{
          setErrorMsg("Erreur dans le serveur.");
          setOpenErrorModal(true)
        }       
      }
    }

    //Delete Contact + Delete shares
    const contactShareDelete = async() => {
      const contactResponse: any = await deleteContact(+target);
      const shareResponse: any = await removeShareByUsers(+id); //! id can be undefined
      if(contactResponse.data.status === 200 && shareResponse.status === 200){
          setSuccessMsg("Utilisateur supprimé de la liste de contacts, et partage supprimés avec succès.");
          setOpenSuccessModal(true);
      }
      else if(contactResponse.data.status === 200 &&  shareResponse.response.status === 500){
          setErrorMsg("Utilisateur supprimé de la liste de contacts, mais erreur dans la suppression du partage. Veuillez réesayer ultérieurement.");
          setOpenErrorModal(true);
      }
      else if(contactResponse.data.status === 500 && shareResponse.status === 200){
          setErrorMsg("Partage supprimé, mais erreur dans la suppression de l'utilisateur de la liste de contacts. Veuillez réesayer ultérieurement.");
          setOpenErrorModal(true);
      }
      else{
          setErrorMsg("Une erreur est survenue lors de la suppression de l'utilisateur de la liste de contacts et du partage avec celui-ci.");
          setOpenErrorModal(true);
      }
        
    }
    
    //Modale ajouterUser
    const [ openAddModal, setOpenAddModal ] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [requestIsSent, setRequestIsSent] = useState(false);

    const openUserAddModal = (e: Event) => {
        e.preventDefault();
        setOpenAddModal(true)
    }

    //Gérer l'envoi d'une validation
    const sendValidation = async(e: Event) => {
        e.preventDefault();
        //RequÊte axios
        const response: any = await createValidation({contactId : id});
        //En fonction de la réponse définir un message ou un autre pour le modal
        if(response.status === 200){
          setRequestIsSent(true);
          setOpenConfirmModal(true);
        }
        else{
          const error = response.response;
          const errorType = error.data.error;
          console.log("🚀 ~ file: SearchUserContacts.tsx:30 ~ sendValidation ~ errorType:", errorType)
          if(errorType === "User and Contact are the same user"){
            setErrorMsg("Demande faite à vous même.");
            setOpenConfirmModal(true);
          }
          if(errorType === "A contact request exists already"){
            setErrorMsg("Demande en attente de réponse.");
            setOpenConfirmModal(true);
          }
          if(errorType === "Users are in contact"){
            setErrorMsg("Cet user est déjà dans vos contacts.");
            setOpenConfirmModal(true);
          }
          if(errorType === "One of the users, or the two don't exist"){
            setErrorMsg("L'utilisateur ciblé n'existe pas.");
            setOpenConfirmModal(true);
          }
          if(errorType === "Bad request"){
            setErrorMsg("Erreur de serveur.");
            setOpenConfirmModal(true);
          }
        }
    }

    //Gerer la modale notification
    const confirmAccept = (e: Event) =>{
        e.preventDefault();
        setOpenConfirmModal(false);
        setOpenErrorModal(false);
        setOpenSuccessModal(false)
        window.location.reload();
    }

  return (
    <div>
        <div className={isContact === true ? "activeAction" : "hidden"}>
            <Button color='failure' onClick={() =>openUserDltModal}>
                Supprimer ce contact
            </Button>
            <Modal show={openDeleteModal} size="md" onClose={() => setOpenDeleteModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            <span>Vous allez retirer <span>{userName}</span> de vos contacts.</span>
                            <br/>
                            <span>Veuillez confirmer.</span>
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => dltTypeModal}>
                                {"Confirmer"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={openDltTypeModal} size="md" onClose={() => setOpenDltTypeModal(false)} >
                <Modal.Header>Supprimer le contact.</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-base leading-relaxed text-gray-800">
                            Voulez-vous supprimer aussi vos partages avec cet utilisateur?
                        </h3>
                        <p className="text-base leading-relaxed text-gray-500">
                        Vous pourrez les partager à nouveau plus tard avec cet utilisateur si vous le souhaitez.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="success" onClick={contactShareDelete}>Oui</Button>
                    <Button color="failure" onClick={contactDelete}>Non</Button>
                </Modal.Footer>
            </Modal>
            <div>
              <Modal show={openSuccessModal} size="md" onClose={confirmAccept} popup> //! probléme de typage
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiCheck className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      {succesMsg}
                    </h3>
                  </div>
                </Modal.Body>
              </Modal>
              <Modal show={openErrorModal} size="md" onClose={confirmAccept} popup> //! probléme de typage
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiX className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Erreur dans la supression du contact.
                    </h3>
                    <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">{errorMsg}</p>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
        </div>
        <div className={isValidation === true ? "activeAction" : "hidden"}>
            <Button as={Link} to="/contacts" color="warning">
                Demande en attente
            </Button>
        </div>
        <div className={isNoRelation === true ? "activeAction" : "hidden"}>
            <Button onClick={() => openUserAddModal}>
                Envoyer une demande
            </Button>
            <Modal show={openAddModal} size="md" onClose={() => setOpenAddModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiCheckCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            <span>Vous allez envoyer une demande à: <span>{userName}</span>.</span>
                            <br/>
                            <span>Veuillez confirmer.</span>
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="success" onClick={() => sendValidation}>
                                {"Confirmer"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <div>
              //! probléme de typage
              <Modal show={openConfirmModal} size="md" onClose={confirmAccept} popup className={requestIsSent === true ? "modal" : "hidden"}>
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiCheck className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Demande envoyée
                    </h3>
                  </div>
                </Modal.Body>
              </Modal>
              //! probléme de typage
              <Modal show={openConfirmModal} size="md" onClose={confirmAccept} popup className={requestIsSent === false ? "modal" : "hidden"}>
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiX className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Erreur dans l'envoi de la demande.
                    </h3>
                    <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">{errorMsg}</p>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
        </div>
    </div>
  )
}

export default ProfileRelation