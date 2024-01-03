import React from 'react';
import Heading from './common/Heading';
import { ThemeVariationEnum } from '@/enums/ThemeVariationEnum';
import Button from './common/Button';
import Card from './common/Card';

const About = () => {
  return (
    <div className='bg-[#F2F2F2] py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center space-y-8 justify-center'>
          <Heading title='Sobre' theme={ThemeVariationEnum.PRIMARY} />
          <p className='font-semibold text-2xl text-[#2B2B2B] tracking-wider'>
            Sou desenvolvedor FullStack Júnior
          </p>
          <Button theme={ThemeVariationEnum.PRIMARY}>Meu Currículo</Button>
          <div className='grid grid-cols-12 w-full gap-4 justify-between'>
            <h4 className='col-span-4'>Resumo</h4>
            <p className='col-span-8'>
              Lorem Ipsum dolor sit amet,Lorem Ipsum dolor sit amet,Lorem Ipsum
              dolor sit amet ,Lorem Ipsum dolor sit amet,Lorem Ipsum dolor sit
              amet,Lorem Ipsum dolor sit amet,Lorem Ipsum dolor sit amet,Lorem
              Ipsum dolor sit amet ,Lorem Ipsum dolor sit amet,Lorem Ipsumdolor
              sit amet,
            </p>
            <h4 className='col-span-4'>Experiências</h4>
            {/* <HorizontalCard title='' overline='' tags={[]} /> */}
            <div className='col-span-8'>
              <Card image='' title='title' overline='overline' action={<></>} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
