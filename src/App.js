import './App.css';
import Header from './components/Header.js';
import Game from './components/Game.js';
import Taskbar from './components/Taskbar.js';
import SoftwareGrid from './components/SoftwareGrid';
import SoftwareTemplate from './components/SoftwareTemplate';

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
      <SoftwareTemplate software={<Game />}/>
      <Taskbar />
    </div>
  );
}

export default App;
