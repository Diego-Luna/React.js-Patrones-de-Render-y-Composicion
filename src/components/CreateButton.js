import React from "react";

import "../css/components/CreateButton.css";

function CreateButton({ openModal, setOpenModal }) {
  //  pasamos a nuestro react hook el contexto de nuestra aplicacion: ""
  // const { openModal, setOpenModal } = React.useContext(TareaContex);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };
  return (
    <button className="CreateButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateButton };
