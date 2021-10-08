import React from "react";
import { withStorageListener } from "./withStorageListener";

function Changealert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambio</p>
        <button onClick={() => toggleShow(false)} type="button">
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return <p>No hubo cambio</p>;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(Changealert);

export { ChangeAlertWithStorageListener };
