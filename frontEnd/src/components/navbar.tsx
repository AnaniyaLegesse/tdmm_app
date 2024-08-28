import { Link } from "react-router-dom";
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

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
        <h2 className='text-3xl font-semibold'>TDMM Fund Managment system</h2>
          <div className="flex gap-2 "> 
                <Button>Login</Button> 
                <ModeToggle />
          </div>  
        </div>
        <div className="flex gap-5 mt-10 ">
          {pageLinks.map((link) => (
                <Link to={link.path} className="text-xl font-semibold hover:underline">  
                  {link.label}
                </Link> 
              ))} 
        </div>
        
      </div>
     );
}
 
export default Navbar;