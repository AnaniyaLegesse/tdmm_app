import { Link } from "react-router-dom";
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import logo from '../assets/logo.png';

const Navbar = () => {

  const pageLinks = [
    {path:"/", label:"Home"},
    {path:"/projects", label:"Project"},
    {path:"/funds", label:"Fund"},
    {path:"/costs", label:"Cost"},

  ]
    
  
    return ( 
      <div className="block">
        <div className="flex justify-between">
          <img src={logo} alt="TDMM" className="w-[100px] h-[50px]" />
          <div className="flex gap-2 "> 
                <Button>Login</Button> 
                <ModeToggle />
          </div>  
        </div>
        <div className="flex gap-5 mt-5 ">
          {pageLinks.map((link) => (
                <Link to={link.path} className="text-xl font-semibold hover:underline" key={link.label}>  
                  {link.label}
                </Link> 
              ))} 
        </div>
        
      </div>
     );
}
 
export default Navbar;