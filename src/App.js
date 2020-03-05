import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey cohort#25. Let's study React.
        </p>
        <form action="submit">
          <label htmlFor="userName">Enter your name:</label>
          <input type="text"/>
          <button type="submit">Let's Start</button>
        </form>
      </header>
    </div>
  );
}

export default App;
