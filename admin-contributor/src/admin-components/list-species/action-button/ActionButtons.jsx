import React from "react";
import { Eye, Edit, Trash } from "lucide-react";

function ActionButtons({ onView, onEdit, onDelete }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onView}
        className="p-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
      >
        <Eye className="w-4 h-4" />
      </button>
      <button
        onClick={onEdit}
        className="p-1 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200"
      >
        <Edit className="w-4 h-4" />
      </button>
      <button
        onClick={onDelete}
        className="p-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
      >
        <Trash className="w-4 h-4" />
      </button>
    </div>
  );
}

export default ActionButtons;
