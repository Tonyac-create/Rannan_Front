import { Modal } from 'flowbite-react';

const InfoModal = ({ name, value }: any) => {
  return (
    <div>
        <Modal.Header>
            <h4>{name}</h4>
        </Modal.Header>
        <Modal.Body>
            <p>{value}</p>
        </Modal.Body>
    </div>
  )
}

export default InfoModal