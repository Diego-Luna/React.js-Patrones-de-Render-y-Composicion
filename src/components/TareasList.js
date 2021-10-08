import React from "react";
import "../css/components/TareasList.css";

function TareasList(props) {
  // const renderFunction = props.children || props.render;

  return (
    <section className="TareaList-container">
      {props.error ? props.onError() : ""}
      {props.error ? props.onError() : ""}
      {props.loading ? props.onLoading() : ""}

      {!props.loading && !props.tareas.length ? props.onEmptyTareas() : ""}

      {props.searchValue && props.filterTareas.length <= 0
        ? props.onEmptyTareasSearchResults(props.searchValue)
        : ""}

      {props.filterTareas
        ? props.filterTareas.map((t, i) => props.render(t, i))
        : props.tareas.map((t, i) => props.render(t, i))}
      {/* {props.children} */}
    </section>
  );
}

export { TareasList };
