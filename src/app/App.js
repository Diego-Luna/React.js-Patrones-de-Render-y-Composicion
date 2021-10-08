import React from "react";

// importamos nuestro provider, (el estado de nuestra web app)
import { useTarea } from "./useTareas";

// import { AppUI } from "./AppUI";

// los componentes
import { TareasCounter } from "../components/TareasCounter";
import { Search } from "../components/Search";
import { TareasList } from "../components/TareasList";
import { Item } from "../components/Item";
import { CreateButton } from "../components/CreateButton";
import TareaHeader from "../components/TareaHeader";

// traemos anuestro modal
import { Modal } from "../components/Modal";
import { TareaFrom } from "../components/Form";

// los componentes de nuestro loading skeleton

import { EmptyTareas } from "../components/Skeleton/EmptyTareas";
import { TareaError } from "../components/Skeleton/TareaError";
import { TareasLoading } from "../components/Skeleton/TareasLoading";

import "../css/App.css";

function App() {
  const {
    error,
    loading,
    tareas,
    filterTareas,
    deleteTarea,
    completeTarea,
    openModal,
    totalTareas,
    completesTareas,
    searchValue,
    setSearchValue,
    addTarea,
    setOpenModal,

    // setOpenModal,
    // } = React.useContext(TareaContex);
  } = useTarea();

  return (
    // ponemos una etiqueta invisible
    <React.Fragment>
      <TareaHeader>
        <TareasCounter
          totalTareas={totalTareas}
          completesTareas={completesTareas}
        />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </TareaHeader>

      {/* esta es una opcion */}
      {/* <TareaContex.Consumer> */}
      {/* traemos el contexto de nuestra app, con el consumer */}
      {/* {() => ( */}
      <TareasList>
        {error && <TareaError error={error} />}
        {loading && (
          <React.Fragment>
            <TareasLoading /> <TareasLoading /> <TareasLoading />
            <TareasLoading />
          </React.Fragment>
        )}
        {!loading && !tareas.length && <EmptyTareas />}

        {filterTareas
          ? filterTareas.map((t, i) => (
              <Item
                onDelete={() => deleteTarea(t.text)}
                onComplete={() => completeTarea(t.text)}
                completed={t.completed}
                text={t.text}
                key={i}
              />
            ))
          : tareas.map((t, i) => (
              <Item
                onDelete={() => deleteTarea(t.text)}
                onComplete={() => completeTarea(t.text)}
                completed={t.completed}
                text={t.text}
                key={i}
              />
            ))}
      </TareasList>
      {/* )} */}
      {/* </TareaContex.Consumer> */}

      {/* cuando openModal sea true, no renderice el componente Modal */}
      {!!openModal && (
        <Modal>
          <TareaFrom addTarea={addTarea} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateButton openModal={openModal} setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
