import React from "react";

import "../css/components/TareasCounter.css";

function TareasCounter({ totalTareas, completesTareas, loading }) {
  return (
    <h2
      className={`TareasCounter ${loading ? "TareasCounter--loading" : ""} `}
    >
      Has completado {completesTareas} de {totalTareas} tareas.
    </h2>
  );
}

export { TareasCounter };
