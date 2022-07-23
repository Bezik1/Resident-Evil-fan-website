import { Suspense, useState, useEffect } from 'react'

import './App.css';

import DataBase from './components/DataBase/DataBase';
import Loading from './components/Loading/Loading';

const App = () =>{
  const [scroll, setScroll] = useState(true)

  useEffect(() => {
      const onScroll = () => {
        const scrollCheck = window.scrollY < 1300
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
      }
    
    // setting the event handler from web API
    document.addEventListener("scroll", onScroll)
    
    // cleaning up from the web API
     return () => {
       document.removeEventListener("scroll", onScroll)
      }
    }, [scroll, setScroll])

  return (
    <div className="App" >
      <Suspense fallback={<Loading />}>
        <DataBase scroll={scroll} />
      </Suspense>
    </div>
  );
}

export default App;
