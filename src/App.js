import './App.css';
import Header from './components/Header.js';
import Game from './components/Game.js';
import Toolbar from './components/Toolbar.js';
import SoftwareGrid from './components/SoftwareGrid';

const state = {
  softwares:[
    {
      id: 0,
      name: 'clothing-game'
    },
    {
      id:1,
      name: 'music'
    }
  ]
}

function App() {
  return (
    <div className="main-container">
      <Header />
      <SoftwareGrid items={state} />
      <Game />
      <Toolbar />
    </div>
  );
}

export default App;
