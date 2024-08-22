import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
const Navbar = () => {
    return ( 
        <div className="flex justify-between ">
        <h2 className='text-3xl font-semibold'>TDMM Fund Managment system</h2>
        <div className="flex gap-2 ">    
          <Button>Login</Button>
          <ModeToggle />
        </div>   
      </div>
     );
}
 
export default Navbar;