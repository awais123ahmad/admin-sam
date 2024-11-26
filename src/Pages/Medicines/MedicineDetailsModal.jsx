import React from "react";

const MedicineDetailsModal = ({ open, onClose, medicine }) => {
  if (!open) return null;

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Handle null or undefined
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-[800px]">
        <h2 className="text-2xl font-bold mb-4">Medicine Details</h2>
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
            {medicine ? (
              <>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold px-5">Name</td>
                  <td className="py-2 border-t-[1px] text-[13px]">
                    {medicine.medicine_name}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold px-5">
                    Quantity in Stock
                  </td>
                  <td className="py-2 border-t-[1px] text-[13px]">
                    {medicine.quantity_in_stock}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold px-5">Price per Unit</td>
                  <td className="py-2 border-t-[1px] text-[13px]">
                    {medicine.price_per_unit}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold px-5">Total Value</td>
                  <td className="py-2 border-t-[1px] text-[13px]">
                    {medicine.quantity_in_stock * medicine.price_per_unit}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold px-5">Expiry Date</td>
                  <td className="py-2 border-t-[1px] text-[13px]">
                    {formatDate(medicine.expiry_date)}
                  </td>
                </tr>
                <tr className="text-sm w-full">
                  <td className="py-2 border-t-[1px] font-bold px-5">Supplier</td>
                  <td className="py-2 border-t-[1px] text-[13px]">
                    {medicine.supplier}
                  </td>
                </tr>
              </>
            ) : (
              <tr className="text-sm w-full">
                <td
                  className="py-2 border-t-[1px] font-bold w-full"
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

export default MedicineDetailsModal;
