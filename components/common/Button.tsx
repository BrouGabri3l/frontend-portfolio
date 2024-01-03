import { ThemeVariationEnum } from '@/enums/ThemeVariationEnum';
import classNames from 'classnames';
import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ThemeVariationEnum;
  children: React.ReactNode;
}

const buttonVariations = {
  [ThemeVariationEnum.PRIMARY]: 'button-primary',
  [ThemeVariationEnum.SECONDARY]: 'button-secondary',
  [ThemeVariationEnum.ACCENT]: 'button-accent',
};

const Button = ({ theme, children, ...props }: IButtonProps) => {
  return (
    <button
      className={classNames('button', buttonVariations[theme])}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
