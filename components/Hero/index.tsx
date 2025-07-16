import Image from 'next/image';
import React from 'react';

const Hero = ({
  heroData,
  heroContainerStyles = '',
}: {
  heroData: any;
  heroContainerStyles?: string;
}) => {
  const { backgroundImage, backgroundImageMobile, videoFile, heading, subheading, cta } = heroData;

  return (
    <section
      className={`relative flex h-screen max-h-[600px] w-full items-end justify-start text-center md:max-h-[780px] ${heroContainerStyles}`}
    >
      {videoFile ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
      ) : null}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt="Hero"
          fill
          className="z-0 hidden object-cover object-center md:block"
        />
      ) : null}
      {backgroundImageMobile ? (
        <Image
          src={backgroundImageMobile}
          alt="Hero"
          fill
          className="z-0 object-cover object-center md:hidden"
        />
      ) : null}

      {/* Full Height & Width Gradient Overlay */}
      <div
        className="absolute inset-0 z-5 h-full w-full"
        style={{
          background:
            'linear-gradient(180deg, rgba(26, 42, 66, 0) 0%, rgba(26, 42, 66, 0.5) 50%, #1A2A42 100%)',
        }}
      />
      <div className="z-10 p-[25px] md:p-[50px]">
        {heading && (
          <h4 className="w-full max-w-[18ch] text-left md:max-w-full md:text-[3.25rem]">
            {heading}
          </h4>
        )}
      </div>
    </section>
  );
};

export default Hero;
