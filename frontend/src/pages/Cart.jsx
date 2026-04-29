import React from "react";
Trash2
import { Trash2 } from "lucide-react";
const Cart = () => {
  const items = [
    {
      id: 1,
      name: "Furniture Set",
      color: "Coffee",
      price: 437,
      qty: 4,
      img: "https://dainese-cdn.thron.com/delivery/public/image/dainese/e6489803-6529-4717-8329-d757268bd417/4awwa8/std/600x760/ridingstyle_agv_600x760_2024_touring",
    },
    {
      id: 2,
      name: "Vintage Dining Set",
      color: "Brown",
      price: 945,
      qty: 2,
      img: "https://planetdsg.com/cdn/shop/files/dsg_hydro_v2_riding_gloves_01.jpg?v=1762336883&width=1200",
    },
    {
      id: 3,
      name: "Studio Chair",
      color: "Deep Green",
      price: 597,
      qty: 7,
      img: "https://www.highnoteperformance.com/cdn/shop/files/Product_Section_Cover_Helmet.jpg?v=1711363623&width=2500",
    },
  ];

  return (
    <div className="bg-[#0b1220] text-white">
      <h1 className=" text-4xl ml-[5%] p-7">Your Shopping Cart</h1>
      <div className="bg-[#0b1220]  text-white h-fit p-15 flex flex-col lg:flex-row gap-6 pt-2">
        {/* LEFT - CART ITEMS */}
        <div className="flex-1 border border-gray-700 rounded-xl p-4 shadow-lg">


          {/* Header */}
          <div className="grid grid-cols-4 text-gray-400 text-sm mb-4">
            <p>Product</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Total</p>
            <p className="text-center">Action</p>
          </div>

          {/* Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center border-t border-gray-800 py-4"
            >
              {/* Product */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt=""
                  className="w-19 h-19 rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-semibold text-2xl">{item.name}</h2>
                  <p className="text-gray-400 text-sm">
                    Colour: {item.color}
                  </p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex justify-center">
                <div className="flex items-center border border-gray-600 rounded-full px-3 py-1 gap-3">
                  <button>-</button>
                  <span>{item.qty}</span>
                  <button>+</button>
                </div>
              </div>

              {/* Price */}
              <p className="text-center font-medium">
                ₹{item.price}
              </p>

              {/* Delete */}
              <div className="text-center cursor-pointer hover:text-red-500 justify-center items-center flex">
                <Trash2 />
              </div>
            </div>
          ))}

          {/* Button */}
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
            Update Cart
          </button>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="w-full h-fit lg:w-88 border border-gray-700 rounded-xl p-10 shadow-lg space-y-4">

          <h2 className="text-lg font-semibold">Order Summary</h2>

          {/* Coupon */}
          <div className="flex gap-2 -ml-1 text-white">
            <input
              type="text"
              placeholder="Discount voucher"
              className="flex-1 bg-black border border-gray-600 rounded-full px-4 py-2 outline-none"
            />
            <button className="border border-gray-600 px-2 rounded-full bg-amber-600">
              Apply
            </button>
          </div>

          {/* Pricing */}
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>₹2000</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Discount (10%)</span>
              <span>- ₹1000</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Delivery fee</span>
              <span>₹50</span>
            </div>
          </div>

          <hr className="border-gray-700" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹1850</span>
          </div>

          <p className="text-gray-400 text-xs">
            90 Day Limited Warranty against manufacturer defects
          </p>

          <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-gray-300 transition">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;