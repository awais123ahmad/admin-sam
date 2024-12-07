import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import PortalLayout from "./Components/PortalLayout";
import AdminPatients from "./Pages/Patients/AdminPatients";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename="/admin">
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
          <Route
            path="admin/doctor/AddEditDoctor"
            element={<AddEditDoctors />}
          />
          <Route path="/admin/patients" element={<AdminPatients />} />
          <Route path="/admin/medicines" element={<Medicines />} />
        </Routes>
      </PortalLayout>
    </BrowserRouter>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import PortalLayout from "./Components/PortalLayout";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import MedicalStore from "./Pages/Dispensaries/Dispensary/MedicalStore";
// import PatientDetails from "./Pages/Patient/Patients/PatientDetails";
// import AddEditPatient from "./Pages/Patient/Patients/AddEditPatient";
// import Income from "./Pages/Account/Income/Income";
// import AdminPatients from "./Pages/Admin/Patients/AdminPatients";
// import Doctors from "./Pages/Admin/Doctors/Doctors";
// import RegisterUsers from "./Pages/Admin/RegisteredUsers/RegisterUsers";
// import AddEditUsers from "./Pages/Admin/RegisteredUsers/AddEditUsers";
// import LoginPage from "./Pages/Login/Login";
// import AddEditDoctors from "./Pages/Admin/Doctors/AddEditDoctors";

// function App() {
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     // Fetch user data from localStorage
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setUserRole(user.role); // Set user role from localStorage
//     } else {
//       setUserRole(null); // No user logged in
//     }
//   }, []);

//   if (userRole === null) {
//     return <LoginPage />; // If no role is set, show login page
//   }

//   return (
//     <BrowserRouter>
//       <PortalLayout>
//         <Routes>
//           {/* Common Routes */}
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/login" element={<LoginPage />} />

//           {/* Patient Routes */}
//           <Route path="/patient/patients" element={<PatientDetails />} />
//           <Route path="/patient/patients/:id" element={<PatientDetails />} />
//           <Route path="/patient/patients/AddEdit" element={<AddEditPatient />} />

//           {/* Medical Store Routes */}
//           <Route path="/dispensaries/dispensary" element={<MedicalStore />} />

//           {/* Admin Routes - Only visible to admins */}
//           {userRole === "admin" && (
//             <>
//               <Route path="/admin/register" element={<RegisterUsers />} />
//               <Route path="/admin/register/AddEditUser" element={<AddEditUsers />} />
//               <Route path="/admin/doctor" element={<Doctors />} />
//               <Route path="/admin/doctor/AddEditDoctor" element={<AddEditDoctors />} />
//               <Route path="/admin/patients" element={<AdminPatients />} />
//             </>
//           )}

//           {/* Account Routes - Visible to all users except admin */}
//           {userRole !== "admin" && (
//             <Route path="/account/income" element={<Income />} />
//           )}
//         </Routes>
//       </PortalLayout>
//     </BrowserRouter>
//   );
// }

// export default App;
