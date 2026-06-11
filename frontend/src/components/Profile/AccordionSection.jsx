import { useState } from "react";
import { ChevronDown, ChevronUp, UserPen, LocateFixed, Lock, Phone } from "lucide-react";

const AccordionSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className=" border border-slate-800 rounded-3xl">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-3"
      >
        <div className="flex items-center gap-3">
          {title === "Personal Info " && <UserPen height={24} width={24} />}
          {title === "Delivery Info " && <LocateFixed height={24} width={24} />}
          {title === "Security Info " && <Lock height={24} width={24} />}
          {title === "Contact Info " && <Phone height={24} width={24} />}
          <h2 className="font-semibold text-lg">{title}</h2>
          


        </div>

        {open ? <ChevronUp height={24} width={24} /> : <ChevronDown height={24} width={24} />}
      </button>

      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
};

export default AccordionSection;