import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {  CircleUser,  Menu, Package2, } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const genralPageLinks = [
    {path:"/Peoplegroup", label:"People_Groups"},
    {path:"/trainingmanual", label:"Training_Manuals"},
    {path:"coordinators", label:"Coordinators"},
]

const FinancePageLinks=[
    {path:"/finance", label:"OverAll"},
    {path:"/projects", label:"Projects"},
    {path:"/funds", label:"Funds"},
    {path:"/costs", label:"Costs"},
    {path:"/analytics", label:"Analytics"},
]

 const Navbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
                <p className='text-foreground text-blue-950 font-bold'>TDMM</p>
                
            </Link>

            <NavigationMenu>
              <NavigationMenuList className='gap-4'>
                {genralPageLinks.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <Link   
                      to={link.path}
                      className="text-foreground transition-colors hover:text-foreground"
                    > 
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ))}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link"> Finance Team</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {FinancePageLinks.map((link) => (
                            <Link
                                to={link.path}
                                className="text-foreground transition-colors hover:text-foreground"
                                key={link.label}
                            >
                              <DropdownMenuItem>
                                {link.label}
                              </DropdownMenuItem>
                                
                            </Link>  

                        ))}
                  </DropdownMenuContent>
                </DropdownMenu>

           </NavigationMenuList>
           </NavigationMenu>   
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>

                {FinancePageLinks.map((link) => (
                    <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-foreground"
                        key={link.label}
                    >
                        {link.label}
                    </Link>  

                ))}
             
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              {/* REMOVED SEARCH BAR  */}
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
  )
}

export default Navbar