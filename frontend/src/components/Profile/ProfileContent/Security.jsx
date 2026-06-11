import React from 'react'
import AccordionSection from "../AccordionSection";

export default function Security() {
  return (
    <AccordionSection title="Security Info ">
      

      <div className="gap-8 items-start p-6 px-9 rounded-2xl">

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="w-full">
            <h1 className="p-2 text-gray-400">Mobile Number</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              placeholder="Mobile Number"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">Alternative Number</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              placeholder="Alternative Number"
            />
          </div>

          <div className="w-full">
            <h1 className="p-2 text-gray-400">email</h1>
            <input
              className="bg-slate-800 p-3 pl-5 rounded-full outline-none w-full"
              placeholder="email"
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
