import React from "react";
import './App.css';
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">

      <Person 
      
      name="Pedro"
      email="Pedro@gmail.com"
      age={21}
      isMarried={true}
      friends = {["james","marry"]}
      country="Malaysia"

      />
      
    </div>
  );
}

export default App;
