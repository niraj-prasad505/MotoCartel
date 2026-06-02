import AccordionSection from "./AccordionSection";
import userlogo from "../../assets/userlogo.png";
import { useState } from "react";
import Select from "react-select";

const PersonalInfo = () => {
  const [gender, setGender] = useState("");
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  return (
    <AccordionSection title="Personal Info ">

      <div className="gap-8 items-start p-6 rounded-2xl">

        <div className="w-35 h-35 rounded-full overflow-hidden mb-6">
          <img src={userlogo} alt="Profile" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="w-full">
            <h1 className="p-2 text-gray-400">First Name</h1>
            <input
              className="bg-slate-800 p-3 rounded-full outline-none w-full"
              placeholder="First Name"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Last Name</h1>
            <input
              className="bg-slate-800 p-3 rounded-full outline-none w-full"
              placeholder="Last Name"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Email</h1>
            <input
              className="bg-slate-800 p-3 rounded-full outline-none w-full"
              placeholder="Email"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Date of Birth</h1>
            <input
              className="bg-slate-800 p-3 rounded-full outline-none w-full"
              placeholder="Date of Birth"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Gender</h1>
            <Select
              options={options}
              placeholder="Select Gender"
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

      <div className="flex justify-end">
        <button className="bg-orange-500 px-6 py-3 rounded-xl font-semibold">
          Save Changes
        </button>
      </div>
    </AccordionSection>
  );
};

export default PersonalInfo;