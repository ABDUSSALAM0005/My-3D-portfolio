//rafce shortcut
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 ">
      
 <NavLink
  to="/"
  className="w-24 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-blue-300/40 hover:ring hover:ring-blue-400/30"
>
  <p className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent ">
    404Sync
  </p>
</NavLink>

      <nav className="flex text-lg gap-7 font-medium">
   <NavLink
  to="/about"
  className={({ isActive }) =>
    `relative transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-105 ${
      isActive ? "text-blue-500" : "text-black"
    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300`
  }
>
  About
</NavLink>

<NavLink
  to="/projects"
  className={({ isActive }) =>
    `relative transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-105 ${
      isActive ? "text-blue-500" : "text-black"
    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300`
  }
>
  Projects
</NavLink>


    
      </nav>
    </div>
  );
};

export default Navbar;
