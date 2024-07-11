import './App.css';
import { Routes,Route } from 'react-router-dom';
import Slokas from './Pages/chatwithus';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import MythPageHandle from './Pages/EventsPage/MythPageHandle'
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/SignUP';
import EventPage from './Pages/EventsPage/EventPage';

function App() {
  return (
    <div>
      <Navbar/>
     
      <Routes>
        <Route path='/Read' element={<Slokas/>}/>
        <Route path='/Myths' element={<MythPageHandle/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signin" element={<Signin />} />
        {/* <Route path='/Desavataras' element={<Desavataras/>}/>  */}
         <Route path="/:mythName" element={<EventPage />} /> 
      </Routes>
      <Footer/> 
      
    </div>
  );
}

export default App;
