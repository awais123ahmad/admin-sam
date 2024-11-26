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

const AddEditDoctors = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    specialization: "",
    phone_no: "",
    cnic: "",
    email: "",
    qualification: "",
    pay: "",
    experience: "",
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
        await doctorService.update(id, patientData);
        toast.success("Doctor updated successfully!");
      } else {
        await doctorService.create(patientData);
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
        {id ? "Edit Doctor" : "Add Doctor"}
      </h1>
      <Divider />
      <div>
        <div className="mt-[20px] flex">
          <div style={{ width: "50%" }}>
            <TextField
              label="Doctor Name"
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
              label="Specialization"
              variant="outlined"
              fullWidth
              name="specialization"
              value={patientData.specialization}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-[20px] flex">
          <div style={{ width: "50%" }}>
            <TextField
              label="Phone No."
              variant="outlined"
              fullWidth
              name="phone_no"
              value={patientData.phone_no}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginLeft: 20, width: "50%" }}>
            <TextField
              label="CNIC"
              variant="outlined"
              fullWidth
              name="cnic"
              value={patientData.cnic}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-[20px] flex">
          <div style={{ width: "50%" }}>
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
        <div style={{  width: "25%" }}>
            <TextField
              label="Pay"
              variant="outlined"
              fullWidth
              type="number"
              name="pay"
              value={patientData.pay}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginLeft: 20, width: "25%" }}>
            <TextField
              label="Experience"
              variant="outlined"
              fullWidth
              type="number"
              name="experience"
              value={patientData.experience}
              onChange={handleChange}
              required
            />
          </div>

          </div>

          {/* <div>
            <FormControl fullWidth>
              <InputLabel>Assigned Doctor</InputLabel>
              <Select
                label="Assigned Doctor"
                name="assigned_doctor"
                value={patientData.assigned_doctor} // Set the selected doctor's ID
                onChange={handleChange}
                required
              >
                {doctorData.map((doctors) => (
                  <MenuItem key={doctors.id} value={doctors.id}>
                    {doctors.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div> */}

        

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

export default AddEditDoctors;
