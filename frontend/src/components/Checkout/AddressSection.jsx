import { useState } from "react";

const AddressSection = ({ address, setAddress, next }) => {
  const [form, setForm] = useState({ name: "", city: "" });

  const handleSave = () => {
    setAddress(form);
    next();
  };

  return (
    <div className="p-4 border rounded">
      {address ? (
        <div>
          <p>{address.name}</p>
          <p>{address.city}</p>

          <button onClick={() => setAddress(null)}>
            Change
          </button>
        </div>
      ) : (
        <div>
          <input
            placeholder="Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <input
            placeholder="City"
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
          />

          <button onClick={handleSave}>
            Save & Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressSection;