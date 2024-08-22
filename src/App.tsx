
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './page/home/HomePage';
import ProjectPage from './page/project/ProjectPage';
import BudgetPage from './page/budget/BudgetPage';



 function App() {
 
  
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/project' element={<ProjectPage />} />
            <Route path='/budget' element={<BudgetPage />}/>
          </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App
