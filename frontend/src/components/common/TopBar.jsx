
// // 1
// import React, { useState } from "react";
// import { Search, User, LogOut, Menu, X } from "../../lib/icons";
// import { useAuth } from "../../context/AuthContext";
// //import logo from "../assets/logo.png";//mukul removed this line

// export function TopBar({ onToggleSidebar }) {
//   const { user, logout } = useAuth();
//   const [showSearch, setShowSearch] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   return (
//     <header className="bg-white/70 backdrop-blur-md border-gray-200 fixed top-0 left-0 right-0 md:left-64 h-10 transition-all">
//   {/* ======= MOBILE HEADER ======= */}
//   <div className="sm:hidden flex items-center justify-between px-4 pt-2 pb-1 border-b border-gray-100">
//     <button
//       onClick={onToggleSidebar}
//       className="flex items-center gap-2 px-3 py-2 rounded-lg bg-hospital-purple/10 text-hospital-purple hover:bg-hospital-purple/20 transition"
//     >
//       <Menu className="w-5 h-5" />
//       <span className="text-sm font-medium">Menu</span>
//     </button>

//     <div className="flex items-center gap-3">
//       <button
//         className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
//         onClick={() => setShowSearch((p) => !p)}
//       >
//         {showSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
//       </button>

//       {/* Profile always visible (mobile/tablet/desktop) */}
//       <button
//         className="p-2 bg-hospital-purple/10 rounded-lg text-hospital-purple hover:bg-hospital-purple/20 transition"
//         onClick={() => setShowProfile((p) => !p)}
//       >
//         <User className="w-5 h-5" />
//       </button>
//     </div>
//   </div>

//   {/* ======= DESKTOP TOPBAR ======= */}
//   <div className="h-14 px-4 md:px-6 flex items-center justify-between">
//     {/* LEFT: Search Bar */}
//     <div className="flex items-center gap-3">
//       <div className="hidden sm:block w-64 md:w-96">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search patients, staff, appointments..."
//             className="w-full pl-10 pr-4 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hospital-purple focus:border-transparent"
//           />
//         </div>
//       </div>
//     </div>

//     {/* RIGHT: Profile Icon */}
//     <div className="flex items-center gap-3 sm:gap-4 relative">
//       <button
//         className="hidden sm:block p-2 bg-hospital-purple/10 rounded-lg text-hospital-purple hover:bg-hospital-purple/20 transition"
//         onClick={() => setShowProfile((p) => !p)}
//       >
//         <User className="w-5 h-5" />
//       </button>

//       {/* ===== Profile Dropdown (For all devices) ===== */}
//       {showProfile && (
//         <div
//           className="absolute right-0 top-10 w-56 bg-white border border-gray-200 rounded-xl shadow-lg p-3 flex flex-col z-40"
//           onMouseLeave={() => setShowProfile(false)}
//         >
//           <div className="px-3 py-2 border-b border-gray-200">
//             <p className="text-sm font-medium text-gray-900">{user?.email}</p>
//             <p className="text-xs text-gray-600">{user?.role}</p>
//           </div>

//           <button
//             onClick={logout}
//             className="flex items-center gap-2 px-3 py-2 mt-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition"
//           >
//             <LogOut className="w-4 h-4 text-gray-600" />
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   </div>

//   {/* MOBILE SEARCH BAR */}
//   {showSearch && (
//     <div className="sm:hidden bg-white border-t border-gray-200 px-4">
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search patients, staff, appointments..."
//           className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hospital-purple focus:border-transparent"
//         />
//       </div>
//     </div>
//   )}
//     </header>

//   );
// }



// 2
import React, { useState } from "react";
import { Search, User, LogOut, Menu, X } from "../../lib/icons";
import { useAuth } from "../../context/AuthContext";
//import logo from "../assets/logo.png";//mukul removed this line

export function TopBar({ onToggleSidebar }) {
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="bg-white/70 backdrop-blur-md border-gray-200 fixed top-0 left-0 right-0 md:left-64 h-10 transition-all">
  {/* ======= MOBILE HEADER ======= */}
  <div className="sm:hidden flex items-center justify-between px-4 pt-2 pb-1 border-b border-gray-100">
    <button
      onClick={onToggleSidebar}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-hospital-purple/10 text-hospital-purple hover:bg-hospital-purple/20 transition"
    >
      <Menu className="w-5 h-5" />
      <span className="text-sm font-medium">Menu</span>
    </button>

    <div className="flex items-center gap-3">
      <button
        className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
        onClick={() => setShowSearch((p) => !p)}
      >
        {showSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
      </button>

      {/* Profile always visible (mobile/tablet/desktop) */}
      <button
        className="p-2 bg-hospital-purple/10 rounded-lg text-hospital-purple hover:bg-hospital-purple/20 transition"
        onClick={() => setShowProfile((p) => !p)}
      >
        <User className="w-5 h-5" />
      </button>
    </div>
  </div>

  {/* ======= DESKTOP TOPBAR ======= */}
  <div className="h-14 px-4 md:px-6 flex items-center justify-between">
    {/* LEFT: Search Bar */}
    <div className="flex items-center gap-3">
      <div className="hidden sm:block w-64 md:w-96">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients, staff, appointments..."
            className="w-full pl-10 pr-4 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hospital-purple focus:border-transparent"
          />
        </div>
      </div>
    </div>

    {/* RIGHT: Profile Icon */}
    <div className="flex items-center gap-3 sm:gap-4 relative">
      <button
        className="hidden sm:block p-2 bg-hospital-purple/10 rounded-lg text-hospital-purple hover:bg-hospital-purple/20 transition"
        onClick={() => setShowProfile((p) => !p)}
      >
        <User className="w-5 h-5" />
      </button>

      {/* ===== Profile Dropdown (For all devices) ===== */}
      {showProfile && (
        <div
          className="absolute right-0 top-10 w-56 bg-white border border-gray-200 rounded-xl shadow-lg p-3 flex flex-col z-40"
          onMouseLeave={() => setShowProfile(false)}
        >
          <div className="px-3 py-2 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-900">{user?.email}</p>
            <p className="text-xs text-gray-600">{user?.role}</p>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-2 mt-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <LogOut className="w-4 h-4 text-gray-600" />
            Logout
          </button>
        </div>
      )}
    </div>
  </div>

  {/* MOBILE SEARCH BAR */}
  {showSearch && (
    <div className="sm:hidden bg-white border-t border-gray-200 px-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search patients, staff, appointments..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hospital-purple focus:border-transparent"
        />
      </div>
    </div>
  )}
    </header>

  );
}