import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import { TodoList } from "./TodoList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Getting started with React testing library</h2>
      </header>

      <div className="App-body">
        <BrowserRouter>
          <Route exact path="/" component={TodoList} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;