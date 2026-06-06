import ProfileSidebar from "../components/Profile/ProfileSidebar";
import Profilecontent from "../components/Profile/ProfileContent";
import Help from "../components/Profile/HelpContent";
import Orders from "../components/Profile/OrdersContent";
import Reviews from "../components/Profile/ReviewsContent";
import Offers from "../components/Profile/OffersContent";
import Wallet from "../components/Profile/WalletContent";
import { useState } from "react";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  return (
    <div className="min-h-screen text-white px-2 sm:px-6 lg:px-8 py-2 bg-[#020617]">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-11 pt-2">

        {/* Sidebar */}
        <div className="w-full lg:w-67 shrink-0">
          <ProfileSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            {activeSection === "profile" && "My Profile"}
            {activeSection === "orders" && "My Orders"}
            {activeSection === "reviews" && "My Reviews"}
            {activeSection === "offers" && "My Offers"}
            {activeSection === "wallet" && "My Wallet"}
            {activeSection === "help" && "Help & Support"}
          </h1>

          <p className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">

            {activeSection === "profile" && "Manage your personal information and delivery details."}
            {activeSection === "orders" && "View your past orders and track current ones."}
            {activeSection === "reviews" && "See your reviews and ratings for restaurants."}
            {activeSection === "offers" && "Check out your available discounts and promotions."}
            {activeSection === "wallet" && "Manage your payment methods and view transaction history."}
            {activeSection === "help" && "Find answers to common questions and contact support."}
          </p>
          {/* Content Sections */}
          <div className="space-y-4">
            {activeSection === "profile" && <Profilecontent />}
            {activeSection === "orders" && <Orders activeSection={activeSection} />}
            {activeSection === "reviews" && <Reviews activeSection={activeSection} />}
            {activeSection === "offers" && <Offers activeSection={activeSection} />}
            {activeSection === "wallet" && <Wallet activeSection={activeSection} />}
            {activeSection === "help" && <Help activeSection={activeSection} />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;