import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
// import App from "./app/App";
// import reportWebVitals from './reportWebVitals';

function App(props) {
  return (
    <h1>
      ¡{props.saludo}, {props.nombre} !
    </h1>
  );
}

function withSaludo(WrappedComponent) {
  return function WrapperdComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    };
  };
}

const AppWithSaludo = withSaludo(App)("Buenos dias");

ReactDOM.render(
  // <App saludo="hola" nombre="Diego" />,
  <AppWithSaludo nombre="Diego" />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
