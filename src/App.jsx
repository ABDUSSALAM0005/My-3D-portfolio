import Navbar from './Components/Navbar.jsx';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects, Contact } from './Pages/index.js';




 function App() {
  return(
   <main className='bg-gray-500/30'>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Project" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
   </main>
  );
}
 
export default App