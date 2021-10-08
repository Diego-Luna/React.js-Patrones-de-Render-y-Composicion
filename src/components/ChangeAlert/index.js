import React from "react";
import { withStorageListener } from "./withStorageListener";

import "../../css/components/ChangeAlert.css";

function Changealert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="alert-container">
        <p>Hubo cambio en las tareas</p>
        <button onClick={() => toggleShow(false)} type="button">
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(Changealert);

export { ChangeAlertWithStorageListener };
