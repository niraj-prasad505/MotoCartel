import React from 'react'
import AccordionSection from "../AccordionSection";

export default function Security() {
  return (
    <AccordionSection title="Security Info ">


      <div className="gap-8 items-start p-4 px-4 rounded-2xl">

        {/* Input Fields */}
        <div className="p-6">
          <div className="bg-slate-800 rounded-2xl p-4">


            <p className="text-gray-400 mt-2 leading-7">
              Your personal information and payment details are protected using
              industry-standard security measures. Every transaction is processed
              through encrypted connections to ensure a safe shopping experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-700 rounded-xl p-4">
                <h3 className="font-medium text-white">SSL Encryption</h3>
                <p className="text-sm text-gray-400 mt-1">
                  All data is transmitted over secure encrypted connections.
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-4">
                <h3 className="font-medium text-white">Secure Payments</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Payments are processed through trusted and verified gateways.
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-4">
                <h3 className="font-medium text-white">Privacy Protection</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Your personal information is never shared without your consent.
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-4">
                <h3 className="font-medium text-white">Fraud Prevention</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Continuous monitoring helps protect your account and orders.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AccordionSection>
  )
}
