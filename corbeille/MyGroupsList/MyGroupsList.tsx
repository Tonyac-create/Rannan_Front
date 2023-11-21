import { ListGroup } from 'flowbite-react';

export default function MyGroupsList (props: any) {

  const { groupList, handleSelectGroup } = props

// Fonction de click sur un élément de la liste "MyGroupList" pour ouvrir les détails
  const handleClickGroup = (group_id: string) => {
    handleSelectGroup(group_id)
  }

  return (
      <ListGroup className='w-full h-full overflow-auto'>
        {groupList.map((group: any) => {
          return (
            <ListGroup.Item key={group.id} onClick={() => handleClickGroup(group.id)}>
              <p>{group.name} &ensp;</p>
            </ListGroup.Item>
            )
          })}
      </ListGroup>
  )
}