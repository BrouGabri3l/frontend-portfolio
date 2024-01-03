import React from 'react';

interface IHorizontalCardProps {
  title: string;
  overline?: string;
  description?: string;
  tags?: string[];
}

const HorizontalCard = ({
  title,
  overline,
  description,
}: IHorizontalCardProps) => {
  return (
    <div className='rounded-2xl w-full border-r backdrop-blur-sm bg-gradient-to-br from-[#B7B7B7]/10 from-10% to-60% to-[#B7B7B7]/08 border-b shadow-md border-slate-50/15'>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-lg text-[#090909]'>{title}</h4>
          <span className='font-medium text-xs text-[#808080]'>{overline}</span>
        </div>
        <p className='font-medium text-[#333333]'>{description}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
