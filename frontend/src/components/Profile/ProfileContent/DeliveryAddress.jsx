import React from 'react'
import AccordionSection from "../AccordionSection";
import Select from "react-select";
import { useEffect, useState } from "react";
import { getUserAddress } from "../../../services/user.service";
export default function DeliveryAddress() {

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
  const [address, setAddress] = useState({
    city: "",
    landmark: "",
    pincode: "",
    state: "",

  });
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await getUserAddress();
        if (!response) {
          console.error("No address found");
          return;
        }
        setAddress(response.data);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };
    fetchAddress();
  }, []);
  const [addressInfo, setAddressInfo] = useState({});

  useEffect(() => {
    const fetchPincode = async () => {
      try {
        const res = await fetch(
          "https://api.postalpincode.in/pincode/713169"
        );
        const data = await res.json();

        if (
          data[0].Status === "Success" &&
          data[0].PostOffice?.length > 0
        ) {
          setAddressInfo(data[0].PostOffice[0]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchPincode();
  }, []);
  console.log(addressInfo);
  return (
    <AccordionSection title="Delivery Info ">


      <div className="gap-8 items-start p-6 px-9 rounded-2xl">

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="w-full">
            <h1 className="p-2 text-gray-400">Pin Code</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              value={address?.pincode || ""}
              onChange={(e) =>
                setAddress({
                  ...address,
                  pincode: e.target.value,
                })
              }
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">City/District/Town</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              value={address?.city || ""}
              onChange={(e) =>
                setAddress({
                  ...address,
                  city: e.target.value,
                })
              }
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Landmark</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              value={address?.landmark || ""}
              onChange={(e) =>
                setAddress({
                  ...address,
                  landmark: e.target.value,
                })
              }
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Pin Code</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              value={address?.pincode || ""}
              onChange={(e) =>
                setAddress({
                  ...address,
                  pincode: e.target.value,
                })
              }
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">State</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              value={address?.State || ""}
              onChange={(e) =>
                setAddress({
                  ...address,
                  pincode: e.target.value,
                })
              }
            />
          </div>

          



        </div>
      </div>
      {/* Save Changes Button */}
      <div className="flex justify-end">
        <button className="bg-orange-500 px-6 py-3 rounded-xl font-semibold">
          Changes Address
        </button>
      </div>
    </AccordionSection>
  )
}
