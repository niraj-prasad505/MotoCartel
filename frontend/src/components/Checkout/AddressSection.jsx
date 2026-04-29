import { useState } from "react";

const AddressSection = ({ address, setAddress, next }) => {
    const [form, setForm] = useState({ name: "", city: "" });

    const handleSave = () => {
        setAddress(form);
        next();
    };

    return (
        <div className="p-4 border border-gray-400 rounded-2xl">
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

                    <div className="flex justify-between items-center p-5 -mt-2 bo">
                        <div className="w-[25%]">
                            <h1 className="ml-4">Name*</h1>
                            <input
                                className=" border-3 p-2 rounded-lg border-gray-700 w-full "
                                placeholder="Full Name"
                            // onChange={(e) =>
                            //     setForm({ ...form, name: e.target.value })
                            // }
                            />
                        </div>
                        <div className="w-[25%]">
                            <h1 className="ml-4 ">Pin Code *</h1>
                            <input
                                className=" border-3 p-2 rounded-lg border-gray-700 w-full "
                                placeholder="Pin Code"
                            // onChange={(e) =>
                            //     setForm({ ...form, name: e.target.value })
                            // }
                            />
                        </div>
                        <div className="w-[25%]">
                            <h1 className="ml-4">city / village *</h1>
                            <input
                                className=" border-3 p-2 rounded-lg border-gray-700 w-full "
                                placeholder="city / village"
                            // onChange={(e) =>
                            //     setForm({ ...form, name: e.target.value })
                            // }
                            />
                        </div>

                    </div>

                    <div className="flex justify-between items-center p-5 -mt-2">
                        <div className="w-[75%]">
                            <h1 className="ml-4">Full address *</h1>

                            <textarea
                                className="border-2 p-3 rounded-lg no-scrollbar  border-gray-600 w-full h-28 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your full address..."
                            />
                        </div>
                        <div className="w-[23%]">
                            <h1 className="ml-4">Land Mark *</h1>
                            <input
                                className=" border-3 p-2 rounded-lg border-gray-700 w-full "
                                placeholder="Land Mark"
                            // onChange={(e) =>
                            //     setForm({ ...form, name: e.target.value })
                            // }
                            />
                        </div>

                    </div>

                    <div className="flex justify-between items-center p-5 -mt-2">
                        <div className="w-[25%]">
                            <h1 className="ml-4">Phone number *</h1>
                            <input
                                className=" border-3 p-2 rounded-lg border-gray-700 w-full "
                                placeholder="+91"
                            // onChange={(e) =>
                            //     setForm({ ...form, name: e.target.value })
                            // }
                            />
                        </div>
                        <div className="w-[25%]">
                            <h1 className="ml-4 text-gray-400">Alternative phone number</h1>
                            <input
                                className=" border-3 p-2 rounded-lg border-gray-700 w-full "
                                placeholder="+91"
                            // onChange={(e) =>
                            //     setForm({ ...form, name: e.target.value })
                            // }
                            />
                        </div>
                        <div className="w-[40%]">
                            <h1 className="ml-4">e-mail *</h1>
                            <input
                                className=" border-3 p-2 rounded-lg border-gray-700 w-full "
                                placeholder="abc123@gmail.com"
                            // onChange={(e) =>
                            //     setForm({ ...form, name: e.target.value })
                            // }
                            />
                        </div>

                    </div>



                    <button onClick={handleSave}>
                        Save & Continue
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddressSection;