import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './pages/Login/Login'
import HRDash from './pages/HR/HRDash/HRDash';
import CreateCampaign from './pages/HR/createCampaign/CreateCampaign';
import HrLeave from './pages/HR/hrLeave/HrLeave';
import EditProfile from './pages/HR/EditProfile/EditProfile';
import HrReimb from './pages/HR/hrReimb/HrReimb';
import HrSalary from './pages/HR/hrSalary/HrSalary';
import ManageCamp from './pages/HR/manageCamp/ManageCamp'
import ManageEmp from './pages/HR/manageEmp/ManageEmp'
import EmpVouchers from './pages/HR/empVouchers/EmpVouhers';
import EmpSalary from './pages/HR/empSalary/EmpSalary';
import EmpLeaves from './pages/HR/empLeaves/EmpLeaves'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      {/* HR Portal */}
      <Route path="/hr" element={<HRDash />} />
      {/* Profile Management -- HR */}
      <Route path="/hr/editProfile" element={<EditProfile />} />
      <Route path="/hr/leave" element={<HrLeave />} />
      <Route path="/hr/reimb" element={<HrReimb />} />
      <Route path="/hr/salary" element={<HrSalary />} />
      {/* Job Portal -- HR */}
      <Route path="/hr/createCampaign" element={<CreateCampaign />} />
      <Route path="/hr/manageCamp" element={<ManageCamp />} />
      {/* Employee Portal -- HR */}
      <Route path="/hr/empVouchers" element={<EmpVouchers />} />
      <Route path="/hr/empLeaves" element={<EmpLeaves />} />
      <Route path="/hr/manageEmp" element={<ManageEmp />} />
      <Route path="/hr/empSalary" element={<EmpSalary />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);