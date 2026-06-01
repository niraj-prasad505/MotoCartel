import { useState } from "react";
import CheckoutStepper from "./CheckoutStepper";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";
import ReviewSection from "./ReviewSection";
import OrderSummary from "./OrderSummary";
import { useEffect } from "react";
import { getUserAddress, updateUserAddress } from "../../services/user.service";

const CheckoutLayout = ({ product }) => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(null);
  const [payment, setPayment] = useState("");

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

  const saveAddress = async (newAddress) => {
    try {
      await updateUserAddress(newAddress);
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };
  

  return (
    <div className="flex gap-6 px-15 py-6 bg-[#020617] text-white">
      
      {/* LEFT SIDE */}
      <div className="flex-1">
        <CheckoutStepper step={step} />

        {step === 1 && (
          <AddressSection
            address={address}
            setAddress={setAddress}
            next={() => setStep(2)}
            saveAddress={saveAddress}
          />
        )}

        {step === 2 && (
          <ReviewSection
            address={address}
            product={product}
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
      <div className="w-110 mt-14">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutLayout;
