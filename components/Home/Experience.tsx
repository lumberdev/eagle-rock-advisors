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
    <section className="relative mx-[1.25rem] mb-[1.25rem] h-[35rem] min-h-[35rem] overflow-hidden md:mx-[3.125rem] md:mb-[3.125rem] md:min-h-[46.875rem]">
      {/* Background Image */}
      <div className="relative h-full">
        <div className="absolute inset-0 -z-10">
          <Image
            src={experienceData.image}
            alt="Experience background"
            fill
            className="z-0 object-cover object-center"
            priority
          />
        </div>

        {/* Content */}
        <div className="z-10 container mx-auto flex h-full items-center justify-center px-4 text-white">
          <div className="flex h-full w-full flex-col items-center justify-center text-center">
            <div className="relative mb-[.625rem] aspect-[3/2] h-full max-h-[100px] lg:max-h-[275px]">
              <Image
                src={experienceData?.secondImage}
                alt="Experience background"
                fill
                className="z-0 object-contain object-center"
                priority
              />
            </div>
            <h3 className="font-dreaming mb-6 text-[1.75rem] leading-[140%] font-normal md:mb-12 md:text-[4.25rem]">
              {experienceData.subheading}
            </h3>
            <p className="font-monaSans mx-auto max-w-[35ch] text-[.875rem] leading-[160%] font-normal md:max-w-[55ch] md:text-[1.375rem]">
              {experienceData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
