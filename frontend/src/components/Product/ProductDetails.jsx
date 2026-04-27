import { Info, CirclePercent, ReceiptIndianRupee } from 'lucide-react';
const ProductDetails = () => {
  return <div>
    <div className="px-3 py-1 border border-gray-800 rounded-full shadow-md w-fit">
      <h1 className="text-xs font-semibold text-gray-700">Helmet</h1>
    </div>
    <div className='mt-4 gap-3 flex flex-col'>
      <h1 className=' text-3xl font-medium text-gray-300'>Grean platimun v3 x</h1>
      <div className='flex'>
        <h1 className=' text-3xl font-normal'>3400</h1>
        <ReceiptIndianRupee className='h-5' />
      </div>
    </div>

    <div className='flex gap-2.5 border w-fit p-1 px-2 rounded-full border-gray-600 ml-3 mt-4'>
      <Info className='h-4' />
      <p className='text-xs'>Order in <span>02.30.25</span> to get next day delavery </p>
    </div>

    <div className="px-5 py-3 bg-linear-to-r from-amber-500 to-amber-700 w-[80%] flex justify-center items-center mt-4 rounded-full">
      <button className="text-white font-semibold">
        Buy Now
      </button>
    </div>
    <div className="px-5 py-3 bg-linear-to-r from-amber-300 to-amber-500 w-[80%] flex justify-center items-center mt-4 rounded-full">
      <button className="text-white font-semibold">
        Add To Cart
      </button>
    </div>
    <div className='mt-3'>
      <h1 className='mt-3 text-2xl'>Discreption</h1>
      <div className='mt-2'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa ad? Molestiae distinctio nam molestias, veniam tenetur deleniti repellendus unde accusantium, voluptate doloremque illum, nisi reprehenderit culpa dicta labore beatae?</h1>
      </div>
    </div>
    <div>
      <h1>Shiping</h1>
      <div className='flex'>
        <div>
          <div className='flex'>
            <div>
              <CirclePercent />
            </div>
            <div>
              <h1>Discount</h1>
              <h1>50%</h1>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CirclePercent />
            </div>
            <div>
              <h1>Discount</h1>
              <h1>50%</h1>
            </div>
          </div>
        </div>
        <div>
          <div className='flex'>
            <div>
              <CirclePercent />
            </div>
            <div>
              <h1>Discount</h1>
              <h1>50%</h1>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CirclePercent />
            </div>
            <div>
              <h1>Discount</h1>
              <h1>50%</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>;
};

export default ProductDetails;