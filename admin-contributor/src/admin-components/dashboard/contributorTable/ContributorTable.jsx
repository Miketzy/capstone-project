import React from "react";

const contributors = [
  { id: 1, name: "Juan Dela Cruz", role: "Developer", status: "Active" },
  { id: 2, name: "Maria Santos", role: "Designer", status: "Inactive" },
  { id: 3, name: "Pedro Reyes", role: "QA Tester", status: "Active" },
  { id: 4, name: "Ana Lopez", role: "Content Writer", status: "Inactive" },
];

function ContributorTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {contributors.map((contributor) => (
            <tr key={contributor.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{contributor.name}</td>
              <td className="px-4 py-2">{contributor.role}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium ${
                    contributor.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {contributor.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContributorTable;
