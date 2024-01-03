import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <Link href='#'>Sobre</Link>
      <Link href='#'>Resumo</Link>
      <Link href='#'>Projetos</Link>
    </nav>
  );
};

export default Navigation;
