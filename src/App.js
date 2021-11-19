import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';
import TypeWriterEffect from 'react-typewriter-effect';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <TypeWriterEffect
            textStyle={{
                fontFamily: 'Courier New',
                color: 'white',
                fontweight: 500,
                fontsize: '1.5em',
            }}
            startDelay={2000}
            cursorColor="white"
            multitext={[
                'HI GUYS :)',
                'WELCOME TO MY REACT !',
                'hello spring boot xD',
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
            /></p>
        <p>{Hello()}</p>
        <Employee/>
        <Button/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;