import './App.css';
import Header from './components/Header.js';
import GameApp from './components/Game.js';
import Taskbar from './components/Taskbar.js';
import SoftwareGrid from './components/SoftwareGrid';
import SoftwareTemplate from './components/SoftwareTemplate';

const state = {
  softwares:[
    {
      id: 0,
      name: 'clothing-game',
      thumbnail_dir: '',
      app: <GameApp />
    },
    {
      id:1,
      name: 'music',
      thumbnail_dir: '',
      app: 'idk'
    }
  ]
}

function App() {
  return (
    <div className="main-container unselectable">
      <Header />
      <SoftwareGrid items={state} />
      <SoftwareTemplate software={state.softwares[0]} />
      <Taskbar />
    </div>
  );
}

export default App;
