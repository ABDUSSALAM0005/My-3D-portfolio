import Navbar from './Components/Navbar.jsx';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects, Contact } from './Pages/index.js';




 function App() {
  return(
   <main className='bg-slate-300/20 h-[100%] '>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
   </main>
  );
}
 
export default App