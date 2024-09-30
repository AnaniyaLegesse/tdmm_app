
import './App.css'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import ProjectPage from './page/ProjectPage';
import CostPage from './page/CostPage';
import Dashboard  from './page/DashboardPage';
import FundPage from './page/FundPage';
import AddFund from './page/add-from/AddFund';
import AddCost from './page/add-from/AddCost';
import { AddProject } from './page/add-from/AddProject';
import { AnalyticsPage } from './page/AnalyticsPage';




 function App() {
 
  
  return (
      <div className="flex min-h-screen w-full flex-col">
        <BrowserRouter>
        <Navbar/>
         <div>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/projects' element={<ProjectPage />} />
              <Route path='/funds' element={<FundPage />}/>
              <Route path='/costs' element={<CostPage />}/>
              <Route path='/addproject' element={<AddProject/>} />
              <Route path='/addfund' element={<AddFund/>} />
              <Route path='/addcost' element={<AddCost/>} />
              <Route path='/analytics' element={<AnalyticsPage/>} />

            </Routes> 
          </div>
         
        </BrowserRouter>
    </div>
  )
}

export default App
