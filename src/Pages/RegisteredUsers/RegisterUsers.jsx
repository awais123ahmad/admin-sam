import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom"; // Added Link here
import PaginationComponent from "../../Components/PaginationComponent";
import toast from "react-hot-toast";
import dispenserService from "../../Services/dispenserService";

const RegisterUsers = () => {
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await dispenserService.fetchAll();
        console.log(response);
        setPatients(response.dispensers);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching Patients");
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const filteredResult =
      patients?.filter((item) =>
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

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <div className="p-4">
        <h1 className="ml-[3%] text-[19px] text-gray-700 font-[700]">Users</h1>
        <h1 className="ml-[3%] text-[13px] text-gray-700 mb-4">
          {filteredData?.length || 0} records found
        </h1>

        <div className="flex mt-8 flex-row-reverse justify-between px-[3%]">
          {/* Dropdown for navigation */}
          <div className="w-[40%]">
            <select
              onChange={(e) => {
                const selectedPage = e.target.value;
                if (selectedPage) {
                  navigate(selectedPage);
                }
              }}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="" disabled selected>
                Select the User to Add
              </option>
              <option value="AddEditUser">Admin</option>
              <option value="AddEditHR">HR</option>
              <option value="AddEditDispenser">Dispenser</option>
            </select>
          </div>
        
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
                <th className="py-[1%] w-[10%] text-[.8rem] text-gray-700 text-left pl-4">
                  User NO.
                </th>
                <th className="py-[1%] w-[20%] text-[.8rem] text-gray-700 text-left pl-4">
                  Name
                </th>
                <th className="py-[1%] w-[20%] text-[.8rem] text-gray-700 text-left pl-4">
                  Email
                </th>
                <th className="py-[1%] w-[20%] text-[.8rem] text-gray-700 text-left pl-4">
                  Phone
                </th>
                <th className="py-[1%] w-[10%] text-[.8rem] text-gray-700 text-left">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((patient) => (
                <tr
                  key={patient?.patient_id}
                  className="bg-white text-gray-600 text-sm font-light border-t-[1px] border-gray-200"
                >
                  <td className="w-[10%] text-left">
                    <p className="font-[600] text-gray-600 text-[14px] text-left px-5">
                      {patient?.id}
                    </p>
                  </td>
                  <td className="w-[20%] text-left">
                    <p className="font-[600] text-gray-600 text-[14px] text-left">
                      {patient?.name}
                    </p>
                  </td>
                  <td className="py-[1%] w-[20%] text-left pl-4">
                    <p className="font-[600] text-gray-600 text-[14px]">
                      {patient?.email}
                    </p>
                  </td>
                  <td className="w-[10%] text-left">
                    <p className="font-[600] text-gray-600 text-[14px]">
                      {patient?.phone}
                    </p>
                  </td>
                  <td className="w-[10%] text-left">
                    <p className="font-[600] text-gray-600 text-[14px]">
                      {patient?.address}
                    </p>
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
    </div>
  );
};

export default RegisterUsers;


