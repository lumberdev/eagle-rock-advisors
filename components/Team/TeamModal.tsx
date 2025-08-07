import React, { useEffect, useRef } from 'react';
import { PageTeamSectionTeamMembers } from '@/tina/__generated__/types';
import Close from '@/public/icons/close.svg';
import Image from 'next/image';
import Linkedin from '@/public/icons/linkedin.svg';
import Link from 'next/link';
import Team_No_Image from '@/public/Team_No_Image.png';

interface TeamModalProps {
  teamMember: PageTeamSectionTeamMembers;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ teamMember, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  // Close modal when clicking outside the modal content
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Check if the click is outside the modal content
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 z-99 h-screen w-screen bg-[#000000BF] backdrop-blur-[25px]" />
      <div
        className="text-eagle-navy fixed inset-0 z-100 flex justify-center overflow-y-auto md:items-center md:overflow-y-hidden md:p-4"
        onClick={handleBackdropClick}
      >
        <div className="absolute flex min-h-screen w-full justify-center px-4 py-[150px] md:static md:h-full md:w-full md:items-center md:px-0 md:py-0">
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative z-10 h-auto w-full bg-white md:h-[80vh] md:h-full md:max-h-[600px] md:max-w-[1050px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-[-65px] right-0 z-[150] flex cursor-pointer items-center justify-center border-1 border-white p-[15px]"
              onClick={() => onClose()}
            >
              <Close className="stroke-white" />
            </button>

            {/* Modal Body */}
            <div className="flex h-full flex-col items-center md:flex-row">
              <Image
                src={teamMember?.image || '/images/Team_No_Image.png'}
                alt={teamMember?.name || 'Photo Coming Soon'}
                width={800}
                height={800}
                className="aspect-square w-full object-cover object-top md:aspect-[unset] md:h-full md:max-h-[40vh] md:max-h-full md:max-w-[375px]"
              />
              <div className="relative flex h-full min-h-[350px] w-full flex-col">
                <div
                  className={`no-scrollbar ${teamMember.bio ? '' : 'md:pb-[50px]'} flex h-full min-h-[350px] flex-col justify-between p-[25px] md:overflow-y-auto md:px-[50px] md:pt-[50px]`}
                >
                  <h2 className="text-eagle-navy text-[24px] leading-loose md:text-[38px]">
                    {teamMember.name}
                  </h2>
                  <div
                    className={`${teamMember.bio ? 'border-b-1' : 'border-t-1 pt-[10px]'} flex items-center justify-between border-[#5B728A40] pb-[10px]`}
                  >
                    <div className="flex flex-col">
                      <span className="font-monaSans text-steel-blue text-sm leading-[160%]">
                        {teamMember.title}
                      </span>
                      <span className="font-monaSans text-steel-blue text-sm leading-[160%]">
                        {teamMember.company}
                      </span>
                    </div>
                    {teamMember?.linkedin && (
                      <Link href={teamMember?.linkedin} target="_blank">
                        <Linkedin />
                      </Link>
                    )}
                  </div>
                  {teamMember.bio && (
                    <div className="mt-[50px]">
                      <div className="font-monaSans pb-[25px] text-xs leading-[160%] whitespace-pre-line md:pb-[150px]">
                        {teamMember.bio}
                      </div>
                    </div>
                  )}
                </div>
                {teamMember.bio && (
                  <div
                    className="pointer-events-none absolute right-0 bottom-0 left-0 hidden h-[150px] md:block"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 75%)',
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamModal;
