import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    // window.addEventListener("storage", (change) => {
    //   if (change.key === "TAREAS_V1") {
    //     console.log("hubo cambio en TAREAS_V1");
    //     setStorageChange(true);
    //   }
    // });

    React.useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TAREAS_V1") {
          console.log("Hubo cambios en TAREAS_V1");
          setStorageChange(true);
        }
      };

      window.addEventListener("storage", onChange);

      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}
export { withStorageListener };
