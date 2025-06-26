import React from 'react';
import { PageTeamSection } from '@/tina/__generated__/types';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = ({
  teamSection,
  isInvestmentTeam = false,
  containerStyles = '',
}: {
  teamSection: PageTeamSection;
  isInvestmentTeam?: boolean;
  containerStyles?: string;
}) => {
  return (
    <div
      className={`relative min-h-screen w-full px-[25px] pb-[50px] lg:px-[50px] ${containerStyles} ${isInvestmentTeam ? 'bg-white' : 'bg-steel-blue'}`}
    >
      {!isInvestmentTeam && (
        <>
          {/* Top 30% - Top Color */}
          <div className="absolute top-0 left-0 h-[25%] max-h-[400px] w-full bg-white lg:h-[40%] lg:max-h-[600px]" />
        </>
      )}
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <h6 className="text-steel-blue font-monaSans mb-[10px] text-sm leading-[140%] tracking-[1.6px] uppercase lg:text-base">
          {teamSection.overline}
        </h6>
        <h1 className="text-eagle-navy text-[28px] leading-[140%] lg:text-[68px] lg:leading-[120%]">
          {teamSection.heading}
        </h1>
        <div className="mt-[100px] flex items-center justify-center">
          <div className="flex w-full max-w-[1050px] flex-wrap justify-between gap-x-[25px] gap-y-[50px] md:justify-center lg:gap-[min(50px,5vw)]">
            {teamSection?.teamMembers?.map((teamMember: any, index: number) => (
              <TeamMemberCard
                key={teamMember.name + index}
                teamMember={teamMember}
                isInvestmentTeam={isInvestmentTeam}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
