import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import { Home, About, Projects, Contact } from './Pages/index.js';




 function App() {
  return(
   <main className='bg-slate-300/20'>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Navbar/>
  </Router>
   </main>
  );
}
 
export default App