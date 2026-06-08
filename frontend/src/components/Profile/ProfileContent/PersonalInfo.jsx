import AccordionSection from "../AccordionSection";
import userlogo from "../../../assets/userlogo.png";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const PersonalInfo = () => {
  const [gender, setGender] = useState("");
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const { user } = useContext(UserContext);
  // console.log(user);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
  });

  useEffect(() => {
    if (user) {
      const names = user.fullname.trim().split(" ");
      // console.log(names[2]);
      setFormData({
        firstName: names[0] || "",
        lastName: names.slice(1).join(" ") || "",
        email: user.email || "",
        gender: user.gender || "",
        dob: user.dob || "",
      });
    }
  }, [user]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(
      JSON.stringify(formData) !== JSON.stringify(user)
    );
    // console.log(formData);
  }, [formData, user]);

  return (
    <AccordionSection title="Personal Info ">

      <div className="gap-8 items-start p-6 rounded-2xl">

        <div className="w-35 h-35 rounded-full overflow-hidden mb-6">
          <img src={userlogo} alt="Profile" className="w-full h-full object-cover" />
        </div>
        {/* Input Fields */}
        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="w-full">
            <h1 className="p-2 text-gray-400">First Name</h1>
            <input
              className="bg-slate-800 p-3 rounded-full outline-none w-full"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Last Name</h1>
            <input
              className="bg-slate-800 p-3 rounded-full outline-none w-full"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Email</h1>
            <input
              className="bg-slate-800 p-3 rounded-full outline-none w-full"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Date of Birth</h1>
            <input
              className="bg-slate-800 p-3 rounded-full outline-none w-full"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={(e) => {
                setFormData({ ...formData, dob: e.target.value });
              }}
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Gender</h1>
            <Select
              options={options}
              placeholder="Select Gender"
              value={options.find((option) => option.value === formData.gender)}
              onChange={(selectedOption) =>
                setFormData({ ...formData, gender: selectedOption ? selectedOption.value : "" })
              }
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
        <button
          className="bg-orange-500 px-6 py-3 rounded-xl font-semibold"
          disabled={!isChanged}
        >
          Save Changes
        </button>
      </div>
    </AccordionSection>
  );
};

export default PersonalInfo;