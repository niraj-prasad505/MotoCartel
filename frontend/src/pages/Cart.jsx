import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";


import {
  getcartData,
  increaseQuantity,
  decreaseQuantity,
} from "../services/cart";

const Cart = () => {
  const [items, setItems] = useState([]);

  // Fetch cart data
  const fetchCart = async () => {
    try {
      const { data } = await getcartData();

      console.log(data);

      setItems(data.cart || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Increase quantity
 const increaseQ = async (productId) => {

  try {

    const cartq = await increaseQuantity(productId);

    setItems(prev =>
      prev.map(item =>
        item.product._id === productId
          ? {
              ...item,
              quantity: cartq.data.quantity
            }
          : item
      )
    );

  } catch (err) {

    console.log(err);

  }
};

  // Decrease quantity
  const decreaseQ = async (productId) => {
    try {

    const cartq = await decreaseQuantity(productId);
      
    setItems(prev =>
      prev.map(item =>
        item.product._id === productId
          ? {
              ...item,
              quantity: cartq.data.quantity,
              
            }
          : item
      )
    );

  } catch (err) {

    console.log(err);

  }
  };

  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      {/* Top */}
      <div className="flex justify-between items-center py-9 px-19">
        <h1 className="text-4xl">Your Shopping Cart</h1>

        <Link to="/orders">
          <button className="bg-gray-400 border-2 p-3 rounded-full">
            My Orders
          </button>
        </Link>
      </div>

      <div className="bg-[#0b1220] text-white h-fit p-15 flex flex-col lg:flex-row gap-6 pt-2">

        {/* LEFT SIDE */}
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
              key={item._id}
              className="grid grid-cols-4 items-center border-t border-gray-800 py-4"
            >

              {/* Product */}
              <div className="flex items-center gap-3">

                <img
                  src={item.product?.images?.[0]}
                  alt="product"
                  className="w-19 h-19 rounded-lg object-cover"
                />

                <div>
                  <h2 className="font-semibold text-2xl">
                    {item.product?.name}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Colour: {item.product?.colour}
                  </p>
                </div>

              </div>

              {/* Quantity */}
              <div className="flex justify-center">
                <div className="flex items-center border border-gray-600 rounded-full px-3 py-1 gap-3">

                  <button
                    className="px-4 py-1 text-2xl justify-center items-center flex rounded-full"
                    onClick={() => decreaseQ(item.product?._id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="px-4 py-1 text-2xl justify-center items-center flex rounded-full"
                    onClick={() => increaseQ(item.product?._id)}
                  >
                    +
                  </button>

                </div>
              </div>

              {/* Price */}
              <p className="text-center font-medium">
                ₹{item.product?.price * item.quantity}
              </p>

              {/* Delete */}
              <div className="text-center cursor-pointer hover:text-red-500 justify-center items-center flex">
                <Trash2 />
              </div>

            </div>
          ))}

          {/* Update Button */}
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
            Update Cart
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full h-fit lg:w-88 border border-gray-700 rounded-xl p-10 shadow-lg space-y-4">

          <h2 className="text-lg font-semibold">
            Order Summary
          </h2>

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