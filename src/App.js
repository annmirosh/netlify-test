import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    alanBtn({
      key: 'c02c85c4d5117c9356b1cbd1c96e3cc02e956eca572e1d8b807a3e2338fdd0dc/stage',
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
