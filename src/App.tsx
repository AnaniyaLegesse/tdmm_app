
import './App.css'
import { Button } from './components/ui/button'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { PaymentTable } from './components/fund-table/PaymentTable'



 function App() {
 
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      {/* NAVIGATION BAR SECTION */}
      <div className="flex justify-between ">
        <h2 className='text-3xl font-semibold'>TDMM</h2>
        <div className="flex gap-2 ">    
          <Button>Login</Button>
          <ModeToggle />
        </div>   
      </div>
      
      {/* TABLE SECTION */}

      <div className='mt-10'>
       <PaymentTable />
      </div>

    </ThemeProvider>
  )
}

export default App
