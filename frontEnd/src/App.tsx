
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './page/home/HomePage';
import ProjectPage from './page/project/ProjectPage';
import FundPage from './page/fund/FundPage';
import Navbar from './components/Navbar';

import AddPage from './page/add-from/AddProject';
import AddFund from './page/add-from/AddFund';
import CostPage from './page/costs/CostPage';
import AddCost from './page/add-from/AddCost';
import Sidebar from './components/Sidebar';



 function App() {
 
  
  return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <BrowserRouter>
        <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
        </div>
        <div className="flex flex-col">
         <Navbar/>
         <main className="flex flex-1 flex-col gap-4 p-4 bg-muted/40 lg:gap-6 lg:p-6">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/projects' element={<ProjectPage />} />
              <Route path='/funds' element={<FundPage />}/>
              <Route path='/costs' element={<CostPage />}/>
              <Route path='/addproject' element={<AddPage/>} />
              <Route path='/addfund' element={<AddFund/>} />
              <Route path='/addcost' element={<AddCost/>} />
            </Routes> 
          </main>
        </div>  
        </BrowserRouter>
    </div>
  )
}

export default App
