import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import { Navigate, BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
import { Login } from "@mui/icons-material";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated])

  useEffect(() => {
    const token = Cookies.get("XIOQUNVU1RPTUVSLUFVVEhFTlRJQ0FUSU9OIMSLQ1JFVC1LRVk=");
    if (token) {
      setIsAuthenticated(true);  // User is authenticated
    } else {
      setIsAuthenticated(false); // No token found, set to false
    }
  }, [location.pathname]);  // Check authentication on path change

  return (

        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="/admin" element={isAuthenticated ? <PortalLayout> <AdminDashboard /> </PortalLayout> : <Navigate to="/login" />} />
          
          <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/admin" />} />

          <Route path="/admin/staff" element={isAuthenticated ? <PortalLayout> <Staff /> </PortalLayout> : <Navigate to="/login" />} />
          <Route path="/admin/staff/AddEditStaff" element={isAuthenticated ? <PortalLayout> <AddEditStaff /> </PortalLayout> : <Navigate to="/login" />} />

          <Route path="/admin/register" element={isAuthenticated ? <PortalLayout> <RegisterUsers /> </PortalLayout> : <Navigate to="/login" />} />
          <Route path="/admin/register/AddEditUser" element={isAuthenticated ? <PortalLayout> <AddEditUsers /> </PortalLayout> : <Navigate to="/login" />} />
          <Route path="/admin/register/AddEditHR" element={isAuthenticated ? <PortalLayout> <AddEditHR /> </PortalLayout> : <Navigate to="/login" />} />
          <Route path="/admin/register/AddEditDispenser" element={isAuthenticated ? <PortalLayout> <AddEditDispenser /> </PortalLayout> : <Navigate to="/login" />} />
   

          <Route path="/admin/doctor" element={isAuthenticated ? <PortalLayout> <Doctors /> </PortalLayout> : <Navigate to="/login" />} />
          <Route path="/admin/doctor/AddEditDoctor" element={isAuthenticated ? <PortalLayout> <AddEditDoctors /> </PortalLayout> : <Navigate to="/login" />} />
   
          <Route path="/admin/patients" element={isAuthenticated ? <PortalLayout> <Patients /> </PortalLayout> : <Navigate to="/login" />} />
          <Route path="/admin/patients/:id" element={isAuthenticated ? <PortalLayout> <PatientDetails /> </PortalLayout> : <Navigate to="/login" />} />
          <Route path="/admin/patients/AddEdit" element={isAuthenticated ? <PortalLayout> <AddEditPatient /> </PortalLayout> : <Navigate to="/login" />} />

          <Route path="/admin/medicines" element={isAuthenticated ? <PortalLayout> <Medicines /> </PortalLayout> : <Navigate to="/login" />} />
        </Routes>

  );
}

export default App;