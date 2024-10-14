
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Selected from './pages/Selected';



function App() {

  return (
    <BrowserRouter>
    <Routes> 
       
       <Route path ='/' element={<Home/>}></Route>
       <Route path ='/selected'element={<Selected/>}></Route>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
