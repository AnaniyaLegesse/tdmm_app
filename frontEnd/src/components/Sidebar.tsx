import React from 'react'
import { Home, Package, Users } from 'lucide-react'
import { Link } from "react-router-dom";

 const Sidebar = () => {

    const pageLinks = [
        {path:"/", label:"Home"},
        {path:"/projects", label:"Project"},
        {path:"/funds", label:"Fund"},
        {path:"/costs", label:"Cost"},
    
      ]
  return (
    <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 gap-2 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <img src="/logoblue.svg" className="h-6 w-6" alt="TDMM Logo" />
                <span className='text-[#28458d] text-2xl font-bold'>TDMM</span>
            </div>
        <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {pageLinks.map((link) => (
                    <Link 
                        to={link.path} 
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        key={link.label}>  

                         {link.label}
                    </Link> 
                ))} 
        </nav>
        </div> 
        </div>
  </div>
  )
}

export default Sidebar