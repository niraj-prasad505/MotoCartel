import ProfileSidebar from "../components/Profile/ProfileSidebar";
import PersonalInfo from "../components/Profile/PersonalInfo";
import Security from "../components/Profile/Security";
import ContactInfo from "../components/Profile/ContactInfo";
import DeliveryAddress from "../components/Profile/DeliveryAddress";
import Interests from "../components/Profile/Interests";
import AdditionalInfo from "../components/Profile/AdditionalInfo";

const Profile = () => {
  return (
    <div className="min-h-screen text-white px-2 sm:px-6 lg:px-8 py-2 bg-[#020617]">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-11 pt-2">
        
        {/* Sidebar */}
        <div className="w-full lg:w-67 shrink-0">
          <ProfileSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Personal Data
          </h1>

          <p className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
            Manage your personal information and delivery details.
          </p>
          {/* Content Sections */}
          <div className="space-y-4">
            <PersonalInfo  />
            <Security />
            <ContactInfo />
            <DeliveryAddress />
            <Interests />
            <AdditionalInfo />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;