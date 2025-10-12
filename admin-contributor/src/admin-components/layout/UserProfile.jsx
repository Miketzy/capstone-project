import React from "react";

function UserProfile() {
  return (
    <>
      <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-[#379564] to-[#22573b]">
        <img
          src=""
          alt="user"
          className="w-10 h-10 rounded-full ring-2 ring-blue-500"
        />
        <div className="flex-1 min-2-0 hidden lg:inline">
          <div className="flex-1 min-2-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
              Michael John G. Margate
            </p>
            <p className="text-xs text-slate-200 truncate">Administrator</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
