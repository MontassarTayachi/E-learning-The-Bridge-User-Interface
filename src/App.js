import './App.css';
import { Contact } from './components/Contact';
import { Cours } from './components/Cours';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Home></Home>
      <Cours></Cours>
      <Contact></Contact>
    </div>
  );
}

export default App;
