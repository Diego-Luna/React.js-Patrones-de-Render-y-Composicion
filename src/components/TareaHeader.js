import React from "react";

function TareaHeader({ children, loading }) {
  // React.cloneElement(children, { loading: true });

  return (
    <header>
      {/* {children} */}
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </header>
  );
}

export default TareaHeader;
