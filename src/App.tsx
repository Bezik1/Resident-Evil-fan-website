import { Suspense } from 'react'

import './App.css';

import DataBase from './components/DataBase/DataBase';
import Loading from './components/Loading/Loading';

const App = () =>{

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <DataBase />
      </Suspense>
    </div>
  );
}

export default App;
