import PersonalInfo from "./PersonalInfo";
import DeliveryAddress from "./DeliveryAddress";
import Security from "./Security";
import ContactInfo from "./ContactInfo";
import Interests from "./Interests";
import AdditionalInfo from "./AdditionalInfo";
import React, { useEffect, useState } from "react";
import { getUserAddress } from "../../../services/user.service";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const ProfileContent = () => {
  const [address, setAddress] = useState(null);
  
    useEffect(() => {
      const fetchAddress = async () => {
        try {
          const response = await getUserAddress();
  
          if (response?.data) {
            setAddress(response.data);
          }
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      };
  
      fetchAddress();
    }, []);
    // console.log("address:", address);
    const { user } = useContext(UserContext);


  return (
    <div className="space-y-4">
      <PersonalInfo />
      <DeliveryAddress address={address}/>
      <ContactInfo userPhone={user?.contact} useremail={user?.email} />
      <Security />
      {/* <Interests /> */}
      <AdditionalInfo />
    </div>
  );
};

export default ProfileContent;