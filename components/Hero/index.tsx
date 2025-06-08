import React from 'react';

const Hero = ({ heroData }: { heroData: any }) => {
  const { videoFile, heading, subheading, cta } = heroData;

  return (
    <section className="relative h-screen flex items-end justify-start text-center">
      {videoFile ? (
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={videoFile} type="video/mp4" />
        </video>
      ) : null}

      <div className="z-10 p-[25px] md:p-[50px]">
        {heading && (
          <h4 className="font-normal leading-[140%] tracking-[0] font-dreaming w-full max-w-[18ch] md:max-w-full text-[38px] lg:text-[52px] text-white text-left">
            {heading}
          </h4>
        )}
        {subheading && <p className="">{subheading}</p>}
        {cta && <button className="b">{cta}</button>}
      </div>
    </section>
  );
};

export default Hero;
