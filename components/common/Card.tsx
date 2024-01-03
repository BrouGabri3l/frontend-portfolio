import React from 'react';

interface ICardProps {
  image: string;
  title: string;
  overline?: string;
  description?: string;
  action: React.ReactNode;
}

const Card = ({ image, title, overline, description, action }: ICardProps) => {
  return (
    <div className='rounded-2xl w-full border-r backdrop-blur-sm bg-gradient-to-br from-[#B7B7B7]/40 from-10% to-60% to-[#B7B7B7]/08 border-b shadow-md border-slate-50/15'>
      {!!image ? <img src={image} alt='' /> : null}
      <div className='p-4'>
        <h4>{title}</h4>
        <span>{overline}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
