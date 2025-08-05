import Image from 'next/image';
import React, { useEffect } from 'react';
import AddIcon from '@/public/icons/Add_Icon.svg';
import TeamModal from './TeamModal';
import { PageTeamSectionTeamMembers } from '@/tina/__generated__/types';
import { useState } from 'react';

const TeamMemberCard = ({
  teamMember,
  isInvestmentTeam = false,
}: {
  teamMember: PageTeamSectionTeamMembers;
  isInvestmentTeam?: boolean;
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  return (
    <div
      className={`xs:w-[45%] xs:min-w-[min(225px,40vw)] flex w-[90vw] max-w-[320px] flex-col items-center ${isInvestmentTeam ? 'text-eagle-navy lg:w-[20%]' : 'text-white lg:w-[30%]'}`}
    >
      <Image
        src={teamMember?.image || '/images/Team_No_Image.png'}
        alt={teamMember?.name || 'Photo Coming Soon'}
        width={600}
        height={600}
        className="mb-[10px] w-full max-w-[400px]"
      />
      <div className="flex w-full flex-col items-start justify-start">
        <h6
          className={`mb-[10px] text-[16px] leading-[140%] uppercase lg:text-[24px] ${isInvestmentTeam ? 'text-eagle-navy' : 'text-white'}`}
        >
          {teamMember.name}
        </h6>
        <div
          className={`flex w-full items-start justify-between border-t-1 ${isInvestmentTeam ? 'border-[#5B728A40]' : 'border-[#EAEFF440]'} pt-[10px]`}
        >
          <div className="flex w-full flex-col items-start justify-start">
            <span className="font-monaSans w-full text-[9px] leading-[160%] lg:text-xs">
              {teamMember.title}
            </span>
            <span className="font-monaSans w-full text-[9px] leading-[160%] lg:text-xs">
              {teamMember.company}
            </span>
          </div>
          <AddIcon
            className={`mt-[5px] w-[20px] cursor-pointer lg:mt-[10px] ${isInvestmentTeam ? 'stroke-eagle-navy' : 'stroke-white'}`}
            onClick={() => setModalOpen(true)}
          />
        </div>
      </div>
      {modalOpen && <TeamModal teamMember={teamMember} onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default TeamMemberCard;
