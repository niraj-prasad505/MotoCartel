import {
  User,
  Clock3,
  Star,
  Gift,
  Wallet,
  HelpCircle,
  LogOut,
  Trash2,
} from "lucide-react";

// import { useState, useContext } from "react";
// import userContext from "../../context/UserContext";
// import authService from "../../services/auth.service";

const ProfileSidebar = ({ activeSection, setActiveSection }) => {
  const menu = [
    { icon: User, title: "Profile", key: "profile" },
    { icon: Clock3, title: "Orders", key: "orders" },
    { icon: Star, title: "Reviews", key: "reviews" },
    { icon: Gift, title: "Offers", key: "offers" },
    { icon: Wallet, title: "Wallet", key: "wallet" },
    { icon: HelpCircle, title: "Help", key: "help" },
    { icon: LogOut, title: "Logout", key: "logout" },
  ];

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    try {}
    catch (error) {
      console.error("Error clearing user data:", error);
    }
    // Optionally, you can also clear any authentication tokens or other related data here
  };

  return (
    <aside className="w-full lg:w-72 lg:sticky lg:top-20 h-fit">
      <div className=" p-3 lg:p-6">

        {/* Mobile & Tablet */}
        <div className="grid grid-cols-4 gap-2 lg:hidden">
          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => {
                  setActiveSection(item.key);
                  if (item.key === "logout") {
                    console.log("Logging out...");
                    handleLogout();
                    return;
                  }

                  console.log(item.key);
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200${activeSection === item.key
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
                  }`}
              >
                <Icon size={18} />

                <span className="text-[11px] text-center leading-tight">
                  {item.title}
                </span>
              </button>
            );
          })}
          {/* Delete Account Button */}
          <button className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all duration-200">
            <Trash2 size={18} />

            <span className="text-[11px] text-center leading-tight">
              Delete
            </span>
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex flex-col gap-2">
          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => setActiveSection(item.key)}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200
                ${activeSection === item.key
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-slate-800 hover:text-white"
                  }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>
              </button>
            );
          })}

          <div className="h-px bg-slate-800 my-3" />

          <button className="flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all duration-200">
            <Trash2 size={20} />

            <span className="font-medium">
              Delete Account
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;