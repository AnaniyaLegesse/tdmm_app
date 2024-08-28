
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './page/home/HomePage';
import ProjectPage from './page/project/ProjectPage';
import FundPage from './page/fund/FundPage';
import Navbar from './components/navbar';
import AddPage from './page/add-from/AddProject';
import AddFund from './page/add-from/AddFund';
import CostPage from './page/costs/CostPage';



 function App() {
 
  
  return (
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/funds' element={<FundPage />}/>
            <Route path='/costs' element={<CostPage />}/>
            <Route path='/addproject' element={<AddPage/>} />
            <Route path='/addfund' element={<AddFund/>} />
          </Routes>   
        </BrowserRouter>
    </div>
  )
}

export default App
