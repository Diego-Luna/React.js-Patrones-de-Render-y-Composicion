import React from "react";

// importamos nuestro provider, (el estado de nuestra web app)
import { useTarea } from "./useTareas";

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
  } = useTarea();

  return (
    // ponemos una etiqueta invisible
    <React.Fragment>
      <TareaHeader loading={loading}>
        <TareasCounter
          totalTareas={totalTareas}
          completesTareas={completesTareas}
        />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TareaHeader>

      <TareasList
        error={error}
        loading={loading}
        tareas={tareas}
        filterTareas={filterTareas}
        searchValue={searchValue}
        onError={() => <TareaError error={error} />}
        onLoading={() => (
          <React.Fragment>
            <TareasLoading /> <TareasLoading /> <TareasLoading />
            <TareasLoading />
          </React.Fragment>
        )}
        onEmptyTareas={() => <EmptyTareas />}
        onEmptyTareasSearchResults={(text) => (
          <p>No hay resultados para {text}</p>
        )}
        render={(t, i) => (
          <Item
            onDelete={() => deleteTarea(t.text)}
            onComplete={() => completeTarea(t.text)}
            completed={t.completed}
            text={t.text}
            key={i}
          />
        )}
      />

      {/* <TareasList>
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
      </TareasList> */}

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
