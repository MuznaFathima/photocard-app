
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './components/Home';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <>
     <Header/>
     
   <Routes>

    <Route path="/" element={<LandingPage/>}/>
    <Route path="/home" element={<Home/>}/>
    
    
   </Routes>
    </>
  );
}

export default App;
