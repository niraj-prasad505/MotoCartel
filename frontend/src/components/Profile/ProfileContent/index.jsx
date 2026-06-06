import PersonalInfo from "./PersonalInfo";
import DeliveryAddress from "./DeliveryAddress";
import Security from "./Security";
import ContactInfo from "./ContactInfo";
import Interests from "./Interests";
import AdditionalInfo from "./AdditionalInfo";

const ProfileContent = () => {
  return (
    <div className="space-y-4">
      <PersonalInfo />
      <DeliveryAddress />
      <Security />
      <ContactInfo />
      <Interests />
      <AdditionalInfo />
    </div>
  );
};

export default ProfileContent;