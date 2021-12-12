import logo from '../logo.svg';
import Greet from './Greet';
import Button from './Button';
import TypeWriterEffect from 'react-typewriter-effect';
import Hello from './Hello';
import Employee from './Employee';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Courier New',
          color: 'white',
          fontWeight: 5000,
          fontSize: '2em',
        }}
        startDelay={500}
        cursorColor="white"
        multiText={[
          'Hey there, everyone :)',
          'This is made by Katrina',
          'Welcome to my React',
          'and hello Spring Boot!',
          'Hope yall liked it, UWU',
        ]}
        multiTextDelay={1500}
        typeSpeed={150}
      />              
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

export default Home;