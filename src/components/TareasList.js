import React from "react";
import "../css/components/TareasList.css";

function TareasList(props) {
  return (
    <section className="TareaList-container">
      {props.error ? props.onError() : ""}

      {props.error ? props.onError() : ""}
      {props.loading ? props.onLoading() : ""}
      {!props.loading && !props.tareas.length ? props.onEmptyTareas() : ""}

      {props.filterTareas
        ? props.filterTareas.map((t, i) => props.render(t, i))
        : props.tareas.map((t, i) => props.render(t, i))}

      {/* {props.children} */}
    </section>
  );
}

export { TareasList };
