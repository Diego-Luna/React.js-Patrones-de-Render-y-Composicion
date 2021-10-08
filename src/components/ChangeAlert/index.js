import React from "react";
import { withStorageListener } from "./withStorageListener";

function Changealert({ show, toggleShow }) {
  if (show) {
    return <p>Hubo cambio</p>;
  }else{
    return <p>No hubo cambio</p>
  }

}

const ChangeAlertWithStorageListener = withStorageListener(Changealert);

export { ChangeAlertWithStorageListener };
