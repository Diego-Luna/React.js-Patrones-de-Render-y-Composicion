import React from "react";

// importamos neustro contexto
// import { TareaContex } from "../tareaContex";

import "../css/components/TareasCounter.css";

function TareasCounter({ totalTareas, completesTareas }) {
  return (
    <h2 className="TareasCounter">
      Has completado {completesTareas} de {totalTareas} tareas.
    </h2>
  );
}

export { TareasCounter };
