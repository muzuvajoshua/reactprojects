import React, { useState } from 'react';

const HomeSectionCard = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1); // Set to 1 when added to cart
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      <div className='h-[13rem] w-[10rem]'>
        <img
          className='object-cover object-top'
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
          alt=""
        />
      </div>

      <div className='p-4'>
        <div className='bg-gray-100 rounded-lg p-3 shadow-md'>
          <h3 className='text-lg font-semibold text-gray-900'>T-shirt</h3>
          <p className='mt-1 text-sm text-gray-700'>100% pure Ugandan Cotton</p>
          <p className='mt-2 text-sm text-gray-800 font-bold'>12,000 UGX</p>
        </div>

        {quantity === 0 ? (
          <button 
            onClick={handleAddToCart} 
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            Add to Cart
          </button>
        ) : (
          <div className='flex items-center mt-4'>
            <button onClick={decreaseQuantity} className='px-2 py-1 bg-gray-300 rounded hover:bg-gray-400'>-</button>
            <span className='mx-2'>{quantity}</span>
            <button onClick={increaseQuantity} className='px-2 py-1 bg-gray-300 rounded hover:bg-gray-400'>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCard;
