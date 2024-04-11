"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import MyInformationData from "../../../Forms/MyInformationData/MyInformationData";
import { createData } from "../../../../services/api/data";
import ModalInfo from "../../ModalInfo";

const BtnCreateInfo = ({ refreshData }: any) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const action = "Créer";

  // Modale qui s'ouvre quand on valide la création
  const [modalValidModify, setModalValidModify] = useState(false);
  // modale qui s'ouvre si erreur lors de la création
  const [modalError, setModalError] = useState(false);

  const createNewData = async (newData: any) => {
    // Appel API pour la création d'une data
    await createData(newData);
    setOpenModal(undefined);
    setModalValidModify(true);
    refreshData();
  };

  return (
    <>
      {modalError ? (
        <ModalInfo
          modalValidModify={modalValidModify}
          setModalValidModify={setModalValidModify}
          setOpenModal={setOpenModal}
          textInfo="Erreur lors de la création de la donnée, un champ est vide"
        />
      ) : (
        <ModalInfo
          modalValidModify={modalValidModify}
          setModalValidModify={setModalValidModify}
          setOpenModal={setOpenModal}
          textInfo="Information créée avec succès"
        />
      )}

      {/* Bouton "Créer" qui ouvre la modale pour création de la data */}
      <Button onClick={() => setOpenModal("form-elements")}>{action}</Button>

      <Modal
        show={openModal === "form-elements"}
        size="md"
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <MyInformationData
            title="Formulaire de création de données"
            action={action}
            actionData={createNewData}
            setOpenModal={setOpenModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BtnCreateInfo;
