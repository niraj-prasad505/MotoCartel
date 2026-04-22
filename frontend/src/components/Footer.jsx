import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 px-6 py-10 mt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* content */}
      </div>

      <div className="border-t border-[#2A3447] mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs">
          © 2026 Nitec. All rights reserved.
        </p>

        <div className="flex gap-3 mt-2 md:mt-0 text-sm">
          <span className="bg-[#121826] px-2 py-1 rounded">VISA</span>
          <span className="bg-[#121826] px-2 py-1 rounded">PayPal</span>
          <span className="bg-[#121826] px-2 py-1 rounded">GPay</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;