import React from "react";
import ReqButton from "../reqbutton/ReqButton";

function StatusBadge({ status }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium
        ${
          status === "Approved"
            ? "bg-green-100 text-green-700"
            : status === "Rejected"
            ? "bg-red-100 text-red-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
    >
      {status}
    </span>
  );
}

function RequestTable({ items }) {
  return (
    <div className="w-full">
      {/* ===== DESKTOP / TABLET: Table view ===== */}
      <div className="hidden sm:block overflow-x-auto w-full">
        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 font-semibold">Name</th>
              <th className="px-3 py-2 font-semibold">Species Name</th>
              <th className="px-3 py-2 font-semibold hidden lg:table-cell">
                Status
              </th>
              <th className="px-3 py-2 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-3 py-2 font-medium whitespace-nowrap">
                  {item.name}
                </td>
                <td className="px-3 py-2 font-medium whitespace-nowrap">
                  {item.species}
                </td>
                <td className="px-3 py-2 hidden lg:table-cell whitespace-nowrap">
                  <StatusBadge status={item.status} />
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

      {/* ===== MOBILE: Card view ===== */}
      <div className="flex sm:hidden flex-col gap-3">
        {items.length === 0 && (
          <div className="text-center py-6 text-gray-500 bg-white rounded-lg border border-gray-200">
            No requests found.
          </div>
        )}

        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-medium text-gray-800 truncate">
                  {item.name}
                </span>
                <span className="text-sm text-gray-500 truncate">
                  {item.species}
                </span>
              </div>
              <StatusBadge status={item.status} />
            </div>

            <div className="flex justify-center pt-2 border-t border-gray-100">
              <ReqButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestTable;