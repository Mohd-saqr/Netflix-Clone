import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbars from './components/Navbars/Navbars';
import FavList from './components/FavList/FavList';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Navbars/>
   <Routes>
    <Route path="/favourite" element ={<FavList/>} />
    <Route   path="/"  element={<Home/>}/>
    </Routes>
    </>
    
  );
}

export default App;
