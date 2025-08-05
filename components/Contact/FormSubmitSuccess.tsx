import React from 'react';
import Image from 'next/image';

const FormSubmitSuccess = () => {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center gap-[35px] text-white lg:h-full">
      <Image
        src="/icons/email_sent.svg"
        alt="Email Sent"
        width={100}
        height={100}
        className="opacity-25"
      />
      <div>
        <h4 className="mb-[10px] text-center text-[24px] leading-[140%]">Message Sent</h4>
        <p className="font-monaSans text-center text-[15px] leading-[160%] lg:text-[1rem]">
          Thank you for reaching out. {<br />}We'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default FormSubmitSuccess;
