import { Areachart } from "@/components/areachart"
import { Barchart } from "@/components/barchart"
import { Piechart } from "@/components/piechart"



import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbarc"
import Sidebar from "@/components/Sidebar"

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation as, and a card with a call to action. The main content area shows an empty state with a call to action."

const HomePage=()=> {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col">
        <Navbar />

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="grid grid-cols-4 gap-3">
          
          </div> 
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Last 5 payment</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no payments
              </h3>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


export default HomePage