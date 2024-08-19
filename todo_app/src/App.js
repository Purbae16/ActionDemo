import React, { useState } from 'react';
import './App.css';

function App() {
  const [mount, setmount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.svg').default} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current mount: {mount}
        </p>
        <button onClick={() => setmount(mount + 1)}>Increase mount</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

