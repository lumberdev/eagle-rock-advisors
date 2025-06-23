'use client';
import React from 'react';
import GoogleMapLoader from './GoogleMapLoader';

const ContactUsMap = () => {
  return (
    <div className="relative h-1/2 min-h-[680px] w-full lg:h-full lg:min-h-auto lg:w-1/2">
      <GoogleMapLoader />
      <div className="bg-frosted-white absolute right-0 bottom-0 left-0 m-[25px] p-[25px]">
        <div className="font-dreaming text-eagle-navy flex items-center space-x-2 text-[22px]">
          <div className="font-medium">125 Park Avenue, New York, NY 10017 7th Floor</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMap;
