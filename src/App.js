import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./app.css"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import EmployeeList from './pages/employeeList/EmployeeList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Employee } from './pages/employee/Employee';
import  NewEmployee  from './pages/newEmployee/NewEmployee';
import  {PayrunList}  from './pages/payrunList/PayrunList';
import  { Contact } from './pages/contact/Contact';
import  {Payrun}  from './pages/payrun/Payrun';
import  {NewPayrun}  from './pages/newPayrun/NewPayrun';
import { Outlet } from 'react-router-dom'; 

function App() {
  return (
    <Router>  
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Home />} /> 
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employee/:employeeId" element={<Employee/> } />
        <Route path="/newEmployee" element={ <NewEmployee /> } />
        <Route path="/payruns" element={ <PayrunList /> } />
        <Route path="/payrun/:payrunId" element={<Payrun/> } />
        <Route path="/newpayrun" element={ <NewPayrun /> } />
        <Route path="/contact" element={ <Contact/> } />
        </Routes>
    </div>
    </Router>

     );
  }

export default App;
