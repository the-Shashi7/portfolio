import Topbar from './components/topbar/Topbar';
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Works";
import Menu from './components/menu/Menu';
import './app.scss';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}  />
      <div className='sections'>
        <Intro/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
