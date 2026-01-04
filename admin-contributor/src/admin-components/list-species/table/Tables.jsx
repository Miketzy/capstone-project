import React from "react";
import ActionsButton from "../action-button/ActionsButton";

function Tables({ items, currentPage, itemsPerPage }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">No.</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Classification</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className="border-t hover:bg-gray-50 md:table-row flex flex-col md:flex-row mb-2 md:mb-0"
            >
              <td className="px-4 py-2">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.classification}</td>
              <td className="px-4 py-2">{item.category}</td>
              <td className="px-4 py-2">{item.status}</td>
              <td className="px-4 py-2">
                <ActionButtons
                  onView={() => alert(`View ${item.name}`)}
                  onEdit={() => alert(`Edit ${item.name}`)}
                  onDelete={() => alert(`Delete ${item.name}`)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
