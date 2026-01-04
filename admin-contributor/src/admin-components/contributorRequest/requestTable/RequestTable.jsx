import React from "react";
import ReqButton from "../reqbutton/ReqButton";

function RequestTable({ items }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Name</th>
            <th className="px-4 py-2 text-left font-semibold">Species Name</th>
            <th className="px-4 py-2 text-center font-semibold">Status</th>
            <th className="px-4 py-2 text-center font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50 transition">
              <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.species}</td>
              <td className="px-4 py-2 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium
                    ${
                      item.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <div className="flex justify-center">
                  <ReqButton />
                </div>
              </td>
            </tr>
          ))}

          {items.length === 0 && (
            <tr>
              <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                No requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RequestTable;
