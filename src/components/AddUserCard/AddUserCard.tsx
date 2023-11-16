'use client';
import { Button, Card } from 'flowbite-react';

const AddUserCard = (props) => {
    const { nickname, id, action } = props;

  return (
    <Card className="addUserCard max-w-sm" key={id} id={id}>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{nickname}</h4> 
      <Button onClick={action}>Ajouter</Button>
    </Card>
  )
}

export default AddUserCard