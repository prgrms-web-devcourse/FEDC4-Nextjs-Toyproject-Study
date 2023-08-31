import React, { useEffect, useState } from 'react';

interface LodingProps {
  isLoding: boolean;
}
const Loding = ({ isLoding }: LodingProps) => {
  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen z-[250] bg-[rgba(0,0,0,0.5)] ${
        isLoding ? '' : 'hidden'
      }`}
    >
      <div
        className={
          'absolute left-1/2 top-1/2 text-center z-10 translate-y-[-50%] translate-x-[-50%] flex flex-col justify-center items-center'
        }
      >
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75 mx-auto'></div>
        <span className='mt-2 text-center font-dgm text-blue-gray-10 text-xl'>
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loding;
