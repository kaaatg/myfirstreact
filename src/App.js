import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';
import TypeWriterEffect from 'react-typewriter-effect';
import hello from './components/hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{hello}</p>
        <TypeWriterEffect
            textStyle={{fontFamily: 'Courier New'}}
            startDelay={250}
            cursorColor="black"
            text="HI GUYS, WELCOME TO MY REACT !"
            typeSpeed={250}
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