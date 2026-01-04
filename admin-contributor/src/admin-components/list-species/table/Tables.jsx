import React from "react";
import ActionsButton from "../action-button/ActionsButton";

function Tables({ items, currentPage, itemsPerPage }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 rounded-lg text-sm text-left">
        {/* TABLE HEADER */}
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-center font-semibold">No.</th>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Classification</th>
            <th className="px-4 py-3 font-semibold">Category</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 text-center font-semibold">Action</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className="border-t hover:bg-green-50 transition">
              <td className="px-4 py-3 text-center">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>

              <td className="px-4 py-3 font-medium whitespace-nowrap">
                {item.name}
              </td>

              <td className="px-4 py-3 whitespace-nowrap">
                {item.classification}
              </td>

              <td className="px-4 py-3 whitespace-nowrap">{item.category}</td>

              <td className="px-4 py-3 whitespace-nowrap">{item.status}</td>

              <td className="px-4 py-3">
                <div className="flex justify-center">
                  <ActionsButton
                    onView={() => alert(`View ${item.name}`)}
                    onEdit={() => alert(`Edit ${item.name}`)}
                    onDelete={() => alert(`Delete ${item.name}`)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
