import { ThemeVariationEnum } from '@/enums/ThemeVariationEnum';
import classNames from 'classnames';
import React from 'react';

interface IHeadingProps {
  theme: ThemeVariationEnum;
  title: string;
}

export const themeOptions = {
  [ThemeVariationEnum.ACCENT]: 'heading-accent',
  [ThemeVariationEnum.PRIMARY]: 'heading-primary',
  [ThemeVariationEnum.SECONDARY]: 'heading-secondary',
};

const Heading = ({ theme, title }: IHeadingProps) => {
  return (
    <h3 className={classNames('heading', themeOptions[theme])}>{title}</h3>
  );
};

export default Heading;
