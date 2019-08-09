import React from "react";

function App() {
  const component = new React.Component();
  component.render = function() {
    return <div className="App" />;
  };
  return component;
}

export default App;
