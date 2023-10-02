import { Button, Label, Checkbox, TextInput } from 'flowbite-react';
import { ListGroup } from 'flowbite-react';
import Layout2 from '../../components/Layouts/Layout2';
import {  useState } from 'react';

const Shares = () => {

  const users = [
    {
      id: 1,
      name: "Cayetano"
    },
    {
      id: 2,
      name: "Thomas"
    },
    {
      id: 3,
      name: "Amine"
    },
    {
      id: 4,
      name: "Vacances Eté"
    }
  ]

  let [inputValue, setInputValue] = useState("")
  
  const searchUser = () => {
    users.forEach(element => {
      if (inputValue == element.name) {
        console.log("ok");
      }
    });
    
  }

  return (
    <>

      <Layout2>
        <div className="flex flex-row">

          {/* Partie droite */}

          {/* Recherche contact, user ou group */}
          <div className="flex max-w-md flex-col gap-4 m-3 w-6/12">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Search a contact, an user or a group"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
                onChange={(event) => setInputValue(event.target.value)}
              />
              <Button type="submit" className='mt-3' onClick={searchUser}>
                Search
              </Button>
            </div>

            {/* Liste des destinataires */}
            <div>
              <h1 className='text-xl my-2'>Destinataire(s)</h1>
              {users.map((user, index) => (
                <ListGroup key={index}>
                  <ListGroup.Item>
                    {user.name}
                  </ListGroup.Item>
                </ListGroup>
              ))}

            </div>
          </div>

          {/* Partie gauche */}
          <div className="flex max-w-md flex-col gap-4 ml-3 w-6/12">
            <h1 className='text-xl my-2'>Mes informations partagées</h1>
            <div
              className="flex max-w-md flex-col gap-4"
              id="checkbox"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  defaultChecked
                  id="accept"
                />
                <Label
                  className="flex"
                  htmlFor="agree"
                >
                  <p>
                    Adresse: 12, rue du Yemen / Yemen
                  </p>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                  Téléphone: 01.02.03.04.05
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">
                  Social: <a href="#">www.instagram.com</a>
                </Label>
              </div>
              <div className="flex gap-2">
                <div className="flex h-5 items-center">
                  <Checkbox id="shipping" />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="shipping">
                    Digicode: A1B2C3
                  </Label>
                </div>
              </div>
            </div>
            <Button type="submit" className='mt-3 w-6/12'>
              Valider
            </Button>
          </div>

        </div>
      </Layout2>
    </>
  )
}
export default Shares