import React from "react";

import "../css/components/TareasCounter.css";

function TareasCounter({ totalTareas, completesTareas }) {
  return (
    <h2 className="TareasCounter">
      Has completado {completesTareas} de {totalTareas} tareas.
    </h2>
  );
}

export { TareasCounter };
