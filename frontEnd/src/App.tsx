
import './App.css'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import ProjectPage from './page/project/ProjectPage';
import FundPage from './page/fund/FundPage';
import AddPage from './page/add-from/AddProject';
import AddFund from './page/add-from/AddFund';
import CostPage from './page/costs/CostPage';
import AddCost from './page/add-from/AddCost';
import  Dashboard  from './page/home/DashboardPage';




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
              <Route path='/addproject' element={<AddPage/>} />
              <Route path='/addfund' element={<AddFund/>} />
              <Route path='/addcost' element={<AddCost/>} />
            </Routes> 
          </div>
         
        </BrowserRouter>
    </div>
  )
}

export default App
