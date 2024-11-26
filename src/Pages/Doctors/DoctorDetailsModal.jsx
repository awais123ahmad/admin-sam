import React from "react";

const DoctorDetailsModal = ({ isOpen, onClose, doctorDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-[800px]">
        <h2 className="text-2xl font-bold mb-4">Doctor Info</h2>
        <table className="w-full text-left border border-gray-200">
          <thead>
            <tr className="uppercase text-sm leading-normal">
              <th className="py-2 border-b-[2px] border-b-black w-[40%] text-left text-[13px] px-5">
                Fields
              </th>
              <th className="py-2 border-b-[2px] border-b-black w-[60%] text-left text-[13px]">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            {doctorDetails ? (
              <>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold w-[50 %] px-5">
                    Name
                  </td>
                  <td className="py-2 border-t-[1px] text-[12px] w-[50%]">
                    {doctorDetails.name}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold w-[50%] px-5">
                    Specialization
                  </td>
                  <td className="py-2 border-t-[1px] text-[12px] w-[50%]">
                    {doctorDetails.specialization}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold w-[50%] px-5">
                    Contact
                  </td>
                  <td className="py-2 border-t-[1px] text-[12px] w-[50%]">
                    {doctorDetails.phone_no}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold w-[50%] px-5">
                    CNIC
                  </td>
                  <td className="py-2 border-t-[1px] text-[12px] w-[50%]">
                    {doctorDetails.cnic}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold w-[50%] px-5">
                    Pay
                  </td>
                  <td className="py-2 border-t-[1px] text-[12px] w-[50%]">
                    {doctorDetails.pay}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold w-[50%] px-5">
                    Qualification
                  </td>
                  <td className="py-2 border-t-[1px] text-[12px] w-[50%]">
                    {doctorDetails.qualification}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold w-[50%] px-5">
                    Experience
                  </td>
                  <td className="py-2 border-t-[1px] text-[12px] w-[50%]">
                    {doctorDetails.experience}
                  </td>
                </tr>
              </>
            ) : (
              <tr className="text-sm w-full">
                <td
                  className="py-2 border-t-[1px] font-bold w-full ml-4"
                  colSpan="2"
                >
                  No details available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DoctorDetailsModal;
