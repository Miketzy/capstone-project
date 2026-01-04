import React from "react";
import ActionsButton from "../action-button/ActionsButton";

function Tables({ items, currentPage, itemsPerPage }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 text-center font-semibold">No.</th>
            <th className="px-3 py-2 font-semibold">Name</th>

            <th className="px-3 py-2 hidden sm:table-cell text-center font-semibold">
              Classification
            </th>
            <th className="px-3 py-2 hidden md:table-cell font-semibold">
              Category
            </th>
            <th className="px-3 py-2 hidden lg:table-cell font-semibold">
              Status
            </th>

            <th className="px-3 py-2 text-center font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="px-3 py-2 text-center">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="px-3 py-2 font-medium whitespace-nowrap">
                {item.name}
              </td>

              <td className="px-3 py-2 hidden sm:table-cell whitespace-nowrap">
                {item.classification}
              </td>
              <td className="px-3 py-2 hidden md:table-cell whitespace-nowrap">
                {item.category}
              </td>
              <td className="px-3 py-2 hidden lg:table-cell whitespace-nowrap">
                {item.status}
              </td>

              <td className="px-3 py-2 ">
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
