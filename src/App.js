import './App.css';
import Header from './components/Header.js';
import GameApp from './components/Game.js';
import Taskbar from './components/Taskbar.js';
import SoftwareGrid from './components/SoftwareGrid';
import SoftwareTemplate from './components/SoftwareTemplate';

const state = {
  softwareData:[
    {
      id: 0,
      name: 'clothing-game',
      thumbnail_dir: '',
      thumbnail_alt: 'clothing game thumbnail',
      app: <GameApp />,
    },
    {
      id:1,
      name: 'music',
      thumbnail_dir: '',
      thumbnail_alt: 'music player thumbnail',
      app: 'idk'
    }
  ]
}

function App() {
  return (
    <div className="main-container unselectable">
      <Header />
      <SoftwareGrid softwares={state.softwareData} />
      <Taskbar />
    </div>
  );
}

export default App;
