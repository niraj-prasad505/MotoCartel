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

const ProfileSidebar = () => {
  const menu = [
    { icon: User, title: "Profile", active: true },
    { icon: Clock3, title: "Orders" },
    { icon: Star, title: "Reviews" },
    { icon: Gift, title: "Offers" },
    { icon: Wallet, title: "Wallet" },
    { icon: HelpCircle, title: "Help" },
    { icon: LogOut, title: "Logout" },
  ];

  return (
    <aside className="w-full lg:w-72">
      <div className=" p-3 lg:p-6">
        
        {/* Mobile & Tablet */}
        <div className="grid grid-cols-4 gap-2 lg:hidden">
          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-all duration-200
                ${
                  item.active
                    ? "bg-orange-500 text-white"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                <Icon size={18} />

                <span className="text-[11px] text-center leading-tight">
                  {item.title}
                </span>
              </button>
            );
          })}

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
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200
                ${
                  item.active
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