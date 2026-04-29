import { useState } from "react";
import CheckoutStepper from "./CheckoutStepper";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";
import ReviewSection from "./ReviewSection";
import OrderSummary from "./OrderSummary";

const CheckoutLayout = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(null);
  const [payment, setPayment] = useState("");

  return (
    <div className="flex gap-6 p-6">
      
      {/* LEFT SIDE */}
      <div className="flex-1">
        <CheckoutStepper step={step} />

        {step === 1 && (
          <AddressSection
            address={address}
            setAddress={setAddress}
            next={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <ReviewSection
            address={address}
            next={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <PaymentSection
            payment={payment}
            setPayment={setPayment}
          />
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-75">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutLayout;
