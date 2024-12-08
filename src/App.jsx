import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import PortalLayout from "./Components/PortalLayout";
import Doctors from "./Pages/Doctors/Doctors";
import Medicines from "./Pages/Medicines/Medicines";
import RegisterUsers from "./Pages/RegisteredUsers/RegisterUsers";
import AddEditUsers from "./Pages/RegisteredUsers/AddEditUsers";
import LoginPage from "./Pages/Login/Login";
import Staff from "./Pages/Staff/Staff";
import AddEditStaff from "./Pages/Staff/AddEditStaff";
import AdminDashboard from "./Pages/Admin_Dashboard/AdminDashboard";
import AddEditDoctors from "./Pages/Doctors/AddEditDoctors";
import AddEditHR from "./Pages/RegisteredUsers/AddEditHR";
import AddEditDispenser from "./Pages/RegisteredUsers/AddEditDispenser";
import Cookies from 'js-cookie';
import Patients from "./Pages/Patients/Patients";
import PatientDetails from "./Pages/Patients/PatientDetails";
import AddEditPatient from "./Pages/Patients/AddEditPatient";

function App() {
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated && location.pathname !== "/") {
      navigate("/");
    }
  }, [isAuthenticated, location.pathname, navigate]);

  // Check authentication status on page load
  useEffect(() => {
    setIsAuthenticated(
      Boolean(Cookies.get("XIOQUNVU1RPTUVSLUFVVEhFTlRJQ0FUSU9OIMSLQ1JFVC1LRVk="))
    );
  }, [location.pathname]);

  return (

      <PortalLayout>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="admin/staff" element={<Staff />} />
          <Route path="/admindasboard" element={<AdminDashboard />} />

          <Route path="admin/staff/AddEditStaff" element={<AddEditStaff />} />

          <Route path="admin/register" element={<RegisterUsers />} />
          <Route path="admin/register/AddEditUser" element={<AddEditUsers/>} />
          <Route path="admin/register/AddEditHR" element={<AddEditHR/>} />
          <Route path="admin/register/AddEditDispenser" element={< AddEditDispenser/>} />

          <Route path="admin/doctor" element={<Doctors />} />
          <Route path="admin/doctor/AddEditDoctor" element={<AddEditDoctors />}
          />
          <Route path="/admin/patients" element={<Patients />} />
          <Route path="/admin/patients/:id" element={<PatientDetails />} />
          <Route path="/admin/patients/AddEdit" element={<AddEditPatient />} />
          
          <Route path="/admin/medicines" element={<Medicines />} />





        </Routes>
      </PortalLayout>
 
  );
}

export default App;