import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';
import TypeWriterEffect from 'react-typewriter-effect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Courier New' }}
            startDelay={0}
            cursorColor="black"
            text="HI REACT, WELCOME TO MY GUYS !"
            typeSpeed={100}
          />
        <Button/>
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
