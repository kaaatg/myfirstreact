import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Router from './components/Router';

function App() {
  return (
    <div>
        <Nav/>
        <div className="App">
            <Router/>
        </div>
    </div>
  );
}

export default App;