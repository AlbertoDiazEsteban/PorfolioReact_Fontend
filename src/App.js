
//import Frame from './pages/Frame'
import Login from './pages/Login'
import Main from './pages/Main'
//import Login from './pages/Login'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Shop from './pages/Shop'
import Stars from './pages/Stars'


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>  
         <Routes>
            <Route path='/login' element={<Login />}>Login</Route>
            <Route path='/' element={<Main />}>Main</Route>
            <Route path='/shop' element={<Shop />}>Shop</Route>
            <Route path='/Stars' element={<Stars />}>Stars</Route>
         </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
