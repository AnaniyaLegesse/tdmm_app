import { BrowserRouter, Routes, Route,} from "react-router-dom";
import ProjectPage from './page/FinancePages/ProjectPage';
import CostPage from './page/FinancePages/CostPage';
import Dashboard  from './page/FinancePages/DashboardPage';
import FundPage from './page/FinancePages/FundPage';
import AddFund from './page/add-from/AddFund';
import AddCost from './page/add-from/AddCost';
import { AddProject } from './page/add-from/AddProject';
import { AnalyticsPage } from './page/FinancePages/AnalyticsPage';
import { Toaster } from 'react-hot-toast';
import HomePage from "./page/GeneralPages/Home";
import Login from "./page/Auth/Login";
import CoordinatorsPage from "./page/GeneralPages/CoordinatorsPage";
import TrainingmanualPage from "./page/GeneralPages/TrainingmanualPage";
import PeopleGroupPage from "./page/GeneralPages/PeopleGroupPage";
import Navbar from "./components/Navbar";


 function App() {
 
  
  return (
      <div className="flex min-h-screen w-full flex-col">
        <BrowserRouter>
        <Navbar/>
         <div>
            <Routes>

              {/* GENERAL PAGES */}
              <Route path='/' element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/coordinators" element={<CoordinatorsPage />} />
              <Route path="/trainingmanual" element={<TrainingmanualPage />} />
              <Route path="/Peoplegroup" element={<PeopleGroupPage />} />

              {/* FINANCE TEAM PAGES */}
              <Route path='/finance' element={<Dashboard />} />
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
        <Toaster position="bottom-right" reverseOrder={false} />  
    </div>
  )
}

export default App
