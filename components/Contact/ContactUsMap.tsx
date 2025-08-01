'use client';
import React from 'react';
import GoogleMapLoader from './GoogleMapLoader';

const ContactUsMap = () => {
  const handleMarkerClick = () => {
    const url = `https://maps.app.goo.gl/yk4ghVLHb57AAf766`;
    window.open(url, '_blank');
  };
  return (
    <div className="relative order-2 aspect-[1/1] w-full lg:order-1 lg:aspect-auto lg:h-1/2 lg:h-full lg:min-h-[680px] lg:min-h-auto lg:w-1/2">
      <GoogleMapLoader handleMarkerClick={handleMarkerClick} />
      <div
        className="bg-frosted-white absolute right-0 bottom-0 left-0 m-[25px] cursor-pointer p-[25px]"
        onClick={handleMarkerClick}
      >
        <div className="font-makarony text-eagle-navy flex max-w-[20ch] items-center space-x-2 text-[22px] lg:max-w-full">
          <div className="font-medium">125 Park Avenue, 7th Floor, New York, NY 10017</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMap;
