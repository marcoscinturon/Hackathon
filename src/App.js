import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Senal from './pages/Senal';
import Home from  './pages/Home'
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      
     



      <Routes>

        <Route path="/" element= { <Home/> } />
        
        <Route path="/crear_senal"  element={ <Senal/>} />

        <Route path="/Dashboard"  element={ <Dashboard/>} />
        
        <Route path="/login"  element={ <Login/>} />

        <Route path="/register" element={ <Register/> } />
        
      </Routes>

      
      
    </BrowserRouter>
    
  );
}

export default App;
