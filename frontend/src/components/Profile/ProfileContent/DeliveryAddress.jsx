import React from 'react'
import AccordionSection from "../AccordionSection";
import Select from "react-select";
import { useEffect, useState } from "react";
import {getUserAddress} from "../../../services/user.service";
export default function DeliveryAddress() {
  const [address, setAddress] = useState(null);
const options = [
  { value: "andhra-pradesh", label: "Andhra Pradesh" },
  { value: "arunachal-pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "bihar", label: "Bihar" },
  { value: "chhattisgarh", label: "Chhattisgarh" },
  { value: "goa", label: "Goa" },
  { value: "gujarat", label: "Gujarat" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal-pradesh", label: "Himachal Pradesh" },
  { value: "jharkhand", label: "Jharkhand" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "madhya-pradesh", label: "Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "odisha", label: "Odisha" },
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil-nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "tripura", label: "Tripura" },
  { value: "uttar-pradesh", label: "Uttar Pradesh" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "west-bengal", label: "West Bengal" },
];
  useEffect(() => {
      const fetchAddress = async () => {
        try {
          const response = await getUserAddress();
          if (!response){
            console.error("Error fetching address:", error);
          }
          setAddress(response.data);
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      };
      fetchAddress();
    }, []);
    console.log(address);
  return (
    <AccordionSection title="Delivery Info ">
      

      <div className="gap-8 items-start p-6 px-9 rounded-2xl">

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="w-full">
            <h1 className="p-2 text-gray-400">City/District/Town</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              placeholder="City"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Landmark</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              placeholder="Landmark"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Pin Code</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              placeholder="Pin Code"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">State</h1>
            <Select
              options={options}
              placeholder="Select State"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1e293b",
                  borderRadius: "9999px",
                  border: "none",
                  minHeight: "50px",
                  boxShadow: "none",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#1e293b",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "white",
                }),
                input: (base) => ({
                  ...base,
                  color: "white",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#94a3b8",
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused
                    ? "#334155"
                    : "#1e293b",
                  color: "white",
                }),
              }}
            />
          </div>

          

        </div>
      </div>
      {/* Save Changes Button */}
      <div className="flex justify-end">
        <button className="bg-orange-500 px-6 py-3 rounded-xl font-semibold">
          Save Changes
        </button>
      </div>
    </AccordionSection>
  )
}
