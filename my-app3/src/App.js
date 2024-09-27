import {Route, Routes} from 'react-router-dom';
import Html from "./Html";
import Sql from "./Sql";
import Java from "./Java";
import Home from './Home';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/java' element={<Java />}/>
        <Route path='/sql' element={<Sql />}/>
        <Route path='/html' element={<Html />}/>
      </Routes>
    
    </>
  );
}

export default App;
