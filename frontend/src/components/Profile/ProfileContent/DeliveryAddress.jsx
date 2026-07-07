import React, { useEffect, useState } from "react";
import AccordionSection from "../AccordionSection";

export default function DeliveryAddress({ address }) {

  return (
    <AccordionSection title="Delivery Address">
      <div className="p-6">
        {address ? (
          <div className="bg-slate-800 rounded-2xl p-6 space-y-4">
            <div>
              <p className="text-gray-400 text-sm">City / District</p>
              <p className="font-medium">{address.city}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Landmark</p>
              <p className="font-medium">{address.landmark}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Pincode</p>
              <p className="font-medium">{address.pincode}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">State</p>
              <p className="font-medium">{address.state}</p>
            </div>
          </div>
        ) : (
          <div className="bg-slate-800 rounded-2xl p-6 text-center">
            <p className="text-gray-400">No address added yet</p>
          </div>
        )}

        <div className="flex gap-4 justify-end mt-6">
          <button className="px-5 py-3 bg-slate-700 rounded-xl">
            Change Address
          </button>

          <button className="px-5 py-3 bg-orange-500 rounded-xl font-semibold">
            Add New Address
          </button>
        </div>
      </div>
    </AccordionSection>
  );
}