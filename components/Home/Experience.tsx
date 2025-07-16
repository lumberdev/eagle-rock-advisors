import Image from 'next/image';

interface ExperienceData {
  image: string;
  secondImage: string;
  heading: string;
  subheading: string;
  description: string;
}

const Experience = ({ experienceData }: { experienceData: ExperienceData }) => {
  if (!experienceData) return null;

  return (
    <section className="relative mb-[1.25rem] h-[35rem] min-h-[35rem] overflow-hidden md:mb-[3.125rem] md:min-h-[46.875rem]">
      {/* Background Image */}
      <div className="bg-eagle-navy relative h-full">
        {experienceData?.videoFile ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-25"
          >
            <source src={experienceData?.videoFile} type="video/mp4" />
          </video>
        ) : null}
        {/* Content */}
        <div className="relative z-10 container mx-auto flex h-full items-center justify-center px-4 text-white">
          <div className="flex h-full w-full flex-col items-center justify-center text-center">
            <h2 className="font-dreaming mx-auto max-w-[35ch] text-[1.75rem] leading-[160%] font-normal md:max-w-[55ch] md:text-[36px]">
              {experienceData.description}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
