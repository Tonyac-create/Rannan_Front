import { Button, Modal } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'


function ModalInfo({ modalValidModify, setModalValidModify, textInfo, setOpenModal }: any) {
    return (
        <Modal show={modalValidModify} onClose={() => setModalValidModify(false)} size="md">
            <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {textInfo}
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => {
                            setModalValidModify(false)
                            setOpenModal(undefined)
                        }
                        }>
                            Ok
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalInfo