import React, { useState } from "react";
import { Bell, Moon, Settings, Sun, UserCircle } from "lucide-react";

function HeaderRightSection({
  notificationCount = 3,
  userName = "Michael",
  onSettingsClick,
  onProfileClick,
}) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      {/* Theme toggle */}
      <button
        type="button"
        onClick={() => setIsDark((prev) => !prev)}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
      >
        {isDark ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>

      {/* Notification */}
      <button
        type="button"
        aria-label={`Notifications (${notificationCount} unread)`}
        className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
      >
        <Bell className="w-5 h-5" />
        {notificationCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {notificationCount > 9 ? "9+" : notificationCount}
          </span>
        )}
      </button>

      {/* Settings */}
      <button
        type="button"
        onClick={onSettingsClick}
        aria-label="Settings"
        className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* User profile */}
      <button
        type="button"
        onClick={onProfileClick}
        aria-label={`${userName}'s profile`}
        className="flex items-center gap-2 pl-3 border-l border-slate-200 hover:opacity-80 transition-opacity"
      >
        <UserCircle className="w-8 h-8 rounded-full ring-2 ring-emerald-500 text-slate-600" />
      </button>
    </div>
  );
}

export default HeaderRightSection;