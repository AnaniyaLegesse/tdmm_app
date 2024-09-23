import React from 'react'
import { Banknote, HandCoins, PanelsTopLeft, SquareChartGantt } from 'lucide-react'
import { Link } from "react-router-dom";

 const Sidebar = () => {

    const pageLinks = [
        {path:"/", label:"Home", icon:<PanelsTopLeft size={20}/>},
        {path:"/projects", label:"Project" , icon:<SquareChartGantt size={20} />},
        {path:"/funds", label:"Fund", icon: <Banknote size={20}/>},
        {path:"/costs", label:"Cost", icon: <HandCoins size={20}/>},
    
      ]
  return (
    <div className="hidden border-r h-[100vh] bg-white md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 gap-2 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <img src="/logoblue.svg" className="h-6 w-6" alt="TDMM Logo" />
                <span className='text-[#28458d] text-2xl font-bold'>TDMM</span>
            </div>
        <div className="flex-1 mt-4">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {pageLinks.map((link) => (
                    <Link 
                        to={link.path} 
                        className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-blue-800"
                        key={link.label}>  
                         {link.icon}
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