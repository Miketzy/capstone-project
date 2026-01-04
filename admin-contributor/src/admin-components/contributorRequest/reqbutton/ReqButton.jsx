import React from "react";
import { Check, X } from "lucide-react";

function ReqButton({ onApprove, onReject }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onApprove}
        className="p-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
        title="Approve"
      >
        <Check className="w-4 h-4" />
      </button>

      <button
        onClick={onReject}
        className="p-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
        title="Reject"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default ReqButton;
