import { Info, CirclePercent, IndianRupee, Heart, Percent, Package, CalendarDays, Truck } from 'lucide-react';
const ProductDetails = ({ product }) => {
  if (!product) return <p>Loading...</p>;
  return <div>
    <div className="px-3 py-1 border border-gray-800 rounded-full shadow-md w-fit">
      <h1 className="text-xs font-semibold text-gray-700">{product.category}</h1>
    </div>
    <div className='mt-4 gap-3 flex flex-col'>
      <h1 className=' text-3xl font-medium text-gray-300'>{product.name}</h1>
      <div className='flex'>
        <IndianRupee className='h-5 -mr-1.25' />
        <h1 className=' text-4xl font-normal'>{product.price}</h1>
      </div>
    </div>

    <div className='flex gap-2.5 border w-fit p-1 px-2 rounded-full border-gray-600 mt-4'>
      <Info className='h-4' />
      <p className='text-xs'>Order in <span>02.30.25</span> to get next day delavery </p>
    </div>

    <div className='flex gap-4'>

      <div className="px-5 py-3 bg-linear-to-r from-amber-500 to-amber-600 w-[85%] flex justify-center items-center mt-4 rounded-full">
        <div>
          <button className="text-white font-semibold">
            Buy Now
          </button>
        </div>
      </div>
      <div className="bg-linear-to-r from-amber-500 to-amber-600 w-12 h-12 flex justify-center items-center mt-4 rounded-full">
        <button className="flex justify-center items-center">
          <Heart className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
    
    <div className='mt-5'>
      <h1 className=' text-xl'>Shiping</h1>
      <div className="flex justify-between gap-8 text-white w-[95%] mt-5 border rounded-xl p-7 border-gray-800">

        {/* Left Column */}
        <div className="flex flex-col gap-6">

          <div className="flex items-center gap-3">
            <Percent className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-400">Discount</p>
              <p className="font-semibold">{product.discount}% Off</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-400">Delivery Time</p>
              <p className="font-semibold">3-4 Working Days</p>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">

          <div className="flex items-center gap-3">
            <Package className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-400">Package Type</p>
              <p className="font-semibold">Regular Package</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Truck className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-400">Estimated Arrival</p>
              <p className="font-semibold">10-12 Oct 2024</p>
            </div>
          </div>

        </div>

      </div>

    </div>
    <div className='mt-3'>
      <h1 className='mt-3 text-xl'>Discreption</h1>
      <div className='mt-2 text-base'>
        <h1>{product.description}</h1>
      </div>
    </div>
  </div>;
};

export default ProductDetails;