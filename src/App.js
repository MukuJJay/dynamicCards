import "./App.css";
import Cards from "./components/Cards";
import CardSelector from "./components/CardSelector";
import React, { useState } from "react";

function App() {
  const [minAge, setMinAge] = useState(5);
  const [maxAge, setMaxAge] = useState(16);

  return (
    <div className="container">
      <CardSelector setMinAge={setMinAge} setMaxAge={setMaxAge} />
      <Cards minAge={minAge} maxAge={maxAge} />
    </div>
  );
}

export default App;
