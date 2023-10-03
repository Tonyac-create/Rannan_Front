import { Button, Label, Checkbox, TextInput } from 'flowbite-react';
import { ListGroup } from 'flowbite-react';
import Layout2 from '../../components/Layouts/Layout2';
import { useEffect, useState } from 'react';

const Shares = () => {


  const [arrayUsers, setArrayUsers] = useState([] as any)
  const [datas, setDatas] = useState([] as any)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("/db.json")
        const data = await response.json()
        
        setArrayUsers(data.apiUsers)
        setDatas(data.apiDatas)      
      }
      catch (error) {
        console.log("error", error);
      }
    }
    fetchData()
  }, [])

  // Afficher les informations liés au user
  const [information, setInformation] = useState("")

  // Incrémenter et Afficher la liste
  const [elementList, setElementList] = useState([] as any)

  const addElementList = (event: any) => {
    // console.log(arrayUsers);
    event.preventDefault();
    const elementListName = event.target.elements.elementListName.value;
    // console.log(elementListName);
    
    arrayUsers.forEach((element: any) => {
     
      if (elementListName === element.nickname) {
        const newElementList = { name: elementListName };
        setElementList([...elementList, newElementList]);
        // setInformation(element.information)
        datas.forEach((el: any) => {
          if (el.user_id === element.id) {
            setInformation(el.value)
          }
        });
      }
    });

    
  };
  
  const displayInformation = (id: any) => {
    
    const informationChange = elementList.map((information: any) => {
      if (elementList.id === id) {
        return {...information}
      }
      return informationChange
    })
    
    setInformation(informationChange)
    
  }

  return (
    <>

      <Layout2>
        <div className="flex flex-row">

          {/* Partie droite */}

          {/* Recherche contact, user ou group */}
          <div className="flex max-w-md flex-col gap-4 m-3 w-6/12">
            <form onSubmit={addElementList}>
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
                name="elementListName"
              />
              <Button type="submit" className='mt-3'>
                Search
              </Button>
            </form>

            {/* Liste des destinataires */}
            <div>
              <h1 className='text-xl my-2'>Destinataire(s)</h1>
              {elementList.map((element: any, index: any) => (
              <ListGroup key={index}>
                <ListGroup.Item onClick={() => displayInformation(element.id)}>
                  {element.name}
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
                  // defaultChecked
                  id="accept"
                />
                <Label
                  className="flex"
                  htmlFor="agree"
                >
                  <p>
                    {information}
                  </p>
                </Label>
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