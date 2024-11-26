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
import staffService from "../../../Services/staffService";

const AddEditStaff = () => {
  const [patientData, setPatientData] = useState({
    full_name: "",
    role: "",
    date_of_birth: "",
    gender: "",
    contact_number: "",
    email: "",
    address: "",
    qualification: "",
    hire_date: "",
    salary: "",
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
        await staffService.update(id, patientData);
        toast.success("Doctor updated successfully!");
      } else {
        await staffService.create(patientData);
        toast.success("Doctor added successfully!");
      }
      navigate("/patients");
    } catch (error) {
      toast.error("Error saving patient.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] m-auto">
      <h1 className="m-[30px] text-center font-[700] text-[20px]">
        {id ? "Edit Staff" : "Add Staff"}
      </h1>
      <Divider />
      <div>
        <div className="mt-[20px] flex">
          <div style={{ width: "50%" }}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              name="full_name"
              value={patientData.full_name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginLeft: 20, width: "50%" }}>
            <TextField
              label="Role"
              variant="outlined"
              fullWidth
              name="role"
              value={patientData.role}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-[20px] flex">
          <div style={{width: "50%" }}>
            <TextField
              label="Date of Birth"
              variant="outlined"
              fullWidth
              type="date"
              name="date_of_birth"
              value={patientData.date_of_birth}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div style={{ marginLeft: 20, width: "50%" }}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={patientData.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="mt-[20px] flex">
          <div style={{ width: "50%" }}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              name="contact_number"
              value={patientData.contact_number}
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
          <div style={{ width: "50%" }}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              name="address"
              value={patientData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginLeft: 20, width: "50%" }}>
            <TextField
              label="Qualification"
              variant="outlined"
              fullWidth
              name="qualification"
              value={patientData.qualification}
              onChange={handleChange}
              required
            />
          </div>
        </div>


        <div className="mt-[20px] flex">
        <div style={{width: "50%" }}>
            <TextField
              label="Date of Appointment"
              variant="outlined"
              fullWidth
              type="date"
              name="hire_date"
              value={patientData.hire_date}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div style={{ marginLeft: 20, width: "25%" }}>
            <TextField
              label="Salary"
              variant="outlined"
              fullWidth
              type="number"
              name="salary"
              value={patientData.salary}
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

export default AddEditStaff;
