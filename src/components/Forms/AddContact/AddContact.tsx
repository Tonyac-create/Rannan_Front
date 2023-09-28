import React, { useEffect, useState } from 'react'
import AddUserCard from '../../AddUserCard/AddUserCard'
import AddContactBtn from '../../ContactsList/CL-ModalAddContact/CL-MADC-Boutons/AddContactBtn';

const AddContact = () => {
  const userTest = {
    id: 1,
    nickname: "José",
    iscontact: false,
  }

  const [ action, setAction ] = useState();

  //Verifier si les users sont contacts ou s'il y a demande en attente: 
  //Afficher bouton, soit message demande reçue, demande déjà envoyée

  const displayBtn = () => {
    let user = userTest;
    if (user.iscontact === false){
      setAction(AddContactBtn)
    }
  }

  const addContactAction = () => {
    //API POST create authorisation(demande ajout contact) récupère le id du token et le id de la key pour l'autre user
    console.log("Demande envoyée")
  }
  
  return (
    <div className='formAddContact'>
      <AddUserCard id={userTest.id} nickname={userTest.nickname}  />  {/* si vide afficher une alerte, aucun user trouvé */}
    
    </div>
  )
}

export default AddContact