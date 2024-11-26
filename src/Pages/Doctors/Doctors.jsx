import React, { useEffect, useState } from "react";
import { Tooltip, Modal, Box, Typography, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import PaginationComponent from "../../../Components/PaginationComponent";
import patientService from "../../../Services/patientService";
import toast from 'react-hot-toast';
import doctorService from "../../../Services/doctorService";
import DoctorDetailsModal from "./DoctorDetailsModal";


const Doctors = () => {
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        setLoading(true);
        const response = await doctorService.fetchAllDoctors();
        console.log(response);
        setPatients(response.doctors);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error('Error fetching doctors');
      }
    };
    getDoctors();
  }, []);

  useEffect(() => {
    const filteredResult = patients?.filter(
      (item) =>
        item?.name?.toLowerCase().includes(searchData.toLowerCase())
    ) || [];
    setFilteredData(filteredResult);
    setCurrentPage(1);
  }, [searchData, patients]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(filteredData?.slice(startIndex, endIndex) || []);
  }, [currentPage, filteredData]);

  const handleViewClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div>
      <div className="p-4">
        <h1 className="ml-[3%] text-[19px] text-gray-700 font-[700]">Doctors</h1>
        <h1 className="ml-[3%] text-[13px] text-gray-700 mb-4">{filteredData?.length || 0} records found</h1>
        
        <div className="flex mt-8 flex-row-reverse justify-between px-[3%]">
          <Link to='AddEditDoctor'>
            <button className="bg-[#232233] h-[2rem] px-4 rounded-md text-white font-[600] text-[14px]">
              + New Doctor
            </button>
          </Link>
          <div className="w-[40%]">
            <input
              type="search"
              placeholder="Search Here..."
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              className="block w-[90%] pl-10 text-gray-900 p-2 rounded-md border-gray-800 bg-white focus:outline-none"
            />
            <SearchIcon className="mt-[-4rem] text-gray-700 ml-2" />
          </div>
        </div>

        <div className="mx-[3%]">
          <table className="w-[100%]">
            <thead>
              <tr className="text-[#101418] capitalize leading-normal">
              <th className="py-[1%] w-[10%] text-[.8rem] text-gray-700 text-left pl-4">Sr No.</th>
              <th className="py-[1%] w-[20%] text-[.8rem] text-gray-700 text-left pl-4">Name</th>
                <th className="py-[1%] w-[20%] text-[.8rem] text-gray-700 text-left pl-4">Specialization</th>
                <th className="py-[1%] w-[10%] text-[.8rem] text-gray-700 text-left">Contact Number</th>
                <th className="py-[1%] w-[10%] text-[.8rem] text-gray-700 text-center">CNIC</th>
                <th className="py-[1%] w-[20%] text-[.8rem] text-gray-700 text-center">Qualification</th>
                <th className="py-[1%] w-[10%] text-[.8rem] text-gray-700 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((patient) => (
                <tr key={patient?.patient_id} className="bg-white text-gray-600 text-sm font-light border-t-[1px] border-gray-200">
                  <td className="w-[10%] text-left">
                    <p className="font-[600] text-gray-600 text-[14px] text-center">{patient?.id}</p>
                  </td>
                  <td className="w-[20%] text-left">
                    <p className="font-[600] text-gray-600 text-[14px] text-left">{patient?.name}</p>
                  </td>
                  <td className="py-[1%] w-[20%] text-left pl-4">
                    <p className="font-[600] text-gray-600 text-[14px]">{patient?.specialization}</p>
                  </td>
                  <td className="w-[10%] text-left">
                    <p className="font-[600] text-gray-600 text-[14px]">{patient?.phone_no}</p>
                  </td>
                  <td className="py-[2%] px-2 w-[10%] text-center">
                    <span className="font-[400]">{patient?.cnic}</span>
                  </td>
                  <td className="py-[2%] px-2 w-[20%] text-center">
                    <span className="font-[400]">{patient?.qualification}</span>
                  </td>
                  {/* <td className="py-[2%] w-[10%] text-center">
                    <Link to={`/patient/patients/${patient.id}`}>
                      <button className="text-[13px] font-[500] text-blue-500">View</button>
                    </Link>
                  </td> */}
                   <td className="py-[2%] w-[10%] text-center">
                    <button
                      onClick={() => handleViewClick(patient)}
                      className="text-[13px] font-[500] text-blue-500"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PaginationComponent
          data={filteredData}
          setPaginatedData={setPaginatedData}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <DoctorDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        doctorDetails={selectedDoctor}
      />
    </div>
  );
};

export default Doctors;



