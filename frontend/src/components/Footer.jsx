
import { Search, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 px-6 py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* LEFT */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">
            <span className="text-orange-500">N</span>itec.
          </h2>

          <p className="text-sm mb-4">
            Precision gear for riders <br /> who demand performance.
          </p>

          <div className="flex gap-3">
            <Heart size={18} />
            <Heart size={18} />
            <Heart size={18} />
            <Heart size={18} />
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-2">
            Subscribe to our newsletter
          </h3>

          <div className="flex bg-[#121826] rounded-lg overflow-hidden mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 outline-none text-sm w-full"
            />
            <button className="bg-orange-500 px-4">→</button>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#2A3447] mt-8 pt-4 text-xs text-center">
        © 2026 Nitec. All rights reserved.
      </div>
    </footer>
  );
}