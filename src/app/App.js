import React from "react";

// importamos nuestro provider, (el estado de nuestra web app)
// import { TareaProvider } from "../tareaContex";

// import { AppUI } from "./AppUI";

import "../css/App.css";

function App() {
  const [state, setState] = React.useState("Estado compartido");

  return (
    <React.Fragment>
      <TareaHeader>
        <TareaCounter />
        <TareaSearch />
      </TareaHeader>

      <TareaList>
        <TareaItem state={state} />
      </TareaList>
    </React.Fragment>
  );
}
function TareaHeader({ children }) {
  return <header>{children}</header>;
}
function TareaList({ children }) {
  return <section className="TareList-container">{children}</section>;
}
function TareaCounter() {
  return <p>TareaCounter</p>;
}
function TareaSearch() {
  return <p>TareaSearch</p>;
}
function TareaItem({ state }) {
  return <p>TareaItems: {state}</p>;
}

// function App() {
//   return (
//     <TareaProvider>
//       <AppUI />
//     </TareaProvider>
//   );
// }

export default App;
