import { Route,Routes } from 'react-router-dom';
import './App.scss';
import {Navbar} from './Component'
import {Header,Auth,Home} from './container'


function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
