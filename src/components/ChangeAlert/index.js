import React from "react";
import { useStorageListener } from "./useStorageListener";

import "../../css/components/ChangeAlert.css";

function Changealert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

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

export { Changealert };
