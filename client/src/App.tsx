import React from "react";
import "./App.css";
import axios from 'axios'

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get('/api/secret')
  }, [])

  return (
    <div className="App">
      Hello World
    </div>
  );
};

export default App;
