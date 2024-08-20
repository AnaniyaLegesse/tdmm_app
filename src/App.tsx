
import './App.css'
import { Button } from './components/ui/button'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { Payment, columns } from './components/fund-table/columns'
import { DataTable } from './components/fund-table/data-table'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

async function App() {
 
  const data = await getData()
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
      
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>

    </ThemeProvider>
  )
}

export default App
