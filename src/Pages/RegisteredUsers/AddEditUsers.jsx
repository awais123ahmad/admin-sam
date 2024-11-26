import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import patientService from "../../../Services/patientService";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import doctorService from "../../../Services/doctorService";
import userService from "../../../Services/userService";

const AddEditUsers = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const [doctorData, setDoctorData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch patient data for editing
      const fetchPatientData = async () => {
        try {
          const response = await patientService.fetchPatientById(id); // Use the fetchPatientById service method
          setPatientData(response.patient); // Assuming response has a 'patient' object
        } catch (error) {
          toast.error("Error fetching patient data.");
        }
      };

      fetchPatientData();
    }
  }, [id]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await doctorService.fetchAllDoctors();
        console.log(response); // Log the response to confirm the structure
        setDoctorData(response.doctors); // Access the patients array within response
      } catch (error) {
        toast.error("Error fetching Doctors");
      }
    };
    getDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await userService.update(id, patientData);
        toast.success("User updated successfully!");
      } else {
        await userService.create(patientData);
        toast.success("User added successfully!");
      }
      navigate("/patients");
    } catch (error) {
      toast.error("Error saving patient.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] m-auto">
      <h1 className="m-[30px] text-center font-[700] text-[20px]">
        {id ? "Edit User" : "Add User"}
      </h1>
      <Divider />
      <div>
        <div className="mt-[20px] flex">
          <div style={{ width: "50%" }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={patientData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginLeft: 20, width: "50%" }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={patientData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-[20px] flex">
          <div>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                label="Role"
                name="role"
                value={patientData.role} // Set the selected role
                onChange={handleChange}
                required
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="accountant">Accountant</MenuItem>
                <MenuItem value="receptionist">Receptionist</MenuItem>
                <MenuItem value="dispenser">Dispenser</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={{ marginLeft: 20, width: "50%" }}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              value={patientData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <Grid container style={{ justifyContent: "center", marginTop: "30px" }}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large"
            className="!bg-[#007fff] !text-white"
            style={{ borderRadius: "10px" }}
          >
            Save and Continue
          </Button>
        </Grid>
      </div>
    </form>
  );
};

export default AddEditUsers;
