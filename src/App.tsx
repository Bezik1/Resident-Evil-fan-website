import { useState } from 'react'

import './App.css';
import Earth from './components/Earth/Earth';
import Information from './components/Information/Information'

const App = () =>{
  const [clicked, click] = useState(false)

  return (
    <div className="App">
      <Information clicked={clicked} />
      <Earth clicked={clicked} click={click} />
    </div>
  );
}

export default App;
