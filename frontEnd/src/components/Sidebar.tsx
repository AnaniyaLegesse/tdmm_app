import React from 'react'
import { Home, Package, Users } from 'lucide-react'

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
                <img src="/logoblue.svg" className="h-6 w-6" alt="FetanPay Logo" />
                <span className='text-[#2C8EF1] text-2xl font-bold'>FetanPay</span>
            </div>
        <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
            <Home className="h-4 w-4" />
            Dashboard
            </a>
            
            <a
            href="#"
            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
            <Users className="h-4 w-4" />
            Payees
            </a>
            <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
            
            <Package className="h-4 w-4" />
            Payment
            </a> 
        </nav>
        </div> 
        </div>
  </div>
  )
}

export default Sidebar